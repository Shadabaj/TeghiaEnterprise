import React from 'react';
import { X, Phone, MessageSquare, Copy, Check, Clock, User, ShieldCheck } from 'lucide-react';
import { CONTRACTOR_INFO } from '../data/contractorData';

interface DirectCallModalProps {
  isOpen: boolean;
  onClose: () => void;
  onWhatsAppClick: () => void;
}

export const DirectCallModal: React.FC<DirectCallModalProps> = ({
  isOpen,
  onClose,
  onWhatsAppClick,
}) => {
  const [copied, setCopied] = React.useState(false);

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(CONTRACTOR_INFO.phone);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDirectDial = () => {
    window.location.href = `tel:${CONTRACTOR_INFO.phoneClean}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-xs">
      <div className="bg-white rounded-[4px] border border-[#e2e8f0] w-full max-w-sm p-5 space-y-4 shadow-2xl animate-fade-in font-sans-clean">
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

        {/* Lead Engineer Contact Details */}
        <div className="bg-[#fbf9f5] p-3.5 rounded-[3px] border border-[#e2e8f0] space-y-2 text-xs">
          <div className="flex items-center gap-2.5">
            <img
              src={CONTRACTOR_INFO.founder.avatar}
              alt={CONTRACTOR_INFO.founder.name}
              className="w-10 h-10 rounded-full object-cover border border-[#b86b35]"
              referrerPolicy="no-referrer"
            />
            <div>
              <div className="font-bold text-[#1e2228] text-[13px]">{CONTRACTOR_INFO.founder.name}</div>
              <div className="text-[11px] text-[#75777b]">{CONTRACTOR_INFO.founder.role}</div>
            </div>
          </div>

          <div className="pt-2 border-t border-[#f0ece1] flex items-center justify-between">
            <div className="font-mono font-bold text-base text-[#1e2228]">
              {CONTRACTOR_INFO.phone}
            </div>
            <button
              onClick={handleCopy}
              className="px-2 py-1 rounded-[2px] bg-white border border-[#cbd5e1] text-[11px] font-semibold text-[#4a5568] hover:bg-[#f0ece1] flex items-center gap-1 cursor-pointer"
            >
              {copied ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
              <span>{copied ? 'Copied' : 'Copy'}</span>
            </button>
          </div>
        </div>

        {/* Working Hours */}
        <div className="flex items-center gap-1.5 text-[11px] text-[#75777b] px-1">
          <Clock className="w-3.5 h-3.5 text-[#914c18]" />
          <span>Active On-Call: 8:00 AM – 8:30 PM (Mon – Sun)</span>
        </div>

        {/* Action Triggers */}
        <div className="space-y-2 pt-1">
          <button
            onClick={handleDirectDial}
            className="w-full py-3 bg-[#1e2228] hover:bg-[#914c18] text-white font-bold text-xs uppercase tracking-wider rounded-[2px] flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-sm"
          >
            <Phone className="w-3.5 h-3.5 text-amber-200" />
            <span>Call Now ({CONTRACTOR_INFO.phone})</span>
          </button>

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
