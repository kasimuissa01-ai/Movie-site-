import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { AppScreenshot } from '../appConfig';

interface LightboxModalProps {
  screenshot: AppScreenshot | null;
  screenshots: AppScreenshot[];
  currentIndex: number;
  onClose: () => void;
  onNavigate: (newIndex: number) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  screenshot,
  screenshots,
  currentIndex,
  onClose,
  onNavigate,
}) => {
  useEffect(() => {
    if (!screenshot) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') {
        onNavigate((currentIndex - 1 + screenshots.length) % screenshots.length);
      }
      if (e.key === 'ArrowRight') {
        onNavigate((currentIndex + 1) % screenshots.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [screenshot, currentIndex, screenshots.length, onClose, onNavigate]);

  if (!screenshot) return null;

  const prevIndex = (currentIndex - 1 + screenshots.length) % screenshots.length;
  const nextIndex = (currentIndex + 1) % screenshots.length;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-150"
      onClick={onClose}
    >
      {/* Lightbox Container */}
      <div
        className="relative max-w-sm sm:max-w-md w-full flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute -top-12 right-0 sm:-right-8 p-2 text-white/80 hover:text-white bg-slate-800/80 hover:bg-slate-700 rounded-full transition-colors"
          aria-label="Close screenshot preview"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Screenshot Viewport Frame */}
        <div className="relative rounded-[32px] overflow-hidden bg-slate-900 shadow-2xl ring-1 ring-white/10 max-h-[78vh] flex items-center justify-center">
          <img
            src={screenshot.src}
            alt={screenshot.alt}
            className="w-full max-h-[78vh] object-contain"
            referrerPolicy="no-referrer"
          />

          {/* Nav buttons */}
          <button
            type="button"
            onClick={() => onNavigate(prevIndex)}
            className="absolute left-2.5 top-1/2 -translate-y-1/2 p-2 rounded-full bg-slate-900/70 hover:bg-slate-900 text-white backdrop-blur-xs transition-colors"
            aria-label="Previous screenshot"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={() => onNavigate(nextIndex)}
            className="absolute right-2.5 top-1/2 -translate-y-1/2 p-2 rounded-full bg-slate-900/70 hover:bg-slate-900 text-white backdrop-blur-xs transition-colors"
            aria-label="Next screenshot"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Caption */}
        <div className="mt-3.5 text-center text-white px-4">
          <p className="text-sm font-semibold">{screenshot.title}</p>
          <p className="text-xs text-slate-300 mt-0.5">{screenshot.caption}</p>
          <p className="text-[10px] text-slate-400 mt-1 font-mono">
            {currentIndex + 1} of {screenshots.length}
          </p>
        </div>
      </div>
    </div>
  );
};
