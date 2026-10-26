import React, { useState } from 'react';
import { promptStudioItems } from '../data/promptStudioData';
import { PromptItem } from '../types';
import { 
  Sparkles, 
  Copy, 
  Check, 
  Wand2,
  Maximize2,
  X
} from 'lucide-react';

export const PromptStudio: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [previewItem, setPreviewItem] = useState<PromptItem | null>(null);

  // Custom Prompt Builder state
  const [customStyle, setCustomStyle] = useState<string>('cinematic');
  const [customScene, setCustomScene] = useState<string>('santiago_boat');
  const [customPlatform, setCustomPlatform] = useState<string>('midjourney');
  const [generatedPrompt, setGeneratedPrompt] = useState<string>('');
  const [customCopied, setCustomCopied] = useState<boolean>(false);

  const filteredItems = selectedCategory === 'all'
    ? promptStudioItems
    : promptStudioItems.filter((item) => item.category === selectedCategory);

  const handleCopyPrompt = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const generateCustomPrompt = () => {
    const sceneDescriptions: Record<string, string> = {
      santiago_boat: "weathered Cuban fisherman Santiago sitting in a wooden skiff in the vast deep blue Gulf Stream at golden sunset",
      marlin_leap: "gigantic magnificent royal blue marlin leaping majestically above crashing ocean waves, water droplets in slow motion",
      sharks_clash: "dramatic nocturnal ocean battle with sharp shark fins surrounding a skiff, stormy oceanic depths",
      casablanca_wrestle: "young Santiago in a dimly lit Casablanca tavern during a legendary 24-hour arm-wrestling contest with an ebony giant",
      african_lions: "dreamlike golden sands of an African beach with playful young lions under twilight sky, serene nostalgia",
      manolin_coffee: "young boy Manolin carrying hot coffee and clean newspapers to an old sleeping fisherman in a modest seaside hut"
    };

    const styleDescriptors: Record<string, string> = {
      cinematic: "cinematic realistic photography, 35mm film grain, 8k resolution, dramatic chiaroscuro lighting, emotional atmosphere",
      minimalist: "modern minimalist vector illustration, clean geometric shapes, flat design, deep navy, teal, and burnt orange palette, Swiss editorial aesthetic",
      three_d: "modern 3D claymation and low-poly art style, soft pastel studio lighting, isometric minimal aesthetic, Behance featured",
      oil_painting: "textured classical oil painting on canvas, expressive impasto brushstrokes, dramatic maritime impressionism, Winslow Homer style",
      cyber_ui: "futuristic UI/UX web layout, deep blue neon gradient, glowing cyan line art, minimalist dark mode storytelling interface"
    };

    const platformModifiers: Record<string, string> = {
      midjourney: "--ar 16:9 --v 6.1 --style raw",
      dalle: "photorealistic, wide 16:9 aspect ratio, high detail, masterpiece",
      runway: "4k video, 60fps drone shot, hyper-realistic fluid water physics, cinematic color grading",
      claude: "Academic and creative literary prompt for deep analysis"
    };

    const prompt = `${styleDescriptors[customStyle]}, depicting ${sceneDescriptions[customScene]}, ${platformModifiers[customPlatform]}`;
    setGeneratedPrompt(prompt);
  };

  const handleCopyCustomPrompt = () => {
    if (!generatedPrompt) return;
    navigator.clipboard.writeText(generatedPrompt);
    setCustomCopied(true);
    setTimeout(() => setCustomCopied(false), 2000);
  };

  const isVerticalPoster = (item: PromptItem) =>
    item.category === 'poster' || item.category === 'cover';

  return (
    <section id="prompts" className="py-16 bg-[#070c18] border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-amber-500 uppercase tracking-widest font-sans mb-2">
              <span>04. Neyrotarmoqlar Laboratoriyasi</span>
              <span aria-hidden="true">·</span>
              <span>Midjourney · DALL-E 3 · Sora · Runway</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
              AI Prompt Studiyasi & Vizual Konseptlar
            </h2>
            <p className="font-serif text-slate-400 text-base mt-2 max-w-2xl">
              Asar ruhiyatini aks ettiruvchi fotorealistik, animatsion, 3D, minimalist plakat va kitob muqovasi promptlari to'plami.
            </p>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-1.5 p-1.5 bg-slate-900/90 border border-slate-800 rounded-xl overflow-x-auto mb-8 max-w-fit">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
              selectedCategory === 'all'
                ? 'bg-amber-500 text-slate-950 font-semibold shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Barchasi ({promptStudioItems.length})
          </button>
          <button
            onClick={() => setSelectedCategory('visual')}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
              selectedCategory === 'visual'
                ? 'bg-amber-500 text-slate-950 font-semibold shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Vizual Tasvir
          </button>
          <button
            onClick={() => setSelectedCategory('video')}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
              selectedCategory === 'video'
                ? 'bg-amber-500 text-slate-950 font-semibold shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Video / Dron
          </button>
          <button
            onClick={() => setSelectedCategory('poster')}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
              selectedCategory === 'poster'
                ? 'bg-amber-500 text-slate-950 font-semibold shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Geometrik Poster
          </button>
          <button
            onClick={() => setSelectedCategory('3d')}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
              selectedCategory === '3d'
                ? 'bg-amber-500 text-slate-950 font-semibold shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            3D Stilizatsiya
          </button>
          <button
            onClick={() => setSelectedCategory('cover')}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
              selectedCategory === 'cover'
                ? 'bg-amber-500 text-slate-950 font-semibold shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Kitob Muqovasi
          </button>
          <button
            onClick={() => setSelectedCategory('academic')}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
              selectedCategory === 'academic'
                ? 'bg-amber-500 text-slate-950 font-semibold shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Akademik Matn
          </button>
        </div>

        {/* Prompt Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {filteredItems.map((item) => {
            const verticalPoster = isVerticalPoster(item);
            return (
              <div
                key={item.id}
                className="bg-[#0b1220] border border-slate-800 rounded-2xl overflow-hidden p-6 flex flex-col justify-between hover:border-slate-700 transition-all duration-300"
              >
                <div className="space-y-4">
                  
                  {/* Card Top Metadata Ribbon (Unboxed) */}
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-amber-400 font-semibold">{item.targetAI}</span>
                      <span aria-hidden="true">·</span>
                      <span>{item.aspectRatio}</span>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <div>
                    <h3 className="font-display text-xl font-bold text-white">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-sans text-slate-300 mt-1 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Preview Thumbnail if available — aspect-aware without awkward side bars */}
                  {item.sampleImage && (
                    <div
                      onClick={() => setPreviewItem(item)}
                      className="group relative rounded-xl overflow-hidden aspect-16/9 bg-[#070d18] border border-slate-800 cursor-pointer"
                    >
                      {verticalPoster ? (
                        <>
                          <img
                            src={item.sampleImage}
                            alt=""
                            aria-hidden="true"
                            referrerPolicy="no-referrer"
                            className="absolute inset-0 w-full h-full object-cover object-[center_54%] scale-125 blur-xl opacity-35"
                          />
                          <div className="relative z-10 w-full h-full flex items-center justify-center py-2.5">
                            <img
                              src={item.sampleImage}
                              alt={item.title}
                              referrerPolicy="no-referrer"
                              className="h-full w-auto object-contain rounded shadow-xl transition-transform duration-500 group-hover:scale-105"
                            />
                          </div>
                        </>
                      ) : (
                        <img
                          src={item.sampleImage}
                          alt={item.title}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
                      <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-[11px] font-sans text-slate-200 z-20 pointer-events-none">
                        <span className="text-amber-300 font-medium">Haqiqiy Namuna</span>
                        <span className="flex items-center gap-1 text-slate-300">
                          <Maximize2 className="w-3 h-3" />
                          <span>Kattalashtirish</span>
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Prompt Box */}
                  <div className="relative p-4 rounded-xl bg-slate-950 border border-slate-800/90 font-mono text-xs text-amber-200/90 leading-relaxed overflow-x-auto">
                    <pre className="whitespace-pre-wrap font-mono select-all">
                      {item.promptText}
                    </pre>
                  </div>

                  {/* Tags (Unboxed inline text) */}
                  <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400">
                    {item.tags.map((tag, tIdx) => (
                      <span key={tIdx}>
                        #{tag}{tIdx < item.tags.length - 1 ? ' · ' : ''}
                      </span>
                    ))}
                  </div>

                </div>

                {/* Copy Action Button */}
                <div className="pt-4 mt-4 border-t border-slate-800/80 flex justify-end">
                  <button
                    onClick={() => handleCopyPrompt(item.id, item.promptText)}
                    className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold cursor-pointer transition-all border whitespace-nowrap shrink-0 ${
                      copiedId === item.id
                        ? 'bg-emerald-950 text-emerald-300 border-emerald-700'
                        : 'bg-slate-800/80 hover:bg-slate-700 text-slate-200 border-slate-700'
                    }`}
                  >
                    {copiedId === item.id ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-400" />
                        <span>Prompt Nusxalandi!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        <span>Promptni Nusxalash</span>
                      </>
                    )}
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* Interactive Custom AI Prompt Generator */}
        <div className="bg-gradient-to-r from-[#0c1426] to-[#0a101e] border border-amber-500/30 rounded-2xl p-6 sm:p-8 shadow-xl">
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-widest font-sans mb-1">
            <Wand2 className="w-4 h-4" />
            <span>Interaktiv Generator</span>
          </div>
          <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-2">
            Maxsus Prompt Konstruktori
          </h3>
          <p className="font-serif text-sm text-slate-300 mb-6 max-w-2xl">
            Asarning istalgan epizodi va san'at uslubini tanlab, neyrotarmoqlar (Midjourney, DALL-E, Sora) uchun professional formatdagi prompt yarating.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            
            {/* Scene Select */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                Asar Epizodi / Sahna
              </label>
              <select
                value={customScene}
                onChange={(e) => setCustomScene(e.target.value)}
                className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2.5 text-xs text-slate-200 focus:border-amber-500 focus:outline-none cursor-pointer"
              >
                <option value="santiago_boat">Santyago qayiqda (Kechki oqshom)</option>
                <option value="marlin_leap">Marlinning suvdan sakrashi</option>
                <option value="sharks_clash">Akulalar bilan tungi jang</option>
                <option value="casablanca_wrestle">Kasablankadagi 24 soatlik qo'l kurashi</option>
                <option value="african_lions">Afrikadagi yosh sherlar tushi</option>
                <option value="manolin_coffee">Manolin qariyaga qahva keltirishi</option>
              </select>
            </div>

            {/* Visual Style Select */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                San'at Uslubi
              </label>
              <select
                value={customStyle}
                onChange={(e) => setCustomStyle(e.target.value)}
                className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2.5 text-xs text-slate-200 focus:border-amber-500 focus:outline-none cursor-pointer"
              >
                <option value="cinematic">Kinematik Fotorealizm (Cinematic)</option>
                <option value="minimalist">Minimalistik Geometrik Vektor</option>
                <option value="three_d">Zamonaviy 3D Claymation & Low-poly</option>
                <option value="oil_painting">Klassik Dengiz Moybo'yoq Kartinasi</option>
                <option value="cyber_ui">Dark Mode Neon UI/UX Veb Dizayn</option>
              </select>
            </div>

            {/* Target Platform Select */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                Maqsadli AI Platforma
              </label>
              <select
                value={customPlatform}
                onChange={(e) => setCustomPlatform(e.target.value)}
                className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2.5 text-xs text-slate-200 focus:border-amber-500 focus:outline-none cursor-pointer"
              >
                <option value="midjourney">Midjourney v6.1 (--ar 16:9)</option>
                <option value="dalle">OpenAI DALL-E 3</option>
                <option value="runway">Runway Gen-3 / Sora Video</option>
                <option value="claude">Claude / ChatGPT (Matn Tahlili)</option>
              </select>
            </div>

          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={generateCustomPrompt}
              className="px-5 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold text-xs sm:text-sm cursor-pointer transition-colors shadow flex items-center gap-2 whitespace-nowrap shrink-0"
            >
              <Sparkles className="w-4 h-4" />
              <span>Promptni Shakllantirish</span>
            </button>
          </div>

          {generatedPrompt && (
            <div className="mt-6 p-4 rounded-xl bg-slate-950 border border-amber-500/40 space-y-3">
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span className="font-mono text-amber-400">Shakllantirilgan Prompt:</span>
                <button
                  onClick={handleCopyCustomPrompt}
                  className="flex items-center gap-1 text-amber-400 hover:text-amber-300 font-semibold cursor-pointer"
                >
                  {customCopied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{customCopied ? "Nusxalandi!" : "Nusxalash"}</span>
                </button>
              </div>
              <p className="font-mono text-xs text-amber-200/90 leading-relaxed select-all">
                {generatedPrompt}
              </p>
            </div>
          )}

        </div>

      </div>

      {/* Lightbox Modal for Prompt Sample Artwork */}
      {previewItem && previewItem.sampleImage && (
        <div
          onClick={() => setPreviewItem(null)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-5xl w-full rounded-2xl overflow-hidden border border-slate-700 bg-[#080e1b] shadow-2xl"
          >
            <button
              onClick={() => setPreviewItem(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-lg bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-slate-700 cursor-pointer"
              aria-label="Yopish"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="max-h-[75vh] flex items-center justify-center bg-slate-950 p-2 sm:p-4">
              <img
                src={previewItem.sampleImage}
                alt={previewItem.title}
                referrerPolicy="no-referrer"
                className="max-h-[70vh] w-auto object-contain rounded-lg"
              />
            </div>

            <div className="px-6 py-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs">
              <div>
                <h4 className="font-display text-base font-bold text-white">{previewItem.title}</h4>
                <p className="text-slate-400 mt-0.5">{previewItem.targetAI} · {previewItem.aspectRatio}</p>
              </div>
              <button
                onClick={() => handleCopyPrompt(previewItem.id, previewItem.promptText)}
                className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold cursor-pointer whitespace-nowrap shrink-0"
              >
                {copiedId === previewItem.id ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                <span>{copiedId === previewItem.id ? "Nusxalandi!" : "Promptni Nusxalash"}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
