import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Check, ShieldCheck, Clock, FileText, ChevronRight, MessageCircle, HelpCircle, Building2, CheckCircle2 } from 'lucide-react';
import { getServiceById, getNextService, getPrevService } from './servicesData';

export default function ServiceDetailPage({ serviceId, onNavigate, onOpenAssistance }) {
  const service = getServiceById(serviceId) || getServiceById('government-transactions');
  const prevService = getPrevService(service.id);
  const nextService = getNextService(service.id);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    if (service) {
      document.title = `${service.title} | UAE Clearance & Corporate Services — New Guide`;
    }
  }, [service]);

  if (!service) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center p-8 bg-[#06162F] text-white">
        <h2 className="text-2xl font-bold mb-4">Service Not Found</h2>
        <button
          onClick={() => onNavigate && onNavigate('services')}
          className="px-6 py-3 rounded-xl bg-[#00A9D6] text-[#06162F] font-bold text-xs uppercase"
        >
          Return to Services Directory
        </button>
      </div>
    );
  }

  const handleWhatsAppInquiry = () => {
    const text = encodeURIComponent(
      `Hello New Guide team, I would like to inquire about the official procedure for: ${service.title} (Code: NG-SVC-${service.num}).`
    );
    window.open(`https://wa.me/971525453323?text=${text}`, '_blank');
  };

  return (
    <div className="relative w-full bg-[#FFFFFF] text-[#111827] overflow-x-hidden selection:bg-[#00A9D6]/20 selection:text-[#06162F]">
      
      {/* ====================================================
          01 — DEDICATED SERVICE HERO BANNER (Midnight Navy)
          ==================================================== */}
      <section className="relative bg-[#06162F] text-white pt-28 lg:pt-36 pb-20 overflow-hidden">
        
        {/* Precision Blueprint Grid */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(0, 169, 214, 0.15) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(0, 169, 214, 0.15) 1px, transparent 1px)
            `,
            backgroundSize: '54px 54px',
          }}
        />

        {/* Ambient Backglow */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#00A9D6]/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#08244A]/80 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-mono text-white/50 mb-8 flex-wrap">
            <button
              onClick={() => onNavigate && onNavigate('home')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              HOME
            </button>
            <ChevronRight className="w-3 h-3 text-[#00A9D6]" />
            <button
              onClick={() => onNavigate && onNavigate('services')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              SERVICES DIRECTORY
            </button>
            <ChevronRight className="w-3 h-3 text-[#00A9D6]" />
            <span className="text-[#00A9D6] font-bold">
              {service.num} // {service.title.toUpperCase()}
            </span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            
            {/* Left Headline & Overview */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Category Pill */}
              <div className="inline-flex items-center gap-3 px-3.5 py-1.5 rounded bg-[#08244A] border border-[#00A9D6]/30">
                <span className="w-2 h-2 rounded-full bg-[#00A9D6] animate-pulse" />
                <span className="text-xs font-mono font-bold tracking-[0.2em] text-[#00A9D6] uppercase">
                  PROCEDURAL CODE: NG-SVC-{service.num} // 17 SERVICES
                </span>
              </div>

              {/* Exact Service Title */}
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-extrabold tracking-tight leading-[0.96] text-white">
                {service.title}
              </h1>

              {/* Context Tagline */}
              <div className="text-sm sm:text-base font-mono text-[#DDF5FC] font-semibold">
                {service.context}
              </div>

              {/* Executive Description */}
              <p className="text-base sm:text-lg text-[#F3F8FC]/80 max-w-2xl font-normal leading-relaxed">
                {service.description}
              </p>

              {/* CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  onClick={() => {
                    const text = encodeURIComponent(`Hello New Guide, I would like to request service filing for: ${service?.title || 'Corporate Services'}.`);
                    window.open(`https://wa.me/971525453323?text=${text}`, '_blank');
                  }}
                  className="inline-flex items-center justify-center gap-3 px-7 py-4 rounded-xl bg-[#00A9D6] hover:bg-[#087ED1] text-[#06162F] hover:text-white font-display font-extrabold text-xs sm:text-sm tracking-widest uppercase transition-all duration-300 shadow-[0_10px_30px_rgba(0,169,214,0.3)] cursor-pointer"
                >
                  <span>REQUEST SERVICE FILING</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={handleWhatsAppInquiry}
                  className="inline-flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-[#08244A] hover:bg-[#123D88] text-white border border-[#00A9D6]/30 font-display font-bold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 text-[#00A9D6]" />
                  <span>DIRECT WHATSAPP DISPATCH</span>
                </button>
              </div>

              {/* Regulatory Assurance */}
              <div className="pt-3 flex items-center gap-2.5 text-xs font-mono text-white/50">
                <ShieldCheck className="w-4 h-4 text-[#00A9D6]" />
                <span>AUTHORIZED UAE CORPORATE SERVICE PROVIDER // ZERO GUESSWORK</span>
              </div>

            </div>

            {/* Right Visual Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden bg-[#08244A] border border-[#00A9D6]/30 p-2 shadow-2xl">
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-[#06162F]">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover filter contrast-[1.05] brightness-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#06162F] via-[#06162F]/40 to-transparent" />
                  
                  {/* Top Badge */}
                  <div className="absolute top-4 left-4 px-3 py-1.5 rounded-lg bg-[#06162F]/90 backdrop-blur-md border border-white/10 font-mono text-xs font-bold text-[#00A9D6]">
                    INDEX {service.num} OF 17
                  </div>

                  {/* Bottom Stats */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#06162F]/90 backdrop-blur-md border border-white/10 flex items-center justify-between">
                    <div>
                      <div className="text-[10px] font-mono text-white/50 uppercase">PROCESSING TIMELINE</div>
                      <div className="text-xs font-bold text-white font-mono">{service.turnaround}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-[10px] font-mono text-white/50 uppercase">STATUS CODE</div>
                      <div className="text-xs font-bold text-[#00A9D6] font-mono">{service.statValue}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Quick Institutional Meta Bar */}
          <div className="mt-14 pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs font-mono">
            <div className="p-4 rounded-xl bg-[#08244A]/50 border border-white/5">
              <div className="text-[#00A9D6] uppercase tracking-wider font-bold mb-1">AUTHORITY JURISDICTION</div>
              <div className="text-white font-semibold">{service.authorityFull || service.authority}</div>
            </div>

            <div className="p-4 rounded-xl bg-[#08244A]/50 border border-white/5">
              <div className="text-[#00A9D6] uppercase tracking-wider font-bold mb-1">REGULATORY SCOPE</div>
              <div className="text-white font-semibold">{service.jurisdiction}</div>
            </div>

            <div className="p-4 rounded-xl bg-[#08244A]/50 border border-white/5">
              <div className="text-[#00A9D6] uppercase tracking-wider font-bold mb-1">SUBMISSION MECHANISM</div>
              <div className="text-white font-semibold">Authorized Ministerial Courier &amp; Digital Portal</div>
            </div>
          </div>

        </div>
      </section>

      {/* ====================================================
          02 — STATUTORY PROCEDURES & DELIVERABLES
          ==================================================== */}
      <section className="py-20 sm:py-28 bg-[#FFFFFF] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#08244A]/5 text-xs font-mono font-bold tracking-widest text-[#087ED1] uppercase mb-3">
              <FileText className="w-3.5 h-3.5 text-[#00A9D6]" />
              <span>STATUTORY CAPABILITIES</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-[#06162F] tracking-tight">
              What New Guide Handles for <br />
              <span className="text-[#123D88]">{service.title}</span>
            </h2>

            <p className="mt-3 text-base text-[#667085] leading-relaxed">
              Every step is managed with regulatory accuracy to prevent municipal rejections, unexpected fines, or administrative delays.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {service.procedures.map((proc, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#F3F8FC] border border-slate-200 hover:border-[#00A9D6] transition-all duration-300 group"
              >
                <div className="flex items-start justify-between gap-4 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-[#06162F] text-white flex items-center justify-center font-mono text-xs font-bold shrink-0">
                    0{idx + 1}
                  </div>
                  <span className="text-[10px] font-mono font-bold text-[#00A9D6] tracking-wider uppercase">
                    GOV PROTOCOL
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-[#06162F] group-hover:text-[#087ED1] transition-colors mb-2">
                  {proc}
                </h3>

                <p className="text-xs sm:text-sm text-[#667085] leading-relaxed">
                  Comprehensive ministerial filing and document processing handled end-to-end with verified compliance stamps and physical submission receipts.
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ====================================================
          03 — DOCUMENTATION CHECKLIST & 4-STAGE PATHWAY
          ==================================================== */}
      <section className="py-20 sm:py-28 bg-[#F7FAFC] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14">
            
            {/* Left: Required Documentation */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#08244A]/5 text-xs font-mono font-bold tracking-widest text-[#08244A] uppercase">
                <span>PREREQUISITES</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-[#06162F]">
                Required Documents
              </h2>

              <p className="text-sm text-[#667085] leading-relaxed">
                To initiate {service.title}, our liaison officers will require the following standard documentation:
              </p>

              <div className="space-y-3 pt-2">
                {service.requiredDocuments?.map((doc, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-[#00A9D6] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-[#111827] font-medium">{doc}</span>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-xl bg-[#06162F] text-white space-y-2">
                <div className="text-xs font-mono font-bold text-[#00A9D6]">MISSING A PREREQUISITE?</div>
                <p className="text-xs text-white/70 leading-relaxed">
                  If you are missing an Ejari, certified translation, or foreign attestation, our team can formulate these prerequisite filings simultaneously.
                </p>
              </div>
            </div>

            {/* Right: 4-Stage Pathway Timeline */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#08244A]/5 text-xs font-mono font-bold tracking-widest text-[#08244A] uppercase">
                <span>WORKFLOW TIMELINE</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-[#06162F]">
                How We Process Your Filing
              </h2>

              <div className="space-y-4 pt-2">
                {[
                  {
                    step: '01',
                    title: 'Intake Audit & Document Verification',
                    desc: 'Our senior PRO team audits your dossier against current 2026 ministerial guidelines to ensure zero discrepancies or rejection risks.',
                  },
                  {
                    step: '02',
                    title: 'Bilingual Drafting & Ministerial Typing',
                    desc: 'We type official government submission packets, format bilingual documents, and secure internal approvals before filing.',
                  },
                  {
                    step: '03',
                    title: 'Direct Government Liaison & Case Officer Follow-Up',
                    desc: 'Authorized New Guide representatives submit filings through specialized ministerial portals and physically track case movement.',
                  },
                  {
                    step: '04',
                    title: 'Statutory Resolution & Verified Handover',
                    desc: 'Upon official seal or approval certificate release, we deliver verified physical and electronic documents straight to you.',
                  },
                ].map((item) => (
                  <div key={item.step} className="p-5 rounded-2xl bg-white border border-slate-200 flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#00A9D6]/10 border border-[#00A9D6] text-[#087ED1] flex items-center justify-center font-mono font-bold text-sm shrink-0">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-[#06162F] mb-1">{item.title}</h3>
                      <p className="text-xs sm:text-sm text-[#667085] leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ====================================================
          04 — FREQUENTLY ASKED QUESTIONS
          ==================================================== */}
      {service.faqs && service.faqs.length > 0 && (
        <section className="py-20 sm:py-24 bg-[#FFFFFF] border-b border-slate-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#08244A]/5 text-xs font-mono font-bold tracking-widest text-[#087ED1] uppercase mb-2">
                <HelpCircle className="w-3.5 h-3.5 text-[#00A9D6]" />
                <span>REGULATORY GUIDANCE</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-[#06162F]">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-4">
              {service.faqs.map((faq, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-[#F3F8FC] border border-slate-200 space-y-2">
                  <h3 className="text-base sm:text-lg font-bold text-[#06162F]">
                    {faq.q}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#667085] leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ====================================================
          05 — SEQUENTIAL NAVIGATOR (Browse 17 Services)
          ==================================================== */}
      <section className="py-12 bg-[#F3F8FC] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            
            {/* Previous Service Link */}
            <button
              onClick={() => onNavigate && onNavigate('service-detail', prevService.id)}
              className="group flex items-center gap-3 text-left cursor-pointer"
            >
              <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-400 group-hover:text-[#00A9D6] group-hover:border-[#00A9D6] transition-colors">
                <ArrowLeft className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[10px] font-mono text-[#667085] uppercase">PREVIOUS SERVICE</div>
                <div className="text-xs sm:text-sm font-bold text-[#06162F] group-hover:text-[#087ED1] transition-colors">
                  {prevService.num} — {prevService.title}
                </div>
              </div>
            </button>

            {/* Back to Full Directory Center Link */}
            <button
              onClick={() => onNavigate && onNavigate('services')}
              className="text-xs font-mono font-bold tracking-widest text-[#08244A] hover:text-[#00A9D6] uppercase transition-colors px-4 py-2 rounded-lg bg-white border border-slate-200"
            >
              VIEW ALL 17 SERVICES DIRECTORY
            </button>

            {/* Next Service Link */}
            <button
              onClick={() => onNavigate && onNavigate('service-detail', nextService.id)}
              className="group flex items-center gap-3 text-right cursor-pointer flex-row-reverse"
            >
              <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-400 group-hover:text-[#00A9D6] group-hover:border-[#00A9D6] transition-colors">
                <ArrowRight className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[10px] font-mono text-[#667085] uppercase">NEXT SERVICE</div>
                <div className="text-xs sm:text-sm font-bold text-[#06162F] group-hover:text-[#087ED1] transition-colors">
                  {nextService.num} — {nextService.title}
                </div>
              </div>
            </button>

          </div>
        </div>
      </section>

      {/* ====================================================
          06 — FINAL SERVICE INQUIRY CALL TO ACTION
          ==================================================== */}
      <section className="py-20 sm:py-28 bg-[#06162F] text-white relative overflow-hidden">
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#08244A] border border-[#00A9D6]/30 text-xs font-mono font-bold tracking-widest text-[#00A9D6] uppercase">
            <span>START PROCEDURE NOW</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-white leading-tight">
            Ready to Begin <br />
            <span className="text-[#00A9D6]">{service.title}?</span>
          </h2>

          <p className="text-base text-[#F3F8FC]/80 max-w-xl mx-auto">
            Speak directly with an assigned New Guide specialist. We review your dossier and initiate governmental processing immediately.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onOpenAssistance(service.title)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-[#00A9D6] hover:bg-[#087ED1] text-[#06162F] hover:text-white font-display font-extrabold text-xs sm:text-sm tracking-widest uppercase transition-all duration-300 shadow-xl cursor-pointer"
            >
              <span>SUBMIT INQUIRY</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={handleWhatsAppInquiry}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-[#25D366]/40 text-[#25D366] font-display font-bold text-xs sm:text-sm tracking-wider uppercase transition-colors cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WHATSAPP CLEARANCE DESK</span>
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
