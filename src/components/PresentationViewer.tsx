import React, { useState, useEffect } from 'react';
import { presentationSlides } from '../data/presentationData';
import { Slide } from '../types';
import { 
  ChevronLeft, 
  ChevronRight, 
  Maximize2, 
  Minimize2, 
  Copy, 
  Check, 
  Download, 
  FileText,
  MessageSquare
} from 'lucide-react';

export const PresentationViewer: React.FC = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [showNotes, setShowNotes] = useState<boolean>(true);
  const [copied, setCopied] = useState<boolean>(false);

  const currentSlide: Slide = presentationSlides[currentSlideIndex];

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        handlePrev();
      } else if (e.key === 'Escape' && isFullscreen) {
        setIsFullscreen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlideIndex, isFullscreen]);

  const handleNext = () => {
    setCurrentSlideIndex((prev) => (prev < presentationSlides.length - 1 ? prev + 1 : 0));
  };

  const handlePrev = () => {
    setCurrentSlideIndex((prev) => (prev > 0 ? prev - 1 : presentationSlides.length - 1));
  };

  const handleCopySlide = () => {
    const text = `${currentSlide.sectionTitle} - ${currentSlide.slideTitle}
${currentSlide.subtitle}

Asosiy nuqtalar:
${currentSlide.bulletPoints.map((b) => `• ${b}`).join('\n')}

Iqtibos: "${currentSlide.keyQuote || ''}" (${currentSlide.quoteAuthor || ''})
Ramziy ma'no: ${currentSlide.symbolicMeaning || ''}

Ma'ruzachi izohi: ${currentSlide.speakerNotes}`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadFullPresentation = () => {
    let fullText = `# CHOL VA DENGIZ (ERNEST XEMINGUEY)
Akademik Loyiha va Taqdimot Slaydlari To'liq Matni

=======================================================
`;

    presentationSlides.forEach((slide, index) => {
      fullText += `\n[SLAYD ${index + 1} / ${presentationSlides.length}] - ${slide.sectionNumber}. ${slide.sectionTitle}
MAVZU: ${slide.slideTitle}
KICHIK MAVZU: ${slide.subtitle}
TEG: ${slide.tag}

ASOSIY MAZMUN:
${slide.bulletPoints.map((p, i) => `  ${i + 1}. ${p}`).join('\n')}

MUHIM IQTIBOS:
  "${slide.keyQuote}" — ${slide.quoteAuthor}

RAMZIY MA'NO & SIMVOLIZM:
  ${slide.symbolicMeaning}

MA'RUZACHI IZOHLARI (SPEAKER NOTES):
  ${slide.speakerNotes}

-------------------------------------------------------\n`;
    });

    const blob = new Blob([fullText], { type: 'text/markdown;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Chol_va_Dengiz_Taqdimot_Rejasi.md`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <section id="presentation" className="py-16 bg-[#090f1d] border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-amber-500 uppercase tracking-widest font-sans mb-2">
              <span>01. Akademik Modul</span>
              <span aria-hidden="true">·</span>
              <span>Maktab & Universitet Loyihasi</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
              Taqdimot & Slaydlar Tuzilmasi
            </h2>
            <p className="font-serif text-slate-400 text-base mt-2 max-w-2xl">
              Xemingueyning «Chol va dengiz» qissasi bo'yicha 5 ta asosiy bo'limdan iborat tayyor slaydlar va ma'ruzachi eslatmalari to'plami.
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={handleCopySlide}
              className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 border border-slate-700 rounded-lg cursor-pointer transition-colors"
              title="Ushbu slayd matnini nusxalash"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? "Nusxalandi" : "Slaydni Nusxalash"}</span>
            </button>

            <button
              onClick={handleDownloadFullPresentation}
              className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-amber-400 hover:text-amber-300 bg-amber-500/10 border border-amber-500/30 rounded-lg cursor-pointer transition-colors"
              title="Barcha slaydlarni yuklab olish"
            >
              <Download className="w-4 h-4" />
              <span>Barcha Slaydlarni Yuklab Olish</span>
            </button>
          </div>
        </div>

        {/* Slide Category Quick Selector */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6 scrollbar-none text-xs">
          {presentationSlides.map((slide, idx) => {
            const isActive = idx === currentSlideIndex;
            return (
              <button
                key={slide.id}
                onClick={() => setCurrentSlideIndex(idx)}
                className={`px-3 py-2 rounded-lg whitespace-nowrap transition-all cursor-pointer font-medium border text-left ${
                  isActive
                    ? 'bg-amber-500/20 text-amber-300 border-amber-500/50 shadow-sm'
                    : 'bg-slate-900/60 text-slate-400 border-slate-800 hover:border-slate-700 hover:text-slate-200'
                }`}
              >
                <span className="font-mono text-amber-500/70 mr-1.5">0{idx + 1}</span>
                <span>{slide.tag}</span>
              </button>
            );
          })}
        </div>

        {/* Main Slide Card Viewport */}
        <div className={`relative bg-gradient-to-b from-slate-900 to-[#070c17] border border-slate-800 rounded-2xl shadow-2xl transition-all duration-300 ${
          isFullscreen ? 'fixed inset-0 z-50 p-8 flex flex-col justify-between overflow-y-auto' : 'p-6 sm:p-10'
        }`}>
          
          {/* Slide Top Navigation Strip */}
          <div className="flex items-center justify-between border-b border-slate-800/80 pb-4 mb-6">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono font-bold text-amber-400 bg-amber-950/60 border border-amber-800/60 px-2 py-0.5 rounded">
                Bo'lim {currentSlide.sectionNumber}
              </span>
              <span className="text-xs text-slate-400 font-medium">
                {currentSlide.sectionTitle}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-slate-400 tabular-nums">
                Slayd {currentSlideIndex + 1} / {presentationSlides.length}
              </span>
              
              <button
                onClick={() => setIsFullscreen(!isFullscreen)}
                className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded cursor-pointer transition-colors"
                title={isFullscreen ? "Kichraytirish" : "To'liq ekranda ochish"}
              >
                {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Slide Content Area */}
          <div className="space-y-6">
            
            {/* Title Block */}
            <div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-wide">
                {currentSlide.slideTitle}
              </h3>
              <p className="font-serif italic text-amber-400/90 text-base sm:text-lg mt-1">
                {currentSlide.subtitle}
              </p>
            </div>

            {/* Main 2-Column Split: Bullet Points & Quote/Symbolism */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Column: Bullet Points */}
              <div className="lg:col-span-7 space-y-3.5">
                <div className="text-xs uppercase font-sans font-semibold tracking-wider text-slate-400">
                  Asosiy Tahliliy Fikrlar
                </div>
                <div className="space-y-3">
                  {currentSlide.bulletPoints.map((point, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-slate-900/70 border border-slate-800/80">
                      <span className="font-mono text-xs text-amber-400 shrink-0 mt-0.5 w-5 h-5 flex items-center justify-center rounded bg-amber-950/40 border border-amber-800/40">
                        {index + 1}
                      </span>
                      <p className="text-sm font-sans text-slate-200 leading-relaxed">
                        {point}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Key Quote & Symbolic Meaning */}
              <div className="lg:col-span-5 space-y-4">
                
                {/* Pull Quote Box */}
                {currentSlide.keyQuote && (
                  <div className="p-5 rounded-xl bg-slate-950/70 border border-slate-800">
                    <div className="text-xs uppercase tracking-widest text-amber-500/80 font-sans font-semibold mb-2">
                      Asardan Iqtibos
                    </div>
                    <blockquote className="font-serif italic text-base sm:text-lg text-slate-100 leading-relaxed">
                      «{currentSlide.keyQuote}»
                    </blockquote>
                    {currentSlide.quoteAuthor && (
                      <div className="text-xs font-sans text-slate-400 mt-2 text-right">
                        — {currentSlide.quoteAuthor}
                      </div>
                    )}
                  </div>
                )}

                {/* Symbolic Meaning Card */}
                {currentSlide.symbolicMeaning && (
                  <div className="p-5 rounded-xl bg-slate-950/50 border border-slate-800">
                    <div className="text-xs uppercase tracking-widest text-slate-400 font-sans font-semibold mb-2">
                      Falsafiy & Ramziy Mohiyat
                    </div>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {currentSlide.symbolicMeaning}
                    </p>
                  </div>
                )}

              </div>
            </div>

            {/* Collapsible Speaker Notes */}
            <div className="pt-4 border-t border-slate-800/80">
              <div className="flex items-center justify-between mb-2">
                <button
                  onClick={() => setShowNotes(!showNotes)}
                  className="flex items-center gap-1.5 text-xs font-semibold text-amber-400 hover:text-amber-300 cursor-pointer"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>{showNotes ? "Ma'ruzachi Eslatmasini Yashirish" : "Ma'ruzachi Eslatmasini Ko'rish"}</span>
                </button>
                <span className="text-[11px] text-slate-500 font-mono">Klaviatura: [← / →] o'tish</span>
              </div>

              {showNotes && (
                <div className="p-3.5 rounded-lg bg-amber-950/20 border border-amber-900/30 text-xs text-amber-200/90 leading-relaxed font-sans">
                  <span className="font-semibold text-amber-400 mr-1">Taqdimotchi uchun maslahat:</span>
                  {currentSlide.speakerNotes}
                </div>
              )}
            </div>

          </div>

          {/* Slide Navigation Bottom Bar */}
          <div className="flex items-center justify-between pt-6 mt-6 border-t border-slate-800/80">
            <button
              onClick={handlePrev}
              className="flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium text-xs sm:text-sm transition-colors cursor-pointer border border-slate-700"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Oldingi Slayd</span>
            </button>

            {/* Slide Dots */}
            <div className="hidden sm:flex items-center gap-1.5">
              {presentationSlides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentSlideIndex(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${
                    i === currentSlideIndex ? 'bg-amber-400 w-6' : 'bg-slate-700 hover:bg-slate-600'
                  }`}
                  aria-label={`Slayd ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold text-xs sm:text-sm transition-colors cursor-pointer shadow"
            >
              <span>Keyingi Slayd</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
