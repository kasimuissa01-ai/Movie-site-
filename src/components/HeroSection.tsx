import React from 'react';
import { Download, ShieldCheck, HelpCircle, Share2, QrCode } from 'lucide-react';
import { APP_CONFIG } from '../appConfig';

interface HeroSectionProps {
  onDownloadClick: () => void;
  onShareClick: () => void;
  onQrClick: () => void;
  heroRef?: React.RefObject<HTMLDivElement | null>;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onDownloadClick,
  onShareClick,
  onQrClick,
  heroRef,
}) => {
  return (
    <section ref={heroRef} className="pt-6 sm:pt-10 pb-8 sm:pb-12 border-b border-slate-200/80 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Main App Hero Header */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8">
          
          {/* App Icon (Sleek Cinema Squircle) */}
          <div className="shrink-0 relative group">
            <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-[22px] sm:rounded-[28px] overflow-hidden bg-slate-950 shadow-lg ring-1 ring-slate-900/10 transition-transform group-hover:scale-[1.02]">
              <img
                src={APP_CONFIG.appIconSrc}
                alt={`${APP_CONFIG.name} App Icon`}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Android indicator dot icon */}
            <span
              className="absolute -bottom-1 -right-1 bg-white p-1 rounded-full shadow-sm ring-1 ring-slate-200"
              title="Native Android Package"
            >
              <svg className="w-4 h-4 text-emerald-600" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.551 0 .9993.4482.9993.9993 0 .5511-.4483.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9994.4482.9994.9993 0 .5511-.4483.9997-.9994.9997m11.4045-6.02l1.996-3.4572c.106-.1837.043-.4182-.1407-.5242-.1838-.1061-.4183-.043-.5243.1408l-2.0254 3.508c-1.464-.666-3.109-1.0366-4.8867-1.0366-1.7777 0-3.4226.3706-4.8866 1.0366L5.3888 5.4808c-.106-.1838-.3405-.2469-.5243-.1408-.1837.106-.2467.3405-.1407.5242l1.996 3.4572C3.1257 11.2346 1 14.5428 1 18.3636h22c0-3.8208-2.1257-7.129-5.1185-9.0422" />
              </svg>
            </span>
          </div>

          {/* Title, Developer, Metadata & Primary Action */}
          <div className="flex-1 text-center sm:text-left">
            
            {/* Top row: Developer & Badge */}
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 text-xs font-medium text-slate-500 mb-1.5">
              <span className="text-rose-600 font-semibold">{APP_CONFIG.publisher}</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span>{APP_CONFIG.category}</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded text-[11px] font-semibold border border-emerald-200/60">
                {APP_CONFIG.androidBadgeText}
              </span>
            </div>

            {/* App Name */}
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-2">
              {APP_CONFIG.name}
            </h1>

            {/* Tagline */}
            <p className="text-base text-slate-600 leading-relaxed max-w-xl mb-4">
              {APP_CONFIG.tagline}
            </p>

            {/* Unboxed Metadata Strip */}
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-3 gap-y-1 text-xs text-slate-500 mb-6">
              <span className="font-medium text-slate-700">v{APP_CONFIG.version}</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span className="font-mono tabular-nums">{APP_CONFIG.apkSize}</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span>Requires {APP_CONFIG.minAndroid.split('(')[0]}</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span>{APP_CONFIG.lastUpdated}</span>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3">
              {/* Primary Prominent Download Button */}
              <button
                type="button"
                onClick={onDownloadClick}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-rose-600 hover:bg-rose-700 active:bg-rose-800 text-white font-semibold text-base rounded-xl shadow-md hover:shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2 min-w-[200px]"
              >
                <Download className="w-5 h-5 stroke-[2.2]" />
                <span>Pakua APK (Download)</span>
                <span className="text-xs font-normal text-rose-100 bg-rose-700/60 px-1.5 py-0.5 rounded ml-1 font-mono">
                  {APP_CONFIG.apkSize}
                </span>
              </button>

              {/* Secondary Explore / Install button */}
              <a
                href="#installation"
                className="inline-flex items-center justify-center gap-2 px-4 py-3.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium text-sm rounded-xl transition-colors"
              >
                <HelpCircle className="w-4 h-4 text-slate-500" />
                <span>Jinsi ya Kusakinisha</span>
              </a>

              {/* QR Code button */}
              <button
                type="button"
                onClick={onQrClick}
                aria-label="Scan QR Code to download on mobile"
                title="Scan QR code on your phone"
                className="hidden sm:inline-flex items-center justify-center gap-1.5 p-3.5 text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors"
              >
                <QrCode className="w-5 h-5" />
              </button>

              {/* Share button */}
              <button
                type="button"
                onClick={onShareClick}
                aria-label="Share MovieRoom APK link"
                title="Sambaza APK ya MovieRoom"
                className="inline-flex items-center justify-center gap-1.5 p-3.5 text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors"
              >
                <Share2 className="w-5 h-5" />
              </button>
            </div>

            {/* Trust & Verification note */}
            <div className="mt-4 flex items-center justify-center sm:justify-start gap-1.5 text-xs text-slate-500">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Kifurushi Rasmi cha Android · Hakina Virusi · Bure Kabisa</span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
