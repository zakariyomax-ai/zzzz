import React, { useState } from 'react';
import { quizQuestions } from '../data/quizData';
import { 
  CheckCircle, 
  XCircle, 
  RotateCcw, 
  Award, 
  ArrowRight, 
  HelpCircle,
  Sparkles
} from 'lucide-react';

export const InteractiveQuiz: React.FC = () => {
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [showExplanation, setShowExplanation] = useState<boolean>(false);
  const [isCompleted, setIsCompleted] = useState<boolean>(false);

  const currentQ = quizQuestions[currentIdx];
  const totalQuestions = quizQuestions.length;
  const currentAnswer = selectedAnswers[currentQ.id];

  const handleSelectOption = (index: number) => {
    if (showExplanation) return; // Prevent changing after confirmed
    setSelectedAnswers((prev) => ({
      ...prev,
      [currentQ.id]: index
    }));
    setShowExplanation(true);
  };

  const handleNext = () => {
    setShowExplanation(false);
    if (currentIdx < totalQuestions - 1) {
      setCurrentIdx((prev) => prev + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const handleRestart = () => {
    setSelectedAnswers({});
    setCurrentIdx(0);
    setShowExplanation(false);
    setIsCompleted(false);
  };

  // Calculate score
  const score = Object.entries(selectedAnswers).reduce((acc, [qId, ansIdx]) => {
    const question = quizQuestions.find((q) => q.id === Number(qId));
    if (question && question.correctIndex === ansIdx) {
      return acc + 1;
    }
    return acc;
  }, 0);

  const getEvaluationTitle = (score: number) => {
    if (score >= 9) return "Haqiqiy Xemingueyshunos va Adabiyot Bilimdoni!";
    if (score >= 7) return "Ajoyib Natija! Asar mohiyatini chuqur tushungansiz.";
    if (score >= 5) return "Qoniqarli Natija! Ba'zi nozik detallarni takrorlash foydali.";
    return "Asarni qayta mutolaa qilish va tahlillarni o'rganish tavsiya etiladi.";
  };

  return (
    <section id="quiz" className="py-16 bg-[#090f1d] border-b border-slate-800">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-amber-500 uppercase tracking-widest font-sans mb-2">
            <span>05. Bilimni Sinash</span>
            <span aria-hidden="true">·</span>
            <span>Interaktiv Test</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
            «Chol va dengiz» Bo'yicha Bilim Testi
          </h2>
          <p className="font-serif text-slate-400 text-base mt-2 max-w-xl mx-auto">
            10 ta puxta ishlab chiqilgan savollar orqali asar syujeti, qahramonlari, ramzlari va tarixiy kontekstini sinab ko'ring.
          </p>
        </div>

        {!isCompleted ? (
          <div className="bg-[#0c1424] border border-slate-800 rounded-2xl p-6 sm:p-10 shadow-2xl">
            
            {/* Progress Bar & Counter */}
            <div className="flex items-center justify-between text-xs text-slate-400 font-mono mb-4">
              <span>Savol {currentIdx + 1} / {totalQuestions}</span>
              <span className="text-amber-400">Joriy ball: {score}</span>
            </div>

            <div className="w-full bg-slate-800 rounded-full h-1.5 mb-8 overflow-hidden">
              <div 
                className="bg-amber-500 h-1.5 transition-all duration-300"
                style={{ width: `${((currentIdx + 1) / totalQuestions) * 100}%` }}
              />
            </div>

            {/* Question Text */}
            <div className="mb-8">
              <h3 className="font-display text-lg sm:text-xl font-bold text-white leading-relaxed">
                {currentQ.question}
              </h3>
            </div>

            {/* Options List */}
            <div className="space-y-3 mb-8">
              {currentQ.options.map((option, idx) => {
                const isSelected = currentAnswer === idx;
                const isCorrect = idx === currentQ.correctIndex;
                let optionStyle = "bg-slate-900/80 border-slate-800 text-slate-200 hover:border-slate-700 hover:bg-slate-800/60";

                if (showExplanation) {
                  if (isCorrect) {
                    optionStyle = "bg-emerald-950/60 border-emerald-600 text-emerald-200 font-medium";
                  } else if (isSelected && !isCorrect) {
                    optionStyle = "bg-rose-950/60 border-rose-600 text-rose-200";
                  } else {
                    optionStyle = "bg-slate-900/40 border-slate-800 text-slate-500 opacity-60";
                  }
                } else if (isSelected) {
                  optionStyle = "bg-amber-950/60 border-amber-500 text-amber-200 font-medium";
                }

                return (
                  <button
                    key={idx}
                    onClick={() => handleSelectOption(idx)}
                    disabled={showExplanation}
                    className={`w-full text-left p-4 rounded-xl border transition-all duration-200 flex items-center justify-between cursor-pointer ${optionStyle}`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs w-6 h-6 rounded flex items-center justify-center bg-slate-800 text-slate-300 shrink-0">
                        {String.fromCharCode(65 + idx)}
                      </span>
                      <span className="text-sm font-sans">{option}</span>
                    </div>

                    {showExplanation && (
                      <div className="shrink-0 ml-2">
                        {isCorrect ? (
                          <CheckCircle className="w-5 h-5 text-emerald-400" />
                        ) : isSelected ? (
                          <XCircle className="w-5 h-5 text-rose-400" />
                        ) : null}
                      </div>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Explanation Card */}
            {showExplanation && (
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 mb-8 space-y-2 animate-in fade-in duration-300">
                <div className="flex items-center gap-1.5 text-xs font-mono font-semibold text-amber-400">
                  <HelpCircle className="w-4 h-4" />
                  <span>Izoh & Tahlil:</span>
                </div>
                <p className="font-sans text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {currentQ.explanation}
                </p>
              </div>
            )}

            {/* Next Action */}
            <div className="flex justify-end pt-4 border-t border-slate-800">
              {showExplanation ? (
                <button
                  onClick={handleNext}
                  className="flex items-center gap-2 px-6 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold text-sm cursor-pointer transition-colors shadow"
                >
                  <span>{currentIdx < totalQuestions - 1 ? "Keyingi Savol" : "Natijalarni Ko'rish"}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <span className="text-xs text-slate-500 font-sans italic">
                  Iltimos, javoblardan birini tanlang
                </span>
              )}
            </div>

          </div>
        ) : (
          /* Quiz Results Card */
          <div className="bg-[#0c1424] border border-slate-800 rounded-2xl p-8 sm:p-12 text-center shadow-2xl space-y-6">
            <div className="w-16 h-16 rounded-2xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center mx-auto text-amber-400">
              <Award className="w-8 h-8" />
            </div>

            <div>
              <div className="text-xs uppercase tracking-widest text-amber-400 font-mono mb-2">
                Test Yakunlandi
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
                Sizning Natijangiz: <span className="text-amber-400 tabular-nums">{score}</span> / {totalQuestions}
              </h3>
              <p className="font-serif text-lg text-slate-300 mt-2 max-w-md mx-auto">
                {getEvaluationTitle(score)}
              </p>
            </div>

            {/* Score Percentage Metric Strip */}
            <div className="py-4 px-6 rounded-xl bg-slate-950 border border-slate-800 max-w-sm mx-auto flex items-center justify-around text-xs">
              <div>
                <span className="text-slate-400 block">To'g'ri javoblar</span>
                <span className="text-base font-bold text-emerald-400 font-mono">{score}</span>
              </div>
              <div className="w-px h-8 bg-slate-800" />
              <div>
                <span className="text-slate-400 block">Xato javoblar</span>
                <span className="text-base font-bold text-rose-400 font-mono">{totalQuestions - score}</span>
              </div>
              <div className="w-px h-8 bg-slate-800" />
              <div>
                <span className="text-slate-400 block">Aniqlik darajasi</span>
                <span className="text-base font-bold text-amber-400 font-mono">{Math.round((score / totalQuestions) * 100)}%</span>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={handleRestart}
                className="flex items-center gap-2 px-6 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold text-sm cursor-pointer transition-colors shadow"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Testni Qaytadan Boshlash</span>
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
