import React from 'react';
import { Phone, MessageSquare, FileSpreadsheet, Home, Briefcase, FolderGit2, Star, Calculator } from 'lucide-react';

interface BottomNavProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  onCallClick: () => void;
  onWhatsAppClick: () => void;
  onBoqClick: () => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({
  activeTab,
  onTabChange,
  onCallClick,
  onWhatsAppClick,
  onBoqClick,
}) => {
  return (
    <aside aria-label="Quick Actions and Mobile Navigation" className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-[#e2e8f0] shadow-2xl">
      <div className="max-w-4xl mx-auto">
        {/* Upper Action Strip (Direct Call, WhatsApp, BOQ Quote) matching screenshot */}
        <div className="grid grid-cols-3 gap-1.5 p-2 bg-[#1e2228] text-white">
          {/* Direct Call */}
          <button
            onClick={onCallClick}
            className="flex items-center justify-center gap-1.5 py-2 px-1 bg-[#282d35] hover:bg-[#343a44] rounded-[2px] text-[11px] font-sans-clean font-bold tracking-wider transition-colors cursor-pointer text-stone-100"
          >
            <Phone className="w-3.5 h-3.5 text-stone-300" />
            <span className="truncate">DIRECT CALL</span>
          </button>

          {/* WhatsApp */}
          <button
            onClick={onWhatsAppClick}
            className="flex items-center justify-center gap-1.5 py-2 px-1 bg-[#10b981] hover:bg-[#059669] rounded-[2px] text-[11px] font-sans-clean font-bold tracking-wider text-white transition-colors cursor-pointer shadow-xs"
          >
            <MessageSquare className="w-3.5 h-3.5 fill-white text-white" />
            <span className="truncate">WHATSAPP</span>
          </button>

          {/* BOQ Quote */}
          <button
            onClick={onBoqClick}
            className="flex items-center justify-center gap-1.5 py-2 px-1 bg-[#914c18] hover:bg-[#783e12] rounded-[2px] text-[11px] font-sans-clean font-bold tracking-wider text-white transition-colors cursor-pointer shadow-xs"
          >
            <FileSpreadsheet className="w-3.5 h-3.5 text-amber-200" />
            <span className="truncate">BOQ QUOTE</span>
          </button>
        </div>

        {/* Lower Tab Bar (Home, Services, Projects, Reviews, Quote) matching screenshot */}
        <nav aria-label="Bottom Navigation Tabs" className="grid grid-cols-5 py-1.5 px-2 bg-white border-t border-[#f0ece1] text-[10px] font-sans-clean">
          <button
            onClick={() => onTabChange('home')}
            className={`flex flex-col items-center justify-center gap-0.5 py-1 transition-colors cursor-pointer ${
              activeTab === 'home' ? 'text-[#914c18] font-bold' : 'text-[#75777b] hover:text-[#1e2228]'
            }`}
          >
            <Home className="w-4 h-4" />
            <span>Home</span>
          </button>

          <button
            onClick={() => onTabChange('services')}
            className={`flex flex-col items-center justify-center gap-0.5 py-1 transition-colors cursor-pointer ${
              activeTab === 'services' ? 'text-[#914c18] font-bold' : 'text-[#75777b] hover:text-[#1e2228]'
            }`}
          >
            <Briefcase className="w-4 h-4" />
            <span>Services</span>
          </button>

          <button
            onClick={() => onTabChange('projects')}
            className={`flex flex-col items-center justify-center gap-0.5 py-1 transition-colors cursor-pointer ${
              activeTab === 'projects' ? 'text-[#914c18] font-bold' : 'text-[#75777b] hover:text-[#1e2228]'
            }`}
          >
            <FolderGit2 className="w-4 h-4" />
            <span>Projects</span>
          </button>

          <button
            onClick={() => onTabChange('reviews')}
            className={`flex flex-col items-center justify-center gap-0.5 py-1 transition-colors cursor-pointer ${
              activeTab === 'reviews' ? 'text-[#914c18] font-bold' : 'text-[#75777b] hover:text-[#1e2228]'
            }`}
          >
            <Star className="w-4 h-4" />
            <span>Reviews</span>
          </button>

          <button
            onClick={onBoqClick}
            className={`flex flex-col items-center justify-center gap-0.5 py-1 transition-colors cursor-pointer ${
              activeTab === 'quote' ? 'text-[#914c18] font-bold' : 'text-[#75777b] hover:text-[#1e2228]'
            }`}
          >
            <Calculator className="w-4 h-4" />
            <span>Quote</span>
          </button>
        </nav>
      </div>
    </aside>
  );
};
