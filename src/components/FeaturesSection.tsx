import React from 'react';
import { APP_CONFIG } from '../appConfig';
import { Language, TranslationDictionary } from '../translations';

interface FeaturesSectionProps {
  lang: Language;
  t: TranslationDictionary;
}

export const FeaturesSection: React.FC<FeaturesSectionProps> = ({ lang, t }) => {
  return (
    <section id="why-choose" className="py-12 sm:py-20 bg-white border-b border-slate-200 scroll-mt-16 overflow-hidden">
      <div className="w-full max-w-3xl mx-auto px-6 sm:px-8">
        
        {/* Section Heading */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 text-center tracking-tight mb-4">
          {t.whyChoose.title}
        </h2>

        {/* Section Paragraph - Increased Base Font Size & Line Height for Mobile Readability */}
        <p className="text-slate-800 text-lg sm:text-xl lg:text-2xl leading-relaxed sm:leading-loose text-center max-w-2xl mx-auto mb-10 font-normal">
          {t.whyChoose.desc}
        </p>

        {/* Center: Smartphone Mockup with Subtle Warm Cinema Halo */}
        <div className="relative flex items-center justify-center my-10">
          
          {/* Subtle Warm Red/Slate Halo */}
          <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-gradient-to-tr from-red-100/60 via-slate-100 to-rose-100/60 absolute -z-0 opacity-80" />

          {/* Smartphone Frame with MovieRoom Screen */}
          <div className="relative z-10 w-48 sm:w-56 rounded-[36px] bg-slate-950 p-2.5 shadow-2xl ring-1 ring-slate-800">
            {/* Phone Screen */}
            <div className="rounded-[28px] overflow-hidden aspect-[9/18] bg-slate-900 relative">
              <img
                src={APP_CONFIG.screenshots[0].src}
                alt="MovieRoom Interface"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-2 inset-x-0 flex justify-center">
                <div className="w-16 h-3 rounded-full bg-slate-950/80 backdrop-blur-xs" />
              </div>
            </div>
          </div>
        </div>

        {/* Polished Bullets List - Balanced, Centered & Fully Responsive on all phones */}
        <div className="w-full max-w-md mx-auto mt-6">
          <div className="bg-slate-50/90 rounded-2xl border border-slate-200/90 p-5 sm:p-6 shadow-xs space-y-4">
            {t.whyChoose.bullets.map((bullet, idx) => (
              <div key={idx} className="flex items-center gap-3.5 text-slate-800 text-base sm:text-lg font-semibold leading-relaxed">
                <span className="w-2.5 h-2.5 rounded-full bg-red-600 shrink-0 shadow-xs ring-4 ring-red-100" />
                <span>{bullet}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
