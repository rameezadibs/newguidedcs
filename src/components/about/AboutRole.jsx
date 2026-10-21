import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

export default function AboutRole() {
  const { lang, isRTL } = useLanguage();

  return (
    <section
      id="our-role"
      role="region"
      aria-labelledby="our-role-heading"
      className={`relative w-full bg-[#071D45] text-white pt-10 sm:pt-14 lg:pt-18 pb-10 sm:pb-14 lg:pb-18 px-4 sm:px-8 lg:px-14 overflow-hidden border-b border-white/10 ${isRTL ? 'text-right' : 'text-left'}`}
    >
      {/* Background Architectural Watermark - Faded "NG" */}
      <div className={`absolute ${isRTL ? 'left-0 -translate-x-1/4' : 'right-0 translate-x-1/4'} top-1/2 -translate-y-1/2 text-white/[0.03] font-display font-black text-[300px] sm:text-[420px] select-none pointer-events-none leading-none z-0`}>
        NG
      </div>

      {/* Blueprint grid overlay matching WhoWeAre */}
      <div className="absolute inset-0 bg-grid-blueprint-dark opacity-30 pointer-events-none" />

      {/* Subtle ambient glow */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-[#00A9D6]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Editorial Container */}
      <div className="relative max-w-7xl mx-auto z-10">
        
        {/* Top SEO Eyebrow & Institutional Coordinates */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 mb-6 sm:mb-8 border-b border-white/10">
          <div className="flex items-center gap-3">
            <span className="w-8 h-[2px] bg-[#00A9D6]" />
            <span className="font-mono text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-[#00A9D6]">
              {lang === 'ar' ? 'دورنا الأساسي // وكالة علاقات حكومية معتمدة في دبي' : 'OUR ROLE // AUTHORIZED GOVERNMENT LIAISON AGENCY DUBAI'}
            </span>
          </div>

          <div className="font-mono text-[11px] text-white/60 tracking-widest uppercase">
            <span>{lang === 'ar' ? 'جسر الإنجاز الحكومي • الخارجية / الاقتصاد / العمل / الإقامة' : 'OPERATIONAL BRIDGE • MOFA / DET / MOHRE / GDRFA'}</span>
          </div>
        </div>

        {/* Magazine Spread Layout: Two Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Large Cinematic Documentary Photography */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? 30 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 relative group"
          >
            {/* The Image Container with Image SEO Tags */}
            <div className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl bg-[#06162F] border border-white/15 aspect-[16/10] sm:aspect-[16/9]">
              <img
                src="/about/role-representative.jpg"
                alt="Authorized Dubai Document Clearing Representative - New Guide Corporate PRO Services UAE"
                title="New Guide Corporate PRO & Government Liaison Services Dubai UAE"
                width="1280"
                height="720"
                className="w-full h-full object-cover object-center filter contrast-[1.08] saturate-[1.02] transition-transform duration-700 group-hover:scale-[1.02]"
                loading="lazy"
              />

              {/* Subtle Cool Blue Gradient Overlay on Edge */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#06162F]/65 via-transparent to-black/10 pointer-events-none" />

              {/* Bottom Photo Metadata */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white/80 font-mono text-[10px] tracking-wider">
                <span>{lang === 'ar' ? 'حضور وزاري مباشر' : 'DIRECT MINISTERIAL ATTENDANCE'}</span>
                <span className="text-[#00A9D6] font-bold">{lang === 'ar' ? 'كافة إمارات الدولة السبع' : 'ALL 7 EMIRATES'}</span>
              </div>
            </div>

            {/* Cyan Architectural Framing Line */}
            <div className={`absolute -bottom-3 ${isRTL ? '-right-3 border-r-2 rounded-br-3xl' : '-left-3 border-l-2 rounded-bl-3xl'} w-24 h-24 border-b-2 border-[#00A9D6] pointer-events-none hidden sm:block`} />
          </motion.div>

          {/* Right Column: Editorial Typography */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-5"
          >
            {/* Keyword Eyebrow Tag */}
            <span className="font-mono text-xs font-bold text-[#00A9D6] tracking-widest uppercase block mb-0.5">
              {lang === 'ar' ? 'وكالة معتمدة لتخليص المعاملات والـ PRO في الإمارات' : 'AUTHORIZED UAE CORPORATE PRO & DOCUMENTATION AGENCY'}
            </span>

            {/* Headline */}
            <h2
              id="our-role-heading"
              className="font-display font-black text-4xl sm:text-5xl lg:text-[3.1rem] xl:text-[3.4rem] tracking-tight leading-[0.98] text-white uppercase"
            >
              {lang === 'ar' ? (
                <>
                  <span>بين المتطلب</span>
                  <br />
                  <span className="text-white/90">والموافقة الرسمية،</span>
                  <br />
                  <span>تجد دائماً</span>
                  <br />
                  <span className="text-[#00A9D6]">نيو غايد.</span>
                </>
              ) : (
                <>
                  <span>BETWEEN</span>
                  <br />
                  <span className="text-white/90">REQUIREMENT</span>
                  <br />
                  <span>AND APPROVAL,</span>
                  <br />
                  <span className="text-white/90">THERE'S</span>
                  <br />
                  <span className="text-[#00A9D6]">NEW GUIDE.</span>
                </>
              )}
            </h2>

            {/* Supporting Text */}
            <p className={`text-base sm:text-lg text-white/80 leading-relaxed font-sans font-normal ${isRTL ? 'border-r-2 pr-4' : 'border-l-2 pl-4'} border-[#00A9D6]`}>
              {lang === 'ar'
                ? 'نعمل كصلة وصل قانونية معتمدة بين عملائنا والمنظومة الإدارية في دولة الإمارات—نقوم بتنسيق تصديقات الخارجية، وتأسيس وتجديد الرخص في دائرة الاقتصاد، وكوتة وتصاريح العمل في الموارد البشرية، وتأشيرات الإقامة في الإدارة العامة للإقامة، لتتفرغ تماماً لتطوير أعمالك.'
                : "We act as the authorized working link between our clients and the UAE's administrative ecosystem—coordinating MOFA attestations, DET trade license setup, MOHRE labor quotas, and GDRFA residency approvals so clients remain focused on business growth."}
            </p>

            {/* Keyword Matrix Grid */}
            <div className="pt-3 border-t border-white/10 grid grid-cols-2 gap-2.5 font-mono text-xs">
              <div className="bg-[#06162F]/60 backdrop-blur-md p-2.5 rounded-xl border border-white/10">
                <span className="block text-[#00A9D6] font-bold text-[11px]">{lang === 'ar' ? 'تصديقات الخارجية' : 'MOFA ATTESTATION'}</span>
                <span className="text-[10px] text-white/70">{lang === 'ar' ? 'الشهادات والمحررات القانونية' : 'Degree & Legal Certificates'}</span>
              </div>
              <div className="bg-[#06162F]/60 backdrop-blur-md p-2.5 rounded-xl border border-white/10">
                <span className="block text-white font-bold text-[11px]">{lang === 'ar' ? 'تأسيس الشركات واقتصادية دبي' : 'DET BUSINESS SETUP'}</span>
                <span className="text-[10px] text-white/70">{lang === 'ar' ? 'رخص تجارية داخلية ومناطق حرة' : 'Mainland & Freezone Licenses'}</span>
              </div>
              <div className="bg-[#06162F]/60 backdrop-blur-md p-2.5 rounded-xl border border-white/10">
                <span className="block text-white font-bold text-[11px]">{lang === 'ar' ? 'الإقامة الذهبية 10 سنوات' : '10-YR GOLDEN VISA'}</span>
                <span className="text-[10px] text-white/70">{lang === 'ar' ? 'معاملات الإقامة والهوية' : 'GDRFA & ICP Clearance'}</span>
              </div>
              <div className="bg-[#06162F]/60 backdrop-blur-md p-2.5 rounded-xl border border-white/10">
                <span className="block text-[#00A9D6] font-bold text-[11px]">{lang === 'ar' ? 'خدمات الـ PRO للشركات' : 'CORPORATE PRO'}</span>
                <span className="text-[10px] text-white/70">{lang === 'ar' ? 'بطاقات المنشأة وحصص العمالة' : 'Establishment Cards & Quotas'}</span>
              </div>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
