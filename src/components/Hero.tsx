import React, { useState } from 'react';
import { BookOpen, Sparkles, Award, Compass, Maximize2, X, ExternalLink } from 'lucide-react';

interface HeroProps {
  onNavigate: (section: string) => void;
}

const HERO_SANTIAGO_IMG = '/assets/images/hero_santiago_ocean.jpg';

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const [isLightboxOpen, setIsLightboxOpen] = useState<boolean>(false);

  return (
    <section className="relative overflow-hidden bg-[#070d18] border-b border-slate-800">
      {/* Subtle atmospheric ocean & sunset backdrop */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <img
          src={HERO_SANTIAGO_IMG}
          alt=""
          aria-hidden="true"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover opacity-15 blur-2xl scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#070d18]/75 via-[#070d18]/90 to-[#070d18]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-8 pb-16 relative z-10">
        
        {/* 1. Prominent Top Cinematic Artwork Showcase ("Bosh qism") */}
        <div className="max-w-5xl mx-auto mb-10">
          <div className="relative rounded-2xl overflow-hidden border border-slate-700/80 shadow-2xl bg-slate-950 aspect-video lg:h-[500px] w-full group">
            <img
              src={HERO_SANTIAGO_IMG}
              alt="Santyago ochiq ummonda quyosh botishida yog'och qayiqda"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center scale-[1.03] transition-transform duration-700 group-hover:scale-[1.06]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />

            {/* Fullscreen Zoom Affordance */}
            <button
              onClick={() => setIsLightboxOpen(true)}
              className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-950/75 hover:bg-slate-900 text-slate-200 border border-slate-700/80 text-xs font-medium backdrop-blur-sm transition-colors cursor-pointer whitespace-nowrap shrink-0"
              title="Tasvirni to'liq ekranda ko'rish"
            >
              <Maximize2 className="w-3.5 h-3.5 text-amber-400" />
              <span>Kattalashtirish</span>
            </button>

            {/* Clean Editorial Caption Overlay */}
            <div className="absolute bottom-4 left-5 right-5 sm:bottom-6 sm:left-7 sm:right-7 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-amber-400 mb-1">
                  <span>Ernest Hemingway</span>
                  <span aria-hidden="true">·</span>
                  <span>Gulfstrim Oqimi, 85-Kun</span>
                </div>
                <p className="text-sm sm:text-base font-serif italic text-slate-100">
                  «Har bir yangi kun — yangi umiddir. Omad kelgani yaxshi, lekin men aniqlikni afzal ko'raman.»
                </p>
              </div>
              <span className="text-xs font-sans text-slate-300/90 shrink-0">
                Santyago obrazi · Badiiy tasvir
              </span>
            </div>
          </div>
        </div>

        {/* 2. Centered / Balanced Editorial Headline & Primary Actions */}
        <div className="max-w-4xl mx-auto text-center space-y-6">
          {/* Unboxed clean metadata kicker */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 text-xs font-medium text-amber-400/90 tracking-wider uppercase font-sans">
            <span>Ernest Hemingway Durdonasi</span>
            <span aria-hidden="true">·</span>
            <span>Nobel va Pulitser Mukofotlari</span>
            <span aria-hidden="true">·</span>
            <span>Zamonaviy Adabiy Loyiha</span>
          </div>

          <h1
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.15]"
            style={{ textWrap: 'balance' }}
          >
            «Inson mag'lubiyat uchun yaratilmagan. Uni yo'q qilish mumkin, ammo yengib bo'lmaydi.»
          </h1>

          <p className="font-serif text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Ernest Xemingueyning dunyoga mashhur «Chol va dengiz» qissasi asosida yaratilgan zamonaviy taqdimot, yozuvchi hayoti, tahliliy insho, AI vizual promptlar studiyasi hamda interaktiv bilim testi.
          </p>

          {/* Quick Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <a
              href="https://arm.navoiy-uni.uz/wp-content/uploads/2019/04/ernest_xeminguey_chol_va_dengiz_lot_ziyouz_com.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-3 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm transition-colors cursor-pointer shadow-lg whitespace-nowrap shrink-0"
            >
              <BookOpen className="w-4 h-4 text-slate-950" />
              <span>Kitobni O'qish (PDF)</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-900" />
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
              <span>Taqdimot Slaydlari</span>
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
        </div>

        {/* 3. 4-Item Institutional Fact Strip below Hero */}
        <div className="mt-14 pt-8 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-6">
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

      {/* Lightbox Modal for Full Artwork Inspection */}
      {isLightboxOpen && (
        <div
          onClick={() => setIsLightboxOpen(false)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-6xl w-full rounded-2xl overflow-hidden border border-slate-700 bg-slate-950 shadow-2xl"
          >
            <button
              onClick={() => setIsLightboxOpen(false)}
              className="absolute top-4 right-4 z-10 p-2 rounded-lg bg-slate-900/85 hover:bg-slate-800 text-slate-200 border border-slate-700 cursor-pointer"
              aria-label="Yopish"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="overflow-hidden aspect-video bg-slate-950">
              <img
                src={HERO_SANTIAGO_IMG}
                alt="Santyago ochiq ummonda quyosh botishida yog'och qayiqda"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover scale-[1.03]"
              />
            </div>
            <div className="px-6 py-4 bg-[#080e1b] border-t border-slate-800 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-300">
              <span className="font-serif italic text-sm text-slate-200">
                Santyago — Gulfstrim oqimida quyosh botishidagi mardona sukunat
              </span>
              <span className="font-mono text-amber-400">Ernest Xeminguey · «Chol va dengiz»</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
