import React from 'react';
import { Download } from 'lucide-react';
import { APP_CONFIG } from '../appConfig';

interface StickyMobileBarProps {
  visible: boolean;
  onDownloadClick: () => void;
}

export const StickyMobileBar: React.FC<StickyMobileBarProps> = ({ visible, onDownloadClick }) => {
  if (!visible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200/90 shadow-lg px-4 py-2.5 pb-safe animate-in slide-in-from-bottom duration-200 sm:hidden"
      style={{ maxHeight: '14vh' }} // Strictly stays below 15% mobile viewport limit
    >
      <div className="flex items-center justify-between gap-3 max-w-md mx-auto">
        
        {/* App Thumbnail + Name + Version */}
        <div className="flex items-center gap-2.5 min-w-0">
          <img
            src={APP_CONFIG.appIconSrc}
            alt={APP_CONFIG.name}
            className="w-10 h-10 rounded-xl object-cover ring-1 ring-slate-900/10 shrink-0"
            referrerPolicy="no-referrer"
          />
          <div className="min-w-0">
            <p className="text-xs font-bold text-slate-900 truncate leading-tight">
              {APP_CONFIG.name}
            </p>
            <p className="text-[11px] text-slate-500 truncate leading-tight mt-0.5">
              v{APP_CONFIG.version} · {APP_CONFIG.apkSize}
            </p>
          </div>
        </div>

        {/* Action Button */}
        <button
          type="button"
          onClick={onDownloadClick}
          className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 bg-rose-600 active:bg-rose-700 text-white font-semibold text-xs rounded-xl shadow-xs shrink-0 whitespace-nowrap focus:outline-none"
        >
          <Download className="w-3.5 h-3.5 stroke-[2.2]" />
          <span>Pakua APK</span>
        </button>

      </div>
    </div>
  );
};
