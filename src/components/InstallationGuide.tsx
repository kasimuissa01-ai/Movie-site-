import React from 'react';
import { Download, CheckCircle2 } from 'lucide-react';
import { APP_CONFIG } from '../appConfig';
import { Language, TranslationDictionary } from '../translations';

interface InstallationGuideProps {
  lang: Language;
  t: TranslationDictionary;
  onDownloadClick: () => void;
}

export const InstallationGuide: React.FC<InstallationGuideProps> = ({
  lang,
  t,
  onDownloadClick,
}) => {
  return (
    <section id="installation" className="py-12 sm:py-20 bg-white border-b border-slate-200 scroll-mt-16">
      <div className="w-full max-w-3xl mx-auto px-6 sm:px-8">
        
        {/* Section Heading */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 text-center tracking-tight mb-3">
          {t.installGuide.title}
        </h2>
        <p className="text-slate-600 text-base sm:text-lg text-center max-w-xl mx-auto mb-12 sm:mb-16">
          {t.installGuide.subtitle}
        </p>

        <div className="space-y-16 sm:space-y-20">
          
          {/* ================= STEP 1 ================= */}
          <div className="text-center">
            {/* Step 1 Label in Bold Red */}
            <span className="block text-red-600 font-extrabold text-lg sm:text-xl tracking-wide mb-1.5 uppercase">
              {t.installGuide.step1.stepLabel}
            </span>

            {/* Step 1 Title */}
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 mb-3">
              {t.installGuide.step1.title}
            </h3>

            {/* Step 1 Description - Clear, readable large font */}
            <p className="text-slate-700 text-base sm:text-lg leading-relaxed max-w-xl mx-auto mb-8 font-normal">
              {t.installGuide.step1.desc}
            </p>

            {/* Mockup Card 1 (Dark cinema mockup with real logo & red button) */}
            <div className="relative max-w-md mx-auto rounded-3xl bg-gradient-to-b from-[#121c2d] to-[#0a101d] border border-slate-700/80 p-6 sm:p-8 shadow-2xl text-white overflow-hidden group">
              
              {/* Top category bar inside mockup */}
              <div className="flex items-center justify-between text-xs text-slate-400 border-b border-slate-800 pb-3 mb-5 px-2">
                <span className="font-semibold text-slate-300">Categories</span>
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded bg-red-600/30 text-red-400 font-semibold font-mono text-xs">All</span>
                  <span className="hover:text-white">Swahili Dub</span>
                  <span className="hover:text-white">Action</span>
                </div>
              </div>

              {/* Real MovieRoom App Icon */}
              <div className="w-16 h-16 rounded-2xl overflow-hidden shadow-xl ring-2 ring-white/10 mx-auto mb-4 bg-slate-950 shrink-0">
                <img
                  src={APP_CONFIG.appIconSrc}
                  alt={APP_CONFIG.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Title & Description inside mockup */}
              <h4 className="text-lg sm:text-xl font-bold text-white mb-2">
                {t.installGuide.step1.mockupTitle}
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-xs mx-auto mb-6">
                {t.installGuide.step1.mockupSubtitle}
              </p>

              {/* Red Download Button with Clicking Hand */}
              <div className="relative inline-block w-full max-w-xs">
                <button
                  type="button"
                  onClick={onDownloadClick}
                  className="w-full py-3.5 px-5 rounded-xl font-extrabold text-white text-sm bg-gradient-to-r from-red-600 via-rose-600 to-red-700 shadow-lg shadow-red-600/25 flex items-center justify-center gap-2 hover:from-red-500 hover:to-rose-500 transition-all border border-red-500/30"
                >
                  <span className="w-4 h-4 rounded border-1.5 border-white flex items-center justify-center">
                    <Download className="w-2.5 h-2.5 stroke-[3]" />
                  </span>
                  <span>{t.installGuide.step1.mockupBtn}</span>
                </button>

                {/* 3D Pointer Hand Clicking Button */}
                <div className="absolute -bottom-5 -right-3 sm:-right-4 w-14 h-14 pointer-events-none select-none drop-shadow-2xl animate-pulse">
                  <svg viewBox="0 0 100 100" fill="none" className="w-full h-full filter drop-shadow">
                    <path
                      d="M30 65 L45 20 C46 16 52 16 53 20 L55 42 L65 42 C70 42 72 46 70 50 L68 53 L78 54 C82 55 83 60 79 63 L75 66 L82 70 C85 73 83 78 79 80 L52 95 C45 98 35 90 32 80 Z"
                      fill="#ffffff"
                      stroke="#cbd5e1"
                      strokeWidth="2.5"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* ================= STEP 2 ================= */}
          <div className="text-center">
            {/* Step 2 Label in Bold Red */}
            <span className="block text-red-600 font-extrabold text-lg sm:text-xl tracking-wide mb-1.5 uppercase">
              {t.installGuide.step2.stepLabel}
            </span>

            {/* Step 2 Title */}
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 mb-3">
              {t.installGuide.step2.title}
            </h3>

            {/* Step 2 Description - Readable large font */}
            <p className="text-slate-700 text-base sm:text-lg leading-relaxed max-w-xl mx-auto mb-8 font-normal">
              {t.installGuide.step2.desc}
            </p>

            {/* Mockup Card 2: Realistic Android System Dialog */}
            <div className="relative max-w-md mx-auto rounded-3xl bg-gradient-to-b from-[#121c2d] to-[#0a101d] border border-slate-700/80 p-8 shadow-2xl flex items-center justify-center min-h-[220px]">
              
              {/* Floating Android System Prompt Card */}
              <div className="w-full max-w-[290px] rounded-2xl bg-[#eaeff2] p-5 shadow-2xl text-slate-900 text-left border border-white/60 relative">
                
                {/* App icon & Name */}
                <div className="flex items-center gap-2.5 mb-3">
                  <div className="w-7 h-7 rounded-lg overflow-hidden bg-slate-950 p-0.5 shadow-xs shrink-0">
                    <img
                      src={APP_CONFIG.appIconSrc}
                      alt="MovieRoom"
                      className="w-full h-full object-cover rounded"
                    />
                  </div>
                  <span className="font-bold text-sm text-slate-900">MovieRoom</span>
                </div>

                {/* Dialog Prompt Question */}
                <p className="text-xs text-slate-700 font-medium mb-6">
                  {t.installGuide.step2.dialogPrompt}
                </p>

                {/* Dialog Action Buttons */}
                <div className="flex items-center justify-end gap-6 text-xs font-bold">
                  <span className="text-slate-500 cursor-pointer hover:underline">
                    {t.installGuide.step2.cancelBtn}
                  </span>
                  <span className="text-red-600 font-extrabold cursor-pointer hover:underline">
                    {t.installGuide.step2.installBtn}
                  </span>
                </div>

                {/* 3D Pointer Hand Clicking "Install" */}
                <div className="absolute -bottom-4 right-1 w-14 h-14 pointer-events-none select-none drop-shadow-2xl">
                  <svg viewBox="0 0 100 100" fill="none" className="w-full h-full filter drop-shadow">
                    <path
                      d="M30 65 L45 20 C46 16 52 16 53 20 L55 42 L65 42 C70 42 72 46 70 50 L68 53 L78 54 C82 55 83 60 79 63 L75 66 L82 70 C85 73 83 78 79 80 L52 95 C45 98 35 90 32 80 Z"
                      fill="#ffffff"
                      stroke="#cbd5e1"
                      strokeWidth="2.5"
                    />
                  </svg>
                </div>

              </div>

            </div>
          </div>

          {/* ================= STEP 3 ================= */}
          <div className="text-center">
            {/* Step 3 Label in Bold Red */}
            <span className="block text-red-600 font-extrabold text-lg sm:text-xl tracking-wide mb-1.5 uppercase">
              {t.installGuide.step3.stepLabel}
            </span>

            {/* Step 3 Title */}
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 mb-3">
              {t.installGuide.step3.title}
            </h3>

            {/* Step 3 Description - Readable large font */}
            <p className="text-slate-700 text-base sm:text-lg leading-relaxed max-w-xl mx-auto mb-8 font-normal">
              {t.installGuide.step3.desc}
            </p>

            {/* Mockup Card 3: Real MovieRoom App inside smartphone */}
            <div className="relative max-w-xs mx-auto rounded-[36px] bg-slate-950 p-2.5 shadow-2xl ring-1 ring-slate-800">
              <div className="rounded-[28px] overflow-hidden aspect-[9/16] bg-slate-900 relative">
                <img
                  src={APP_CONFIG.screenshots[0].src}
                  alt={APP_CONFIG.screenshots[0].alt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent flex items-end p-4">
                  <div className="flex items-center gap-2 text-white text-xs font-bold bg-red-600/90 backdrop-blur-xs px-3 py-1.5 rounded-full shadow-lg">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                    <span>{lang === 'sw' ? 'Imesakinishwa Tayari' : 'Installed Successfully'}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
