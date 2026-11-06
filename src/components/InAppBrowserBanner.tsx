import React, { useState } from 'react';
import { ExternalLink, MoreVertical, Copy, Check, X, Compass, AlertCircle } from 'lucide-react';
import { openInChrome, InAppBrowserInfo } from '../utils/inAppBrowser';
import { Language, TranslationDictionary } from '../translations';

interface InAppBrowserBannerProps {
  inAppInfo: InAppBrowserInfo;
  lang: Language;
  t: TranslationDictionary;
}

export const InAppBrowserBanner: React.FC<InAppBrowserBannerProps> = ({
  inAppInfo,
  lang: _lang,
  t,
}) => {
  const [dismissed, setDismissed] = useState(false);
  const [copied, setCopied] = useState(false);
  const [showGuide, setShowGuide] = useState(false);

  if (!inAppInfo.isInApp || dismissed) {
    return null;
  }

  const handleCopy = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleOpenChrome = () => {
    openInChrome();
  };

  return (
    <aside
      aria-label="Browser compatibility notice"
      className="sticky top-0 z-50 bg-[#070d18] border-b border-red-500/40 text-white shadow-xl px-4 py-2.5 animate-in slide-in-from-top duration-200"
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2.5">
        
        {/* Left message with indicator */}
        <div className="flex items-center gap-2.5 min-w-0 w-full sm:w-auto">
          <div className="w-8 h-8 rounded-lg bg-red-600/20 border border-red-500/40 text-red-400 flex items-center justify-center shrink-0">
            <Compass className="w-4 h-4 animate-spin [animation-duration:8s]" />
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs sm:text-sm font-extrabold text-white truncate">
                {t.inAppBrowser.bannerTitle}
              </span>
              {inAppInfo.appName && (
                <span className="text-[10px] font-mono font-bold text-red-300 bg-red-950/80 border border-red-500/30 px-1.5 py-0.2 rounded shrink-0">
                  {inAppInfo.appName}
                </span>
              )}
            </div>
            <p className="text-[11px] text-slate-300 truncate hidden xs:block">
              {t.inAppBrowser.bannerDesc}
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 shrink-0 w-full sm:w-auto justify-end">
          {/* Main Open In Chrome Button */}
          <button
            type="button"
            onClick={handleOpenChrome}
            className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-3.5 py-1.5 text-xs font-extrabold text-white bg-gradient-to-r from-red-600 via-rose-600 to-red-700 hover:from-red-500 hover:to-rose-500 active:scale-[0.98] rounded-lg shadow-md shadow-red-600/30 transition-all whitespace-nowrap"
          >
            <ExternalLink className="w-3.5 h-3.5 stroke-[2.5]" />
            <span>{t.inAppBrowser.openInChromeBtn}</span>
          </button>

          {/* Toggle 3-Dots Guide */}
          <button
            type="button"
            onClick={() => setShowGuide(!showGuide)}
            className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors border border-slate-700 flex items-center gap-1 text-xs px-2"
            title="Angalia jinsi ya kufungua kwenye Chrome"
          >
            <MoreVertical className="w-3.5 h-3.5 text-amber-400" />
            <span className="hidden sm:inline text-[11px] font-medium">Guide</span>
          </button>

          {/* Copy Link Button */}
          <button
            type="button"
            onClick={handleCopy}
            className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors border border-slate-700"
            title={t.inAppBrowser.copyLinkBtn}
            aria-label={t.inAppBrowser.copyLinkBtn}
          >
            {copied ? <Check className="w-3.5 h-3.5 text-red-400" /> : <Copy className="w-3.5 h-3.5" />}
          </button>

          {/* Dismiss Button */}
          <button
            type="button"
            onClick={() => setDismissed(true)}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Dismiss notice"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>

      {/* Expandable 3-Dots Step-by-Step Tooltip */}
      {showGuide && (
        <div className="mt-2 pt-2 border-t border-slate-800 text-xs text-slate-300 flex items-start gap-2 bg-slate-900/90 rounded-lg p-2.5 max-w-6xl mx-auto">
          <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
          <div className="flex-1">
            <p className="font-semibold text-white">
              {t.inAppBrowser.threeDotsGuide}
            </p>
            <p className="text-[11px] text-slate-400 mt-0.5">
              1. Bofya alama ya <strong>⋮</strong> au <strong>⋯</strong> juu kulia mwa skrini yako ya {inAppInfo.appName || 'social media'}.
              <br />
              2. Chagua <strong>"Open in Chrome"</strong> (au "Open in external browser").
            </p>
          </div>
        </div>
      )}
    </aside>
  );
};
