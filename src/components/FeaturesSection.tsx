import React from 'react';
import {
  Zap,
  ShieldCheck,
  RefreshCw,
  Smartphone,
  BarChart3,
  CloudOff,
  Lock,
  Layers,
  LucideIcon,
  Sparkles,
} from 'lucide-react';
import { APP_CONFIG, AppFeature } from '../appConfig';

const iconMap: Record<string, LucideIcon> = {
  Zap,
  ShieldCheck,
  RefreshCw,
  Smartphone,
  BarChart3,
  CloudOff,
  Lock,
  Layers,
};

export const FeaturesSection: React.FC = () => {
  return (
    <section id="features" className="py-10 sm:py-16 border-b border-slate-200/80 bg-slate-50/50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center sm:text-left mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-rose-600 mb-1">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Vipengele Muhimu</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Sifa Kuu za {APP_CONFIG.name}
          </h2>
          <p className="text-sm sm:text-base text-slate-500 mt-1 max-w-2xl">
            Kila kitu unachohitaji kufurahia filamu na tamthilia zilizotafsiriwa kwa Kiswahili popote ulipo bila usumbufu.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {APP_CONFIG.features.map((feature: AppFeature) => {
            const Icon = iconMap[feature.iconName] || Zap;
            return (
              <div
                key={feature.id}
                className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/80 shadow-2xs hover:shadow-md transition-all duration-200 group"
              >
                <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center mb-4 transition-colors group-hover:bg-rose-600 group-hover:text-white">
                  <Icon className="w-5 h-5 stroke-[2]" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-1.5 group-hover:text-rose-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
