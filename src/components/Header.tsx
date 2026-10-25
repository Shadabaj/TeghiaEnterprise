import React from 'react';
import { Phone, MessageSquare, MapPin, Award } from 'lucide-react';
import { CONTRACTOR_INFO } from '../data/contractorData';

interface HeaderProps {
  onScheduleClick: () => void;
  onCallClick: () => void;
  onWhatsAppClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onScheduleClick,
  onCallClick,
  onWhatsAppClick,
}) => {
  return (
    <header className="w-full bg-[#fbf9f5] border-b border-[#e2e8f0] sticky top-0 z-40 backdrop-blur-md bg-[#fbf9f5]/95">
      {/* Top Branding & Quick Contact Bar */}
      <div className="max-w-4xl mx-auto px-4 py-2.5 flex items-center justify-between">
        {/* Brand Wordmark & Location */}
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 bg-[#1e2228] text-white flex flex-col items-center justify-center rounded-[3px] border border-stone-800 shadow-sm shrink-0">
            <span className="font-editorial text-sm font-semibold tracking-wider leading-none text-[#b86b35]">T</span>
            <span className="text-[7px] font-sans-clean font-bold tracking-widest text-stone-300">ENG</span>
          </div>
          <div>
            <div className="text-[15px] sm:text-[17px] font-editorial font-bold tracking-tight text-[#1e2228] leading-tight">
              TEGHIA ENTERPRISE
            </div>
            <div className="text-[9px] sm:text-[10.5px] font-sans-clean font-semibold tracking-wider text-[#914c18] uppercase leading-none mt-0.5 truncate max-w-[210px] sm:max-w-none">
              Interior Renovation &amp; Building Solutions
            </div>
          </div>
        </div>

        {/* Action Buttons & Founder Badge */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Direct Call Button */}
          <button
            onClick={onCallClick}
            aria-label="Call Teghia Enterprise"
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-[3px] border border-[#e2e8f0] bg-white hover:bg-[#f0ece1] text-[#1e2228] flex items-center justify-center transition-colors shadow-2xs"
            title="Call +91 9920734040"
          >
            <Phone className="w-4 h-4 text-[#1e2228]" />
          </button>

          {/* WhatsApp Button */}
          <button
            onClick={onWhatsAppClick}
            aria-label="Chat on WhatsApp"
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-[3px] border border-emerald-200 bg-[#eefaf3] hover:bg-emerald-100 text-emerald-700 flex items-center justify-center transition-colors shadow-2xs"
            title="Chat on WhatsApp"
          >
            <MessageSquare className="w-4 h-4 fill-emerald-600 text-emerald-600" />
          </button>

          {/* Founder Profile Badge */}
          <div className="flex items-center gap-1.5 pl-1.5 border-l border-[#e2e8f0]">
            <div className="relative">
              <img
                src={CONTRACTOR_INFO.founder.avatar}
                alt={CONTRACTOR_INFO.founder.name}
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full object-cover border border-[#b86b35] shadow-xs"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  // Fallback if local image load issue
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Trust Sub-strip (Serving Kharghar, Panvel...) */}
      <div className="bg-[#f0ece1] border-t border-[#e2e8f0] px-4 py-1.5 text-xs text-[#45474b]">
        <div className="max-w-4xl mx-auto flex items-center justify-between text-[11px] font-sans-clean font-medium">
          <div className="flex items-center gap-1.5 truncate pr-2">
            <MapPin className="w-3.5 h-3.5 text-[#b86b35] shrink-0" />
            <span className="truncate">Serving Navi Mumbai, Mumbai, Thane, Raigad, Pune & Palghar</span>
          </div>
          <div className="flex items-center gap-1 shrink-0 font-semibold text-[#1e2228] tracking-wider text-[10px]">
            <Award className="w-3 h-3 text-[#b86b35]" />
            <span>30+ YRS CRAFT</span>
          </div>
        </div>
      </div>
    </header>
  );
};
