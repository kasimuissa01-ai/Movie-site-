import React from 'react';
import { Mail, ShieldCheck } from 'lucide-react';
import { APP_CONFIG } from '../appConfig';
import { Language, TranslationDictionary } from '../translations';

interface FooterProps {
  lang: Language;
  t: TranslationDictionary;
  onPrivacyClick: () => void;
  onTermsClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  lang,
  t,
  onPrivacyClick,
  onTermsClick,
}) => {
  return (
    <footer className="bg-slate-900 text-slate-400 text-xs pt-12 pb-20 sm:pb-12 border-t border-slate-800">
      <div className="w-full max-w-5xl mx-auto px-6 sm:px-8">
        
        <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-6 pb-8 border-b border-slate-800 text-center sm:text-left">
          
          {/* Brand & Developer identity */}
          <div className="space-y-2">
            <div className="flex items-center justify-center sm:justify-start gap-2.5">
              <div className="w-7 h-7 rounded-lg overflow-hidden bg-white/10 ring-1 ring-white/20">
                <img
                  src={APP_CONFIG.appIconSrc}
                  alt={APP_CONFIG.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-base font-extrabold text-white">{APP_CONFIG.name} APK</span>
              <span className="text-[10px] font-bold text-red-400 bg-red-950/80 px-2 py-0.5 rounded border border-red-800/60 font-mono">
                v{APP_CONFIG.version}
              </span>
            </div>
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              {lang === 'sw'
                ? 'Tovuti rasmi ya upakuaji wa faili ya APK ya MovieRoom kwa watumiaji wa simu na tablets za Android.'
                : 'Official APK distribution website for MovieRoom on Android smartphones and tablets.'}
            </p>
          </div>

          {/* Links & Contacts */}
          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-x-5 gap-y-2 text-slate-300 font-medium">
            <button
              type="button"
              onClick={onPrivacyClick}
              className="hover:text-white transition-colors"
            >
              {t.footer.privacy}
            </button>
            <span aria-hidden="true" className="text-slate-700">·</span>
            <button
              type="button"
              onClick={onTermsClick}
              className="hover:text-white transition-colors"
            >
              {t.footer.terms}
            </button>
            <span aria-hidden="true" className="text-slate-700">·</span>
            <button
              type="button"
              onClick={onTermsClick}
              className="hover:text-white transition-colors"
            >
              {t.footer.dmca}
            </button>
            <span aria-hidden="true" className="text-slate-700">·</span>
            <a
              href={`mailto:${APP_CONFIG.supportEmail}`}
              className="inline-flex items-center gap-1.5 hover:text-white transition-colors text-red-400"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>{APP_CONFIG.supportEmail}</span>
            </a>
          </div>

        </div>

        {/* Disclaimer Box (MovieBox style) */}
        <div className="pt-6 pb-6 border-b border-slate-800 text-slate-400 text-[11px] leading-relaxed">
          <p className="font-semibold text-slate-300 mb-1">
            {t.footer.disclaimerTitle}
          </p>
          <p>
            {t.footer.disclaimerText}
          </p>
        </div>

        {/* Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-slate-500 text-[11px]">
          <p>
            © {new Date().getFullYear()} {APP_CONFIG.publisher}. {t.footer.rights}
          </p>
          <p className="max-w-md text-center sm:text-right">
            Android, Google Play, and the Google Play logo are trademarks of Google LLC.
          </p>
        </div>

      </div>
    </footer>
  );
};
