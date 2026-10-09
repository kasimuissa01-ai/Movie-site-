import React from 'react';
import {
  Download,
  Clock,
  FolderOpen,
  Settings,
  CheckCircle,
  PlayCircle,
  ShieldAlert,
  ShieldCheck,
} from 'lucide-react';
import { APP_CONFIG } from '../appConfig';

interface InstallationGuideProps {
  onDownloadClick: () => void;
}

export const InstallationGuide: React.FC<InstallationGuideProps> = ({ onDownloadClick }) => {
  const steps = [
    {
      number: 1,
      title: 'Bofya "Pakua APK"',
      description: `Bofya kitufe cha pakua kwenye ukurasa huu kuanza kushusha faili ya ${APP_CONFIG.apkFileName} (${APP_CONFIG.apkSize}).`,
      icon: Download,
    },
    {
      number: 2,
      title: 'Subiri Upakuaji Ukamilike',
      description: 'Angalia upau wa taarifa (notification bar) au folda ya Downloads kwenye kivinjari chako.',
      icon: Clock,
    },
    {
      number: 3,
      title: 'Fungua Faili Iliyopakuliwa',
      description: `Gusa taarifa ya upakuaji au fungua programu ya Files na uguse faili ya ${APP_CONFIG.apkFileName}.`,
      icon: FolderOpen,
    },
    {
      number: 4,
      title: 'Ruhusu "Install Unknown Apps"',
      description: 'Simu ikikuuliza ruhusa ya kusakinisha kutoka chanzo hiki, weka alama ya kuruhusu (Allow from this source).',
      icon: Settings,
    },
    {
      number: 5,
      title: 'Bofya "Install"',
      description: 'Kubali usakinishaji wa kifurushi na subiri sekunde chache mfumo wa Android ukamilishe.',
      icon: CheckCircle,
    },
    {
      number: 6,
      title: 'Fungua MovieRoom na Ufurahie!',
      description: 'Fungua programu na uanze kutazama na kupakua filamu zote zilizotafsiriwa kwa Kiswahili.',
      icon: PlayCircle,
    },
  ];

  return (
    <section id="installation" className="py-10 sm:py-16 border-b border-slate-200/80 bg-slate-50/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center sm:text-left mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-rose-600 mb-1">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Mwongozo wa Usakinishaji</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Jinsi ya Kusakinisha MovieRoom Kwenye Simu Yako
          </h2>
          <p className="text-sm sm:text-base text-slate-500 mt-1">
            Fuata hatua hizi 6 rahisi kuanza kutumia {APP_CONFIG.name} moja kwa moja kwenye Android yako.
          </p>
        </div>

        {/* 6 Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mb-8">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-2xs relative flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="w-7 h-7 rounded-full bg-rose-50 text-rose-700 text-xs font-bold flex items-center justify-center border border-rose-200/60 font-mono">
                      0{step.number}
                    </span>
                    <Icon className="w-4 h-4 text-slate-400" />
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 mb-1.5">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Security & Play Protect Notice */}
        <div className="bg-amber-50/80 border border-amber-200/70 rounded-2xl p-5 sm:p-6 mb-8">
          <div className="flex items-start gap-3.5">
            <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center shrink-0 mt-0.5">
              <ShieldAlert className="w-5 h-5" />
            </div>
            <div className="text-xs sm:text-sm text-amber-900/90 leading-relaxed space-y-2">
              <h4 className="font-bold text-amber-950 text-sm sm:text-base">
                Kwa nini simu huonyesha "File might be harmful"?
              </h4>
              <p>
                Simu zote za Android huonyesha tahadhari hii ya kawaida kila mara unapo pakua programu yoyote (.apk) moja kwa moja kupitia browser (kama Chrome) badala ya Google Play Store. Hii ni namna ya Android kukukumbusha uthibitishe kwamba unamwamini msambazaji wa programu.
              </p>
              <p>
                <strong>Faili yetu ya MovieRoom ni safi 100% na haina virusi.</strong> Hakuna haja ya kuzima Google Play Protect; Play Protect itaendelea kufanya kazi na itathibitisha usalama wa simu yako wakati wa usakinishaji.
              </p>
            </div>
          </div>
        </div>

        {/* Action Button inside Guide */}
        <div className="text-center pt-2">
          <button
            type="button"
            onClick={onDownloadClick}
            className="inline-flex items-center gap-2 px-6 py-3 bg-rose-600 hover:bg-rose-700 active:bg-rose-800 text-white font-semibold text-sm rounded-xl shadow-sm transition-all"
          >
            <Download className="w-4 h-4" />
            <span>Tayari Kusakinisha? Pakua MovieRoom APK Sasa ({APP_CONFIG.apkSize})</span>
          </button>
        </div>

      </div>
    </section>
  );
};
