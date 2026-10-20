import React from 'react';
import { Download, Star } from 'lucide-react';
import { APP_CONFIG } from '../appConfig';
import { Language, TranslationDictionary } from '../translations';

interface SmartTvSectionProps {
  lang: Language;
  t: TranslationDictionary;
  onDownloadClick: () => void;
}

export const SmartTvSection: React.FC<SmartTvSectionProps> = ({
  lang,
  t,
  onDownloadClick,
}) => {
  return (
    <section id="smart-tv" className="py-12 sm:py-20 bg-slate-50/70 border-b border-slate-200 scroll-mt-16">
      <div className="w-full max-w-3xl mx-auto px-6 sm:px-8 text-center">
        
        {/* Section Heading */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
          {t.smartTv.title}
        </h2>

        {/* Section Description - Readable, comfortable font size */}
        <p className="text-slate-700 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-8 font-normal">
          {t.smartTv.desc}
        </p>

        {/* Real Authentic Red App Icon */}
        <div className="flex flex-col items-center mb-6">
          <div className="w-20 h-20 rounded-2xl overflow-hidden shadow-md ring-1 ring-slate-200 mb-4 bg-slate-950 shrink-0">
            <img
              src={APP_CONFIG.appIconSrc}
              alt={APP_CONFIG.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Quick Stats: Star Rating & Platform */}
          <div className="flex items-center justify-center gap-6 text-center text-sm sm:text-base text-slate-700 font-medium mb-6">
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-1 font-bold text-slate-900">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                <span>4.8</span>
              </div>
              <span className="text-xs text-slate-500 font-medium">Rating</span>
            </div>

            <div className="w-px h-8 bg-slate-200" />

            <div className="flex flex-col items-center">
              <span className="font-bold text-slate-900">{t.smartTv.platformText}</span>
              <span className="text-xs text-slate-500 font-medium">Platform</span>
            </div>
          </div>

          {/* Red Download Smart TV Button */}
          <button
            type="button"
            onClick={onDownloadClick}
            className="w-full max-w-sm py-4 px-6 rounded-xl font-extrabold text-white text-base bg-gradient-to-r from-red-600 via-rose-600 to-red-700 hover:from-red-500 hover:to-rose-500 active:scale-[0.98] shadow-md shadow-red-600/20 hover:shadow-lg transition-all flex items-center justify-center gap-2 mb-2"
          >
            <span className="w-5 h-5 rounded border-2 border-white flex items-center justify-center">
              <Download className="w-3 h-3 stroke-[3]" />
            </span>
            <span>{t.smartTv.downloadBtn}</span>
          </button>

          {/* 100% Free & Secure */}
          <span className="text-xs sm:text-sm text-slate-500 font-medium">
            {t.smartTv.freeSecure}
          </span>
        </div>

      </div>
    </section>
  );
};
