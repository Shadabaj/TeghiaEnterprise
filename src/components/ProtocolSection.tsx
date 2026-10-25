import React, { useState } from 'react';
import { ChevronDown, Check } from 'lucide-react';
import { PROTOCOL_STEPS, ProtocolStep } from '../data/contractorData';

export const ProtocolSection: React.FC = () => {
  const [expandedStep, setExpandedStep] = useState<number | null>(null);

  const toggleStep = (stepNumber: number) => {
    setExpandedStep(expandedStep === stepNumber ? null : stepNumber);
  };

  return (
    <section className="w-full py-8 px-4 sm:px-6 bg-[#fbf9f5] border-t border-[#e2e8f0]">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="space-y-1.5">
          <div className="text-[11px] font-sans-clean font-bold tracking-widest text-[#914c18] uppercase">
            THE TEGHIA PROTOCOL
          </div>
          <h2 className="font-editorial text-[28px] sm:text-[34px] text-[#1e2228] font-normal tracking-tight leading-tight">
            7-Step Transparent Execution
          </h2>
          <p className="font-sans-clean text-[14px] text-[#45474b] leading-relaxed">
            How we eliminate delays, surprise expenses, and poor quality in every project.
          </p>
        </div>

        {/* 7-Step Cards */}
        <div className="space-y-3">
          {PROTOCOL_STEPS.map((step: ProtocolStep) => {
            const isLast = step.stepNumber === 7;
            const isExpanded = expandedStep === step.stepNumber;

            return (
              <div
                key={step.stepNumber}
                className="bg-white rounded-[3px] border border-[#e2e8f0] p-4 sm:p-5 transition-all shadow-2xs hover:border-[#b86b35]"
              >
                <div className="flex items-start gap-3.5">
                  {/* Step Number Circle */}
                  <div
                    className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center font-sans-clean font-bold text-[13px] sm:text-[14px] shrink-0 text-white ${
                      isLast ? 'bg-[#914c18]' : 'bg-[#1e2228]'
                    }`}
                  >
                    {step.stepNumber}
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-1.5">
                    <div
                      onClick={() => toggleStep(step.stepNumber)}
                      className="flex items-center justify-between cursor-pointer group"
                    >
                      <h3 className="font-sans-clean font-bold text-[15.5px] sm:text-[16.5px] text-[#1e2228] leading-snug group-hover:text-[#914c18] transition-colors">
                        {step.title}
                      </h3>
                      <button
                        aria-label={`Toggle details for ${step.title}`}
                        className="text-stone-400 group-hover:text-[#914c18] p-0.5"
                      >
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${
                            isExpanded ? 'rotate-180 text-[#914c18]' : ''
                          }`}
                        />
                      </button>
                    </div>

                    <p className="font-sans-clean text-[13.5px] text-[#45474b] leading-relaxed">
                      {step.summary}
                    </p>

                    {/* Expandable Deliverables */}
                    {isExpanded && (
                      <div className="mt-3 pt-3 border-t border-[#f0ece1] space-y-1.5 bg-[#fbf9f5] p-3 rounded-[2px]">
                        <div className="text-[11px] font-sans-clean font-semibold uppercase tracking-wider text-[#914c18]">
                          Key Milestones &amp; Deliverables:
                        </div>
                        <ul className="space-y-1 text-[12.5px] text-[#1e2228]">
                          {step.deliverables.map((item, i) => (
                            <li key={i} className="flex items-center gap-2">
                              <Check className="w-3.5 h-3.5 text-[#914c18] shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
