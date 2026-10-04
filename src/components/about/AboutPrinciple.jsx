import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function AboutPrinciple() {
  const [activePrinciple, setActivePrinciple] = useState(0);

  // Schema.org Structured Data (JSON-LD) for Search Engine Ranking & Entity Knowledge Graph
  const principleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    'name': 'The New Guide Principle — 3 Pillars of UAE Document Clearing & PRO Accuracy',
    'description': 'Our core operational framework for executing document clearing, MOFA attestations, DET business setup, and corporate PRO liaison across Dubai and all 7 Emirates.',
    'itemListElement': [
      {
        '@type': 'ListItem',
        'position': 1,
        'name': 'Understand First — Pre-Submission Audit',
        'description': 'Comprehensive diagnostic of entity structures, authority requirements, and document legalization pathways before lodgment.'
      },
      {
        '@type': 'ListItem',
        'position': 2,
        'name': 'Prepare Correctly — Accuracy & Attestation Protocol',
        'description': 'Multi-tier verification of Arabic legal translations, power of attorney notarizations, corporate resolutions, and consular attestations.'
      },
      {
        '@type': 'ListItem',
        'position': 3,
        'name': 'Follow Through — Active Ministerial Liaison',
        'description': 'Direct on-the-ground physical counter attendance and continuous tracking across Dubai government authorities until final approval.'
      }
    ]
  };

  const principles = [
    {
      num: '01',
      title: 'UNDERSTAND FIRST.',
      tag: 'PRE-SUBMISSION AUDIT',
      seoTopic: 'Requirement & Authority Diagnostic',
      desc: 'We establish the exact requirement, relevant authority and documentation pathway before submission.',
      operationalDetail:
        'A thorough diagnostic of corporate structures, jurisdictional regulations, MOFA attestation pathways, and DET activity requirements before any application is lodged.',
      outcome: 'Eliminates wrong-channel submissions and costly administrative rejections.',
      keywords: 'MOFA, DET, Free Zones, GDRFA, MOHRE',
    },
    {
      num: '02',
      title: 'PREPARE CORRECTLY.',
      tag: 'ACCURACY PROTOCOL',
      seoTopic: 'Legal Attestation & Arabic Verification',
      desc: 'Applications are pre-reviewed before filing to eliminate avoidable errors and administrative delays.',
      operationalDetail:
        'Multi-tier verification of Arabic legal translations, Dubai Courts Power of Attorney notarizations, commercial resolutions, and embassy attestations for 100% first-pass compliance.',
      outcome: 'Replaces repeated amendments with expedited first-pass government approvals.',
      keywords: 'Legal Translations, Notary Public, Consular Stamps',
    },
    {
      num: '03',
      title: 'FOLLOW THROUGH.',
      tag: 'ACTIVE LIAISON',
      seoTopic: 'Direct Ministerial Representation',
      desc: 'Our involvement continues from submission through physical counter liaison to final approval.',
      operationalDetail:
        'Direct physical ministerial attendance across Dubai authorities, continuous status tracking, and immediate resolution of security or administrative queries until certified documents and visas are delivered.',
      outcome: 'Guarantees uninterrupted momentum from initial filing to final clearance.',
      keywords: 'On-the-Ground PRO, Direct Attendance, Live Tracking',
    },
  ];

  return (
    <section
      id="principle"
      role="region"
      aria-labelledby="principle-section-heading"
      className="relative w-full bg-[#FFFFFF] text-[#06162F] pt-12 sm:pt-16 lg:pt-20 pb-3 sm:pb-4 lg:pb-6 px-4 sm:px-8 lg:px-14 overflow-hidden border-b border-[#08244A]/10"
    >
      {/* Schema.org Structured Data Injection for Search Engine Crawlers */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(principleJsonLd) }}
      />

      {/* Precision Blueprint Architectural Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(8,36,74,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(8,36,74,0.035)_1px,transparent_1px)] bg-[size:72px_72px] pointer-events-none" />

      {/* Subtle Luminous Ice Blue Radial Glow */}
      <div className="absolute top-1/4 -right-40 w-[600px] h-[600px] bg-[#DDF5FC]/70 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-40 w-[500px] h-[500px] bg-[#F2F8FC] rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto z-10">
        
        {/* ======================================================== */}
        {/* TOP EDITORIAL BAR: Tight Top Spacing */}
        {/* ======================================================== */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 mb-8 sm:mb-10 border-b border-[#08244A]/10">
          <div className="flex items-center gap-3">
            <span className="w-8 h-[2px] bg-[#123D88]" />
            <span className="font-mono text-xs sm:text-sm font-bold tracking-[0.3em] uppercase text-[#123D88]">
              THE NEW GUIDE PRINCIPLE // OPERATIONAL ACCURACY
            </span>
          </div>

          <div className="flex items-center gap-4 font-mono text-[11px] text-[#667085] tracking-widest uppercase">
            <span>UAE CORPORATE PRO DOCTRINE</span>
            <span>•</span>
            <span className="text-[#06162F] font-bold">DUBAI, UAE</span>
          </div>
        </div>

        {/* ======================================================== */}
        {/* HERO MANIFESTO: Reduced Space Above Eyebrow & Below PROCESS */}
        {/* ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start mb-10 sm:mb-12">
          
          {/* Left Column: Semantic H2 for Search Engine Ranking */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            {/* Keyword Micro-Eyebrow for SERP Authority - Tight Top Spacing */}
            <span className="font-mono text-xs font-bold text-[#123D88] tracking-widest uppercase block mb-1.5">
              DOCUMENT CLEARING & PRO SERVICES METHODOLOGY
            </span>

            <h2
              id="principle-section-heading"
              className="font-display font-black text-5xl sm:text-7xl md:text-8xl lg:text-[5.5rem] tracking-tight leading-[0.92] text-[#06162F] uppercase"
            >
              <span>GUIDANCE</span>
              <br />
              <span className="text-[#123D88] relative inline-block">
                BEFORE
                {/* Thin Precision Horizontal Underline */}
                <span className="absolute -bottom-2 sm:-bottom-3 left-0 right-0 h-[3px] bg-gradient-to-r from-[#123D88] via-[#123D88]/80 to-transparent" />
              </span>
              <br />
              <span className="text-[#08244A]">PROCESS.</span>
            </h2>
          </motion.div>

          {/* Right Column: Thesis Paragraph & SEO Keyword Feature Badge */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-5 lg:pt-2"
          >
            <div className="border-l-2 border-[#123D88] pl-5">
              <p className="font-display text-xl sm:text-2xl lg:text-[1.65rem] font-semibold text-[#06162F] leading-snug mb-2">
                “We believe the fastest transaction is the one correctly prepared before it reaches the authority.”
              </p>
              <p className="text-base text-[#667085] font-normal leading-relaxed">
                Most document clearing and PRO delays in Dubai occur before lodgment—through missing MOFA attestations, unverified translations, or mismatched DET activity codes. Our 3-stage protocol guarantees zero-error submissions.
              </p>
            </div>

            {/* Strategic Metric & Keyword Badge */}
            <div className="bg-[#F2F8FC] rounded-2xl p-4 border border-[#123D88]/20 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-mono tracking-widest uppercase text-[#667085] block font-bold">
                  THE NEW GUIDE STANDARD
                </span>
                <span className="text-xs sm:text-sm font-display font-extrabold text-[#06162F]">
                  100% Pre-Audited Submissions
                </span>
              </div>
              <div className="text-right">
                <span className="text-xs font-mono font-bold text-[#123D88] block">
                  ZERO DELAYS
                </span>
                <span className="text-[10px] text-[#667085]">First-Pass Approval</span>
              </div>
            </div>
          </motion.div>

        </div>

        {/* ======================================================== */}
        {/* THE THREE PRINCIPLES: Reduced Spacing Above & Below */}
        {/* ======================================================== */}
        <div className="pt-6 border-t border-[#08244A]/10">
          
          {/* Section Indicator */}
          <div className="flex items-center justify-between mb-6 text-xs font-mono text-[#667085]">
            <span className="uppercase tracking-widest text-[#123D88] font-bold">
              // 3 PILLARS OF DOCUMENT CLEARING ACCURACY IN DUBAI
            </span>
            <span className="hidden sm:inline">SELECT STAGE TO INSPECT SCOPE</span>
          </div>

          {/* Three Interactive Architectural Statement Columns (H3 Hierarchy) */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {principles.map((item, index) => {
              const isSelected = activePrinciple === index;

              return (
                <motion.div
                  key={item.num}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                  onClick={() => setActivePrinciple(index)}
                  onMouseEnter={() => setActivePrinciple(index)}
                  className={`group relative p-7 sm:p-8 rounded-3xl transition-all duration-500 cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? 'bg-[#06162F] text-white shadow-2xl scale-[1.01] border-2 border-[#00A9D6]'
                      : 'bg-[#F2F8FC] text-[#06162F] border border-[#08244A]/10 hover:border-[#00A9D6]/40 hover:bg-white hover:shadow-lg'
                  }`}
                >
                  {/* Top Bar: Numeral + Badge */}
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span
                        className={`font-mono text-3xl font-black tracking-tight ${
                          isSelected ? 'text-[#00A9D6]' : 'text-[#123D88]'
                        }`}
                      >
                        {item.num}
                      </span>
                      
                      <span
                        className={`font-mono text-[10px] tracking-widest uppercase px-3 py-1 rounded-full font-bold ${
                          isSelected
                            ? 'bg-[#00A9D6]/20 text-[#00A9D6] border border-[#00A9D6]/40'
                            : 'bg-white text-[#667085] border border-slate-200'
                        }`}
                      >
                        {item.tag}
                      </span>
                    </div>

                    {/* Semantic H3 Headline for Crawlers */}
                    <h3 className="font-display font-black text-xl sm:text-2xl tracking-tight mb-1.5">
                      {item.title}
                    </h3>

                    {/* Topic Tagline */}
                    <div
                      className={`text-[11px] font-mono tracking-wider font-bold mb-3 uppercase ${
                        isSelected ? 'text-[#00A9D6]' : 'text-[#667085]'
                      }`}
                    >
                      {item.seoTopic}
                    </div>

                    {/* Core Statement */}
                    <p
                      className={`text-sm sm:text-base leading-relaxed font-normal mb-4 ${
                        isSelected ? 'text-white/85' : 'text-[#111827]/80'
                      }`}
                    >
                      {item.desc}
                    </p>

                    {/* Dynamic Expanded Detail */}
                    <div
                      className={`pt-4 border-t text-xs sm:text-sm leading-relaxed transition-all duration-300 ${
                        isSelected
                          ? 'border-white/15 text-white/70'
                          : 'border-[#08244A]/10 text-[#667085]'
                      }`}
                    >
                      <p>{item.operationalDetail}</p>
                    </div>
                  </div>

                  {/* Bottom Footer: Outcome Indicator & Target Authorities */}
                  <div className="mt-6 pt-4 border-t border-white/15 space-y-1.5">
                    <div
                      className={`flex items-center justify-between text-xs font-mono ${
                        isSelected ? 'text-[#00A9D6]' : 'text-[#667085]'
                      }`}
                    >
                      <span className="font-bold uppercase tracking-wider text-[11px]">
                        {isSelected ? 'ACTIVE AUDIT' : 'INSPECT SCOPE'}
                      </span>
                      <span className="text-sm">→</span>
                    </div>

                    <div
                      className={`text-[10px] font-mono tracking-wider ${
                        isSelected ? 'text-white/50' : 'text-[#667085]/80'
                      }`}
                    >
                      SCOPE: {item.keywords}
                    </div>
                  </div>

                  {/* Active Illuminated Pulse Dot */}
                  {isSelected && (
                    <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-[#00A9D6] animate-ping" />
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* ======================================================== */}
          {/* BOTTOM AUDIT GUARANTEE FOOTNOTE: Reduced Bottom Spacing */}
          {/* ======================================================== */}
          <div className="mt-8 pt-5 border-t border-[#08244A]/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 font-mono text-[11px] text-[#667085]">
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-[#00A9D6]" />
              <span className="text-[#06162F] font-bold">
                AUDITED AGAINST UAE MOFA, DET, MOHRE & GDRFA BENCHMARKS
              </span>
            </div>
            <div>
              <span>APPLICABLE ACROSS DUBAI, ABU DHABI & ALL 7 EMIRATES</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
