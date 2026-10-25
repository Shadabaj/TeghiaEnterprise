import React, { useState } from 'react';
import { Home, Droplet, Wrench, Paintbrush, Layers, Grid2X2, ArrowUpRight } from 'lucide-react';
import { SERVICES, ServiceItem } from '../data/contractorData';

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
  onOpenBoq: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectService,
  onOpenBoq,
}) => {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const filterTabs = ['All', 'Modular & Interiors', 'Waterproofing', 'Civil & Masonry', 'Painting', 'Ceilings & Lighting'];

  const filteredServices = activeFilter === 'All'
    ? SERVICES
    : SERVICES.filter((s) => s.category.includes(activeFilter) || s.title.toLowerCase().includes(activeFilter.toLowerCase()));

  const renderIcon = (name: ServiceItem['iconName']) => {
    switch (name) {
      case 'home':
        return <Home className="w-4 h-4 text-[#914c18]" />;
      case 'droplet':
        return <Droplet className="w-4 h-4 text-[#914c18]" />;
      case 'wrench':
        return <Wrench className="w-4 h-4 text-[#914c18]" />;
      case 'brush':
        return <Paintbrush className="w-4 h-4 text-[#914c18]" />;
      case 'layers':
        return <Layers className="w-4 h-4 text-[#914c18]" />;
      case 'grid':
        return <Grid2X2 className="w-4 h-4 text-[#914c18]" />;
      default:
        return <Home className="w-4 h-4 text-[#914c18]" />;
    }
  };

  return (
    <section id="services" className="w-full py-8 px-4 sm:px-6 bg-[#fbf9f5] border-t border-[#e2e8f0]">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Section Header */}
        <div className="space-y-1.5">
          <div className="flex items-center justify-between text-[11px] font-sans-clean font-bold tracking-widest uppercase">
            <span className="text-[#914c18]">SPECIALIZED CAPABILITIES</span>
            <span className="text-[#4a5568]">6 Core Verticals</span>
          </div>

          <h2 className="font-editorial text-[28px] sm:text-[34px] text-[#1e2228] font-normal tracking-tight leading-tight">
            Engineered Turnkey Solutions
          </h2>

          <p className="font-sans-clean text-[14px] text-[#45474b] leading-relaxed">
            End-to-end execution without sub-contractor handoffs or inflated middleman pricing.
          </p>
        </div>

        {/* Filter Tabs (Interactive segmented buttons) */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none text-[12px] font-sans-clean">
          {filterTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveFilter(tab)}
              className={`px-3 py-1.5 rounded-[3px] font-medium whitespace-nowrap transition-colors cursor-pointer border ${
                activeFilter === tab
                  ? 'bg-[#1e2228] text-white border-[#1e2228]'
                  : 'bg-white text-[#45474b] border-[#e2e8f0] hover:bg-[#f5f3ef]'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* 6 Service Cards Stack */}
        <div className="space-y-6">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              onClick={() => onSelectService(service)}
              className="bg-white rounded-[4px] border border-[#e2e8f0] overflow-hidden group cursor-pointer hover:border-[#b86b35] transition-all shadow-2xs"
            >
              {/* Image Container with Badge */}
              <div className="relative aspect-[16/9] w-full bg-stone-900 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                {/* Badge matching screenshot (e.g. FULL EXECUTION, MOISTURE-AUDIT FIRST) */}
                <div className="absolute top-3 left-3 bg-[#1e2228]/90 backdrop-blur-xs text-white text-[10px] font-sans-clean font-bold tracking-wider px-2 py-1 rounded-[2px] border border-white/10 uppercase">
                  {service.badge}
                </div>

                {/* Quick Inspect affordance */}
                <div className="absolute bottom-2.5 right-3 opacity-90 group-hover:opacity-100 transition-opacity bg-white/90 backdrop-blur-xs text-[#1e2228] text-[11px] font-sans-clean font-semibold px-2 py-0.5 rounded-[2px] flex items-center gap-1">
                  <span>View Specs</span>
                  <ArrowUpRight className="w-3 h-3 text-[#b86b35]" />
                </div>
              </div>

              {/* Card Body */}
              <div className="p-4 sm:p-5 space-y-3">
                {/* Title & Icon Row */}
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-editorial text-[20px] sm:text-[22px] font-medium text-[#1e2228] leading-snug group-hover:text-[#914c18] transition-colors">
                    {service.title}
                  </h3>
                  <div className="p-1.5 rounded-[3px] bg-[#f5efe4] border border-[#e2d8c3] shrink-0">
                    {renderIcon(service.iconName)}
                  </div>
                </div>

                {/* Description */}
                <p className="font-sans-clean text-[13.5px] sm:text-[14px] text-[#45474b] leading-relaxed">
                  {service.description}
                </p>

                {/* Material / Specification Chips matching screenshot */}
                <div className="flex flex-wrap items-center gap-1.5 pt-1">
                  {service.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="inline-block px-2.5 py-1 bg-[#f0ece1] text-[#4a5568] border border-[#dcd7cb] rounded-[2px] text-[11px] font-sans-clean font-medium tracking-wide"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Action prompt */}
        <div className="p-3.5 bg-[#f5f3ef] border border-[#e2e8f0] rounded-[3px] flex items-center justify-between text-xs">
          <div className="text-[#45474b]">
            Need a bundled estimate for multiple services?
          </div>
          <button
            onClick={onOpenBoq}
            className="text-[#914c18] font-semibold hover:underline cursor-pointer"
          >
            Calculate Turnkey BOQ &rarr;
          </button>
        </div>
      </div>
    </section>
  );
};
