import React from 'react';
import { Film, Clapperboard, Heart, Sparkles, Popcorn } from 'lucide-react';
import { Language, TranslationDictionary } from '../translations';

interface AboutSectionProps {
  lang: Language;
  t: TranslationDictionary;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ lang, t }) => {
  return (
    <section id="what-is" className="py-12 sm:py-20 bg-white border-b border-slate-200 scroll-mt-16 overflow-hidden">
      <div className="w-full max-w-3xl mx-auto px-6 sm:px-8">
        
        {/* Section Heading */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 text-center tracking-tight mb-6">
          {t.whatIs.title}
        </h2>

        {/* Editorial Body Text - Significantly Increased Base Font Size & Line Height, Balanced & Centered for all Phones */}
        <div className="max-w-2xl mx-auto text-center space-y-6 mb-12">
          <p className="text-slate-800 text-lg sm:text-xl lg:text-2xl leading-relaxed sm:leading-loose font-normal">
            {t.whatIs.p1}
          </p>
          <p className="text-slate-600 text-base sm:text-lg lg:text-xl leading-relaxed sm:leading-loose font-normal">
            {t.whatIs.p2}
          </p>
        </div>

        {/* Community & Cinema Entertainment Banner - Symmetrical & Balanced */}
        <div className="w-full max-w-2xl mx-auto bg-gradient-to-r from-red-50/70 via-slate-50 to-rose-50/70 rounded-3xl p-6 sm:p-10 border border-red-200/80 flex flex-col items-center justify-center overflow-hidden relative shadow-xs">
          
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-2 h-2 rounded-full bg-red-600 animate-ping" />
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-red-700">
              {lang === 'sw' ? 'Jumuiya Kubwa ya Wapenda Burudani' : 'Premier Entertainment Experience'}
            </span>
          </div>

          <div className="flex items-end justify-center gap-4 sm:gap-8 max-w-lg mx-auto py-2">
            
            {/* Fan 1 with Phone & Heart */}
            <div className="flex flex-col items-center">
              <div className="text-red-500 animate-bounce text-sm">
                <Heart className="w-4 h-4 fill-red-500 text-red-500" />
              </div>
              <div className="w-13 h-13 sm:w-16 sm:h-16 rounded-full bg-slate-900 flex items-center justify-center shadow-md border-2 border-white text-white">
                <Film className="w-6 h-6 sm:w-7 sm:h-7 text-red-400" />
              </div>
              <div className="w-14 sm:w-16 h-9 sm:h-10 bg-slate-900 rounded-t-xl mt-1.5 flex items-center justify-center text-white">
                <span className="text-[11px] sm:text-xs font-mono font-bold text-red-400">HD 4K</span>
              </div>
            </div>

            {/* Cinema Popcorn & Clapperboard */}
            <div className="flex flex-col items-center pb-2">
              <span className="text-red-600 font-bold text-xs mb-1 flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Non-Stop</span>
              </span>
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-br from-red-600 to-rose-700 flex items-center justify-center text-white shadow-lg transform rotate-6">
                <Clapperboard className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.2]" />
              </div>
            </div>

            {/* Fan 2 with Popcorn */}
            <div className="flex flex-col items-center">
              <div className="text-amber-500 text-sm animate-pulse">
                <Popcorn className="w-4 h-4 text-amber-500" />
              </div>
              <div className="w-13 h-13 sm:w-16 sm:h-16 rounded-full bg-slate-900 flex items-center justify-center shadow-md border-2 border-white text-white">
                <span className="text-lg sm:text-2xl font-extrabold text-red-500">M</span>
              </div>
              <div className="w-14 sm:w-16 h-9 sm:h-10 bg-red-600 rounded-t-xl mt-1.5 flex items-center justify-center text-white">
                <span className="text-[11px] sm:text-xs font-mono font-bold">100% Free</span>
              </div>
            </div>

          </div>

          <p className="text-sm sm:text-base text-slate-600 text-center mt-5 font-medium max-w-md mx-auto leading-relaxed">
            {lang === 'sw'
              ? 'Tazama filamu popote ulipo, wakati wowote bila malipo wala usajili wa lazima.'
              : 'Stream or download your favorite movies on any Android device anytime, completely free.'}
          </p>

        </div>

      </div>
    </section>
  );
};
