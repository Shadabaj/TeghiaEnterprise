export interface ServiceItem {
  id: string;
  badge: string;
  title: string;
  category: string;
  iconName: 'home' | 'droplet' | 'wrench' | 'brush' | 'layers' | 'grid';
  image: string;
  description: string;
  tags: string[];
  specs: {
    materials: string[];
    warranty: string;
    avgTimeline: string;
    processSummary: string;
  };
}

export interface CaseStudy {
  id: string;
  tag: string;
  location: string;
  title: string;
  description: string;
  image: string;
  metric1Label: string;
  metric1Value: string;
  metric2Label: string;
  metric2Value: string;
  scopeBadge: string;
  rating?: number;
  details: {
    client: string;
    society: string;
    scopeItems: string[];
    materialsUsed: string[];
    snagPointsResolved: number;
    beforeAfterNote: string;
  };
}

export interface Testimonial {
  id: string;
  name: string;
  initials: string;
  society: string;
  rating: number;
  review: string;
  verifiedTag: string;
  serviceTag: string;
}

export interface ProtocolStep {
  stepNumber: number;
  title: string;
  summary: string;
  deliverables: string[];
}

export interface Neighborhood {
  id: string;
  name: string;
  dispatchTime: string;
  activeProjects: number;
  sectorsCovered: string;
  isHeadquarter?: boolean;
}

export const CONTRACTOR_INFO = {
  name: 'Teghia Enterprise',
  legalName: 'Building Solutions & Interior Renovation',
  tagline: 'Deliver Quality Service On Time Within Budget',
  phone: '+91 9920734040',
  phoneClean: '9920734040',
  whatsapp: '+91 9920734040',
  address: 'Shop No9PL-51\C, Yash Avenue Co-operative Housing Society, Shop no 16, 1st Floor, Plot no.16, Sector 20, Kharghar, Panvel, Maharashtra 410210',
  googleRating: '4.8',
  reviewCount: '180+',
  experienceYears: '40+',
  founder: {
    name: 'Jalaluddin Ansari',
    role: 'Founder & Senior Civil Contractor',
    experience: '40+ Years Craftsmanship',
    avatar: './src/assets/images/contractor_founder_portrait_1792912327536.jpg',
  },
};

