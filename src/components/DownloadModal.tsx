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
} from 'lucide-react';
import QRCode from 'qrcode';
import { APP_CONFIG } from '../appConfig';
import { DownloadProgress } from '../utils/apkDownloader';

interface DownloadModalProps {
  isOpen: boolean;
  progress: DownloadProgress;
  onClose: () => void;
  onRetryDownload: () => void;
}

export const DownloadModal: React.FC<DownloadModalProps> = ({
  isOpen,
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/65 backdrop-blur-xs animate-in fade-in duration-150">
      <div
        className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden animate-in zoom-in-95 duration-150"
        role="dialog"
        aria-modal="true"
        aria-labelledby="download-modal-title"
      >
        {/* Top Accent Strip */}
        <div className="h-1.5 bg-rose-600 w-full" />

        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-colors"
          aria-label="Funga dirisha"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-6 sm:p-7">
          
          {/* Header */}
          <div className="flex items-center gap-3 mb-4">
            <div
              className={`w-11 h-11 rounded-2xl flex items-center justify-center shrink-0 transition-colors ${
                isCompleted
                  ? 'bg-emerald-100 text-emerald-700'
                  : 'bg-rose-100 text-rose-600'
              }`}
            >
              {isCompleted ? (
                <CheckCircle2 className="w-6 h-6 stroke-[2.2]" />
              ) : (
                <Loader2 className="w-6 h-6 animate-spin stroke-[2.2]" />
              )}
            </div>
            <div>
              <h3 id="download-modal-title" className="text-lg sm:text-xl font-bold text-slate-900">
                {isCompleted ? 'Upakuaji Umekamilika!' : 'Inapakua MovieRoom...'}
              </h3>
              <p className="text-xs text-slate-500 font-mono">
                {APP_CONFIG.apkFileName} ({APP_CONFIG.apkSize})
              </p>
            </div>
          </div>

          {/* VERIFIED TRUST BADGE (Prominently displayed) */}
          <div className="mb-4 bg-emerald-50/90 border border-emerald-200/90 rounded-2xl p-3 sm:p-3.5 flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-xs">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <p className="text-xs font-bold text-emerald-900 flex items-center gap-1.5">
                <span>Salama Kupakua · Imethibitishwa 100%</span>
                <span className="bg-emerald-200/80 text-emerald-800 text-[10px] px-1.5 py-0.2 rounded font-semibold">
                  Safi
                </span>
              </p>
              <p className="text-[11px] text-emerald-700 leading-snug mt-0.5">
                Kifurushi rasmi kimekaguliwa, hakina virusi wala programu za ujasusi.
              </p>
            </div>
          </div>

          {/* REAL-TIME PERCENTAGE PROGRESS CARD */}
          <div className="bg-slate-900 text-white rounded-2xl p-5 mb-5 shadow-inner">
            <div className="flex items-end justify-between mb-2">
              <span className="text-xs font-medium text-slate-300">
                {isCompleted
                  ? 'Faili limehifadhiwa kwenye simu yako'
                  : 'Kasi ya upakuaji inasoma...'}
              </span>
              <span className="text-2xl sm:text-3xl font-extrabold text-rose-400 font-mono tabular-nums leading-none">
                {progress.percent}%
              </span>
            </div>

            {/* Progress Bar Track */}
            <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden p-0.5 border border-slate-700/60">
              <div
                className={`h-full rounded-full transition-all duration-200 ease-out ${
                  isCompleted
                    ? 'bg-emerald-500'
                    : 'bg-gradient-to-r from-rose-500 via-rose-400 to-amber-400 animate-pulse'
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

          {/* Quick 3-Step Next Action */}
          <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200/80 mb-5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2.5">
              Hatua za Kufuata Kwenye Simu Yako:
            </h4>
            <ol className="space-y-2 text-xs sm:text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <span className="w-4 h-4 rounded-full bg-rose-100 text-rose-700 text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5 font-mono">
                  1
                </span>
                <span>Subiri upakuaji ufike 100%, kisha gusa faili ya <strong>{APP_CONFIG.apkFileName}</strong>.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-4 h-4 rounded-full bg-rose-100 text-rose-700 text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5 font-mono">
                  2
                </span>
                <span>Simu ikikuuliza, fungua <strong>Settings</strong> na uweke <strong>"Allow from this source"</strong>.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-4 h-4 rounded-full bg-rose-100 text-rose-700 text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5 font-mono">
                  3
                </span>
                <span>Bofya <strong>Install</strong> kisha fungua {APP_CONFIG.name} uanze kutazama filamu!</span>
              </li>
            </ol>
          </div>

          {/* Action buttons */}
          <div className="space-y-2.5">
            <button
              type="button"
              onClick={onRetryDownload}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-rose-600 hover:bg-rose-700 active:bg-rose-800 text-white font-medium text-sm transition-all shadow-xs"
            >
              <Download className="w-4 h-4" />
              <span>{isCompleted ? 'Pakua Tena (Download Again)' : 'Anzisha Upya Upakuaji'}</span>
            </button>

            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={handleCopyLink}
                className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium text-xs transition-colors"
              >
                {copiedLink ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-700 font-semibold">Imenakiliwa!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Nakili Link ya APK</span>
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={() => setShowQr(!showQr)}
                className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium text-xs transition-colors"
              >
                <QrCode className="w-3.5 h-3.5" />
                <span>{showQr ? 'Ficha QR' : 'QR ya Simu'}</span>
              </button>
            </div>
          </div>

          {/* Phone QR Code Drawer */}
          {showQr && qrDataUrl && (
            <div className="mt-4 p-4 bg-slate-50 rounded-2xl border border-slate-200 text-center animate-in fade-in duration-150">
              <p className="text-xs font-semibold text-slate-700 mb-2">
                Piga picha na kamera ya simu kupakua:
              </p>
              <img
                src={qrDataUrl}
                alt="QR Code for MovieRoom direct download"
                className="w-36 h-36 mx-auto rounded-lg border border-slate-200 shadow-2xs"
              />
              <p className="text-[11px] text-slate-400 mt-2 font-mono break-all">
                {APP_CONFIG.apkDownloadUrl}
              </p>
            </div>
          )}

          {/* Footer Trust Link */}
          <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
            <span className="flex items-center gap-1.5 text-slate-600 font-medium">
              <Lock className="w-3.5 h-3.5 text-emerald-600" />
              <span>Imepakuliwa kupitia Seva Salama ya Cloudflare</span>
            </span>
            <a
              href="#installation"
              onClick={onClose}
              className="text-rose-600 hover:underline inline-flex items-center gap-0.5 font-medium"
            >
              <span>Mwongozo kamili</span>
              <ArrowRight className="w-3 h-3" />
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};
