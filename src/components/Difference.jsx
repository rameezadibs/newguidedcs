import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Compass, Eye, ShieldCheck, Zap, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Difference() {
  const [activeTab, setActiveTab] = useState(0);

  const pillars = [
    {
      id: 'p1',
      num: '01',
      title: 'Strategic Regulatory Direction',
      headline: 'ANTICIPATING REGULATORY HURDLES',
      subtitle: 'Pre-submission compliance auditing that eliminates rejections before they happen.',
      desc: 'We map the full ministerial trajectory before initiating any filing. By auditing your documentation against current Dubai & UAE federal regulations, we guarantee zero procedural detours.',
      image: '/home/11.png',
      altText: 'UAE Document Clearing Strategic Regulatory Audit Dubai - New Guide',
      stat: '99.8%',
      statLabel: 'First-Pass Approval',
      highlights: [
        'Pre-submission regulatory audit',
        'Direct alignment with Dubai Economy & Tourism (DET)',
        'Elimination of redundant government fees'
      ],
      icon: Compass,
    },
    {
      id: 'p2',
      num: '02',
      title: 'Total Fee & Stage Transparency',
      headline: 'REAL-TIME TRACKING, ZERO JARGON',
      subtitle: 'Translating complex ministerial bureaucracy into clear, accountable milestones.',
      desc: 'No vague updates or unaccounted delays. We provide milestone-by-milestone status clarity, itemized official government fee schedules, and direct statutory documentation receipts.',
      image: '/home/12.png',
      altText: 'Transparent Document Clearing Fee Schedule Dubai - New Guide',
      stat: '100%',
      statLabel: 'Disclosed Fee Schedule',
      highlights: [
        'Milestone-by-milestone status reports',
        'Itemized official ministry receipts',
        'Dedicated corporate PRO liaison officer'
      ],
      icon: Eye,
    },
    {
      id: 'p3',
      num: '03',
      title: 'Fiduciary Integrity & Confidentiality',
      headline: 'ABSOLUTE CONFIDENTIALITY & ETHICS',
      subtitle: 'Strict corporate non-disclosure protocols and verified ministerial clearances.',
      desc: 'Handling sensitive commercial contracts, shareholder resolutions, and digital Power of Attorney (POA) instruments requires institutional trust. We operate under stringent non-disclosure standards.',
      image: '/home/13.png',
      altText: 'Institutional Document Clearing Confidentiality Dubai - New Guide',
      stat: '15+ Yrs',
      statLabel: 'UAE Regulatory Standing',
      highlights: [
        'Institutional confidentiality & NDAs',
        'Direct ministerial accreditation',
        'Legally certified Arabic translation'
      ],
      icon: ShieldCheck,
    },
    {
      id: 'p4',
      num: '04',
      title: 'Expedited PRO Operational Speed',
      headline: 'EXPEDITED CLEARANCE NETWORKS',
      subtitle: 'On-ground liaison officers permanently stationed at key governmental departments.',
      desc: 'Our specialists physically liaise inside MOFA, GDRFA, MOHRE, and Dubai Municipality every business day—accelerating physical submissions, attestations, and trade license clearances.',
      image: '/home/14.png',
      altText: 'Expedited PRO Document Clearing Officers Dubai UAE - New Guide',
      stat: '24–48h',
      statLabel: 'Expedited Processing',
      highlights: [
        'Same-day typing & department handoffs',
        'On-ground presence at federal hubs',
        'VIP fast-track visa & document courier'
      ],
      icon: Zap,
    },
  ];

  return (
    <section id="difference" aria-labelledby="difference-heading" className="relative pt-12 sm:pt-16 pb-12 sm:pb-16 bg-[#071D45] text-white overflow-hidden">
      {/* Background Architectural Blueprint Grid & Subtle Large Watermark */}
      <div className="absolute inset-0 bg-grid-blueprint-dark opacity-25 pointer-events-none" />
      <div className="absolute -left-10 top-1/2 -translate-y-1/2 text-white/[0.02] font-display font-black text-[22vw] select-none pointer-events-none leading-none z-0">
        NEW GUIDE
      </div>

      {/* Subtle Cyan / Deep Blue Atmospheric Ambient Lighting (Zero Gold) */}
      <div className="absolute top-1/3 -right-40 w-[38rem] h-[38rem] bg-[#09A9D4]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-40 w-[30rem] h-[30rem] bg-[#123D88]/40 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Section Header: Bold Editorial Manifesto */}
        <div className="mb-8 sm:mb-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-6 border-b border-white/10">
            <div className="max-w-3xl">
              <h2 id="difference-heading" className="text-3xl sm:text-5xl lg:text-6xl font-display font-black tracking-tight leading-[1.06] text-white">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-7 h-[2px] bg-[#09A9D4]" />
                  <span className="text-xs sm:text-sm font-mono font-bold tracking-[0.22em] text-[#09A9D4] uppercase">
                    WHY CHOOSE US
                  </span>
                </div>
                UAE DOCUMENT CLEARING DISCIPLINE. <br />
                <span className="text-[#09A9D4]">PRECISION LIAISON ACROSS DUBAI & ALL EMIRATES.</span>
              </h2>
            </div>

            <div className="max-w-md">
              <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
                Why multinational enterprises, foreign investors, and corporate leaders partner with New Guide for <strong>document clearing in Dubai</strong>, <strong>MOFA attestations</strong>, and <strong>government liaison</strong>.
              </p>
            </div>
          </div>
        </div>

        {/* ======================================================== */}
        {/* DESKTOP: Full-Height Interactive Image-Canvases (No Cards) */}
        {/* ======================================================== */}
        <div className="hidden lg:flex gap-4 h-[620px] w-full" role="tablist" aria-label="UAE Document Clearing Excellence Standards">
          {pillars.map((pillar, idx) => {
            const isActive = activeTab === idx;
            const Icon = pillar.icon;

            return (
              <motion.div
                key={pillar.id}
                id={`discipline-tab-${pillar.id}`}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveTab(idx)}
                onMouseEnter={() => setActiveTab(idx)}
                layout
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className={`relative overflow-hidden cursor-pointer select-none rounded-2xl border transition-colors duration-500 ${
                  isActive
                    ? 'flex-[3.5] border-[#09A9D4]/60 shadow-2xl'
                    : 'flex-1 border-white/10 hover:border-white/25 bg-[#0a2350]'
                }`}
              >
                {/* Background Image with Dynamic Zoom & Fade */}
                <div className="absolute inset-0 w-full h-full overflow-hidden">
                  <motion.img
                    src={pillar.image}
                    alt={pillar.altText}
                    title={pillar.title}
                    animate={{
                      scale: isActive ? 1.05 : 1.2,
                      filter: isActive ? 'contrast(1.08) brightness(0.65)' : 'contrast(1) brightness(0.25)',
                    }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    width="600"
                    height="620"
                  />
                  {/* Rich Vignette Overlay */}
                  <div className={`absolute inset-0 transition-opacity duration-500 ${
                    isActive 
                      ? 'bg-gradient-to-t from-[#071D45] via-[#071D45]/70 to-[#071D45]/20' 
                      : 'bg-[#071D45]/85'
                  }`} />
                </div>

                {/* Top Ambient Bar Indicator */}
                <div className={`absolute top-0 left-0 right-0 h-[3px] transition-all duration-300 ${
                  isActive ? 'bg-[#09A9D4]' : 'bg-transparent'
                }`} />

                {/* ======================================================== */}
                {/* INACTIVE STATE: Elegant Vertical Spine */}
                {/* ======================================================== */}
                {!isActive && (
                  <div className="relative z-10 w-full h-full flex flex-col justify-between items-center py-10 px-4">
                    {/* Index Number */}
                    <span className="font-mono text-xl font-bold tracking-widest text-[#09A9D4]">
                      {pillar.num}
                    </span>

                    {/* Rotated Vertical Title */}
                    <div className="transform -rotate-90 whitespace-nowrap text-lg font-display font-bold tracking-wider text-white/80 uppercase">
                      {pillar.title}
                    </div>

                    {/* Bottom Icon */}
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/50">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>
                )}

                {/* ======================================================== */}
                {/* ACTIVE STATE: Rich Cinematic Editorial Canvas */}
                {/* ======================================================== */}
                {isActive && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.15 }}
                    className="relative z-10 w-full h-full flex flex-col justify-between p-8 xl:p-12 text-white"
                  >
                    {/* Top Row: Numeral & Live Metric Pill */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <span className="font-mono text-3xl font-black text-[#09A9D4] tracking-wider">
                          [{pillar.num}]
                        </span>
                        <div className="h-6 w-[1px] bg-white/20" />
                        <span className="text-xs font-mono tracking-widest text-slate-300 uppercase">
                          DISCIPLINE SPECIFICATION
                        </span>
                      </div>

                      {/* Stat Pill */}
                      <div className="px-4 py-2 rounded-xl bg-[#071D45]/90 border border-white/20 backdrop-blur-md flex items-center gap-2">
                        <span className="text-lg font-display font-black text-[#09A9D4]">{pillar.stat}</span>
                        <span className="text-[11px] font-mono text-slate-300 uppercase">{pillar.statLabel}</span>
                      </div>
                    </div>

                    {/* Middle: Expanded Content */}
                    <div className="max-w-2xl my-auto">
                      <div className="text-xs font-mono font-bold tracking-widest text-[#09A9D4] uppercase mb-2">
                        {pillar.headline}
                      </div>

                      <h3 className="text-3xl xl:text-4xl font-display font-black tracking-tight leading-tight text-white mb-4">
                        {pillar.title}
                      </h3>

                      <p className="text-base xl:text-lg text-slate-200 font-normal leading-relaxed mb-6">
                        {pillar.desc}
                      </p>

                      {/* Highlights Checklist */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-6 border-t border-white/15">
                        {pillar.highlights.map((h) => (
                          <div key={h} className="flex items-center gap-2.5 text-sm text-white font-medium">
                            <CheckCircle2 className="w-4 h-4 text-[#09A9D4] shrink-0" />
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Row: Official Protocol Tag */}
                    <div className="flex items-center justify-between pt-6 border-t border-white/15 text-xs font-mono">
                      <div className="flex items-center gap-2 text-slate-300 uppercase tracking-wider">
                        <ShieldCheck className="w-3.5 h-3.5 text-[#09A9D4]" />
                        <span>VERIFIED UAE GOVERNMENT CLEARANCE PROTOCOL</span>
                      </div>

                      <span className="text-[#09A9D4] font-bold uppercase tracking-widest flex items-center gap-1">
                        ACTIVE STANDARD
                      </span>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* ======================================================== */}
        {/* MOBILE: Clean Accordion Gallery (No Generic Cards) */}
        {/* ======================================================== */}
        <div className="flex lg:hidden flex-col gap-4">
          {pillars.map((pillar, idx) => {
            const isActive = activeTab === idx;
            const Icon = pillar.icon;

            return (
              <div
                key={pillar.id}
                onClick={() => setActiveTab(idx)}
                className={`relative overflow-hidden rounded-2xl border transition-all duration-300 ${
                  isActive ? 'border-[#09A9D4] shadow-xl' : 'border-white/10 bg-[#0a2350]'
                }`}
              >
                {/* Background Image Header */}
                <div className="relative h-44 w-full overflow-hidden">
                  <img
                    src={pillar.image}
                    alt={pillar.altText}
                    title={pillar.title}
                    className="w-full h-full object-cover filter contrast-[1.08] brightness-75"
                    loading="lazy"
                    width="480"
                    height="180"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071D45] via-[#071D45]/60 to-transparent" />
                  
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xl font-bold text-[#09A9D4]">
                        [{pillar.num}]
                      </span>
                      <h3 className="text-xl font-display font-bold text-white">
                        {pillar.title}
                      </h3>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-[#09A9D4] text-[#071D45] flex items-center justify-center">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                {/* Expanded Details when selected */}
                {isActive && (
                  <div className="p-6 bg-[#071D45] border-t border-white/10 space-y-4">
                    <div className="text-xs font-mono font-bold text-[#09A9D4] uppercase">
                      {pillar.headline}
                    </div>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {pillar.desc}
                    </p>

                    <div className="space-y-2 pt-4 border-t border-white/10">
                      {pillar.highlights.map((h) => (
                        <div key={h} className="flex items-center gap-2 text-xs text-white">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#09A9D4] shrink-0" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-3 flex items-center justify-between text-xs font-mono text-slate-400">
                      <span>KEY METRIC</span>
                      <span className="text-[#09A9D4] font-bold">{pillar.stat} — {pillar.statLabel}</span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