export const TRUST_METRICS = [
  {
    icon: 'star',
    value: '4.8 / 5.0',
    title: '4.8 / 5.0',
    description: 'Verified Google Rating across 180+ Navi Mumbai homeowners',
  },
  {
    icon: 'receipt',
    value: 'Zero Hidden',
    title: 'Zero Hidden',
    description: 'Itemized line-by-line BOQ with fixed material specifications',
  },
  {
    icon: 'shield',
    value: '7-Yr Warranty',
    title: '7-Yr Warranty',
    description: 'Elastomeric & crystalline multi-coat certified waterproofing',
  },
  {
    icon: 'hard-hat',
    value: '100% On-Site',
    title: '100% On-Site',
    description: 'Dedicated civil engineer supervisor for daily quality audits',
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'modular-interior',
    badge: 'FULL EXECUTION',
    title: 'Interior Renovation & Modular Fit-outs',
    category: 'Modular & Interiors',
    iconName: 'home',
    image: './src/assets/images/modular_kitchen_fitout_1792912270534.jpg',
    description:
      'Bespoke modular kitchens (IS 710 BWR ply), veneer/PU wall paneling, built-in wardrobes, space-optimized layouts, and turnkey home styling.',
    tags: ['Hafele / Hettich', 'BWP Grade Ply', '45-Day Handover'],
    specs: {
      materials: [
        'Century Club Prime 710 Marine Plywood',
        'Hafele soft-close hydraulic tandem drawers',
        'Italian PU & matte acrylic laminate surfaces',
        'Concealed warm LED architectural edge lighting',
      ],
      warranty: '10-Year Anti-Borer & Termite Replacement Guarantee',
      avgTimeline: '35 - 45 Calendar Days',
      processSummary:
        '3D CAD layout freeze, carcass factory assembly, moisture-barrier back panels, on-site precision laser alignment, and edge-banding inspections.',
    },
  },
  {
    id: 'waterproofing',
    badge: 'MOISTURE-AUDIT FIRST',
    title: 'Waterproofing & Leakage Treatment',
    category: 'Waterproofing',
    iconName: 'droplet',
    image: './src/assets/images/waterproofing_leakage_audit_1792912271288.jpg',
    description:
      'Comprehensive moisture meter scanning, terrace crystalline grouting, external wall crack sealing, and bathroom slab membrane treatments with certified performance guarantees.',
    tags: ['Dr. Fixit / Fosroc', 'Infrared Moisture Mapping', 'Up to 7-Yr Warranty'],
    specs: {
      materials: [
        'Dr. Fixit Fastflex 2-component polymer membrane',
        'Fosroc Brushbond crystalline waterproofing slurry',
        'Polyurethane (PU) high-pressure injection foam',
        'SBR chemical bonding coats for floor slabs',
      ],
      warranty: 'Up to 7-Year Stamped Waterproofing Warranty',
      avgTimeline: '7 - 14 Calendar Days',
      processSummary:
        'Infrared thermal leak tracing, core crack v-groove chiseled routing, polyurethane high-pressure injection, 3-coat elastomeric membrane application, and 72-hour ponding test.',
    },
  },
  {
    id: 'civil-structural',
    badge: 'HEAVY CIVIL',
    title: 'Civil Construction & Structural Repairs',
    category: 'Civil & Masonry',
    iconName: 'wrench',
    image: './src/assets/images/civil_structural_repairs_1792912295291.jpg',
    description:
      'RCC column retrofitting, internal wall alterations, plaster rebonding, vitrified tile / Italian marble flooring, and foundation damp-proofing for villas and high-rises.',
    tags: ['Structural Audit Ready', 'Ultratech 53-Grade', 'Laser Leveling'],
    specs: {
      materials: [
        'Ultratech Super 53-Grade OPC / PPC Cement',
        'Rust-inhibiting epoxy rebar coatings',
        'Laser-calibrated 800x1600mm GVT vitrified tiles / Italian composite marble',
        'Non-shrink micro-concrete structural jackets',
      ],
      warranty: '15-Year Structural Integrity Guarantee',
      avgTimeline: '20 - 35 Calendar Days',
      processSummary:
        'Structural engineer survey, demolition debris clearance with society hoist guidelines, laser-level floor bed preparation, and structural reinforcement jacketing.',
    },
  },
  {
    id: 'painting-finishes',
    badge: 'CERTIFIED APPLICATOR',
    title: 'Interior & Exterior Painting',
    category: 'Painting',
    iconName: 'brush',
    image: './src/assets/images/interior_exterior_painting_1792912295640.jpg',
    description:
      'Mechanized dustless sanding, acrylic primer coats, anti-fungal exterior weather-shields, and luxury interior finishes (Royal Touch / PU wood coatings).',
    tags: ['Asian Paints Royale', 'Berger WeatherCoat', 'Zero VOC Options'],
    specs: {
      materials: [
        'Asian Paints Royale Luxury Emulsion (Interior)',
        'Apex Ultima Protek with 10-Yr weather protection (Exterior)',
        'Birla White Wall Seal Putty',
        'PU Woodtech clear coats for natural veneers',
      ],
      warranty: '5-Year Paint Anti-Peeling & Sheen Warranty',
      avgTimeline: '12 - 18 Calendar Days',
      processSummary:
        'Mechanized dustless Festool vacuum sanding, 2 coats acrylic sealer primer, 2 coats water-resistant wall putty, and 2 finish coats applied via airless sprayers.',
    },
  },
  {
    id: 'gypsum-ceilings',
    badge: 'SAINT-GOBAIN SPEC',
    title: 'Gypsum & POP Architectural Ceilings',
    category: 'Ceilings & Lighting',
    iconName: 'layers',
    image: './src/assets/images/gypsum_ceiling_installation_1792912271007.jpg',
    description:
      'Heavy-gauge GI channel suspension, Saint-Gobain Gyproc boards, zero-sag joints, and integrated profile lighting channels for a seamless modern aesthetic.',
    tags: ['Gyproc Elite Boards', 'Acoustic Buffering', 'Profile Coves'],
    specs: {
      materials: [
        'Saint-Gobain Gyproc 12.5mm moisture-resistant boards',
        '0.55mm heavy gauge zinc-galvanized GI perimeter & intermediate channels',
        'Gyproc jointing compound and paper tape reinforcement',
        'Extruded aluminum profile coves with flicker-free CRI>90 LEDs',
      ],
      warranty: '8-Year Anti-Sagging Guarantee',
      avgTimeline: '10 - 15 Calendar Days',
      processSummary:
        'Laser level horizontal alignment, anchor soffit fasteners at 450mm c/c, seamless joint taping with zero-crack filler, and precision cutout milling for magnetic track lights.',
    },
  },
  {
    id: 'metal-fabrication',
    badge: 'CUSTOM METALWORK',
    title: 'MS & SS Fabrication & Balcony Grills',
    category: 'Fabrication',
    iconName: 'grid',
    image: './src/assets/images/balcony_fabrication_grills_1792912295972.jpg',
    description:
      'Heavy-duty safety grills, SS 304 balcony railings with toughened glass, polycarbonate terrace sheds, and motorized security gates fabricated to precise dimensions.',
    tags: ['SS 304 / Jindal Pipe', 'Powder Coated', 'Anti-Rust Epoxy Primer'],
    specs: {
      materials: [
        'Jindal SS 304 grade architectural grade stainless steel',
        '10mm Saint-Gobain clear toughened safety glass',
        'Tata Structura hollow square steel sections',
        'Dual-coat red oxide epoxy zinc primer + polyurethane enamel',
      ],
      warranty: '10-Year Rust Resistance Guarantee',
      avgTimeline: '10 - 14 Calendar Days',
      processSummary:
        'Precision digital site dimension measurement, factory MIG/TIG welding, chemical anti-rust passivation bath, electrostatic powder coating, and heavy anchor bolt mounting.',
    },
  },
];

