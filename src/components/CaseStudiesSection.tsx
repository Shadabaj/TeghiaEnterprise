import React from 'react';
import { ArrowUpRight, Star } from 'lucide-react';
import { CASE_STUDIES, CaseStudy } from '../data/contractorData';

interface CaseStudiesSectionProps {
  onSelectCaseStudy: (caseStudy: CaseStudy) => void;
}

export const CaseStudiesSection: React.FC<CaseStudiesSectionProps> = ({
  onSelectCaseStudy,
}) => {
  return (
    <section id="projects" className="w-full py-8 px-4 sm:px-6 bg-[#fbf9f5] border-t border-[#e2e8f0]">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Section Header */}
        <div className="space-y-1.5">
          <div className="text-[11px] font-sans-clean font-bold tracking-widest text-[#914c18] uppercase">
            TRACK RECORD
          </div>
          <h2 className="font-editorial text-[28px] sm:text-[34px] text-[#1e2228] font-normal tracking-tight leading-tight">
            Featured Local Case Studies
          </h2>
          <p className="font-sans-clean text-[14px] text-[#45474b] leading-relaxed">
            Real residences and commercial premises renovated across Navi Mumbai nodes.
          </p>
        </div>

        {/* 3 Case Study Cards Stack */}
        <div className="space-y-6">
          {CASE_STUDIES.map((study) => (
            <div
              key={study.id}
              onClick={() => onSelectCaseStudy(study)}
              className="bg-white rounded-[4px] border border-[#e2e8f0] overflow-hidden group cursor-pointer hover:border-[#b86b35] transition-all shadow-2xs"
            >
              {/* Image with Node Badge */}
              <div className="relative aspect-[16/9] w-full bg-stone-900 overflow-hidden">
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                {/* Node Badge matching screenshot (e.g., Sector 20, Kharghar) */}
                <div className="absolute top-3 right-3 bg-white/95 text-[#1e2228] text-[11px] font-sans-clean font-semibold px-2.5 py-1 rounded-[2px] shadow-sm">
                  {study.tag}
                </div>

                <div className="absolute bottom-2.5 right-3 opacity-90 group-hover:opacity-100 transition-opacity bg-[#1e2228]/85 text-white text-[11px] font-sans-clean font-medium px-2 py-0.5 rounded-[2px] flex items-center gap-1">
                  <span>View Case File</span>
                  <ArrowUpRight className="w-3 h-3 text-[#fda468]" />
                </div>
              </div>

              {/* Content Body */}
              <div className="p-4 sm:p-5 space-y-3">
                <h3 className="font-editorial text-[20px] sm:text-[22px] font-medium text-[#1e2228] leading-snug group-hover:text-[#914c18] transition-colors">
                  {study.title}
                </h3>

                <p className="font-sans-clean text-[13.5px] sm:text-[14px] text-[#45474b] leading-relaxed">
                  {study.description}
                </p>

                {/* Key Quantitative Metrics Footer */}
                <div className="pt-3 border-t border-[#f0ece1] flex items-center justify-between text-xs font-sans-clean">
                  <div>
                    <div className="text-[11px] text-[#75777b] uppercase font-semibold">
                      {study.metric1Label}
                    </div>
                    <div className="text-[13px] sm:text-[14px] font-bold text-[#1e2228] tabular-nums mt-0.5">
                      {study.metric1Value}
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="text-[11px] text-[#75777b] uppercase font-semibold">
                      {study.metric2Label}
                    </div>
                    <div className="text-[13px] sm:text-[14px] font-bold text-[#1e2228] tabular-nums mt-0.5 flex items-center justify-end gap-1">
                      {study.id === 'case-belapur-commercial' ? (
                        <>
                          <span>5.0</span>
                          <span className="text-amber-500 flex">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="w-3 h-3 fill-amber-500" />
                            ))}
                          </span>
                        </>
                      ) : (
                        study.metric2Value
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
