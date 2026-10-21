import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowRight, ShieldCheck, Landmark, Building2, FileCheck } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../translations/translations';

export default function ServicesHero({ onOpenAssistance, onScrollToDirectory }) {
  const { lang, isRTL } = useLanguage();
  const t = translations[lang] || translations.en;

  return (
    <section 
      id="services-hero"
      aria-label="UAE Government Documents Clearing Services & PRO Advisory"
      className={`relative min-h-[85vh] lg:min-h-[90vh] bg-[#06162F] text-white pt-28 lg:pt-36 pb-20 overflow-hidden flex items-center ${isRTL ? 'text-right' : 'text-left'}`}
    >
      {/* Hero Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        <img
          src="/services/hero.png"
          alt="UAE Government Documents Clearing Services Background"
          className="w-full h-full object-cover object-center filter brightness-[0.75] contrast-[1.12]"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#06162F] via-[#06162F]/40 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#06162F]/85 via-[#06162F]/30 to-transparent pointer-events-none" />
      </div>

      {/* Technical Filing Intersections & Geo Coordinates */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        <div className="absolute top-24 left-8 text-[11px] font-mono text-[#00A9D6]/40 tracking-widest hidden sm:block">
          SYS.LOC // 25°12&apos;17&quot;N 55°16&apos;28&quot;E [DUBAI-HQ]
        </div>
        <div className="absolute top-24 right-8 text-[11px] font-mono text-[#00A9D6]/40 tracking-widest hidden sm:block">
          INDEX.REF // NG-DCS-SEO-2026
        </div>
        <div className="absolute bottom-10 left-8 text-[11px] font-mono text-white/20 tracking-wider hidden md:block">
          AUTHORIZATION: GOV-UAE // DIRECTORY-ROUTING-MATRIX
        </div>

        {/* Technical cross marks at key intersections */}
        <span className="absolute top-36 left-1/4 text-[#00A9D6]/30 font-mono text-sm">+</span>
        <span className="absolute top-1/2 left-1/3 text-[#00A9D6]/20 font-mono text-sm">+</span>
        <span className="absolute bottom-32 right-1/4 text-[#00A9D6]/25 font-mono text-sm">+</span>
        <span className="absolute top-48 right-12 text-[#00A9D6]/20 font-mono text-sm">+</span>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="max-w-4xl space-y-6 sm:space-y-8">
          
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-md bg-[#08244A] border border-[#00A9D6]/30"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#00A9D6]" />
            <span className="font-mono text-xs font-bold tracking-widest text-[#DDF5FC] uppercase">
              {t.servicesPage.badge}
            </span>
          </motion.div>

          {/* Primary H1 Heading */}
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-7xl xl:text-8xl font-display font-extrabold tracking-tight leading-[0.95] text-white uppercase"
          >
            {t.servicesPage.heroH1_1} <br />
            <span className="text-[#00A9D6]">{t.servicesPage.heroH1_2}</span> <br />
            <span className="text-[#087ED1]">{lang === 'ar' ? 'مسار حكومي معتمد ومباشر.' : 'ONE CLEAR ROUTE.'}</span>
          </motion.h1>

          {/* Search-Optimized Keyword Rich Subtitle Paragraph */}
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-[#F3F8FC]/90 max-w-3xl font-normal leading-relaxed"
          >
            {t.servicesPage.heroDesc}
          </motion.p>

          {/* Keyword-Rich Trust Highlights Bar */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2"
          >
            {[
              { icon: Landmark, text: lang === 'ar' ? 'تصديقات الخارجية الاتحادية' : 'MOFA & Federal Attestations' },
              { icon: Building2, text: lang === 'ar' ? 'تأسيس الشركات واقتصادية دبي' : 'DET & Freezone Business Setup' },
              { icon: FileCheck, text: lang === 'ar' ? 'تأشيرات الإقامة والعمل' : 'GDRFA & MOHRE Visa Clearing' },
              { icon: ShieldCheck, text: lang === 'ar' ? 'تمثيل حكومي معتمد 100%' : '100% Authorized Government PRO' },
            ].map((item, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-[#08244A]/60 border border-white/10 flex items-center gap-2.5">
                <item.icon className="w-4 h-4 text-[#00A9D6] shrink-0" />
                <span className="text-xs font-mono font-medium text-white/90 leading-tight">{item.text}</span>
              </div>
            ))}
          </motion.div>

          {/* Action CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
          >
            <button
              onClick={onScrollToDirectory}
              className="group relative inline-flex items-center justify-center gap-3 px-7 py-4 rounded-xl bg-[#00A9D6] hover:bg-[#087ED1] text-[#06162F] hover:text-white font-display font-extrabold text-xs sm:text-sm tracking-widest uppercase transition-all duration-300 shadow-[0_10px_30px_rgba(0,169,214,0.3)] cursor-pointer"
            >
              <span>{lang === 'ar' ? 'استعرض دليل الخدمات' : 'FIND YOUR SERVICE'}</span>
              <ArrowDown className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-1" />
            </button>

            <button
              onClick={() => {
                const text = encodeURIComponent(lang === 'ar' ? 'مرحباً نيو غايد، أود التحدث مع مستشار خدمات حكومية معتمد.' : 'Hello New Guide, I would like to speak to a corporate services advisor.');
                window.open(`https://wa.me/971525453323?text=${text}`, '_blank');
              }}
              className="group relative inline-flex items-center justify-center gap-3 px-7 py-4 rounded-xl bg-[#08244A] hover:bg-[#123D88] text-white border border-[#00A9D6]/30 font-display font-extrabold text-xs sm:text-sm tracking-widest uppercase transition-all duration-300 shadow-sm cursor-pointer"
            >
              <span>{lang === 'ar' ? 'تحدث مع مستشار معتمد' : 'SPEAK TO AN ADVISOR'}</span>
              <ArrowRight className={`w-4 h-4 transition-transform duration-300 ${isRTL ? 'rotate-180 group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`} />
            </button>
          </motion.div>

          {/* Bottom Regulatory Stamp Note */}
          <div className="pt-4 flex items-center gap-3 text-xs font-mono text-white/50">
            <ShieldCheck className="w-4 h-4 text-[#00A9D6]" />
            <span>{lang === 'ar' ? 'تمثيل رسمي معتمد في دبي // معاملات دقيقة بدون أي تأخير' : 'DUBAI AUTHORIZED PROCEDURAL LIAISON // ZERO GUESSWORK'}</span>
          </div>

        </div>
      </div>
    </section>
  );
}