export const PROTOCOL_STEPS: ProtocolStep[] = [
  {
    stepNumber: 1,
    title: 'Initial Consultation & Scope',
    summary:
      'We understand your lifestyle requirements, aesthetic goals, functional needs, and approximate capital allocation.',
    deliverables: [
      'Preliminary scope checklist',
      'Client architectural preference brief',
      'Site access & society permission protocol',
    ],
  },
  {
    stepNumber: 2,
    title: 'Moisture & Structural Survey',
    summary:
      'Civil inspection using digital moisture meters, laser levelers, and structural column checks across bathrooms, ceilings, and balconies.',
    deliverables: [
      'Digital moisture heatmap report (pinless scanner)',
      'Structural crack classification log',
      'Level tolerance report for floors and walls',
    ],
  },
  {
    stepNumber: 3,
    title: 'Technical Solution Blueprint',
    summary:
      'Clear technical recommendations separating cosmetic fixes from root-cause structural or waterproofing remedies.',
    deliverables: [
      'Cross-section civil detail drawings',
      'Remediation methodology statement',
      'Material brand suitability matrix',
    ],
  },
  {
    stepNumber: 4,
    title: 'Line-Item BOQ & Estimate',
    summary:
      'Transparent, un-bundled Bill of Quantities showing square footage, specific brand grades (e.g. Century Marine Ply, Asian Apex), and locked rates.',
    deliverables: [
      'Itemized square footage measurement sheet',
      'Locked brand grade & rate contract',
      'Transparent milestone disbursement schedule',
    ],
  },
  {
    stepNumber: 5,
    title: 'Material Sign-off & Schedule',
    summary:
      'Physical catalog & sample approvals for veneers, tiles, paint shades, and hardware paired with a strict milestone timeline.',
    deliverables: [
      'Signed sample swatches (laminate, paint, tile, hardware)',
      'Day-by-day Gantt milestone schedule',
      'Factory dispatch tracking confirmation',
    ],
  },
  {
    stepNumber: 6,
    title: 'Supervised Execution & WhatsApp Logs',
    summary:
      'Full-time on-site engineer oversight. Daily photo updates, progress checklists, and staged quality gate sign-offs.',
    deliverables: [
      'Daily WhatsApp photo & video site logs at 6:00 PM',
      'Civil engineer supervisor checklist verification',
      'Ponding and electrical pressure test certificates',
    ],
  },
  {
    stepNumber: 7,
    title: 'Snag Resolution & Final Handover',
    summary:
      'Joint snagging walkthrough, deep professional cleaning, handover documentation, and stamped waterproofing warranty certificate.',
    deliverables: [
      'Zero-snag signed sign-off sheet',
      'Physical stamped 7-year warranty card',
      'Post-renovation professional deep-cleaning',
    ],
  },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'case-kharghar-penthouse',
    tag: 'Sector 20, Kharghar',
    location: 'Sector 20, Kharghar, Navi Mumbai',
    title: '3BHK Complete Turnkey Renovation',
    description:
      'Full interior remodel comprising wall demolition for open kitchen layout, waterproofed wet areas, custom PU-finished wardrobes, and bespoke ambient ceiling coves.',
    image: './src/assets/images/hero_penthouse_kharghar_1792912269017.jpg',
    metric1Label: 'Turnaround',
    metric1Value: '52 Days (On Time)',
    metric2Label: 'Area Handled',
    metric2Value: '1,480 Sq. Ft.',
    scopeBadge: 'Turnkey Fit-out',
    rating: 5.0,
    details: {
      client: 'Dr. Sameer & Neha Deshmukh',
      society: 'Valley Shilp Enclave, Sector 20',
      scopeItems: [
        'Demolished non-load partition wall for integrated open island kitchen',
        'Saint-Gobain false ceiling with magnetic track and warm cove lighting',
        'Century Marine 710 ply modular kitchen with Hafele Blum hinges',
        'Italian GVT 800x1600mm floor tiles laid with laser clip leveling',
        'Dual-coat PU high-gloss wardrobe shutters with concealed handles',
      ],
      materialsUsed: [
        'Century Club Prime 710 Marine Ply',
        'Saint-Gobain Gyproc 12.5mm boards',
        'Asian Paints Royale Luxury Emulsion',
        'Hafele soft-close fittings',
      ],
      snagPointsResolved: 18,
      beforeAfterNote:
        'Transformed a dated 12-year-old dark apartment into an airy, sun-drenched modern penthouse with seamless mountain views.',
    },
  },
  {
    id: 'case-kamothe-waterproofing',
    tag: 'Sector 35, Kamothe',
    location: 'Sector 35, Kamothe, Navi Mumbai',
    title: 'Terrace Waterproofing & Crack Grouting',
    description:
      'Permanent remediation of stubborn monsoon seepage affecting 4 top-floor flats. High-pressure polyurethane injection and 3-coat elastomeric membrane barrier.',
    image: './src/assets/images/terrace_waterproofing_case_1792912295859.jpg',
    metric1Label: 'Warranty Issued',
    metric1Value: '7-Year Written',
    metric2Label: 'Seepage Status',
    metric2Value: '0% Moisture Met',
    scopeBadge: 'Structural Remediation',
    rating: 5.0,
    details: {
      client: 'Regency Park CHS Management Committee',
      society: 'Regency Park Co-op Housing Society',
      scopeItems: [
        'Infrared thermal leak detection identifying 7 hidden capillary cracks',
        'High-pressure polyurethane (PU) injection grouting into terrace slab',
        'Fosroc Brushbond polymer crystalline slurry foundation layer',
        'Dr. Fixit Newcoat Ezee elastomeric multi-coat UV resistant membrane',
        '72-hour continuous water ponding test with zero penetration recorded',
      ],
      materialsUsed: [
        'Dr. Fixit Fastflex & Newcoat Ezee',
        'Fosroc Polyurethane Grout',
        'Polypropylene anti-crack reinforcement scrim mesh',
      ],
      snagPointsResolved: 6,
      beforeAfterNote:
        'Eliminated 3 seasons of persistent ceiling dripping and paint peeling across 4 affected top-floor resident homes.',
    },
  },
  {
    id: 'case-belapur-commercial',
    tag: 'CBD Belapur',
    location: 'CBD Belapur, Navi Mumbai',
    title: 'Commercial Office Ceilings & ACP Facade',
    description:
      'Complete fit-out for 2,200 sq.ft. consultancy office including acoustic grid ceilings, fire-rated partitions, executive conference paneling, and external ACP cladding.',
    image: './src/assets/images/commercial_office_fitout_1792912327332.jpg',
    metric1Label: 'Scope',
    metric1Value: 'Commercial Turnkey',
    metric2Label: 'Client Rating',
    metric2Value: '5.0 ★★★★★',
    scopeBadge: 'Corporate Fit-out',
    rating: 5.0,
    details: {
      client: 'Synergy Finserve Corporate Advisors',
      society: 'Cyber One Tech Park, CBD Belapur',
      scopeItems: [
        '2,200 sq.ft. open office acoustic ceiling tiles with recessed linear lighting',
        'Soundproof toughened double-glazed executive conference glass partitions',
        'Bespoke oak fluted wall paneling behind main reception and lounge',
        'Heavy-duty vitrified anti-skid commercial flooring with epoxy grout',
        'HVAC duct coordination and concealed data cabling channels',
      ],
      materialsUsed: [
        'Armstrong Acoustic Mineral Fiber ceiling panels',
        'Saint-Gobain 12mm acoustic laminated glass',
        'Greenlam architectural grade laminates',
        'Aludecor fire-retardant ACP sheets',
      ],
      snagPointsResolved: 12,
      beforeAfterNote:
        'Delivered 4 days ahead of scheduled corporate inauguration with zero disruption to neighboring office tenants.',
    },
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'rev-rajesh',
    name: 'Rajesh Kulkarni',
    initials: 'RK',
    society: 'Hiranandani Crystal, Sector 7, Kharghar',
    rating: 5,
    review:
      'Teghia Enterprise handled our full 2BHK renovation while we were temporarily living in Vashi. The daily WhatsApp video updates and strict adherence to the BOQ meant zero surprise costs. The modular carpentry fitment is flawless.',
    verifiedTag: 'Verified Google Review',
    serviceTag: 'Turnkey Flat Renovation',
  },
  {
    id: 'rev-sunita',
    name: 'Sunita Shinde',
    initials: 'SS',
    society: 'Regency Gardens, Sector 6, Kharghar',
    rating: 5,
    review:
      'We suffered from severe bedroom wall seepage during monsoons for 3 years. Teghia brought an electronic moisture meter, diagnosed external cracks, repaired them with Dr. Fixit polymers, and repainted. This monsoon was 100% dry.',
    verifiedTag: 'Verified Google Review',
    serviceTag: 'Waterproofing & Crack Grouting',
  },
  {
    id: 'rev-anand',
    name: 'Anand Menon',
    initials: 'AM',
    society: 'Hex Blox, Sector 10, Kharghar',
    rating: 5,
    review:
      'Very disciplined team. They maintained clean corridors in our society and respected the society work hours. Saint-Gobain false ceiling and cove lighting in our living hall looks ultra premium.',
    verifiedTag: 'Verified Google Review',
    serviceTag: 'False Ceiling & Royale Painting',
  },
  {
    id: 'rev-vikram',
    name: 'Vikram & Priya Patil',
    initials: 'VP',
    society: 'Gharonda CHS, Sector 9, Kamothe',
    rating: 5,
    review:
      'From civil demolition to modular kitchen installation, Er. Shadab oversaw every milestone personally. Their itemized BOQ was the only estimate out of four contractors that did not sneak in hidden labor charges.',
    verifiedTag: 'Verified Homeowner',
    serviceTag: 'Complete Turnkey Overhaul',
  },
];

