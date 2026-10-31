import React, { useState } from 'react';
import { Download, Menu, X, Globe } from 'lucide-react';
import { APP_CONFIG } from '../appConfig';
import { Language, TranslationDictionary } from '../translations';

interface HeaderProps {
  lang: Language;
  t: TranslationDictionary;
  onToggleLang: () => void;
  onDownloadClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  lang,
  t,
  onToggleLang,
  onDownloadClick,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-2xs w-full overflow-hidden">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-2 sm:gap-4">
        
        {/* Left: Mobile hamburger + Real Brand Logo */}
        <div className="flex items-center gap-1.5 sm:gap-3 min-w-0">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 sm:p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors shrink-0"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          {/* Authentic Red MovieRoom Logo */}
          <a
            href="#"
            className="flex items-center gap-2 text-slate-900 hover:opacity-90 transition-opacity group min-w-0"
          >
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl overflow-hidden shadow-xs ring-1 ring-red-500/20 bg-slate-950 shrink-0">
              <img
                src={APP_CONFIG.appIconSrc}
                alt={APP_CONFIG.name}
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-base sm:text-xl font-extrabold tracking-tight text-slate-900 flex items-center gap-1 truncate">
              <span className="truncate">{APP_CONFIG.name}</span>
              <span className="text-[9px] sm:text-[10px] font-bold text-red-600 bg-red-50 border border-red-200 px-1 py-0.5 rounded uppercase tracking-wider font-mono shrink-0">
                APK
              </span>
            </span>
          </a>
        </div>

        {/* Center Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-semibold text-slate-600">
          <a href="#" className="hover:text-red-600 transition-colors py-1">
            {t.nav.home}
          </a>
          <a href="#app-info" className="hover:text-red-600 transition-colors py-1">
            {t.nav.appInfo}
          </a>
          <a href="#what-is" className="hover:text-red-600 transition-colors py-1">
            {lang === 'sw' ? 'Kuhusu' : 'About'}
          </a>
          <a href="#installation" className="hover:text-red-600 transition-colors py-1">
            {t.nav.howToInstall}
          </a>
          <a href="#why-choose" className="hover:text-red-600 transition-colors py-1">
            {lang === 'sw' ? 'Kwanini MovieRoom' : 'Why Choose'}
          </a>
          <a href="#screenshots" className="hover:text-red-600 transition-colors py-1">
            {t.nav.screenshots}
          </a>
          <a href="#faq" className="hover:text-red-600 transition-colors py-1">
            {t.nav.faq}
          </a>
        </nav>

        {/* Right Actions: Language Switcher + Dark & Red Download Button */}
        <div className="flex items-center gap-2 sm:gap-3">
          
          {/* Language Toggle Button */}
          <button
            type="button"
            onClick={onToggleLang}
            className="inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 active:bg-slate-300 rounded-lg border border-slate-200 transition-colors"
            title={lang === 'sw' ? 'Switch to English' : 'Badili kwenda Kiswahili'}
            aria-label="Switch Language"
          >
            <Globe className="w-3.5 h-3.5 text-red-600" />
            <span className="uppercase font-mono">{lang === 'sw' ? 'SW' : 'EN'}</span>
          </button>

          {/* Polished Red Download App Button */}
          <button
            type="button"
            onClick={onDownloadClick}
            className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 text-xs sm:text-sm font-extrabold text-white bg-gradient-to-r from-red-600 via-rose-600 to-red-700 hover:from-red-500 hover:to-rose-500 active:scale-[0.98] rounded-xl shadow-md shadow-red-600/20 hover:shadow-red-600/30 transition-all shrink-0 whitespace-nowrap"
          >
            <span className="w-4 h-4 rounded border-1.5 border-white flex items-center justify-center shrink-0">
              <Download className="w-2.5 h-2.5 stroke-[3]" />
            </span>
            <span>{t.nav.downloadApk}</span>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-5 space-y-2 shadow-lg animate-in slide-in-from-top-2 duration-150">
          <a
            href="#"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-semibold text-slate-800 hover:text-red-600 hover:bg-red-50 rounded-lg"
          >
            {t.nav.home}
          </a>
          <a
            href="#app-info"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-semibold text-slate-800 hover:text-red-600 hover:bg-red-50 rounded-lg"
          >
            {t.nav.appInfo}
          </a>
          <a
            href="#what-is"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-semibold text-slate-800 hover:text-red-600 hover:bg-red-50 rounded-lg"
          >
            {lang === 'sw' ? 'Kuhusu' : 'About'}
          </a>
          <a
            href="#installation"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-semibold text-slate-800 hover:text-red-600 hover:bg-red-50 rounded-lg"
          >
            {t.nav.howToInstall}
          </a>
          <a
            href="#why-choose"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-semibold text-slate-800 hover:text-red-600 hover:bg-red-50 rounded-lg"
          >
            {lang === 'sw' ? 'Kwanini MovieRoom' : 'Why Choose'}
          </a>
          <a
            href="#screenshots"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-semibold text-slate-800 hover:text-red-600 hover:bg-red-50 rounded-lg"
          >
            {t.nav.screenshots}
          </a>
          <a
            href="#faq"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-semibold text-slate-800 hover:text-red-600 hover:bg-red-50 rounded-lg"
          >
            {t.nav.faq}
          </a>
        </div>
      )}
    </header>
  );
};
