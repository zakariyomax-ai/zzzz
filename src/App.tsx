import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { HemingwayBio } from './components/HemingwayBio';
import { BookShowcase } from './components/BookShowcase';
import { BookReaderModal } from './components/BookReaderModal';
import { PresentationViewer } from './components/PresentationViewer';
import { AnalyticalEssay } from './components/AnalyticalEssay';
import { SymbolismExplorer } from './components/SymbolismExplorer';
import { PromptStudio } from './components/PromptStudio';
import { InteractiveQuiz } from './components/InteractiveQuiz';
import { Footer } from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [isBookModalOpen, setIsBookModalOpen] = useState<boolean>(false);

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    if (sectionId === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#070c18] text-slate-100 font-sans selection:bg-amber-600 selection:text-white">
      {/* Top Navigation Bar adhering to Top Bar Contract */}
      <Header 
        activeSection={activeSection} 
        onNavigate={handleNavigate} 
        onOpenBookReader={() => setIsBookModalOpen(true)}
      />

      <main className="flex-1">
        {/* Hero Section with Kitobni O'qish (PDF) */}
        <Hero onNavigate={handleNavigate} />

        {/* Ernest Heminguey: Hayoti, Tarixiy Prototip (Gregorio Fuentes) va Darslik Tahlili */}
        <HemingwayBio />

        {/* Kitob Mutolaasi — Rasmiy PDF Ko'rgazmasi */}
        <BookShowcase onOpenModal={() => setIsBookModalOpen(true)} />

        {/* 1. Presentation Slaydlari (Maktab & Universitet) */}
        <PresentationViewer />

        {/* 2. 500+ So'zlik Tahliliy Insho & Badiiy Esse */}
        <AnalyticalEssay />

        {/* 3. Ramzlar & Obrazlar Galereyasi (Semiotika & Aysberg) */}
        <SymbolismExplorer />

        {/* 4. AI Prompt Studiyasi (Midjourney, DALL-E, Sora, Runway, 3D, Poster) */}
        <PromptStudio />

        {/* 5. Interaktiv Bilim Testi (10 ta savol) */}
        <InteractiveQuiz />
      </main>

      {/* Embedded Book Reader Modal */}
      <BookReaderModal 
        isOpen={isBookModalOpen} 
        onClose={() => setIsBookModalOpen(false)} 
      />

      {/* Editorial Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
