import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, ArrowRight, CornerDownRight, HelpCircle } from 'lucide-react';
import { DIRECTORY_SERVICES } from './servicesData';

export default function ServicesSearch({ onOpenAssistance, onSelectCategory, onNavigateService }) {
  const [searchQuery, setSearchQuery] = useState('');

  const sampleSuggestions = [
    'Golden Visa',
    'Trade Licence',
    'MOFA',
    'POA',
    'Municipality Approval',
  ];

  // Compile all search items from the 17 approved services and procedures
  const allSearchableItems = useMemo(() => {
    const items = [];

    DIRECTORY_SERVICES.forEach((srv) => {
      // Add the service itself
      items.push({
        id: `srv-${srv.id}`,
        name: srv.title,
        category: srv.title,
        categoryId: srv.id,
        categoryIndex: srv.num,
        authority: srv.statValue,
        type: srv.context,
        scope: srv.description,
        isCategory: true,
      });

      // Add each procedure
      srv.procedures.forEach((proc, pIdx) => {
        items.push({
          id: `proc-${srv.id}-${pIdx}`,
          name: proc,
          category: srv.title,
          categoryId: srv.id,
          categoryIndex: srv.num,
          authority: srv.statValue,
          type: srv.context,
          scope: srv.description,
          isCategory: false,
        });
      });
    });

    return items;
  }, []);

  // Filter items dynamically based on searchQuery
  const filteredResults = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return [];

    return allSearchableItems.filter((item) => {
      return (
        item.name.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q) ||
        item.authority.toLowerCase().includes(q) ||
        item.type.toLowerCase().includes(q) ||
        item.scope.toLowerCase().includes(q)
      );
    });
  }, [searchQuery, allSearchableItems]);

  const handleSelectResult = (item) => {
    if (onNavigateService && item.categoryId) {
      onNavigateService(item.categoryId);
    } else if (onSelectCategory && item.categoryId) {
      onSelectCategory(item.categoryId);
    }
  };

  return (
    <section id="service-search-section" className="relative py-20 sm:py-28 bg-[#F3F8FC] text-[#111827] overflow-hidden border-t border-b border-slate-200">
      
      {/* Precision Blueprint Grid Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-50"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(18, 61, 136, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(18, 61, 136, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#08244A]/5 border border-[#08244A]/10 text-xs font-mono font-bold tracking-[0.2em] text-[#087ED1] uppercase mb-4">
            <Search className="w-3.5 h-3.5 text-[#00A9D6]" />
            <span>REAL-TIME PROCEDURAL LOOKUP</span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-display font-extrabold tracking-tight text-[#06162F] leading-[0.98]">
            KNOW WHAT <br />
            <span className="text-[#087ED1]">YOU&apos;RE LOOKING FOR?</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#667085] leading-relaxed max-w-xl mx-auto">
            Search our comprehensive directory of 60+ UAE government clearances, attestations, and statutory procedures.
          </p>
        </div>

        {/* Large Search Input */}
        <div className="relative max-w-3xl mx-auto">
          <div className="relative flex items-center bg-white rounded-2xl border-2 border-slate-300 focus-within:border-[#00A9D6] shadow-xl transition-all duration-300 overflow-hidden">
            <div className="pl-5 text-[#087ED1]">
              <Search className="w-6 h-6" />
            </div>

            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search services, authorities or procedures..."
              className="w-full py-4 sm:py-5 px-4 text-base sm:text-lg text-[#06162F] placeholder-slate-400 bg-transparent focus:outline-none font-medium"
            />

            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="pr-5 text-slate-400 hover:text-[#06162F] transition-colors"
                aria-label="Clear Search Query"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>

          {/* Sample Quick Searches */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-xs">
            <span className="font-mono text-[#667085] font-semibold">Try:</span>
            {sampleSuggestions.map((term) => (
              <button
                key={term}
                onClick={() => setSearchQuery(term)}
                className="px-3 py-1 rounded-lg bg-white hover:bg-[#DDF5FC] border border-slate-200 text-[#06162F] font-mono font-medium transition-colors cursor-pointer"
              >
                &ldquo;{term}&rdquo;
              </button>
            ))}
          </div>

          {/* DYNAMIC RESULTS CONTAINER */}
          <AnimatePresence>
            {searchQuery.trim().length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.2 }}
                className="mt-6 bg-white rounded-2xl border border-slate-200 shadow-2xl p-4 sm:p-6 divide-y divide-slate-100 max-h-[500px] overflow-y-auto"
              >
                <div className="pb-3 flex items-center justify-between text-xs font-mono text-[#667085]">
                  <span>FOUND {filteredResults.length} MATCHING UAE PROCEDURES</span>
                  <span>CLICK ANY RECORD TO VIEW DIRECTORY SPECIFICATION</span>
                </div>

                {filteredResults.length > 0 ? (
                  <div className="divide-y divide-slate-100">
                    {filteredResults.map((item) => (
                      <div
                        key={item.id}
                        onClick={() => handleSelectResult(item)}
                        className="group py-4 px-2 sm:px-3 hover:bg-[#F3F8FC] rounded-xl transition-all duration-200 cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                      >
                        <div className="space-y-1">
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-[#08244A] text-white">
                              SEC {item.categoryIndex}
                            </span>
                            <span className="text-[10px] font-mono font-bold text-[#087ED1] uppercase">
                              {item.category}
                            </span>
                            <span className="text-[10px] font-mono text-slate-400">
                              // {item.authority}
                            </span>
                          </div>

                          <h4 className="text-base font-bold text-[#06162F] group-hover:text-[#087ED1] transition-colors">
                            {item.name}
                          </h4>

                          <p className="text-xs text-[#667085] line-clamp-2 max-w-xl">
                            {item.scope}
                          </p>
                        </div>

                        <div className="flex items-center gap-2 shrink-0 self-end sm:self-center">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              const text = encodeURIComponent(`Hello New Guide, I would like to inquire about: ${item.name}.`);
                              window.open(`https://wa.me/971525453323?text=${text}`, '_blank');
                            }}
                            className="px-3 py-1.5 rounded-lg bg-[#08244A] hover:bg-[#123D88] text-white text-[11px] font-bold font-mono tracking-wider uppercase transition-colors cursor-pointer"
                          >
                            Inquire Now
                          </button>
                          <div className="w-8 h-8 rounded-lg bg-slate-100 group-hover:bg-[#00A9D6] group-hover:text-white flex items-center justify-center transition-colors">
                            <CornerDownRight className="w-4 h-4 text-[#06162F] group-hover:text-white" />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  /* No Exact Match State */
                  <div className="py-8 text-center space-y-3">
                    <div className="text-slate-400 font-mono text-sm">
                      No direct catalog match for &ldquo;{searchQuery}&rdquo;.
                    </div>
                    <p className="text-xs text-[#667085] max-w-md mx-auto">
                      Our regulatory liaison extends beyond listed names. We handle non-standard ministerial waivers, customs exemptions, and unique commercial filings.
                    </p>
                    <button
                      onClick={() => onOpenAssistance(`Custom Inquiry: ${searchQuery}`)}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#08244A] text-white text-xs font-mono font-bold uppercase tracking-wider hover:bg-[#123D88] transition-colors"
                    >
                      <span>ASK NEW GUIDE ABOUT &ldquo;{searchQuery}&rdquo;</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#00A9D6]" />
                    </button>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>

          {/* CAN'T FIND IT? CALLOUT BOX */}
          <div className="mt-12 p-6 rounded-2xl bg-white border border-slate-200 shadow-md flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-[#DDF5FC] flex items-center justify-center shrink-0 text-[#087ED1]">
                <HelpCircle className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm sm:text-base font-display font-extrabold text-[#06162F] uppercase tracking-tight">
                  CAN&apos;T FIND IT?
                </h4>
                <p className="text-xs sm:text-sm text-[#667085] mt-0.5">
                  Tell us what you need and we&apos;ll identify the correct government procedure.
                </p>
              </div>
            </div>

            <button
              onClick={() => onOpenAssistance('Service Search Assistance - Unlisted Need')}
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-xl bg-[#08244A] hover:bg-[#123D88] text-white font-mono text-xs font-extrabold tracking-wider uppercase transition-all duration-300 shadow shrink-0 cursor-pointer"
            >
              <span>ASK NEW GUIDE</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#00A9D6]" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
