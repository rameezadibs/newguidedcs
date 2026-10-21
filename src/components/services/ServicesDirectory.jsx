import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  ArrowUpRight, 
  Check, 
  ShieldCheck, 
  Clock, 
  Search, 
  SlidersHorizontal, 
} from 'lucide-react';
import { DIRECTORY_SERVICES } from './servicesData';
import { useLanguage } from '../../context/LanguageContext';
import { translations, ARABIC_SERVICES } from '../../translations/translations';

export default function ServicesDirectory({ onOpenAssistance, onNavigateService, activeCategoryFromParent }) {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const { lang, isRTL } = useLanguage();
  const t = translations[lang] || translations.en;

  const categoriesMap = {
    gov: ['government-transactions', 'dubai-municipality', 'documents-clearing', 'amer-tasheel-tadbeer', 'government-approval'],
    biz: ['dubai-economy-development', 'moa', 'company-formation', 'trade-licences-renewal', 'dubai-economic-department'],
    visa: ['visa-immigration-ministry-of-labor', 'visit-visa-family-visa'],
    legal: ['online-poa', 'typing', 'insurance', 'notary-services', 'emirates-id-medical'],
  };

  // Sync when parent intent explorer requests a specific service
  useEffect(() => {
    if (activeCategoryFromParent) {
      setActiveTab('all');
      setSearchQuery('');
      setTimeout(() => {
        const targetEl = document.getElementById(`service-card-${activeCategoryFromParent}`);
        if (targetEl) {
          const yOffset = -110;
          const y = targetEl.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 120);
    }
  }, [activeCategoryFromParent]);

  // Merge English services with Arabic overrides when lang === 'ar'
  const localizedServices = useMemo(() => {
    return DIRECTORY_SERVICES.map(srv => {
      if (lang === 'ar' && ARABIC_SERVICES[srv.id]) {
        const ar = ARABIC_SERVICES[srv.id];
        return {
          ...srv,
          title: ar.title || srv.title,
          description: ar.description || srv.description,
          context: ar.context || srv.context,
          authority: ar.authority || srv.authority,
          authorityFull: ar.authorityFull || srv.authorityFull,
          jurisdiction: ar.jurisdiction || srv.jurisdiction,
          categoryType: ar.categoryType || srv.categoryType,
          turnaround: ar.turnaround || srv.turnaround,
          procedures: ar.procedures && ar.procedures.length > 0 ? ar.procedures : srv.procedures,
          requiredDocuments: ar.requiredDocuments && ar.requiredDocuments.length > 0 ? ar.requiredDocuments : srv.requiredDocuments,
        };
      }
      return srv;
    });
  }, [lang]);

  const filteredServices = useMemo(() => {
    return localizedServices.filter((srv) => {
      // Category Tab Filter
      if (activeTab !== 'all' && !categoriesMap[activeTab]?.includes(srv.id)) {
        return false;
      }
      // Text Search Filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchesTitle = srv.title.toLowerCase().includes(q);
        const matchesDesc = srv.description.toLowerCase().includes(q);
        const matchesProc = srv.procedures.some((p) => p.toLowerCase().includes(q));
        const matchesAuth = (srv.statValue || srv.authority || srv.categoryType || '').toLowerCase().includes(q);
        return matchesTitle || matchesDesc || matchesProc || matchesAuth;
      }
      return true;
    });
  }, [localizedServices, activeTab, searchQuery]);

  const tabOptions = [
    { id: 'all', label: lang === 'ar' ? 'كافة الخدمات (17)' : 'ALL DIVISIONS', count: 17 },
    { id: 'gov', label: lang === 'ar' ? 'الوزارات والجهات الحكومية' : 'GOVERNMENT & LIAISON', count: 5 },
    { id: 'biz', label: lang === 'ar' ? 'تأسيس الشركات والتراخيص' : 'BUSINESS & LICENSING', count: 5 },
    { id: 'visa', label: lang === 'ar' ? 'التأشيرات والإقامة' : 'VISAS & IMMIGRATION', count: 2 },
    { id: 'legal', label: lang === 'ar' ? 'التوثيق والطباعة والوكالات' : 'LEGAL & ATTESTATION', count: 5 },
  ];

  return (
    <section id="services-directory" className={`relative py-20 sm:py-28 bg-[#06162F] text-white overflow-hidden border-t border-[#00A9D6]/20 ${isRTL ? 'text-right' : 'text-left'}`}>
      
      {/* Precision Blueprint Coordinate Grid Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-15"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0, 169, 214, 0.15) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 169, 214, 0.15) 1px, transparent 1px)
          `,
          backgroundSize: '56px 56px',
        }}
      />

      {/* Atmospheric Ambient Lighting Orbs */}
      <div className="absolute top-10 right-0 w-[550px] h-[550px] bg-[#00A9D6]/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 -left-20 w-[550px] h-[550px] bg-[#087ED1]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* ====================================================
            CREATIVE SECTION HEADER
            ==================================================== */}
        <div className="mb-14 sm:mb-16 pb-10 border-b border-white/10 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          
          <div className="max-w-3xl space-y-4">
            {/* Creative Typographic Headline */}
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold tracking-tight leading-[0.95] text-white uppercase">
              {lang === 'ar' ? (
                <>
                  استكشف خدماتنا <br />
                  <span className="bg-gradient-to-r from-[#00A9D6] via-[#087ED1] to-[#DDF5FC] bg-clip-text text-transparent">
                    الـ 17 المعتمدة
                  </span>
                </>
              ) : (
                <>
                  EXPLORE OUR <br />
                  <span className="bg-gradient-to-r from-[#00A9D6] via-[#087ED1] to-[#DDF5FC] bg-clip-text text-transparent">
                    17 SERVICE DIVISIONS
                  </span>
                </>
              )}
            </h2>

            <p className="text-base sm:text-lg text-[#F3F8FC]/80 max-w-2xl font-normal leading-relaxed">
              {lang === 'ar'
                ? 'اختر أي قطاع لتخليص المعاملات الحكومية أدناه للاطلاع على التفاصيل الإجرائية الدقيقة، والمستندات المطلوبة، ومسارات التقديم المعتمدة.'
                : 'Select any specialized government or corporate clearance division below to inspect dedicated procedural specifications, required documents, and official ministerial filing routes.'}
            </p>
          </div>

          {/* Institutional Counter Badge */}
          <div className="shrink-0 flex items-center gap-5 p-5 rounded-2xl bg-[#08244A]/80 border border-[#00A9D6]/30 backdrop-blur-md shadow-2xl">
            <div className="text-4xl sm:text-5xl font-mono font-black text-[#00A9D6] tracking-tighter">
              17
            </div>
            <div className="text-xs font-mono tracking-wider text-white/80 uppercase font-bold leading-snug">
              {lang === 'ar' ? (
                <>
                  خدمات حكومية <br />
                  <span className="text-[#00A9D6]">معتمدة في الإمارات</span>
                </>
              ) : (
                <>
                  AUTHORISED <br />
                  <span className="text-[#00A9D6]">UAE DIVISIONS</span>
                </>
              )}
            </div>
          </div>

        </div>

        {/* ====================================================
            SEARCH & CATEGORY FILTER CONTROL BAR
            ==================================================== */}
        <div className="mb-12 space-y-6">
          
          {/* Top Search Input & Controls */}
          <div className="flex flex-col md:flex-row items-center gap-4 justify-between">
            
            {/* Real-time Search Input */}
            <div className="relative w-full md:w-96">
              <div className={`absolute inset-y-0 ${isRTL ? 'right-0 pr-3.5' : 'left-0 pl-3.5'} flex items-center pointer-events-none text-[#00A9D6]`}>
                <Search className="w-4 h-4" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t.servicesPage.searchPlaceholder}
                className={`w-full ${isRTL ? 'pr-10 pl-10' : 'pl-10 pr-10'} py-3 rounded-xl bg-[#08244A]/70 border border-white/15 text-xs text-white placeholder-white/40 focus:outline-none focus:border-[#00A9D6] focus:ring-1 focus:ring-[#00A9D6] transition-all font-mono`}
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className={`absolute inset-y-0 ${isRTL ? 'left-0 pl-3' : 'right-0 pr-3'} flex items-center text-xs text-white/40 hover:text-white`}
                >
                  ✕
                </button>
              )}
            </div>

            {/* Results Count Tag */}
            <div className="text-xs font-mono text-white/60 tracking-wider flex items-center gap-2">
              <SlidersHorizontal className="w-3.5 h-3.5 text-[#00A9D6]" />
              <span>
                {lang === 'ar'
                  ? `عرض ${filteredServices.length} من أصل 17 خدمة حكومية`
                  : `SHOWING ${filteredServices.length} OF 17 STATUTORY DIVISIONS`}
              </span>
            </div>
          </div>

          {/* Filter Tabs Row */}
          <div className="flex items-center overflow-x-auto pb-2 scrollbar-none">
            <div className="inline-flex items-center gap-2 p-1.5 rounded-2xl bg-[#08244A]/60 border border-white/10 backdrop-blur-md">
              {tabOptions.map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`relative px-4 py-2.5 rounded-xl text-xs font-mono font-bold tracking-wider uppercase transition-all duration-200 cursor-pointer flex items-center gap-2 whitespace-nowrap ${
                      isActive
                        ? 'bg-[#00A9D6] text-[#06162F] shadow-lg shadow-[#00A9D6]/20'
                        : 'text-white/70 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <span>{tab.label}</span>
                    <span className={`px-1.5 py-0.5 rounded text-[10px] ${
                      isActive ? 'bg-[#06162F]/20 text-[#06162F]' : 'bg-white/10 text-[#00A9D6]'
                    }`}>
                      {tab.count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

        </div>

        {/* ====================================================
            17 SERVICE CARDS GRID
            ==================================================== */}
        {filteredServices.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 lg:gap-8 items-stretch">
            <AnimatePresence mode="popLayout">
              {filteredServices.map((service) => (
                <motion.article
                  key={service.id}
                  id={`service-card-${service.id}`}
                  layout
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  onClick={() => {
                    const text = encodeURIComponent(
                      lang === 'ar'
                        ? `مرحباً نيو غايد، أود الاستفسار حول: ${service.title} (مرجع: NG-SVC-${service.num}).`
                        : `Hello New Guide, I would like to inquire about: ${service.title} (Ref: NG-SVC-${service.num}).`
                    );
                    window.open(`https://wa.me/971525453323?text=${text}`, '_blank');
                  }}
                  className="group relative rounded-3xl overflow-hidden bg-gradient-to-b from-[#0B254E]/90 via-[#071D45]/80 to-[#041228]/95 border border-white/10 hover:border-[#00A9D6]/90 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_70px_rgba(0,169,214,0.25)] cursor-pointer flex flex-col justify-between backdrop-blur-2xl"
                >
                  {/* Subtle Top-Edge Ambient Light Bar */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#00A9D6]/40 to-transparent group-hover:via-[#00A9D6] transition-all duration-500 z-20" />

                  {/* Corner Glow Accent */}
                  <div className={`absolute -top-16 ${isRTL ? '-left-16' : '-right-16'} w-44 h-44 bg-[#00A9D6]/10 rounded-full blur-3xl group-hover:bg-[#00A9D6]/25 transition-all duration-500 pointer-events-none`} />

                  {/* Visual Media Window */}
                  <div className="relative">
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#06162F]">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover filter brightness-[0.88] contrast-[1.08] group-hover:scale-108 group-hover:brightness-100 transition-all duration-700 ease-out"
                        loading="lazy"
                      />
                      
                      {/* Atmospheric Dual Gradients */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#071D45] via-[#071D45]/30 to-transparent" />
                      <div className="absolute inset-0 bg-gradient-to-b from-[#06162F]/70 via-transparent to-transparent" />

                      {/* Top Bar Floating Overlays */}
                      <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between z-10">
                        {/* Procedural Code Pill */}
                        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#06162F]/90 backdrop-blur-md border border-white/15 text-[11px] font-mono font-bold text-[#DDF5FC] shadow-lg">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#00A9D6] animate-pulse" />
                          <span>NG-SVC-{service.num}</span>
                        </div>

                        {/* Interactive Expand Arrow Pill */}
                        <div className="w-8 h-8 rounded-full bg-[#06162F]/90 backdrop-blur-md border border-white/20 text-[#00A9D6] group-hover:bg-[#00A9D6] group-hover:text-[#06162F] flex items-center justify-center transition-all duration-300 shadow-lg group-hover:scale-110">
                          <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </div>
                      </div>

                      {/* Bottom Media Metadata Badges */}
                      <div className="absolute bottom-3 left-3.5 right-3.5 flex items-center justify-between text-[11px] font-mono z-10">
                        {/* Turnaround SLA */}
                        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#06162F]/90 backdrop-blur-md border border-white/10 text-white/90 font-medium shadow-md">
                          <Clock className="w-3.5 h-3.5 text-[#00A9D6]" />
                          <span>{service.turnaround}</span>
                        </div>

                        {/* Classification Stamp */}
                        <div className="px-2.5 py-1 rounded-lg bg-[#08244A]/95 backdrop-blur-md border border-[#00A9D6]/30 text-[#00A9D6] font-bold uppercase tracking-wider text-[10px] shadow-md">
                          {service.statValue}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* CARD MIDDLE: TYPOGRAPHIC IDENTITY & CAPABILITIES */}
                  <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-5">
                    
                    <div>
                      {/* Category Type */}
                      <div className="flex items-center gap-2 mb-2.5">
                        <span className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-[#00A9D6]">
                          {service.categoryType || (lang === 'ar' ? 'تخليص واعتماد رسمي' : 'STATUTORY CLEARANCE')}
                        </span>
                      </div>

                      {/* Exact Service Title */}
                      <h3 className="text-2xl sm:text-[26px] font-display font-black text-white group-hover:text-[#00A9D6] transition-colors duration-300 leading-[1.15] mb-2.5">
                        {service.title}
                      </h3>

                      {/* Context Authority Tagline */}
                      {service.context && (
                        <div className="text-xs font-mono text-[#DDF5FC]/70 mb-3 font-medium">
                          // {service.context}
                        </div>
                      )}

                      {/* Full Description */}
                      <p className="text-xs sm:text-sm text-[#F3F8FC]/90 leading-relaxed font-normal">
                        {service.description}
                      </p>
                    </div>

                    {/* Featured Capabilities Tag Chips */}
                    <div className="pt-3 border-t border-white/10 space-y-2">
                      <div className="text-[10px] font-mono font-bold tracking-widest text-white/50 uppercase">
                        {lang === 'ar' ? 'أبرز الإجراءات المشمولة:' : 'RELEVANT PROCEDURES:'}
                      </div>

                      <div className="flex flex-col gap-1.5">
                        {service.procedures.slice(0, 2).map((proc, pIdx) => (
                          <div 
                            key={pIdx} 
                            className="flex items-start gap-2 text-xs text-white/85 bg-[#06162F]/40 p-2 rounded-xl border border-white/5 group-hover:border-[#00A9D6]/20 transition-colors"
                          >
                            <Check className="w-3.5 h-3.5 text-[#00A9D6] shrink-0 mt-0.5" />
                            <span className="font-medium">{proc}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>

                  {/* CARD FOOTER */}
                  <div className="px-6 pb-6 sm:px-7 sm:pb-7 pt-2">
                    <div className="w-full flex items-center justify-between p-3.5 rounded-2xl bg-[#06162F]/80 group-hover:bg-[#00A9D6] border border-white/10 group-hover:border-[#00A9D6] text-white group-hover:text-[#06162F] transition-all duration-300 shadow-md">
                      <span className="text-xs font-display font-black tracking-wider uppercase">
                        {lang === 'ar' ? `استفسر عن ${service.title}` : `INQUIRE ABOUT ${service.title}`}
                      </span>
                      <div className="w-6 h-6 rounded-lg bg-white/10 group-hover:bg-[#06162F]/20 flex items-center justify-center transition-colors">
                        <ArrowRight className={`w-3.5 h-3.5 transition-transform duration-300 ${isRTL ? 'rotate-180 group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`} />
                      </div>
                    </div>
                  </div>

                </motion.article>
              ))}
            </AnimatePresence>
          </div>
        ) : (
          /* Empty Search State */
          <div className="py-16 text-center space-y-4 rounded-3xl bg-[#08244A]/40 border border-white/10">
            <div className="text-slate-400 font-mono text-sm">
              {lang === 'ar'
                ? `لم يتم العثور على أي خدمة تطابق «${searchQuery}».`
                : `No matching service division found for “${searchQuery}”.`}
            </div>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveTab('all');
              }}
              className="px-5 py-2.5 rounded-xl bg-[#00A9D6] text-[#06162F] font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#087ED1] hover:text-white transition-colors"
            >
              {lang === 'ar' ? 'إعادة ضبط البحث' : 'Reset Filters'}
            </button>
          </div>
        )}

        {/* Bottom Institutional Assurance Banner */}
        <div className="mt-16 p-6 sm:p-7 rounded-3xl bg-[#08244A]/60 border border-[#00A9D6]/30 flex flex-col sm:flex-row items-center justify-between gap-5 text-xs font-mono text-white/80 shadow-2xl backdrop-blur-md">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-[#00A9D6] shrink-0" />
            <span className="text-xs sm:text-sm">
              {lang === 'ar'
                ? 'تمثيل ومتابعة معتمدة 100% لدى كافة الوزارات الاتحادية والدوائر المحلية في دولة الإمارات'
                : '100% Authorized Liaison Representation Across All UAE Federal Ministries & Local Authorities'}
            </span>
          </div>

          <button
            onClick={() => {
              const text = encodeURIComponent(
                lang === 'ar'
                  ? 'مرحباً نيو غايد، أود إرسال استفسار حول خدمات التخليص الحكومي والـ PRO.'
                  : 'Hello New Guide, I would like to dispatch a PRO inquiry for UAE document clearing and corporate services.'
              );
              window.open(`https://wa.me/971525453323?text=${text}`, '_blank');
            }}
            className="px-6 py-3 rounded-xl bg-[#00A9D6]/15 hover:bg-[#00A9D6] border border-[#00A9D6]/40 text-[#00A9D6] hover:text-[#06162F] font-display font-extrabold text-xs tracking-wider uppercase transition-all duration-300 cursor-pointer shrink-0"
          >
            <span>{lang === 'ar' ? 'إرسال استفسار PRO ←' : 'DISPATCH PRO INQUIRY →'}</span>
          </button>
        </div>

      </div>
    </section>
  );
}
