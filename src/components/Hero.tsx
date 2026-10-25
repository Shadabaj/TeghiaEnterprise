import React from 'react';
import { Calendar, Phone, MessageSquare, CheckCircle2, Star, FileText, ShieldCheck, HardHat, ArrowRight } from 'lucide-react';
import { CONTRACTOR_INFO } from '../data/contractorData';

interface HeroProps {
  onScheduleClick: () => void;
  onCallClick: () => void;
  onWhatsAppClick: () => void;
  onOpenCaseStudy: (caseId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({
  onScheduleClick,
  onCallClick,
  onWhatsAppClick,
  onOpenCaseStudy,
}) => {
  return (
    <section className="w-full pt-4 pb-8 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto space-y-4">
        {/* Verification Tag */}
        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#f5efe4] border border-[#e2d8c3] rounded-[3px] text-[#914c18]">
          <CheckCircle2 className="w-3.5 h-3.5 text-[#914c18]" />
          <span className="text-[11px] font-sans-clean font-bold tracking-wider uppercase">
            Teghia Enterprise - Interior Renovation & Building Solutions
          </span>
        </div>

        {/* Hero Title */}
        <h1 className="font-editorial text-[32px] sm:text-[44px] md:text-[50px] leading-[1.12] font-normal tracking-tight text-[#1e2228] text-balance">
          Reliable Interior Renovation &amp; Building Solutions in Navi Mumbai
        </h1>

        {/* Hero Description */}
        <p className="font-sans-clean text-[14.5px] sm:text-[16px] text-[#45474b] leading-relaxed max-w-2xl">
          From complete interior upgrades and structural civil refits to certified waterproofing,
          Italian plaster finishes, and precision fabrication—Teghia Enterprise executes turnkey
          property transformations with engineering rigor, transparent BOQ estimates, and verified
          on-site supervision.
        </p>

        {/* Primary and Secondary CTA Buttons */}
        <div className="pt-1 space-y-2.5">
          {/* Primary Schedule Site Inspection */}
          <button
            onClick={onScheduleClick}
            className="w-full bg-[#1e2228] hover:bg-[#b86b35] text-[#fbf9f5] font-sans-clean font-semibold text-[15px] py-3.5 px-5 rounded-[3px] flex items-center justify-center gap-2.5 transition-colors shadow-sm cursor-pointer group"
          >
            <Calendar className="w-4 h-4 text-[#fda468] group-hover:text-white transition-colors" />
            <span>Schedule Site Inspection</span>
          </button>

          {/* Secondary Quick Contact Row */}
          <div className="grid grid-cols-2 gap-2.5">
            <button
              onClick={onCallClick}
              className="w-full bg-white hover:bg-[#f5f3ef] border border-[#cbd5e1] text-[#1e2228] font-sans-clean font-medium text-[13.5px] py-2.5 px-3 rounded-[3px] flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              <Phone className="w-3.5 h-3.5 text-[#914c18]" />
              <span className="truncate">{CONTRACTOR_INFO.phone}</span>
            </button>

            <button
              onClick={onWhatsAppClick}
              className="w-full bg-white hover:bg-emerald-50/50 border border-[#cbd5e1] text-emerald-800 font-sans-clean font-medium text-[13.5px] py-2.5 px-3 rounded-[3px] flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-600 fill-emerald-600" />
              <span>Instant WhatsApp</span>
            </button>
          </div>
        </div>

        {/* Hero Showcase Card: Recent Handover Dec 2024 */}
        <div
          onClick={() => onOpenCaseStudy('case-kharghar-penthouse')}
          className="relative mt-5 rounded-[4px] overflow-hidden border border-[#e2e8f0] bg-white group cursor-pointer shadow-xs hover:border-[#b86b35] transition-all"
        >
          <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden bg-stone-900">
            <img
              src="/src/assets/images/hero_penthouse_kharghar_1792912269017.jpg"
              alt="3BHK Penthouse, Sector 20 Kharghar - Teghia Enterprise"
              className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
              referrerPolicy="no-referrer"
            />
            {/* Scrim Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />

            {/* Top Tag */}
            <div className="absolute top-3 left-3 bg-[#1e2228]/85 backdrop-blur-xs text-white text-[10px] font-sans-clean font-semibold tracking-wider uppercase px-2 py-1 rounded-[2px] border border-white/10">
              TEGHIA RESIDENCE • HOME
            </div>

            {/* Bottom Content Band */}
            <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
              <div>
                <div className="text-[10px] sm:text-[11px] font-sans-clean uppercase tracking-widest text-stone-300 font-medium mb-0.5">
                  RECENT HANDOVER · DEC 2024
                </div>
                <div className="font-editorial text-lg sm:text-2xl text-white font-medium leading-tight drop-shadow-xs">
                  3BHK Penthouse, Sector 20 Kharghar
                </div>
              </div>

              <div className="shrink-0 flex items-center gap-1.5 bg-[#b86b35] text-stone-950 font-sans-clean font-semibold text-[11px] sm:text-xs px-2.5 py-1 rounded-[2px] shadow-sm">
                <span>Turnkey Fit-out</span>
                <ArrowRight className="w-3 h-3" />
              </div>
            </div>
          </div>
        </div>

        {/* 4 Trust Metrics (2x2 Grid) */}
        <div className="grid grid-cols-2 gap-3 pt-2">
          {/* Rating */}
          <div className="bg-white p-3.5 rounded-[3px] border border-[#e2e8f0] space-y-1">
            <div className="flex items-center gap-1.5 text-[#1e2228] font-bold text-[15px] font-sans-clean">
              <Star className="w-4 h-4 fill-amber-500 text-amber-500 shrink-0" />
              <span>4.8 / 5.0</span>
            </div>
            <p className="text-[12px] text-[#45474b] leading-snug">
              Verified Google Rating across 180+ Navi Mumbai homeowners
            </p>
          </div>

          {/* BOQ Transparency */}
          <div className="bg-white p-3.5 rounded-[3px] border border-[#e2e8f0] space-y-1">
            <div className="flex items-center gap-1.5 text-[#1e2228] font-bold text-[15px] font-sans-clean">
              <FileText className="w-4 h-4 text-[#914c18] shrink-0" />
              <span>Zero Hidden</span>
            </div>
            <p className="text-[12px] text-[#45474b] leading-snug">
              Itemized line-by-line BOQ with fixed material specifications
            </p>
          </div>

          {/* Warranty */}
          <div className="bg-white p-3.5 rounded-[3px] border border-[#e2e8f0] space-y-1">
            <div className="flex items-center gap-1.5 text-[#1e2228] font-bold text-[15px] font-sans-clean">
              <ShieldCheck className="w-4 h-4 text-[#914c18] shrink-0" />
              <span>7-Yr Warranty</span>
            </div>
            <p className="text-[12px] text-[#45474b] leading-snug">
              Elastomeric &amp; crystalline multi-coat certified waterproofing
            </p>
          </div>

          {/* Supervision */}
          <div className="bg-white p-3.5 rounded-[3px] border border-[#e2e8f0] space-y-1">
            <div className="flex items-center gap-1.5 text-[#1e2228] font-bold text-[15px] font-sans-clean">
              <HardHat className="w-4 h-4 text-[#914c18] shrink-0" />
              <span>100% On-Site</span>
            </div>
            <p className="text-[12px] text-[#45474b] leading-snug">
              Dedicated civil engineer supervisor for daily quality audits
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
