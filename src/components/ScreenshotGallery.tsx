import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { APP_CONFIG, AppScreenshot } from '../appConfig';

interface ScreenshotGalleryProps {
  onScreenshotClick: (screenshot: AppScreenshot, index: number) => void;
}

export const ScreenshotGallery: React.FC<ScreenshotGalleryProps> = ({ onScreenshotClick }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -340 : 340;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="screenshots" className="py-8 sm:py-12 border-b border-slate-200/80 bg-slate-50/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex items-end justify-between mb-6">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
              Muonekano wa Ndani ya {APP_CONFIG.name}
            </h2>
            <p className="text-sm text-slate-500 mt-0.5">
              Gundua jinsi programu ya MovieRoom inavyoonekana kwenye simu yako. Gusa picha yoyote kuikuza (lightbox).
            </p>
          </div>

          {/* Desktop Scroll Controls */}
          <div className="hidden sm:flex items-center gap-1.5">
            <button
              type="button"
              onClick={() => scroll('left')}
              className="p-2 rounded-lg bg-white border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors shadow-2xs"
              aria-label="Scroll screenshots left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={() => scroll('right')}
              className="p-2 rounded-lg bg-white border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors shadow-2xs"
              aria-label="Scroll screenshots right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Horizontal Scroll Track */}
        <div
          ref={scrollContainerRef}
          className="flex gap-4 sm:gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory py-2 -mx-4 px-4 sm:mx-0 sm:px-0"
          tabIndex={0}
          aria-label="App screenshot gallery"
        >
          {APP_CONFIG.screenshots.map((screen, idx) => (
            <div
              key={screen.id}
              onClick={() => onScreenshotClick(screen, idx)}
              className="snap-center shrink-0 w-[240px] sm:w-[280px] group cursor-pointer"
            >
              {/* Phone Mockup Frame */}
              <div className="relative rounded-[24px] sm:rounded-[28px] overflow-hidden bg-slate-900 shadow-md ring-1 ring-slate-900/10 transition-all duration-200 group-hover:shadow-xl group-hover:-translate-y-1">
                
                {/* 9:16 Aspect Ratio container */}
                <div className="aspect-[9/16] w-full overflow-hidden bg-slate-950 flex items-center justify-center">
                  <img
                    src={screen.src}
                    alt={screen.alt}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Hover overlay hint */}
                <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                  <div className="bg-white/90 backdrop-blur-sm text-slate-900 rounded-full px-3 py-1.5 text-xs font-semibold flex items-center gap-1.5 shadow-md">
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>Expand</span>
                  </div>
                </div>
              </div>

              {/* Caption */}
              <div className="mt-3 px-1 text-center sm:text-left">
                <p className="text-xs font-semibold text-slate-800">{screen.title}</p>
                <p className="text-[11px] text-slate-500 line-clamp-2 mt-0.5 leading-relaxed">
                  {screen.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Swipe Hint */}
        <p className="sm:hidden text-center text-[11px] text-slate-400 mt-3">
          ← Swipe left or right to view more screens →
        </p>

      </div>
    </section>
  );
};
