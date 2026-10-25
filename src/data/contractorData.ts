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
  legalName: 'Interior, Civil Construction & Renovation Services',
  tagline: 'Complete Interior & Civil Solutions Across Maharashtra',
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
    description: 'Interior and civil service coverage across six regions in Maharashtra',
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

/**
 * Options for the Scope Required enquiry/quotation dropdown.
 * The original six option labels are retained for backward compatibility.
 * The detailed options let customers select a specific interior/civil service.
 */
export const SERVICE_SCOPE_OPTIONS = [
  // Original options — retained so existing form submissions remain compatible.
  'Full Turnkey Renovation',
  'Waterproofing & Leakage Audit',
  'Civil Repairs & Flooring',
  'False Ceiling & Painting',
  'Modular Kitchen & Wardrobes',
  'Balcony Grills & Fabrication',

  // Interior design and renovation.
  'Interior Design & Space Planning',
  'Complete Home Interiors',
  'Home Interior Renovation',
  'Turnkey Interior and Civil Work',
  'Modular Kitchen Design & Installation',
  'Wardrobes & Custom Storage',
  'Custom Furniture, TV Units, Beds & Cabinets',
  'Decorative Wall Panelling',

  // Civil construction and repairs.
  'Brickwork, Blockwork & Masonry',
  'Internal & External Plastering',
  'Civil Construction & Structural Repairs',
  'Wall Crack Repairs & Replastering',
  'General Civil Maintenance & Property Repairs',
  'Demolition, Dismantling & Site Preparation',
  'Debris Removal Coordination',

  // Flooring, tiling and stonework.
  'Flooring Installation & Replacement',
  'Ceramic, Vitrified & Porcelain Tile Work',
  'Marble, Granite & Natural Stonework',

  // Waterproofing and painting.
  'Terrace, Bathroom & Balcony Waterproofing',
  'Leakage, Seepage & Damp-Proofing Treatment',
  'Interior Painting & Surface Finishing',
  'Exterior Painting & Weatherproof Coating',

  // Ceiling, electrical and plumbing work.
  'Gypsum False Ceiling & POP Work',
  'Ceiling Lighting & Profile-Light Coordination',
  'Electrical Wiring, Switches, Fixtures & Lighting',
  'Plumbing, Water Supply & Drainage',
  'Sanitaryware, WC, Basin, Tap & Shower Installation',
  'MEP Coordination (Mechanical, Electrical & Plumbing)',

  // Bathroom-only option is deliberately separate from kitchen work.
  'Bathroom Renovation (Bathroom Only)',
  'Kitchen Renovation',

  // Doors, glass, metalwork and exterior works.
  'Doors, Windows & Aluminium Frames',
  'Glass Partitions, Mirrors & Glazing',
  'Balcony Safety Grills & Railings',
  'Custom MS/SS Metal Fabrication',
  'External Facade Repairs & Finishing',
  'ACP Cladding',
  'Roofing, Terrace Coverings & Protective Sheds',

  // Residential and commercial projects.
  'Commercial Office Fit-Outs',
  'Shop, Clinic & Showroom Fit-Outs',
] as const;

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
  {
    id: 'turnkey-interior-renovation',
    badge: 'END-TO-END INTERIORS',
    title: 'Complete Home Interior Design & Renovation',
    category: 'Modular & Interiors',
    iconName: 'home',
    image: './src/assets/images/modular_kitchen_fitout_1792912270534.jpg',
    description:
      'End-to-end interior execution for apartments, villas, and homes, including space planning, living and bedroom interiors, storage, finishes, fixtures, and final handover.',
    tags: ['Turnkey Execution', 'Space Planning', 'Residential & Villa Projects'],
    specs: {
      materials: [
        'Client-approved plywood, laminates, veneers, and hardware',
        'Interior-grade paints and surface finishes',
        'Lighting, switches, and decorative fixtures',
        'Flooring and ceiling materials as per approved BOQ',
      ],
      warranty: 'Warranty as specified in the approved work order',
      avgTimeline: 'Project-specific; confirmed after site inspection',
      processSummary:
        'Requirement discussion, measurements, layout and material approvals, itemized BOQ, phased execution, quality checks, and handover.',
    },
  },
  {
    id: 'custom-carpentry-furniture',
    badge: 'CUSTOM MADE',
    title: 'Custom Carpentry, Furniture & Storage',
    category: 'Carpentry & Furniture',
    iconName: 'home',
    image: './src/assets/images/modular_kitchen_fitout_1792912270534.jpg',
    description:
      'Custom wardrobes, beds, TV units, study desks, shoe racks, storage cabinets, wall paneling, doors, and made-to-measure furniture for homes and workplaces.',
    tags: ['Custom Measurements', 'Multiple Finishes', 'Hardware Options'],
    specs: {
      materials: [
        'Plywood, MDF, HDHMR, and solid wood options as suitable for the job',
        'Laminate, veneer, acrylic, and PU finish options',
        'Hinges, channels, handles, and soft-close hardware',
      ],
      warranty: 'As specified in the approved work order',
      avgTimeline: 'Confirmed after design and measurement approval',
      processSummary:
        'Site measurements, drawings and finish selection, material confirmation, fabrication, installation, and final alignment checks.',
    },
  },
  {
    id: 'flooring-tiling-stone',
    badge: 'FLOOR & WALL FINISHES',
    title: 'Flooring, Tiling, Marble & Stone Work',
    category: 'Civil & Flooring',
    iconName: 'grid',
    image: './src/assets/images/civil_structural_repairs_1792912295291.jpg',
    description:
      'Floor and wall tile installation, vitrified tiles, ceramic tiles, marble, granite, natural stone, skirting, grouting, tile replacement, and floor-level correction.',
    tags: ['Tile Installation', 'Marble & Granite', 'Repair & Replacement'],
    specs: {
      materials: [
        'Client-selected ceramic and vitrified tiles',
        'Marble, granite, and other suitable stone',
        'Tile adhesive, grout, spacers, and leveling accessories',
      ],
      warranty: 'Workmanship terms as specified in the approved work order',
      avgTimeline: 'Confirmed after area measurement and substrate inspection',
      processSummary:
        'Surface inspection, level checks, quantity take-off, substrate preparation, installation, grouting, and finishing inspection.',
    },
  },
  {
    id: 'electrical-lighting',
    badge: 'ELECTRICAL WORKS',
    title: 'Electrical Wiring, Fixtures & Lighting',
    category: 'Electrical & Lighting',
    iconName: 'layers',
    image: './src/assets/images/gypsum_ceiling_installation_1792912271007.jpg',
    description:
      'Electrical point additions and relocation, concealed wiring, switchboards, distribution boards, lighting installation, fans, exhausts, and interior lighting coordination.',
    tags: ['Wiring & Switches', 'Lighting Fixtures', 'Safety Checks'],
    specs: {
      materials: [
        'Wires and cables selected to suit the circuit load',
        'Switches, sockets, and protective devices',
        'LED fixtures, fans, and approved accessories',
      ],
      warranty: 'Equipment warranties follow the respective manufacturer terms; workmanship terms in the work order',
      avgTimeline: 'Confirmed after point schedule and site inspection',
      processSummary:
        'Point planning, load and site checks, routing, installation, circuit testing, and coordination with ceiling and carpentry work.',
    },
  },
  {
    id: 'plumbing-sanitary',
    badge: 'PLUMBING SOLUTIONS',
    title: 'Plumbing, Sanitaryware & Drainage',
    category: 'Plumbing & Sanitary',
    iconName: 'droplet',
    image: './src/assets/images/waterproofing_leakage_audit_1792912271288.jpg',
    description:
      'Water supply and drainage lines, concealed plumbing, leak repairs, bathroom fittings, kitchen sinks, sanitaryware, taps, health faucets, and plumbing fixture replacement.',
    tags: ['Leak Detection', 'Pipework & Fittings', 'Bathroom Fixtures'],
    specs: {
      materials: [
        'Suitable CPVC, UPVC, PVC, or other approved pipe systems',
        'Valves, traps, connectors, and plumbing fittings',
        'Client-selected sanitaryware and faucets',
      ],
      warranty: 'As specified in the approved work order and applicable product warranties',
      avgTimeline: 'Confirmed after plumbing inspection and scope approval',
      processSummary:
        'Inspection, isolation where required, pipe and fixture work, leakage and flow checks, sealing, and cleanup.',
    },
  },
  {
    id: 'bathroom-kitchen-remodel',
    badge: 'WET-AREA RENOVATION',
    title: 'Bathroom & Kitchen Civil Renovation',
    category: 'Bathroom & Kitchen',
    iconName: 'droplet',
    image: './src/assets/images/waterproofing_leakage_audit_1792912271288.jpg',
    description:
      'Bathroom and kitchen remodeling, removal and replacement of tiles, waterproofing, plumbing updates, counter and sink installation, sanitary fittings, and finishing work.',
    tags: ['Tile Replacement', 'Waterproofing Coordination', 'Fixture Installation'],
    specs: {
      materials: [
        'Waterproofing products suited to the site condition',
        'Client-selected wall and floor tiles',
        'Approved plumbing fittings, adhesives, and grout',
      ],
      warranty: 'Separate product and workmanship terms stated in the approved work order',
      avgTimeline: 'Confirmed after site inspection and scope freeze',
      processSummary:
        'Existing-condition survey, demolition plan, plumbing coordination, substrate repairs, waterproofing and testing where applicable, tiling, fixture installation, and handover.',
    },
  },
  {
    id: 'bathroom-renovation-only',
    badge: 'BATHROOM-ONLY RENOVATION',
    title: 'Complete Bathroom Renovation',
    category: 'Bathroom Renovation',
    iconName: 'droplet',
    image: './src/assets/images/waterproofing_leakage_audit_1792912271288.jpg',
    description:
      'Dedicated bathroom renovation service only, including removal of old tiles and fittings, floor and wall tiling, waterproofing, plumbing adjustments, sanitaryware, shower fittings, vanity installation, mirrors, accessories, ventilation coordination, and finishing. Kitchen work is not included in this service.',
    tags: ['Bathroom-Only Scope', 'Waterproofing & Tiling', 'Sanitaryware & Fittings'],
    specs: {
      materials: [
        'Client-selected anti-skid bathroom floor tiles and wall tiles',
        'Waterproofing system and sealants selected for site conditions',
        'Approved plumbing pipes, valves, traps, and fittings',
        'Client-selected WC, basin, taps, shower fittings, mirror, and accessories',
      ],
      warranty: 'Product and workmanship terms as specified in the approved work order',
      avgTimeline: 'Confirmed after bathroom inspection and scope approval',
      processSummary:
        'Inspect existing plumbing and surfaces, confirm itemized scope and BOQ, protect adjacent areas, remove specified tiles and fixtures, repair the substrate, complete plumbing and waterproofing with applicable testing, install tiles and sanitaryware, seal joints, and conduct final checks.',
    },
  },
  {
    id: 'masonry-plaster-brickwork',
    badge: 'CIVIL WORKS',
    title: 'Brickwork, Blockwork, Plastering & Masonry',
    category: 'Civil & Masonry',
    iconName: 'wrench',
    image: './src/assets/images/civil_structural_repairs_1792912295291.jpg',
    description:
      'Brick and block walls, partition work, internal and external plastering, crack repairs, patch repairs, cement finishing, and general masonry work for residential and commercial properties.',
    tags: ['Brick & Block Work', 'Plaster Repairs', 'Internal & External'],
    specs: {
      materials: [
        'Cement, sand, blocks, and bricks suited to the approved specification',
        'Bonding agents and repair mortars where required',
        'Mesh and reinforcement accessories where specified',
      ],
      warranty: 'As specified in the approved work order',
      avgTimeline: 'Confirmed after measurements and substrate inspection',
      processSummary:
        'Site measurement, surface preparation, masonry or repair execution, curing, line and level checks, and finishing.',
    },
  },
  {
    id: 'demolition-site-preparation',
    badge: 'CONTROLLED EXECUTION',
    title: 'Demolition, Dismantling & Site Preparation',
    category: 'Civil & Site Preparation',
    iconName: 'wrench',
    image: './src/assets/images/civil_structural_repairs_1792912295291.jpg',
    description:
      'Planned removal of non-structural partitions, old flooring, wall tiles, fixtures, cabinets, and finishes, along with debris handling and preparation for new work.',
    tags: ['Scope-Based Dismantling', 'Debris Coordination', 'Renovation Preparation'],
    specs: {
      materials: [
        'Protective sheets and site safety materials',
        'Approved repair and surface-preparation materials',
        'Debris handling arrangements based on site rules',
      ],
      warranty: 'Not applicable to dismantling; subsequent work is covered as specified in the work order',
      avgTimeline: 'Confirmed after site survey and access review',
      processSummary:
        'Site survey, identification of protected services and structural elements, work-area protection, controlled dismantling, debris coordination, and substrate inspection.',
    },
  },
  {
    id: 'doors-windows-glazing',
    badge: 'OPENINGS & GLAZING',
    title: 'Doors, Windows, Aluminium & Glass Work',
    category: 'Doors, Windows & Glass',
    iconName: 'grid',
    image: './src/assets/images/balcony_fabrication_grills_1792912295972.jpg',
    description:
      'Door and window installation or replacement, aluminium frames, sliding systems, glass partitions, mirrors, shower enclosures, and hardware upgrades.',
    tags: ['Aluminium Frames', 'Glass Partitions', 'Door Hardware'],
    specs: {
      materials: [
        'Aluminium profiles and hardware selected for the opening',
        'Suitable clear, frosted, laminated, or toughened glass as specified',
        'Seals, gaskets, and fixing accessories',
      ],
      warranty: 'As specified by the product supplier and in the approved work order',
      avgTimeline: 'Confirmed after measurements and material selection',
      processSummary:
        'Opening measurement, profile and glass selection, fabrication, installation, alignment, sealing, and operation checks.',
    },
  },
  {
    id: 'commercial-interiors',
    badge: 'COMMERCIAL PROJECTS',
    title: 'Office, Shop, Clinic & Commercial Fit-outs',
    category: 'Commercial Interiors',
    iconName: 'home',
    image: './src/assets/images/commercial_office_fitout_1792912327332.jpg',
    description:
      'Interior and civil execution for offices, retail stores, clinics, showrooms, and other commercial spaces, including partitions, counters, ceilings, flooring, electrical, and finishing coordination.',
    tags: ['Office Fit-outs', 'Retail & Showrooms', 'Phased Execution'],
    specs: {
      materials: [
        'Commercial-grade flooring and wall finishes as specified',
        'Partition, ceiling, and acoustic materials as required',
        'Approved electrical, lighting, and furniture components',
      ],
      warranty: 'As specified in the approved commercial work order',
      avgTimeline: 'Project-specific, based on site conditions and agreed schedule',
      processSummary:
        'Requirement and site review, BOQ, work sequencing, trade coordination, execution, safety checks, snag closure, and handover.',
    },
  },
  {
    id: 'facade-cladding',
    badge: 'EXTERNAL FINISHES',
    title: 'Facade, ACP Cladding & External Repairs',
    category: 'Facade & Exterior Civil',
    iconName: 'grid',
    image: './src/assets/images/commercial_office_fitout_1792912327332.jpg',
    description:
      'External wall finishing, facade maintenance, ACP cladding, exterior crack repairs, sealant replacement, and coordination of weather-protection details for buildings and commercial premises.',
    tags: ['External Finishes', 'ACP Cladding', 'Sealant & Crack Repairs'],
    specs: {
      materials: [
        'ACP or exterior cladding materials as approved',
        'Exterior-grade sealants and repair compounds',
        'Specified fasteners and support components',
      ],
      warranty: 'As specified in the approved work order and product documentation',
      avgTimeline: 'Confirmed after access, safety, and facade inspection',
      processSummary:
        'Facade inspection, access and safety planning, substrate preparation, approved repair or cladding work, sealing, and final checks.',
    },
  },
  {
    id: 'terrace-roofing-sheds',
    badge: 'ROOF & TERRACE WORK',
    title: 'Terrace Repairs, Roofing & Protective Sheds',
    category: 'Roofing & Terrace',
    iconName: 'layers',
    image: './src/assets/images/waterproofing_leakage_audit_1792912271288.jpg',
    description:
      'Terrace surface repairs, protective sheds, polycarbonate roofing, rainwater run-off improvements, and coordination of waterproofing and weatherproofing work.',
    tags: ['Terrace Repairs', 'Roofing & Sheds', 'Rainwater Management'],
    specs: {
      materials: [
        'Roofing sheets and support sections as specified',
        'Approved sealants, fasteners, and flashing components',
        'Waterproofing system selected for the site conditions',
      ],
      warranty: 'As specified in the approved work order for each defined scope',
      avgTimeline: 'Confirmed after terrace inspection and access planning',
      processSummary:
        'Roof and terrace survey, drainage and access review, repair planning, installation or treatment, and water-flow checks where applicable.',
    },
  },
  {
    id: 'repairs-maintenance',
    badge: 'REPAIR & MAINTENANCE',
    title: 'General Civil Repairs & Property Maintenance',
    category: 'Repairs & Maintenance',
    iconName: 'wrench',
    image: './src/assets/images/civil_structural_repairs_1792912295291.jpg',
    description:
      'Small and medium repair jobs including wall cracks, damaged plaster, tile replacement, door adjustments, fixture replacements, seepage-related repairs, and routine property upkeep.',
    tags: ['Small & Medium Jobs', 'Residential & Commercial', 'Inspection-Based Quotes'],
    specs: {
      materials: [
        'Repair mortar, fillers, and surface-finishing materials as needed',
        'Replacement tiles, fittings, and hardware as approved',
        'Site-specific repair products',
      ],
      warranty: 'As specified in the approved work order',
      avgTimeline: 'Scheduled according to job size and material availability',
      processSummary:
        'Issue assessment, scope confirmation, quotation, repair execution, cleanup, and client inspection.',
    },
  },
  {
    id: 'mep-coordination',
    badge: 'BUILDING SERVICES',
    title: 'MEP Coordination & Fixture Installation',
    category: 'MEP Services',
    iconName: 'layers',
    image: './src/assets/images/gypsum_ceiling_installation_1792912271007.jpg',
    description:
      'Coordination of mechanical, electrical, and plumbing requirements with civil and interior work, including exhaust fans, basic ventilation provisions, fixture locations, and service access planning.',
    tags: ['Trade Coordination', 'Service Access', 'Interior Integration'],
    specs: {
      materials: [
        'Approved electrical and plumbing fittings',
        'Fixture supports and access-panel materials',
        'Mechanical accessories as listed in the approved BOQ',
      ],
      warranty: 'As specified in the approved work order and product warranties',
      avgTimeline: 'Aligned with the overall project schedule',
      processSummary:
        'Review of service requirements, coordination drawings or point layouts, installation sequencing, testing, and handover records.',
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

export const SERVICE_AREAS = [
  {
    id: 'navi-mumbai',
    name: 'Navi Mumbai',
    description: 'Kharghar, Panvel, Kamothe, Kalamboli, Taloja, Belapur, Nerul, Seawoods, Vashi, Sanpada, Ulwe, and nearby areas.',
  },
  {
    id: 'mumbai',
    name: 'Mumbai',
    description: 'Mumbai city and suburban residential and commercial project locations, subject to site assessment.',
  },
  {
    id: 'thane',
    name: 'Thane',
    description: 'Thane and nearby residential and commercial project locations, subject to site assessment.',
  },
  {
    id: 'raigad',
    name: 'Raigad',
    description: 'Raigad district locations, with availability confirmed after travel and site requirements are reviewed.',
  },
  {
    id: 'pune',
    name: 'Pune',
    description: 'Pune and nearby residential and commercial project locations, subject to site assessment.',
  },
  {
    id: 'palghar',
    name: 'Palghar',
    description: 'Palghar district locations, with availability confirmed after travel and site requirements are reviewed.',
  },
] as const;

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
  {
    id: 'navi-mumbai-region',
    name: 'Navi Mumbai Region',
    dispatchTime: 'Site visit by appointment',
    activeProjects: 0,
    sectorsCovered: 'Navi Mumbai including Kharghar, Kamothe, Kalamboli, Roadpali, CBD Belapur, Panvel, New Panvel, Taloja, Nerul, Seawoods, Vashi, Sanpada, Ulwe, and nearby nodes; visit timing confirmed after site assessment.',
  },
  {
    id: 'mumbai-region',
    name: 'Mumbai & Suburbs',
    dispatchTime: 'Site visit by appointment',
    activeProjects: 0,
    sectorsCovered: 'Mumbai city and suburban residential and commercial locations; schedule confirmed after site assessment.',
  },
  {
    id: 'thane-region',
    name: 'Thane Region',
    dispatchTime: 'Site visit by appointment',
    activeProjects: 0,
    sectorsCovered: 'Thane and nearby residential and commercial locations; schedule confirmed after site assessment.',
  },
  {
    id: 'raigad-region',
    name: 'Raigad District',
    dispatchTime: 'Site visit by appointment',
    activeProjects: 0,
    sectorsCovered: 'Raigad district locations, including Panvel-side and other towns, subject to travel and site requirements.',
  },
  {
    id: 'pune-region',
    name: 'Pune Region',
    dispatchTime: 'Site visit by appointment',
    activeProjects: 0,
    sectorsCovered: 'Pune and nearby residential and commercial locations; schedule confirmed after site assessment.',
  },
  {
    id: 'palghar-region',
    name: 'Palghar District',
    dispatchTime: 'Site visit by appointment',
    activeProjects: 0,
    sectorsCovered: 'Palghar district locations; schedule confirmed after travel and site requirements are reviewed.',
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
    question: 'Which areas do you serve for interior and civil work?',
    answer:
      'Teghia Enterprise covers Navi Mumbai, Mumbai, Thane, Raigad, Pune, and Palghar for interior and civil work. Exact site-visit availability, travel, project scope, and scheduling are confirmed after an initial discussion and site assessment. For housing societies and commercial premises, execution is coordinated with the applicable access, safety, and work-hour rules.',
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
