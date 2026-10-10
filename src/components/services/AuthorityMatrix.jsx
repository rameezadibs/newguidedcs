import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { AUTHORITIES_LIST } from './servicesData';
import { Landmark, ArrowRight, ShieldCheck } from 'lucide-react';

export default function AuthorityMatrix({ onOpenAssistance }) {
  const [activeHoveredAuth, setActiveHoveredAuth] = useState(null);

  return (
    <section className="relative py-24 sm:py-32 bg-[#08244A] text-white overflow-hidden border-t border-[#00A9D6]/20">
      
      {/* Precision Blueprint Grid Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0, 169, 214, 0.2) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 169, 214, 0.2) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
        }}
      />

      {/* Atmospheric Cyan Backglow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#00A9D6]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 sm:mb-20">
          <div>
            <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded bg-[#06162F] border border-[#00A9D6]/30 mb-4">
              <Landmark className="w-3.5 h-3.5 text-[#00A9D6]" />
              <span className="text-xs font-mono font-bold tracking-[0.25em] text-[#00A9D6] uppercase">
                WHERE WE OPERATE
              </span>
            </div>

            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold tracking-tight leading-[0.95]">
              ONE TEAM. <br />
              <span className="text-[#00A9D6]">MULTIPLE AUTHORITIES.</span>
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-sm sm:text-base text-[#DDF5FC]/80 leading-relaxed font-normal">
              Direct institutional access across municipal, ministerial, judiciary and free zone registries. We know precisely where your filing belongs.
            </p>
            <div className="mt-3 text-[11px] font-mono text-[#00A9D6]">
              NO INTERMEDIARIES // AUTHORIZED DIRECT SUBMISSIONS
            </div>
          </div>
        </div>

        {/* Central Hub Connection Display */}
        <div className="mb-12 p-6 rounded-2xl bg-[#06162F]/80 border border-[#00A9D6]/30 backdrop-blur-md relative overflow-hidden">
          
          {/* Animated Connecting Vector Lines (Thin Cyan Beams) */}
          <div className="hidden md:block absolute inset-0 pointer-events-none overflow-hidden">
            <svg className="w-full h-full" viewBox="0 0 1000 120" preserveAspectRatio="none">
              <defs>
                <linearGradient id="matrixGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#00A9D6" stopOpacity="0.2" />
                  <stop offset="50%" stopColor="#00A9D6" stopOpacity="1" />
                  <stop offset="100%" stopColor="#00A9D6" stopOpacity="0.2" />
                </linearGradient>
              </defs>
              <line x1="50" y1="60" x2="950" y2="60" stroke="#00A9D6" strokeOpacity="0.2" strokeWidth="1" strokeDasharray="4 4" />
              <motion.line
                x1="50"
                y1="60"
                x2="950"
                y2="60"
                stroke="url(#matrixGrad)"
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: [0, 1, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              />
            </svg>
          </div>

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#00A9D6]/10 border border-[#00A9D6] flex items-center justify-center shrink-0">
                <span className="font-display font-extrabold text-base text-[#00A9D6]">NG</span>
              </div>
              <div>
                <div className="text-xs font-mono font-bold tracking-widest text-[#00A9D6] uppercase">
                  CENTRAL CLEARANCE LIAISON
                </div>
                <div className="text-xl font-display font-bold text-white">
                  NEW GUIDE DOCUMENTS CLEARING
                </div>
              </div>
            </div>

            <div className="flex items-center gap-6 text-xs font-mono text-[#DDF5FC]/70">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#00A9D6] animate-ping" />
                <span>8 INSTITUTIONAL REGISTRIES ACTIVE</span>
              </div>
              <button
                onClick={() => onOpenAssistance('Authority Clearing Inquiry')}
                className="hidden sm:inline-flex items-center gap-2 text-white hover:text-[#00A9D6] font-bold uppercase transition-colors"
              >
                <span>VERIFY AUTHORITY REQUIREMENTS</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#00A9D6]" />
              </button>
            </div>
          </div>
        </div>

        {/* Institutional Authority Matrix — Typography Only, No fake logos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {AUTHORITIES_LIST.map((auth, idx) => {
            const isHovered = activeHoveredAuth === auth.abbr;

            return (
              <div
                key={auth.abbr}
                onMouseEnter={() => setActiveHoveredAuth(auth.abbr)}
                onMouseLeave={() => setActiveHoveredAuth(null)}
                onClick={() => onOpenAssistance(`Authority Liaison: ${auth.abbr}`)}
                className={`group relative p-6 sm:p-7 rounded-xl transition-all duration-300 cursor-pointer overflow-hidden border ${
                  isHovered
                    ? 'bg-[#06162F] border-[#00A9D6] shadow-[0_0_25px_rgba(0,169,214,0.25)] -translate-y-1'
                    : 'bg-[#06162F]/60 border-white/10 hover:border-white/20'
                }`}
              >
                {/* Thin Animated Cyan Line on top of card */}
                {isHovered && (
                  <motion.div
                    layoutId="matrixHoverLine"
                    className="absolute top-0 left-0 right-0 h-[2px] bg-[#00A9D6]"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}

                {/* Index Number */}
                <div className="flex items-center justify-between text-[11px] font-mono mb-4">
                  <span className={`transition-colors font-bold ${isHovered ? 'text-[#00A9D6]' : 'text-white/40'}`}>
                    0{idx + 1}
                  </span>
                  <span className="text-[10px] uppercase tracking-wider text-white/40 font-mono">
                    GOV.AE
                  </span>
                </div>

                {/* Large Institutional Typography Abbreviation */}
                <h3
                  className={`text-2xl sm:text-3xl font-display font-extrabold tracking-tight transition-colors mb-2 ${
                    isHovered ? 'text-white' : 'text-[#DDF5FC]'
                  }`}
                >
                  {auth.abbr}
                </h3>

                {/* Subtitle / Full Name */}
                <div className="text-[11px] font-mono text-white/50 mb-4 line-clamp-1">
                  {auth.fullName}
                </div>

                {/* Reveal Jurisdiction & Role */}
                <div className="pt-4 border-t border-white/10">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#00A9D6] mb-1 font-mono">
                    <span>→</span>
                    <span>{auth.role}</span>
                  </div>
                  <p className="text-xs text-white/70 leading-relaxed">
                    {auth.description}
                  </p>
                </div>

                {/* Bottom Interactive Arrow */}
                <div className="mt-4 pt-2 flex items-center justify-between text-[10px] font-mono text-[#00A9D6]">
                  <span className={`transition-opacity ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
                    DIRECT SUBMISSION ROUTE
                  </span>
                  <ArrowRight
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      isHovered ? 'translate-x-1' : 'text-white/30'
                    }`}
                  />
                </div>

              </div>
            );
          })}
        </div>

        {/* Section Guarantee Statement */}
        <div className="mt-12 text-center text-xs font-mono text-white/50 flex items-center justify-center gap-2">
          <ShieldCheck className="w-4 h-4 text-[#00A9D6]" />
          <span>&ldquo;We understand where your process needs to go.&rdquo; // Authorized PRO Credentials Maintained</span>
        </div>

      </div>
    </section>
  );
}