export const NEIGHBORHOODS: Neighborhood[] = [
  {
    id: 'kharghar',
    name: 'Kharghar (Sector 1 - 36)',
    dispatchTime: 'Same Day (2 - 4 Hrs)',
    activeProjects: 9,
    sectorsCovered: 'All Sectors (1 through 36), Utsav Chowk, Valley Shilp, Golf Course',
    isHeadquarter: true,
  },
  {
    id: 'kamothe',
    name: 'Kamothe (Sector 1 - 36)',
    dispatchTime: 'Within 24 Hours',
    activeProjects: 6,
    sectorsCovered: 'Sectors 1 to 36, Mansarovar station node, Khandeshwar link',
  },
  {
    id: 'roadpali',
    name: 'Roadpali & Kalamboli',
    dispatchTime: 'Within 24 Hours',
    activeProjects: 4,
    sectorsCovered: 'Roadpali Sectors 16-20E, Kalamboli CIDCO Colony',
  },
  {
    id: 'belapur',
    name: 'CBD Belapur',
    dispatchTime: 'Within 24 Hours',
    activeProjects: 5,
    sectorsCovered: 'Sector 11, Sector 15, Artist Village, Sakal Bhavan Node',
  },
  {
    id: 'panvel',
    name: 'Panvel & New Panvel',
    dispatchTime: 'Within 24 - 48 Hours',
    activeProjects: 5,
    sectorsCovered: 'Sector 1 to 19 New Panvel, Old Panvel, Palaspe Phata',
  },
  {
    id: 'taloja',
    name: 'Taloja Industrial & Phase 1/2',
    dispatchTime: 'Within 24 Hours',
    activeProjects: 3,
    sectorsCovered: 'Taloja Phase 1 & 2 residential blocks, MIDC facilities',
  },
  {
    id: 'seawoods',
    name: 'Seawoods & Nerul',
    dispatchTime: 'Within 24 - 48 Hours',
    activeProjects: 4,
    sectorsCovered: 'Seawoods Grand Central node, Nerul East & West Sectors',
  },
  {
    id: 'vashi',
    name: 'Vashi & Sanpada',
    dispatchTime: 'Within 24 - 48 Hours',
    activeProjects: 4,
    sectorsCovered: 'Vashi Sectors 9, 17, 28, 29, Sanpada Palm Beach road',
  },
  {
    id: 'ulwe',
    name: 'Ulwe Nodes',
    dispatchTime: 'Within 24 - 48 Hours',
    activeProjects: 3,
    sectorsCovered: 'Sectors 16, 17, 18, 19, 21, Bamandongri station vicinity',
  },
];

