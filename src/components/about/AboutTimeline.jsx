import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function AboutTimeline() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  const stages = [
    {
      num: '01',
      title: 'UNDERSTAND',
      desc: 'We identify the exact requirement.',
      details: 'Audit of client objectives, entity structures, and required document legalizations before any filing begins.',
      side: 'left',
    },
    {
      num: '02',
      title: 'MAP',
      desc: 'We determine the relevant authority and process.',
      details: 'Routing transactions through MOFA, DET, MOHRE, ICP, or relevant Free Zone authorities with zero ambiguity.',
      side: 'right',
    },
    {
      num: '03',
      title: 'PREPARE',
      desc: 'Documentation is reviewed and prepared.',
      details: 'Strict pre-submission verification of Arabic translations, consular stamps, shareholder resolutions, and compliance checks.',
      side: 'left',
    },
    {
      num: '04',
      title: 'SUBMIT',
      desc: 'The application enters the appropriate channel.',
      details: 'Direct lodgment through official government portals and physical ministerial counters with authorized PRO credentials.',
      side: 'right',
    },
    {
      num: '05',
      title: 'FOLLOW',
      desc: 'Our team coordinates progress and requirements.',
      details: 'Continuous monitoring of approvals, department security clearances, and immediate resolution of any administrative queries.',
      side: 'left',
    },
    {
      num: '06',
      title: 'COMPLETE',
      desc: 'Final approval or cleared documentation is delivered.',
      details: 'Delivery of official trade licenses, stamped visas, attested certificates, and compliance archives directly to the client.',
      side: 'right',
    },
  ];

  return (
    <section
      id="journey"
      ref={containerRef}
      aria-label="The Journey from Request to Resolution"
      className="relative w-full bg-[#08244A] text-white pt-10 sm:pt-14 lg:pt-18 pb-6 sm:pb-8 lg:pb-10 px-4 sm:px-8 lg:px-14 overflow-hidden border-b border-white/10"
    >
      {/* Background Architectural Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,169,214,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,169,214,0.035)_1px,transparent_1px)] bg-[size:72px_72px] pointer-events-none" />

      {/* Atmospheric Cyan Center Aura */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[550px] h-[550px] bg-[#00A9D6]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto z-10">
        
        {/* Section Header: Tight Top Spacing */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-3 mb-3">
            <span className="w-6 h-[2px] bg-[#00A9D6]" />
            <span className="font-mono text-xs sm:text-sm font-bold tracking-[0.3em] uppercase text-[#00A9D6]">
              PROCEDURAL LIFECYCLE
            </span>
            <span className="w-6 h-[2px] bg-[#00A9D6]" />
          </div>

          <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[0.98] text-white mb-4">
            FROM REQUEST
            <br />
            <span className="text-[#00A9D6]">TO RESOLUTION.</span>
          </h2>

          <p className="text-base sm:text-lg text-white/75 font-normal max-w-xl mx-auto">
            A linear, accountable process designed to eliminate uncertainty at every government milestone.
          </p>
        </div>

        {/* ======================================================== */}
        {/* VERTICAL SCROLL STORY: Alternating Stages with Center Cyan Spine */}
        {/* ======================================================== */}
        <div className="relative max-w-5xl mx-auto">
          
          {/* Central Vertical Spine (Static background guide track) */}
          <div className="absolute left-6 md:left-1/2 top-4 bottom-4 w-[2px] -translate-x-1/2 bg-white/10 pointer-events-none" />

          {/* Active Progressively Illuminating Cyan Line */}
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-6 md:left-1/2 top-4 w-[2px] -translate-x-1/2 bg-gradient-to-b from-[#00A9D6] via-[#00A9D6] to-[#00A9D6] shadow-[0_0_15px_#00A9D6] pointer-events-none origin-top"
          />

          {/* Six Stages */}
          <div className="space-y-12 sm:space-y-16 relative">
            {stages.map((stage, idx) => {
              const isEven = idx % 2 === 1;

              return (
                <div
                  key={stage.num}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  
                  {/* Central Node Intersection Pulse */}
                  <div className="absolute left-6 md:left-1/2 top-4 -translate-x-1/2 z-20 flex items-center justify-center">
                    <div className="w-4 h-4 rounded-full bg-[#08244A] border-2 border-[#00A9D6] shadow-[0_0_12px_rgba(0,169,214,0.6)] flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#00A9D6]" />
                    </div>
                  </div>

                  {/* Stage Content: Placed Left or Right (NO boxes, pure editorial layout) */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className={`pl-14 md:pl-0 w-full md:w-1/2 ${
                      isEven ? 'md:pl-16 text-left' : 'md:pr-16 md:text-right'
                    } relative`}
                  >
                    
                    {/* Enormous Translucent Background Number Behind Stage */}
                    <div
                      className={`absolute -top-10 font-display font-black text-7xl sm:text-9xl text-white/[0.04] select-none pointer-events-none leading-none z-0 ${
                        isEven ? 'left-10 md:left-12' : 'left-10 md:right-12'
                      }`}
                    >
                      {stage.num}
                    </div>

                    {/* Stage Header */}
                    <div className="relative z-10">
                      <div className="font-mono text-xs sm:text-sm font-extrabold text-[#00A9D6] tracking-[0.25em] mb-1.5 uppercase">
                        STAGE {stage.num}
                      </div>

                      <h3 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight mb-2">
                        {stage.title}
                      </h3>

                      <p className="font-display text-base sm:text-lg font-semibold text-white/90 mb-1.5 leading-snug">
                        {stage.desc}
                      </p>

                      <p className="text-xs sm:text-sm text-white/60 font-sans font-normal leading-relaxed max-w-md inline-block">
                        {stage.details}
                      </p>
                    </div>

                  </motion.div>

                  {/* Empty Spacer Column for Asymmetric Alignment on Desktop */}
                  <div className="hidden md:block w-1/2" />

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
