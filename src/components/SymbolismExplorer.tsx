import React, { useState } from 'react';
import { symbolismItems } from '../data/symbolismData';
import { SymbolItem } from '../types';
import { X, Quote, CheckCircle } from 'lucide-react';

export const SymbolismExplorer: React.FC = () => {
  const [selectedSymbol, setSelectedSymbol] = useState<SymbolItem | null>(null);

  const isPosterArtwork = (imagePath: string) => imagePath.includes('minimalist_poster_boat');

  return (
    <section id="symbolism" className="py-16 bg-[#090f1d] border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-10">
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-500 uppercase tracking-widest font-sans mb-2">
            <span>03. Semiotik Tahlil</span>
            <span aria-hidden="true">·</span>
            <span>Xemingueyning 'Aysberg' Usuli</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
            Ramzlar & Obrazlar Galereyasi
          </h2>
          <p className="font-serif text-slate-400 text-base mt-2 max-w-2xl">
            Asardagi har bir qahramon va jonzot zohiran realistik, botinan esa insoniyat mavjudligining chuqur falsafiy metaforalaridir.
          </p>
        </div>

        {/* 6-Item Symbol Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {symbolismItems.map((item) => {
            const posterCrop = isPosterArtwork(item.image);
            return (
              <div
                key={item.id}
                onClick={() => setSelectedSymbol(item)}
                className="group bg-[#0c1424] border border-slate-800/90 hover:border-amber-500/50 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer flex flex-col justify-between"
              >
                <div>
                  {/* Visual Image Header — seamless edge-to-edge framing */}
                  <div className="relative aspect-16/10 overflow-hidden bg-[#070d18]">
                    <img
                      src={item.image}
                      alt={item.uzbekTitle}
                      referrerPolicy="no-referrer"
                      className={`w-full h-full object-cover transition-transform duration-500 ${
                        posterCrop
                          ? 'object-[center_54%] scale-[1.12] group-hover:scale-[1.18]'
                          : 'object-center group-hover:scale-105'
                      }`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0c1424] via-transparent to-transparent" />
                  </div>

                  {/* Card Content */}
                  <div className="p-6 space-y-3">
                    <div>
                      <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-1">
                        {item.title}
                      </div>
                      <h3 className="font-display text-xl font-bold text-white group-hover:text-amber-400 transition-colors">
                        {item.uzbekTitle}
                      </h3>
                      <p className="text-xs font-sans text-amber-400/90 font-medium mt-1">
                        {item.symbolism}
                      </p>
                    </div>

                    <p className="text-sm font-serif text-slate-300 line-clamp-3 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="p-6 pt-3 border-t border-slate-800/60 mt-4 flex items-center justify-between text-xs text-slate-400">
                  <span className="font-mono text-[11px]">Batafsil Tahlil</span>
                  <span className="text-amber-400 font-semibold group-hover:translate-x-1 transition-transform">
                    Ochish →
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* In-depth Symbol Modal Dialog */}
        {selectedSymbol && (
          <div
            onClick={() => setSelectedSymbol(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative bg-[#0d1627] border border-slate-700/90 rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setSelectedSymbol(null)}
                className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-lg bg-slate-800/80 cursor-pointer transition-colors"
                aria-label="Yopish"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-6">
                <div>
                  <div className="text-xs font-mono uppercase tracking-wider text-amber-400 mb-1">
                    {selectedSymbol.title}
                  </div>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
                    {selectedSymbol.uzbekTitle}
                  </h3>
                  <div className="text-sm font-sans font-semibold text-amber-300 mt-1">
                    {selectedSymbol.symbolism}
                  </div>
                </div>

                <div className="rounded-xl overflow-hidden border border-slate-700 aspect-16/9 bg-[#070d18]">
                  <img
                    src={selectedSymbol.image}
                    alt={selectedSymbol.uzbekTitle}
                    referrerPolicy="no-referrer"
                    className={`w-full h-full object-cover ${
                      isPosterArtwork(selectedSymbol.image) ? 'object-[center_54%] scale-[1.12]' : 'object-center'
                    }`}
                  />
                </div>

                <div className="space-y-4">
                  <p className="font-serif text-base text-slate-200 leading-relaxed">
                    {selectedSymbol.description}
                  </p>

                  {/* Quote */}
                  <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex items-start gap-3">
                    <Quote className="w-5 h-5 text-amber-400 shrink-0 mt-1" />
                    <p className="font-serif italic text-sm text-slate-200">
                      «{selectedSymbol.quote}»
                    </p>
                  </div>

                  {/* Key Aspects List */}
                  <div>
                    <h4 className="text-xs uppercase tracking-wider font-sans font-semibold text-slate-400 mb-2">
                      Asosiy Ramziy Xususiyatlar
                    </h4>
                    <div className="space-y-2">
                      {selectedSymbol.keyAspects.map((aspect, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                          <CheckCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                          <span>{aspect}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800 flex justify-end">
                  <button
                    onClick={() => setSelectedSymbol(null)}
                    className="px-5 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold text-xs sm:text-sm cursor-pointer transition-colors"
                  >
                    Tushunarli, Yopish
                  </button>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
