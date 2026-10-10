import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Building2, 
  FileCheck2, 
  ShieldCheck, 
  Award, 
  MessageCircle, 
  Phone, 
  ArrowRight, 
  Clock, 
  CheckCircle2, 
  MapPin, 
  ExternalLink 
} from 'lucide-react';

const EVALUATION_TRACKS = [
  {
    id: 'corporate',
    code: 'TRACK 01 // CORPORATE',
    shortTitle: 'Business Setup & DET',
    title: 'Company Formation & Commercial Licensing',
    icon: Building2,
    badge: 'Mainland & 40+ UAE Free Zones',
    description: 'Direct ministerial clearance for new LLC registrations, foreign branch setup, trade license renewals, and corporate MOA restructuring across Dubai and all 7 Emirates.',
    authorities: ['DET Dubai', 'Dubai Municipality', 'Civil Defence', 'MOHRE'],
    turnaround: '24–48 Hours Fast-Track',
    serviceQuery: 'Business Setup',
    prefilledMsg: 'Hello New Guide, I am on your About page and would like direct consultation regarding Corporate Business Setup & Trade Licensing in Dubai.',
    highlights: [
      'Instant license & Mainland LLC structuring with 100% foreign ownership',
      'Free Zone jurisdiction selection & commercial activity alignment',
      'Statutory renewals, trade name reservations & initial approvals'
    ]
  },
  {
    id: 'attestation',
    code: 'TRACK 02 // ATTESTATION',
    shortTitle: 'MOFA Legalization',
    title: 'MOFA Attestation & Document Legalization',
    icon: FileCheck2,
    badge: 'Global Embassies & Dubai Courts',
    description: 'Statutory authentication for educational diplomas, commercial contracts, board resolutions, marriage certificates, police clearances, and international apostille verifications.',
    authorities: ['MOFA UAE', 'Dubai Courts', 'Foreign Consulates', 'Ministry of Justice'],
    turnaround: 'Same-Day / 24 Hours',
    serviceQuery: 'Document Clearing',
    prefilledMsg: 'Hello New Guide, I am on your About page and would like direct consultation regarding MOFA Certificate Attestation & Document Legalization in Dubai.',
    highlights: [
      'Ministry of Foreign Affairs (MOFA) electronic stamp & validation',
      'Embassy legalization for commercial invoices & corporate resolutions',
      'Sworn legal translation into Arabic for all official UAE filings'
    ]
  },
  {
    id: 'residency',
    code: 'TRACK 03 // RESIDENCY',
    shortTitle: 'Golden Visa & VIP Visas',
    title: '10-Year Golden Visa & Corporate Residency',
    icon: Award,
    badge: 'GDRFA Dubai & Federal ICP',
    description: 'VIP liaison for real estate investor Golden Visas, executive talent visas, family sponsorships, express medical fitness appointments, and Emirates ID biometric clearance.',
    authorities: ['GDRFA Dubai', 'ICP Federal', 'Dubai Health Authority', 'Amer Centers'],
    turnaround: '2–3 Working Days',
    serviceQuery: 'Visa & Immigration',
    prefilledMsg: 'Hello New Guide, I am on your About page and would like direct consultation regarding UAE 10-Year Golden Visas & Residency Sponsorship in Dubai.',
    highlights: [
      'Property investor & specialized executive Golden Visa nomination',
      'Amer & GDRFA direct processing with priority VIP medical typing',
      'Complete family sponsorship, maid visas & status adjustment'
    ]
  },
  {
    id: 'notary',
    code: 'TRACK 04 // LEGAL NOTARY',
    shortTitle: 'Court Notary & POA',
    title: 'Dubai Courts Online POA & MOA Drafting',
    icon: ShieldCheck,
    badge: 'Dubai Courts Digital Notary',
    description: 'Bilingual legal drafting and electronic judicial notarization for General & Special Powers of Attorney, Memorandum of Association (MOA) amendments, and statutory declarations.',
    authorities: ['Dubai Courts Notary', 'Ministry of Justice', 'Certified Legal Translators'],
    turnaround: 'Same-Day Digital Processing',
    serviceQuery: 'Government Transactions',
    prefilledMsg: 'Hello New Guide, I am on your About page and would like direct consultation regarding Dubai Courts Online POA & Judicial Legal Drafting.',
    highlights: [
      'Special & General Power of Attorney for property, banking & management',
      'MOA addendums, share sale agreements & corporate resolution drafting',
      'Full electronic notary video session coordination with Dubai Courts'
    ]
  }
];

