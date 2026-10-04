import React from 'react';
import { motion } from 'framer-motion';

export default function AboutCommitment() {
  return (
    <section
      id="commitment"
      aria-label="Our Commitment"
      className="relative w-full bg-[#F2F8FC] text-[#06162F] py-28 sm:py-36 lg:py-48 px-4 sm:px-8 lg:px-14 overflow-hidden border-b border-[#08244A]/10"
    >
      {/* Precision Blueprint Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,169,214,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,169,214,0.04)_1px,transparent_1px)] bg-[size:80px_80px] pointer-events-none" />

      {/* Atmospheric Soft Light Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#DDF5FC] rounded-full blur-[160px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto z-10 text-center">
        
        {/* Small Top Label */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="inline-flex items-center gap-3 mb-10 sm:mb-14"
        >
          <span className="w-8 h-[2px] bg-[#00A9D6]" />
          <span className="font-mono text-xs sm:text-sm font-bold tracking-[0.35em] uppercase text-[#00A9D6]">
            OUR COMMITMENT
          </span>
          <span className="w-8 h-[2px] bg-[#00A9D6]" />
        </motion.div>

        {/* Huge Statement (Pure Typographic Power) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1] }}
          className="font-display font-black text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5rem] tracking-tight leading-[1.04] text-[#06162F] mb-10 sm:mb-14"
        >
          <div className="text-[#06162F]">NO CONFUSION.</div>
          <div className="text-[#08244A]">NO GUESSWORK.</div>
          <div className="text-[#123D88]">NO UNNECESSARY DELAYS.</div>

          {/* Thin Editorial Accent Separator */}
          <div className="w-24 sm:w-32 h-[3px] bg-gradient-to-r from-transparent via-[#00A9D6] to-transparent mx-auto my-6 sm:my-8" />

          {/* Strongest Line: JUST A CLEARER WAY FORWARD */}
          <div className="text-[#06162F]">
            JUST A{' '}
            <span className="text-[#00A9D6] relative inline-block">
              CLEARER
            </span>
            <br className="sm:hidden" /> WAY FORWARD.
          </div>
        </motion.div>

        {/* One Concise Paragraph Underneath */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg sm:text-2xl text-[#08244A]/80 font-sans font-normal max-w-2xl mx-auto leading-relaxed"
        >
          New Guide exists to make complex administrative processes easier to understand, easier to manage and easier to complete.
        </motion.p>

      </div>
    </section>
  );
}
