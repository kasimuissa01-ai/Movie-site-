import React from 'react';
import { ShieldCheck, CheckCircle2 } from 'lucide-react';
import { Language, TranslationDictionary } from '../translations';

interface SafetyCardProps {
  lang: Language;
  t: TranslationDictionary;
}

export const SafetyCard: React.FC<SafetyCardProps> = ({ lang, t }) => {
  return (
    <section className="py-10 sm:py-16 bg-white border-b border-slate-200">
      <div className="w-full max-w-4xl mx-auto px-6 sm:px-8">
        
        {/* Light Card with Dark & Red styling (No green) */}
        <div className="bg-slate-50/80 rounded-3xl p-6 sm:p-10 border border-slate-300 shadow-xs">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
            
            {/* Red Shield */}
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-red-600 to-rose-700 text-white flex items-center justify-center shrink-0 shadow-lg shadow-red-600/20">
              <ShieldCheck className="w-8 h-8 sm:w-9 sm:h-9 stroke-[2.2]" />
            </div>

            <div className="flex-1 text-center sm:text-left">
              <span className="inline-block text-xs font-bold uppercase tracking-wider text-red-700 bg-red-100 px-3 py-1 rounded-full mb-2.5 border border-red-200">
                100% Virus-Free & Verified APK
              </span>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 mb-2">
                {t.safetyCard.title}
              </h3>
              
              {/* Description - Readable large font */}
              <p className="text-base sm:text-lg text-slate-700 mb-5 leading-relaxed font-normal">
                {t.safetyCard.subtitle}
              </p>

              {/* SHA-256 Verified Box */}
              <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-2xs mb-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <div className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-red-600 shrink-0" />
                    <span>{t.safetyCard.scanResult}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-normal">
                    {t.safetyCard.scanDetail}
                  </p>
                </div>
                <div className="text-xs font-mono font-bold text-slate-700 bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200 shrink-0 self-start sm:self-center">
                  SHA-256 Verified
                </div>
              </div>

              {/* 4 Checkmark Grid - Clear font sizes */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm sm:text-base font-semibold text-slate-800">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-red-600 shrink-0" />
                  <span>{t.safetyCard.check1}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-red-600 shrink-0" />
                  <span>{t.safetyCard.check2}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-red-600 shrink-0" />
                  <span>{t.safetyCard.check3}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-red-600 shrink-0" />
                  <span>{t.safetyCard.check4}</span>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
