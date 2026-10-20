import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, Maximize2, Smartphone } from 'lucide-react';
import { APP_CONFIG, AppScreenshot } from '../appConfig';
import { Language, TranslationDictionary } from '../translations';

interface ScreenshotGalleryProps {
  lang: Language;
  t: TranslationDictionary;
  onScreenshotClick: (screenshot: AppScreenshot, index: number) => void;
}

export const ScreenshotGallery: React.FC<ScreenshotGalleryProps> = ({
  lang,
  t,
  onScreenshotClick,
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -320 : 320;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const screenshotsData = [
    {
      ...APP_CONFIG.screenshots[0],
      title: lang === 'sw' ? 'Mkusanyiko wa Filamu za Kiswahili' : 'Swahili & Global Movies Feed',
      caption: lang === 'sw' ? 'Maelfu ya filamu zilizotafsiriwa kwa Kiswahili na ma-DJ maarufu.' : 'Thousands of blockbusters and Swahili-dubbed titles with HD posters.',
    },
    {
      ...APP_CONFIG.screenshots[1],
      title: lang === 'sw' ? 'Video Player ya Kisasa' : 'Modern Gesture Video Player',
      caption: lang === 'sw' ? 'Vidhibiti vya mwangaza, sauti, na kufunga skrini kwa kidole.' : 'Swipe controls for volume, brightness, aspect ratio, and lock screen.',
    },
    {
      ...APP_CONFIG.screenshots[2],
      title: lang === 'sw' ? 'Pakua Utazame Bila Bando (Offline)' : 'Offline High-Speed Downloads',
      caption: lang === 'sw' ? 'Pakua filamu na utazame safarini hata ukiwa huna intaneti.' : 'Save movies straight to your storage and stream smoothly offline.',
    },
  ];

  return (
    <section id="screenshots" className="py-12 sm:py-20 bg-slate-50/70 border-b border-slate-200 scroll-mt-16">
      <div className="w-full max-w-5xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-red-600 mb-1.5">
              <Smartphone className="w-4 h-4 text-red-600" />
              <span>{lang === 'sw' ? 'Picha za Ndani ya App' : 'App Screenshots'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              {t.screenshots.title}
            </h2>
            <p className="text-base text-slate-600 mt-1">
              {t.screenshots.subtitle} · <span className="text-red-600 font-semibold">{t.screenshots.clickToZoom}</span>
            </p>
          </div>

          {/* Navigation arrow buttons */}
          <div className="hidden sm:flex items-center gap-2">
            <button
              type="button"
              onClick={() => scroll('left')}
              className="p-2.5 rounded-xl border border-slate-300 bg-white hover:bg-slate-100 text-slate-700 transition-colors shadow-2xs"
              aria-label="Previous screenshot"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={() => scroll('right')}
              className="p-2.5 rounded-xl border border-slate-300 bg-white hover:bg-slate-100 text-slate-700 transition-colors shadow-2xs"
              aria-label="Next screenshot"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Horizontal Scroll Track */}
        <div
          ref={scrollContainerRef}
          className="flex gap-5 sm:gap-7 overflow-x-auto no-scrollbar snap-x snap-mandatory py-2 -mx-4 px-4 sm:mx-0 sm:px-0"
          tabIndex={0}
          aria-label="App screenshot gallery"
        >
          {screenshotsData.map((screen, idx) => (
            <div
              key={screen.id}
              onClick={() => onScreenshotClick(screen, idx)}
              className="snap-center shrink-0 w-[250px] sm:w-[290px] group cursor-pointer"
            >
              {/* Phone Mockup Frame */}
              <div className="relative rounded-[28px] overflow-hidden bg-slate-950 shadow-md ring-1 ring-slate-900/10 transition-all duration-200 group-hover:shadow-xl group-hover:-translate-y-1">
                
                {/* 9:16 Aspect Ratio container */}
                <div className="aspect-[9/16] w-full overflow-hidden bg-slate-950 flex items-center justify-center">
                  <img
                    src={screen.src}
                    alt={screen.alt}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                    loading="lazy"
                  />
                </div>

                {/* Hover overlay hint */}
                <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                  <div className="bg-white/95 backdrop-blur-sm text-slate-900 rounded-full px-4 py-2 text-xs sm:text-sm font-bold flex items-center gap-1.5 shadow-md">
                    <Maximize2 className="w-4 h-4 text-red-600" />
                    <span>{lang === 'sw' ? 'Kuza Picha' : 'Expand'}</span>
                  </div>
                </div>
              </div>

              {/* Caption - Larger font size */}
              <div className="mt-3 px-1 text-center sm:text-left">
                <p className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-red-600 transition-colors">
                  {screen.title}
                </p>
                <p className="text-xs sm:text-sm text-slate-600 line-clamp-2 mt-1 leading-relaxed">
                  {screen.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
