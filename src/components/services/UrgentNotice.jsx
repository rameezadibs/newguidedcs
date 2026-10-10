import React from 'react';
import { motion } from 'framer-motion';
import { Clock, ArrowRight, ShieldCheck, Zap } from 'lucide-react';

export default function UrgentNotice({ onOpenAssistance }) {
  return (
    <section className="relative py-20 sm:py-28 bg-[#123D88] text-white overflow-hidden">
      
      {/* Rapid Kinetic Animated Cyan Speed Lines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        {[
          { top: '15%', delay: 0, duration: 1.8 },
          { top: '35%', delay: 0.6, duration: 2.2 },
          { top: '55%', delay: 0.3, duration: 1.6 },
          { top: '75%', delay: 1.0, duration: 2.0 },
          { top: '90%', delay: 0.5, duration: 1.9 },
        ].map((line, idx) => (
          <motion.div
            key={idx}
            initial={{ x: '-100%' }}
            animate={{ x: '200%' }}
            transition={{
              duration: line.duration,
              delay: line.delay,
              repeat: Infinity,
              ease: 'linear',
            }}
            style={{ top: line.top }}
            className="absolute left-0 w-96 h-[1.5px] bg-gradient-to-r from-transparent via-[#00A9D6] to-transparent opacity-40"
          />
        ))}

        {/* Blueprint Grid Mesh */}
        <div 
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '48px 48px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* LEFT: Huge Typography */}
          <div className="lg:col-span-7 space-y-4">
            
            <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded bg-[#06162F]/40 border border-[#00A9D6]/40">
              <Zap className="w-3.5 h-3.5 text-[#00A9D6]" />
              <span className="text-xs font-mono font-bold tracking-[0.25em] text-[#DDF5FC] uppercase">
                TIME-CRITICAL FILINGS
              </span>
            </div>

            <h2 className="text-4xl sm:text-6xl md:text-7xl font-display font-extrabold tracking-tight leading-[0.95]">
              DEADLINE <br />
              <span className="text-[#00A9D6]">COMING UP?</span>
            </h2>

            <div className="text-xl sm:text-2xl font-display font-semibold text-[#DDF5FC]">
              Some transactions can&apos;t wait.
            </div>

            <p className="text-base sm:text-lg text-white/80 max-w-xl font-normal leading-relaxed pt-1">
              If you&apos;re dealing with an urgent filing, renewal, visa requirement or government deadline, speak directly with our team.
            </p>

            <div className="pt-2 flex items-center gap-3 text-xs font-mono text-white/60">
              <ShieldCheck className="w-4 h-4 text-[#00A9D6]" />
              <span>DIRECT MINISTERIAL SUBMISSION CHANNELS // ACCELERATED CASE QUEUE</span>
            </div>
          </div>

          {/* RIGHT: Fast Action Box */}
          <div className="lg:col-span-5">
            <div className="p-8 sm:p-10 rounded-2xl bg-[#06162F]/70 border border-[#00A9D6]/40 backdrop-blur-md shadow-2xl space-y-6">
              
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-2 text-xs font-mono text-[#00A9D6]">
                  <Clock className="w-4 h-4" />
                  <span className="font-bold">PRIORITY DISPATCH</span>
                </div>
                <div className="text-[10px] font-mono text-white/50">
                  DUBAI BUSINESS HOURS & EXTENDED
                </div>
              </div>

              <div className="space-y-2">
                <div className="text-sm font-bold text-white">
                  Immediate Dedicated Representative Allocation
                </div>
                <p className="text-xs text-white/70 leading-relaxed">
                  Avoid compounding statutory fines, expired visa grace periods, or halted corporate transactions. Our senior clearance PROs expedite submission prerequisites immediately.
                </p>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onOpenAssistance('Urgent Filing Deadline Assistance')}
                  className="w-full inline-flex items-center justify-center gap-3 py-4 px-6 rounded-xl bg-[#00A9D6] hover:bg-white text-[#06162F] font-display font-extrabold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 shadow-[0_10px_25px_rgba(0,169,214,0.3)] cursor-pointer"
                >
                  <span>REQUEST URGENT ASSISTANCE</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="text-center text-[10px] font-mono text-white/40">
                PROMPT REVIEW BY LICENSED UAE REGULATORY OFFICERS
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
