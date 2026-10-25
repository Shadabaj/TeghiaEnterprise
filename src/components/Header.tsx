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

          {/* Custom TE Gold Monogram */}
          <div
            className="w-9 h-9 bg-[#1e2228] flex items-center justify-center rounded-[3px] border border-stone-800 shadow-sm shrink-0 overflow-hidden"
            aria-label="Teghia Enterprise logo"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 100"
              className="w-[30px] h-[30px]"
              role="img"
              aria-labelledby="te-logo-title"
            >
              <title id="te-logo-title">Teghia Enterprise TE Monogram</title>

              <defs>
                {/* Metallic gold finish */}
                <linearGradient
                  id="te-header-gold"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#F8E7AD" />
                  <stop offset="22%" stopColor="#E4C77E" />
                  <stop offset="48%" stopColor="#C49A4C" />
                  <stop offset="72%" stopColor="#E7CA82" />
                  <stop offset="100%" stopColor="#A87932" />
                </linearGradient>

                {/* Dark outline for the engraved appearance */}
                <filter
                  id="te-header-shadow"
                  x="-15%"
                  y="-15%"
                  width="130%"
                  height="130%"
                >
                  <feDropShadow
                    dx="0.7"
                    dy="1"
                    stdDeviation="0.6"
                    floodColor="#000000"
                    floodOpacity="0.6"
                  />
                </filter>
              </defs>

              <g
                fill="url(#te-header-gold)"
                stroke="#382A18"
                strokeWidth="2.2"
                strokeLinejoin="bevel"
                filter="url(#te-header-shadow)"
              >
                {/* Custom angular T */}
                <path
                  d="
                    M 7 17
                    L 47 4
                    L 47 22
                    L 33 26
                    L 33 91
                    L 24 77
                    L 24 32
                    L 10 37
                    Z
                  "
                />

                {/* Custom angular E */}
                <path
                  d="
                    M 52 4
                    L 93 18
                    L 89 36
                    L 69 29
                    L 69 42
                    L 85 46
                    L 81 62
                    L 68 58
                    L 68 71
                    L 82 72
                    L 76 87
                    L 52 98
                    Z
                  "
                />
              </g>

              {/* Metallic highlights */}
              <g
                fill="none"
                stroke="#FFF0BD"
                strokeWidth="1"
                strokeLinecap="round"
                opacity="0.65"
              >
                <path d="M 13 19 L 40 10" />
                <path d="M 27 35 L 27 67" />
                <path d="M 57 10 L 84 20" />
                <path d="M 73 35 L 82 38" />
              </g>

              {/* Subtle engraved details */}
              <g
                fill="none"
                stroke="#795727"
                strokeWidth="1.2"
                strokeLinecap="round"
                opacity="0.7"
              >
                <path d="M 14 27 L 19 25" />
                <path d="M 28 72 L 30 70" />
                <path d="M 57 33 L 62 35" />
                <path d="M 72 79 L 77 80" />
              </g>
            </svg>
          </div>

          {/* Company Name */}
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

      {/* Trust Sub-strip: Service Areas */}
      <div className="bg-[#f0ece1] border-t border-[#e2e8f0] px-4 py-1.5 text-xs text-[#45474b]">
        <div className="max-w-4xl mx-auto flex items-center justify-between text-[11px] font-sans-clean font-medium">
          <div className="flex items-center gap-1.5 truncate pr-2">
            <MapPin className="w-3.5 h-3.5 text-[#b86b35] shrink-0" />

            <span className="truncate">
              Serving Navi Mumbai, Mumbai, Thane, Raigad, Pune &amp; Palghar
            </span>
          </div>

          <div className="flex items-center gap-1 shrink-0 font-semibold text-[#1e2228] tracking-wider text-[10px]">
            <Award className="w-3 h-3 text-[#b86b35]" />
            <span>45+ YRS CRAFT</span>
          </div>
        </div>
      </div>
    </header>
  );
};

