import React, { useState } from 'react';
import { X, Copy, Check, Share2 } from 'lucide-react';
import { APP_CONFIG } from '../appConfig';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ShareModal: React.FC<ShareModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const currentUrl = typeof window !== 'undefined' ? window.location.href : 'https://movieroom.app';
  const shareText = `${APP_CONFIG.name} Android APK: ${APP_CONFIG.tagline}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(currentUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: APP_CONFIG.name,
          text: shareText,
          url: currentUrl,
        });
        onClose();
      } catch (err) {
        // User cancelled
      }
    } else {
      handleCopy();
    }
  };

  const encodedUrl = encodeURIComponent(currentUrl);
  const encodedText = encodeURIComponent(`${shareText} - Pakua APK hapa: `);

  const shareOptions = [
    {
      name: 'WhatsApp',
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.978-.276-.1-.476-.15-.676.15s-.777.978-.953 1.179c-.175.2-.351.226-.652.075s-1.27-.468-2.42-1.493c-.894-.799-1.498-1.786-1.674-2.087-.175-.3-.019-.463.132-.613.135-.135.301-.351.451-.527.151-.175.2-.3.301-.501.1-.2.05-.376-.025-.526s-.677-1.631-.928-2.233c-.244-.586-.493-.506-.677-.516l-.577-.01c-.2 0-.526.075-.802.376s-1.053 1.028-1.053 2.508 1.078 2.909 1.228 3.11c.151.2 2.122 3.24 5.14 4.544.718.31 1.279.496 1.716.634.721.23 1.378.197 1.897.12.577-.087 1.78-.727 2.03-1.43.251-.702.251-1.304.176-1.43-.076-.126-.276-.201-.577-.351zM12.04 2C6.51 2 2.02 6.49 2.02 12.02c0 1.97.57 3.81 1.57 5.37L2 22l4.77-1.54a10.02 10.02 0 0 0 5.27 1.48c5.53 0 10.02-4.49 10.02-10.02C22.06 6.49 17.57 2 12.04 2z" />
        </svg>
      ),
      color: 'bg-[#25D366] hover:bg-[#20ba5a] text-white',
      url: `https://api.whatsapp.com/send?text=${encodedText}${encodedUrl}`,
    },
    {
      name: 'Telegram',
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 0 0-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.52 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .34z" />
        </svg>
      ),
      color: 'bg-[#0088cc] hover:bg-[#0077b5] text-white',
      url: `https://t.me/share/url?url=${encodedUrl}&text=${encodedText}`,
    },
    {
      name: 'Facebook',
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
        </svg>
      ),
      color: 'bg-[#1877F2] hover:bg-[#166fe5] text-white',
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    },
    {
      name: 'X (Twitter)',
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
      color: 'bg-black hover:bg-neutral-800 text-white',
      url: `https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}`,
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs animate-in fade-in duration-150">
      <div
        className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden animate-in zoom-in-95 duration-150"
        role="dialog"
        aria-modal="true"
        aria-labelledby="share-modal-title"
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
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-rose-50 text-rose-600 flex items-center justify-center">
              <Share2 className="w-5 h-5" />
            </div>
            <div>
              <h3 id="share-modal-title" className="text-lg font-bold text-slate-900">
                Sambaza {APP_CONFIG.name}
              </h3>
              <p className="text-xs text-slate-500">
                Tuma link ya moja kwa moja ya APK kwa marafiki na vikundi vya WhatsApp.
              </p>
            </div>
          </div>

          {/* Social Channels */}
          <div className="grid grid-cols-2 gap-2.5 mb-5">
            {shareOptions.map((opt) => (
              <a
                key={opt.name}
                href={opt.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center gap-2.5 py-3 px-4 rounded-xl text-xs font-semibold shadow-2xs transition-all ${opt.color}`}
              >
                {opt.icon}
                <span>{opt.name}</span>
              </a>
            ))}
          </div>

          {/* Native Web Share button */}
          {typeof navigator !== 'undefined' && 'share' in navigator && (
            <button
              type="button"
              onClick={handleNativeShare}
              className="w-full mb-3 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold transition-colors"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>Programu Zingine (Instagram, TikTok, SMS)</span>
            </button>
          )}

          {/* Copy link input */}
          <div className="flex items-center gap-2 p-1.5 bg-slate-100 rounded-xl border border-slate-200">
            <input
              type="text"
              readOnly
              value={currentUrl}
              className="flex-1 bg-transparent px-3 py-1.5 text-xs text-slate-700 font-mono truncate focus:outline-none"
            />
            <button
              type="button"
              onClick={handleCopy}
              className="px-3 py-1.5 bg-white hover:bg-slate-50 text-slate-800 rounded-lg text-xs font-semibold shadow-2xs transition-colors shrink-0"
            >
              {copied ? (
                <span className="flex items-center gap-1 text-emerald-600">
                  <Check className="w-3.5 h-3.5" /> Imenakiliwa
                </span>
              ) : (
                <span className="flex items-center gap-1">
                  <Copy className="w-3.5 h-3.5" /> Nakili
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
