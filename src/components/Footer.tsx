import React from 'react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#050912] border-t border-slate-800 text-slate-400 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-8 border-b border-slate-800/80">
          
          {/* Brand lockup */}
          <div className="space-y-2">
            <div className="font-display text-lg font-bold text-white tracking-wide">
              CHOL VA DENGIZ
            </div>
            <p className="font-serif italic text-sm text-slate-400 max-w-md">
              «Inson mag'lubiyat uchun yaratilmagan. Uni yo'q qilish mumkin, ammo yengib bo'lmaydi.»
            </p>
          </div>

          {/* Clean text nav links */}
          <div className="flex flex-wrap items-center gap-6 text-xs font-medium text-slate-300">
            <button 
              onClick={() => onNavigate('hemingway')} 
              className="hover:text-amber-400 transition-colors cursor-pointer"
            >
              Heminguey Hayoti
            </button>
            <a 
              href="https://arm.navoiy-uni.uz/wp-content/uploads/2019/04/ernest_xeminguey_chol_va_dengiz_lot_ziyouz_com.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-400 hover:text-amber-300 transition-colors font-semibold"
            >
              Kitobni O'qish (PDF) ↗
            </a>
            <button 
              onClick={() => onNavigate('presentation')} 
              className="hover:text-amber-400 transition-colors cursor-pointer"
            >
              Taqdimot Slaydlari
            </button>
            <button 
              onClick={() => onNavigate('essay')} 
              className="hover:text-amber-400 transition-colors cursor-pointer"
            >
              500 So'zlik Insho
            </button>
            <button 
              onClick={() => onNavigate('symbolism')} 
              className="hover:text-amber-400 transition-colors cursor-pointer"
            >
              Ramzlar Galereyasi
            </button>
            <button 
              onClick={() => onNavigate('prompts')} 
              className="hover:text-amber-400 transition-colors cursor-pointer"
            >
              AI Prompt Studiyasi
            </button>
            <button 
              onClick={() => onNavigate('quiz')} 
              className="hover:text-amber-400 transition-colors cursor-pointer"
            >
              Bilim Testi
            </button>
          </div>

        </div>

        {/* Quiet colophon and copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p className="font-sans">
            Ernest Xeminguey (1899–1961) · «The Old Man and the Sea» (1952)
          </p>
          <div className="flex items-center gap-3">
            <span>O'quv va madaniy maqsadlar uchun</span>
            <span aria-hidden="true">·</span>
            <span>2026</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
