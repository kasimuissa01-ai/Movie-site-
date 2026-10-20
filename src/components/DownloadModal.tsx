import React, { useEffect, useState } from 'react';
import {
  X,
  CheckCircle2,
  Download,
  Copy,
  Check,
  ArrowRight,
  ShieldCheck,
  QrCode,
  Loader2,
  Lock,
  Smartphone,
} from 'lucide-react';
import QRCode from 'qrcode';
import { APP_CONFIG } from '../appConfig';
import { DownloadProgress } from '../utils/apkDownloader';
import { Language, TranslationDictionary } from '../translations';

interface DownloadModalProps {
  isOpen: boolean;
  lang: Language;
  t: TranslationDictionary;
  progress: DownloadProgress;
  onClose: () => void;
  onRetryDownload: () => void;
}

export const DownloadModal: React.FC<DownloadModalProps> = ({
  isOpen,
  lang,
  t,
  progress,
  onClose,
  onRetryDownload,
}) => {
  const [copiedLink, setCopiedLink] = useState(false);
  const [qrDataUrl, setQrDataUrl] = useState<string>('');
  const [showQr, setShowQr] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    QRCode.toDataURL(APP_CONFIG.apkDownloadUrl, {
      width: 180,
      margin: 1,
      color: {
        dark: '#0f172a',
        light: '#ffffff',
      },
    })
      .then((url) => setQrDataUrl(url))
      .catch((err) => console.error('Error generating QR:', err));
  }, [isOpen]);

  if (!isOpen) return null;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(APP_CONFIG.apkDownloadUrl);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const formatMb = (bytes: number) => {
    return (bytes / (1024 * 1024)).toFixed(1);
  };

  const isCompleted = progress.status === 'completed' || progress.percent >= 100;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-xs animate-in fade-in duration-150">
      <div
        className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden animate-in zoom-in-95 duration-150"
        role="dialog"
        aria-modal="true"
        aria-labelledby="download-modal-title"
      >
        {/* Top Accent Strip - Dark & Red Gradient */}
        <div className="h-1.5 bg-gradient-to-r from-red-600 via-rose-600 to-red-700 w-full" />

        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-colors"
          aria-label={lang === 'sw' ? 'Funga dirisha' : 'Close window'}
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-6 sm:p-7">
          
          {/* Header */}
          <div className="flex items-center gap-3.5 mb-5">
            <div
              className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 transition-colors shadow-xs ${
                isCompleted
                  ? 'bg-red-600 text-white'
                  : 'bg-red-50 text-red-600'
              }`}
            >
              {isCompleted ? (
                <CheckCircle2 className="w-7 h-7 stroke-[2.5]" />
              ) : (
                <Loader2 className="w-7 h-7 animate-spin stroke-[2.2]" />
              )}
            </div>
            <div>
              <h3 id="download-modal-title" className="text-lg sm:text-xl font-extrabold text-slate-900">
                {isCompleted
                  ? (lang === 'sw' ? 'Upakuaji Umekamilika!' : 'Download Complete!')
                  : (lang === 'sw' ? 'Inapakua MovieRoom APK...' : 'Downloading MovieRoom APK...')}
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 font-mono mt-0.5">
                {APP_CONFIG.apkFileName} ({APP_CONFIG.apkSize})
              </p>
            </div>
          </div>

          {/* VERIFIED TRUST BADGE - Red & Dark Palette */}
          <div className="mb-5 bg-red-50/80 border border-red-200/90 rounded-2xl p-3.5 sm:p-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-red-600 text-white flex items-center justify-center shrink-0 shadow-sm">
              <ShieldCheck className="w-6 h-6 stroke-[2.2]" />
            </div>
            <div className="min-w-0">
              <p className="text-xs sm:text-sm font-bold text-red-950 flex items-center gap-1.5">
                <span>{lang === 'sw' ? 'Salama Kupakua · Imethibitishwa 100%' : 'Safe Download · 100% Verified'}</span>
                <span className="bg-red-200 text-red-900 text-[10px] px-1.5 py-0.2 rounded font-bold uppercase">
                  {lang === 'sw' ? 'Safi' : 'Clean'}
                </span>
              </p>
              <p className="text-xs text-red-800 leading-snug mt-0.5">
                {lang === 'sw'
                  ? 'Kifurushi rasmi kimekaguliwa, hakina virusi wala programu za ujasusi.'
                  : 'Official package scanned, free from viruses, spyware, and adware.'}
              </p>
            </div>
          </div>

          {/* REAL-TIME PERCENTAGE PROGRESS CARD */}
          <div className="bg-[#0a0f1d] text-white rounded-2xl p-5 mb-5 shadow-inner border border-slate-800">
            <div className="flex items-end justify-between mb-2.5">
              <span className="text-xs sm:text-sm font-medium text-slate-300">
                {isCompleted
                  ? (lang === 'sw' ? 'Faili limehifadhiwa kwenye simu yako' : 'File saved to your device')
                  : (lang === 'sw' ? 'Kasi ya upakuaji inasoma...' : 'Download in progress...')}
              </span>
              <span className="text-2xl sm:text-3xl font-extrabold text-red-400 font-mono tabular-nums leading-none">
                {progress.percent}%
              </span>
            </div>

            {/* Progress Bar Track */}
            <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden p-0.5 border border-slate-700/60">
              <div
                className={`h-full rounded-full transition-all duration-200 ease-out ${
                  isCompleted
                    ? 'bg-red-500'
                    : 'bg-gradient-to-r from-red-600 via-rose-500 to-red-500 animate-pulse'
                }`}
                style={{ width: `${Math.max(4, Math.min(100, progress.percent))}%` }}
              />
            </div>

            {/* Size breakdown */}
            <div className="flex items-center justify-between text-xs text-slate-400 mt-2 font-mono tabular-nums">
              <span>
                {formatMb(progress.loadedBytes || (progress.percent / 100) * progress.totalBytes)} MB
              </span>
              <span>
                {formatMb(progress.totalBytes)} MB ({APP_CONFIG.apkSize})
              </span>
            </div>
          </div>

          {/* INSTANT INSTALL PROMPT WHEN COMPLETED */}
          {isCompleted ? (
            <div className="bg-amber-50 border-2 border-amber-300 rounded-2xl p-4 mb-5 animate-in zoom-in-95 duration-200">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500 text-white flex items-center justify-center shrink-0 shadow-xs">
                  <Smartphone className="w-5 h-5" />
                </div>
                <div className="text-xs sm:text-sm text-amber-950 w-full">
                  <h4 className="font-bold text-amber-950 text-sm mb-1">
                    {lang === 'sw' ? 'Gusa Hapa Kufungua Kisakinishi Moja kwa Moja:' : 'Direct 1-Tap Installation on Android:'}
                  </h4>
                  <p className="leading-relaxed text-slate-700">
                    {lang === 'sw'
                      ? 'Kwa sababu za kiusalama za Android, mfumo unahitaji uguso mmoja (1-tap) ili kuanza kufunga. Chagua njia iliyo rahisi kwako:'
                      : 'For Android OS security, tap once to launch the Package Installer. Choose either method below:'}
                  </p>
                  
                  {/* Option A: Chrome bottom popup */}
                  <div className="mt-3 bg-slate-900 text-white rounded-xl p-3 shadow-xs">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 truncate">
                        <span className="text-red-400 text-base">✓</span>
                        <span className="text-xs text-slate-200 font-mono truncate">
                          {APP_CONFIG.apkFileName}
                        </span>
                      </div>
                      <span className="px-3 py-1 bg-gradient-to-r from-red-600 to-rose-600 text-white text-xs font-extrabold rounded-lg uppercase tracking-wider animate-pulse shrink-0">
                        OPEN / FUNGUA
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 mt-1.5">
                      👆 <strong>{lang === 'sw' ? 'Njia ya 1:' : 'Method 1:'}</strong> {lang === 'sw' ? 'Bofya kitufe cha OPEN kinachotokea chini kabisa mwa skrini ya Chrome.' : 'Tap the OPEN button appearing at the bottom of Chrome.'}
                    </p>
                  </div>

                  {/* Option B: Android Notification Bar */}
                  <div className="mt-2.5 bg-slate-800 text-white rounded-xl p-3 shadow-xs">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-base">🔔</span>
                        <span className="text-xs font-medium text-slate-200">
                          {lang === 'sw' ? 'Upakuaji Umekamilika (Download complete)' : 'Download Complete Notification'}
                        </span>
                      </div>
                      <span className="text-[10px] text-red-300 font-bold bg-red-950/80 px-2 py-0.5 rounded border border-red-500/30">
                        {lang === 'sw' ? 'Tayari' : 'Ready'}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 mt-1.5">
                      👇 <strong>{lang === 'sw' ? 'Njia ya 2:' : 'Method 2:'}</strong> {lang === 'sw' ? `Vuta notification bar ya simu yako chini, kisha bofya faili la ${APP_CONFIG.apkFileName}.` : `Swipe down your notification shade and tap ${APP_CONFIG.apkFileName} to launch installer.`}
                    </p>
                  </div>
                  
                  <p className="text-xs text-amber-950 font-medium mt-3">
                    💡 {lang === 'sw' ? 'Android itafungua Package Installer na kukuuliza "Do you want to install this app?" — bofya Install.' : 'Android will open Package Installer asking "Do you want to install this app?" — simply tap Install.'}
                  </p>
                </div>
              </div>
            </div>
          ) : (
            /* Quick 3-Step Next Action */
            <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200 mb-5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2.5">
                {lang === 'sw' ? 'Hatua za Kufuata Kwenye Simu Yako:' : 'Quick Steps on Your Phone:'}
              </h4>
              <ol className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-red-100 text-red-800 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5 font-mono">
                    1
                  </span>
                  <span>{lang === 'sw' ? 'Subiri upakuaji ufike 100%, kisha bofya "OPEN" chini ya skrini ya simu yako.' : 'Wait for 100%, then tap "OPEN" at the bottom of your screen.'}</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-red-100 text-red-800 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5 font-mono">
                    2
                  </span>
                  <span>{lang === 'sw' ? 'Simu ikikuuliza, fungua Settings na uweke "Allow from this source".' : 'If prompted, allow "Install unknown apps" from Settings.'}</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-red-100 text-red-800 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5 font-mono">
                    3
                  </span>
                  <span>{lang === 'sw' ? `Bofya Install kisha fungua ${APP_CONFIG.name} uanze kutazama filamu!` : `Tap Install and launch ${APP_CONFIG.name} to start streaming!`}</span>
                </li>
              </ol>
            </div>
          )}

          {/* Action buttons */}
          <div className="space-y-2.5">
            <button
              type="button"
              onClick={onRetryDownload}
              className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-gradient-to-r from-red-600 via-rose-600 to-red-700 hover:from-red-500 hover:to-rose-500 active:scale-[0.98] text-white font-extrabold text-sm sm:text-base transition-all shadow-md shadow-red-600/20"
            >
              <Download className="w-4 h-4 stroke-[2.5]" />
              <span>{isCompleted ? (lang === 'sw' ? 'Pakua Tena (Download Again)' : 'Download Again') : (lang === 'sw' ? 'Anzisha Upya Upakuaji' : 'Restart Download')}</span>
            </button>

            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={handleCopyLink}
                className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs sm:text-sm transition-colors"
              >
                {copiedLink ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-red-600" />
                    <span className="text-red-700 font-bold">{lang === 'sw' ? 'Imenakiliwa!' : 'Copied!'}</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>{lang === 'sw' ? 'Nakili Link ya APK' : 'Copy APK Link'}</span>
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={() => setShowQr(!showQr)}
                className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs sm:text-sm transition-colors"
              >
                <QrCode className="w-3.5 h-3.5" />
                <span>{showQr ? (lang === 'sw' ? 'Ficha QR' : 'Hide QR') : (lang === 'sw' ? 'QR ya Simu' : 'Phone QR')}</span>
              </button>
            </div>
          </div>

          {/* Phone QR Code Drawer */}
          {showQr && qrDataUrl && (
            <div className="mt-4 p-4 bg-slate-50 rounded-2xl border border-slate-200 text-center animate-in fade-in duration-150">
              <p className="text-xs sm:text-sm font-semibold text-slate-700 mb-2">
                {lang === 'sw' ? 'Piga picha na kamera ya simu kupakua:' : 'Scan with your phone camera to download:'}
              </p>
              <img
                src={qrDataUrl}
                alt="QR Code for MovieRoom direct download"
                className="w-36 h-36 mx-auto rounded-lg border border-slate-200 shadow-2xs"
              />
              <p className="text-xs text-slate-500 mt-2 font-mono break-all">
                {APP_CONFIG.apkDownloadUrl}
              </p>
            </div>
          )}

          {/* Footer Trust Link */}
          <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-xs sm:text-sm text-slate-500">
            <span className="flex items-center gap-1.5 text-slate-700 font-medium">
              <Lock className="w-3.5 h-3.5 text-red-600" />
              <span>Cloudflare R2 High-Speed CDN</span>
            </span>
            <a
              href="#installation"
              onClick={onClose}
              className="text-red-600 hover:underline inline-flex items-center gap-0.5 font-bold"
            >
              <span>{lang === 'sw' ? 'Mwongozo kamili' : 'Full guide'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};
