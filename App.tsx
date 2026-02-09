
import React, { useState, useEffect } from 'react';
import Layout from './components/Layout';
import Flashcard from './components/Flashcard';
import VocabularyItem from './components/VocabularyItem';
import QuizModule from './components/QuizModule';
import { generateVocabulary } from './services/geminiService';
import { FlashcardData, Tab, WordData } from './types';
import { getRandomElement, PASTEL_COLORS, ANIMAL_ICON_IDS } from './utils/uiUtils';
import { getScenarioSuggestions } from './utils/dictionary';
import { MagnifyingGlassIcon, ArrowPathIcon, FaceFrownIcon } from '@heroicons/react/24/outline';
import { LionCool } from './components/AnimalIcons';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>('learn');
  const [sceneInput, setSceneInput] = useState('');
  const [suggestions, setSuggestions] = useState<{ key: string, label: string }[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [currentScene, setCurrentScene] = useState('');
  
  // State for the generated cards
  const [generatedCards, setGeneratedCards] = useState<FlashcardData[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // State for saved vocabulary (persisted in localStorage)
  const [savedVocab, setSavedVocab] = useState<FlashcardData[]>([]);

  // Load saved vocabulary on mount
  useEffect(() => {
    const saved = localStorage.getItem('zoolingo_vocab');
    if (saved) {
      setSavedVocab(JSON.parse(saved));
    }
  }, []);

  // Save to localStorage whenever savedVocab changes
  useEffect(() => {
    localStorage.setItem('zoolingo_vocab', JSON.stringify(savedVocab));
  }, [savedVocab]);

  // Handle Search Input Change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setSceneInput(val);
    
    if (val.trim().length > 0) {
      const sugs = getScenarioSuggestions(val);
      setSuggestions(sugs);
      setShowSuggestions(true);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  };

  const handleSuggestionClick = (key: string, label: string) => {
    setSceneInput(label); // Display the friendly label
    setShowSuggestions(false);
    handleGenerate(key); // Use the internal key to search
  };

  const handleGenerate = async (sceneToUse: string = sceneInput) => {
    if (!sceneToUse.trim()) return;
    
    // Close suggestions
    setShowSuggestions(false);

    setIsLoading(true);
    setError(null);
    setCurrentScene(sceneToUse);
    // Switch to Learn tab if not already
    setActiveTab('learn');

    try {
      const words: WordData[] = await generateVocabulary(sceneToUse);
      
      // Enhance words with UI data (icons, colors)
      const flashcards: FlashcardData[] = words.map((word) => {
        // FIXED: Use getRandomElement for true randomization instead of sequential ID
        const iconId = getRandomElement(ANIMAL_ICON_IDS);
        return {
          ...word,
          iconId,
          bgColor: getRandomElement(PASTEL_COLORS),
          isFlipped: false
        };
      });

      setGeneratedCards(flashcards);
    } catch (err) {
      setError("Oops! My animal friends couldn't find words for that. Try again!");
    } finally {
      setIsLoading(false);
    }
  };

  const handleToggleSave = (card: FlashcardData) => {
    const isAlreadySaved = savedVocab.some(item => item.id === card.id);
    if (isAlreadySaved) {
      setSavedVocab(prev => prev.filter(item => item.id !== card.id));
    } else {
      setSavedVocab(prev => [card, ...prev]);
    }
  };

  const handleRemoveFromVocab = (id: string) => {
    setSavedVocab(prev => prev.filter(item => item.id !== id));
  };

  // Logic for the "Home/Back" button
  const handleGoHome = () => {
    setActiveTab('learn');
    setGeneratedCards([]);
    setCurrentScene('');
    setSceneInput('');
    setSuggestions([]);
    setIsLoading(false);
    setError(null);
  };

  const isCardSaved = (id: string) => savedVocab.some(item => item.id === id);

  // Determine if Home button should be shown
  const showHomeButton = activeTab === 'vocab' || activeTab === 'quiz' || (activeTab === 'learn' && generatedCards.length > 0);

  return (
    <Layout 
      activeTab={activeTab} 
      setActiveTab={setActiveTab}
      showHomeButton={showHomeButton}
      onGoHome={handleGoHome}
    >
      
      {/* --- LEARN TAB CONTENT --- */}
      {activeTab === 'learn' && (
        <div className="space-y-8 animate-fadeIn">
          
          {/* Input Section - Only show if no cards generated */}
          {generatedCards.length === 0 && !isLoading && (
            <div className="bg-white p-6 rounded-3xl shadow-lg border-b-4 border-yellow-200 relative">
              <label className="block text-gray-600 text-sm font-bold mb-2 ml-1">
                你想学习什么场景？
              </label>
              <div className="flex gap-2 relative z-20">
                <input
                  type="text"
                  value={sceneInput}
                  onChange={handleInputChange}
                  onFocus={() => { if(suggestions.length > 0) setShowSuggestions(true); }}
                  onBlur={() => { setTimeout(() => setShowSuggestions(false), 200); }} 
                  onKeyDown={(e) => e.key === 'Enter' && handleGenerate()}
                  placeholder="例如：医院、餐厅、动物园..."
                  className="flex-1 bg-gray-50 border-2 border-gray-200 text-gray-800 text-lg rounded-2xl focus:ring-4 focus:ring-yellow-100 focus:border-yellow-400 block w-full p-4 outline-none transition-all"
                  autoComplete="off"
                />
                <button
                  onClick={() => handleGenerate()}
                  disabled={isLoading || !sceneInput}
                  className="bg-yellow-400 hover:bg-yellow-500 disabled:opacity-50 text-white font-bold rounded-2xl px-6 transition-colors shadow-md flex items-center justify-center"
                >
                  <MagnifyingGlassIcon className="w-8 h-8" />
                </button>
              </div>

              {/* Suggestions Dropdown */}
              {showSuggestions && suggestions.length > 0 && (
                <div className="absolute left-6 right-6 top-[calc(100%-10px)] bg-white border-2 border-yellow-100 rounded-b-2xl shadow-xl z-10 overflow-hidden pt-4 max-h-60 overflow-y-auto">
                  <ul>
                    {suggestions.map((sug) => (
                      <li 
                        key={sug.key}
                        onClick={() => handleSuggestionClick(sug.key, sug.label)}
                        className="px-4 py-3 hover:bg-yellow-50 cursor-pointer text-gray-700 font-medium border-b border-gray-50 last:border-0 flex items-center justify-between"
                      >
                        <span>{sug.label}</span>
                        <ArrowPathIcon className="w-4 h-4 text-gray-300" />
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <p className="text-xs text-gray-400 mt-2 ml-1">试试："机场"、"超市"、"问路"</p>
            </div>
          )}

          {/* Results Area */}
          <div>
            {isLoading && (
               <div className="flex flex-col items-center justify-center py-20 text-gray-400">
                  <div className="w-32 h-32 mb-4 relative flex items-center justify-center">
                    <div className="absolute inset-0 bg-yellow-100 rounded-full animate-ping opacity-20"></div>
                    <LionCool className="w-full h-full animate-bounce text-yellow-500" />
                  </div>
                  <p className="text-lg font-bold">正在生成可爱的单词卡...</p>
               </div>
            )}

            {!isLoading && error && (
               <div className="flex flex-col items-center justify-center py-20 text-red-400">
                  <FaceFrownIcon className="w-16 h-16 mb-2" />
                  <p className="text-center px-6">{error}</p>
               </div>
            )}

            {!isLoading && !error && generatedCards.length > 0 && (
              <>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-black text-gray-700">
                    <span className="text-yellow-500 mr-2">#</span>
                    {currentScene}
                  </h2>
                  <button
                    onClick={() => handleGenerate(currentScene)}
                    className="flex items-center gap-2 text-sm font-bold text-orange-500 bg-orange-50 px-4 py-2 rounded-full hover:bg-orange-100 transition-colors"
                  >
                    <ArrowPathIcon className="w-4 h-4" />
                    Refresh Words
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {generatedCards.map((card) => (
                    <Flashcard
                      key={card.id}
                      data={card}
                      isSaved={isCardSaved(card.id)}
                      onToggleSave={() => handleToggleSave(card)}
                    />
                  ))}
                </div>
              </>
            )}

            {!isLoading && !error && generatedCards.length === 0 && (
              <div className="flex flex-col items-center justify-center py-12 opacity-50">
                 <div className="w-48 h-48 mb-6 relative flex items-center justify-center">
                   <LionCool className="w-full h-full drop-shadow-2xl" />
                 </div>
                 <p className="text-gray-500 font-bold text-lg">准备好了！请在上方输入场景。</p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* --- VOCABULARY TAB CONTENT --- */}
      {activeTab === 'vocab' && (
        <div className="space-y-6 animate-fadeIn">
          <div className="bg-white p-6 rounded-3xl shadow-lg border-b-4 border-orange-200 mb-6">
             <h2 className="text-3xl font-black text-gray-800 text-center">My Vocabulary</h2>
             <p className="text-center text-gray-500 mt-2 font-medium">
               {savedVocab.length} {savedVocab.length === 1 ? 'word' : 'words'} collected
             </p>
          </div>

          {savedVocab.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 text-gray-400 text-center">
              <div className="text-6xl mb-4">🐼</div>
              <p className="text-xl font-bold">这里空空如也！</p>
              <p className="text-sm mt-2">快去学习页面收藏一些单词吧。</p>
              <button 
                onClick={() => setActiveTab('learn')}
                className="mt-6 bg-yellow-400 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-yellow-500 transition-transform active:scale-95"
              >
                开始学习
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {savedVocab.map((card) => (
                <VocabularyItem
                  key={card.id}
                  data={card}
                  onRemove={handleRemoveFromVocab}
                />
              ))}
            </div>
          )}
        </div>
      )}

      {/* --- QUIZ TAB CONTENT --- */}
      {activeTab === 'quiz' && (
        <QuizModule savedVocab={savedVocab} />
      )}

    </Layout>
  );
};

export default App;
