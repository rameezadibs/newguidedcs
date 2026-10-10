import React from 'react';
import { motion } from 'framer-motion';

export default function AboutCta({ onOpenAssistance, onExploreServices }) {
  // Schema.org Structured Data (JSON-LD) for Search Engine Ranking & Rich Results
  const ctaJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ContactPoint',
    '@id': 'https://newguidedcs.ae/about#contact-assistance',
    'telephone': '+971525453323',
    'contactType': 'customer service',
    'areaServed': ['Dubai', 'Abu Dhabi', 'Sharjah', 'Ajman', 'Ras Al Khaimah', 'Fujairah', 'Umm Al Quwain'],
    'availableLanguage': ['English', 'Arabic'],
    'serviceArea': {
      '@type': 'AdministrativeArea',
      'name': 'Dubai, United Arab Emirates'
    },
    'hoursAvailable': {
      '@type': 'OpeningHoursSpecification',
      'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      'opens': '08:00',
      'closes': '20:00'
    }
  };

  return (
    <section
      id="about-cta"
      role="region"
      aria-labelledby="about-cta-heading"
      className="relative w-full overflow-hidden bg-[#06162F] text-white border-t border-white/10"
    >
      {/* Schema.org Microdata Script Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ctaJsonLd) }}
      />

      {/* ======================================================== */}
      {/* ASYMMETRIC ARCHITECTURAL SPLIT-SCREEN COMPOSITION */}
      {/* Left: Deep Midnight Navy (#06162F) | Right: Royal Blue (#123D88) */}
      {/* ======================================================== */}
      <div className="relative min-h-[580px] lg:min-h-[640px] flex flex-col lg:flex-row items-stretch">
        
        {/* Left Side: Deep Midnight Navy */}
        <div className="relative w-full lg:w-7/12 bg-[#06162F] py-20 sm:py-28 lg:py-32 px-4 sm:px-8 lg:px-14 flex flex-col justify-center z-10">
          
          {/* Subtle Grid Coordinates */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,169,214,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,169,214,0.04)_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none" />

          <div className="relative z-10 max-w-xl">
            {/* Small Label with Search Entity Tag */}
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-[2px] bg-[#00A9D6]" />
              <span className="font-mono text-xs sm:text-sm font-bold tracking-[0.3em] uppercase text-[#00A9D6]">
                INITIATE ENGAGEMENT // DUBAI PRO & DOCUMENT CLEARING
              </span>
            </div>

            {/* High-Impact SEO H2 Headline */}
            <h2
              id="about-cta-heading"
              className="font-display font-black text-4xl sm:text-6xl lg:text-7xl xl:text-[5rem] tracking-tight leading-[0.96] text-white mb-6"
            >
              <span>LET'S MAKE</span>
              <br />
              <span className="text-white/90">YOUR NEXT STEP</span>
              <br />
              <span className="text-[#00A9D6]">CLEAR.</span>
            </h2>

            {/* High-Ranking Search Term Descriptive Copy */}
            <p className="text-base sm:text-lg text-white/80 font-normal leading-relaxed max-w-lg mb-6 border-l-2 border-[#00A9D6] pl-4">
              Need immediate clearance for <strong>MOFA attestations</strong>, <strong>DET business setup</strong>, <strong>MOHRE quotas</strong>, or <strong>GDRFA Golden Visas</strong>? Our authorized PRO specialists in Dubai provide direct ministerial liaison across all 7 Emirates.
            </p>

            {/* High-Intent Keyword Entity Badges for Search Crawlers */}
            <div className="grid grid-cols-2 gap-2.5 max-w-lg mb-8 font-mono text-xs">
              <div className="bg-white/5 border border-white/10 rounded-xl p-2.5">
                <span className="text-[#00A9D6] font-bold block text-[11px]">DUBAI COURTS & MOFA</span>
                <span className="text-white/70 text-[10px]">Legalization & Attestation</span>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-2.5">
                <span className="text-[#00A9D6] font-bold block text-[11px]">DET & FREE ZONE</span>
                <span className="text-white/70 text-[10px]">Commercial Licensing</span>
              </div>
            </div>

            {/* Directional Animated Line */}
            <div className="hidden sm:flex items-center gap-2 overflow-hidden w-64 h-3 pointer-events-none opacity-60">
              <motion.div
                animate={{ x: [-100, 150] }}
                transition={{ repeat: Infinity, duration: 2.2, ease: 'linear' }}
                className="flex items-center gap-2"
              >
                <div className="w-12 h-[1.5px] bg-[#00A9D6]" />
                <div className="w-2 h-[1.5px] bg-[#00A9D6]" />
                <div className="w-1 h-[1.5px] bg-[#00A9D6]" />
              </motion.div>
            </div>
          </div>

        </div>

        {/* Right Side: Electric / Royal Blue */}
        <div className="relative w-full lg:w-5/12 bg-gradient-to-br from-[#123D88] via-[#0D3270] to-[#08244A] py-16 sm:py-24 lg:py-32 px-4 sm:px-8 lg:px-12 flex flex-col justify-center z-10 border-t lg:border-t-0 lg:border-l border-white/10">
          
          {/* Subtle Radial Aura Overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(0,169,214,0.18),transparent_65%)] pointer-events-none" />

          <div className="relative z-10 max-w-md space-y-6">
            
            {/* Direct Contact Marker */}
            <div className="font-mono text-xs text-[#DDF5FC] tracking-[0.2em] uppercase font-semibold">
              AUTHORISED CORPORATE LIAISON // DUBAI & ALL 7 EMIRATES
            </div>

            {/* Primary Action Button 1: SPEAK TO NEW GUIDE → */}
            <button
              id="about-cta-primary"
              onClick={() => {
                const text = encodeURIComponent('Hello New Guide, I would like to speak with a corporate PRO and document clearing specialist.');
                window.open(`https://wa.me/971525453323?text=${text}`, '_blank');
              }}
              title="Speak to New Guide Corporate PRO & Document Clearing Specialist Dubai"
              className="group w-full py-5 px-8 rounded-2xl bg-white hover:bg-[#DDF5FC] text-[#06162F] font-display font-extrabold text-sm sm:text-base tracking-wider uppercase shadow-2xl transition-all duration-300 flex items-center justify-between cursor-pointer"
            >
              <span>SPEAK TO NEW GUIDE</span>
              <span className="text-xl font-mono text-[#00A9D6] transition-transform duration-300 group-hover:translate-x-2">
                →
              </span>
            </button>

            {/* Secondary Action Button 2: EXPLORE OUR SERVICES → (MATCHES BUTTON 1 EXACTLY) */}
            <button
              id="about-cta-secondary"
              onClick={onExploreServices}
              title="Explore UAE Corporate PRO & Document Clearing Services Dubai"
              className="group w-full py-5 px-8 rounded-2xl bg-white hover:bg-[#DDF5FC] text-[#06162F] font-display font-extrabold text-sm sm:text-base tracking-wider uppercase shadow-2xl transition-all duration-300 flex items-center justify-between"
            >
              <span>EXPLORE OUR SERVICES</span>
              <span className="text-xl font-mono text-[#00A9D6] transition-transform duration-300 group-hover:translate-x-2">
                →
              </span>
            </button>

            {/* Expedited Turnaround Guarantee */}
            <div className="pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-white/70">
              <span>RESPONSE WINDOW: &lt; 2 HOURS</span>
              <span className="text-[#00A9D6] font-bold">ZERO CONSULTATION FEE</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
