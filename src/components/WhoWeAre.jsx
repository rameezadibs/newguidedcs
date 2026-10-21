import React from 'react';
import { ArrowRight, CheckCheck, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations/translations';

export default function WhoWeAre({ onOpenAssistance, onNavigate }) {
  const { lang, isRTL } = useLanguage();
  const t = translations[lang] || translations.en;

  const handleDiscoverServices = () => {
    if (onNavigate) {
      onNavigate('services');
    } else {
      window.location.href = '/services';
    }
  };

  return (
    <section id="about" aria-labelledby="about-heading" className="relative pt-12 sm:pt-16 pb-12 sm:pb-16 bg-[#071D45] overflow-hidden">
      {/* Background Architectural Watermark - Faded "NG" */}
      <div className={`absolute ${isRTL ? 'left-0 -translate-x-1/4' : 'right-0 translate-x-1/4'} top-1/2 -translate-y-1/2 text-white/[0.03] font-display font-black text-[300px] sm:text-[420px] select-none pointer-events-none leading-none z-0`}>
        NG
      </div>

      {/* Blueprint grid overlay */}
      <div className="absolute inset-0 bg-grid-blueprint-dark opacity-30 pointer-events-none" />

      {/* Subtle ambient glow */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-[#09A9D4]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">

        {/* Editorial Layout: Two Columns centered with 1 Single Picture on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

          {/* Column: Editorial Typography & Copy */}
          <div className={`lg:col-span-6 relative ${isRTL ? 'text-right' : 'text-left'}`}>

            {/* Vertical Cyan Guide Line positioned beside text */}
            <div className={`absolute ${isRTL ? '-right-5 sm:-right-8' : '-left-5 sm:-left-8'} top-2 bottom-4 w-[2px] bg-gradient-to-b from-[#09A9D4] via-[#09A9D4]/50 to-transparent hidden sm:block`} />

            {/* Sleek, Human Editorial Section Tag */}
            <div className={`flex items-center gap-3 mb-4 ${isRTL ? 'justify-start flex-row-reverse' : ''}`}>
              <span className="w-7 h-[2px] bg-[#09A9D4]" />
              <span className="text-xs sm:text-sm font-mono font-bold tracking-[0.22em] text-[#09A9D4] uppercase">
                {t.whoWeAre.tag}
              </span>
            </div>

            {/* Human & Authentic Editorial Heading */}
            <h2 id="about-heading" className="text-3xl sm:text-5xl lg:text-6xl font-display font-black tracking-tight leading-[1.1] mb-5">
              <span className="text-white">{t.whoWeAre.heading1}</span>
              <br />
              <span className="text-[#09A9D4]">{t.whoWeAre.heading2}</span>
            </h2>

            {/* Clear, Human Subheading */}
            <p className="text-lg sm:text-xl font-display font-semibold text-white/90 mb-5 leading-snug">
              {t.whoWeAre.subheading}
            </p>

            {/* Natural, Authentic Professional Copy */}
            <div className="space-y-3.5 text-base sm:text-lg text-white/80 leading-relaxed mb-6 font-normal">
              <p>
                {t.whoWeAre.p1}
              </p>
              <p>
                {t.whoWeAre.p2}
              </p>
            </div>

            {/* Feature highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-4 border-y border-white/10 mb-6">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#09A9D4]/20 flex items-center justify-center text-[#09A9D4] shrink-0 mt-0.5 border border-[#09A9D4]/30">
                  <CheckCheck className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-white block">
                    {lang === 'ar' ? 'تنسيق حكومي مباشر' : 'Direct Government Liaison'}
                  </span>
                  <span className="text-xs text-white/60">
                    {t.whoWeAre.bullet1}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#123D88]/40 flex items-center justify-center text-[#09A9D4] shrink-0 mt-0.5 border border-[#09A9D4]/30">
                  <ShieldCheck className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-white block">
                    {lang === 'ar' ? 'معاملات خالية من الأخطاء' : 'Zero-Error Filings'}
                  </span>
                  <span className="text-xs text-white/60">
                    {t.whoWeAre.bullet4}
                  </span>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div>
              <button
                id="about-learn-more-btn"
                onClick={handleDiscoverServices}
                className="group inline-flex items-center gap-3 px-7 py-4 rounded-xl bg-[#123D88] hover:bg-[#071D45] text-white text-xs sm:text-sm font-extrabold tracking-widest uppercase shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
                aria-label="Learn more about New Guide Document Clearing Services"
              >
                <span>{t.whoWeAre.ctaServices}</span>
                <ArrowRight className={`w-4 h-4 text-[#09A9D4] transition-transform duration-300 group-hover:translate-x-1 ${isRTL ? 'rotate-180 group-hover:-translate-x-1' : ''}`} />
              </button>
            </div>
          </div>

          {/* Right Column: 1 Single Centered Architectural Visual Panel */}
          <div className="lg:col-span-6 flex items-center justify-center relative pt-2 lg:pt-0">
            <div className="relative mx-auto w-full max-w-[500px] lg:max-w-none rounded-2xl overflow-hidden shadow-2xl bg-[#04122d] border border-white/20 aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3]">
              <img
                src="/home/who.png"
                alt="Authorized UAE Document Clearing Company & Corporate PRO Services in Dubai - New Guide"
                title="New Guide Document Clearing & Government Liaison Services Dubai"
                className="w-full h-full object-cover filter contrast-[1.05] saturate-[1.02]"
                loading="lazy"
                width="640"
                height="480"
              />
              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#071D45] via-[#071D45]/25 to-black/20 pointer-events-none" />

              {/* Top Label */}
              <div className="absolute top-4 left-4 bg-[#071D45]/90 backdrop-blur-md px-3.5 py-1.5 rounded-lg border border-white/15 text-[11px] font-mono font-bold tracking-widest text-[#09A9D4] uppercase">
                DUBAI // ALL 7 EMIRATES
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
