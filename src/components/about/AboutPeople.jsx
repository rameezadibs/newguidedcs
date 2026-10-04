import React from 'react';
import { motion } from 'framer-motion';

export default function AboutPeople() {
  return (
    <section
      id="people"
      aria-label="The People Behind the Process"
      className="relative w-full bg-[#F2F8FC] text-[#06162F] pt-10 sm:pt-14 lg:pt-18 pb-10 sm:pb-14 lg:pb-18 px-4 sm:px-8 lg:px-14 overflow-hidden border-b border-[#08244A]/10"
    >
      {/* Precision Grid Coordinates Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(8,36,74,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(8,36,74,0.03)_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto z-10">
        
        {/* Section Header: Tight Top Spacing */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-end mb-6 sm:mb-8 pb-4 border-b border-[#08244A]/10">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-3 mb-1.5">
              <span className="w-8 h-[2px] bg-[#123D88]" />
              <span className="font-mono text-xs sm:text-sm font-bold tracking-[0.3em] uppercase text-[#123D88]">
                OPERATIONAL HUMANITY
              </span>
            </div>

            <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[0.98] text-[#06162F]">
              PEOPLE MAKE
              <br />
              <span className="text-[#123D88]">THE PROCESS WORK.</span>
            </h2>
          </div>

          <div className="lg:col-span-4 lg:pb-1">
            <p className="text-base sm:text-lg text-[#08244A]/80 font-display font-medium leading-relaxed border-l-2 border-[#00A9D6] pl-4">
              Behind every submission is coordination, communication and attention to detail.
            </p>
          </div>
        </div>

        {/* ======================================================== */}
        {/* EDITORIAL MOSAIC OF OBSERVATIONAL DOCUMENTARY PHOTOGRAPHY */}
        {/* Varied Dimensions: Large Vertical, Small Landscape, Square, Wide */}
        {/* ======================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6 items-stretch">
          
          {/* Photo 1: Large Vertical (Col 1-5, Row span 2) - Professional in Corridor */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-5 relative group rounded-3xl overflow-hidden shadow-xl bg-[#06162F] min-h-[420px] md:min-h-full"
          >
            <img
              src="/about/mosaic-corridor.jpg"
              alt="Professional walking through sun-drenched architectural office corridor in Dubai"
              className="w-full h-full object-cover object-center filter contrast-[1.05] transition-transform duration-700 group-hover:scale-[1.02]"
              loading="lazy"
            />
            {/* Subtle Gradient Shadow */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#06162F]/80 via-transparent to-transparent pointer-events-none" />

            {/* Editorial Caption Tag */}
            <div className="absolute bottom-5 left-5 right-5">
              <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#00A9D6] block mb-1 font-bold">
                DOCUMENTARY 01 // LIAISON IN MOTION
              </span>
              <p className="text-white font-display font-semibold text-sm sm:text-base">
                Direct ministerial coordination requires constant, on-the-ground presence.
              </p>
            </div>
          </motion.div>

          {/* Right Column Grid: Photos 2, 3, 4 (Col 6-12) */}
          <div className="md:col-span-7 flex flex-col gap-5 sm:gap-6">
            
            {/* Top Row: Square Crop (Photo 3) + Landscape Desk (Photo 2) */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 sm:gap-6 items-stretch">
              
              {/* Photo 3: Specialist at Workstation (5 cols on sm+, 100% width on mobile) */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="w-full sm:col-span-5 relative group rounded-3xl overflow-hidden shadow-xl bg-[#06162F] aspect-[4/3] sm:aspect-auto sm:h-full sm:min-h-[220px]"
              >
                <img
                  src="/about/mosaic-screen.jpg"
                  alt="Specialist reviewing administrative workflow data in contemporary office"
                  className="w-full h-full object-cover object-center filter contrast-[1.05] transition-transform duration-700 group-hover:scale-[1.02] absolute inset-0"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#06162F]/75 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-4 left-4 right-4 z-10">
                  <span className="font-mono text-[9px] tracking-[0.2em] uppercase text-[#00A9D6] block font-bold">
                    VERIFICATION PROTOCOL
                  </span>
                  <p className="text-white text-xs font-semibold">
                    Multi-tier pre-filing auditing
                  </p>
                </div>
              </motion.div>

              {/* Photo 2: Landscape Desk / Phone Coordination (7 cols on sm+, 100% width on mobile) */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="w-full sm:col-span-7 relative group rounded-3xl overflow-hidden shadow-xl bg-[#06162F] aspect-[4/3] sm:aspect-auto sm:h-full"
              >
                <img
                  src="/about/mosaic-desk.jpg"
                  alt="Client coordination and case management at contemporary office desk"
                  className="w-full h-full object-cover object-center filter contrast-[1.05] transition-transform duration-700 group-hover:scale-[1.02]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#06162F]/75 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-4 left-4 right-4 z-10">
                  <span className="font-mono text-[9px] tracking-[0.2em] uppercase text-[#00A9D6] block font-bold">
                    COMMUNICATION SPEED
                  </span>
                  <p className="text-white text-xs font-semibold">
                    Live updates at every ministerial milestone
                  </p>
                </div>
              </motion.div>

            </div>

            {/* Bottom Row: Wide 16:9 Landscape - Boardroom Discussion from Behind (Photo 4) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="relative group rounded-3xl overflow-hidden shadow-xl bg-[#06162F] aspect-[16/9]"
            >
              <img
                src="/about/mosaic-discussion.jpg"
                alt="Colleagues discussing strategy across minimalist conference table overlooking Dubai"
                className="w-full h-full object-cover object-center filter contrast-[1.05] transition-transform duration-700 group-hover:scale-[1.02]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#06162F]/80 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-4 left-5 right-5 flex items-end justify-between">
                <div>
                  <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#00A9D6] block font-bold">
                    CONSULTATIVE ALIGNMENT
                  </span>
                  <p className="text-white font-display font-semibold text-xs sm:text-sm">
                    Thoughtful case routing before government lodgment
                  </p>
                </div>

                <div className="hidden sm:block font-mono text-[10px] text-white/50 tracking-wider">
                  DUBAI CORPORATE HEADQUARTERS
                </div>
              </div>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
}
