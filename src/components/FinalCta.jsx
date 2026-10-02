import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle } from 'lucide-react';

export default function FinalCta({ onOpenAssistance }) {
  return (
    <section className="relative py-28 sm:py-36 bg-gradient-to-br from-[#123D88] via-[#0E3374] to-[#071D45] text-white overflow-hidden">
      
      {/* Enormous semi-transparent NG in background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0">
        <span className="font-display font-black text-[35vw] text-white/[0.04] leading-none tracking-tighter">
          NG
        </span>
      </div>

      {/* Blueprint Grid Lines Overlay */}
      <div className="absolute inset-0 bg-grid-blueprint-dark opacity-15 pointer-events-none" />

      {/* Sweeping Gold Guiding Line across composition */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-visible">
        <svg
          className="w-full h-full"
          viewBox="0 0 1440 600"
          fill="none"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M -100,500 C 400,550 700,200 1100,320 C 1300,380 1450,150 1550,100"
            stroke="#D5AF38"
            strokeWidth="2.5"
            strokeOpacity="0.75"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.8, ease: 'easeOut' }}
          />
          <circle cx="1100" cy="320" r="4.5" fill="#D5AF38" />
        </svg>
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        
        {/* Small Eyebrow Text */}
        <div className="inline-flex items-center gap-2 mb-6 px-3.5 py-1 rounded-full bg-white/10 border border-[#D5AF38]/40">
          <span className="w-1.5 h-1.5 rounded-full bg-[#D5AF38] animate-ping" />
          <span className="text-[11px] font-mono tracking-widest text-[#D5AF38] uppercase">
            READY WHEN YOU ARE.
          </span>
        </div>

        {/* Large Headline */}
        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-display font-black tracking-tight leading-[1.08] mb-6">
          <span className="block text-white/95">
            HAVE PAPERWORK TO HANDLE?
          </span>
          <span className="relative inline-block text-white mt-1">
            CONSIDER IT <span className="text-[#D5AF38]">GUIDED.</span>
            {/* Gold Underline Path */}
            <svg
              className="absolute -bottom-2 sm:-bottom-3 left-0 w-full h-3 overflow-visible pointer-events-none"
              viewBox="0 0 350 12"
              fill="none"
            >
              <path
                d="M 5,8 Q 175,2 345,7"
                stroke="#D5AF38"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </h2>

        {/* Supporting Copy */}
        <p className="max-w-xl mx-auto text-base sm:text-lg text-white/80 leading-relaxed mb-10 font-normal">
          Tell us what you need and our team will help you understand the next step with complete clarity, upfront requirements, and zero guesswork.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          {/* Primary CTA */}
          <button
            onClick={onOpenAssistance}
            className="w-full sm:w-auto group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-[#123D88] hover:bg-[#071D45] text-white text-xs sm:text-sm font-extrabold tracking-widest uppercase shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <span>CONTACT NEW GUIDE</span>
            <ArrowRight className="w-4 h-4 text-[#09A9D4] transition-transform duration-300 group-hover:translate-x-1" />
          </button>

          {/* Secondary CTA: Call / WhatsApp */}
          <a
            href="https://wa.me/971501234567?text=Hello%20New%20Guide%20Team,%20I%20would%20like%20assistance%20with%20UAE%20document%20clearing%20and%20business%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 text-white text-xs sm:text-sm font-bold tracking-widest uppercase transition-all duration-300 shadow-sm"
          >
            <MessageCircle className="w-4 h-4 text-[#09A9D4]" />
            <span>CALL / WHATSAPP</span>
          </a>
        </div>

        {/* Rapid Support Note */}
        <div className="mt-8 text-xs font-mono text-white/60">
          DUBAI TIME (GMT+4) • SAME-DAY RESPONSE PROMISE
        </div>

      </div>
    </section>
  );
}