export const FAQS = [
  {
    question: 'How long does a 2BHK or 3BHK turnkey renovation take?',
    answer:
      'A standard 2BHK complete turnkey renovation takes between 35 to 45 calendar days, while a 3BHK typically spans 45 to 55 days. This duration covers structural demolition, electrical/plumbing re-routing, waterproof testing, false ceilings, tile laying, modular woodwork, and final paint coats. We attach a binding day-by-day Gantt milestone chart to your contract.',
  },
  {
    question: 'What are the warranty terms for waterproofing work?',
    answer:
      'We issue a formal stamped 7-Year Written Warranty certificate for complete terrace and bathroom slab waterproofing. We employ 2-component elastomeric polymer membranes (Dr. Fixit / Fosroc) backed with pressure PU injection grouting. If any moisture registers above standard thresholds during the warranty window, remediation is done at 100% contractor cost.',
  },
  {
    question: 'What is the standard payment milestone schedule?',
    answer:
      'Our payment schedule is strictly linked to verified physical on-site progress—never arbitrary calendar dates: 10% mobilization advance upon BOQ sign-off; 25% post demolition & electrical/plumbing conduit inspection; 30% upon modular woodwork carcass and material deliveries; 25% post false ceiling, tile leveling, and first paint coat; and the final 10% strictly after the joint snagging walkthrough and handover.',
  },
  {
    question: 'How do you guarantee authentic branded materials?',
    answer:
      'All structural and interior materials—including Century Marine 710 ply, Saint-Gobain Gyproc boards, Asian Paints Royale buckets, and Hafele hardware—are delivered directly in factory-sealed packing with verifiable manufacturer batch barcodes. Homeowners receive copies of tax invoices and batch certifications prior to installation.',
  },
  {
    question: 'Can you work while society regulations are in place in Navi Mumbai?',
    answer:
      'Yes. Over 30 years in Navi Mumbai, we strictly adhere to CIDCO and cooperative housing society bye-laws: noisy work is restricted strictly to permitted hours (typically 10:00 AM – 1:00 PM and 3:00 PM – 6:00 PM), elevators are cushioned with protective correx sheets, and all debris is transported down through closed chutes or designated service hoists daily.',
  },
];

