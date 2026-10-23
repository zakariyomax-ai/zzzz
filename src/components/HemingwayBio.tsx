import React, { useState } from 'react';
import { 
  Award, 
  Anchor, 
  BookOpen, 
  Compass, 
  HelpCircle, 
  Sparkles, 
  Quote, 
  UserCheck, 
  ChevronDown, 
  ChevronUp,
  ExternalLink
} from 'lucide-react';

export const HemingwayBio: React.FC = () => {
  const [openDiscussion, setOpenDiscussion] = useState<number | null>(0);

  const discussionPoints = [
    {
      q: "Nobel mukofotiga sazovor bo'lgan bu asar muallif aytganidek oddiy narsalar tasviriga bag'ishlangan bo'lishi mumkinmi?",
      a: "Xeminguey o'zining mashhur 'Aysberg usuli'ga sodiq qolgan holda sirtqi matnda oddiy hayotiy voqelikni (chol, baliq, qayiq) tasvirlaydi. Biroq matn ostidagi 7/8 qism insonning koinotdagi o'rni, sabr-toqat, ma'naviy yengilmaslik va qadr-qimmati kabi umuminsoniy falsafiy cho'qqilarni qamrab olgan."
    },
    {
      q: "Chol, dengiz va baliq sizda qanday tasavvurlarni uyg'otadi? Ular o'rtasida qanday bog'liqlik bor?",
      a: "Chol — insoniyat irodasi va aqli timsoli; dengiz ('La Mar') — saxiy va ayni paytda shafqatsiz hayot ummoni; bahaybat Marlin esa tabiatning tengsiz qudrati va sharafli orzusi ramzidir. Ular bir-birini inkor qilmaydi, balki yagona koinot uyg'unligida yashaydi."
    },
    {
      q: "Asar qahramoni Santyagoning hayotiy prototipi kim edi?",
      a: "Xeminguey ushbu qissani Gavana sohillarida jurnalist bo'lib yurganida eshitgan va o'zining 'Pilar' kemasida yaqin do'stiga aylangan kubalik keksa baliqchi Gregorio Fuentes (1897–2002) taqdiri asosida yaratgan. Gregorio 80 kun davomida dengizda yolg'iz qolib kurashgan va 104 yil umr ko'rgan afsonaviy dengizchi edi."
    }
  ];

  return (
    <section id="hemingway" className="py-16 bg-[#060a14] border-b border-slate-800 text-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 pb-6 border-b border-slate-800/80">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-amber-500 uppercase tracking-widest font-sans mb-2">
              <span>Muallif & Tarixiy Prototip</span>
              <span aria-hidden="true">·</span>
              <span>Darslik & Arxiv Materiallari</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
              Ernest Heminguey va Asar Prototipi
            </h2>
            <p className="font-serif text-slate-400 text-base mt-2 max-w-2xl">
              Nobel mukofoti sovrindorining murakkab hayot yo'li, bolalikdagi ilk qarmoq, Kubadagi «Pilar» kemasi va Santyago obrazining tirik timsoli — Gregorio Fuentes.
            </p>
          </div>

          <div className="flex items-center gap-2 font-mono text-xs text-amber-400 bg-amber-500/10 border border-amber-500/30 px-3.5 py-2 rounded-lg shrink-0">
            <Award className="w-4 h-4 text-amber-400" />
            <span>1954 Nobel Adabiyot Mukofoti</span>
          </div>
        </div>

        {/* 1. Main Hemingway Biography Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
          
          {/* Left Column: Yousuf Karsh Portrait */}
          <div className="lg:col-span-4 flex flex-col">
            <div className="relative rounded-2xl overflow-hidden border border-slate-700/80 shadow-2xl bg-slate-950 flex-1 group min-h-[380px]">
              <img
                src="/assets/aistudio/image_dffdaa2d.png"
                alt="Ernest Heminguey portreti (Yousuf Karsh, 1957)"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
              
              <div className="absolute bottom-4 left-4 right-4 text-left">
                <div className="text-xs font-mono uppercase tracking-wider text-amber-400 mb-1">
                  Ernest Miller Hemingway
                </div>
                <div className="font-display text-xl font-bold text-white">
                  1899 — 1961
                </div>
                <p className="text-xs font-serif italic text-slate-300 mt-1">
                  Ouk-Park, Illinoys, AQSH · Jahon adabiyotining o'lmas siymosi
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Life & Literary Journey */}
          <div className="lg:col-span-8 flex flex-col justify-between bg-[#0b1220] border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl space-y-6">
            
            {/* Textbook Context Callout */}
            <div className="flex items-start gap-3 p-4 rounded-xl bg-amber-950/25 border border-amber-800/40">
              <Quote className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <div className="text-xs sm:text-sm font-sans text-amber-100/95 leading-relaxed">
                <strong className="text-amber-400 font-semibold block mb-0.5">Darslik dasturidan asosiy maqsadlar:</strong>
                — Asar g'oyasi va undagi tagma'nolarni tahlil qilish; <br />
                — Asardagi falsafiy ramzlarni kashf etish; <br />
                — Hemingueyning ixcham va lo'nda «Aysberg» uslubiga xos xususiyatlarni aniqlash.
              </div>
            </div>

            {/* Biography Details */}
            <div className="space-y-4 font-serif text-slate-300 text-sm sm:text-base leading-relaxed">
              <p>
                <strong className="text-white font-sans font-semibold">Tug'ilishi va yoshligi:</strong> Ernest Heminguey AQSHning Illinoys shtatida shifokor oilasida dunyoga kelgan. Olti farzandning ikkinchisi bo'lgan Ernest o'rta maktabda a'lo baholarga o'qib, o'sha paytlardayoq yozuvchi bo'lishni o'z oldiga qat'iy maqsad qilib qo'ygan edi.
              </p>

              <p>
                <strong className="text-white font-sans font-semibold">Baliq ovi va kema sarguzashtlari:</strong> Otasi unga ilk qarmoqni sovg'a qilgan kundan boshlab, baliq ovi adibning umrbod eng sevimli mashg'ulotiga aylandi. Keyinchalik Kubada yashagan yillarida Heminguey o'zining «Pilar» nomli yog'och kemasida muntazam ravishda Gulfstrim oqimiga baliq oviga chiqardi.
              </p>

              <p>
                <strong className="text-white font-sans font-semibold">Ijodiy merosi:</strong> O'n sakkiz yoshida jurnalist sifatida qalam tebrata boshlagan adibning «Alvido, qurol!», «Chol va dengiz», «Quyosh baribir chiqaveradi» («Fiesta») asarlari jahon adabiyoti xazinasiga kirdi va mohir tarjimonlar tomonidan o'zbek tiliga o'girildi.
              </p>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-slate-800/80">
              <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800 text-center">
                <span className="block text-amber-400 font-mono text-base font-bold">18 Yosh</span>
                <span className="text-[11px] text-slate-400 font-sans">Ilk jurnalistik faoliyati</span>
              </div>
              <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800 text-center">
                <span className="block text-amber-400 font-mono text-base font-bold">«Pilar»</span>
                <span className="text-[11px] text-slate-400 font-sans">Kubadagi shaxsiy kemasi</span>
              </div>
              <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800 text-center">
                <span className="block text-amber-400 font-mono text-base font-bold">1953</span>
                <span className="text-[11px] text-slate-400 font-sans">Pulitser mukofoti</span>
              </div>
              <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800 text-center">
                <span className="block text-amber-400 font-mono text-base font-bold">1954</span>
                <span className="text-[11px] text-slate-400 font-sans">Nobel adabiyot mukofoti</span>
              </div>
            </div>

          </div>

        </div>

        {/* 2. Historical Prototype Section: Gregorio Fuentes & The Textbook Archives */}
        <div className="bg-[#0b1220] border border-slate-800 rounded-2xl p-6 sm:p-10 shadow-2xl mb-12">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-4 border-b border-slate-800">
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-amber-400 mb-1">
                Tarixiy Haqiqat & Asar Yaratilishi
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
                Santyagoning Prototipi — Gregorio Fuentes (1897–2002)
              </h3>
            </div>
            <span className="text-xs text-slate-400 font-sans italic">
              «Men oddiy baliq, oddiy dengiz, oddiy baliqchi va oddiy bola haqida yozdim.»
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Historical Archive Photos from Textbook */}
            <div className="lg:col-span-5 space-y-4">
              
              {/* Photo 1: Hemingway and Gregorio Fuentes */}
              <div className="rounded-xl overflow-hidden border border-slate-700 bg-slate-950 shadow-md">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src="/assets/aistudio/image_bca0dc07.png"
                    alt="Ernest Heminguey va Gregorio Fuentes (Darslik sahifasidagi arxiv surat)"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-3 bg-slate-900 border-t border-slate-800 flex items-center justify-between text-xs">
                  <span className="font-medium text-amber-300">Ernest Heminguey va Gregorio Fuentes</span>
                  <span className="text-slate-400 font-mono">1950-yillar · Kuba</span>
                </div>
              </div>

              {/* Photo 2: Textbook Page context */}
              <div className="rounded-xl overflow-hidden border border-slate-700/80 bg-slate-950 p-3 flex items-center gap-3">
                <div className="w-16 h-20 overflow-hidden rounded border border-slate-700 shrink-0">
                  <img
                    src="/assets/aistudio/image_f788bd30.png"
                    alt="Darslik muqovasi va sahifasi"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="text-xs">
                  <span className="text-amber-400 font-mono block">O'zbekiston Adabiyot Darsligi</span>
                  <span className="text-slate-300 block mt-0.5">
                    «Chol va dengiz» qissasi hamda Heminguey tarjimai holi bo'limi (42-sahifa).
                  </span>
                </div>
              </div>

            </div>

            {/* Right: Narrative Analysis of the Prototype */}
            <div className="lg:col-span-7 space-y-5">
              <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 text-sm font-serif italic text-amber-200/90 leading-relaxed">
                «Asarga Heminguey jurnalist bo'lib ishlagan paytida eshitgan, dengizda sakson kun yolg'iz o'zi baliq ovlagan Gregorio Fuentes voqeasi asos qilib olingan.»
              </div>

              <div className="space-y-3.5 text-slate-300 text-sm sm:text-base font-serif leading-relaxed">
                <p>
                  <strong>Gregorio Fuentes kim edi?</strong> U Kanar orollarida tug'ilib, yoshligida Kubaga ko'chib o'tgan tajribali baliqchi edi. U 1928-yilda Ernest Heminguey bilan bo'ron paytida dengizda tasodifan tanishib qoladi va deyarli 30 yil davomida yozuvchining «Pilar» yaxtasining sadoqatli kapitani hamda eng yaqin sir-sirdoshi bo'lib qoladi.
                </p>

                <p>
                  <strong>80 kunlik kurash:</strong> Gregorio ochiq dengizda uzoq vaqt baliqsiz qolib, so'ngra bahaybat baliqni tutib, uni akulalar changalidan asrab qolish uchun jangga kirishgan voqeani Xemingueyga so'zlab bergan. Bu haqiqiy qahramonlik adibning ongida yillar davomida pishib yetilib, «Chol va dengiz»ning yuragiga aylandi.
                </p>

                <p>
                  <strong>104 yil umr ko'rgan afsona:</strong> Fuentes 100 yoshdan oshib ham (suratda ko'rishingiz mumkin) Heminguey bilan o'tkazgan damlarini xotirlab, o'zining sodda kulbasida sayyohlarga qariyaning matonati haqida so'zlab berar edi.
                </p>
              </div>

            </div>

          </div>

        </div>

        {/* 3. Interactive Discussion Points ("O'ylab Ko'ring" - Thinking Framework) */}
        <div className="bg-[#0b1220] border border-slate-800 rounded-2xl p-6 sm:p-8">
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-widest font-sans mb-1">
            <HelpCircle className="w-4 h-4" />
            <span>Fikrlash va Tahlil Maydoni</span>
          </div>
          <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-2">
            «O'ylab Ko'ring»: Adabiy va Falsafiy Munozara
          </h3>
          <p className="font-serif text-sm text-slate-400 mb-6 max-w-2xl">
            Darslikda keltirilgan savollar bo'yicha ilmiy xulosalar va chuqur tahlillar. O'z fikringizni solishtirib ko'ring:
          </p>

          <div className="space-y-3">
            {discussionPoints.map((item, idx) => {
              const isOpen = openDiscussion === idx;
              return (
                <div
                  key={idx}
                  className="rounded-xl border border-slate-800/90 bg-slate-900/60 overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => setOpenDiscussion(isOpen ? null : idx)}
                    className="w-full p-4 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-800/40"
                  >
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs text-amber-400 w-6 h-6 rounded flex items-center justify-center bg-amber-950/40 border border-amber-800/40 shrink-0">
                        0{idx + 1}
                      </span>
                      <span className="font-sans text-sm sm:text-base font-semibold text-slate-200">
                        {item.q}
                      </span>
                    </div>

                    <div className="text-slate-400 shrink-0">
                      {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="p-4 pt-0 text-slate-300 font-serif text-sm sm:text-base leading-relaxed border-t border-slate-800/60 bg-slate-950/40 animate-in fade-in duration-200">
                      <div className="text-xs uppercase tracking-wider text-amber-500 font-sans font-semibold mb-1 pt-3">
                        Tahliliy Xulosa:
                      </div>
                      <p>{item.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
