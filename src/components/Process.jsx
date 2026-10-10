import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, MessageSquareText, ClipboardCheck, Cog, Award } from 'lucide-react';

export default function Process({ onOpenAssistance }) {
  const steps = [
    {
      num: '01',
      title: 'REQUIREMENT AUDIT & CONSULTATION',
      desc: 'Submit your documentation for a free regulatory assessment, MOFA attestation review, or DET business setup consultation.',
      icon: MessageSquareText,
      detail: 'Free regulatory assessment & document audit',
      offset: 'lg:translate-y-0',
    },
    {
      num: '02',
      title: 'PRE-CLEARANCE & COMPLIANCE CHECK',
      desc: 'Our PRO specialists audit prerequisites against current UAE ministerial guidelines to eliminate rejections or fines.',
      icon: ClipboardCheck,
      detail: 'Pre-check to eliminate rejections or penalties',
      offset: 'lg:translate-y-8',
    },
    {
      num: '03',
      title: 'GOVERNMENT DEPARTMENT FILING',
      desc: 'Dedicated on-ground PRO officers execute filings across MOFA, DET, MOHRE, GDRFA, and Dubai Municipality.',
      icon: Cog,
      detail: 'Real-time progress updates & proactive follow-up',
      offset: 'lg:translate-y-0',
    },
    {
      num: '04',
      title: 'FINAL APPROVAL & COURIER DELIVERY',
      desc: 'Receive officially stamped attestations, approved trade licenses, or completed Golden Visas with digital & physical delivery.',
      icon: Award,
      detail: 'Full digital delivery & physical document courier',
      offset: 'lg:translate-y-8',
    },
  ];

  return (
    <section id="process" aria-labelledby="process-heading" className="relative pt-12 sm:pt-16 pb-12 sm:pb-16 bg-white overflow-hidden">
      {/* Background Subtle Blueprint Grid */}
      <div className="absolute inset-0 bg-grid-blueprint opacity-30 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* SEO Section Header */}
        <div className="max-w-3xl mb-8 sm:mb-12">
          <h2 id="process-heading" className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold text-[#071D45] tracking-tight leading-[1.08] mb-4">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-7 h-[2px] bg-[#09A9D4]" />
              <span className="text-xs sm:text-sm font-mono font-bold tracking-[0.22em] text-[#09A9D4] uppercase">
                OUR PROCESS & HOW IT WORKS
              </span>
            </div>
            DOCUMENT CLEARING & PRO PROCESS. <br />
            <span className="text-[#123D88]">FROM REQUIREMENT TO RESOLUTION.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#667085] max-w-xl font-normal leading-relaxed">
            Our 4-stage <strong>document clearing process</strong> and <strong>UAE government liaison workflow</strong> is engineered to eliminate bureaucracy, prevent rejections, and accelerate your business operations.
          </p>
        </div>

        {/* Continuous Visual Journey Container with The Guiding Line */}
        <div className="relative">
          
          {/* Continuous Curved Guiding Line (Desktop SVG) */}
          <div className="hidden lg:block absolute inset-0 pointer-events-none z-0">
            <svg
              className="w-full h-full overflow-visible"
              viewBox="0 0 1200 320"
              fill="none"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="processGuidingLine" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#123D88" stopOpacity="0.4" />
                  <stop offset="50%" stopColor="#09A9D4" stopOpacity="1" />
                  <stop offset="100%" stopColor="#071D45" stopOpacity="0.8" />
                </linearGradient>
              </defs>

              {/* Naturally curving path weaving through all 4 stages */}
              <motion.path
                d="M 50,110 C 220,110 260,210 380,210 C 500,210 560,90 680,90 C 800,90 850,210 1000,190 C 1080,180 1140,120 1180,120"
                stroke="url(#processGuidingLine)"
                strokeWidth="2.5"
                strokeLinecap="round"
                fill="none"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
              />

              {/* Waypoint nodes along the path */}
              <circle cx="140" cy="110" r="5" fill="#09A9D4" />
              <circle cx="430" cy="200" r="5" fill="#09A9D4" />
              <circle cx="730" cy="95" r="5" fill="#09A9D4" />
              <circle cx="1020" cy="190" r="5" fill="#123D88" />
            </svg>
          </div>

          {/* Continuous Curved Guiding Line (Mobile Vertical Path) */}
          <div className="block lg:hidden absolute left-6 top-8 bottom-8 w-[2px] bg-gradient-to-b from-[#123D88] via-[#09A9D4] to-[#071D45] pointer-events-none z-0" />

          {/* 4 Stages (Asymmetric Editorial Journey) */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.num}
                  className={`relative flex flex-col justify-between pl-14 sm:pl-16 lg:pl-0 ${step.offset} transition-transform duration-300`}
                >
                  {/* Step Marker Node */}
                  <div className="absolute left-3 lg:static -top-1.5 lg:mb-6 flex items-center lg:justify-between w-full">
                    {/* Node Circle */}
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#071D45] text-white flex items-center justify-center border-2 border-[#09A9D4] shadow-md z-10">
                      <span className="font-mono text-xs font-bold">{index + 1}</span>
                    </div>

                    {/* Desktop Icon pill */}
                    <div className="hidden lg:flex w-9 h-9 rounded-full bg-[#F7F6F1] text-[#123D88] items-center justify-center border border-[#123D88]/15">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Stage Content */}
                  <div className="bg-[#F7F6F1]/80 backdrop-blur-xs p-6 border-t-2 border-[#123D88]/20 hover:border-[#09A9D4] transition-colors duration-300">
                    {/* Large Number */}
                    <div className="font-mono text-xs sm:text-sm font-bold text-[#09A9D4] tracking-widest mb-2">
                      STAGE {step.num}
                    </div>

                    {/* Stage Title */}
                    <h3 className="text-lg sm:text-xl font-display font-extrabold text-[#071D45] tracking-tight leading-snug mb-3">
                      {step.title}
                    </h3>

                    {/* Short Description */}
                    <p className="text-sm text-[#667085] leading-relaxed mb-4">
                      {step.desc}
                    </p>

                    {/* Key Detail Indicator */}
                    <div className="pt-3 border-t border-[#123D88]/10 flex items-center gap-2 text-[11px] font-mono text-[#071D45]/80">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#09A9D4] shrink-0" />
                      <span>{step.detail}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* Process Resolution Banner */}
        <div className="mt-10 lg:mt-12 p-6 sm:p-8 bg-[#071D45] text-white flex flex-col sm:flex-row items-center justify-between gap-6 border-l-4 border-[#09A9D4] shadow-xl">
          <div className="max-w-xl text-center sm:text-left">
            <div className="text-xs font-mono font-bold text-[#09A9D4] tracking-widest uppercase mb-1">
              ACCELERATED RESOLUTION
            </div>
            <div className="text-lg sm:text-xl font-display font-bold">
              Have an urgent ministry submission or pending license?
            </div>
            <p className="text-xs sm:text-sm text-white/70 mt-1">
              Our emergency PRO team can review and file within the same business cycle.
            </p>
          </div>

          <button
            id="process-expedited-btn"
            onClick={() => {
              const text = encodeURIComponent('Hello New Guide, I would like to start an expedited document review and clearance.');
              window.open(`https://wa.me/971525453323?text=${text}`, '_blank');
            }}
            className="shrink-0 px-7 py-4 rounded-xl bg-[#123D88] hover:bg-[#071D45] text-white text-xs font-extrabold uppercase tracking-widest shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 flex items-center gap-2 cursor-pointer"
            aria-label="Start Expedited Document Review and Clearance"
          >
            <span>Start Expedited Review</span>
            <ArrowRight className="w-4 h-4 text-[#09A9D4]" />
          </button>
        </div>

      </div>
    </section>
  );
}
