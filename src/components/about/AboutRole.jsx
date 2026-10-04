import React from 'react';
import { motion } from 'framer-motion';

export default function AboutRole() {
  // Schema.org Structured Data (JSON-LD) for Search Engine Entity Ranking
  const roleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://newguidedcs.ae/about#our-role-service',
    'name': 'Corporate PRO Liaison & Government Document Clearing Services Dubai',
    'serviceType': 'Document Clearing, MOFA Attestations, DET Business Setup, Golden Visa Clearance',
    'provider': {
      '@type': 'ProfessionalService',
      'name': 'New Guide Documents Clearing Services Co.',
      'telephone': '+971525453323',
      'url': 'https://newguidedcs.ae/',
      'address': {
        '@type': 'PostalAddress',
        'addressLocality': 'Dubai',
        'addressCountry': 'AE'
      }
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
    'description': 'New Guide acts as the authorized working link between clients and UAE government authorities—coordinating MOFA attestations, DET business licenses, MOHRE labor quotas, and GDRFA residency approvals.'
  };

  return (
    <section
      id="our-role"
      role="region"
      aria-labelledby="our-role-heading"
      className="relative w-full bg-[#071D45] text-white pt-10 sm:pt-14 lg:pt-18 pb-10 sm:pb-14 lg:pb-18 px-4 sm:px-8 lg:px-14 overflow-hidden border-b border-white/10"
    >
      {/* Schema.org Microdata Script Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(roleJsonLd) }}
      />

      {/* Background Architectural Watermark - Faded "NG" */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 text-white/[0.03] font-display font-black text-[300px] sm:text-[420px] select-none pointer-events-none leading-none z-0">
        NG
      </div>

      {/* Blueprint grid overlay matching WhoWeAre */}
      <div className="absolute inset-0 bg-grid-blueprint-dark opacity-30 pointer-events-none" />

      {/* Subtle ambient glow */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-[#00A9D6]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Editorial Container */}
      <div className="relative max-w-7xl mx-auto z-10">
        
        {/* Top SEO Eyebrow & Institutional Coordinates - Tight Top Spacing */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 mb-6 sm:mb-8 border-b border-white/10">
          <div className="flex items-center gap-3">
            <span className="w-8 h-[2px] bg-[#00A9D6]" />
            <span className="font-mono text-xs sm:text-sm font-bold tracking-[0.3em] uppercase text-[#00A9D6]">
              OUR ROLE // AUTHORIZED GOVERNMENT LIAISON AGENCY DUBAI
            </span>
          </div>

          <div className="font-mono text-[11px] text-white/60 tracking-widest uppercase">
            <span>OPERATIONAL BRIDGE • MOFA / DET / MOHRE / GDRFA</span>
          </div>
        </div>

        {/* Magazine Spread Layout: Two Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Large Cinematic Documentary Photography */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 relative group"
          >
            {/* The Image Container with Image SEO Tags */}
            <div className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl bg-[#06162F] border border-white/15 aspect-[16/10] sm:aspect-[16/9]">
              <img
                src="/about/role-representative.jpg"
                alt="Authorized Dubai Document Clearing Representative - New Guide Corporate PRO Services UAE"
                title="New Guide Corporate PRO & Government Liaison Services Dubai UAE"
                width="1280"
                height="720"
                className="w-full h-full object-cover object-center filter contrast-[1.08] saturate-[1.02] transition-transform duration-700 group-hover:scale-[1.02]"
                loading="lazy"
              />

              {/* Subtle Cool Blue Gradient Overlay on Edge */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#06162F]/65 via-transparent to-black/10 pointer-events-none" />

              {/* Bottom Photo Metadata */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white/80 font-mono text-[10px] tracking-wider">
                <span>DIRECT MINISTERIAL ATTENDANCE</span>
                <span className="text-[#00A9D6] font-bold">ALL 7 EMIRATES</span>
              </div>
            </div>

            {/* Cyan Architectural Framing Line */}
            <div className="absolute -bottom-3 -left-3 w-24 h-24 border-b-2 border-l-2 border-[#00A9D6] rounded-bl-3xl pointer-events-none hidden sm:block" />
          </motion.div>

          {/* Right Column: Editorial Typography & Semantic H2 */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-5"
          >
            {/* Keyword Eyebrow Tag */}
            <span className="font-mono text-xs font-bold text-[#00A9D6] tracking-widest uppercase block mb-0.5">
              AUTHORIZED UAE CORPORATE PRO & DOCUMENTATION AGENCY
            </span>

            {/* Semantic H2 Headline for Top Search Engine Ranking */}
            <h2
              id="our-role-heading"
              className="font-display font-black text-4xl sm:text-5xl lg:text-[3.1rem] xl:text-[3.4rem] tracking-tight leading-[0.98] text-white"
            >
              <span>BETWEEN</span>
              <br />
              <span className="text-white/90">REQUIREMENT</span>
              <br />
              <span>AND APPROVAL,</span>
              <br />
              <span className="text-white/90">THERE'S</span>
              <br />
              <span className="text-[#00A9D6]">NEW GUIDE.</span>
            </h2>

            {/* Supporting Text with Targeted Search Term Entities */}
            <p className="text-base sm:text-lg text-white/80 leading-relaxed font-sans font-normal border-l-2 border-[#00A9D6] pl-4">
              We act as the authorized working link between our clients and the UAE's administrative ecosystem—coordinating <strong className="text-white font-semibold">MOFA attestations</strong>, <strong className="text-white font-semibold">DET trade license setup</strong>, <strong className="text-white font-semibold">MOHRE labor quotas</strong>, and <strong className="text-white font-semibold">GDRFA residency approvals</strong> so clients remain focused on business growth.
            </p>

            {/* High-Intent Keyword Matrix Grid for SERP Snippets */}
            <div className="pt-3 border-t border-white/10 grid grid-cols-2 gap-2.5 font-mono text-xs">
              <div className="bg-[#06162F]/60 backdrop-blur-md p-2.5 rounded-xl border border-white/10">
                <span className="block text-[#00A9D6] font-bold text-[11px]">MOFA ATTESTATION</span>
                <span className="text-[10px] text-white/70">Degree & Legal Certificates</span>
              </div>
              <div className="bg-[#06162F]/60 backdrop-blur-md p-2.5 rounded-xl border border-white/10">
                <span className="block text-white font-bold text-[11px]">DET BUSINESS SETUP</span>
                <span className="text-[10px] text-white/70">Mainland & Freezone Licenses</span>
              </div>
              <div className="bg-[#06162F]/60 backdrop-blur-md p-2.5 rounded-xl border border-white/10">
                <span className="block text-white font-bold text-[11px]">10-YR GOLDEN VISA</span>
                <span className="text-[10px] text-white/70">GDRFA & ICP Clearance</span>
              </div>
              <div className="bg-[#06162F]/60 backdrop-blur-md p-2.5 rounded-xl border border-white/10">
                <span className="block text-[#00A9D6] font-bold text-[11px]">CORPORATE PRO</span>
                <span className="text-[10px] text-white/70">Establishment Cards & Quotas</span>
              </div>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
