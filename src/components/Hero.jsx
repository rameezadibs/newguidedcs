import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  PhoneCall, 
  CheckCircle2, 
  ShieldCheck, 
  Clock, 
  FileCheck, 
  Award
} from 'lucide-react';

export default function Hero({ onOpenAssistance, onOpenContact }) {
  // Interactive service showcase state right inside the hero
  const [activeTab, setActiveTab] = useState(0);

  const quickTracks = [
    {
      id: 'attestation',
      label: 'Document Attestation',
      authority: 'MOFA & Embassy Legalization',
      turnaround: '24–48 Hours Expedited',
      badge: 'GOVERNMENT SEALED',
      details: 'Full legal validation for corporate resolutions, POAs, certificates, and commercial contracts.',
      features: [
        'Ministry of Foreign Affairs (MOFA)',
        'UAE Embassy Legalization',
        'Certified Legal Arabic Translation'
      ],
    },
    {
      id: 'setup',
      label: 'Company Formation',
      authority: 'DET & Freezone Jurisdictions',
      turnaround: '3–5 Business Days',
      badge: '100% OWNERSHIP READY',
      details: 'End-to-end commercial licensing, trade name reservation, and initial approval execution.',
      features: [
        'Mainland LLC & Freezone Setup',
        'Memorandum & Articles Drafting',
        'Corporate Bank Account Assistance'
      ],
    },
    {
      id: 'visa',
      label: 'Golden & Residence Visas',
      authority: 'ICP & GDRFA Immigration',
      turnaround: 'VIP Fast-Track Protocol',
      badge: 'DIRECT PROCESSING',
      details: 'Seamless processing for 10-year Golden Visas, investor permits, and executive employment status.',
      features: [
        '10-Year UAE Golden Visa',
        'Medical Fitness & Emirates ID',
        'Investor & Partner Visas'
      ],
    },
    {
      id: 'pro',
      label: 'Corporate PRO Desk',
      authority: 'MOHRE & Municipal Liaison',
      turnaround: 'Same-Day Quota Filings',
      badge: 'DEDICATED OFFICERS',
      details: 'On-demand corporate representation managing establishment cards, labor files, and statutory renewals.',
      features: [
        'Establishment Card Updates',
        'Ministry of Human Resources (MOHRE)',
        'Comprehensive License Renewals'
      ],
    },
  ];

  const currentTrack = quickTracks[activeTab];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-[94vh] lg:min-h-screen flex items-center pt-28 pb-16 lg:pt-32 lg:pb-24 bg-[#F8FAFC] overflow-hidden"
    >
      {/* Background Architectural Blueprint Grid & High-End Cyan Ambient Glows */}
      <div className="absolute inset-0 bg-grid-blueprint opacity-40 pointer-events-none" />
      
      {/* Subtle Cyan/Royal Blue Ambient Lighting Spheres (Zero Gold) */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#09A9D4]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -right-32 w-[32rem] h-[32rem] bg-[#123D88]/8 rounded-full blur-3xl pointer-events-none" />
      
      {/* Technical Blueprint Coordinates */}
      <div className="hidden 2xl:flex flex-col justify-between absolute left-8 top-36 bottom-24 text-[10px] uppercase font-mono tracking-widest text-[#123D88]/40 pointer-events-none select-none">
        <span>DXB // 25.2048° N</span>
        <div className="w-[1px] h-20 bg-[#123D88]/20 my-2" />
        <span>SYS.NG // 2026.1</span>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* LEFT SIDE: Bold Editorial Headline, Copy, Quick Interactive Selectors */}
          <motion.div
            className="lg:col-span-7 flex flex-col justify-center text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* High-Impact SEO-Optimized H1 Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-6xl lg:text-7xl font-display font-black tracking-tight leading-[1.05] mb-6"
            >
              <span className="block text-[#071D45]">
                DOCUMENT CLEARING
              </span>
              <span className="block text-[#123D88] mt-1 text-3xl sm:text-5xl lg:text-6xl font-extrabold">
                SERVICES IN DUBAI & UAE
              </span>
            </motion.h1>

            {/* Supporting Copy with High Keyword Density & Readability */}
            <motion.p
              variants={itemVariants}
              className="max-w-xl text-base sm:text-lg text-slate-800 font-medium leading-relaxed mb-6"
            >
              Authorized liaison for <strong>document clearing in Dubai</strong>, <strong>MOFA attestations</strong>, <strong>UAE business setup</strong>, <strong>Golden Visas</strong>, and <strong>corporate PRO services</strong>—transforming complex government transactions into swift, zero-delay approvals.
            </motion.p>

            {/* Interactive Quick Service Tabs: Click to update right-hand live clearance card */}
            <motion.div variants={itemVariants} className="mb-8" id="hero-pathway-tabs">
              <div className="text-xs font-mono font-extrabold uppercase tracking-wider text-slate-700 mb-3 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#09A9D4]" />
                <span>Select Your Direct Pathway:</span>
              </div>

              <div className="flex flex-wrap gap-2.5" role="tablist" aria-label="UAE Document Clearing & Business Setup Pathways">
                {quickTracks.map((track, idx) => {
                  const isActive = activeTab === idx;
                  return (
                    <button
                      key={track.id}
                      id={`hero-tab-${track.id}`}
                      role="tab"
                      aria-selected={isActive}
                      onClick={() => setActiveTab(idx)}
                      className={`text-xs sm:text-sm px-4 py-2.5 rounded-lg font-bold transition-all duration-200 border ${
                        isActive
                          ? 'bg-[#071D45] text-white border-[#071D45] shadow-md ring-2 ring-[#09A9D4]'
                          : 'bg-white text-slate-800 border-slate-300 hover:border-[#123D88] hover:text-[#071D45] shadow-2xs'
                      }`}
                    >
                      {track.label}
                    </button>
                  );
                })}
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10"
            >
              {/* Primary CTA */}
              <button
                id="hero-primary-cta"
                onClick={() => onOpenAssistance(currentTrack.label)}
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-[#123D88] hover:bg-[#071D45] text-white text-sm font-extrabold tracking-wider uppercase shadow-xl transition-all duration-300"
                aria-label="Get Started with Document Clearing Services"
              >
                <span>GET STARTED</span>
                <ArrowRight className="w-4 h-4 text-[#09A9D4] transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              {/* Secondary CTA */}
              <button
                id="hero-secondary-cta"
                onClick={onOpenContact}
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-[#123D88] hover:bg-[#071D45] text-white text-sm font-extrabold tracking-wider uppercase shadow-xl transition-all duration-300"
                aria-label="Speak with UAE PRO & Document Clearing Specialist"
              >
                <span>SPEAK WITH SPECIALIST</span>
                <PhoneCall className="w-4 h-4 text-[#09A9D4] transition-transform duration-300 group-hover:scale-110" />
              </button>
            </motion.div>

            {/* Authoritative UAE Department Trust Strip */}
            <motion.div
              variants={itemVariants}
              className="pt-6 border-t border-slate-300"
            >
              <div className="text-xs font-mono font-bold tracking-widest text-slate-700 uppercase mb-3 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#09A9D4]" />
                <span>DIRECT LIAISON ACROSS OFFICIAL UAE AUTHORITIES</span>
              </div>

              <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs sm:text-sm font-bold text-[#071D45]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#09A9D4]" />
                  <span>DET Dubai</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#09A9D4]" />
                  <span>MOFA Attestation</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#09A9D4]" />
                  <span>ICP Immigration</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#09A9D4]" />
                  <span>MOHRE Labor</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#09A9D4]" />
                  <span>Dubai Chambers</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE: Contemporary UAE Business Visual & Live Interactive Terminal Card */}
          <motion.div
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative mx-auto max-w-[480px] lg:max-w-none">
              
              {/* Main Architectural Visual Container */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-[#071D45] aspect-[4/5] sm:aspect-[5/6] lg:aspect-[4/5] w-full border border-white/80 ring-1 ring-[#123D88]/10">
                <img
                  src="/home/hero.png"
                  alt="Document Clearing Services in Dubai & UAE - New Guide Corporate Liaison Headquarters"
                  title="Document Clearing Services Dubai UAE - New Guide"
                  className="w-full h-full object-cover object-center filter saturate-[1.05] contrast-[1.05]"
                  loading="eager"
                  width="600"
                  height="750"
                />

                {/* Smooth Dark Gradient Overlay for Contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#071D45] via-[#071D45]/35 to-black/20 pointer-events-none" />

                {/* Top Badge: Dubai Certified Corporate Liaison */}
                <div className="absolute top-4 right-4 bg-[#071D45]/95 backdrop-blur-md px-3.5 py-1.5 rounded-lg border border-white/20 shadow-lg flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#09A9D4]" />
                  <span className="text-[11px] font-mono font-bold tracking-widest text-white uppercase">
                    DUBAI // ALL 7 EMIRATES
                  </span>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
