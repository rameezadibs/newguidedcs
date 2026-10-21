import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, MessageCircle, ArrowRight, Navigation } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../translations/translations';

export default function ContactPage() {
  const { lang, isRTL } = useLanguage();
  const t = translations[lang] || translations.en;

  return (
    <div className={`bg-white text-[#071D45] pt-[72px] ${isRTL ? 'text-right' : 'text-left'}`}>
      {/* ====================================================
          01 — CONTACT HERO (Abstract Routes & Connections)
          ==================================================== */}
      <section className="relative bg-[#06162F] text-white overflow-hidden min-h-[55vh] lg:min-h-[62vh] flex items-center border-b border-[#123D88]/30">
        {/* Background Image from /contact/hero.png */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
          <img
            src="/contact/hero.png"
            alt="New Guide Contact Us Background - Corporate Services Dubai UAE"
            className="w-full h-full object-cover object-center filter brightness-[0.75] contrast-[1.12]"
            loading="eager"
          />
          {/* Subtle Gradient Overlays for High Contrast Readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#06162F] via-[#06162F]/50 to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#06162F]/85 via-[#06162F]/40 to-transparent pointer-events-none" />
        </div>

        {/* Subtle Background Circuit Grid */}
        <div className="absolute inset-0 bg-[radial-gradient(#00A9D6_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.07] pointer-events-none" />

        {/* Ambient Top Glow */}
        <div className="absolute -top-32 right-1/4 w-96 h-96 bg-[#00A9D6]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 z-10 w-full">
          <div className="max-w-3xl">
            {/* Small Label */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-md bg-[#08244A] border border-[#00A9D6]/30 mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#00A9D6]" />
              <span className="font-mono text-xs font-bold tracking-widest text-[#DDF5FC] uppercase">
                {t.contactPage.badge}
              </span>
            </motion.div>

            {/* Large Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-display font-extrabold tracking-tight leading-[1.08] text-white uppercase"
            >
              {t.contactPage.title1}<br />
              <span className="text-[#00A9D6] drop-shadow-[0_0_18px_rgba(0,169,214,0.4)]">
                {t.contactPage.title2}
              </span>
            </motion.h1>

            {/* Supporting Copy */}
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.2 }}
              className="mt-6 text-base sm:text-lg text-white/75 leading-relaxed max-w-2xl font-light"
            >
              {t.contactPage.subtitle}
            </motion.p>
          </div>
        </div>
      </section>

      {/* ====================================================
          02 — MAIN CONTACT CHANNELS (Direct Communication Cards)
          ==================================================== */}
      <section className="relative py-16 sm:py-20 lg:py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="max-w-3xl mb-12 sm:mb-16">
            <span className="font-mono text-xs font-bold tracking-widest text-[#087ED1] uppercase block mb-2">
              {lang === 'ar' ? 'ابدأ محادثة مباشرة' : 'START A CONVERSATION'}
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-[#071D45] tracking-tight leading-tight uppercase">
              {lang === 'ar' ? 'دعنا ننجز معاملاتك بسرعة.' : "LET'S GET IT MOVING."}
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              {lang === 'ar'
                ? 'سواء كانت المعاملة تأشيرة إقامة، أو تجديد رخصة تجارية، أو موافقة حكومية خاصة، أو تصديق محررات، تواصل مع فريقنا مباشرة.'
                : "Whether it's a visa, trade licence renewal, government approval, document clearance or complex corporate liaison, reach out to our team directly."}
            </p>
          </div>

          {/* 4 Direct Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            
            {/* WHATSAPP CARD */}
            <div className="bg-white rounded-2xl p-7 border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#25D366]/10 text-[#25D366] flex items-center justify-center">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-[11px] font-mono font-bold tracking-wider text-slate-400 uppercase mb-1">
                    {lang === 'ar' ? 'محادثة واتساب سريعة' : 'WHATSAPP DISPATCH'}
                  </div>
                  <h3 className="text-lg font-bold text-[#071D45]">
                    {lang === 'ar' ? 'استشارة فورية' : 'Instant Guidance'}
                  </h3>
                  <p className="text-xs text-slate-600 mt-1">
                    {lang === 'ar'
                      ? 'تواصل مباشرة مع مسؤولي التخليص للحصول على تقييم فوري للمعاملة.'
                      : 'Speak directly with clearance directors for immediate assessment.'}
                  </p>
                </div>
              </div>
              <a
                href={lang === 'ar' ? "https://wa.me/971525453323?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%20%D9%86%D9%8A%D9%88%20%D8%BA%D8%A7%D9%8A%D8%AF%D8%8C%20%D9%84%D8%AF%D9%8A%20%D9%85%D8%B9%D8%A7%D9%85%D9%84%D8%A9%20%D8%A3%D8%B1%D8%BA%D8%A8%20%D9%81%D9%8A%20%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1%20%D8%B9%D9%86%D9%87%D8%A7." : "https://wa.me/971525453323?text=Hello%20New%20Guide,%20I%20have%20a%20requirement%20I%20would%20like%20guidance%20on."}
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full inline-flex items-center justify-between px-4 py-3 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs tracking-wider uppercase transition-all duration-200 shadow-md cursor-pointer"
              >
                <span>{lang === 'ar' ? 'محادثة عبر واتساب' : 'CHAT ON WHATSAPP'}</span>
                <ArrowRight className={`w-4 h-4 transition-transform ${isRTL ? 'rotate-180 group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`} />
              </a>
            </div>

            {/* DIRECT PHONE CALL CARD */}
            <div className="bg-white rounded-2xl p-7 border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#00A9D6]/10 text-[#00A9D6] flex items-center justify-center">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-[11px] font-mono font-bold tracking-wider text-slate-400 uppercase mb-1">
                    {lang === 'ar' ? 'خطوط الاتصال المباشرة' : 'DIRECT CALL LINES'}
                  </div>
                  <div className="space-y-1 mt-1" dir="ltr">
                    <a
                      href="tel:+971525453323"
                      className="block text-lg font-bold text-[#071D45] hover:text-[#00A9D6] transition-colors"
                      title="Call Direct Mobile"
                    >
                      +971 52 545 3323
                    </a>
                    <a
                      href="tel:+97142633268"
                      className="block text-sm font-semibold text-slate-700 hover:text-[#00A9D6] transition-colors"
                      title="Call Office Landline"
                    >
                      +971 4 2633 268
                    </a>
                  </div>
                  <p className="text-xs text-slate-600 mt-2.5">
                    {lang === 'ar'
                      ? 'خط متحرك مباشر وهاتف أرضي في دبي لخدمتك طوال ساعات العمل.'
                      : 'Central Dubai mobile line & office landline for instant assistance.'}
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <a
                  href="tel:+971525453323"
                  className="group w-full inline-flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-[#08244A] hover:bg-[#123D88] text-white font-bold text-xs tracking-wider uppercase transition-all duration-200 shadow-sm cursor-pointer"
                >
                  <span>{lang === 'ar' ? 'اتصال بالمتحرك' : 'CALL MOBILE'}</span>
                  <ArrowRight className={`w-3.5 h-3.5 text-[#00A9D6] transition-transform ${isRTL ? 'rotate-180 group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`} />
                </a>
                <a
                  href="tel:+97142633268"
                  className="group w-full inline-flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-[#071D45] border border-slate-200 font-bold text-xs tracking-wider uppercase transition-all duration-200 shadow-sm cursor-pointer"
                >
                  <span>{lang === 'ar' ? 'اتصال بالمكتب' : 'CALL OFFICE'}</span>
                  <ArrowRight className={`w-3.5 h-3.5 text-[#00A9D6] transition-transform ${isRTL ? 'rotate-180 group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`} />
                </a>
              </div>
            </div>

            {/* EMAIL DOSSIER CARD */}
            <div className="bg-white rounded-2xl p-7 border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#123D88]/10 text-[#123D88] flex items-center justify-center">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-[11px] font-mono font-bold tracking-wider text-slate-400 uppercase mb-1">
                    {lang === 'ar' ? 'المراسلات الرسمية' : 'EMAIL TRANSFER'}
                  </div>
                  <h3 className="text-lg font-bold text-[#071D45]" dir="ltr">info@newguidedcs.ae</h3>
                  <p className="text-xs text-slate-600 mt-1">
                    {lang === 'ar'
                      ? 'إرسال الملفات والوثائق وعقود الشركات للتصديق والتدقيق.'
                      : 'Send official dossiers, corporate files, and attestation documents.'}
                  </p>
                </div>
              </div>
              <a
                href="mailto:info@newguidedcs.ae"
                className="group w-full inline-flex items-center justify-between px-4 py-3 rounded-xl bg-[#123D88] hover:bg-[#071D45] text-white font-bold text-xs tracking-wider uppercase transition-all duration-200 shadow-md cursor-pointer"
              >
                <span>{lang === 'ar' ? 'إرسال بريد إلكتروني' : 'SEND EMAIL'}</span>
                <ArrowRight className={`w-4 h-4 text-[#00A9D6] transition-transform ${isRTL ? 'rotate-180 group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`} />
              </a>
            </div>

            {/* OFFICE LOCATION CARD */}
            <div className="bg-white rounded-2xl p-7 border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-[11px] font-mono font-bold tracking-wider text-slate-400 uppercase mb-1">
                    {lang === 'ar' ? 'المقر الرئيسي في دبي' : 'DUBAI HEADQUARTERS'}
                  </div>
                  <h3 className="text-sm font-bold text-[#071D45]">
                    {lang === 'ar' ? 'بناية آرزو، القصيص' : 'Arzoo Bldg, Al Qusais'}
                  </h3>
                  <p className="text-xs text-slate-600 mt-1">
                    {lang === 'ar'
                      ? 'مكتب S20، بالقرب من مركز الطوار ومخرج 02 لمترو القصيص.'
                      : 'Office S20, Near Al Twar Center & Al Qusais Metro Exit 02.'}
                  </p>
                </div>
              </div>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Arzoo+Building+Al+Qusais+Dubai"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full inline-flex items-center justify-between px-4 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-[#071D45] font-bold text-xs tracking-wider uppercase transition-all duration-200 border border-slate-300 cursor-pointer"
              >
                <span>{lang === 'ar' ? 'الاتجاهات على الخريطة' : 'GET DIRECTIONS'}</span>
                <Navigation className="w-4 h-4 text-[#00A9D6]" />
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* ====================================================
          03 — LOCATION / FINAL STRIP (Compact Horizontal Dark Navy Strip + Verified Map)
          ==================================================== */}
      <section className="bg-[#06162F] text-white border-t border-[#123D88]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-8 border-b border-white/10">
            {/* Left */}
            <div className="space-y-1">
              <span className="font-mono text-[11px] font-bold tracking-widest text-[#00A9D6] uppercase block">
                {lang === 'ar' ? 'المقر الميداني' : 'PHYSICAL HEADQUARTERS'}
              </span>
              <h3 className="text-xl sm:text-2xl font-display font-extrabold tracking-tight uppercase text-white leading-tight">
                {lang === 'ar' ? (
                  <>
                    مقرنا في دبي.<br className="hidden sm:inline" /> ونخدم كافة إمارات الدولة.
                  </>
                ) : (
                  <>
                    BASED IN DUBAI.<br className="hidden sm:inline" /> WORKING ACROSS THE UAE.
                  </>
                )}
              </h3>
            </div>

            {/* Middle: Verified Office Location */}
            <div className="flex items-start gap-3 max-w-md text-xs sm:text-sm text-white/80">
              <MapPin className="w-5 h-5 text-[#00A9D6] shrink-0 mt-0.5" />
              <div>
                <div className="font-semibold text-white">
                  {lang === 'ar'
                    ? 'مكتب S20، الطابق الأرضي، بناية آرزو'
                    : 'Office S20, Ground Floor, Arzoo Building'}
                </div>
                <div className="text-white/60 text-xs mt-0.5">
                  {lang === 'ar'
                    ? 'بناية بنك الشارقة الإسلامي، بالقرب من مركز الطوار'
                    : 'Sharjah Islamic Bank Bldg, Near Al Twar Center'}
                </div>
                <div className="text-white/60 text-xs">
                  {lang === 'ar'
                    ? 'مخرج 02 لمترو القصيص، شارع النهضة، دبي، الإمارات'
                    : 'Al Qusais Metro Exit 02, Al Nahda Rd, Dubai, UAE'}
                </div>
                <div className="text-white/80 text-xs mt-1.5 flex items-center gap-2.5 font-mono" dir="ltr">
                  <a href="tel:+97142633268" className="hover:text-[#00A9D6] transition-colors">
                    Tel: +971 4 2633 268
                  </a>
                  <span className="text-white/30">•</span>
                  <a href="tel:+971525453323" className="hover:text-[#00A9D6] transition-colors">
                    Mob: +971 52 545 3323
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Get Directions */}
            <div className="w-full lg:w-auto">
              <a
                href="https://www.google.com/maps/search/?api=1&query=Arzoo+Building+Al+Qusais+Dubai"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#08244A] hover:bg-[#123D88] text-white border border-[#00A9D6]/30 text-xs font-extrabold tracking-wider uppercase transition-all duration-200 cursor-pointer w-full sm:w-auto"
              >
                <Navigation className="w-3.5 h-3.5 text-[#00A9D6]" />
                <span>{lang === 'ar' ? 'الاتجاهات على الخريطة' : 'GET DIRECTIONS'}</span>
                <ArrowRight className={`w-4 h-4 text-[#00A9D6] transition-transform ${isRTL ? 'rotate-180 group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`} />
              </a>
            </div>
          </div>

          {/* Clean Embedded Map Underneath Strip */}
          <div className="pt-8">
            <div className="w-full h-[260px] sm:h-[320px] rounded-xl overflow-hidden border border-white/10 shadow-lg relative bg-[#08244A]">
              <iframe
                title="New Guide Documents Clearing Location"
                src="https://maps.google.com/maps?q=Arzoo%20Building%2C%20Al%20Qusais%2C%20Dubai&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'contrast(1.05) brightness(0.95)' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
