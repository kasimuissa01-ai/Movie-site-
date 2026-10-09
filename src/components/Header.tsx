import React, { useState } from 'react';
import { Download, Menu, X, Share2 } from 'lucide-react';
import { APP_CONFIG } from '../appConfig';

interface HeaderProps {
  onDownloadClick: () => void;
  onShareClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onDownloadClick, onShareClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 transition-shadow">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-8">
        
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#"
          className="text-xl font-bold tracking-tight text-slate-900 whitespace-nowrap shrink-0 hover:text-rose-600 transition-colors flex items-center gap-2"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-rose-600 inline-block" />
          <span>{APP_CONFIG.name}</span>
        </a>

        {/* Zone 2: 4-5 clean single-line text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600">
          <a
            href="#screenshots"
            className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0"
          >
            Muonekano
          </a>
          <a
            href="#about"
            className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0"
          >
            Kuhusu App
          </a>
          <a
            href="#features"
            className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0"
          >
            Sifa Kuu
          </a>
          <a
            href="#installation"
            className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0"
          >
            Usakinishaji
          </a>
          <a
            href="#specifications"
            className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0"
          >
            Maelezo ya Faili
          </a>
          <a
            href="#faq"
            className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0"
          >
            Maswali (FAQ)
          </a>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-2.5 shrink-0">
          <button
            type="button"
            onClick={onShareClick}
            aria-label="Sambaza MovieRoom"
            className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
            title="Sambaza App"
          >
            <Share2 className="w-4 h-4" />
          </button>

          <button
            type="button"
            onClick={onDownloadClick}
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-rose-600 hover:bg-rose-700 active:bg-rose-800 rounded-lg shadow-sm transition-all whitespace-nowrap shrink-0"
          >
            <Download className="w-4 h-4" />
            <span>Pakua APK</span>
          </button>

          {/* Mobile menu hamburger toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-600 hover:text-slate-900 rounded-lg"
            aria-label={mobileMenuOpen ? 'Funga menyu' : 'Fungua menyu'}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile navigation drop-down */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 py-4 space-y-3 animate-in slide-in-from-top-2 duration-150">
          <a
            href="#screenshots"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-slate-700 py-1.5 hover:text-rose-600"
          >
            Muonekano (Screenshots)
          </a>
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-slate-700 py-1.5 hover:text-rose-600"
          >
            Kuhusu MovieRoom
          </a>
          <a
            href="#features"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-slate-700 py-1.5 hover:text-rose-600"
          >
            Sifa Kuu
          </a>
          <a
            href="#installation"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-slate-700 py-1.5 hover:text-rose-600"
          >
            Jinsi ya Kusakinisha (Install)
          </a>
          <a
            href="#specifications"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-slate-700 py-1.5 hover:text-rose-600"
          >
            Maelezo ya Kifurushi (Specs)
          </a>
          <a
            href="#faq"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-slate-700 py-1.5 hover:text-rose-600"
          >
            Maswali Yanayoulizwa Mara kwa Mara
          </a>
          <div className="pt-2">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onDownloadClick();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-rose-600 text-white font-medium text-sm shadow-sm"
            >
              <Download className="w-4 h-4" />
              <span>Pakua APK ya MovieRoom ({APP_CONFIG.apkSize})</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
