import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { APP_CONFIG, AppFaq } from '../appConfig';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-10 sm:py-16 border-b border-slate-200/80 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center sm:text-left mb-8">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-rose-600 mb-1">
            <HelpCircle className="w-4 h-4" />
            <span>Maswali & Majibu</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Maswali Yanayoulizwa Mara kwa Mara
          </h2>
          <p className="text-sm text-slate-500 mt-1">
            Majibu ya maswali ya mara kwa mara kuhusu kupakua, kusakinisha na kutumia {APP_CONFIG.name}.
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-3">
          {APP_CONFIG.faqs.map((faq: AppFaq, index: number) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="border border-slate-200/80 rounded-2xl overflow-hidden bg-slate-50/50 transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 font-semibold text-slate-900 hover:text-rose-600 transition-colors focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base">{faq.question}</span>
                  <span className="text-slate-400 shrink-0">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 pb-4 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200/40">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
