import React from 'react';
import { Star, Award } from 'lucide-react';
import { TESTIMONIALS } from '../data/contractorData';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="w-full py-8 px-4 sm:px-6 bg-[#fbf9f5] border-t border-[#e2e8f0]">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="space-y-1.5">
          <div className="flex items-center gap-1.5 text-[11px] font-sans-clean font-bold tracking-widest text-[#914c18] uppercase">
            <Award className="w-3.5 h-3.5 text-[#914c18]" />
            <span>COMMUNITY REPUTATION</span>
          </div>

          <h2 className="font-editorial text-[28px] sm:text-[34px] text-[#1e2228] font-normal tracking-tight leading-tight">
            Real Reviews from Kharghar &amp; Beyond
          </h2>

          <p className="font-sans-clean text-[14px] text-[#45474b] leading-relaxed">
            Feedback straight from residential housing societies across Navi Mumbai.
          </p>
        </div>

        {/* 3 Review Cards Stack */}
        <div className="space-y-4">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-[3px] border border-[#e2e8f0] p-4 sm:p-5 space-y-3 shadow-2xs hover:border-[#b86b35] transition-all"
            >
              {/* Top Row: Initials, Name, Location & Stars */}
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  {/* Initials Avatar */}
                  <div className="w-9 h-9 rounded-[3px] bg-[#f0ece1] text-[#914c18] font-sans-clean font-bold text-sm flex items-center justify-center border border-[#dcd7cb] shrink-0">
                    {t.initials}
                  </div>

                  <div>
                    <h3 className="font-sans-clean font-bold text-[15px] text-[#1e2228] leading-tight">
                      {t.name}
                    </h3>
                    <p className="text-[12px] text-[#75777b] leading-tight mt-0.5">
                      {t.society}
                    </p>
                  </div>
                </div>

                {/* Stars */}
                <div className="flex items-center gap-0.5 shrink-0 pt-0.5">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                  ))}
                </div>
              </div>

              {/* Review Quote */}
              <p className="font-sans-clean text-[13.5px] text-[#45474b] italic leading-relaxed">
                &ldquo;{t.review}&rdquo;
              </p>

              {/* Verified Tag Footer */}
              <div className="pt-2 border-t border-[#f5f3ef] text-[11px] font-sans-clean text-[#75777b] flex items-center gap-1.5">
                <span className="font-medium text-[#1e2228]">{t.verifiedTag}</span>
                <span>·</span>
                <span className="text-[#914c18] font-medium">{t.serviceTag}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
