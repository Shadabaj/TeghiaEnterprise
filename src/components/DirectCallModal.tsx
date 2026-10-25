import React from 'react';
import {
  X,
  Phone,
  MessageSquare,
  Copy,
  Check,
  Clock,
} from 'lucide-react';
import { CONTRACTOR_INFO } from '../data/contractorData';

interface DirectCallModalProps {
  isOpen: boolean;
  onClose: () => void;
  onWhatsAppClick: () => void;
}

/**
 * Teghia Enterprise custom TE monogram.
 * Drawn in SVG so it does not depend on an external image file.
 */
const TeghiaMonogram: React.FC<{ className?: string }> = ({
  className = 'w-10 h-10',
}) => {
  return (
    <div
      className={`shrink-0 flex items-center justify-center overflow-hidden bg-[#1e2228] border border-stone-800 rounded-[3px] shadow-sm ${className}`}
      aria-label="Teghia Enterprise logo"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        className="w-[85%] h-[85%]"
        role="img"
        aria-label="TE"
      >
        <defs>
          <linearGradient
            id="te-call-gold"
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

          <filter
            id="te-call-shadow"
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

        {/* Angular gold T and E monogram */}
        <g
          fill="url(#te-call-gold)"
          stroke="#382A18"
          strokeWidth="2.2"
          strokeLinejoin="bevel"
          filter="url(#te-call-shadow)"
        >
          {/* Letter T */}
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

          {/* Letter E */}
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
  );
};

export const DirectCallModal: React.FC<DirectCallModalProps> = ({
  isOpen,
  onClose,
  onWhatsAppClick,
}) => {
  const [copied, setCopied] = React.useState(false);

  if (!isOpen) return null;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(CONTRACTOR_INFO.phone);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('Unable to copy the phone number:', error);
    }
  };

  const handleDirectDial = () => {
    window.location.href = `tel:${CONTRACTOR_INFO.phoneClean}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-xs">
      <div className="bg-white rounded-[4px] border border-[#e2e8f0] w-full max-w-sm p-5 space-y-4 shadow-2xl animate-fade-in font-sans-clean">

        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#f0ece1] pb-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#f5efe4] text-[#914c18] flex items-center justify-center border border-[#e2d8c3]">
              <Phone className="w-4 h-4" />
            </div>

            <div>
              <h3 className="font-editorial text-lg font-bold text-[#1e2228] leading-tight">
                Direct Contractor Line
              </h3>

              <p className="text-[11px] text-[#75777b]">
                Kharghar, Navi Mumbai Head Office
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="Close modal"
            className="w-7 h-7 rounded-[2px] text-stone-400 hover:text-stone-700 flex items-center justify-center cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Company Branding & Contact Details */}
        <div className="bg-[#fbf9f5] p-3.5 rounded-[3px] border border-[#e2e8f0] space-y-2 text-xs">

          <div className="flex items-center gap-2.5">
            {/* Replaced broken founder image with the TE logo */}
            <TeghiaMonogram className="w-12 h-12" />

            <div>
              <div className="font-bold text-[#1e2228] text-[13px]">
                {CONTRACTOR_INFO.founder.name}
              </div>

              <div className="text-[11px] text-[#75777b]">
                {CONTRACTOR_INFO.founder.role}
              </div>

              <div className="text-[10px] font-semibold tracking-wider text-[#914c18] mt-1">
                TEGHIA ENTERPRISE
              </div>
            </div>
          </div>

          {/* Phone Number */}
          <div className="pt-2 border-t border-[#f0ece1] flex items-center justify-between">
            <div className="font-mono font-bold text-base text-[#1e2228]">
              {CONTRACTOR_INFO.phone}
            </div>

            <button
              onClick={handleCopy}
              className="px-2 py-1 rounded-[2px] bg-white border border-[#cbd5e1] text-[11px] font-semibold text-[#4a5568] hover:bg-[#f0ece1] flex items-center gap-1 cursor-pointer"
              aria-label="Copy contractor phone number"
            >
              {copied ? (
                <Check className="w-3 h-3 text-emerald-600" />
              ) : (
                <Copy className="w-3 h-3" />
              )}

              <span>{copied ? 'Copied' : 'Copy'}</span>
            </button>
          </div>
        </div>

        {/* Working Hours */}
        <div className="flex items-center gap-1.5 text-[11px] text-[#75777b] px-1">
          <Clock className="w-3.5 h-3.5 text-[#914c18]" />

          <span>
            Active On-Call: 8:00 AM – 8:30 PM (Mon – Sun)
          </span>
        </div>

        {/* Action Buttons */}
        <div className="space-y-2 pt-1">

          {/* Direct Call */}
          <button
            onClick={handleDirectDial}
            className="w-full py-3 bg-[#1e2228] hover:bg-[#914c18] text-white font-bold text-xs uppercase tracking-wider rounded-[2px] flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-sm"
          >
            <Phone className="w-3.5 h-3.5 text-amber-200" />

            <span>
              Call Now ({CONTRACTOR_INFO.phone})
            </span>
          </button>

          {/* WhatsApp */}
          <button
            onClick={() => {
              onClose();
              onWhatsAppClick();
            }}
            className="w-full py-2.5 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 text-emerald-800 font-semibold text-xs rounded-[2px] flex items-center justify-center gap-2 transition-colors cursor-pointer"
          >
            <MessageSquare className="w-3.5 h-3.5 text-emerald-600 fill-emerald-600" />

            <span>Open WhatsApp Message</span>
          </button>
        </div>
      </div>
    </div>
  );
};