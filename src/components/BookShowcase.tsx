import React from 'react';
import { BookOpen, ExternalLink, Download, FileText, CheckCircle2 } from 'lucide-react';

const POSTER_BOAT_IMG = '/assets/images/minimalist_poster_boat.jpg';

interface BookShowcaseProps {
  onOpenModal: () => void;
}

export const BOOK_PDF_URL = "https://arm.navoiy-uni.uz/wp-content/uploads/2019/04/ernest_xeminguey_chol_va_dengiz_lot_ziyouz_com.pdf";

export const BookShowcase: React.FC<BookShowcaseProps> = ({ onOpenModal }) => {
  return (
    <section id="book-reader" className="py-16 bg-[#080e1b] border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-10">
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-500 uppercase tracking-widest font-sans mb-2">
            <span>Asl Manba & Mutolaa</span>
            <span aria-hidden="true">·</span>
            <span>Rasmiy Elektron Kutubxona</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
            «Chol va dengiz» — To'liq Kitobni O'qish
          </h2>
          <p className="font-serif text-slate-400 text-base mt-2 max-w-2xl">
            Ernest Xemingueyning o'zbek tiliga o'girilgan to'liq asarini rasmiy elektron PDF formatda to'g'ridan-to'g'ri o'qing yoki yuklab oling.
          </p>
        </div>

        {/* Feature Banner Card */}
        <div className="bg-gradient-to-r from-[#0c1527] to-[#080d19] border border-amber-500/30 rounded-2xl p-6 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Book Cover Visual */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="relative rounded-xl overflow-hidden shadow-2xl border border-slate-700/80 max-w-[280px] w-full aspect-[3/4] bg-[#f4f1ea] group">
                <img
                  src={POSTER_BOAT_IMG}
                  alt="Chol va dengiz kitob muqovasi"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-3 left-3 right-3 text-center">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-amber-400 bg-black/60 px-2 py-0.5 rounded border border-white/10">
                    Lotin Alifbosi · To'liq Nashr
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Book Details & Actions */}
            <div className="lg:col-span-8 space-y-6">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-amber-400 mb-1">
                  <span>Elektron Kitob Nusxasi</span>
                  <span aria-hidden="true">·</span>
                  <span>PDF Formati</span>
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
                  Ernest Xeminguey — «Chol va dengiz»
                </h3>
                <p className="font-serif italic text-slate-300 text-base sm:text-lg mt-2">
                  Qissa · O'zbek tilidagi mukammal tarjima (Lotin yozuvida)
                </p>
              </div>

              {/* Book Metadata List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-300">
                <div className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-900/60 border border-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-400 block text-xs">Manba va Arxiv</span>
                    <span className="text-white font-medium">Navoiy DU ARM & Ziyouz.com</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-900/60 border border-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-400 block text-xs">Fayl Turi & Hajmi</span>
                    <span className="text-white font-medium">PDF Hujjat (Barcha qurilmalarga mos)</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-900/60 border border-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-400 block text-xs">Asar Mazmuni</span>
                    <span className="text-white font-medium">To'liq qisqartirilmagan matn</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-900/60 border border-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-400 block text-xs">O'qish Imkoniyati</span>
                    <span className="text-white font-medium">Onlayn mutolaa yoki yuklab olish</span>
                  </div>
                </div>
              </div>

              {/* Excerpt quote */}
              <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 font-serif italic text-sm text-slate-300 leading-relaxed">
                «U yana o'sha qadrdon tushini ko'rdi. Tushida u Afrika sohillaridagi oltin qirlarda o'ynab yurgan yosh sherlarni ko'rardi...»
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href={BOOK_PDF_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm transition-all cursor-pointer shadow-lg hover:shadow-amber-500/25 whitespace-nowrap shrink-0 group"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>Kitobni O'qish (PDF)</span>
                  <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </a>

                <button
                  onClick={onOpenModal}
                  className="flex items-center gap-2 px-5 py-3.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold text-sm transition-colors cursor-pointer whitespace-nowrap shrink-0"
                >
                  <FileText className="w-4 h-4 text-amber-400" />
                  <span>Ilova Ichida Ko'rish</span>
                </button>

                <a
                  href={BOOK_PDF_URL}
                  download="ernest_xeminguey_chol_va_dengiz.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-4 py-3.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-slate-200 border border-slate-800 text-xs font-medium transition-colors cursor-pointer whitespace-nowrap shrink-0"
                  title="PDF faylni to'g'ridan-to'g'ri yuklab olish"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Yuklab Olish</span>
                </a>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
