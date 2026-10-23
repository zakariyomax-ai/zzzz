export interface Slide {
  id: number;
  sectionNumber: string;
  sectionTitle: string;
  slideTitle: string;
  subtitle: string;
  bulletPoints: string[];
  keyQuote?: string;
  quoteAuthor?: string;
  symbolicMeaning?: string;
  speakerNotes: string;
  tag: string;
}

export interface EssaySection {
  title: string;
  content: string;
  highlight?: string;
  marginNote?: string;
}

export interface SymbolItem {
  id: string;
  title: string;
  uzbekTitle: string;
  symbolism: string;
  description: string;
  quote: string;
  image: string;
  keyAspects: string[];
}

export interface PromptItem {
  id: string;
  title: string;
  category: 'visual' | 'video' | 'poster' | '3d' | 'cover' | 'ui' | 'academic';
  targetAI: string;
  promptText: string;
  aspectRatio: string;
  description: string;
  sampleImage?: string;
  tags: string[];
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}
