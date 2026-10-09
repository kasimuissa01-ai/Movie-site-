import React from 'react';
import { X, Shield, FileText } from 'lucide-react';
import { APP_CONFIG } from '../appConfig';

interface LegalModalProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs animate-in fade-in duration-150">
      <div
        className="relative w-full max-w-xl max-h-[85vh] bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col animate-in zoom-in-95 duration-150"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="px-6 py-5 border-b border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            {type === 'privacy' ? (
              <Shield className="w-5 h-5 text-blue-600" />
            ) : (
              <FileText className="w-5 h-5 text-blue-600" />
            )}
            <h3 className="text-lg font-bold text-slate-900">
              {type === 'privacy' ? 'Privacy Policy' : 'Terms of Service'}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 overflow-y-auto text-xs sm:text-sm text-slate-600 space-y-4 leading-relaxed">
          {type === 'privacy' ? (
            <>
              <p>
                <strong>Last Updated: {APP_CONFIG.lastUpdated}</strong>
              </p>
              <p>
                {APP_CONFIG.publisher} ("we", "our") is dedicated to protecting your personal privacy.
                This Privacy Policy outlines how {APP_CONFIG.name} ("the App") handles user information.
              </p>
              <h4 className="font-bold text-slate-900 text-sm">1. Zero Invasive Telemetry</h4>
              <p>
                {APP_CONFIG.name} is designed with a privacy-first, local-first philosophy. We do not embed
                third-party tracking SDKs, advertising identifiers, or analytics scripts that observe your personal
                behavior outside the app.
              </p>
              <h4 className="font-bold text-slate-900 text-sm">2. Data Storage & Encryption</h4>
              <p>
                All your project data, tasks, notes, and preferences are stored locally on your Android device.
                When you initiate cloud synchronization, your payloads are encrypted using industry-standard
                AES-256 protocols before being transferred.
              </p>
              <h4 className="font-bold text-slate-900 text-sm">3. Android Permissions</h4>
              <p>
                The App requests only the minimum permissions necessary for core operation (such as network access
                for sync and storage access if exporting workspace archives). We do not request location, contacts,
                or microphone permissions.
              </p>
              <h4 className="font-bold text-slate-900 text-sm">4. Contact & Inquiries</h4>
              <p>
                For questions regarding data protection or to request information, please reach out to our team at{' '}
                <a href={`mailto:${APP_CONFIG.publisherEmail}`} className="text-blue-600 underline">
                  {APP_CONFIG.publisherEmail}
                </a>.
              </p>
            </>
          ) : (
            <>
              <p>
                <strong>Last Updated: {APP_CONFIG.lastUpdated}</strong>
              </p>
              <p>
                By downloading and installing {APP_CONFIG.name}, you agree to the following conditions:
              </p>
              <h4 className="font-bold text-slate-900 text-sm">1. License & Usage</h4>
              <p>
                {APP_CONFIG.publisher} grants you a personal, non-exclusive, revocable license to use {APP_CONFIG.name}
                on compatible Android devices in accordance with applicable laws.
              </p>
              <h4 className="font-bold text-slate-900 text-sm">2. Direct Distribution & Integrity</h4>
              <p>
                This APK is distributed directly by {APP_CONFIG.publisher}. You should only download packages
                from our verified domain to ensure binary integrity and authentic developer digital signatures.
              </p>
              <h4 className="font-bold text-slate-900 text-sm">3. Disclaimer of Warranties</h4>
              <p>
                The software is provided "as is", without warranty of any kind, express or implied. In no event shall
                the authors or copyright holders be liable for any claim, damages or other liability.
              </p>
              <h4 className="font-bold text-slate-900 text-sm">4. Trademarks</h4>
              <p>
                Android and Google Play are trademarks of Google LLC. {APP_CONFIG.name} is an independent product and is
                neither affiliated with nor endorsed by Google LLC.
              </p>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 bg-slate-900 text-white rounded-xl text-xs font-semibold hover:bg-slate-800 transition-colors"
          >
            Understood
          </button>
        </div>
      </div>
    </div>
  );
};
