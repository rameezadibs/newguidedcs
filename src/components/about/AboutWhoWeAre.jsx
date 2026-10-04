import React from 'react';
import { motion } from 'framer-motion';

export default function AboutWhoWeAre() {
  return (
    <section
      id="manifesto"
      aria-label="Who We Are Manifesto"
      className="relative w-full bg-[#FFFFFF] text-[#111827] py-24 sm:py-32 lg:py-40 px-4 sm:px-8 lg:px-14 overflow-hidden border-b border-[#08244A]/10"
    >
      {/* Subtle Blueprint Grid Pattern - Architectural Detail */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(8,36,74,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(8,36,74,0.025)_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto z-10">
        
        {/* Top Marker: Left-aligned small index typography */}
        <div className="flex items-center gap-3 mb-12 sm:mb-16">
          <span className="w-8 h-[2px] bg-[#00A9D6]" />
          <span className="font-mono text-xs sm:text-sm font-bold tracking-[0.3em] uppercase text-[#00A9D6]">
            01 / WHO WE ARE
          </span>
        </div>

        {/* Editorial Manifesto Composition - Two Asymmetric Columns Connected by Cyan Vertical Rule */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Enormous Typography (occupies 45-50% of section) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative"
          >
            <h2 className="font-display font-black text-5xl sm:text-6xl md:text-7xl lg:text-[5rem] xl:text-[5.75rem] tracking-tight leading-[0.92] text-[#06162F]">
              <span>COMPLEX</span>
              <br />
              <span className="text-[#08244A]">PROCESSES.</span>
              <br />
              <span className="text-[#123D88]">MADE</span>
              <br />
              <span className="text-[#00A9D6]">CLEAR.</span>
            </h2>

            {/* Subtle Institutional Subtext */}
            <div className="mt-8 pt-8 border-t border-[#08244A]/10 flex items-center gap-4 font-mono text-xs tracking-wider text-[#667085]">
              <span className="font-bold text-[#06162F]">DUBAI LICENSED</span>
              <span>•</span>
              <span>EST. UAE</span>
              <span>•</span>
              <span className="text-[#00A9D6]">PRO LIAISON</span>
            </div>
          </motion.div>

          {/* Center Dividing Column: Thin Cyan Vertical Rule Connecting the Content */}
          <div className="hidden lg:flex lg:col-span-1 justify-center self-stretch relative">
            <div className="w-[1.5px] h-full bg-gradient-to-b from-[#00A9D6] via-[#00A9D6]/40 to-transparent relative">
              <span className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#00A9D6]" />
            </div>
          </div>

          {/* Right Column: Paragraph Typography (NOT in a card) */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-7 lg:pt-4"
          >
            <p className="font-display text-xl sm:text-2xl lg:text-[1.65rem] font-semibold text-[#08244A] leading-snug">
              New Guide Documents Clearing Services Co. is a licensed corporate PRO and government liaison agency based in Dubai.
            </p>

            <div className="space-y-6 text-[#111827]/85 text-base sm:text-lg leading-relaxed font-normal">
              <p>
                We help businesses and individuals navigate UAE government procedures, documentation, approvals and regulatory requirements with clarity, accuracy and speed.
              </p>
              <p className="text-[#667085]">
                Our role goes beyond submitting paperwork. We understand the process, anticipate requirements and coordinate each stage until completion.
              </p>
            </div>

            {/* Institutional Coordinates Row */}
            <div className="pt-8 border-t border-[#08244A]/10 grid grid-cols-2 gap-6 text-xs font-mono">
              <div>
                <span className="text-[#667085] uppercase tracking-wider block mb-1">OPERATIONAL SCOPE</span>
                <span className="font-bold text-[#06162F]">All 7 Emirates & Freezones</span>
              </div>
              <div>
                <span className="text-[#667085] uppercase tracking-wider block mb-1">GOVERNMENT CHANNELS</span>
                <span className="font-bold text-[#00A9D6]">Direct Ministerial Links</span>
              </div>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
