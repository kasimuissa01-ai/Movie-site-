import React from 'react';
import { Mail } from 'lucide-react';
import { APP_CONFIG } from '../appConfig';

interface FooterProps {
  onPrivacyClick: () => void;
  onTermsClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onPrivacyClick,
  onTermsClick,
}) => {
  return (
    <footer className="bg-white border-t border-slate-200/80 pt-10 pb-16 sm:pb-12 text-slate-500 text-xs">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-6 pb-8 border-b border-slate-100 text-center sm:text-left">
          
          {/* Brand & Developer identity */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-center sm:justify-start gap-2">
              <span className="text-base font-bold text-slate-900">{APP_CONFIG.name}</span>
              <span className="text-[11px] font-semibold text-rose-700 bg-rose-50 px-2 py-0.5 rounded border border-rose-200/50">
                v{APP_CONFIG.version}
              </span>
            </div>
            <p className="text-xs text-slate-500 max-w-sm">
              Ukurasa rasmi wa kupakua programu ya {APP_CONFIG.name} (APK) kwa vifaa vya Android.
            </p>
          </div>

          {/* Links & Contacts */}
          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-x-5 gap-y-2">
            <button
              type="button"
              onClick={onPrivacyClick}
              className="hover:text-rose-600 transition-colors"
            >
              Sera ya Faragha
            </button>
            <span aria-hidden="true" className="text-slate-300">·</span>
            <button
              type="button"
              onClick={onTermsClick}
              className="hover:text-rose-600 transition-colors"
            >
              Masharti ya Matumizi
            </button>
            <span aria-hidden="true" className="text-slate-300">·</span>
            <a
              href={`mailto:${APP_CONFIG.supportEmail}`}
              className="inline-flex items-center gap-1 hover:text-rose-600 transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>{APP_CONFIG.supportEmail}</span>
            </a>
          </div>

        </div>

        {/* Disclaimer & Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-slate-400 text-[11px]">
          <p>
            © {new Date().getFullYear()} {APP_CONFIG.publisher}. Haki zote zimehifadhiwa.
          </p>
          <p className="max-w-md text-center sm:text-right">
            Android, Google Play, na nembo ya Google Play ni alama za biashara za Google LLC. Ukurasa huu ni tovuti rasmi ya usambazaji wa kujitegemea wa {APP_CONFIG.name}.
          </p>
        </div>

      </div>
    </footer>
  );
};
