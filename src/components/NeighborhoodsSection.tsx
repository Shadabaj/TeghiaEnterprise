import React, { useState } from 'react';
import { MapPin, Navigation, Clock, ShieldCheck } from 'lucide-react';
import { NEIGHBORHOODS, Neighborhood } from '../data/contractorData';

interface NeighborhoodsSectionProps {
  onScheduleForArea: (areaName: string) => void;
}

export const NeighborhoodsSection: React.FC<NeighborhoodsSectionProps> = ({
  onScheduleForArea,
}) => {
  const [selectedNode, setSelectedNode] = useState<Neighborhood>(NEIGHBORHOODS[0]);

  return (
    <section className="w-full py-8 px-4 sm:px-6 bg-[#fbf9f5] border-t border-[#e2e8f0]">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="space-y-1.5">
          <div className="text-[11px] font-sans-clean font-bold tracking-widest text-[#914c18] uppercase">
            IMMEDIATE DISPATCH
          </div>
          <h2 className="font-editorial text-[28px] sm:text-[34px] text-[#1e2228] font-normal tracking-tight leading-tight">
            Navi Mumbai Neighborhoods We Serve
          </h2>
          <p className="font-sans-clean text-[14px] text-[#45474b] leading-relaxed">
            Our site survey team reaches any of these locations within 24 to 48 hours.
          </p>
        </div>

        {/* Neighborhood Selection Pills Grid matching screenshot */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
          {NEIGHBORHOODS.map((node) => {
            const isSelected = selectedNode.id === node.id;
            return (
              <button
                key={node.id}
                onClick={() => setSelectedNode(node)}
                className={`p-2.5 rounded-[3px] border text-left transition-all cursor-pointer font-sans-clean ${
                  isSelected
                    ? 'bg-[#1e2228] text-white border-[#1e2228] shadow-xs'
                    : 'bg-white text-[#1e2228] border-[#e2e8f0] hover:bg-[#f5f3ef]'
                }`}
              >
                <div className="text-[12.5px] sm:text-[13px] font-semibold leading-tight flex items-center justify-between">
                  <span>{node.name}</span>
                  {node.isHeadquarter && (
                    <span className={`text-[9px] px-1 rounded-[2px] font-bold ${isSelected ? 'bg-[#b86b35] text-white' : 'bg-[#f0ece1] text-[#914c18]'}`}>
                      HQ
                    </span>
                  )}
                </div>
                <div className={`text-[10.5px] mt-1 flex items-center gap-1 ${isSelected ? 'text-stone-300' : 'text-[#75777b]'}`}>
                  <Clock className="w-3 h-3" />
                  <span>{node.dispatchTime}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Node Status Banner */}
        <div className="bg-white p-3.5 rounded-[3px] border border-[#e2e8f0] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
          <div>
            <div className="font-semibold text-[#1e2228] text-[13.5px] flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-[#914c18]" />
              <span>{selectedNode.name} Priority Coverage</span>
            </div>
            <p className="text-[#45474b] mt-0.5 text-[12px]">
              {selectedNode.sectorsCovered} · {selectedNode.activeProjects} active renovation sites currently running
            </p>
          </div>
          <button
            onClick={() => onScheduleForArea(selectedNode.name)}
            className="w-full sm:w-auto px-3.5 py-1.5 bg-[#914c18] hover:bg-[#763802] text-white font-sans-clean font-semibold rounded-[2px] text-center cursor-pointer whitespace-nowrap transition-colors"
          >
            Book Survey in {selectedNode.name.split(' ')[0]}
          </button>
        </div>

        {/* Architectural Map Card with Kharghar HQ pin matching screenshot */}
        <div className="relative w-full h-44 sm:h-52 rounded-[4px] border border-[#e2e8f0] overflow-hidden bg-[#e9f0ea] flex items-center justify-center shadow-2xs">
          {/* Stylized vector map canvas representing Navi Mumbai creek, highway corridors & green hills */}
          <svg
            className="absolute inset-0 w-full h-full opacity-65 pointer-events-none"
            viewBox="0 0 800 400"
            preserveAspectRatio="none"
          >
            {/* Thane Creek Water body */}
            <path
              d="M 0,0 L 220,0 Q 200,120 180,240 T 130,400 L 0,400 Z"
              fill="#bfe1ec"
            />
            {/* Hills & Parsik Range */}
            <path
              d="M 520,0 Q 560,180 620,280 T 780,400 L 800,400 L 800,0 Z"
              fill="#d3e6cf"
            />
            {/* Sion-Panvel Expressway Highway */}
            <path
              d="M 120,400 Q 240,250 420,180 T 800,120"
              stroke="#cbd5e1"
              strokeWidth="9"
              fill="none"
            />
            <path
              d="M 120,400 Q 240,250 420,180 T 800,120"
              stroke="#fef08a"
              strokeWidth="4"
              strokeDasharray="10 6"
              fill="none"
            />
            {/* Kharghar Valley Road & Central Park grid */}
            <path
              d="M 380,210 L 490,90 L 580,140"
              stroke="#94a3b8"
              strokeWidth="3"
              fill="none"
            />
            <path
              d="M 440,160 L 390,320"
              stroke="#94a3b8"
              strokeWidth="2.5"
              fill="none"
            />
            {/* Golf Course / Central Park Green Area */}
            <circle cx="480" cy="180" r="45" fill="#a7d8a9" opacity="0.6" />
          </svg>

          {/* Map Location Labels */}
          <div className="absolute top-4 left-6 text-[11px] font-sans-clean font-bold tracking-wider text-slate-500 uppercase opacity-70">
            Thane Creek · Vashi
          </div>
          <div className="absolute bottom-4 right-6 text-[11px] font-sans-clean font-bold tracking-wider text-emerald-800 uppercase opacity-70">
            Kharghar Hills Reserve
          </div>

          {/* Central Kharghar Base Pin matching screenshot */}
          <div className="relative z-10 bg-white/95 backdrop-blur-xs px-3.5 py-1.5 rounded-[3px] border border-[#cbd5e1] shadow-md flex items-center gap-2 text-stone-900 animate-fade-in">
            <div className="relative flex items-center justify-center">
              <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-amber-400 opacity-75" />
              <Navigation className="w-4 h-4 text-[#914c18] rotate-45 shrink-0 relative" />
            </div>
            <div className="text-[12px] font-sans-clean font-bold tracking-wide">
              Based in Kharghar, Navi Mumbai
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
