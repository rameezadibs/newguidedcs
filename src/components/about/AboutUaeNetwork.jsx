import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function AboutUaeNetwork() {
  const [activeNodeId, setActiveNodeId] = useState('mofa');

  const nodes = [
    {
      id: 'mofa',
      index: '01',
      abbr: 'MOFA',
      name: 'Ministry of Foreign Affairs',
      role: 'Diplomatic attestation, international certificate legalization, apostille coordination, and bilateral consular verification for foreign entities.',
      scope: 'Embassy & Consular Clearance',
      coords: { x: 22, y: 18 }, // percentage on desktop canvas
    },
    {
      id: 'mohre',
      index: '02',
      abbr: 'MOHRE',
      name: 'Ministry of Human Resources & Emiratisation',
      role: 'Establishment quotas, corporate labor card issuance, electronic work contract registrations, and labor dispute advisory.',
      scope: 'Workforce & Labor Compliance',
      coords: { x: 50, y: 12 },
    },
    {
      id: 'icp',
      index: '03',
      abbr: 'ICP',
      name: 'Federal Authority for Identity & Citizenship',
      role: 'Federal citizenship registers, entry permit issuance, nationwide biometric appointments, and Golden Visa verification.',
      scope: 'Federal Identity Clearance',
      coords: { x: 78, y: 18 },
    },
    {
      id: 'gdrfa',
      index: '04',
      abbr: 'GDRFA',
      name: 'General Directorate of Residency & Foreigners Affairs',
      role: 'Dubai investor visas, employment residency stamping, establishment card renewals, and entry clearance tracking.',
      scope: 'Dubai Immigration Control',
      coords: { x: 86, y: 50 },
    },
    {
      id: 'det',
      index: '05',
      abbr: 'DET',
      name: 'Dubai Department of Economy & Tourism',
      role: 'Initial commercial approvals, mainland LLC incorporation, trade license issuance, renewals, and activity amendments.',
      scope: 'Commercial Licensing Authority',
      coords: { x: 78, y: 82 },
    },
    {
      id: 'municipality',
      index: '06',
      abbr: 'DUBAI MUNICIPALITY',
      name: 'Dubai Municipality',
      role: 'Commercial facility inspections, health and safety planning approvals, signage clearances, and engineering permits.',
      scope: 'Civic & Structural Approvals',
      coords: { x: 50, y: 88 },
    },
    {
      id: 'courts',
      index: '07',
      abbr: 'DUBAI COURTS',
      name: 'Dubai Courts & Notary Public',
      role: 'Memorandum of Association notarizations, corporate Power of Attorney execution, and legal translation attestations.',
      scope: 'Judicial & Notarial Verification',
      coords: { x: 22, y: 82 },
    },
    {
      id: 'freezones',
      index: '08',
      abbr: 'FREE ZONES',
      name: 'UAE Free Zone Authorities',
      role: 'Regulatory filings across DIFC, DMCC, JAFZA, DAFZA, Meydan, and Shams for 100% foreign-owned special economic operations.',
      scope: 'Special Economic Jurisdictions',
      coords: { x: 14, y: 50 },
    },
  ];

  const activeNode = nodes.find((n) => n.id === activeNodeId) || nodes[0];

  return (
    <section
      id="network"
      aria-label="UAE Regulatory Network"
      className="relative w-full bg-gradient-to-b from-[#DDF5FC] via-[#EBF7FD] to-[#F2F8FC] text-[#06162F] py-24 sm:py-32 lg:py-40 px-4 sm:px-8 lg:px-14 overflow-hidden border-b border-[#00A9D6]/20"
    >
      {/* Precision Transit / Blueprint Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,169,214,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,169,214,0.06)_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none" />

      {/* Subtle Atmospheric Conduction Circles */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border border-[#00A9D6]/15 pointer-events-none hidden lg:block" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] rounded-full border border-[#00A9D6]/20 pointer-events-none hidden lg:block" />

      <div className="relative max-w-7xl mx-auto z-10">
        
        {/* Section Header: Swiss Institutional Editorial Typography */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-[2px] bg-[#00A9D6]" />
            <span className="font-mono text-xs sm:text-sm font-bold tracking-[0.3em] uppercase text-[#00A9D6]">
              03 / ECOSYSTEM ARCHITECTURE
            </span>
          </div>

          <h2 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl tracking-tight leading-[0.98] text-[#06162F] mb-6">
            BUILT AROUND
            <br />
            <span className="text-[#123D88]">THE UAE SYSTEM.</span>
          </h2>

          <p className="text-base sm:text-xl text-[#08244A]/80 leading-relaxed max-w-2xl font-normal">
            New Guide operates within the network of authorities, departments and regulatory processes that keep businesses moving across the UAE.
          </p>
        </div>

        {/* ======================================================== */}
        {/* DESKTOP: ABSTRACT INSTITUTIONAL TRANSIT MAP DIAGRAM */}
        {/* ======================================================== */}
        <div className="hidden lg:block relative w-full h-[620px] bg-white/70 backdrop-blur-sm rounded-3xl border border-[#00A9D6]/25 shadow-xl overflow-hidden mb-8">
          
          {/* Subtle Institutional Coordinate Label */}
          <div className="absolute top-6 left-8 font-mono text-[11px] tracking-[0.2em] text-[#667085] flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#00A9D6] animate-pulse" />
            <span>REGULATORY CONDUCTION MATRIX // DUBAI CENTRAL HUB</span>
          </div>

          <div className="absolute top-6 right-8 font-mono text-[11px] tracking-[0.2em] text-[#667085]">
            <span>NODE SELECTION: </span>
            <span className="font-bold text-[#06162F]">{activeNode.abbr}</span>
          </div>

          {/* SVG Conduction Pathways between Central Hub and Authorities */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="cyanLineGrad" x1="50%" y1="50%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="#00A9D6" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#123D88" stopOpacity="0.25" />
              </linearGradient>
              <linearGradient id="activeCyanLineGrad" x1="50%" y1="50%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="#00A9D6" stopOpacity="1" />
                <stop offset="100%" stopColor="#00A9D6" stopOpacity="0.9" />
              </linearGradient>
            </defs>

            {nodes.map((node) => {
              const isActive = activeNodeId === node.id;
              return (
                <g key={`path-${node.id}`}>
                  {/* Base Network Conduit */}
                  <line
                    x1="50%"
                    y1="50%"
                    x2={`${node.coords.x}%`}
                    y2={`${node.coords.y}%`}
                    stroke={isActive ? '#00A9D6' : 'rgba(18, 61, 136, 0.18)'}
                    strokeWidth={isActive ? 2.5 : 1.25}
                    strokeDasharray={isActive ? 'none' : '4, 4'}
                    className="transition-all duration-300"
                  />
                  {/* Active Illuminated Pulse */}
                  {isActive && (
                    <circle
                      cx={`${node.coords.x}%`}
                      cy={`${node.coords.y}%`}
                      r="6"
                      fill="#00A9D6"
                      className="animate-ping opacity-75"
                    />
                  )}
                </g>
              );
            })}
          </svg>

          {/* Center Hub Node: NEW GUIDE */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            <motion.div
              whileHover={{ scale: 1.04 }}
              className="relative w-44 h-44 rounded-full bg-[#06162F] text-white flex flex-col items-center justify-center text-center p-4 border-2 border-[#00A9D6] shadow-[0_0_35px_rgba(0,169,214,0.35)] cursor-default"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#00A9D6] mb-1.5 animate-ping" />
              <span className="font-mono text-[10px] tracking-[0.25em] text-[#00A9D6] uppercase font-bold">
                CENTRAL LIAISON
              </span>
              <span className="font-display font-black text-xl tracking-tight text-white mt-0.5">
                NEW GUIDE
              </span>
              <span className="font-mono text-[9px] tracking-wider text-white/60 mt-1 uppercase">
                DOCUMENTS CLEARING
              </span>
            </motion.div>
          </div>

          {/* Surrounding Authority Nodes */}
          {nodes.map((node) => {
            const isActive = activeNodeId === node.id;
            return (
              <div
                key={node.id}
                style={{
                  top: `${node.coords.y}%`,
                  left: `${node.coords.x}%`,
                  transform: 'translate(-50%, -50%)',
                }}
                className="absolute z-20"
              >
                <button
                  onClick={() => setActiveNodeId(node.id)}
                  onMouseEnter={() => setActiveNodeId(node.id)}
                  className={`group relative text-left transition-all duration-300 focus:outline-none ${
                    isActive ? 'scale-105' : 'hover:scale-102'
                  }`}
                  aria-label={`View regulatory scope for ${node.abbr}`}
                >
                  <div
                    className={`px-4 py-3 rounded-2xl transition-all duration-300 flex items-center gap-3 ${
                      isActive
                        ? 'bg-[#06162F] text-white shadow-xl ring-2 ring-[#00A9D6] translate-y-[-2px]'
                        : 'bg-white text-[#06162F] border border-[#00A9D6]/30 shadow-sm hover:border-[#00A9D6] hover:shadow-md'
                    }`}
                  >
                    <span
                      className={`font-mono text-[11px] font-extrabold ${
                        isActive ? 'text-[#00A9D6]' : 'text-[#667085]'
                      }`}
                    >
                      {node.index}
                    </span>
                    <div>
                      <span className="font-display font-extrabold text-sm tracking-tight block">
                        {node.abbr}
                      </span>
                      <span
                        className={`text-[10px] font-mono tracking-wider block ${
                          isActive ? 'text-[#DDF5FC]' : 'text-[#667085]'
                        }`}
                      >
                        {node.scope}
                      </span>
                    </div>
                  </div>
                </button>
              </div>
            );
          })}

          {/* Bottom Interactive Authority Detail Drawer */}
          <div className="absolute bottom-6 left-8 right-8 z-30 pointer-events-none">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeNode.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.3 }}
                className="pointer-events-auto bg-[#06162F] text-white p-5 rounded-2xl border border-[#00A9D6]/40 shadow-2xl flex flex-col md:flex-row md:items-center justify-between gap-4 max-w-4xl mx-auto"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-[#00A9D6] font-bold">
                      NODE {activeNode.index} //
                    </span>
                    <span className="font-display font-extrabold text-base text-white">
                      {activeNode.name} ({activeNode.abbr})
                    </span>
                  </div>
                  <p className="text-sm text-white/80 max-w-2xl font-normal">
                    {activeNode.role}
                  </p>
                </div>

                <div className="shrink-0 flex items-center gap-3 pt-2 md:pt-0 border-t md:border-t-0 md:border-l border-white/10 md:pl-5">
                  <div className="font-mono text-[11px] text-[#00A9D6] uppercase tracking-wider font-semibold">
                    DIRECT EXPEDITED LIAISON
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

        {/* ======================================================== */}
        {/* MOBILE & TABLET: RESPONSIVE VERTICAL NETWORK ARCHITECTURE */}
        {/* ======================================================== */}
        <div className="block lg:hidden space-y-4">
          
          {/* Central Hub Header Card for Mobile */}
          <div className="bg-[#06162F] text-white p-6 rounded-2xl border-2 border-[#00A9D6] shadow-lg mb-6 text-center">
            <span className="font-mono text-xs tracking-[0.25em] text-[#00A9D6] uppercase font-bold block mb-1">
              CENTRAL COORDINATION HUB
            </span>
            <span className="font-display font-black text-2xl tracking-tight text-white block">
              NEW GUIDE
            </span>
            <span className="text-xs text-white/70 font-mono tracking-wider block mt-1">
              DOCUMENTS CLEARING SERVICES CO.
            </span>
          </div>

          {/* List of 8 Authority Conduction Nodes */}
          <div className="space-y-3">
            {nodes.map((node) => {
              const isActive = activeNodeId === node.id;
              return (
                <div
                  key={`mob-${node.id}`}
                  className={`rounded-2xl transition-all duration-200 border ${
                    isActive
                      ? 'bg-[#06162F] text-white border-[#00A9D6] shadow-md p-5'
                      : 'bg-white text-[#06162F] border-[#00A9D6]/20 p-4'
                  }`}
                  onClick={() => setActiveNodeId(node.id)}
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <span
                        className={`font-mono text-xs font-bold ${
                          isActive ? 'text-[#00A9D6]' : 'text-[#667085]'
                        }`}
                      >
                        {node.index}
                      </span>
                      <span className="font-display font-extrabold text-base tracking-tight">
                        {node.abbr}
                      </span>
                    </div>
                    <span
                      className={`font-mono text-[10px] tracking-wider uppercase ${
                        isActive ? 'text-[#00A9D6]' : 'text-[#667085]'
                      }`}
                    >
                      {node.scope}
                    </span>
                  </div>

                  <div className="mt-2 text-xs font-sans">
                    <p className={`font-semibold ${isActive ? 'text-white' : 'text-[#08244A]'}`}>
                      {node.name}
                    </p>
                    {isActive && (
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="mt-2 pt-2 border-t border-white/10 text-white/80 leading-relaxed font-normal"
                      >
                        {node.role}
                      </motion.p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
