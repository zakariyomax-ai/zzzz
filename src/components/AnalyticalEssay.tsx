import React, { useState, useEffect } from 'react';
import { 
  essayTitle, 
  essaySubtitle, 
  essayWordCount, 
  essayReadingTime, 
  essaySections 
} from '../data/essayData';
import { 
  Copy, 
  Check, 
  Download, 
  Play, 
  Pause, 
  RotateCcw, 
  BookOpen, 
  Bookmark,
  Share2
} from 'lucide-react';

export const AnalyticalEssay: React.FC = () => {
  const [copied, setCopied] = useState<boolean>(false);
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);
  const [activeSpeechIndex, setActiveSpeechIndex] = useState<number>(-1);
  const [speechRate, setSpeechRate] = useState<number>(1);

  // Stop speech synthesis on unmount
  useEffect(() => {
    return () => {
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  const handleCopyEssay = () => {
    const fullText = `${essayTitle}
${essaySubtitle}
Hajmi: ${essayWordCount} ta so'z · ${essayReadingTime}

${essaySections.map((s) => `${s.title}\n\n${s.content}\n\nEslatma: ${s.marginNote || ''}\n`).join('\n---\n\n')}`;

    navigator.clipboard.writeText(fullText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadEssay = () => {
    const fullText = `# ${essayTitle}
## ${essaySubtitle}
Hajmi: ${essayWordCount} ta so'z · Mutolaa vaqti: ${essayReadingTime}

=======================================================

${essaySections.map((sec) => `### ${sec.title}\n\n${sec.content}\n\n> **Muhim Fikr**: ${sec.highlight || ''}\n> *Tahliliy Izoh*: ${sec.marginNote || ''}\n`).join('\n\n-------------------------------------------------------\n\n')}

Xulosa: Ernest Xemingueyning «Chol va dengiz» asari inson ruhiyatining yengilmasligiga qo'yilgan abadiy haykaldir.
`;

    const blob = new Blob([fullText], { type: 'text/markdown;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Chol_va_Dengiz_Tahliliy_Insho.md`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const handleReadAloud = () => {
    if (!('speechSynthesis' in window)) {
      alert("Kechirasiz, brauzeringiz ovozli o'qish funksiyasini qo'llab-quvvatlamaydi.");
      return;
    }

    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      setActiveSpeechIndex(-1);
      return;
    }

    const allText = essaySections.map((s) => `${s.title}. ${s.content}`).join(' ');
    const utterance = new SpeechSynthesisUtterance(allText);
    utterance.rate = speechRate;
    
    // Check for Uzbek or Turkish or generic language voice
    const voices = window.speechSynthesis.getVoices();
    const preferredVoice = voices.find((v) => v.lang.startsWith('uz') || v.lang.startsWith('tr')) || voices[0];
    if (preferredVoice) {
      utterance.voice = preferredVoice;
    }

    utterance.onend = () => {
      setIsSpeaking(false);
      setActiveSpeechIndex(-1);
    };

    utterance.onerror = () => {
      setIsSpeaking(false);
      setActiveSpeechIndex(-1);
    };

    window.speechSynthesis.speak(utterance);
    setIsSpeaking(true);
  };

  return (
    <section id="essay" className="py-16 bg-[#070c18] border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Editorial Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 pb-6 border-b border-slate-800/80">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-amber-500 uppercase tracking-widest font-sans mb-2">
              <span>02. Adabiy-Falsafiy Tahlil</span>
              <span aria-hidden="true">·</span>
              <span>Badiiy Insho & Esse</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
              500+ So'zlik Tahliliy Insho
            </h2>
            <div className="flex items-center gap-3 text-xs text-slate-400 mt-2 font-mono">
              <span className="text-amber-400 font-semibold">{essayWordCount} ta so'z</span>
              <span aria-hidden="true">·</span>
              <span>{essayReadingTime}</span>
              <span aria-hidden="true">·</span>
              <span>Akademik talablarga mos</span>
            </div>
          </div>

          {/* Action Ribbon */}
          <div className="flex flex-wrap items-center gap-2.5">
            <button
              onClick={handleReadAloud}
              className={`flex items-center gap-2 px-3.5 py-2 text-xs font-semibold rounded-lg cursor-pointer transition-colors border ${
                isSpeaking
                  ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-md'
                  : 'bg-slate-800 text-slate-200 border-slate-700 hover:bg-slate-700'
              }`}
            >
              {isSpeaking ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 text-amber-400" />}
              <span>{isSpeaking ? "O'qishni To'xtatish" : "Ovozli Tinglash"}</span>
            </button>

            <button
              onClick={handleCopyEssay}
              className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-slate-300 hover:text-white bg-slate-800/80 border border-slate-700 rounded-lg cursor-pointer transition-colors"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? "Nusxalandi" : "Inshoni Nusxalash"}</span>
            </button>

            <button
              onClick={handleDownloadEssay}
              className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-amber-400 hover:text-amber-300 bg-amber-500/10 border border-amber-500/30 rounded-lg cursor-pointer transition-colors"
            >
              <Download className="w-4 h-4" />
              <span>Yuklab Olish (.md)</span>
            </button>
          </div>
        </div>

        {/* Editorial Article Layout (Pattern D: Asymmetric Reading Canvas with Margin Notes) */}
        <div className="bg-[#0b1220] border border-slate-800/90 rounded-2xl p-6 sm:p-12 shadow-2xl">
          
          {/* Article Header Lockup */}
          <div className="text-center max-w-3xl mx-auto mb-12 pb-8 border-b border-slate-800/80">
            <div className="text-xs uppercase tracking-widest text-amber-400 font-mono mb-3">
              Monografik Esse
            </div>
            <h1 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-wide leading-tight">
              {essayTitle}
            </h1>
            <p className="font-serif italic text-base sm:text-lg text-slate-300 mt-3 leading-relaxed">
              {essaySubtitle}
            </p>
          </div>

          {/* Essay Body Columns */}
          <div className="space-y-12">
            {essaySections.map((section, idx) => (
              <div 
                key={idx}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-6 border-t first:border-t-0 border-slate-800/60"
              >
                {/* Left/Main Column: Narrative Text with Drop Cap on first section */}
                <div className="lg:col-span-8 space-y-4">
                  <h3 className="font-display text-lg sm:text-xl font-bold text-amber-300/95">
                    {section.title}
                  </h3>
                  
                  <p className={`font-serif text-base sm:text-lg text-slate-200 leading-[1.8] text-justify ${
                    idx === 0 
                      ? 'first-letter:text-5xl first-letter:font-serif first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:text-amber-400' 
                      : ''
                  }`}>
                    {section.content}
                  </p>

                  {/* Highlight Callout */}
                  {section.highlight && (
                    <div className="my-4 py-3 px-4 rounded-lg bg-slate-900/80 border border-slate-800 text-sm font-serif italic text-amber-200/90">
                      «{section.highlight}»
                    </div>
                  )}
                </div>

                {/* Right Column: Margin Note / Curatorial Annotation */}
                <div className="lg:col-span-4 lg:pt-8">
                  {section.marginNote && (
                    <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800/80 text-xs text-slate-400 leading-relaxed font-sans">
                      <div className="flex items-center gap-1.5 text-amber-400/90 font-mono font-semibold uppercase tracking-wider text-[11px] mb-1.5">
                        <Bookmark className="w-3.5 h-3.5" />
                        <span>Tahliliy Izoh</span>
                      </div>
                      <p className="font-serif text-slate-300 text-sm">
                        {section.marginNote}
                      </p>
                    </div>
                  )}
                </div>

              </div>
            ))}
          </div>

          {/* Closing Editorial Colophon */}
          <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
            <span className="font-serif italic">
              Ernest Xemingueyning «Chol va dengiz» (The Old Man and the Sea) asari asosidagi tahliliy tadqiqot.
            </span>
            <div className="flex items-center gap-4">
              <span>Gavana · 1952</span>
              <span aria-hidden="true">·</span>
              <span>Stokgolm · 1954</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
