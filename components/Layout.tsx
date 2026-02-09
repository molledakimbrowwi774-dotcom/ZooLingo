
import React from 'react';
import { Tab } from '../types';
import { BookOpenIcon, AcademicCapIcon, SparklesIcon, HomeIcon, ClipboardDocumentCheckIcon } from '@heroicons/react/24/solid';

interface LayoutProps {
  children: React.ReactNode;
  activeTab: Tab;
  setActiveTab: (tab: Tab) => void;
  showHomeButton?: boolean;
  onGoHome?: () => void;
}

const Layout: React.FC<LayoutProps> = ({ 
  children, 
  activeTab, 
  setActiveTab, 
  showHomeButton = false,
  onGoHome 
}) => {
  return (
    <div className="min-h-screen flex flex-col bg-yellow-50 pb-24">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50 safe-top">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-center relative">
          
          {/* Home Button (Top Left) */}
          {showHomeButton && onGoHome && (
            <button 
              onClick={onGoHome}
              className="absolute left-4 p-2 text-gray-400 hover:text-yellow-500 hover:bg-yellow-50 rounded-full transition-all"
              aria-label="Back to Home"
            >
              <HomeIcon className="w-6 h-6" />
            </button>
          )}

          <div className="flex items-center gap-2">
            <SparklesIcon className="w-8 h-8 text-yellow-400" />
            <h1 className="text-2xl font-extrabold text-gray-800 tracking-tight">ZooLingo</h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow max-w-5xl mx-auto w-full px-4 py-6">
        {children}
      </main>

      {/* Bottom Nav */}
      <nav className="fixed bottom-4 left-4 right-4 max-w-lg mx-auto bg-white rounded-2xl shadow-2xl border border-gray-100 p-2 flex justify-around z-50 safe-bottom">
        <button
          onClick={() => setActiveTab('learn')}
          className={`flex-1 flex flex-col items-center justify-center py-2 rounded-xl transition-all duration-300 ${
            activeTab === 'learn' 
              ? 'bg-yellow-100 text-yellow-700 shadow-inner transform scale-105' 
              : 'text-gray-400 hover:bg-gray-50'
          }`}
        >
          <AcademicCapIcon className="w-6 h-6 mb-1" />
          <span className="text-xs font-bold">Learn</span>
        </button>
        
        <button
          onClick={() => setActiveTab('vocab')}
          className={`flex-1 flex flex-col items-center justify-center py-2 rounded-xl transition-all duration-300 ${
            activeTab === 'vocab' 
              ? 'bg-orange-100 text-orange-700 shadow-inner transform scale-105' 
              : 'text-gray-400 hover:bg-gray-50'
          }`}
        >
          <BookOpenIcon className="w-6 h-6 mb-1" />
          <span className="text-xs font-bold">Vocab</span>
        </button>

        <button
          onClick={() => setActiveTab('quiz')}
          className={`flex-1 flex flex-col items-center justify-center py-2 rounded-xl transition-all duration-300 ${
            activeTab === 'quiz' 
              ? 'bg-green-100 text-green-700 shadow-inner transform scale-105' 
              : 'text-gray-400 hover:bg-gray-50'
          }`}
        >
          <ClipboardDocumentCheckIcon className="w-6 h-6 mb-1" />
          <span className="text-xs font-bold">Test</span>
        </button>
      </nav>
    </div>
  );
};

export default Layout;
