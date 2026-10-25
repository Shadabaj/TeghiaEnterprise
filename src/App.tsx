import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { ProtocolSection } from './components/ProtocolSection';
import { CaseStudiesSection } from './components/CaseStudiesSection';
import { ReviewsSection } from './components/ReviewsSection';
import { NeighborhoodsSection } from './components/NeighborhoodsSection';
import { FaqSection } from './components/FaqSection';
import { AuditCtaSection } from './components/AuditCtaSection';
import { BottomNav } from './components/BottomNav';
import { BoqCalculatorModal } from './components/BoqCalculatorModal';
import { SiteInspectionModal } from './components/SiteInspectionModal';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { CaseStudyDetailModal } from './components/CaseStudyDetailModal';
import { DirectCallModal } from './components/DirectCallModal';
import {
  CONTRACTOR_INFO,
  ServiceItem,
  CaseStudy,
  CASE_STUDIES,
} from './data/contractorData';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [isBoqOpen, setIsBoqOpen] = useState<boolean>(false);
  const [isInspectionOpen, setIsInspectionOpen] = useState<boolean>(false);
  const [isCallModalOpen, setIsCallModalOpen] = useState<boolean>(false);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);
  const [selectedAreaForInspection, setSelectedAreaForInspection] = useState<string>('Kharghar (Sector 1 - 36)');
  const [preloadedBoq, setPreloadedBoq] = useState<{
    flatType: string;
    area: number;
    grade: string;
    totalEst: number;
  } | null>(null);

  // Navigation tab switcher
  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    if (tab === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (tab === 'services') {
      const el = document.getElementById('services');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (tab === 'projects') {
      const el = document.getElementById('projects');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (tab === 'reviews') {
      const el = document.getElementById('reviews');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      'Hi Teghia Enterprise, I would like to inquire about turnkey interior renovation and waterproofing in Navi Mumbai.'
    );
    window.open(`https://wa.me/${CONTRACTOR_INFO.phoneClean}?text=${text}`, '_blank');
  };

  const handleOpenCaseStudyById = (id: string) => {
    const cs = CASE_STUDIES.find((c) => c.id === id) || CASE_STUDIES[0];
    setSelectedCaseStudy(cs);
  };

  const handleScheduleForArea = (area: string) => {
    setSelectedAreaForInspection(area);
    setIsInspectionOpen(true);
  };

  const handleProceedToAuditWithBoq = (config: {
    flatType: string;
    area: number;
    grade: string;
    totalEst: number;
  }) => {
    setPreloadedBoq(config);
    setIsInspectionOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#fbf9f5] text-[#1b1c1a] flex flex-col font-sans-clean selection:bg-[#b86b35] selection:text-white pb-24 sm:pb-28">
      {/* Top Header matching screenshot */}
      <Header
        onScheduleClick={() => setIsInspectionOpen(true)}
        onCallClick={() => setIsCallModalOpen(true)}
        onWhatsAppClick={handleWhatsApp}
      />

      {/* Main Content Sections */}
      <main className="flex-1 w-full flex flex-col">
        {/* 1. Hero Section */}
        <Hero
          onScheduleClick={() => setIsInspectionOpen(true)}
          onCallClick={() => setIsCallModalOpen(true)}
          onWhatsAppClick={handleWhatsApp}
          onOpenCaseStudy={handleOpenCaseStudyById}
        />

        {/* 2. Specialized Capabilities: 6 Core Verticals */}
        <ServicesSection
          onSelectService={(service) => setSelectedService(service)}
          onOpenBoq={() => setIsBoqOpen(true)}
        />

        {/* 3. The Teghia Protocol: 7-Step Transparent Execution */}
        <ProtocolSection />

        {/* 4. Track Record: Featured Local Case Studies */}
        <CaseStudiesSection
          onSelectCaseStudy={(caseStudy) => setSelectedCaseStudy(caseStudy)}
        />

        {/* 5. Community Reputation: Real Reviews */}
        <ReviewsSection />

        {/* 6. Immediate Dispatch: Navi Mumbai Neighborhoods We Serve */}
        <NeighborhoodsSection
          onScheduleForArea={handleScheduleForArea}
        />

        {/* 7. Clear Answers: Frequently Asked Questions */}
        <FaqSection />

        {/* 8. Conversion Card: Complimentary Site Audit */}
        <AuditCtaSection
          onScheduleClick={() => setIsInspectionOpen(true)}
          onCallClick={() => setIsCallModalOpen(true)}
        />
      </main>

      {/* Quiet Architectural Footer */}
      <footer className="w-full bg-[#1e2228] text-stone-400 py-10 px-4 sm:px-6 border-t border-stone-800 text-xs">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-stone-800 pb-6">
            <div>
              <div className="text-base font-editorial font-bold text-white tracking-wide">
                TEGHIA ENTERPRISE
              </div>
              <p className="text-[11px] text-stone-400 mt-0.5">
                Building Solutions &amp; Interior Architectural Contractors
              </p>
            </div>
            <div className="text-stone-300 font-mono text-xs">
              {CONTRACTOR_INFO.phone} · teghiaenterprise.solutions@gmail.com
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-[11.5px] leading-relaxed">
            <div>
              <span className="text-stone-200 font-semibold block mb-1">
                Kharghar Engineering Office:
              </span>
              <p>{CONTRACTOR_INFO.address}</p>
            </div>
            <div className="sm:text-right space-y-1">
              <p>© {new Date().getFullYear()} Teghia Enterprise. All rights reserved.</p>
              <p className="text-stone-500 text-[10.5px]">
                Providing un-bundled line-item BOQs, verified on-site civil supervision, and stamped 7-year waterproofing warranties across Navi Mumbai.
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Bottom Action Strip & Navigation Tabs matching screenshot */}
      <BottomNav
        activeTab={activeTab}
        onTabChange={handleTabChange}
        onCallClick={() => setIsCallModalOpen(true)}
        onWhatsAppClick={handleWhatsApp}
        onBoqClick={() => setIsBoqOpen(true)}
      />

      {/* Interactive Modals */}
      <BoqCalculatorModal
        isOpen={isBoqOpen}
        onClose={() => setIsBoqOpen(false)}
        onProceedToAudit={handleProceedToAuditWithBoq}
      />

      <SiteInspectionModal
        isOpen={isInspectionOpen}
        onClose={() => {
          setIsInspectionOpen(false);
          setPreloadedBoq(null);
        }}
        preselectedArea={selectedAreaForInspection}
        preloadedBoq={preloadedBoq}
      />

      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onBookService={(name) => {
          setSelectedService(null);
          setIsInspectionOpen(true);
        }}
        onCalculateBoq={() => {
          setSelectedService(null);
          setIsBoqOpen(true);
        }}
      />

      <CaseStudyDetailModal
        caseStudy={selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
        onScheduleAudit={() => {
          setSelectedCaseStudy(null);
          setIsInspectionOpen(true);
        }}
      />

      <DirectCallModal
        isOpen={isCallModalOpen}
        onClose={() => setIsCallModalOpen(false)}
        onWhatsAppClick={handleWhatsApp}
      />
    </div>
  );
}
