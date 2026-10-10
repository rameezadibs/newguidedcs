import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowRight, ShieldCheck, CheckCircle2, Landmark, Building2, FileCheck } from 'lucide-react';

export default function ServicesHero({ onOpenAssistance, onScrollToDirectory }) {
  // Schema.org Structured Data (JSON-LD) for Search Engine Optimization & Rich Snippets
  const jsonLdData = {
    '@context': 'https://schema.org',
    '@type': 'GovernmentService',
    'name': 'UAE Government Documents Clearing & Corporate PRO Services',
    'provider': {
      '@type': 'LocalBusiness',
      'name': 'New Guide Documents Clearing Services Co.',
      'address': {
        '@type': 'PostalAddress',
        'addressLocality': 'Dubai',
        'addressCountry': 'AE'
      },
      'telephone': '+971525453323',
      'areaServed': ['Dubai', 'Abu Dhabi', 'Sharjah', 'Ajman', 'Ras Al Khaimah', 'Fujairah', 'Umm Al Quwain']
    },
    'serviceType': 'Document Clearing, PRO Services, Business Setup, Visas & Ministerial Legalisation',
    'description': 'Authorized UAE government liaison provider handling Dubai Municipality, DET, GDRFA, MOHRE, MOFA attestations, company formation, typing, and notary clearances.'
  };

  return (
    <section 
      id="services-hero"
      aria-label="UAE Government Documents Clearing Services & PRO Advisory"
      className="relative min-h-[85vh] lg:min-h-[90vh] bg-[#06162F] text-white pt-28 lg:pt-36 pb-20 overflow-hidden flex items-center"
      itemScope
      itemType="https://schema.org/GovernmentService"
    >
      {/* Search Crawler JSON-LD Structured Metadata */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
      />

      {/* Hero Background Image from /services/hero.png — Fully Visible & Clear (Same as Home/About) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        <img
          src="/services/hero.png"
          alt="UAE Government Documents Clearing Services Background"
          className="w-full h-full object-cover object-center filter brightness-[0.75] contrast-[1.12]"
          loading="eager"
        />
        {/* Subtle Gradient Overlays for High Contrast Readability without Obscuring Photo */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#06162F] via-[#06162F]/40 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#06162F]/85 via-[#06162F]/30 to-transparent pointer-events-none" />
      </div>

      {/* Technical Filing Intersections & Geo Coordinates */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        <div className="absolute top-24 left-8 text-[11px] font-mono text-[#00A9D6]/40 tracking-widest hidden sm:block">
          SYS.LOC // 25°12&apos;17&quot;N 55°16&apos;28&quot;E [DUBAI-HQ]
        </div>
        <div className="absolute top-24 right-8 text-[11px] font-mono text-[#00A9D6]/40 tracking-widest hidden sm:block">
          INDEX.REF // NG-DCS-SEO-2026
        </div>
        <div className="absolute bottom-10 left-8 text-[11px] font-mono text-white/20 tracking-wider hidden md:block">
          AUTHORIZATION: GOV-UAE // DIRECTORY-ROUTING-MATRIX
        </div>

        {/* Technical cross marks at key intersections */}
        <span className="absolute top-36 left-1/4 text-[#00A9D6]/30 font-mono text-sm">+</span>
        <span className="absolute top-1/2 left-1/3 text-[#00A9D6]/20 font-mono text-sm">+</span>
        <span className="absolute bottom-32 right-1/4 text-[#00A9D6]/25 font-mono text-sm">+</span>
        <span className="absolute top-48 right-12 text-[#00A9D6]/20 font-mono text-sm">+</span>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="max-w-4xl space-y-6 sm:space-y-8">
          


          {/* Primary H1 Heading — SEO Keyword Structured */}
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-7xl xl:text-8xl font-display font-extrabold tracking-tight leading-[0.95] text-white"
            itemProp="name"
          >
            UAE DOCUMENTS CLEARING <br />
            <span className="text-[#00A9D6]">&amp; PRO SERVICES IN DUBAI.</span> <br />
            <span className="text-[#087ED1]">ONE CLEAR ROUTE.</span>
          </motion.h1>

          {/* Search-Optimized Keyword Rich Subtitle Paragraph */}
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-[#F3F8FC]/90 max-w-3xl font-normal leading-relaxed"
            itemProp="description"
          >
            New Guide Documents Clearing Co. delivers authorized PRO liaison, ministerial approvals, company formation, visas, MOFA attestations, and corporate clearances across Dubai Municipality, DET, GDRFA, MOHRE, and UAE federal authorities.
          </motion.p>

          {/* Keyword-Rich Trust Highlights Bar */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2"
          >
            {[
              { icon: Landmark, text: 'MOFA & Federal Attestations' },
              { icon: Building2, text: 'DET & Freezone Business Setup' },
              { icon: FileCheck, text: 'GDRFA & MOHRE Visa Clearing' },
              { icon: ShieldCheck, text: '100% Authorized Government PRO' },
            ].map((item, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-[#08244A]/60 border border-white/10 flex items-center gap-2.5">
                <item.icon className="w-4 h-4 text-[#00A9D6] shrink-0" />
                <span className="text-xs font-mono font-medium text-white/90 leading-tight">{item.text}</span>
              </div>
            ))}
          </motion.div>

          {/* Action CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
          >
            <button
              onClick={onScrollToDirectory}
              className="group relative inline-flex items-center justify-center gap-3 px-7 py-4 rounded-xl bg-[#00A9D6] hover:bg-[#087ED1] text-[#06162F] hover:text-white font-display font-extrabold text-xs sm:text-sm tracking-widest uppercase transition-all duration-300 shadow-[0_10px_30px_rgba(0,169,214,0.3)] cursor-pointer"
            >
              <span>FIND YOUR SERVICE</span>
              <ArrowDown className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-1" />
            </button>

            <button
              onClick={() => {
                const text = encodeURIComponent('Hello New Guide, I would like to speak to a corporate services advisor.');
                window.open(`https://wa.me/971525453323?text=${text}`, '_blank');
              }}
              className="group relative inline-flex items-center justify-center gap-3 px-7 py-4 rounded-xl bg-[#00A9D6] hover:bg-[#087ED1] text-[#06162F] hover:text-white font-display font-extrabold text-xs sm:text-sm tracking-widest uppercase transition-all duration-300 shadow-[0_10px_30px_rgba(0,169,214,0.3)] cursor-pointer"
            >
              <span>SPEAK TO AN ADVISOR</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </motion.div>

          {/* Bottom Regulatory Stamp Note */}
          <div className="pt-4 flex items-center gap-3 text-xs font-mono text-white/50">
            <ShieldCheck className="w-4 h-4 text-[#00A9D6]" />
            <span>DUBAI AUTHORIZED PROCEDURAL LIAISON // ZERO GUESSWORK</span>
          </div>

        </div>
      </div>
    </section>
  );
}
