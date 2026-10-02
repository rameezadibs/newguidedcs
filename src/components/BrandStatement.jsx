import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Compass, ShieldCheck } from 'lucide-react';

export default function BrandStatement({ onOpenAssistance }) {
  return (
    <section 
      id="brand-commitment" 
      aria-labelledby="brand-commitment-heading" 
      className="relative min-h-[75vh] sm:min-h-[85vh] flex items-center justify-center overflow-hidden bg-[#071D45]"
    >
      
      {/* Background Cinematic UAE Business/Architecture Image with Parallax Scale */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        initial={{ scale: 1 }}
        whileInView={{ scale: 1.05 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 7, ease: 'easeOut' }}
      >
        <img
          src="/images/brand-statement.jpg"
          alt="UAE Business Setup and Document Clearing Specialists in Dubai"
          title="New Guide Documents Clearing Services Dubai - Government Liaison & Corporate PRO"
          width={1920}
          height={1080}
          className="w-full h-full object-cover object-center filter brightness-[0.4] contrast-110"
          loading="lazy"
        />
      </motion.div>

      {/* Dark Midnight Overlay for Readability and Contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#071D45] via-[#071D45]/90 to-[#071D45]/75 pointer-events-none" />

      {/* Subtle Architectural Blueprint grid on dark */}
      <div className="absolute inset-0 bg-grid-blueprint-dark opacity-20 pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white z-10 py-20 sm:py-28">
        
        <div className="flex items-center justify-center gap-3 mb-6">
          <span className="w-7 h-[2px] bg-[#09A9D4]" />
          <span className="text-xs sm:text-sm font-mono font-bold tracking-[0.22em] text-[#09A9D4] uppercase">
            NEW GUIDE COMMITMENT
          </span>
        </div>

        {/* Huge Typography with Electric Cyan Highlight (Zero Gold) */}
        <h2 id="brand-commitment-heading" className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-black tracking-tight leading-[1.04] mb-8">
          <span className="block text-white/95">
            YOU FOCUS
          </span>
          <span className="block text-white">
            ON THE BUSINESS.
          </span>
          <span className="block text-white/80 mt-2">
            WE’LL HELP
          </span>
          <span className="relative inline-block text-[#09A9D4] mt-1">
            CLEAR THE WAY.
            {/* Subtle Electric Cyan Path Accent Underline */}
            <svg
              className="absolute -bottom-2 sm:-bottom-4 left-0 w-full h-3 sm:h-5 overflow-visible pointer-events-none"
              viewBox="0 0 500 20"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M 5,14 Q 250,2 495,12"
                stroke="#09A9D4"
                strokeWidth="3.5"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </h2>

        {/* High-SEO Keyword-Rich Supporting Copy */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-300 font-normal mb-10 leading-relaxed">
          Free your enterprise from administrative friction. Partner with dedicated <strong>Dubai document clearing specialists</strong> and <strong>UAE corporate PRO consultants</strong> who guarantee complete compliance across DET, MOFA, MOHRE, and Dubai Municipality.
        </p>

        {/* Key Guarantee Badges */}
        <div className="flex flex-wrap items-center justify-center gap-6 mb-10 text-xs sm:text-sm font-mono text-cyan-200/90">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#09A9D4]" />
            <span>100% Ministerial Compliance</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#09A9D4]" />
            <span>Zero Rejection Guarantee</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#09A9D4]" />
            <span>Accelerated Processing</span>
          </div>
        </div>

        {/* Primary CTA (Electric Cyan - Zero Gold) */}
        <div>
          <button
            id="brand-statement-cta-btn"
            onClick={onOpenAssistance}
            className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-[#123D88] hover:bg-[#071D45] text-white text-xs sm:text-sm font-extrabold tracking-widest uppercase shadow-2xl transition-all duration-300 transform hover:-translate-y-0.5"
            aria-label="Start your document clearing request with New Guide Document Clearing Services"
          >
            <span>START YOUR REQUEST</span>
            <ArrowRight className="w-4 h-4 text-[#09A9D4] transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>

      </div>
    </section>
  );
}
