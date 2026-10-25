import React from 'react';
import { Calendar, Phone, CheckCircle2, ShieldAlert } from 'lucide-react';
import { CONTRACTOR_INFO } from '../data/contractorData';

interface AuditCtaSectionProps {
  onScheduleClick: () => void;
  onCallClick: () => void;
}

export const AuditCtaSection: React.FC<AuditCtaSectionProps> = ({
  onScheduleClick,
  onCallClick,
}) => {
  return (
    <section className="w-full py-8 px-4 sm:px-6 bg-[#fbf9f5]">
      <div className="max-w-4xl mx-auto">
        <div className="bg-[#1e2228] text-white rounded-[4px] border border-stone-800 p-6 sm:p-8 space-y-5 shadow-lg">
          {/* Kicker */}
          <div className="text-[11px] font-sans-clean font-bold tracking-widest text-[#fda468] uppercase">
            COMPLIMENTARY SITE AUDIT
          </div>

          {/* Heading */}
          <h2 className="font-editorial text-[28px] sm:text-[38px] text-[#fbf9f5] font-normal tracking-tight leading-tight max-w-xl">
            Transform Your Property Without Budget Escalations
          </h2>

          {/* Description */}
          <p className="font-sans-clean text-[14px] sm:text-[15px] text-stone-300 leading-relaxed max-w-xl">
            Book a site survey with Teghia Enterprise. We&apos;ll measure square footage, run a digital
            moisture scan, and deliver an itemized BOQ within 48 hours.
          </p>

          {/* Main Action Button */}
          <div className="pt-2">
            <button
              onClick={onScheduleClick}
              className="w-full bg-[#b86b35] hover:bg-[#a35b29] text-[#1e2228] font-sans-clean font-bold text-[15px] py-3.5 px-6 rounded-[3px] flex items-center justify-center gap-2.5 transition-colors cursor-pointer shadow-md"
            >
              <Calendar className="w-4 h-4 text-[#1e2228]" />
              <span>Book Free Site Inspection</span>
            </button>
          </div>

          {/* Verification & Phone Footer */}
          <div className="pt-4 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-stone-400 font-sans-clean">
            <button
              onClick={onCallClick}
              className="flex items-center gap-2 text-stone-200 hover:text-[#fda468] transition-colors cursor-pointer font-medium"
            >
              <Phone className="w-3.5 h-3.5 text-[#fda468]" />
              <span>{CONTRACTOR_INFO.phone}</span>
            </button>

            <div className="flex items-center gap-1.5 text-stone-300">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>Kharghar, Navi Mumbai</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
