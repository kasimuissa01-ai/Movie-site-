import React, { useEffect, useState } from 'react';
import { X, Smartphone } from 'lucide-react';
import QRCode from 'qrcode';
import { APP_CONFIG } from '../appConfig';

interface QrModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const QrModal: React.FC<QrModalProps> = ({ isOpen, onClose }) => {
  const [qrDataUrl, setQrDataUrl] = useState<string>('');

  useEffect(() => {
    if (!isOpen) return;

    const currentUrl = typeof window !== 'undefined' ? window.location.href : 'https://apexflow.app';
    QRCode.toDataURL(currentUrl, {
      width: 240,
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

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs animate-in fade-in duration-150">
      <div
        className="relative w-full max-w-sm bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden animate-in zoom-in-95 duration-150 text-center"
        role="dialog"
        aria-modal="true"
        aria-labelledby="qr-modal-title"
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-6">
          <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mx-auto mb-3">
            <Smartphone className="w-6 h-6" />
          </div>

          <h3 id="qr-modal-title" className="text-lg font-bold text-slate-900 mb-1">
            Scan to Download
          </h3>
          <p className="text-xs text-slate-500 max-w-xs mx-auto mb-5">
            Point your Android smartphone camera at this QR code to download the APK directly.
          </p>

          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 inline-block mb-4 shadow-2xs">
            {qrDataUrl ? (
              <img
                src={qrDataUrl}
                alt={`QR Code to download ${APP_CONFIG.name}`}
                className="w-48 h-48 rounded-lg"
              />
            ) : (
              <div className="w-48 h-48 flex items-center justify-center text-xs text-slate-400">
                Generating QR code...
              </div>
            )}
          </div>

          <p className="text-[11px] font-mono text-slate-400 truncate max-w-xs mx-auto">
            v{APP_CONFIG.version} · {APP_CONFIG.apkSize} · Android 8.0+
          </p>
        </div>
      </div>
    </div>
  );
};
