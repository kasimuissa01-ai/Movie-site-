import React, { useState } from 'react';
import { ChevronDown, ChevronUp, CheckCircle2, Target, Users, Film, Sparkles } from 'lucide-react';
import { APP_CONFIG } from '../appConfig';

export const AboutSection: React.FC = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="about" className="py-10 sm:py-16 border-b border-slate-200/80 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-rose-600 mb-1">
            <Film className="w-3.5 h-3.5" />
            <span>Kuhusu Programu Hii</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Kuhusu {APP_CONFIG.name}
          </h2>
          <p className="text-sm text-slate-500 mt-1">
            {APP_CONFIG.about.summary}
          </p>
        </div>

        {/* Primary Narrative Description Card matching User Brief */}
        <div className="bg-slate-50/70 border border-slate-200/80 rounded-2xl p-5 sm:p-7 space-y-4 text-slate-700 leading-relaxed text-sm sm:text-base shadow-2xs">
          
          {/* Welcome Intro */}
          <p className="font-medium text-slate-900 text-base sm:text-lg">
            {APP_CONFIG.about.intro}
          </p>

          {/* Sifa Kuu Section */}
          <div className="pt-2">
            <h3 className="font-bold text-slate-900 text-sm uppercase tracking-wide flex items-center gap-1.5 mb-3 text-rose-600">
              <Sparkles className="w-4 h-4" />
              <span>SIFA KUU:</span>
            </h3>
            
            <ul className="space-y-3 text-sm text-slate-700">
              {APP_CONFIG.about.sifaKuu.map((item, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-rose-500 mt-2 shrink-0" />
                  <div>
                    <strong className="text-slate-900 font-semibold">{item.title}:</strong>{' '}
                    <span>{item.desc}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Closing call to action */}
          <p className="font-bold text-rose-700 pt-1 text-base">
            {APP_CONFIG.about.closing}
          </p>

          {/* Collapsible deep dive: Problem Solved & Target Audience */}
          {expanded && (
            <div className="pt-4 border-t border-slate-200/60 animate-in fade-in duration-200 space-y-6">
              
              {/* Problem Solved */}
              <div>
                <h4 className="text-sm font-bold text-slate-900 mb-1 flex items-center gap-1.5">
                  <Target className="w-4 h-4 text-rose-600" />
                  <span>Changamoto Inayotatuliwa na {APP_CONFIG.name}</span>
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {APP_CONFIG.about.problemSolved}
                </p>
              </div>

              {/* 2-Column Split: Who it's for & Key Benefits */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                
                {/* Target Audience */}
                <div className="bg-white rounded-xl p-4 border border-slate-200">
                  <h5 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2 flex items-center gap-1">
                    <Users className="w-3.5 h-3.5 text-blue-600" />
                    <span>Imeundwa Kwa Ajili Ya Nani:</span>
                  </h5>
                  <ul className="space-y-1.5 text-xs text-slate-600">
                    {APP_CONFIG.about.targetAudience.map((audience, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <span className="text-rose-500 font-bold shrink-0">·</span>
                        <span>{audience}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Key Benefits */}
                <div className="bg-white rounded-xl p-4 border border-slate-200">
                  <h5 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Faida Muhimu:</span>
                  </h5>
                  <ul className="space-y-1.5 text-xs text-slate-600">
                    {APP_CONFIG.about.keyBenefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

            </div>
          )}

          {/* Toggle Button */}
          <div className="pt-2">
            <button
              type="button"
              onClick={() => setExpanded(!expanded)}
              className="inline-flex items-center gap-1 text-xs sm:text-sm font-semibold text-rose-600 hover:text-rose-700 transition-colors focus:outline-none"
            >
              <span>{expanded ? 'Funga maelezo ya ziada' : 'Soma maelezo zaidi ya kina'}</span>
              {expanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