export default function AboutCta({ onOpenAssistance, onExploreServices }) {
  const [activeTrackId, setActiveTrackId] = useState('corporate');
  const activeTrack = EVALUATION_TRACKS.find(t => t.id === activeTrackId) || EVALUATION_TRACKS[0];

  // Comprehensive Schema.org JSON-LD structured data for deep SEO authority
  const ctaJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['ProfessionalService', 'GovernmentService', 'LocalBusiness'],
        '@id': 'https://newguidedcs.ae/about#official-pro-liaison',
        'name': 'New Guide Documents Clearing Services Co.',
        'legalName': 'New Guide Documents Clearing Services LLC',
        'alternateName': [
          'New Guide Corporate PRO Dubai',
          'New Guide Documents Clearing & Ministerial Liaison',
          'New Guide Business Setup Dubai'
        ],
        'url': 'https://newguidedcs.ae/about',
        'logo': 'https://newguidedcs.ae/new-guide-logo.png',
        'image': 'https://newguidedcs.ae/about/about.png',
        'description': 'Authorized corporate PRO and document clearing services firm in Dubai providing direct ministerial liaison with DET, MOFA, GDRFA, MOHRE, and Dubai Courts for business setup, certificate attestations, Golden Visas, and online powers of attorney.',
        'telephone': '+971525453323',
        'email': 'info@newguidedcs.ae',
        'priceRange': '$$',
        'address': {
          '@type': 'PostalAddress',
          'streetAddress': 'Hor Al Anz, Deira',
          'addressLocality': 'Dubai',
          'addressRegion': 'Dubai',
          'postalCode': '00000',
          'addressCountry': 'AE'
        },
        'geo': {
          '@type': 'GeoCoordinates',
          'latitude': 25.276987,
          'longitude': 55.336449
        },
        'openingHoursSpecification': [
          {
            '@type': 'OpeningHoursSpecification',
            'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
            'opens': '08:00',
            'closes': '20:00'
          }
        ],
        'areaServed': [
          { '@type': 'AdministrativeArea', 'name': 'Dubai' },
          { '@type': 'AdministrativeArea', 'name': 'Abu Dhabi' },
          { '@type': 'AdministrativeArea', 'name': 'Sharjah' },
          { '@type': 'AdministrativeArea', 'name': 'Ajman' },
          { '@type': 'AdministrativeArea', 'name': 'Ras Al Khaimah' },
          { '@type': 'AdministrativeArea', 'name': 'Fujairah' },
          { '@type': 'AdministrativeArea', 'name': 'Umm Al Quwain' }
        ],
        'hasOfferCatalog': {
          '@type': 'OfferCatalog',
          'name': 'Authorized UAE Ministerial & PRO Services Catalog',
          'itemListElement': [
            {
              '@type': 'Offer',
              'itemOffered': {
                '@type': 'Service',
                'name': 'Corporate Company Formation & Trade License Setup Dubai',
                'description': 'End-to-end mainland LLC and Free Zone company incorporation, instant licensing, commercial registration with the Dubai Department of Economy and Tourism (DET).'
              }
            },
            {
              '@type': 'Offer',
              'itemOffered': {
                '@type': 'Service',
                'name': 'Ministry of Foreign Affairs (MOFA) Document Attestation UAE',
                'description': 'Authentication and attestation for personal diplomas, birth/marriage certificates, commercial invoices, and legal apostilles with MOFA UAE.'
              }
            },
            {
              '@type': 'Offer',
              'itemOffered': {
                '@type': 'Service',
                'name': 'UAE 10-Year Golden Visa & VIP Corporate Residency',
                'description': 'GDRFA Dubai fast-track processing for real estate investor visas, executive Golden Visas, family sponsorship, medical fitness testing, and Emirates ID.'
              }
            },
            {
              '@type': 'Offer',
              'itemOffered': {
                '@type': 'Service',
                'name': 'Dubai Courts Online Power of Attorney (POA) & MOA Drafting',
                'description': 'Digital notary drafting and remote judicial notarization of General & Special Powers of Attorney, Memorandum of Association amendments, and legal declarations.'
              }
            }
          ]
        },
        'knowsAbout': [
          'Corporate PRO Services Dubai',
          'UAE Government Transactions & Document Clearing',
          'Dubai Economy and Tourism (DET) Trade License Renewals',
          'Ministry of Foreign Affairs (MOFA) Certificate Attestation',
          'GDRFA Dubai Golden Visa Application & Residency',
          'Ministry of Human Resources and Emiratisation (MOHRE) Quotas',
          'Amer, Tasheel, and Tadbeer Government Center Procedures',
          'Dubai Courts Electronic Notary and Online POA Drafting',
          'Dubai Municipality and Civil Defence Approvals',
          'Free Zone Company Incorporation UAE'
        ]
      }
    ]
  };

  const handleWhatsAppTrack = () => {
    const encoded = encodeURIComponent(activeTrack.prefilledMsg);
    window.open(`https://wa.me/971525453323?text=${encoded}`, '_blank');
  };

  const handleAssistanceTrack = () => {
    if (typeof onOpenAssistance === 'function') {
      onOpenAssistance(activeTrack.serviceQuery);
    }
  };

  return (
    <section
      id="about-cta"
      role="region"
      aria-labelledby="about-cta-heading"
      itemScope
      itemType="https://schema.org/ProfessionalService"
      className="relative w-full overflow-hidden bg-[#06162F] text-white border-t border-white/10 selection:bg-[#00A9D6]/30 selection:text-white"
    >
      {/* Schema.org Microdata Script Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ctaJsonLd) }}
      />

      {/* Blueprint Grid Atmosphere - Strictly No Gold */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0, 169, 214, 0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 169, 214, 0.08) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px'
        }}
      />

      {/* Subtle Cyan Radial Wash Overlays */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#00A9D6]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 right-10 w-[500px] h-[500px] bg-[#123D88]/25 rounded-full blur-3xl pointer-events-none" />

      {/* ─────────────────────────────────────────────────────────────
          TOP STATUTORY VERIFICATION BAR
          ───────────────────────────────────────────────────────────── */}
      <div className="relative z-10 border-b border-white/10 bg-[#08244A]/60 backdrop-blur-sm px-4 sm:px-8 lg:px-14 py-3 sm:py-3.5">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
          <div className="flex items-center gap-2.5 text-[#DDF5FC]">
            <span className="w-2 h-2 rounded-full bg-[#00A9D6] animate-pulse" />
            <span className="font-bold tracking-widest uppercase text-[11px] sm:text-xs">
              OFFICIAL MINISTERIAL LIAISON DESK // HOR AL ANZ, DEIRA HQ
            </span>
          </div>
          <div className="hidden md:flex items-center gap-4 text-white/60 text-[11px]">
            <span>DET LICENSED #649210</span>
            <span className="text-white/20">•</span>
            <span>MOHRE REGISTERED</span>
            <span className="text-white/20">•</span>
            <span>GDRFA AUTHORIZED</span>
            <span className="text-white/20">•</span>
            <span className="text-[#00A9D6] font-semibold">10+ YEARS IN DUBAI</span>
          </div>
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          MAIN CONSULTATION BOARD ARCHITECTURE
          ───────────────────────────────────────────────────────────── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-14 py-16 sm:py-20 lg:py-24">
        
        {/* Section Header with High-Rank SEO Metadata */}
        <div className="max-w-3xl mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-md bg-[#08244A] border border-[#00A9D6]/30 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00A9D6]" />
            <span className="font-mono text-[11px] font-bold tracking-[0.25em] text-[#DDF5FC] uppercase">
              NEW GUIDE ADVISORY // CASE EVALUATION
            </span>
          </div>

          <h2
            id="about-cta-heading"
            className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-[52px] tracking-tight leading-[1.06] text-white uppercase"
          >
            Direct Liaison with Authorized{' '}
            <span className="text-[#00A9D6] drop-shadow-[0_0_24px_rgba(0,169,214,0.35)]">
              UAE PRO Specialists
            </span>{' '}
            in Dubai.
          </h2>

          <p className="mt-5 text-sm sm:text-base lg:text-lg text-white/80 leading-relaxed font-normal">
            Avoid procedural uncertainty, unverified intermediaries, and rejected paperwork. Speak directly with senior Dubai PRO officers who manage daily submissions across <strong>DET</strong>, <strong>MOFA</strong>, <strong>GDRFA</strong>, <strong>MOHRE</strong>, and <strong>Dubai Courts</strong>.
          </p>
        </div>

        {/* ─────────────────────────────────────────────────────────────
            TWO-COLUMN COMPOSITION:
            Left: Interactive Procedural Track Selector
            Right: Active Case Liaison & Dispatch Console
            ───────────────────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* ────────── LEFT COLUMN: 4 EVALUATION TRACKS (7 Cols) ────────── */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center justify-between mb-3 px-1">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#00A9D6]">
                SELECT YOUR PROCEDURE TO BEGIN:
              </span>
              <span className="font-mono text-[11px] text-white/50">
                04 DEDICATED TRACKS
              </span>
            </div>

            <div className="grid grid-cols-1 gap-3.5" role="tablist" aria-label="Procedure Evaluation Tracks">
              {EVALUATION_TRACKS.map((track) => {
                const isSelected = track.id === activeTrackId;
                const Icon = track.icon;

                return (
                  <button
                    key={track.id}
                    id={`about-cta-track-${track.id}`}
                    role="tab"
                    aria-selected={isSelected}
                    aria-controls="about-cta-console"
                    onClick={() => setActiveTrackId(track.id)}
                    className={`group w-full text-left p-5 sm:p-6 rounded-2xl transition-all duration-300 border cursor-pointer ${
                      isSelected
                        ? 'bg-gradient-to-r from-[#08244A] to-[#0D3270] border-[#00A9D6] shadow-[0_10px_30px_rgba(0,169,214,0.18)] translate-x-1 sm:translate-x-2'
                        : 'bg-[#06162F]/90 hover:bg-[#08244A]/50 border-white/10 hover:border-white/20'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-center gap-3.5">
                        <div className={`p-2.5 rounded-xl transition-colors ${
                          isSelected ? 'bg-[#00A9D6] text-[#06162F]' : 'bg-white/5 text-[#00A9D6] group-hover:bg-white/10'
                        }`}>
                          <Icon size={22} strokeWidth={1.8} />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-mono text-[10px] font-bold tracking-widest text-[#00A9D6] uppercase">
                              {track.code}
                            </span>
                            <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/10 text-white/70 font-mono">
                              {track.badge}
                            </span>
                          </div>
                          <h3 className="text-base sm:text-lg font-display font-bold text-white mt-0.5">
                            {track.title}
                          </h3>
                        </div>
                      </div>

                      <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 border transition-all ${
                        isSelected ? 'bg-[#00A9D6] border-[#00A9D6] text-[#06162F]' : 'border-white/20 text-transparent'
                      }`}>
                        <CheckCircle2 size={14} strokeWidth={2.5} />
                      </div>
                    </div>

                    <p className="mt-3 text-xs sm:text-sm text-white/70 leading-relaxed font-normal pl-[52px]">
                      {track.description}
                    </p>

                    {isSelected && (
                      <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        transition={{ duration: 0.25 }}
                        className="mt-4 pt-4 border-t border-white/10 pl-[52px] space-y-2"
                      >
                        <div className="text-[11px] font-mono text-[#DDF5FC] font-semibold uppercase tracking-wider">
                          CORE STATUTORY DELIVERABLES:
                        </div>
                        <ul className="space-y-1.5 text-xs text-white/80">
                          {track.highlights.map((item, idx) => (
                            <li key={idx} className="flex items-baseline gap-2">
                              <span className="text-[#00A9D6] font-bold text-xs">›</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* ────────── RIGHT COLUMN: EXECUTIVE LIAISON CONSOLE (5 Cols) ────────── */}
          <div 
            id="about-cta-console"
            role="tabpanel"
            aria-labelledby={`about-cta-track-${activeTrack.id}`}
            className="lg:col-span-5 relative bg-gradient-to-br from-[#08244A] via-[#0E3374] to-[#06162F] rounded-3xl p-6 sm:p-8 border-2 border-[#00A9D6]/30 shadow-2xl shadow-sky-950/50 backdrop-blur-md"
          >
            {/* Top Accent Strip */}
            <div className="flex items-center justify-between pb-5 border-b border-white/10 mb-6">
              <div>
                <span className="font-mono text-[10px] font-bold tracking-widest text-[#00A9D6] uppercase block">
                  ACTIVE CASE DOSSIER
                </span>
                <span className="text-xs font-display font-extrabold text-white uppercase">
                  {activeTrack.shortTitle}
                </span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#00A9D6]/15 border border-[#00A9D6]/30 text-[10px] font-mono text-[#DDF5FC]">
                <Clock size={11} className="text-[#00A9D6]" />
                <span>{activeTrack.turnaround}</span>
              </div>
            </div>

            {/* Ministerial Authority Mapping */}
            <div className="space-y-2 mb-6">
              <span className="font-mono text-[10px] uppercase tracking-wider text-white/50 block">
                MINISTERIAL BODIES INVOLVED:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {activeTrack.authorities.map(auth => (
                  <span 
                    key={auth} 
                    className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-mono font-medium text-white/90"
                  >
                    {auth}
                  </span>
                ))}
              </div>
            </div>

            {/* ACTION CENTER - Differentiated, High-Conversion Triggers */}
            <div className="space-y-3.5 mb-6">
              {/* PRIMARY ACTION 1: Instant WhatsApp Case Review */}
              <button
                id="about-cta-whatsapp-btn"
                type="button"
                onClick={handleWhatsAppTrack}
                title={`Start instant WhatsApp consultation for ${activeTrack.title}`}
                className="group w-full py-4 sm:py-4.5 px-6 rounded-xl bg-[#00A9D6] hover:bg-[#DDF5FC] text-[#06162F] font-display font-extrabold text-sm tracking-wider uppercase shadow-xl transition-all duration-300 flex items-center justify-between cursor-pointer"
              >
                <div className="flex items-center gap-2.5">
                  <MessageCircle size={18} className="fill-[#06162F] stroke-none shrink-0" />
                  <span className="text-left font-bold text-xs sm:text-sm">
                    START WHATSAPP CASE REVIEW
                  </span>
                </div>
                <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1.5 shrink-0" />
              </button>

              {/* PRIMARY ACTION 2: Book Official Consultation Inquiry */}
              <button
                id="about-cta-modal-btn"
                type="button"
                onClick={handleAssistanceTrack}
                title={`Book a formal consultation for ${activeTrack.title}`}
                className="group w-full py-4 sm:py-4.5 px-6 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 text-white font-display font-extrabold text-sm tracking-wider uppercase transition-all duration-300 flex items-center justify-between cursor-pointer"
              >
                <div className="flex items-center gap-2.5">
                  <FileCheck2 size={18} className="text-[#00A9D6] shrink-0" />
                  <span className="text-left font-bold text-xs sm:text-sm">
                    SUBMIT DIRECT CASE INQUIRY
                  </span>
                </div>
                <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1.5 shrink-0 text-[#00A9D6]" />
              </button>
            </div>

            {/* Direct Telephone Hotline Link */}
            <div className="p-4 rounded-xl bg-[#06162F]/80 border border-white/10 mb-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <Phone size={16} className="text-[#00A9D6] shrink-0" />
                  <div>
                    <span className="font-mono text-[10px] text-white/50 block">DIRECT PRO HOTLINE</span>
                    <a 
                      id="about-cta-phone-btn"
                      href="tel:+971525453323" 
                      className="text-sm font-mono font-bold text-white hover:text-[#00A9D6] transition-colors"
                      title="Call New Guide PRO Hotline in Dubai"
                    >
                      +971 52 545 3323
                    </a>
                  </div>
                </div>
                <span className="text-[10px] font-mono text-[#00A9D6] font-semibold bg-[#00A9D6]/10 px-2 py-0.5 rounded">
                  08:00 – 20:00 GST
                </span>
              </div>
            </div>

            {/* Link to Full Services Directory (Distinct Architectural Text Link) */}
            <div className="pb-5 border-b border-white/10 mb-5 flex items-center justify-between">
              <button
                id="about-cta-services-btn"
                type="button"
                onClick={onExploreServices}
                className="group inline-flex items-center gap-2 text-xs font-mono text-white/70 hover:text-white transition-colors cursor-pointer"
                title="Explore the complete 17-service procedural directory"
              >
                <span>BROWSE ALL 17 CLEARANCE PROCEDURES</span>
                <ExternalLink size={13} className="text-[#00A9D6] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>

            {/* Operational Commitments Footer */}
            <div className="grid grid-cols-2 gap-3 text-[10px] font-mono text-white/60">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 size={12} className="text-[#00A9D6] shrink-0" />
                <span>RESPONSE: &lt; 2 HOURS</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 size={12} className="text-[#00A9D6] shrink-0" />
                <span>ZERO CASE EVALUATION FEE</span>
              </div>
            </div>

            {/* Address Location Footnote for Local SEO */}
            <div className="mt-4 pt-3 border-t border-white/10 flex items-center gap-2 text-[10px] text-white/40 font-mono">
              <MapPin size={11} className="text-[#00A9D6] shrink-0" />
              <address className="not-italic">
                Hor Al Anz, Deira, Dubai, United Arab Emirates
              </address>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
