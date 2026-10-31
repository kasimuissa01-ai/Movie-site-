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
  Lock,
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
  progress: _progress,
  onClose,
  onRetryDownload,
}) => {
  const [copiedLink, setCopiedLink] = useState(false);
  const [qrDataUrl, setQrDataUrl] = useState<string>('');
  const [showQr, setShowQr] = useState(false);

  // History API integration so phone back button closes download modal and returns to homepage
  useEffect(() => {
    if (!isOpen) return;

    window.history.pushState({ modal: 'download' }, '');

    const handlePopState = () => {
      onClose();
    };

    window.addEventListener('popstate', handlePopState);

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

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(APP_CONFIG.apkDownloadUrl);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-xs animate-in fade-in duration-150">
      <div
        className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden animate-in zoom-in-95 duration-150 max-h-[90vh] overflow-y-auto"
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
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-colors z-10"
          aria-label={lang === 'sw' ? 'Funga dirisha' : 'Close window'}
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-6 sm:p-7">
          
          {/* Header */}
          <div className="flex items-center gap-3.5 mb-5">
            <div className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 bg-red-600 text-white shadow-xs">
              <CheckCircle2 className="w-7 h-7 stroke-[2.5]" />
            </div>
            <div>
              <h3 id="download-modal-title" className="text-lg sm:text-xl font-extrabold text-slate-900">
                {lang === 'sw' ? 'Upakuaji Umeanza / Umekamilika!' : 'Download Started / Complete!'}
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 font-mono mt-0.5">
                {APP_CONFIG.apkFileName} ({APP_CONFIG.apkSize})
              </p>
            </div>
          </div>

          {/* VERIFIED TRUST BADGE */}
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
                  ? 'Faili limehifadhiwa kwenye simu yako kwa usalama.'
                  : 'File successfully downloaded to your device.'}
              </p>
            </div>
          </div>

          {/* AMAZING VIDEO CARD WITH SUPABASE MP4 (No Autoplay) */}
          <div className="mb-6 bg-[#0a0f1d] text-white rounded-2xl p-4 sm:p-5 shadow-xl border border-slate-800">
            <div className="mb-3">
              <span className="inline-block text-[10px] font-mono font-bold uppercase tracking-wider text-red-400 bg-red-950/80 border border-red-500/30 px-2 py-0.5 rounded mb-1">
                {lang === 'sw' ? 'MWONGOZO WA VIDEO' : 'VIDEO GUIDE'}
              </span>
              <h4 className="text-sm sm:text-base font-extrabold text-white">
                {lang === 'sw' ? 'Hii ndiyo jinsi ya kusakinisha kwenye simu yako:' : 'This is how to install on your phone:'}
              </h4>
            </div>

            {/* Video Player */}
            <div className="relative aspect-[16/9] rounded-xl overflow-hidden bg-slate-950 border border-slate-700/80 shadow-lg">
              <video
                src="https://vqgnxqabvmmpfoiceass.supabase.co/storage/v1/object/public/simulizi-audio/lv_0_20261023230110.mp4"
                controls
                playsInline
                className="w-full h-full object-cover"
                poster="/images/screenshot_1.jpg"
              />
            </div>
          </div>

          {/* Action buttons */}
          <div className="space-y-2.5">
            <button
              type="button"
              onClick={onRetryDownload}
              className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-gradient-to-r from-red-600 via-rose-600 to-red-700 hover:from-red-500 hover:to-rose-500 active:scale-[0.98] text-white font-extrabold text-sm sm:text-base transition-all shadow-md shadow-red-600/20"
            >
              <Download className="w-4 h-4 stroke-[2.5]" />
              <span>{lang === 'sw' ? 'Pakua Tena (Download Again)' : 'Download Again'}</span>
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
