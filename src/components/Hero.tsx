import React from 'react';
import { BookOpen, Sparkles, Award, Compass, Play } from 'lucide-react';

interface HeroProps {
  onNavigate: (section: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section className="relative overflow-hidden bg-[#070d18] border-b border-slate-800">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(217,119,6,0.15),rgba(255,255,255,0))]" />

      <div className="max-w-7xl mx-auto px-6 pt-12 pb-16 relative z-10">
        
        {/* Unboxed clean metadata kicker */}
        <div className="flex items-center gap-3 text-xs font-medium text-amber-400/90 mb-4 tracking-wider uppercase font-sans">
          <span>Ernest Hemingway Masterpiece</span>
          <span aria-hidden="true">·</span>
          <span>Nobel & Pulitzer Laureate</span>
          <span aria-hidden="true">·</span>
          <span>Zamonaviy Multimediya Loyihasi</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Editorial Headline & Actions */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.15]" style={{ textWrap: 'balance' }}>
              «Inson mag'lubiyat uchun yaratilmagan. Uni yo'q qilish mumkin, ammo yengib bo'lmaydi.»
            </h1>

            <p className="font-serif text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl">
              Ernest Xemingueyning dunyoga mashhur «Chol va dengiz» qissasi asosida yaratilgan zamonaviy taqdimot, chuqur tahliliy insho, AI vizual promptlar laboratoriyasi hamda interaktiv bilim testi.
            </p>

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="https://arm.navoiy-uni.uz/wp-content/uploads/2019/04/ernest_xeminguey_chol_va_dengiz_lot_ziyouz_com.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm transition-all cursor-pointer shadow-lg hover:shadow-amber-500/20 whitespace-nowrap shrink-0 group"
              >
                <BookOpen className="w-4 h-4 text-slate-950" />
                <span>Kitobni O'qish (PDF)</span>
                <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-black/15 text-slate-900 group-hover:bg-black/25">
                  Asl Nusxa ↗
                </span>
              </a>

              <button
                onClick={() => onNavigate('hemingway')}
                className="flex items-center gap-2 px-4 py-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold text-sm transition-colors cursor-pointer whitespace-nowrap shrink-0"
              >
                <Compass className="w-4 h-4 text-amber-400" />
                <span>Heminguey Hayoti</span>
              </button>

              <button
                onClick={() => onNavigate('presentation')}
                className="flex items-center gap-2 px-4 py-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold text-sm transition-colors cursor-pointer whitespace-nowrap shrink-0"
              >
                <span>Taqdimot</span>
              </button>

              <button
                onClick={() => onNavigate('essay')}
                className="flex items-center gap-2 px-4 py-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold text-sm transition-colors cursor-pointer whitespace-nowrap shrink-0"
              >
                <Award className="w-4 h-4 text-amber-400" />
                <span>Tahliliy Insho</span>
              </button>

              <button
                onClick={() => onNavigate('quiz')}
                className="flex items-center gap-2 px-4 py-3 rounded-lg bg-slate-900/80 hover:bg-slate-800 text-slate-300 border border-slate-800 font-medium text-sm transition-colors cursor-pointer whitespace-nowrap shrink-0"
              >
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>Bilim Testi</span>
              </button>
            </div>

            {/* Quote attribution in quiet editorial format */}
            <div className="text-xs text-slate-400 flex items-center gap-2 pt-2">
              <span className="font-serif italic">— Santyago obrazi orqali inson matonatining abadiy madhiyasi</span>
            </div>
          </div>

          {/* Right Column: Hero Visual Artwork */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-slate-700/80 shadow-2xl bg-slate-900 aspect-16/10 group">
              <img
                src="/src/assets/images/hero_santiago_ocean_1792402448293.jpg"
                alt="Santyago ochiq ummonda quyosh botishida yog'och qayiqda"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
              
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-xs font-mono uppercase tracking-wider text-amber-400 mb-1">
                  Gulfstrim Oqimi · 85-Kun
                </p>
                <p className="text-sm font-serif italic text-slate-200 line-clamp-1">
                  «Har bir yangi kun — yangi umiddir. Omad kelgani yaxshi, lekin men aniqlikni afzal ko'raman.»
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* 4-Item Institutional Fact Strip below Hero */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="space-y-1">
            <div className="text-2xl lg:text-3xl font-display font-bold text-white tabular-nums">84 Kun</div>
            <div className="text-xs text-slate-400">Ketma-ket baliqsiz o'tgan sinov muddati</div>
          </div>
          <div className="space-y-1">
            <div className="text-2xl lg:text-3xl font-display font-bold text-amber-400 tabular-nums">18 Fut</div>
            <div className="text-xs text-slate-400">Moviy Marlinning ulkan o'lchami (~5.5 metr)</div>
          </div>
          <div className="space-y-1">
            <div className="text-2xl lg:text-3xl font-display font-bold text-white tabular-nums">1952-Yil</div>
            <div className="text-xs text-slate-400">Xeminguey qissani yozgan va nashr etgan yil</div>
          </div>
          <div className="space-y-1">
            <div className="text-2xl lg:text-3xl font-display font-bold text-amber-400 tabular-nums">Nobel & Pulitzer</div>
            <div className="text-xs text-slate-400">1953 Pulitser, 1954 Nobel adabiyot mukofotlari</div>
          </div>
        </div>

      </div>
    </section>
  );
};
