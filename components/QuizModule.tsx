
import React, { useState, useRef } from 'react';
import { FlashcardData, WordData } from '../types';
import { getRandomGlobalWords } from '../utils/dictionary';
import { ArrowPathIcon, CheckCircleIcon } from '@heroicons/react/24/solid';
import { LionCool, OwlDr, RabbitGirl } from './AnimalIcons';

interface QuizModuleProps {
  savedVocab: FlashcardData[];
}

interface Question {
  target: WordData;
  options: WordData[];
  correctIndex: number;
  mode: 'EN_TO_ZH' | 'ZH_TO_EN';
}

const QuizModule: React.FC<QuizModuleProps> = ({ savedVocab }) => {
  const [gameState, setGameState] = useState<'intro' | 'playing' | 'finished'>('intro');
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  // Audio Context for generating sound effects without external files
  const audioContextRef = useRef<AudioContext | null>(null);

  const playSound = (type: 'correct' | 'wrong') => {
    if (!audioContextRef.current) {
      audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
    const ctx = audioContextRef.current;
    if (ctx.state === 'suspended') ctx.resume();

    const oscillator = ctx.createOscillator();
    const gainNode = ctx.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(ctx.destination);

    if (type === 'correct') {
      // High pitch "Ding"
      oscillator.type = 'sine';
      oscillator.frequency.setValueAtTime(800, ctx.currentTime);
      oscillator.frequency.exponentialRampToValueAtTime(1200, ctx.currentTime + 0.1);
      gainNode.gain.setValueAtTime(0.1, ctx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.5);
      oscillator.start();
      oscillator.stop(ctx.currentTime + 0.5);
    } else {
      // Low pitch "Buzz"
      oscillator.type = 'sawtooth';
      oscillator.frequency.setValueAtTime(150, ctx.currentTime);
      oscillator.frequency.linearRampToValueAtTime(100, ctx.currentTime + 0.3);
      gainNode.gain.setValueAtTime(0.1, ctx.currentTime);
      gainNode.gain.linearRampToValueAtTime(0.01, ctx.currentTime + 0.3);
      oscillator.start();
      oscillator.stop(ctx.currentTime + 0.3);
    }
  };

  const generateQuiz = () => {
    // 1. Build the word pool
    // Priority: Saved Vocab. If < 20, fill with Global Words.
    let pool: WordData[] = [...savedVocab];
    if (pool.length < 20) {
      const needed = 20 - pool.length;
      const fillers = getRandomGlobalWords(needed);
      pool = [...pool, ...fillers];
    }

    // 2. Generate 10 Questions
    const newQuestions: Question[] = [];
    const questionCount = 10;

    for (let i = 0; i < questionCount; i++) {
      // Pick random target
      const targetIndex = Math.floor(Math.random() * pool.length);
      const target = pool[targetIndex];

      // Pick 3 unique distractors
      const distractors: WordData[] = [];
      const distractorIndices = new Set([targetIndex]);
      
      while (distractors.length < 3) {
        const dIndex = Math.floor(Math.random() * pool.length);
        if (!distractorIndices.has(dIndex)) {
          distractors.push(pool[dIndex]);
          distractorIndices.add(dIndex);
        }
      }

      // Random Mode
      const mode = Math.random() > 0.5 ? 'EN_TO_ZH' : 'ZH_TO_EN';

      // Assemble Options
      const options = [...distractors];
      const correctPos = Math.floor(Math.random() * 4); // 0 to 3
      options.splice(correctPos, 0, target);

      newQuestions.push({
        target,
        options,
        correctIndex: correctPos,
        mode
      });
    }

    setQuestions(newQuestions);
    setGameState('playing');
    setCurrentIndex(0);
    setScore(0);
    setSelectedOption(null);
  };

  const handleOptionClick = (index: number) => {
    if (selectedOption !== null) return; // Prevent double click

    const currentQ = questions[currentIndex];
    const correct = index === currentQ.correctIndex;

    setSelectedOption(index);
    
    if (correct) {
      setScore(s => s + 1);
      playSound('correct');
    } else {
      playSound('wrong');
    }

    // Auto advance
    setTimeout(() => {
      if (currentIndex < questions.length - 1) {
        setCurrentIndex(c => c + 1);
        setSelectedOption(null);
      } else {
        setGameState('finished');
      }
    }, 1200);
  };

  // --- RENDER HELPERS ---

  if (gameState === 'intro') {
    return (
      <div className="flex flex-col items-center justify-center py-12 px-4 text-center animate-fadeIn">
        <div className="w-40 h-40 mb-6 bg-green-100 rounded-full flex items-center justify-center p-4 shadow-inner">
          <OwlDr className="w-full h-full drop-shadow-md" />
        </div>
        <h2 className="text-3xl font-black text-gray-800 mb-2">Pop Quiz!</h2>
        <p className="text-gray-500 mb-8 max-w-xs mx-auto">
          Test your memory. We'll use your saved words first, then mix in some new ones!
        </p>
        <button
          onClick={generateQuiz}
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-10 rounded-2xl shadow-lg transform transition-all active:scale-95 text-lg flex items-center gap-2"
        >
          <CheckCircleIcon className="w-6 h-6" />
          Start 10 Questions
        </button>
      </div>
    );
  }

  if (gameState === 'finished') {
    const isGoodScore = score >= 7;
    return (
      <div className="flex flex-col items-center justify-center py-12 px-4 text-center animate-fadeIn">
        <div className={`w-40 h-40 mb-6 rounded-full flex items-center justify-center p-4 shadow-inner ${isGoodScore ? 'bg-yellow-100' : 'bg-blue-100'}`}>
          {isGoodScore ? (
            <LionCool className="w-full h-full animate-bounce" />
          ) : (
            <RabbitGirl className="w-full h-full" />
          )}
        </div>
        <h2 className="text-4xl font-black text-gray-800 mb-2">{score} / 10</h2>
        <p className="text-lg font-bold text-gray-600 mb-8">
          {isGoodScore ? 'Amazing Job! 🌟' : 'Keep Practicing! 💪'}
        </p>
        <button
          onClick={() => setGameState('intro')}
          className="bg-orange-400 hover:bg-orange-500 text-white font-bold py-3 px-8 rounded-full shadow-lg transform transition-all active:scale-95 flex items-center gap-2"
        >
          <ArrowPathIcon className="w-5 h-5" />
          Try Again
        </button>
      </div>
    );
  }

  // PLAYING STATE
  const q = questions[currentIndex];
  const progressPercent = ((currentIndex + 1) / questions.length) * 100;

  return (
    <div className="max-w-md mx-auto h-full flex flex-col animate-fadeIn">
      {/* Progress Bar */}
      <div className="w-full bg-gray-200 rounded-full h-2.5 mb-6">
        <div 
          className="bg-green-500 h-2.5 rounded-full transition-all duration-300" 
          style={{ width: `${progressPercent}%` }}
        ></div>
      </div>

      <div className="text-center mb-2">
        <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Question {currentIndex + 1} / 10</span>
      </div>

      {/* Question Card */}
      <div className="bg-white rounded-3xl shadow-xl p-8 mb-8 text-center border-b-4 border-green-200 flex items-center justify-center min-h-[160px]">
        <h3 className="text-3xl font-black text-gray-800 break-words">
          {q.mode === 'EN_TO_ZH' ? q.target.english : q.target.chinese}
        </h3>
      </div>

      {/* Options Grid */}
      <div className="grid grid-cols-1 gap-3">
        {q.options.map((opt, idx) => {
          let btnClass = "bg-white border-2 border-gray-100 hover:border-green-200 text-gray-700"; // Default
          
          if (selectedOption !== null) {
            if (idx === q.correctIndex) {
              btnClass = "bg-green-500 border-green-600 text-white shadow-md transform scale-105"; // Correct (always highlight)
            } else if (idx === selectedOption && idx !== q.correctIndex) {
              btnClass = "bg-red-500 border-red-600 text-white opacity-80"; // Wrong selection
            } else {
              btnClass = "bg-gray-100 text-gray-400 opacity-50"; // Others dimmed
            }
          }

          return (
            <button
              key={idx}
              disabled={selectedOption !== null}
              onClick={() => handleOptionClick(idx)}
              className={`p-4 rounded-xl font-bold text-lg transition-all duration-200 shadow-sm ${btnClass}`}
            >
              {q.mode === 'EN_TO_ZH' ? opt.chinese : opt.english}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default QuizModule;
