import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GitBranch, CheckCircle2, ArrowRight } from 'lucide-react';

export default function ProcessRouter({ onOpenAssistance }) {
  const [selectedRouteKey, setSelectedRouteKey] = useState('det');

  const routes = [
    {
      key: 'det',
      label: 'COMMERCIAL LICENCE',
      authority: 'DET',
      authorityFull: 'Dubai Economy & Tourism',
      input: 'Trade Name & Business Activities',
      check: 'Initial Regulatory & Activity Feasibility',
      submission: 'Digital Portal & Memorandum Filing',
      followup: 'Statutory Fee Clearance & Registry',
      outcome: 'Trade Licence Issued & Registered',
      color: '#00A9D6',
    },
    {
      key: 'mofa',
      label: 'DOCUMENT ATTESTATION',
      authority: 'MOFA',
      authorityFull: 'Ministry of Foreign Affairs',
      input: 'Foreign Degree / Commercial Deed',
      check: 'Embassy Stamp & Notary Chain Verification',
      submission: 'Consular & MOFA Protocol Dispatch',
      followup: 'QR Code Authentication Tracking',
      outcome: 'Legally Validated UAE Government Seal',
      color: '#087ED1',
    },
    {
      key: 'gdrfa',
      label: 'GOLDEN / INVESTOR VISA',
      authority: 'GDRFA / ICP',
      authorityFull: 'Dubai Immigration & Identity',
      input: 'Title Deed / Investment Portfolio',
      check: 'Residency Criteria & Security Pre-Screen',
      submission: 'VIP Typing & Medical Clearance Scheduling',
      followup: 'Biometrics & Status Conversion',
      outcome: '10-Year UAE Residency Issued',
      color: '#00A9D6',
    },
    {
      key: 'municipality',
      label: 'MUNICIPAL PERMITS',
      authority: 'MUNICIPALITY',
      authorityFull: 'Dubai Municipality Compliance',
      input: 'Premise Layout / Architectural Plans',
      check: 'DM Code & Health Safety Review',
      submission: 'Direct Engineering Portal Filing',
      followup: 'Site Inspection & Officer Consultation',
      outcome: 'Approved Compliance Certificate',
      color: '#087ED1',
    },
  ];

  const currentRoute = routes.find((r) => r.key === selectedRouteKey) || routes[0];

  return (
    <section className="relative py-24 sm:py-32 bg-[#06162F] text-white overflow-hidden border-t border-b border-[#00A9D6]/20">
      
      {/* Precision Blueprint Grid Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-25"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0, 169, 214, 0.15) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 169, 214, 0.15) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded bg-[#08244A] border border-[#00A9D6]/30 mb-4">
            <GitBranch className="w-3.5 h-3.5 text-[#00A9D6]" />
            <span className="text-xs font-mono font-bold tracking-[0.25em] text-[#00A9D6] uppercase">
              PROCEDURAL ROUTING ENGINE
            </span>
          </div>

          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold tracking-tight leading-[0.95]">
            ONE REQUEST. <br />
            <span className="text-[#00A9D6]">THE RIGHT ROUTE.</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#F3F8FC]/80 max-w-2xl leading-relaxed">
            Select an objective below to observe how New Guide analyzes requirements, dynamically routes across the correct UAE authority, and delivers final statutory completion.
          </p>
        </div>

        {/* Route Selector Tabs */}
        <div className="flex flex-wrap gap-2 sm:gap-3 mb-12 pb-2">
          {routes.map((route) => {
            const isSelected = selectedRouteKey === route.key;
            return (
              <button
                key={route.key}
                onClick={() => setSelectedRouteKey(route.key)}
                className={`px-4 sm:px-5 py-2.5 rounded-xl font-mono text-xs sm:text-sm font-bold tracking-wider uppercase transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                  isSelected
                    ? 'bg-[#00A9D6] text-[#06162F] shadow-[0_0_20px_rgba(0,169,214,0.4)]'
                    : 'bg-[#08244A] text-white/80 hover:bg-[#123D88] hover:text-white border border-white/10'
                }`}
              >
                <span className={`w-2 h-2 rounded-full ${isSelected ? 'bg-[#06162F]' : 'bg-[#00A9D6]'}`} />
                <span>{route.label}</span>
              </button>
            );
          })}
        </div>

        {/* Interactive Dynamic Branching Diagram Display */}
        <div className="relative p-6 sm:p-10 rounded-2xl bg-[#08244A]/80 border border-[#00A9D6]/30 backdrop-blur-md shadow-2xl">
          
          {/* Top Status Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-white/10 pb-4 mb-8 text-xs font-mono text-white/60 gap-2">
            <div className="flex items-center gap-2">
              <span className="text-[#00A9D6] font-bold">CURRENT PROTOCOL:</span>
              <span className="text-white font-bold">{currentRoute.label}</span>
            </div>
            <div className="flex items-center gap-2">
              <span>TARGET REGISTRY:</span>
              <span className="text-[#00A9D6] font-bold">{currentRoute.authorityFull}</span>
            </div>
          </div>

          {/* DESKTOP & TABLET: Branching Pathway Grid */}
          <div className="hidden md:grid grid-cols-5 gap-4 items-center relative">
            
            {/* Stage 1: YOU (Client Intake) */}
            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-2xl bg-[#06162F] border-2 border-white/30 flex items-center justify-center mb-3 shadow-lg">
                <span className="font-display font-extrabold text-sm text-white">YOU</span>
              </div>
              <div className="text-[11px] font-mono text-[#00A9D6] font-bold uppercase tracking-wider mb-1">
                STAGE 01
              </div>
              <div className="text-xs font-bold text-white mb-1">
                Objective Stated
              </div>
              <div className="text-[10px] text-white/60 leading-tight">
                {currentRoute.input}
              </div>
            </div>

            {/* Connecting Line 1 to 2 */}
            <div className="relative h-1 bg-[#06162F] overflow-hidden">
              <motion.div
                key={`line1-${selectedRouteKey}`}
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
                className="w-1/2 h-full bg-[#00A9D6]"
              />
            </div>

            {/* Stage 2: NEW GUIDE (Central Requirement Check) */}
            <div className="relative z-10 flex flex-col items-center text-center">
              <motion.div
                key={`hub-${selectedRouteKey}`}
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-16 h-16 rounded-2xl bg-[#06162F] border-2 border-[#00A9D6] flex flex-col items-center justify-center mb-3 shadow-[0_0_25px_rgba(0,169,214,0.4)]"
              >
                <span className="font-display font-black text-xs text-[#00A9D6]">NEW</span>
                <span className="font-display font-black text-xs text-white">GUIDE</span>
              </motion.div>
              <div className="text-[11px] font-mono text-[#00A9D6] font-bold uppercase tracking-wider mb-1">
                STAGE 02
              </div>
              <div className="text-xs font-bold text-white mb-1">
                Requirement Check
              </div>
              <div className="text-[10px] text-white/60 leading-tight">
                {currentRoute.check}
              </div>
            </div>

            {/* Connecting Line 2 to 3 */}
            <div className="relative h-1 bg-[#06162F] overflow-hidden">
              <motion.div
                key={`line2-${selectedRouteKey}`}
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{ duration: 1.5, delay: 0.4, repeat: Infinity, ease: 'linear' }}
                className="w-1/2 h-full bg-[#00A9D6]"
              />
            </div>

            {/* Stage 3: THE RIGHT AUTHORITY (Branching Destination) */}
            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-2xl bg-[#087ED1] border-2 border-[#00A9D6] flex items-center justify-center mb-3 shadow-lg">
                <span className="font-display font-extrabold text-xs text-white">
                  {currentRoute.authority}
                </span>
              </div>
              <div className="text-[11px] font-mono text-[#00A9D6] font-bold uppercase tracking-wider mb-1">
                STAGE 03
              </div>
              <div className="text-xs font-bold text-white mb-1">
                Right Authority
              </div>
              <div className="text-[10px] text-white/60 leading-tight">
                {currentRoute.submission}
              </div>
            </div>

          </div>

          {/* Reconvergence Flow to Resolution */}
          <div className="mt-8 pt-8 border-t border-white/10 hidden md:grid grid-cols-3 gap-6 items-center">
            
            {/* Step 4: Submission & Liaison */}
            <div className="flex items-center gap-4 p-4 rounded-xl bg-[#06162F]/60 border border-white/10">
              <div className="w-9 h-9 rounded-lg bg-[#00A9D6]/10 border border-[#00A9D6] flex items-center justify-center shrink-0 font-mono text-xs font-bold text-[#00A9D6]">
                04
              </div>
              <div>
                <div className="text-xs font-bold text-white">Submission Protocol</div>
                <div className="text-[11px] text-white/60">{currentRoute.submission}</div>
              </div>
            </div>

            {/* Step 5: Follow-Up */}
            <div className="flex items-center gap-4 p-4 rounded-xl bg-[#06162F]/60 border border-white/10">
              <div className="w-9 h-9 rounded-lg bg-[#00A9D6]/10 border border-[#00A9D6] flex items-center justify-center shrink-0 font-mono text-xs font-bold text-[#00A9D6]">
                05
              </div>
              <div>
                <div className="text-xs font-bold text-white">Active Follow-Up</div>
                <div className="text-[11px] text-white/60">{currentRoute.followup}</div>
              </div>
            </div>

            {/* Step 6: APPROVED / COMPLETED */}
            <div className="flex items-center gap-4 p-4 rounded-xl bg-[#00A9D6]/15 border border-[#00A9D6] shadow-[0_0_20px_rgba(0,169,214,0.2)]">
              <CheckCircle2 className="w-8 h-8 text-[#00A9D6] shrink-0" />
              <div>
                <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#00A9D6]">
                  RESOLUTION VERIFIED
                </div>
                <div className="text-xs font-bold text-white">{currentRoute.outcome}</div>
              </div>
            </div>

          </div>

          {/* MOBILE VIEW: Vertical Stepped Sequence */}
          <div className="block md:hidden space-y-4">
            {[
              { num: '01', title: 'YOU (Requirement Stated)', desc: currentRoute.input },
              { num: '02', title: 'NEW GUIDE (Verification & Check)', desc: currentRoute.check },
              { num: '03', title: `RIGHT AUTHORITY (${currentRoute.authority})`, desc: currentRoute.submission },
              { num: '04', title: 'ACTIVE GOVERNMENT FOLLOW-UP', desc: currentRoute.followup },
              { num: '05', title: 'APPROVED / COMPLETED', desc: currentRoute.outcome, highlight: true },
            ].map((step, idx) => (
              <div
                key={idx}
                className={`p-4 rounded-xl border flex items-start gap-3.5 ${
                  step.highlight
                    ? 'bg-[#00A9D6]/20 border-[#00A9D6]'
                    : 'bg-[#06162F] border-white/10'
                }`}
              >
                <span className={`font-mono text-xs font-bold ${step.highlight ? 'text-[#00A9D6]' : 'text-white/40'}`}>
                  {step.num}
                </span>
                <div>
                  <h4 className="text-xs font-bold text-white mb-0.5">{step.title}</h4>
                  <p className="text-[11px] text-white/70">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Callout */}
          <div className="mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-white/10">
            <div className="text-xs font-mono text-white/60">
              AVERAGE STATUTORY PROCESSING TIME: 24 TO 72 HOURS
            </div>

            <button
              onClick={() => onOpenAssistance(`Routing Request: ${currentRoute.label}`)}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#00A9D6] hover:bg-[#087ED1] text-[#06162F] hover:text-white font-mono text-xs font-extrabold uppercase tracking-wider transition-colors cursor-pointer"
            >
              <span>ROUTE THIS REQUIREMENT</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
