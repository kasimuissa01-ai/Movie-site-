import React from 'react';
import { Download, Star } from 'lucide-react';
import { APP_CONFIG } from '../appConfig';
import { Language, TranslationDictionary } from '../translations';

interface TechSpecSectionProps {
  lang: Language;
  t: TranslationDictionary;
  onDownloadClick: () => void;
}

export const TechSpecSection: React.FC<TechSpecSectionProps> = ({
  lang,
  t,
  onDownloadClick,
}) => {
  const specs = [
    { label: t.appInfoSection.rows.appName, value: APP_CONFIG.name },
    { label: t.appInfoSection.rows.latestVersion, value: `V${APP_CONFIG.version} (Build ${APP_CONFIG.versionCode})` },
    { label: t.appInfoSection.rows.fileSize, value: APP_CONFIG.apkSize },
    { label: t.appInfoSection.rows.supportedOs, value: "Android 5.0+, Smart TV & TV Box" },
    { label: t.appInfoSection.rows.pricing, value: lang === 'sw' ? '100% Bure (Bila Usajili)' : '100% Free (No subscription)' },
    { label: t.appInfoSection.rows.category, value: lang === 'sw' ? 'Burudani & Sinema' : 'Entertainment' },
    { label: t.appInfoSection.rows.languages, value: lang === 'sw' ? 'Kiswahili, English, na lugha nyingine 20+' : 'English, Kiswahili, Arabic, French, and 20+ more' },
    { label: t.appInfoSection.rows.developer, value: APP_CONFIG.publisher },
    { label: t.appInfoSection.rows.totalDownloads, value: "500,000+" },
  ];

  return (
    <section id="app-info" className="py-12 sm:py-16 bg-white border-b border-slate-200 scroll-mt-16">
      <div className="w-full max-w-3xl mx-auto px-6 sm:px-8">
        
        {/* Section Heading */}
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 text-center tracking-tight mb-3">
          {t.appInfoSection.heading}
        </h2>

        {/* Section Paragraph - Legible comfortable font size */}
        <p className="text-slate-700 text-base sm:text-lg leading-relaxed text-center max-w-2xl mx-auto mb-8 font-normal">
          {t.appInfoSection.description}
        </p>

        {/* Real Authentic Red App Icon Centered */}
        <div className="flex flex-col items-center mb-6">
          <div className="w-20 h-20 rounded-2xl overflow-hidden shadow-md ring-1 ring-slate-200 mb-4 bg-slate-950 shrink-0">
            <img
              src={APP_CONFIG.appIconSrc}
              alt={APP_CONFIG.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Quick Stats Row (Rating | MB | Downloads) with vertical dividers */}
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
              <span className="font-bold text-slate-900">{APP_CONFIG.apkSize}</span>
              <span className="text-xs text-slate-500 font-medium">Size</span>
            </div>

            <div className="w-px h-8 bg-slate-200" />

            <div className="flex flex-col items-center">
              <span className="font-bold text-slate-900">500K+</span>
              <span className="text-xs text-slate-500 font-medium">Downloads</span>
            </div>
          </div>

          {/* Download App Button (Vibrant Red) */}
          <button
            type="button"
            onClick={onDownloadClick}
            className="w-full max-w-xs py-3.5 px-6 rounded-xl font-extrabold text-white text-base bg-gradient-to-r from-red-600 via-rose-600 to-red-700 hover:from-red-500 hover:to-rose-500 active:scale-[0.98] shadow-md shadow-red-600/20 hover:shadow-lg transition-all flex items-center justify-center gap-2 mb-2"
          >
            <span className="w-5 h-5 rounded border-2 border-white flex items-center justify-center">
              <Download className="w-3 h-3 stroke-[3]" />
            </span>
            <span>{t.appInfoSection.downloadBtn}</span>
          </button>

          {/* Trust Caption */}
          <span className="text-xs sm:text-sm text-slate-500 font-medium">
            {t.appInfoSection.freeSecure}
          </span>
        </div>

        {/* Section Subheading: "App Info Card" */}
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 text-center mb-4 mt-10">
          {t.appInfoSection.cardHeading}
        </h3>

        {/* The App Information Chart/Table - Clean Light Mode with Dark & Red accents */}
        <div className="rounded-2xl border border-slate-300 overflow-hidden shadow-xs bg-white">
          <div className="divide-y divide-slate-200">
            {specs.map((item, idx) => (
              <div
                key={idx}
                className={`flex flex-col sm:flex-row sm:items-center justify-between px-5 py-3.5 text-sm sm:text-base gap-1.5 transition-colors ${
                  idx % 2 === 1 ? 'bg-slate-50/80' : 'bg-white'
                }`}
              >
                <span className="font-medium text-slate-600 sm:w-1/3">
                  {item.label}
                </span>
                <span className="font-bold text-slate-900 sm:w-2/3 sm:text-right">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
