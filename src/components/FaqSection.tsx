import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQS } from '../data/contractorData';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First open by default

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full py-8 px-4 sm:px-6 bg-[#fbf9f5] border-t border-[#e2e8f0]">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="space-y-1.5">
          <div className="text-[11px] font-sans-clean font-bold tracking-widest text-[#914c18] uppercase">
            CLEAR ANSWERS
          </div>
          <h2 className="font-editorial text-[28px] sm:text-[34px] text-[#1e2228] font-normal tracking-tight leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="font-sans-clean text-[14px] text-[#45474b] leading-relaxed">
            Everything you should know before hiring a renovation contractor.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-[3px] border border-[#e2e8f0] overflow-hidden transition-all shadow-2xs hover:border-[#b86b35]"
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full p-4 sm:p-5 flex items-center justify-between gap-4 text-left cursor-pointer group"
                  aria-expanded={isOpen}
                >
                  <h3 className="font-sans-clean font-bold text-[15px] sm:text-[16px] text-[#1e2228] group-hover:text-[#914c18] transition-colors leading-snug">
                    {faq.question}
                  </h3>
                  <div className="p-1 rounded-[2px] bg-[#f5f3ef] text-[#75777b] group-hover:text-[#1e2228] transition-colors shrink-0">
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-[#914c18]' : ''
                      }`}
                    />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-0 text-[13.5px] sm:text-[14px] text-[#45474b] leading-relaxed font-sans-clean border-t border-[#f5f3ef] mt-1 bg-[#fdfcfb]">
                    <p className="pt-3">{faq.answer}</p>
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
