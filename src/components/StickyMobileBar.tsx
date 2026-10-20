import React from 'react';
import { Download } from 'lucide-react';
import { APP_CONFIG } from '../appConfig';
import { Language, TranslationDictionary } from '../translations';

interface StickyMobileBarProps {
  visible: boolean;
  lang: Language;
  t: TranslationDictionary;
  onDownloadClick: () => void;
}

export const StickyMobileBar: React.FC<StickyMobileBarProps> = ({
  visible,
  lang,
  t,
  onDownloadClick,
}) => {
  if (!visible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 shadow-2xl px-6 py-2.5 pb-safe animate-in slide-in-from-bottom duration-200 sm:hidden"
      style={{ maxHeight: '14vh' }}
    >
      <div className="flex items-center justify-between gap-3 max-w-md mx-auto">
        
        {/* App Thumbnail + Name + Version */}
        <div className="flex items-center gap-2.5 min-w-0">
          <div className="w-10 h-10 rounded-xl overflow-hidden ring-1 ring-red-500/30 shrink-0 bg-slate-950">
            <img
              src={APP_CONFIG.appIconSrc}
              alt={APP_CONFIG.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="min-w-0">
            <p className="text-xs font-bold text-slate-900 truncate leading-tight">
              {APP_CONFIG.name}
            </p>
            <p className="text-[11px] text-slate-500 truncate leading-tight mt-0.5">
              {t.stickyBar.version}
            </p>
          </div>
        </div>

        {/* Action Button with Vibrant Red Gradient */}
        <button
          type="button"
          onClick={onDownloadClick}
          className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 bg-gradient-to-r from-red-600 via-rose-600 to-red-700 active:scale-[0.98] text-white font-extrabold text-xs rounded-xl shadow-md shadow-red-600/20 shrink-0 whitespace-nowrap focus:outline-none"
        >
          <span className="w-4 h-4 rounded border-1.5 border-white flex items-center justify-center">
            <Download className="w-2.5 h-2.5 stroke-[3]" />
          </span>
          <span>{t.stickyBar.downloadBtn}</span>
        </button>

      </div>
    </div>
  );
};
