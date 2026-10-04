import React from 'react';
import { motion } from 'framer-motion';

export default function AboutHero() {
  const handleScrollDown = () => {
    const nextSection = document.getElementById('principle');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Structured Data (JSON-LD) for High-Authority Local SEO & Entity Recognition
  const jsonLdSchema = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    '@id': 'https://newguidedcs.ae/about#webpage',
    'url': 'https://newguidedcs.ae/about',
    'name': 'About New Guide Documents Clearing Services Co. Dubai',
    'description': 'Licensed corporate PRO and government liaison agency in Dubai, UAE. We specialize in MOFA document attestations, DET business setup, Golden Visas, GDRFA immigration clearances, and MOHRE labor quotas.',
    'isPartOf': {
      '@type': 'WebSite',
      '@id': 'https://newguidedcs.ae/#website',
      'url': 'https://newguidedcs.ae/',
      'name': 'New Guide Documents Clearing Services Co.'
    },
    'mainEntity': {
      '@type': 'ProfessionalService',
      '@id': 'https://newguidedcs.ae/#organization',
      'name': 'New Guide Documents Clearing Services Co.',
      'telephone': '+971525453323',
      'email': 'info@newguidedcs.ae',
      'priceRange': '$$',
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': 'Office S20, Ground Floor, Arzoo Building, Near Al Twar Center, Al Nahda Rd',
        'addressLocality': 'Dubai',
        'addressRegion': 'Dubai',
        'addressCountry': 'AE'
      },
      'geo': {
        '@type': 'GeoCoordinates',
        'latitude': 25.2048,
        'longitude': 55.2708
      },
      'areaServed': [
        'Dubai',
        'Abu Dhabi',
        'Sharjah',
        'Ajman',
        'Ras Al Khaimah',
        'Fujairah',
        'Umm Al Quwain'
      ],
      'knowsAbout': [
        'Document Clearing Services Dubai',
        'MOFA Attestation & Legalization',
        'Dubai Economy & Tourism DET Business Setup',
        'UAE 10-Year Golden Visa Clearance',
        'MOHRE Labor Quota Management',
        'GDRFA Residency Visa Processing'
      ]
    }
  };

  return (
    <section 
      id="about-hero" 
      role="region"
      aria-labelledby="about-hero-heading"
      className="relative min-h-[100svh] w-full bg-[#06162F] text-white flex flex-col justify-between overflow-hidden pt-24 sm:pt-28 pb-10 sm:pb-12 px-4 sm:px-8 lg:px-14 select-none"
    >
      {/* Schema.org Microdata Injection for Search Engines */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
      />

      {/* Background Architectural Photograph with High-LCP Core Web Vitals Optimization */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1] }}
          className="w-full h-full"
        >
          <img
            src="/about/about.png"
            alt="Authorized Document Clearing Services Dubai & Corporate PRO Agency UAE - New Guide Headquarters Architecture"
            title="New Guide Documents Clearing & Corporate PRO Services Dubai UAE"
            width="1920"
            height="1080"
            className="w-full h-full object-cover object-center filter brightness-[0.72] contrast-[1.12]"
            loading="eager"
            fetchPriority="high"
          />
        </motion.div>

        {/* Sophisticated Deep Midnight & Dark Navy Editorial Overlays - Strictly No Gold */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#06162F] via-[#06162F]/75 to-[#08244A]/80 mix-blend-multiply pointer-events-none" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#06162F]/40 to-[#06162F]/90 pointer-events-none" />
        
        {/* Fine Architectural Grid Coordinate Lines (Swiss Design System) */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,169,214,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,169,214,0.04)_1px,transparent_1px)] bg-[size:80px_80px] pointer-events-none" />
      </div>

      {/* Top Bar: Eyebrow + Vertical Information Block */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-4 border-b border-white/10 pb-6">
        
        {/* Eyebrow Label with Targeted Keyword Relevance */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center gap-3"
        >
          <span className="w-8 h-[2px] bg-[#00A9D6]" />
          <span className="font-mono text-xs sm:text-sm font-bold tracking-[0.3em] uppercase text-[#00A9D6]">
            ABOUT NEW GUIDE // LICENSED UAE PRO & DOCUMENT CLEARING
          </span>
        </motion.div>

        {/* Vertical Information Block - Editorial Typographic Marker */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.35 }}
          className="flex flex-wrap sm:flex-col items-start sm:items-end text-left sm:text-right gap-y-1 gap-x-4 font-mono text-[11px] sm:text-xs tracking-[0.2em] text-white/60"
        >
          <span className="text-[#00A9D6] font-bold">DUBAI, UAE</span>
          <span>CORPORATE PRO</span>
          <span>GOVERNMENT LIAISON</span>
          <span className="text-white/80">DOCUMENT CLEARING</span>
        </motion.div>

      </div>

      {/* Center: Enormous Typography & Primary SEO Heading (H1) */}
      <div className="relative z-10 w-full max-w-7xl mx-auto my-auto py-8 sm:py-14">
        <div className="max-w-6xl">
          
          {/* SEO Keyword Eyebrow Tag for Search Bots & Crawlers */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#00A9D6]/15 border border-[#00A9D6]/30 font-mono text-[11px] sm:text-xs tracking-wider text-[#00A9D6] uppercase font-bold"
          >
            <span>DOCUMENT CLEARING & CORPORATE PRO SERVICES DUBAI</span>
          </motion.div>

          {/* Masked Headline Reveal Line 1 & 2 - Semantic H1 for Top Ranking */}
          <div className="overflow-hidden pb-1">
            <motion.h1
              id="about-hero-heading"
              initial={{ y: '100%', opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
              className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.5rem] tracking-tight leading-[0.98] text-white drop-shadow-md"
            >
              WE DON'T JUST
              <br />
              <span className="text-white/95">CLEAR DOCUMENTS.</span>
            </motion.h1>
          </div>

          {/* Masked Headline Reveal Line 3 & 4 (The Way Forward - Strongest Visual Line) */}
          <div className="overflow-hidden pt-3 sm:pt-6">
            <motion.div
              initial={{ y: '100%', opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.15, ease: [0.16, 1, 0.3, 1], delay: 0.65 }}
              className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.5rem] tracking-tight leading-[0.95]"
            >
              <span className="text-white/80">WE CLEAR</span>
              <br />
              <span className="text-[#00A9D6] relative inline-block">
                THE WAY FORWARD.
                {/* Thin Architectural Horizon Line */}
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1.2, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute -bottom-2 sm:-bottom-4 left-0 right-0 h-[2px] sm:h-[3px] bg-gradient-to-r from-[#00A9D6] via-[#00A9D6]/80 to-transparent origin-left"
                />
              </span>
            </motion.div>
          </div>

          {/* High-Intent Keyword Micro-Grid for Crawler Indexing & Snippets */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.85 }}
            className="mt-8 pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-4xl font-mono text-[11px] sm:text-xs text-white/75"
          >
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00A9D6]" />
              <span>MOFA Attestations</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00A9D6]" />
              <span>DET Business Setup</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00A9D6]" />
              <span>Golden Visa Clearance</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00A9D6]" />
              <span>MOHRE & GDRFA PRO</span>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Bottom Bar: Scroll Prompt & Institutional Coordinates */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex items-end justify-between border-t border-white/10 pt-5">
        
        {/* Subtle Lat/Long Institutional Watermark */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="hidden md:flex items-center gap-4 font-mono text-[10px] tracking-[0.25em] text-white/40"
        >
          <span>LAT 25.2048° N</span>
          <span>•</span>
          <span>LON 55.2708° E</span>
          <span>•</span>
          <span>EST. DUBAI</span>
        </motion.div>

        {/* Scroll To Discover Indicator */}
        <motion.button
          onClick={handleScrollDown}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="group flex items-center gap-3 text-left focus:outline-none cursor-pointer"
          aria-label="Scroll to discover New Guide"
        >
          <div className="font-mono text-[11px] sm:text-xs font-bold tracking-[0.25em] uppercase text-white/70 group-hover:text-[#00A9D6] transition-colors">
            SCROLL TO DISCOVER
          </div>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
            className="w-7 h-7 rounded-full border border-white/20 group-hover:border-[#00A9D6] flex items-center justify-center text-[#00A9D6] transition-colors"
          >
            <span className="text-sm font-mono leading-none">↓</span>
          </motion.div>
        </motion.button>

      </div>
    </section>
  );
}
