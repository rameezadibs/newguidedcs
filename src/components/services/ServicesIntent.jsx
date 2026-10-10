import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { INTENT_OPTIONS } from './servicesData';

export default function ServicesIntent({ onSelectCategory, onOpenAssistance }) {
  const [hoveredId, setHoveredId] = useState(null);

  const handleIntentClick = (intent) => {
    if (intent.id === 'not-sure') {
      onOpenAssistance('Procedural Routing Consultation - Not Sure');
    } else if (onSelectCategory && (intent.targetServiceId || intent.targetCategory)) {
      onSelectCategory(intent.targetServiceId || intent.targetCategory);
    }
  };

  return (
    <section id="intent-explorer" className="relative pt-10 sm:pt-14 pb-16 sm:pb-24 bg-[#F7FAFC] text-[#111827] overflow-hidden border-t border-b border-slate-200">
      
      {/* Precision Micro Blueprint Grid */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(18, 61, 136, 0.04) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(18, 61, 136, 0.04) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-8 sm:mb-12">
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold tracking-tight text-[#06162F] leading-[0.95]">
            WHAT ARE YOU <br />
            <span className="text-[#087ED1]">TRYING TO DO?</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#667085] max-w-xl font-normal leading-relaxed">
            Select your real-world administrative objective. We will immediately navigate you to the authorized procedure and government agency.
          </p>
        </div>

        {/* Full-Width Typographic Intent Rows — NOT in boxes, separated by thin blue-grey lines */}
        <div className="border-t border-slate-200 divide-y divide-slate-200">
          {INTENT_OPTIONS.map((intent) => {
            const isHovered = hoveredId === intent.id;
            const isNotSure = intent.id === 'not-sure';

            return (
              <div
                key={intent.id}
                onMouseEnter={() => setHoveredId(intent.id)}
                onMouseLeave={() => setHoveredId(null)}
                onClick={() => handleIntentClick(intent)}
                className={`group relative py-6 sm:py-8 px-2 sm:px-6 transition-all duration-300 cursor-pointer ${
                  isHovered ? 'bg-[#DDF5FC]/40 pl-4 sm:pl-8' : 'hover:bg-slate-50/70'
                }`}
              >
                {/* Active Cyan Left Accent Line */}
                {isHovered && (
                  <motion.div
                    layoutId="activeIntentMarker"
                    className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#00A9D6]"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}

                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  
                  {/* Left: Number + Huge Typographic Title */}
                  <div className="flex items-start sm:items-center gap-4 sm:gap-8">
                    <span
                      className={`font-mono text-base sm:text-xl font-extrabold transition-colors duration-300 shrink-0 mt-0.5 sm:mt-0 ${
                        isHovered ? 'text-[#00A9D6]' : 'text-slate-400'
                      }`}
                    >
                      {intent.num}
                    </span>

                    <div>
                      <h3
                        className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl font-display font-extrabold tracking-tight transition-transform duration-300 ${
                          isHovered
                            ? 'text-[#06162F] translate-x-1 sm:translate-x-2'
                            : 'text-[#111827]'
                        }`}
                      >
                        {intent.title}
                      </h3>

                      {/* Explanation appears or expands smoothly */}
                      <p
                        className={`text-xs sm:text-sm text-[#667085] mt-1 sm:mt-1.5 transition-all duration-300 max-w-xl ${
                          isHovered ? 'text-[#06162F]' : 'text-[#667085]'
                        }`}
                      >
                        {intent.description}
                      </p>
                    </div>
                  </div>

                  {/* Right: Slide-In Action Indicator */}
                  <div className="flex items-center gap-3 self-end md:self-center shrink-0">
                    <span
                      className={`text-xs font-mono font-bold tracking-wider uppercase transition-all duration-300 ${
                        isHovered
                          ? 'opacity-100 text-[#087ED1] translate-x-0'
                          : 'opacity-0 -translate-x-2'
                      } ${isNotSure ? '!opacity-100 !translate-x-0 text-[#00A9D6]' : ''}`}
                    >
                      {isNotSure ? 'LET US GUIDE YOU' : 'VIEW PROCEDURE'}
                    </span>

                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                        isHovered
                          ? 'bg-[#00A9D6] text-white translate-x-1 shadow-md'
                          : isNotSure
                          ? 'bg-[#08244A] text-[#00A9D6]'
                          : 'bg-slate-100 text-slate-400 group-hover:bg-slate-200 group-hover:text-[#06162F]'
                      }`}
                    >
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Footnote Guide */}
        <div className="mt-8 flex flex-col sm:flex-row sm:items-center justify-between text-xs font-mono text-[#667085] gap-3 pt-4 border-t border-slate-200">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#00A9D6]" />
            <span>SELECT ANY OBJECTIVE TO DIRECTLY JUMP TO ITS PROCEDURAL DIRECTORY</span>
          </div>
          <span>UPDATED TO 2026 UAE STATUTORY REGULATIONS</span>
        </div>

      </div>
    </section>
  );
}
