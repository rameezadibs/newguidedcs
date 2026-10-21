import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

export default function AboutHowWeThink() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const { lang, isRTL } = useLanguage();

  const values = [
    {
      num: '01',
      word: lang === 'ar' ? 'الوضوح' : 'CLARITY',
      statement: lang === 'ar' ? 'فهم الإجراء والمسار كاملاً قبل الشروع فيه.' : 'Processes should be understood before they are started.',
      subtext: lang === 'ar'
        ? 'نفكك الشروط الوزارية المعقدة إلى مراحل إجرائية واضحة ومحددة قبل إيداع أي معاملة.'
        : 'We deconstruct complex ministry prerequisites into transparent, actionable milestones before any application is lodged.',
    },
    {
      num: '02',
      word: lang === 'ar' ? 'الدقة' : 'ACCURACY',
      statement: lang === 'ar' ? 'كل تفصيل يصنع فارقاً في المعاملات الرسمية.' : 'Every detail matters when dealing with official submissions.',
      subtext: lang === 'ar'
        ? 'أي خطأ طباعي أو عدم مطابقة في التصديق يسبب تأخيراً وتكاليف؛ بروتوكول التدقيق لدينا يقضي على الأخطاء.'
        : 'A single typographical discrepancy or non-compliant attestation causes costly delays; our audit protocol eliminates errors.',
    },
    {
      num: '03',
      word: lang === 'ar' ? 'السرية' : 'DISCRETION',
      statement: lang === 'ar' ? 'حماية بيانات ووثائق الشركات والأفراد بأقصى درجات الأمانة.' : 'Sensitive corporate and personal documentation is handled professionally.',
      subtext: lang === 'ar'
        ? 'الملفات التجارية السرية، وسجلات الشركاء، والوثائق الرسمية تحظى بحماية صارمة واتفاقيات سرية معتمدة.'
        : 'Confidential commercial files, shareholder registers, and sovereign personal credentials remain strictly protected.',
    },
    {
      num: '04',
      word: lang === 'ar' ? 'المثابرة' : 'MOMENTUM',
      statement: lang === 'ar' ? 'مهمتنا هي إبقاء كل معاملة في حركة مستمرة حتى الإنجاز.' : 'Our job is to keep every process moving toward completion.',
      subtext: lang === 'ar'
        ? 'المتابعة الميدانية المستمرة تمنع توقف المعاملات في الإجراءات الروتينية وتسرع إصدار الموافقات.'
        : 'Active on-the-ground liaison prevents bureaucratic stalls and accelerates transactions from submission to clearance.',
    },
  ];

  return (
    <section
      id="how-we-think"
      aria-label="How We Think"
      className={`relative w-full bg-[#FFFFFF] text-[#06162F] pt-10 sm:pt-14 lg:pt-18 pb-10 sm:pb-14 lg:pb-18 px-4 sm:px-8 lg:px-14 overflow-hidden border-b border-[#08244A]/10 ${isRTL ? 'text-right' : 'text-left'}`}
    >
      <div className="relative max-w-7xl mx-auto z-10">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6 sm:mb-8 pb-4 border-b border-[#08244A]/10">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="w-8 h-[2px] bg-[#123D88]" />
              <span className="font-mono text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-[#123D88]">
                {lang === 'ar' ? 'الانضباط والاحترافية' : 'OPERATIONAL DISCIPLINE'}
              </span>
            </div>
            <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight text-[#06162F] uppercase">
              {lang === 'ar' ? 'فلسفتنا في العمل.' : 'HOW WE THINK.'}
            </h2>
          </div>

          <div className="max-w-md font-mono text-[11px] text-[#667085] tracking-wider uppercase">
            {lang === 'ar'
              ? 'القيم والمعايير المهنية الحاكمة لكافة معاملاتنا اليومية'
              : 'FOUNDATIONAL INTELLECTUAL AND REGULATORY POSTURE GOVERNING ALL TRANSACTIONS'}
          </div>
        </div>

        {/* Four Rows */}
        <div className="divide-y divide-[#08244A]/15 border-b border-[#08244A]/15">
          {values.map((item, index) => {
            const isHovered = hoveredIndex === index;
            return (
              <div
                key={item.word}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`group py-6 sm:py-8 px-4 sm:px-6 -mx-4 sm:-mx-6 transition-all duration-300 cursor-pointer rounded-2xl ${
                  isHovered ? 'bg-[#F2F8FC]' : 'bg-transparent'
                }`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 items-center">
                  
                  {/* Left: Number + Word */}
                  <div className="lg:col-span-7 flex flex-col sm:flex-row sm:items-baseline gap-3 sm:gap-6">
                    <span className="font-mono text-sm sm:text-base font-bold text-[#00A9D6] tracking-wider shrink-0">
                      {item.num} —
                    </span>

                    <h3
                      className={`font-display font-black text-3xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight leading-none transition-transform duration-300 ${
                        isHovered ? (isRTL ? '-translate-x-2 text-[#123D88]' : 'translate-x-2 text-[#123D88]') : 'text-[#06162F]'
                      }`}
                    >
                      {item.word}
                    </h3>
                  </div>

                  {/* Right: Statement & Extra Depth */}
                  <div className="lg:col-span-5 space-y-1.5">
                    <p
                      className={`font-display text-base sm:text-xl font-semibold leading-snug transition-colors duration-300 ${
                        isHovered ? 'text-[#06162F]' : 'text-[#111827]/80'
                      }`}
                    >
                      {item.statement}
                    </p>
                    
                    <p
                      className={`text-xs sm:text-sm text-[#667085] leading-relaxed transition-opacity duration-300 ${
                        isHovered ? 'opacity-100' : 'opacity-70'
                      }`}
                    >
                      {item.subtext}
                    </p>
                  </div>

                </div>

                {/* Dynamic Cyan Line */}
                <div className="mt-4 relative h-[2px] w-full bg-[#08244A]/10 overflow-hidden">
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: isHovered ? 1 : 0 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className={`absolute inset-0 bg-[#00A9D6] ${isRTL ? 'origin-right' : 'origin-left'}`}
                  />
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