// Calculation rates for the BOQ Estimator
export interface BoqRateItem {
  id: string;
  category: string;
  item: string;
  specification: string;
  unit: string;
  silverRate: number;
  goldRate: number;
  platinumRate: number;
}

export const BOQ_RATE_ITEMS: BoqRateItem[] = [
  {
    id: 'boq-modular-kitchen',
    category: 'Carpentry & Modular',
    item: 'Modular Kitchen (BWR / BWP Grade)',
    specification: 'IS 710 Marine Ply, Hafele/Blum soft close, acrylic finish',
    unit: 'R.Ft',
    silverRate: 1850,
    goldRate: 2450,
    platinumRate: 3200,
  },
  {
    id: 'boq-wardrobes',
    category: 'Carpentry & Modular',
    item: 'Full-Height Floor-to-Ceiling Wardrobes',
    specification: 'Century BWR ply, 1mm laminate/matte PU, hydraulic hinges',
    unit: 'Sq.Ft',
    silverRate: 1450,
    goldRate: 1950,
    platinumRate: 2650,
  },
  {
    id: 'boq-false-ceiling',
    category: 'Ceilings & POP',
    item: 'Architectural False Ceiling & Profile Coves',
    specification: 'Saint-Gobain Gyproc 12.5mm boards, heavy GI framing',
    unit: 'Sq.Ft',
    silverRate: 110,
    goldRate: 145,
    platinumRate: 190,
  },
  {
    id: 'boq-painting',
    category: 'Surface Finishes',
    item: 'Dustless Mechanized Luxury Painting',
    specification: 'Asian Paints Royale Luxury Emulsion + Birla White Putty',
    unit: 'Sq.Ft',
    silverRate: 34,
    goldRate: 48,
    platinumRate: 68,
  },
  {
    id: 'boq-flooring',
    category: 'Civil & Flooring',
    item: 'Tile Demolition & GVT Tile/Marble Laying',
    specification: 'Laser leveled 800x1600mm vitrified tiles, epoxy grouting',
    unit: 'Sq.Ft',
    silverRate: 140,
    goldRate: 210,
    platinumRate: 380,
  },
  {
    id: 'boq-waterproofing',
    category: 'Waterproofing',
    item: 'Wet-Area & Balcony Polymer Waterproofing',
    specification: 'Dr. Fixit 2-component Fastflex membrane + pond testing',
    unit: 'Sq.Ft',
    silverRate: 65,
    goldRate: 95,
    platinumRate: 135,
  },
  {
    id: 'boq-electrical',
    category: 'MEP Services',
    item: 'Concealed Wiring & Modular Switches',
    specification: 'Finolex FRLS copper wires + Schneider / Legrand Arteor',
    unit: 'Point',
    silverRate: 850,
    goldRate: 1250,
    platinumRate: 1750,
  },
];
