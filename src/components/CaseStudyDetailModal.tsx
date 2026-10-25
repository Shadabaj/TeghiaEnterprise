import React from 'react';
import { X, Check, MapPin, Clock, Calendar, Star, ShieldCheck, ArrowRight } from 'lucide-react';
import { CaseStudy } from '../data/contractorData';

interface CaseStudyDetailModalProps {
  caseStudy: CaseStudy | null;
  onClose: () => void;
  onScheduleAudit: () => void;
}

export const CaseStudyDetailModal: React.FC<CaseStudyDetailModalProps> = ({
  caseStudy,
  onClose,
  onScheduleAudit,
}) => {
  if (!caseStudy) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-xs overflow-y-auto">
      <div className="bg-white rounded-[4px] border border-[#e2e8f0] w-full max-w-lg max-h-[92vh] flex flex-col shadow-2xl overflow-hidden my-auto animate-fade-in font-sans-clean">
        {/* Image Hero */}
        <div className="relative aspect-[16/9] w-full bg-stone-900 overflow-hidden shrink-0">
          <img
            src={caseStudy.image}
            alt={caseStudy.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-3 right-3 w-8 h-8 rounded-[2px] bg-black/60 hover:bg-black/90 text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Location Badge */}
          <div className="absolute bottom-3 left-4 right-4">
            <span className="text-[10px] font-sans-clean font-bold tracking-wider uppercase px-2 py-0.5 rounded-[2px] bg-white text-[#1e2228]">
              {caseStudy.tag}
            </span>
            <h2 className="font-editorial text-xl sm:text-2xl text-white font-medium mt-1 leading-tight">
              {caseStudy.title}
            </h2>
          </div>
        </div>

        {/* Scrollable details */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-4 bg-[#fbf9f5]">
          {/* Key metadata grid */}
          <div className="grid grid-cols-2 gap-2 bg-white p-3 rounded-[3px] border border-[#e2e8f0] text-xs">
            <div>
              <div className="text-[10px] text-[#75777b] uppercase font-semibold">{caseStudy.metric1Label}</div>
              <div className="font-bold text-[#1e2228] text-sm tabular-nums mt-0.5">{caseStudy.metric1Value}</div>
            </div>
            <div>
              <div className="text-[10px] text-[#75777b] uppercase font-semibold">{caseStudy.metric2Label}</div>
              <div className="font-bold text-[#1e2228] text-sm tabular-nums mt-0.5">{caseStudy.metric2Value}</div>
            </div>
          </div>

          {/* Client & Society */}
          <div className="bg-white p-3.5 rounded-[3px] border border-[#e2e8f0] text-xs space-y-1">
            <div className="flex items-center justify-between">
              <span className="text-[#75777b]">Client / Society:</span>
              <span className="font-bold text-[#1e2228]">{caseStudy.details.client}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[#75777b]">Premises:</span>
              <span className="text-[#45474b]">{caseStudy.details.society}</span>
            </div>
          </div>

          {/* Scope executed */}
          <div className="space-y-1.5">
            <h3 className="text-[11px] font-bold uppercase tracking-wider text-[#914c18]">
              Scope Executed by Teghia:
            </h3>
            <ul className="space-y-1.5 bg-white p-3 rounded-[3px] border border-[#e2e8f0] text-xs text-[#1e2228]">
              {caseStudy.details.scopeItems.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-[#914c18] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Materials Used */}
          <div className="space-y-1.5">
            <h3 className="text-[11px] font-bold uppercase tracking-wider text-[#914c18]">
              Verified Branded Materials Applied:
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {caseStudy.details.materialsUsed.map((m, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 bg-white border border-[#e2e8f0] rounded-[2px] text-[11px] font-medium text-[#1e2228]"
                >
                  {m}
                </span>
              ))}
            </div>
          </div>

          {/* Before/After Transformation Note */}
          <div className="p-3 bg-[#f5efe4] rounded-[3px] border border-[#e2d8c3] text-xs space-y-1">
            <div className="font-bold text-[#914c18] uppercase text-[10.5px]">
              Site Supervisor Note:
            </div>
            <p className="text-[#45474b] leading-relaxed">
              {caseStudy.details.beforeAfterNote}
            </p>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="p-4 bg-white border-t border-[#e2e8f0] flex items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2.5 rounded-[2px] border border-[#cbd5e1] text-[#1e2228] text-xs font-semibold hover:bg-[#f0ece1] cursor-pointer"
          >
            Close
          </button>
          <button
            onClick={() => {
              onClose();
              onScheduleAudit();
            }}
            className="flex-1 py-2.5 px-4 bg-[#914c18] hover:bg-[#763802] text-white text-xs font-bold rounded-[2px] flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
          >
            <span>Request Inspection for Similar Project</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
