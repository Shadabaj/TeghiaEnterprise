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
    <section className="relative isolate w-full overflow-hidden bg-[#f7f5f0] px-4 py-8 sm:px-6 sm:py-12 lg:py-16">
      <div className="mx-auto max-w-6xl space-y-7 sm:space-y-9 lg:space-y-10">
        {/* Verification Tag */}
        <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-[#e5d5bf] bg-white/85 px-4 py-2 text-[#8a542b] shadow-sm backdrop-blur">
          <CheckCircle2 className="h-4 w-4 shrink-0 text-[#a66a37]" />
          <span className="text-[10px] font-sans-clean font-bold uppercase tracking-[0.16em] sm:text-[11px]">
            Teghia Enterprise - Interior Renovation & Building Solutions
          </span>
        </div>

        {/* Hero Title */}


        <h1 className="max-w-5xl font-editorial text-[36px] font-normal leading-[1.08] tracking-tight text-[#1e2228] text-balance sm:text-[52px] md:text-[64px] lg:text-[72px]">
          Reliable Interior Renovation &amp; Building Solutions in Navi Mumbai
        </h1>

        {/* Hero Description */}
        <p className="max-w-3xl font-sans-clean text-[15px] leading-8 text-[#55565a] sm:text-[17px] sm:leading-8">
          From complete interior upgrades and structural civil refits to certified waterproofing,
          Italian plaster finishes, and precision fabrication—Teghia Enterprise executes turnkey
          property transformations with engineering rigor, transparent BOQ estimates, and verified
          on-site supervision.
        </p>
    
<section className="relative my-12 overflow-hidden rounded-3xl border border-[#e9e0d5] bg-white py-10 shadow-[0_20px_60px_rgba(30,34,40,0.07)] sm:my-16 sm:py-14 lg:py-16">
  <div className="relative mx-auto max-w-5xl px-5 sm:px-8 lg:px-10">

    {/* Section Heading */}
    <div className="mb-9 border-b border-[#eee7de] pb-7 sm:mb-12 sm:pb-9">
      <span className="mb-4 inline-flex items-center gap-2 font-sans-clean text-[10px] font-bold uppercase tracking-[0.22em] text-[#a16d3e] sm:text-xs">
        Experience • Expertise • Excellence
      </span>

      <h1 className="font-editorial text-[30px] font-normal leading-[1.1] tracking-tight text-[#1e2228] text-balance sm:text-[42px] md:text-[48px] lg:text-[54px]">
        About Our Founder
      </h1>

      <div className="mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-[#b77a45] to-[#e0c7a7]" />
    </div>

    {/* Founder Introduction */}
    <div className="mb-9 rounded-2xl bg-[#faf7f2] p-5 sm:mb-10 sm:p-7">
      <h2 className="font-editorial text-3xl leading-tight text-[#20242a] sm:text-4xl">
        Mr. Jalaluddin Ansari
      </h2>

      <p className="mt-3 inline-flex rounded-full bg-[#efe3d3] px-3.5 py-1.5 font-sans-clean text-xs font-bold tracking-wide text-[#87572f] sm:text-sm">
        Founder &amp; Principal Contractor
      </p>

      <p className="mt-3 font-sans-clean text-sm leading-relaxed text-[#626167] sm:text-base">
        Teghia Enterprise — Interior Renovation &amp; Building Solutions
      </p>
    </div>

    {/* Experience Highlights */}
    <div className="mb-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
      <div className="group rounded-2xl border border-[#ece3d8] bg-gradient-to-br from-[#fcfaf7] to-[#f5efe6] p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-8">
        <p className="font-editorial text-5xl leading-none tracking-tight text-[#a16d3e] sm:text-6xl">
          45+
        </p>
        <p className="mt-3 font-sans-clean text-sm font-bold leading-snug text-[#272a30] sm:text-base">
          Years of Experience
        </p>
        <p className="mt-3 font-sans-clean text-sm leading-7 text-[#66656a]">
          Extensive experience in civil construction, building maintenance,
          and renovation.
        </p>
      </div>

      <div className="group rounded-2xl border border-[#2d3137] bg-gradient-to-br from-[#292e35] to-[#1e2228] p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-8">
        <p className="font-editorial text-5xl leading-none tracking-tight text-[#e5bd95] sm:text-6xl">
          30
        </p>
        <p className="mt-3 font-sans-clean text-sm font-bold leading-snug text-white sm:text-base">
          Years of Canara Bank Contracting Experience
        </p>
        <p className="mt-3 font-sans-clean text-sm leading-7 text-white/70">
          Three decades of professional experience working as a civil
          contractor for Canara Bank.
        </p>
      </div>
    </div>

    {/* Founder Story */}
    <div className="space-y-5 font-sans-clean text-[15px] leading-8 text-[#55565a] sm:text-base sm:leading-8">
      <p>
        With over 45 years of experience in civil construction, building
        maintenance, and renovation, Mr. Jalaluddin Ansari brings a wealth
        of practical knowledge, dedication, and craftsmanship to
        Teghia Enterprise.
      </p>

      <p>
        A significant chapter in his professional journey is his 30 years
        of experience working as a civil contractor for Canara Bank.
        This extensive experience has given him valuable exposure to
        civil works, building upkeep, repairs, renovation, and maintenance.
      </p>

      <p>
        Under his leadership, Teghia Enterprise is committed to delivering
        practical building solutions through quality-focused workmanship,
        transparent communication, and budget-conscious project planning.
      </p>

      <p>
        From civil construction and interior renovation to waterproofing,
        painting, false ceilings, tiling, roofing, and fabrication, the
        business offers a range of solutions to help customers maintain,
        improve, and transform their properties.
      </p>
    </div>

    {/* Philosophy */}
    <div className="relative mt-12 overflow-hidden rounded-2xl border border-[#2d3137] bg-[#20252b] px-6 py-8 shadow-lg sm:mt-16 sm:px-10 sm:py-10">
      <p className="font-sans-clean text-[10px] font-bold uppercase tracking-[0.22em] text-[#d9ad7e] sm:text-xs">
        Our Philosophy
      </p>

      <h3 className="mt-3 font-editorial text-2xl leading-tight text-white sm:text-3xl">
        Building Trust Through Experience
      </h3>

      <p className="mt-4 max-w-3xl font-sans-clean text-sm leading-7 text-white/75 sm:text-base sm:leading-8">
        We believe that quality workmanship, honest communication, and
        customer satisfaction are the foundations of every lasting
        business relationship.
      </p>

      <p className="mt-6 border-t border-white/15 pt-5 font-editorial text-xl italic text-[#e5bd95] sm:text-2xl">
        “Quality Service On Time, Within Budget.”
      </p>
    </div>

    {/* Closing Statement */}
    <p className="mt-8 font-sans-clean text-sm leading-7 text-[#626167] sm:text-base sm:leading-8">
      Guided by decades of hands-on experience, Mr. Jalaluddin Ansari
      continues to uphold the values of reliability, practical expertise,
      and customer-focused service that define Teghia Enterprise.
    </p>

  </div>
</section>


        {/* Primary and Secondary CTA Buttons */}
        <div className="space-y-3 pt-2 sm:space-y-4">
          {/* Primary Schedule Site Inspection */}
          <button
            onClick={onScheduleClick}
            className="group flex w-full items-center justify-center gap-3 rounded-xl bg-[#20252b] px-5 py-4 text-[15px] font-semibold text-[#fbf9f5] shadow-[0_10px_24px_rgba(30,34,40,0.14)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#a96837] hover:shadow-lg cursor-pointer font-sans-clean"
          >
            <Calendar className="h-5 w-5 text-[#e4b17c] transition-colors group-hover:text-white" />
            <span>Schedule Site Inspection</span>
          </button>

          {/* Secondary Quick Contact Row */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <button
              onClick={onCallClick}
              className="flex w-full items-center justify-center gap-2.5 rounded-xl border border-[#e2d9ce] bg-white px-3 py-3.5 text-[13px] font-medium text-[#262a30] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#c8a47c] hover:bg-[#fbf7f1] cursor-pointer font-sans-clean sm:text-sm"
            >
              <Phone className="h-4 w-4 shrink-0 text-[#a16d3e]" />
              <span className="truncate">{CONTRACTOR_INFO.phone}</span>
            </button>

            <button
              onClick={onWhatsAppClick}
              className="flex w-full items-center justify-center gap-2.5 rounded-xl border border-emerald-200 bg-white px-3 py-3.5 text-[13px] font-medium text-emerald-800 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-300 hover:bg-emerald-50 cursor-pointer font-sans-clean sm:text-sm"
            >
              <MessageSquare className="h-4 w-4 shrink-0 fill-emerald-600 text-emerald-600" />
              <span>Instant WhatsApp</span>
            </button>
          </div>
        </div>

        {/* Hero Showcase Card: Recent Handover Dec 2024 */}
        <div
          onClick={() => onOpenCaseStudy('case-kharghar-penthouse')}
          className="group relative mt-5 cursor-pointer overflow-hidden rounded-2xl border border-[#e2d9ce] bg-white shadow-[0_18px_45px_rgba(30,34,40,0.13)] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
        >
          <div className="relative aspect-[16/10] w-full overflow-hidden bg-stone-900 sm:aspect-[16/9]">
            <img
              src="/src/assets/images/hero_penthouse_kharghar_1792912269017.jpg"
              alt="3BHK Penthouse, Sector 20 Kharghar - Teghia Enterprise"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              referrerPolicy="no-referrer"
            />
            {/* Scrim Overlay */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

            {/* Top Tag */}
            <div className="absolute left-4 top-4 rounded-full border border-white/20 bg-black/40 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.16em] text-white shadow-sm backdrop-blur-md font-sans-clean sm:text-[10px]">
              TEGHIA RESIDENCE • HOME
            </div>

            {/* Bottom Content Band */}
            <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3 sm:bottom-6 sm:left-6 sm:right-6">
              <div>
                <div className="mb-1 font-sans-clean text-[9px] font-semibold uppercase tracking-[0.18em] text-stone-300 sm:text-[11px]">
                  RECENT HANDOVER · DEC 2024
                </div>
                <div className="font-editorial text-xl font-medium leading-tight text-white drop-shadow-sm sm:text-3xl">
                  3BHK Penthouse, Sector 20 Kharghar
                </div>
              </div>

              <div className="flex shrink-0 items-center gap-1.5 rounded-full bg-[#e8b985] px-3 py-2 text-[10px] font-semibold text-[#27231f] shadow-md font-sans-clean sm:text-xs">
                <span>Turnkey Fit-out</span>
                <ArrowRight className="w-3 h-3" />
              </div>
            </div>
          </div>
        </div>

        {/* 4 Trust Metrics (2x2 Grid) */}
        <div className="grid grid-cols-1 gap-3 pt-2 sm:grid-cols-2">
          {/* Rating */}
          <div className="space-y-2 rounded-2xl border border-[#e8e0d6] bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md sm:p-6">
            <div className="flex items-center gap-2 text-[15px] font-bold text-[#252930] font-sans-clean sm:text-base">
              <Star className="h-5 w-5 shrink-0 fill-amber-500 text-amber-500" />
              <span>4.8 / 5.0</span>
            </div>
            <p className="text-[12px] leading-6 text-[#66656a] sm:text-[13px]">
              Verified Google Rating across 180+ Navi Mumbai homeowners
            </p>
          </div>

          {/* BOQ Transparency */}
          <div className="bg-white p-3.5 rounded-[3px] border border-[#e2e8f0] space-y-1">
            <div className="flex items-center gap-1.5 text-[#1e2228] font-bold text-[15px] font-sans-clean">
              <FileText className="h-5 w-5 shrink-0 text-[#a16d3e]" />
              <span>Zero Hidden</span>
            </div>
            <p className="text-[12px] text-[#45474b] leading-snug">
              Itemized line-by-line BOQ with fixed material specifications
            </p>
          </div>

          {/* Warranty */}
          <div className="bg-white p-3.5 rounded-[3px] border border-[#e2e8f0] space-y-1">
            <div className="flex items-center gap-1.5 text-[#1e2228] font-bold text-[15px] font-sans-clean">
              <ShieldCheck className="h-5 w-5 shrink-0 text-[#a16d3e]" />
              <span>7-Yr Warranty</span>
            </div>
            <p className="text-[12px] text-[#45474b] leading-snug">
              Elastomeric &amp; crystalline multi-coat certified waterproofing
            </p>
          </div>

          {/* Supervision */}
          <div className="bg-white p-3.5 rounded-[3px] border border-[#e2e8f0] space-y-1">
            <div className="flex items-center gap-1.5 text-[#1e2228] font-bold text-[15px] font-sans-clean">
              <HardHat className="h-5 w-5 shrink-0 text-[#a16d3e]" />
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
