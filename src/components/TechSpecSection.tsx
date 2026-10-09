import React from 'react';
import { Info } from 'lucide-react';
import { APP_CONFIG } from '../appConfig';

interface TechSpecProps {
  onPrivacyClick: () => void;
  onTermsClick: () => void;
}

export const TechSpecSection: React.FC<TechSpecProps> = ({ onPrivacyClick, onTermsClick }) => {
  const specs = [
    { label: 'Toleo la App (Version)', value: `${APP_CONFIG.version} (Build ${APP_CONFIG.versionCode})` },
    { label: 'Jina la Kifurushi (Package ID)', value: APP_CONFIG.packageName, mono: true },
    { label: 'Ukubwa wa Faili (APK Size)', value: APP_CONFIG.apkSize },
    { label: 'Toleo la Chini la Android', value: APP_CONFIG.minAndroid },
    { label: 'Toleo Lililolengwa (Target OS)', value: APP_CONFIG.targetAndroid },
    { label: 'Aina ya Programu (Category)', value: APP_CONFIG.category },
    { label: 'Tarehe ya Kutolewa', value: APP_CONFIG.lastUpdated },
    { label: 'Mchapishaji (Publisher)', value: APP_CONFIG.publisher },
  ];

  return (
    <section id="specifications" className="py-10 sm:py-16 border-b border-slate-200/80 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="mb-6 sm:mb-8">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-rose-600 mb-1">
            <Info className="w-3.5 h-3.5" />
            <span>Maelezo ya Programu</span>
          </div>
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
            Taarifa za Faili ya {APP_CONFIG.name}
          </h2>
          <p className="text-sm text-slate-500 mt-1">
            Taarifa rasmi za kifurushi cha programu kwa ajili ya simu yako ya Android.
          </p>
        </div>

        {/* Clean Spec Grid - No SHA or developer examination */}
        <div className="bg-slate-50/70 rounded-2xl border border-slate-200/80 overflow-hidden shadow-2xs divide-y divide-slate-200/60">
          <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-slate-200/60">
            
            {/* Left column */}
            <div className="divide-y divide-slate-200/60">
              {specs.slice(0, 4).map((spec, i) => (
                <div key={i} className="px-5 py-3.5 flex justify-between items-center text-xs sm:text-sm">
                  <span className="text-slate-500 font-medium">{spec.label}</span>
                  <span className={`text-slate-900 font-semibold ${spec.mono ? 'font-mono text-xs' : ''}`}>
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Right column */}
            <div className="divide-y divide-slate-200/60">
              {specs.slice(4).map((spec, i) => (
                <div key={i} className="px-5 py-3.5 flex justify-between items-center text-xs sm:text-sm">
                  <span className="text-slate-500 font-medium">{spec.label}</span>
                  <span className={`text-slate-900 font-semibold ${spec.mono ? 'font-mono text-xs' : ''}`}>
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* Legal & Policy Links */}
        <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500 px-1">
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={onPrivacyClick}
              className="text-rose-600 hover:underline font-medium"
            >
              Sera ya Faragha (Privacy Policy)
            </button>
            <span>·</span>
            <button
              type="button"
              onClick={onTermsClick}
              className="text-rose-600 hover:underline font-medium"
            >
              Masharti ya Matumizi (Terms)
            </button>
          </div>
          <div>
            <span>Msaada kwa barua pepe: </span>
            <a href={`mailto:${APP_CONFIG.supportEmail}`} className="text-rose-600 hover:underline font-medium">
              {APP_CONFIG.supportEmail}
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
