import React, { useEffect } from 'react';
import { X, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { APP_CONFIG } from '../appConfig';
import { Language, TranslationDictionary } from '../translations';

interface VideoModalProps {
  isOpen: boolean;
  lang: Language;
  t: TranslationDictionary;
  onClose: () => void;
  onDownloadClick: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({
  isOpen,
  lang,
  t,
  onClose,
  onDownloadClick,
}) => {
  // History API integration so phone back button closes video modal
  useEffect(() => {
    if (!isOpen) return;

    window.history.pushState({ modal: 'video' }, '');

    const handlePopState = () => {
      onClose();
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-[#0b1325] rounded-3xl border border-slate-700/80 shadow-2xl overflow-hidden text-white flex flex-col">
        
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-[#070d18]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl overflow-hidden bg-slate-900 border border-red-500/30 shrink-0">
              <img
                src={APP_CONFIG.appIconSrc}
                alt={APP_CONFIG.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white">
                {lang === 'sw' ? 'Jinsi ya Kusakinisha Kwenye Simu Yako' : 'How to Install on Your Phone'}
              </h3>
              <p className="text-[11px] text-red-400 font-medium">MovieRoom APK Installation Guide</p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Real MP4 Video Player with Supabase URL (No Autoplay - user must click play) */}
        <div className="relative aspect-[16/9] bg-slate-950 overflow-hidden flex items-center justify-center">
          <video
            src="https://vqgnxqabvmmpfoiceass.supabase.co/storage/v1/object/public/simulizi-audio/lv_0_20261023230110.mp4"
            controls
            playsInline
            className="w-full h-full object-cover"
            poster="/images/screenshot_1.jpg"
          />
        </div>

        {/* Modal Footer Description & Download CTA */}
        <div className="p-6 bg-[#070d18] border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h4 className="text-sm font-bold text-white mb-1 flex items-center justify-center sm:justify-start gap-1.5">
              <ShieldCheck className="w-4 h-4 text-red-500" />
              <span>{lang === 'sw' ? 'Salama kabisa kwa kila simu ya Android' : '100% Safe & Easy Android Installation'}</span>
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              {lang === 'sw'
                ? 'Hii ndiyo jinsi ya kusakinisha kwenye simu yako.'
                : 'Follow along with the video guide to complete installation.'}
            </p>
          </div>

          <button
            type="button"
            onClick={() => {
              onClose();
              onDownloadClick();
            }}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-red-600 via-rose-600 to-red-700 hover:from-red-500 hover:to-rose-500 text-white font-extrabold text-xs sm:text-sm shadow-lg shadow-red-600/30 transition-all shrink-0 whitespace-nowrap flex items-center justify-center gap-2"
          >
            <CheckCircle2 className="w-4 h-4 text-white" />
            <span>{t.installGuide.step1.mockupBtn}</span>
          </button>
        </div>

      </div>
    </div>
  );
};
