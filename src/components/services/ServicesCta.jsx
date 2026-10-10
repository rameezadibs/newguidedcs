import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function ServicesCta({ onOpenAssistance }) {
  const [outcomeText, setOutcomeText] = useState('');

  const handleOutcomeSubmit = (e) => {
    e.preventDefault();
    const query = outcomeText.trim();
    if (query) {
      onOpenAssistance(`Requirement: ${query}`);
    } else {
      onOpenAssistance('Outcome-Based Procedure Consultation');
    }
  };

  return (
    <section className="relative py-24 sm:py-36 bg-[#FFFFFF] text-[#111827] overflow-hidden border-t border-slate-200">
      
      {/* Precision Blueprint Grid Lines */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(18, 61, 136, 0.04) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(18, 61, 136, 0.04) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
        }}
      />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Subtle Top Label */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F3F8FC] border border-slate-200">
            <span className="w-2 h-2 rounded-full bg-[#00A9D6]" />
            <span className="text-xs font-mono font-bold tracking-[0.2em] text-[#087ED1] uppercase">
              NOT SURE WHICH SERVICE APPLIES?
            </span>
          </div>
        </div>

        {/* Huge Typographic Statement */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-extrabold tracking-tight text-[#06162F] leading-[0.93]">
            TELL US <br />
            <span className="text-[#087ED1]">THE OUTCOME.</span> <br />
            WE&apos;LL FIND <br />
            <span className="text-[#00A9D6]">THE ROUTE.</span>
          </h2>
        </div>

        {/* One Large Interactive CTA Field */}
        <div className="max-w-3xl mx-auto">
          <form onSubmit={handleOutcomeSubmit} className="space-y-4">
            
            <label className="block text-center text-xs sm:text-sm font-mono font-bold uppercase tracking-wider text-[#08244A]">
              WHAT DO YOU NEED TO GET DONE?
            </label>

            <div className="relative flex items-center bg-[#F3F8FC] rounded-2xl border-2 border-slate-300 focus-within:border-[#00A9D6] focus-within:bg-white shadow-xl transition-all duration-300 overflow-hidden p-2 sm:p-2.5">
              <input
                type="text"
                value={outcomeText}
                onChange={(e) => setOutcomeText(e.target.value)}
                placeholder="Describe your requirement... (e.g. need to open a trade license and bring 4 staff to Dubai)"
                className="w-full py-3.5 sm:py-4 px-4 text-sm sm:text-base md:text-lg text-[#06162F] placeholder-slate-400 bg-transparent focus:outline-none font-medium"
              />

              <button
                type="submit"
                className="shrink-0 inline-flex items-center justify-center gap-2 px-5 sm:px-7 py-3.5 sm:py-4 rounded-xl bg-[#06162F] hover:bg-[#00A9D6] text-white hover:text-[#06162F] font-display font-extrabold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 shadow-md cursor-pointer"
                aria-label="Submit requirement description"
              >
                <span className="hidden sm:inline">FIND ROUTE</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Approachable Supporting Copy Below Field */}
            <p className="text-center text-xs sm:text-sm text-[#667085] leading-relaxed pt-2">
              No government terminology required. <br />
              Just tell us what you&apos;re trying to accomplish.
            </p>

          </form>

          {/* Trust Guarantees */}
          <div className="mt-12 pt-8 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
            <div className="p-3">
              <div className="text-xs font-mono font-bold text-[#06162F]">NO GUESSWORK</div>
              <div className="text-[11px] text-[#667085] mt-0.5">We map your goal directly to the legal UAE statutory process</div>
            </div>
            <div className="p-3">
              <div className="text-xs font-mono font-bold text-[#06162F]">CLEAR TIMELINES</div>
              <div className="text-[11px] text-[#667085] mt-0.5">Realistic step-by-step milestones with zero artificial claims</div>
            </div>
            <div className="p-3">
              <div className="text-xs font-mono font-bold text-[#06162F]">CONFIDENTIAL HANDLING</div>
              <div className="text-[11px] text-[#667085] mt-0.5">Complete NDA and data privacy protection across all submissions</div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
