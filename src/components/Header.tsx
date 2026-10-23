import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Sliders, BookOpen, ExternalLink } from 'lucide-react';
import { oceanSound } from '../utils/oceanAudio';

interface HeaderProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenBookReader?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ activeSection, onNavigate, onOpenBookReader }) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(0.5);
  const [showVolumePopup, setShowVolumePopup] = useState<boolean>(false);

  useEffect(() => {
    setIsPlaying(oceanSound.getIsPlaying());
  }, []);

  const handleToggleSound = () => {
    const newState = oceanSound.toggle();
    setIsPlaying(newState);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVol = parseFloat(e.target.value);
    setVolume(newVol);
    oceanSound.setVolume(newVol);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#070d18]/90 backdrop-blur-md border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-6 h-18 flex items-center justify-between gap-8">
        
        {/* Zone 1: Single text element wordmark */}
        <button
          onClick={() => onNavigate('hero')}
          className="text-left group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded"
        >
          <span className="font-display text-xl font-bold tracking-wider text-slate-100 group-hover:text-amber-400 transition-colors whitespace-nowrap shrink-0">
            CHOL VA DENGIZ
          </span>
          <span className="hidden sm:inline-block ml-2 text-xs font-sans text-amber-500/80 font-medium">
            · Ernest Xeminguey
          </span>
        </button>

        {/* Zone 2: Clean single-line text navigation links */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-300">
          <button
            onClick={() => onNavigate('hemingway')}
            className={`whitespace-nowrap shrink-0 transition-colors hover:text-amber-400 cursor-pointer ${
              activeSection === 'hemingway' ? 'text-amber-400 font-semibold' : 'text-slate-300'
            }`}
          >
            Heminguey Hayoti
          </button>

          <a
            href="https://arm.navoiy-uni.uz/wp-content/uploads/2019/04/ernest_xeminguey_chol_va_dengiz_lot_ziyouz_com.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-amber-400 hover:text-amber-300 font-semibold transition-colors whitespace-nowrap shrink-0 px-2 py-1 rounded bg-amber-500/10 border border-amber-500/20 hover:border-amber-500/40"
            title="Navoiy davlat universiteti elektron kutubxonasi PDF nusxasi"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Kitobni O'qish (PDF)</span>
            <ExternalLink className="w-3 h-3 opacity-70" />
          </a>

          <button
            onClick={() => onNavigate('presentation')}
            className={`whitespace-nowrap shrink-0 transition-colors hover:text-amber-400 cursor-pointer ${
              activeSection === 'presentation' ? 'text-amber-400 font-semibold' : 'text-slate-300'
            }`}
          >
            Loyiha Taqdimoti
          </button>

          <button
            onClick={() => onNavigate('essay')}
            className={`whitespace-nowrap shrink-0 transition-colors hover:text-amber-400 cursor-pointer ${
              activeSection === 'essay' ? 'text-amber-400 font-semibold' : 'text-slate-300'
            }`}
          >
            Tahliliy Insho
          </button>

          <button
            onClick={() => onNavigate('symbolism')}
            className={`whitespace-nowrap shrink-0 transition-colors hover:text-amber-400 cursor-pointer ${
              activeSection === 'symbolism' ? 'text-amber-400 font-semibold' : 'text-slate-300'
            }`}
          >
            Ramzlar & Obrazlar
          </button>

          <button
            onClick={() => onNavigate('prompts')}
            className={`whitespace-nowrap shrink-0 transition-colors hover:text-amber-400 cursor-pointer ${
              activeSection === 'prompts' ? 'text-amber-400 font-semibold' : 'text-slate-300'
            }`}
          >
            AI Prompt Studiyasi
          </button>

          <button
            onClick={() => onNavigate('quiz')}
            className={`whitespace-nowrap shrink-0 transition-colors hover:text-amber-400 cursor-pointer ${
              activeSection === 'quiz' ? 'text-amber-400 font-semibold' : 'text-slate-300'
            }`}
          >
            Bilim Testi
          </button>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="relative flex items-center gap-2 shrink-0">
          <button
            onClick={handleToggleSound}
            aria-label={isPlaying ? "Dengiz shovqinini to'xtatish" : "Okean shovqinini yoqish"}
            className={`flex items-center gap-2 px-3.5 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap shrink-0 border ${
              isPlaying
                ? 'bg-amber-600/20 text-amber-300 border-amber-500/40 shadow-sm'
                : 'bg-slate-800/80 text-slate-300 border-slate-700/80 hover:bg-slate-700'
            }`}
          >
            {isPlaying ? (
              <>
                <Volume2 className="w-4 h-4 text-amber-400" />
                <span>Okean Shovqini: Yoqilgan</span>
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
              </>
            ) : (
              <>
                <VolumeX className="w-4 h-4 text-slate-400" />
                <span>Okean Shovqini</span>
              </>
            )}
          </button>

          {/* Volume quick dropdown button */}
          <button
            onClick={() => setShowVolumePopup(!showVolumePopup)}
            className="p-2 text-slate-400 hover:text-slate-200 bg-slate-800/80 border border-slate-700/80 rounded-lg cursor-pointer"
            title="Ovoz balandligi"
          >
            <Sliders className="w-3.5 h-3.5" />
          </button>

          {showVolumePopup && (
            <div className="absolute right-0 top-12 p-3 bg-slate-900 border border-slate-700 rounded-lg shadow-xl w-48 z-50">
              <div className="flex justify-between items-center text-xs text-slate-300 mb-2">
                <span>Shovqin kuchi</span>
                <span className="font-mono">{Math.round(volume * 100)}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="1"
                step="0.05"
                value={volume}
                onChange={handleVolumeChange}
                className="w-full accent-amber-500 cursor-pointer"
              />
            </div>
          )}
        </div>

      </div>
    </header>
  );
};
