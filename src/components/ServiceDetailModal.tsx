import React from 'react';
import { X, Check, ShieldCheck, Clock, Layers, ArrowRight } from 'lucide-react';
import { ServiceItem } from '../data/contractorData';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onBookService: (serviceName: string) => void;
  onCalculateBoq: () => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onBookService,
  onCalculateBoq,
}) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-xs overflow-y-auto">
      <div className="bg-white rounded-[4px] border border-[#e2e8f0] w-full max-w-lg max-h-[92vh] flex flex-col shadow-2xl overflow-hidden my-auto animate-fade-in">
        {/* Header with image */}
        <div className="relative aspect-[16/9] w-full bg-stone-900 overflow-hidden shrink-0">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

          {/* Close Button */}
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-3 right-3 w-8 h-8 rounded-[2px] bg-black/60 hover:bg-black/90 text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Header text */}
          <div className="absolute bottom-3 left-4 right-4">
            <span className="text-[10px] font-sans-clean font-bold tracking-wider uppercase px-2 py-0.5 rounded-[2px] bg-[#914c18] text-white">
              {service.badge}
            </span>
            <h2 className="font-editorial text-xl sm:text-2xl text-white font-medium mt-1 leading-tight">
              {service.title}
            </h2>
          </div>
        </div>

        {/* Scrollable details */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-4 bg-[#fbf9f5] font-sans-clean">
          <p className="text-[13.5px] text-[#45474b] leading-relaxed">
            {service.description}
          </p>

          {/* Metrics strip */}
          <div className="grid grid-cols-2 gap-2 bg-white p-3 rounded-[3px] border border-[#e2e8f0] text-xs">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#914c18] shrink-0" />
              <div>
                <div className="text-[10px] text-[#75777b] uppercase font-semibold">Typical Timeline</div>
                <div className="font-bold text-[#1e2228]">{service.specs.avgTimeline}</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#914c18] shrink-0" />
              <div>
                <div className="text-[10px] text-[#75777b] uppercase font-semibold">Warranty Terms</div>
                <div className="font-bold text-[#1e2228]">{service.specs.warranty}</div>
              </div>
            </div>
          </div>

          {/* Verified Materials */}
          <div className="space-y-1.5">
            <h3 className="text-[11px] font-bold uppercase tracking-wider text-[#914c18]">
              Standard Factory-Sealed Specifications:
            </h3>
            <ul className="space-y-1.5 bg-white p-3 rounded-[3px] border border-[#e2e8f0] text-xs text-[#1e2228]">
              {service.specs.materials.map((m, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-[#914c18] shrink-0 mt-0.5" />
                  <span>{m}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Execution Protocol */}
          <div className="space-y-1.5">
            <h3 className="text-[11px] font-bold uppercase tracking-wider text-[#914c18]">
              Engineering &amp; Site Protocol:
            </h3>
            <div className="p-3 bg-white rounded-[3px] border border-[#e2e8f0] text-xs text-[#45474b] leading-relaxed">
              {service.specs.processSummary}
            </div>
          </div>

          {/* Material Tags */}
          <div className="flex flex-wrap gap-1 pt-1">
            {service.tags.map((t, idx) => (
              <span
                key={idx}
                className="px-2 py-0.5 bg-[#f0ece1] text-[#4a5568] border border-[#dcd7cb] rounded-[2px] text-[11px] font-medium"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 bg-white border-t border-[#e2e8f0] flex items-center justify-between gap-2.5">
          <button
            onClick={() => {
              onClose();
              onCalculateBoq();
            }}
            className="px-3.5 py-2.5 rounded-[2px] border border-[#cbd5e1] text-[#1e2228] text-xs font-semibold hover:bg-[#f0ece1] cursor-pointer"
          >
            Check BOQ Rates
          </button>

          <button
            onClick={() => {
              onClose();
              onBookService(service.title);
            }}
            className="flex-1 py-2.5 px-4 bg-[#1e2228] hover:bg-[#914c18] text-white text-xs font-bold rounded-[2px] flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
          >
            <span>Request Inspection for this Service</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>
      </div>
    </div>
  );
};
