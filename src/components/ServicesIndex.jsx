import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronRight, ShieldCheck } from 'lucide-react';

export default function ServicesIndex({ onOpenAssistance, onSelectService }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const services = [
    {
      id: 'government-transactions',
      num: '01',
      title: 'Government Transactions',
      tagline: 'Direct clearance across all federal, ministerial & municipal authorities.',
      description: 'Authorized representation and clearing with Ministry of Foreign Affairs (MOFA), Ministry of Human Resources (MOHRE), and GDRFA Immigration for swift, zero-rejection government filings.',
      image: '/home/1.png',
      altText: 'Government Transactions Clearing Services in Dubai & UAE - New Guide',
      tags: ['MOFA Attestation', 'MOHRE Filings', 'GDRFA Immigration', 'Federal Approvals'],
      turnaround: 'Same-Day Digital Processing',
    },
    {
      id: 'dubai-municipality',
      num: '02',
      title: 'Dubai Municipality',
      tagline: 'Engineering permits, health & safety compliance, and food clearances.',
      description: 'Complete clearance for Dubai Municipality permits, food safety compliance, engineering plans, layout approvals, health & safety certificates, and environmental filings.',
      image: '/home/2.png',
      altText: 'Dubai Municipality Permit Clearing Services - New Guide',
      tags: ['DM Layout Approvals', 'Food & Health Safety', 'Engineering Permits', 'Environmental Compliance'],
      turnaround: '24–48 Hours Expedited',
    },
    {
      id: 'dubai-economy-development',
      num: '03',
      title: 'Dubai Economy Development',
      tagline: 'Commercial licensing, initial approvals & trade name reservation.',
      description: 'Direct liaison with Dubai Economy & Tourism (DET) for trade license issuance, amendment, renewal, commercial activity additions, and statutory corporate registrations.',
      image: '/home/3.png',
      altText: 'Dubai Economy Development DET Trade Licensing Services - New Guide',
      tags: ['DET Trade Licenses', 'Initial Approvals', 'Activity Additions', 'Commercial Registration'],
      turnaround: '3–5 Business Days',
    },
    {
      id: 'online-poa',
      num: '04',
      title: 'Online POA',
      tagline: 'Digital Power of Attorney drafting, notary attestation & remote execution.',
      description: 'End-to-end digital Power of Attorney (POA) drafting, official Dubai Courts notary attestation, MOFA legalization, and legal Arabic translation for corporate & personal representation.',
      image: '/home/4.png',
      altText: 'Online Power of Attorney POA Drafting & Notary Clearing Dubai - New Guide',
      tags: ['Digital Notary Attestation', 'Corporate POA', 'Personal POA', 'MOFA Legalization'],
      turnaround: 'Fast-Track Remote Execution',
    },
  ];

  const activeService = services[activeIndex];

  return (
    <section id="services" aria-labelledby="services-heading" className="relative pt-12 sm:pt-16 pb-12 sm:pb-16 bg-[#F8FAFC] overflow-hidden">
      {/* Subtle blueprint grid overlay — light version */}
      <div className="absolute inset-0 bg-grid-blueprint opacity-40 pointer-events-none" />

      {/* Soft cyan/blue ambient glows */}
      <div className="absolute top-1/4 -right-48 w-96 h-96 bg-[#09A9D4]/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-48 w-96 h-96 bg-[#123D88]/6 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">

        {/* SEO Section Header */}
        <div className="max-w-3xl mb-8 sm:mb-10">
          <h2 id="services-heading" className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight leading-tight text-[#071D45] mb-5">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-7 h-[2px] bg-[#09A9D4]" />
              <span className="text-xs sm:text-sm font-mono font-bold tracking-[0.22em] text-[#09A9D4] uppercase">
                OUR SERVICES
              </span>
            </div>
            DOCUMENT CLEARING & <br />
            <span className="text-[#123D88]">PRO SERVICES IN DUBAI.</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed font-normal">
            Authorized government liaison for <strong>MOFA attestations</strong>, <strong>company formation</strong>, <strong>trade licensing</strong>, and <strong>Golden Visas</strong> across Dubai and all 7 Emirates.
          </p>
        </div>

        {/* Interactive Editorial Service Index */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">

          {/* LEFT: Horizontal Rows Service Index */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="divide-y divide-slate-200 border-t border-b border-slate-200" role="tablist" aria-label="UAE Document Clearing & PRO Services Catalog">
              {services.map((service, idx) => {
                const isActive = activeIndex === idx;
                return (
                  <div
                    key={service.id}
                    id={`service-row-${service.id}`}
                    role="tab"
                    aria-selected={isActive}
                    onMouseEnter={() => setActiveIndex(idx)}
                    onClick={() => {
                      setActiveIndex(idx);
                    }}
                    className={`group relative cursor-pointer py-5 sm:py-6 px-2 sm:px-4 transition-all duration-300 ${
                      isActive ? 'bg-[#123D88]/5' : 'hover:bg-slate-50'
                    }`}
                  >
                    {/* Active Left Cyan Border Indicator */}
                    {isActive && (
                      <motion.div
                        layoutId="activeServiceBar"
                        className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#09A9D4]"
                        transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                      />
                    )}

                    <div className="flex items-center justify-between gap-4">
                      {/* Service Number & Title */}
                      <div className="flex items-center gap-4 sm:gap-6">
                        <span
                          className={`font-mono text-xs sm:text-sm font-bold tracking-wider transition-colors duration-300 ${
                            isActive ? 'text-[#09A9D4]' : 'text-slate-400 group-hover:text-slate-600'
                          }`}
                        >
                          {service.num}
                        </span>

                        <h3
                          className={`text-lg sm:text-xl font-display font-bold transition-all duration-300 ${
                            isActive
                              ? 'text-[#071D45] translate-x-1 sm:translate-x-2'
                              : 'text-slate-700 group-hover:text-[#071D45] group-hover:translate-x-1'
                          }`}
                        >
                          {service.title}
                        </h3>
                      </div>

                      {/* Right Arrow indicator */}
                      <div className="flex items-center gap-2">
                        <span
                          className={`text-xs uppercase tracking-wider font-mono hidden md:inline-block transition-opacity duration-300 ${
                            isActive ? 'opacity-100 text-[#09A9D4]' : 'opacity-0'
                          }`}
                        >
                          Explore
                        </span>
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                            isActive
                              ? 'bg-[#09A9D4] text-white translate-x-1'
                              : 'bg-slate-100 text-slate-400 group-hover:bg-slate-200 group-hover:text-slate-700'
                          }`}
                        >
                          <ChevronRight className="w-4 h-4" />
                        </div>
                      </div>
                    </div>

                    {/* Expandable Supporting Sentence & Deliverables */}
                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <p className="mt-3 text-sm text-slate-600 pl-8 sm:pl-10 max-w-xl leading-relaxed">
                            {service.description}
                          </p>

                          {/* Quick Deliverable Tags */}
                          <div className="mt-3 pl-8 sm:pl-10 flex flex-wrap gap-1.5">
                            {service.tags.map((tag) => (
                              <span
                                key={tag}
                                className="text-[10px] uppercase font-mono tracking-wider px-2 py-0.5 rounded bg-[#123D88]/10 text-[#123D88] border border-[#123D88]/15 font-bold"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>

                          {/* Mobile-only image preview */}
                          <div className="block lg:hidden mt-4 pl-8 sm:pl-10">
                            <div className="aspect-[16/9] w-full rounded-lg overflow-hidden relative shadow-md">
                              <img
                                src={service.image}
                                alt={service.altText}
                                title={service.title}
                                className="w-full h-full object-cover"
                                loading="lazy"
                                width="480"
                                height="270"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                              <div className="absolute bottom-2 left-2 right-2 flex justify-between items-center text-[10px] text-white">
                                <span className="font-mono text-[#09A9D4] font-bold">{service.turnaround}</span>
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    onOpenAssistance();
                                  }}
                                  className="underline font-bold"
                                  aria-label={`Inquire about ${service.title}`}
                                >
                                  Inquire Now
                                </button>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            {/* Bottom View All Services CTA */}
            <div className="pt-5 sm:pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <button
                id="services-view-all-btn"
                onClick={onOpenAssistance}
                className="inline-flex items-center gap-2.5 text-xs font-bold font-mono tracking-widest text-[#123D88] hover:text-[#09A9D4] transition-colors uppercase group"
                aria-label="View all document clearing and corporate PRO services"
              >
                <span>VIEW ALL SERVICES & CONSULTATION</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <span className="text-[11px] font-mono text-slate-400">
                CUSTOM PACKAGES AVAILABLE
              </span>
            </div>
          </div>

          {/* RIGHT: Large Changing Visual Panel (Desktop) */}
          <div className="hidden lg:block lg:col-span-5 relative">
            <div className="sticky top-28 h-[580px] w-full rounded-xl overflow-hidden bg-slate-200 border border-slate-200 shadow-xl flex flex-col justify-end">

              {/* Dynamic Image with Crossfade Transition */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeService.id}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                  className="absolute inset-0 w-full h-full"
                >
                  <img
                    src={activeService.image}
                    alt={activeService.altText}
                    title={activeService.title}
                    className="w-full h-full object-cover filter contrast-[1.05] brightness-95"
                    loading="eager"
                    width="550"
                    height="580"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071D45] via-[#071D45]/40 to-transparent" />
                </motion.div>
              </AnimatePresence>

              {/* Cyan accent line at top */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#09A9D4] via-[#123D88] to-transparent z-20" />

              {/* Top Service Badge */}
              <div className="absolute top-6 left-6 z-20 bg-[#071D45]/90 backdrop-blur-md px-3.5 py-1.5 rounded-lg border border-white/15">
                <span className="text-xs font-mono font-bold text-[#09A9D4] tracking-widest mr-2">
                  INDEX {activeService.num}
                </span>
                <span className="text-[11px] uppercase tracking-wider text-white/80">
                  {activeService.turnaround}
                </span>
              </div>

              {/* Bottom Content Card over Image */}
              <div className="relative z-20 p-8 bg-gradient-to-t from-[#071D45] to-[#071D45]/70 backdrop-blur-sm border-t border-white/10">
                <div className="text-xs font-mono font-semibold text-[#09A9D4] uppercase tracking-widest mb-1.5">
                  {activeService.tagline}
                </div>
                <h4 className="text-2xl font-display font-bold text-white mb-3">
                  {activeService.title}
                </h4>
                <p className="text-sm text-white/70 line-clamp-3 mb-6">
                  {activeService.description}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <div className="flex items-center gap-2 text-xs text-[#09A9D4] font-mono">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#09A9D4]" />
                    <span>Official UAE Department Filing</span>
                  </div>
                  <button
                    onClick={onOpenAssistance}
                    className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-white bg-[#123D88] hover:bg-[#071D45] px-4 py-2 rounded-lg shadow transition-all duration-300"
                    aria-label={`Request filing for ${activeService.title}`}
                  >
                    <span>Request Filing</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
