import React from 'react';
import { Download, ShieldCheck, Star, RefreshCw, Users } from 'lucide-react';
import { APP_CONFIG } from '../appConfig';
import { Language, TranslationDictionary } from '../translations';

interface HeroSectionProps {
  lang: Language;
  t: TranslationDictionary;
  onDownloadClick: () => void;
  heroRef?: React.RefObject<HTMLDivElement | null>;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  lang,
  t,
  onDownloadClick,
  heroRef,
}) => {
  return (
    <section
      ref={heroRef}
      className="relative overflow-hidden bg-[#070d18] text-white pt-12 sm:pt-16 pb-16 sm:pb-24 border-b border-slate-800"
    >
      {/* Cinematic Poster Backdrop with Vignette Overlay */}
      <div className="absolute inset-0 z-0 opacity-30 mix-blend-luminosity pointer-events-none overflow-hidden">
        <div
          className="w-full h-full bg-cover bg-center scale-105 filter blur-[1px]"
          style={{
            backgroundImage: `url('/images/screenshot_1.jpg')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#070d18]/90 via-[#070d18]/85 to-[#070d18]" />
        <div className="absolute inset-0 bg-radial from-transparent via-[#070d18]/70 to-[#070d18]" />
      </div>

      {/* Ambient Red Cinema Glow Orbs (Strictly Dark & Red Palette - No Green) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] bg-red-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-rose-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 w-full max-w-3xl mx-auto px-6 sm:px-8 text-center flex flex-col items-center">
        
        {/* Real Authentic Red MovieRoom Logo on Hero */}
        <div className="relative mb-6 group cursor-pointer" onClick={onDownloadClick}>
          <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-3xl bg-white p-2 shadow-2xl ring-4 ring-red-600/20 relative overflow-hidden transition-transform duration-300 group-hover:scale-105">
            {/* Real Logo Image */}
            <img
              src={APP_CONFIG.appIconSrc}
              alt={APP_CONFIG.name}
              className="w-full h-full object-cover rounded-2xl"
            />
            
            {/* Subtle gloss highlight */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/15 to-transparent pointer-events-none" />
          </div>

          {/* Verification Badge */}
          <div
            className="absolute -top-1.5 -right-1.5 bg-red-600 text-white p-1.5 rounded-full shadow-lg ring-2 ring-[#070d18]"
            title="Verified Official APK"
          >
            <ShieldCheck className="w-4 h-4 stroke-[2.5]" />
          </div>
        </div>

        {/* Hero Title */}
        <h1 className="text-2xl sm:text-4xl lg:text-[44px] font-extrabold text-white tracking-tight leading-snug sm:leading-tight mb-3">
          {t.hero.title}
        </h1>

        {/* Hero Subtitle - Red Accent, Clear & Bold */}
        <p className="text-red-400 font-bold text-lg sm:text-xl mb-4 tracking-wide">
          {t.hero.subtitle}
        </p>

        {/* Hero Description - Enhanced Font Size for Comfortable Reading */}
        <p className="text-slate-200 text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl mb-8 font-normal">
          {t.hero.description}
        </p>

        {/* High-Impact Vibrant Red Download Button */}
        <div className="w-full max-w-md mb-8">
          <button
            type="button"
            onClick={onDownloadClick}
            className="w-full py-4 px-6 rounded-2xl font-extrabold text-white text-base sm:text-lg bg-gradient-to-r from-red-600 via-rose-600 to-red-700 hover:from-red-500 hover:to-rose-500 active:scale-[0.99] shadow-xl shadow-red-600/30 hover:shadow-red-600/40 transition-all flex items-center justify-center gap-3 group border border-red-500/30"
          >
            <span className="w-6 h-6 rounded-lg border-2 border-white flex items-center justify-center group-hover:translate-y-0.5 transition-transform bg-white/10">
              <Download className="w-3.5 h-3.5 stroke-[3] text-white" />
            </span>
            <span>{t.hero.downloadBtn}</span>
          </button>
        </div>

        {/* 4 Frosted Pill Badges - Dark & Red / Gold */}
        <div className="w-full max-w-sm flex flex-col gap-2.5 sm:gap-3">
          <div className="py-2.5 px-6 rounded-full border border-slate-700/80 bg-slate-800/80 backdrop-blur-md text-slate-100 text-sm sm:text-base font-semibold shadow-xs flex items-center justify-center gap-2.5 hover:border-red-500/50 transition-colors">
            <Users className="w-4 h-4 text-red-400" />
            <span>{t.hero.downloadsWorldwide}</span>
          </div>

          <div className="py-2.5 px-6 rounded-full border border-slate-700/80 bg-slate-800/80 backdrop-blur-md text-slate-100 text-sm sm:text-base font-semibold shadow-xs flex items-center justify-center gap-2.5 hover:border-red-500/50 transition-colors">
            <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
            <span>{t.hero.starRating}</span>
          </div>

          <div className="py-2.5 px-6 rounded-full border border-slate-700/80 bg-slate-800/80 backdrop-blur-md text-slate-100 text-sm sm:text-base font-semibold shadow-xs flex items-center justify-center gap-2.5 hover:border-red-500/50 transition-colors">
            <ShieldCheck className="w-4 h-4 text-red-400" />
            <span>{t.hero.freeSecure}</span>
          </div>

          <div className="py-2.5 px-6 rounded-full border border-slate-700/80 bg-slate-800/80 backdrop-blur-md text-slate-100 text-sm sm:text-base font-semibold shadow-xs flex items-center justify-center gap-2.5 hover:border-red-500/50 transition-colors">
            <RefreshCw className="w-4 h-4 text-red-400" />
            <span>{t.hero.updatedDaily}</span>
          </div>
        </div>

      </div>
    </section>
  );
};
