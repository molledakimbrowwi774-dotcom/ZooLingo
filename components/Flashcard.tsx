
import React, { useState } from 'react';
import { FlashcardData } from '../types';
import { SpeakerWaveIcon, HeartIcon } from '@heroicons/react/24/solid';
import { HeartIcon as HeartOutline } from '@heroicons/react/24/outline';
import { AnimalIcons } from './AnimalIcons';

interface FlashcardProps {
  data: FlashcardData;
  isSaved: boolean;
  onToggleSave: (id: string) => void;
}

const Flashcard: React.FC<FlashcardProps> = ({ data, isSaved, onToggleSave }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const playAudio = (text: string, accent: 'US' | 'UK') => {
    // 1. Cancel any existing speech to prevent overlapping
    window.speechSynthesis.cancel();

    // 2. Create utterance
    const utterance = new SpeechSynthesisUtterance(text);
    
    // 3. Select Voice Logic
    const voices = window.speechSynthesis.getVoices();
    let selectedVoice = null;

    if (accent === 'US') {
      utterance.lang = 'en-US';
      selectedVoice = voices.find(v => v.lang === 'en-US' && v.name.includes('Google')) 
                   || voices.find(v => v.lang === 'en-US');
    } else {
      utterance.lang = 'en-GB';
      selectedVoice = voices.find(v => v.lang === 'en-GB' && v.name.includes('Google')) 
                   || voices.find(v => v.lang === 'en-GB');
    }

    if (selectedVoice) {
        utterance.voice = selectedVoice;
    }

    // 4. Set properties for clarity
    utterance.rate = 0.9; 
    utterance.pitch = 1.0;
    utterance.volume = 1.0;

    // 5. Speak
    window.speechSynthesis.speak(utterance);
  };

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const IconComponent = AnimalIcons[data.iconId] || AnimalIcons['lion_cool'];

  return (
    <div 
      className="group h-96 w-full [perspective:1000px] cursor-pointer"
      onClick={handleFlip}
    >
      <div className={`relative h-full w-full transition-all duration-500 card-preserve-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
        
        {/* FRONT SIDE */}
        <div className={`absolute inset-0 h-full w-full rounded-3xl shadow-xl card-back-hidden flex flex-col items-center justify-center border-4 border-white overflow-hidden ${data.bgColor}`}>
          
          <div className="relative w-48 h-48 mb-4 flex items-center justify-center p-2">
             <IconComponent className="w-full h-full drop-shadow-md" />
          </div>

          <div className="font-bold text-gray-600 text-lg uppercase tracking-wider bg-white/50 px-4 py-1 rounded-full backdrop-blur-sm z-10">
             Tap to Flip
          </div>
          <div className="absolute top-4 right-4 text-white/80 font-bold text-6xl opacity-20 select-none">?</div>
        </div>

        {/* BACK SIDE */}
        <div className={`absolute inset-0 h-full w-full rounded-3xl shadow-xl card-back-hidden rotate-y-180 bg-white border-4 border-orange-200 flex flex-col p-4 overflow-y-auto overflow-x-hidden`}
             onClick={(e) => e.stopPropagation()} 
        >
          {/* Header: Type and Save */}
          <div className="flex justify-between items-start mb-1">
             <span className="text-xs font-bold uppercase text-orange-400 bg-orange-50 px-2 py-1 rounded-md">
                {data.type}
             </span>
             <button 
                onClick={() => onToggleSave(data.id)}
                className="p-1 rounded-full hover:bg-red-50 transition-colors"
             >
                {isSaved ? <HeartIcon className="w-6 h-6 text-red-500" /> : <HeartOutline className="w-6 h-6 text-gray-300" />}
             </button>
          </div>

          {/* Main Word */}
          <div className="text-center mb-2">
            <h3 className="text-2xl font-extrabold text-gray-800 break-words leading-tight">{data.english}</h3>
            <p className="text-lg text-gray-500 font-medium mt-1">{data.chinese}</p>
          </div>

          {/* Pronunciation */}
          <div className="bg-gray-50 rounded-xl p-2 mb-2 space-y-1">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-blue-500 w-4">US</span>
                <span className="text-xs font-mono text-gray-600">/{data.us_ipa}/</span>
              </div>
              <button 
                onClick={() => playAudio(data.english, 'US')}
                className="p-1 bg-blue-100 text-blue-600 rounded-full hover:bg-blue-200 active:scale-95 transition-transform"
              >
                <SpeakerWaveIcon className="w-3 h-3" />
              </button>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-red-500 w-4">UK</span>
                <span className="text-xs font-mono text-gray-600">/{data.uk_ipa}/</span>
              </div>
              <button 
                onClick={() => playAudio(data.english, 'UK')}
                className="p-1 bg-red-100 text-red-600 rounded-full hover:bg-red-200 active:scale-95 transition-transform"
              >
                <SpeakerWaveIcon className="w-3 h-3" />
              </button>
            </div>
          </div>

          {/* Examples */}
          <div className="mt-auto space-y-2">
             {data.examples.map((ex, idx) => (
               <div key={idx} className="bg-yellow-50 p-2 rounded-lg border border-yellow-100">
                  <div className="flex justify-between items-start">
                    <p className="text-xs text-gray-800 font-medium leading-snug">{ex.en}</p>
                    <button 
                      onClick={() => playAudio(ex.en, 'US')}
                      className="ml-1 text-yellow-500 hover:text-yellow-600 shrink-0"
                    >
                      <SpeakerWaveIcon className="w-3 h-3" />
                    </button>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">{ex.zh}</p>
               </div>
             ))}
          </div>
          
          <button 
            onClick={handleFlip} 
            className="mt-2 w-full py-2 bg-gray-100 hover:bg-gray-200 text-gray-500 rounded-lg text-xs font-bold"
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default Flashcard;
