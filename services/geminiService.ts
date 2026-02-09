
import { WordData } from "../types";
import { searchLocalDictionary, getRandomGlobalWords } from "../utils/dictionary";

// Simple ID generator
const generateId = () => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

// PURE OFFLINE GENERATOR
export const generateVocabulary = async (scene: string): Promise<WordData[]> => {
  console.log("Generating offline content for:", scene);

  // Simulate a short "thinking" delay for better UX
  await new Promise(resolve => setTimeout(resolve, 800));

  // 1. Try Precise & Fuzzy Local Search
  const localData = searchLocalDictionary(scene);
  
  if (localData && localData.length > 0) {
    return localData.map(item => ({ ...item, id: generateId() }));
  }

  // 2. Fallback: Global random mix
  console.log("Scene not found, serving random vocabulary mix.");
  const randomMix = getRandomGlobalWords(20);
  
  return randomMix.map(item => ({ ...item, id: generateId() }));
};
