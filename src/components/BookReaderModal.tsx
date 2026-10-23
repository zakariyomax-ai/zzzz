import React from 'react';
import { X, ExternalLink, Download, BookOpen, AlertCircle, Bookmark } from 'lucide-react';

interface BookReaderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BOOK_PDF_URL = "https://arm.navoiy-uni.uz/wp-content/uploads/2019/04/ernest_xeminguey_chol_va_dengiz_lot_ziyouz_com.pdf";

export const BookReaderModal: React.FC<BookReaderModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative bg-[#0c1424] border border-slate-700/90 rounded-2xl w-full max-w-5xl h-[92vh] flex flex-col shadow-2xl overflow-hidden">
        
        {/* Modal Header */}
        <div className="p-4 sm:p-5 border-b border-slate-800 bg-[#070d18] flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-amber-400">
                <span>Elektron Kitob</span>
                <span aria-hidden="true">·</span>
                <span>Lotin Yozuvida</span>
                <span aria-hidden="true">·</span>
                <span>Ziyouz / Navoiy Davlat Universiteti ARM</span>
              </div>
              <h3 className="font-display text-lg sm:text-xl font-bold text-white tracking-wide">
                Ernest Xeminguey — «Chol va dengiz» (To'liq Asar)
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Direct Open in new tab */}
            <a
              href={BOOK_PDF_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-slate-950 bg-amber-500 hover:bg-amber-400 rounded-lg transition-colors cursor-pointer shadow whitespace-nowrap"
              title="Brauzerning alohida oynasida PDF ochish"
            >
              <span>Asl PDFni Ochish</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-white rounded-lg bg-slate-800/80 hover:bg-slate-700 transition-colors cursor-pointer"
              aria-label="Yopish"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Info Banner */}
        <div className="px-5 py-2.5 bg-amber-950/20 border-b border-amber-900/30 flex flex-wrap items-center justify-between gap-3 text-xs text-amber-200/90 font-sans">
          <div className="flex items-center gap-2">
            <Bookmark className="w-4 h-4 text-amber-400 shrink-0" />
            <span>
              Manba: Navoiy davlat universiteti axborot-resurs markazi (arm.navoiy-uni.uz) rasmiy elektron nusxasi.
            </span>
          </div>

          <a
            href={BOOK_PDF_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-400 hover:underline font-mono text-[11px] flex items-center gap-1"
          >
            <span>Havolani to'g'ridan-to'g'ri ko'rish</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>

        {/* Embedded PDF Viewer or Direct Fallback */}
        <div className="flex-1 bg-slate-950 relative flex flex-col">
          <iframe
            src={`${BOOK_PDF_URL}#toolbar=1&navpanes=1`}
            title="Chol va Dengiz PDF Kitob"
            className="w-full h-full border-0 bg-slate-900"
          />

          {/* Bottom Bar / Quick Links if browser restricts PDF iframe */}
          <div className="p-3 bg-[#080e1b] border-t border-slate-800 flex flex-wrap items-center justify-between text-xs text-slate-400 gap-3">
            <span>
              Agar PDF darcha ichida yuklanmasa, yuqoridagi <strong className="text-amber-400">«Asl PDFni Ochish»</strong> tugmasi orqali to'g'ridan-to'g'ri oching.
            </span>
            <a
              href={BOOK_PDF_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-amber-400 hover:text-amber-300 font-medium flex items-center gap-1"
            >
              <Download className="w-3.5 h-3.5" />
              <span>PDF Faylni Yuklab Olish</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
