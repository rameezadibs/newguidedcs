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
import { useLanguage } from '../../context/LanguageContext';

export default function AboutCta({ onOpenAssistance, onExploreServices }) {
  const { lang, isRTL } = useLanguage();

  const EVALUATION_TRACKS = [
    {
      id: 'corporate',
      code: lang === 'ar' ? 'المسار 01 // الشركات' : 'TRACK 01 // CORPORATE',
      shortTitle: lang === 'ar' ? 'تأسيس الشركات واقتصادية دبي' : 'Business Setup & DET',
      title: lang === 'ar' ? 'تأسيس الشركات والتراخيص التجارية' : 'Company Formation & Commercial Licensing',
      icon: Building2,
      badge: lang === 'ar' ? 'الشركات الداخلية وأكثر من 40 منطقة حرة' : 'Mainland & 40+ UAE Free Zones',
      description: lang === 'ar'
        ? 'تخليص ومتابعة وزارية فورية لتأسيس شركات ذات مسؤولية محدودة، وفروع الشركات الأجنبية، وتجديد الرخص وتعديل عقود التأسيس في دبي والإمارات.'
        : 'Direct ministerial clearance for new LLC registrations, foreign branch setup, trade license renewals, and corporate MOA restructuring across Dubai and all 7 Emirates.',
      authorities: lang === 'ar' ? ['اقتصادية دبي', 'بلدية دبي', 'الدفاع المدني', 'وزارة الموارد البشرية'] : ['DET Dubai', 'Dubai Municipality', 'Civil Defence', 'MOHRE'],
      turnaround: lang === 'ar' ? '24–48 ساعة مسار سريع' : '24–48 Hours Fast-Track',
      serviceQuery: 'Business Setup',
      prefilledMsg: lang === 'ar'
        ? 'مرحباً نيو غايد، أود الحصول على استشارة مباشرة حول تأسيس الشركات والتراخيص التجارية في دبي.'
        : 'Hello New Guide, I am on your About page and would like direct consultation regarding Corporate Business Setup & Trade Licensing in Dubai.',
      highlights: lang === 'ar' ? [
        'إصدار الرخص الفورية وتأسيس الشركات بنسبة تملك أجنبي 100%',
        'اختيار الولاية القضائية والمناطق الحرة وتحديد الأنشطة بدقة',
        'التجديدات الدورية، حجز الأسماء التجارية، والموافقات المبدئية'
      ] : [
        'Instant license & Mainland LLC structuring with 100% foreign ownership',
        'Free Zone jurisdiction selection & commercial activity alignment',
        'Statutory renewals, trade name reservations & initial approvals'
      ]
    },
    {
      id: 'attestation',
      code: lang === 'ar' ? 'المسار 02 // التصديقات' : 'TRACK 02 // ATTESTATION',
      shortTitle: lang === 'ar' ? 'تصديقات وزارة الخارجية' : 'MOFA Legalization',
      title: lang === 'ar' ? 'تصديق الخارجية والمحررات القانونية' : 'MOFA Attestation & Document Legalization',
      icon: FileCheck2,
      badge: lang === 'ar' ? 'السفارات الدولية ومحاكم دبي' : 'Global Embassies & Dubai Courts',
      description: lang === 'ar'
        ? 'تصديق قانوني معتمد للشهادات الدراسية، والعقود التجارية، وقرارات مجالس الإدارة، وعقود الزواج، وشهادات بحث الحالة الجنائية، وأبوستيل.'
        : 'Statutory authentication for educational diplomas, commercial contracts, board resolutions, marriage certificates, police clearances, and international apostille verifications.',
      authorities: lang === 'ar' ? ['وزارة الخارجية', 'محاكم دبي', 'القنصليات والسفارات', 'وزارة العدل'] : ['MOFA UAE', 'Dubai Courts', 'Foreign Consulates', 'Ministry of Justice'],
      turnaround: lang === 'ar' ? 'نفس اليوم / 24 ساعة' : 'Same-Day / 24 Hours',
      serviceQuery: 'Document Clearing',
      prefilledMsg: lang === 'ar'
        ? 'مرحباً نيو غايد، أود استشارة مباشرة بخصوص تصديق الشهادات من وزارة الخارجية والمحررات القانونية.'
        : 'Hello New Guide, I am on your About page and would like direct consultation regarding MOFA Certificate Attestation & Document Legalization in Dubai.',
      highlights: lang === 'ar' ? [
        'الختم والتصديق الإلكتروني الرسمي من وزارة الخارجية (MOFA)',
        'تصديقات السفارات والقنصليات للفواتير والقرارات المؤسسية',
        'ترجمة قانونية معتمدة إلى اللغة العربية لكافة المعاملات'
      ] : [
        'Ministry of Foreign Affairs (MOFA) electronic stamp & validation',
        'Embassy legalization for commercial invoices & corporate resolutions',
        'Sworn legal translation into Arabic for all official UAE filings'
      ]
    },
    {
      id: 'residency',
      code: lang === 'ar' ? 'المسار 03 // الإقامة' : 'TRACK 03 // RESIDENCY',
      shortTitle: lang === 'ar' ? 'الإقامة الذهبية وVIP' : 'Golden Visa & VIP Visas',
      title: lang === 'ar' ? 'الإقامة الذهبية 10 سنوات وإقامات العمل' : '10-Year Golden Visa & Corporate Residency',
      icon: Award,
      badge: lang === 'ar' ? 'إقامة دبي والهيئة الاتحادية' : 'GDRFA Dubai & Federal ICP',
      description: lang === 'ar'
        ? 'خدمات VIP لكبار الشخصيات لتأشيرات المستثمر العقاري، والمدراء التنفيذيين، وإقامات العائلة، ومواعيد الفحص الطبي السريع والبصمة البيومترية.'
        : 'VIP liaison for real estate investor Golden Visas, executive talent visas, family sponsorships, express medical fitness appointments, and Emirates ID biometric clearance.',
      authorities: lang === 'ar' ? ['إقامة دبي GDRFA', 'الهيئة الاتحادية ICP', 'هيئة الصحة بدبي', 'مراكز آمر'] : ['GDRFA Dubai', 'ICP Federal', 'Dubai Health Authority', 'Amer Centers'],
      turnaround: lang === 'ar' ? '2–3 أيام عمل' : '2–3 Working Days',
      serviceQuery: 'Visa & Immigration',
      prefilledMsg: lang === 'ar'
        ? 'مرحباً نيو غايد، أود الاستفسار مباشرة حول الإقامة الذهبية 10 سنوات وتأشيرات الإقامة في دبي.'
        : 'Hello New Guide, I am on your About page and would like direct consultation regarding UAE 10-Year Golden Visas & Residency Sponsorship in Dubai.',
      highlights: lang === 'ar' ? [
        'ترشيح الإقامة الذهبية للمستثمرين العقاريين والكفاءات التخصصية',
        'معاملات مباشرة عبر مراكز آمر وإقامة دبي مع فحص طبي VIP سريع',
        'كفالة الأسرة، وتأشيرات المساعدين، وتعديل الوضع القانوني'
      ] : [
        'Property investor & specialized executive Golden Visa nomination',
        'Amer & GDRFA direct processing with priority VIP medical typing',
        'Complete family sponsorship, maid visas & status adjustment'
      ]
    },
    {
      id: 'notary',
      code: lang === 'ar' ? 'المسار 04 // الكاتب العدل' : 'TRACK 04 // LEGAL NOTARY',
      shortTitle: lang === 'ar' ? 'الكاتب العدل والوكالات' : 'Court Notary & POA',
      title: lang === 'ar' ? 'وكالات محاكم دبي الإلكترونية وتعديل العقود' : 'Dubai Courts Online POA & MOA Drafting',
      icon: ShieldCheck,
      badge: lang === 'ar' ? 'كاتب عدل محاكم دبي الرقمي' : 'Dubai Courts Digital Notary',
      description: lang === 'ar'
        ? 'صياغة قانونية باللغتين وتوثيق قضائي إلكتروني للوكالات العامة والخاصة، وتعديلات عقود تأسيس الشركات والملحقات القانونية.'
        : 'Bilingual legal drafting and electronic judicial notarization for General & Special Powers of Attorney, Memorandum of Association (MOA) amendments, and statutory declarations.',
      authorities: lang === 'ar' ? ['كاتب عدل محاكم دبي', 'وزارة العدل', 'المترجمون القانونيون المعتمدون'] : ['Dubai Courts Notary', 'Ministry of Justice', 'Certified Legal Translators'],
      turnaround: lang === 'ar' ? 'توثيق رقمي في نفس اليوم' : 'Same-Day Digital Processing',
      serviceQuery: 'Government Transactions',
      prefilledMsg: lang === 'ar'
        ? 'مرحباً نيو غايد، أود استشارة مباشرة حول الوكالات الإلكترونية عبر محاكم دبي والصياغة القانونية.'
        : 'Hello New Guide, I am on your About page and would like direct consultation regarding Dubai Courts Online POA & Judicial Legal Drafting.',
      highlights: lang === 'ar' ? [
        'وكالات عامة وخاصة للعقارات، والبنوك، وإدارة الشركات',
        'صياغة ملاحق عقود التأسيس، وتنازل وتعديل حصص الشركاء',
        'تنسيق جلسات الاتصال المرئي مع كاتب العدل بمحاكم دبي'
      ] : [
        'Special & General Power of Attorney for property, banking & management',
        'MOA addendums, share sale agreements & corporate resolution drafting',
        'Full electronic notary video session coordination with Dubai Courts'
      ]
    }
  ];

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
      className={`relative w-full overflow-hidden bg-[#06162F] text-white border-t border-white/10 selection:bg-[#00A9D6]/30 selection:text-white ${isRTL ? 'text-right' : 'text-left'}`}
    >
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
              {lang === 'ar' ? 'مكتب التنسيق الحكومي الرسمي // المقر الرئيسي، هور العنز، ديرة' : 'OFFICIAL MINISTERIAL LIAISON DESK // HOR AL ANZ, DEIRA HQ'}
            </span>
          </div>
          <div className="hidden md:flex items-center gap-4 text-white/60 text-[11px]">
            <span>{lang === 'ar' ? 'ترخيص دبي #649210' : 'DET LICENSED #649210'}</span>
            <span className="text-white/20">•</span>
            <span>{lang === 'ar' ? 'مسجل في وزارة الموارد البشرية' : 'MOHRE REGISTERED'}</span>
            <span className="text-white/20">•</span>
            <span>{lang === 'ar' ? 'معتمد لدى إقامة دبي' : 'GDRFA AUTHORIZED'}</span>
            <span className="text-white/20">•</span>
            <span className="text-[#00A9D6] font-semibold">{lang === 'ar' ? 'أكثر من 10 سنوات في دبي' : '10+ YEARS IN DUBAI'}</span>
          </div>
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          MAIN CONSULTATION BOARD ARCHITECTURE
          ───────────────────────────────────────────────────────────── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-14 py-16 sm:py-20 lg:py-24">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-md bg-[#08244A] border border-[#00A9D6]/30 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00A9D6]" />
            <span className="font-mono text-[11px] font-bold tracking-[0.2em] text-[#DDF5FC] uppercase">
              {lang === 'ar' ? 'استشارات نيو غايد // دراسة وتقييم المعاملة' : 'NEW GUIDE ADVISORY // CASE EVALUATION'}
            </span>
          </div>

          <h2
            id="about-cta-heading"
            className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-[52px] tracking-tight leading-[1.06] text-white uppercase"
          >
            {lang === 'ar' ? (
              <>
                تواصل مباشر مع مسؤولي ومستشاري{' '}
                <span className="text-[#00A9D6] drop-shadow-[0_0_24px_rgba(0,169,214,0.35)]">
                  الـ PRO المعتمدين
                </span>{' '}
                في دبي.
              </>
            ) : (
              <>
                Direct Liaison with Authorized{' '}
                <span className="text-[#00A9D6] drop-shadow-[0_0_24px_rgba(0,169,214,0.35)]">
                  UAE PRO Specialists
                </span>{' '}
                in Dubai.
              </>
            )}
          </h2>

          <p className="mt-5 text-sm sm:text-base lg:text-lg text-white/80 leading-relaxed font-normal">
            {lang === 'ar'
              ? 'تجنب العوائق الإجرائية، والوسطاء غير المعتمدين، ورفض المعاملات. تحدث مباشرة مع كبار مسؤولي العلاقات العامة الذين يديرون المعاملات اليومية لدى اقتصادية دبي، وزارة الخارجية، الإدارة العامة للإقامة، وزارة الموارد البشرية، ومحاكم دبي.'
              : 'Avoid procedural uncertainty, unverified intermediaries, and rejected paperwork. Speak directly with senior Dubai PRO officers who manage daily submissions across DET, MOFA, GDRFA, MOHRE, and Dubai Courts.'}
          </p>
        </div>

        {/* ─────────────────────────────────────────────────────────────
            TWO-COLUMN COMPOSITION
            ───────────────────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* LEFT COLUMN: 4 EVALUATION TRACKS */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center justify-between mb-3 px-1">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#00A9D6]">
                {lang === 'ar' ? 'اختر نوع المعاملة للبدء:' : 'SELECT YOUR PROCEDURE TO BEGIN:'}
              </span>
              <span className="font-mono text-[11px] text-white/50">
                {lang === 'ar' ? '04 مسارات تخصصية' : '04 DEDICATED TRACKS'}
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
                    className={`group w-full ${isRTL ? 'text-right' : 'text-left'} p-5 sm:p-6 rounded-2xl transition-all duration-300 border cursor-pointer ${
                      isSelected
                        ? `bg-gradient-to-r from-[#08244A] to-[#0D3270] border-[#00A9D6] shadow-[0_10px_30px_rgba(0,169,214,0.18)] ${isRTL ? '-translate-x-1 sm:-translate-x-2' : 'translate-x-1 sm:translate-x-2'}`
                        : 'bg-[#06162F]/90 hover:bg-[#08244A]/50 border-white/10 hover:border-white/20'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-center gap-3.5">
                        <div className={`p-2.5 rounded-xl transition-colors shrink-0 ${
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

                    <p className={`mt-3 text-xs sm:text-sm text-white/70 leading-relaxed font-normal ${isRTL ? 'pr-[52px]' : 'pl-[52px]'}`}>
                      {track.description}
                    </p>

                    {isSelected && (
                      <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        transition={{ duration: 0.25 }}
                        className={`mt-4 pt-4 border-t border-white/10 ${isRTL ? 'pr-[52px]' : 'pl-[52px]'} space-y-2`}
                      >
                        <div className="text-[11px] font-mono text-[#DDF5FC] font-semibold uppercase tracking-wider">
                          {lang === 'ar' ? 'المخرجات والخدمات الأساسية:' : 'CORE STATUTORY DELIVERABLES:'}
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

          {/* RIGHT COLUMN: EXECUTIVE LIAISON CONSOLE */}
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
                  {lang === 'ar' ? 'ملف المعاملة النشط' : 'ACTIVE CASE DOSSIER'}
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
                {lang === 'ar' ? 'الجهات والدوائر المعنية:' : 'MINISTERIAL BODIES INVOLVED:'}
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

            {/* ACTION CENTER */}
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
                    {lang === 'ar' ? 'محادثة فورية عبر واتساب' : 'START WHATSAPP CASE REVIEW'}
                  </span>
                </div>
                <ArrowRight size={18} className={`transition-transform duration-300 shrink-0 ${isRTL ? 'rotate-180 group-hover:-translate-x-1.5' : 'group-hover:translate-x-1.5'}`} />
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
                    {lang === 'ar' ? 'طلب مساعدة واستشارة رسمية' : 'SUBMIT DIRECT CASE INQUIRY'}
                  </span>
                </div>
                <ArrowRight size={18} className={`transition-transform duration-300 shrink-0 text-[#00A9D6] ${isRTL ? 'rotate-180 group-hover:-translate-x-1.5' : 'group-hover:translate-x-1.5'}`} />
              </button>
            </div>

            {/* Direct Telephone Hotline Link */}
            <div className="p-4 rounded-xl bg-[#06162F]/80 border border-white/10 mb-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <Phone size={16} className="text-[#00A9D6] shrink-0" />
                  <div>
                    <span className="font-mono text-[10px] text-white/50 block">
                      {lang === 'ar' ? 'خط الـ PRO المباشر' : 'DIRECT PRO HOTLINE'}
                    </span>
                    <a 
                      id="about-cta-phone-btn"
                      href="tel:+971525453323" 
                      className="text-sm font-mono font-bold text-white hover:text-[#00A9D6] transition-colors"
                      title="Call New Guide PRO Hotline in Dubai"
                      dir="ltr"
                    >
                      +971 52 545 3323
                    </a>
                  </div>
                </div>
                <span className="text-[10px] font-mono text-[#00A9D6] font-semibold bg-[#00A9D6]/10 px-2 py-0.5 rounded" dir="ltr">
                  08:00 – 20:00 GST
                </span>
              </div>
            </div>

            {/* Link to Full Services Directory */}
            <div className="pb-5 border-b border-white/10 mb-5 flex items-center justify-between">
              <button
                id="about-cta-services-btn"
                type="button"
                onClick={onExploreServices}
                className="group inline-flex items-center gap-2 text-xs font-mono text-white/70 hover:text-white transition-colors cursor-pointer"
                title="Explore the complete 17-service procedural directory"
              >
                <span>{lang === 'ar' ? 'استعراض دليل الخدمات الكامل (17 خدمة)' : 'BROWSE ALL 17 CLEARANCE PROCEDURES'}</span>
                <ExternalLink size={13} className={`text-[#00A9D6] transition-transform ${isRTL ? 'group-hover:-translate-x-0.5' : 'group-hover:translate-x-0.5'} group-hover:-translate-y-0.5`} />
              </button>
            </div>

            {/* Operational Commitments Footer */}
            <div className="grid grid-cols-2 gap-3 text-[10px] font-mono text-white/60">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 size={12} className="text-[#00A9D6] shrink-0" />
                <span>{lang === 'ar' ? 'الرد: أقل من ساعتين' : 'RESPONSE: < 2 HOURS'}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 size={12} className="text-[#00A9D6] shrink-0" />
                <span>{lang === 'ar' ? 'تقييم مجاني للمتطلبات' : 'ZERO CASE EVALUATION FEE'}</span>
              </div>
            </div>

            {/* Address Location Footnote */}
            <div className="mt-4 pt-3 border-t border-white/10 flex items-center gap-2 text-[10px] text-white/40 font-mono">
              <MapPin size={11} className="text-[#00A9D6] shrink-0" />
              <address className="not-italic">
                {lang === 'ar' ? 'شارع النهضة، القصيص، دبي، الإمارات العربية المتحدة' : 'Al Nahda Rd, Al Qusais, Dubai, United Arab Emirates'}
              </address>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
