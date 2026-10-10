import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Menu, X, Phone, MessageCircle, ChevronRight, ChevronDown, ShieldCheck, Sparkles } from 'lucide-react';
import { DIRECTORY_SERVICES } from './services/servicesData';

export default function Navbar({ onOpenAssistance, currentPage = 'home', currentServiceId = null, onNavigate }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesExpanded, setMobileServicesExpanded] = useState(false);
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const dropdownTimeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      if (currentPage === 'about' || currentPage === 'services' || currentPage === 'service-detail' || currentPage === 'contact') {
        return;
      }

      // Update active nav based on scroll position
      const sections = ['home', 'about', 'services', 'difference', 'process', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 160 && rect.bottom >= 140) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentPage]);

  const navLinks = [
    { num: '01', name: 'Home', href: '#home', id: 'home' },
    { num: '02', name: 'About', href: '#about', id: 'about' },
    { num: '03', name: 'Our Services', href: '/services', id: 'services', hasDropdown: true },
    { num: '04', name: 'Contact', href: '/contact', id: 'contact' },
  ];

  const handleDropdownEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setDesktopDropdownOpen(true);
  };

  const handleDropdownLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setDesktopDropdownOpen(false);
    }, 150);
  };

  const handleNavClick = (e, link) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    setDesktopDropdownOpen(false);

    if (onNavigate) {
      if (link.id === 'about') {
        onNavigate('about');
        return;
      }
      if (link.id === 'services') {
        onNavigate('services');
        return;
      }
      if (link.id === 'home') {
        onNavigate('home');
        return;
      }
      if (link.id === 'contact') {
        onNavigate('contact');
        return;
      }
      // For difference, process
      onNavigate('home', link.id);
      return;
    }

    const target = document.querySelector(link.href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleServiceSelect = (serviceId) => {
    setDesktopDropdownOpen(false);
    setMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate('service-detail', serviceId);
    }
  };

  return (
    <>
      {/* Crisp White Navbar Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 bg-white border-b border-[#123D88]/10 transition-all duration-300 ${
        isScrolled ? 'shadow-md py-2.5' : 'shadow-sm py-3.5'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            
            {/* LEFT: Official New Guide Logo */}
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, { id: 'home', href: '#home' })}
              className="flex items-center shrink-0 group focus:outline-none cursor-pointer"
              aria-label="New Guide Documents Clearing Services Co."
            >
              <div className="h-10 sm:h-12 md:h-14 flex items-center">
                <img
                  src="/new-guide-logo.png"
                  alt="New Guide Documents Clearing Services Co."
                  className="h-full w-auto max-w-[240px] sm:max-w-[320px] md:max-w-[380px] object-contain transition-transform duration-300 group-hover:scale-[1.01]"
                  loading="eager"
                />
              </div>
            </a>

            {/* CENTER / RIGHT Navigation (Desktop) */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              {navLinks.map((link) => {
                const isActive = currentPage === 'about'
                  ? link.id === 'about'
                  : currentPage === 'services' || currentPage === 'service-detail'
                    ? link.id === 'services'
                    : currentPage === 'contact'
                      ? link.id === 'contact'
                      : activeSection === link.id;

                if (link.hasDropdown) {
                  return (
                    <div
                      key={link.name}
                      className="relative"
                      onMouseEnter={handleDropdownEnter}
                      onMouseLeave={handleDropdownLeave}
                    >
                      <a
                        href={link.href}
                        onClick={(e) => handleNavClick(e, link)}
                        className={`relative px-3.5 py-2 text-sm transition-colors duration-200 cursor-pointer flex items-center gap-1.5 ${
                          isActive
                            ? 'text-[#071D45] font-extrabold'
                            : 'text-[#667085] font-medium hover:text-[#123D88]'
                        }`}
                      >
                        <span>{link.name}</span>
                        <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 text-[#00A9D6] ${
                          desktopDropdownOpen ? 'rotate-180' : ''
                        }`} />
                        
                        {/* Active state cyan indicator */}
                        {isActive && (
                          <motion.div
                            layoutId="activeNavIndicator"
                            className="absolute bottom-0 left-3.5 right-3.5 h-[2px] bg-[#00A9D6] rounded-full"
                            transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                          />
                        )}
                      </a>

                      {/* MEGA DROPDOWN (All 17 Services) */}
                      <AnimatePresence>
                        {desktopDropdownOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 8, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 8, scale: 0.98 }}
                            transition={{ duration: 0.18, ease: 'easeOut' }}
                            className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[760px] max-w-[95vw] bg-white rounded-2xl shadow-2xl border border-slate-200 p-5 z-50 overflow-hidden before:absolute before:-top-3 before:left-0 before:right-0 before:h-4 before:content-['']"
                          >
                            {/* Dropdown Top Header Bar */}
                            <div className="flex items-center justify-between pb-3.5 mb-3.5 border-b border-slate-100">
                              <div className="flex items-center gap-2.5">
                                <span className="w-2 h-2 rounded-full bg-[#00A9D6] animate-pulse" />
                                <span className="text-[11px] font-mono font-bold tracking-widest text-[#087ED1] uppercase">
                                  17 STATUTORY SERVICES DIRECTORY
                                </span>
                              </div>

                              <button
                                onClick={() => {
                                  setDesktopDropdownOpen(false);
                                  onNavigate('services');
                                }}
                                className="text-xs font-mono font-bold text-[#071D45] hover:text-[#00A9D6] uppercase tracking-wider flex items-center gap-1.5 transition-colors cursor-pointer"
                              >
                                <span>VIEW FULL DIRECTORY</span>
                                <ArrowRight className="w-3.5 h-3.5 text-[#00A9D6]" />
                              </button>
                            </div>

                            {/* 3-Column Grid for All 17 Services */}
                            <div className="grid grid-cols-3 gap-1.5">
                              {DIRECTORY_SERVICES.map((srv) => {
                                const isCurrentService = currentServiceId === srv.id && currentPage === 'service-detail';

                                return (
                                  <button
                                    key={srv.id}
                                    onClick={() => handleServiceSelect(srv.id)}
                                    className={`group flex items-center gap-2.5 p-2 rounded-xl text-left transition-all duration-150 cursor-pointer ${
                                      isCurrentService
                                        ? 'bg-[#00A9D6]/10 text-[#071D45] font-bold'
                                        : 'hover:bg-[#F3F8FC] text-slate-700 hover:text-[#071D45]'
                                    }`}
                                  >
                                    <span className="font-mono text-[11px] font-extrabold text-[#00A9D6] shrink-0">
                                      {srv.num}
                                    </span>
                                    <span className="text-xs font-semibold tracking-tight line-clamp-1 group-hover:translate-x-0.5 transition-transform">
                                      {srv.title}
                                    </span>
                                  </button>
                                );
                              })}
                            </div>

                            {/* Dropdown Bottom Banner */}
                            <div className="mt-4 pt-3.5 border-t border-slate-100 flex items-center justify-between text-xs bg-[#F3F8FC] -mx-5 -mb-5 px-5 py-3">
                              <div className="flex items-center gap-2 text-slate-600 font-medium">
                                <ShieldCheck className="w-4 h-4 text-[#00A9D6]" />
                                <span>100% Authorized representation across all UAE ministries</span>
                              </div>

                              <button
                                onClick={() => {
                                  setDesktopDropdownOpen(false);
                                  onNavigate('services');
                                }}
                                className="font-mono font-bold text-[#071D45] hover:text-[#00A9D6] flex items-center gap-1 text-[11px] uppercase transition-colors"
                              >
                                <span>CLEARANCE DIRECTORY</span>
                                <ChevronRight className="w-3.5 h-3.5 text-[#00A9D6]" />
                              </button>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link)}
                    className={`relative px-4 py-2 text-sm transition-colors duration-200 cursor-pointer ${
                      isActive
                        ? 'text-[#071D45] font-extrabold'
                        : 'text-[#667085] font-medium hover:text-[#123D88]'
                    }`}
                  >
                    {link.name}
                    
                    {/* Subtle active state using the cyan accent */}
                    {isActive && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className="absolute bottom-0 left-4 right-4 h-[2px] bg-[#00A9D6] rounded-full"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* RIGHT: CTA Button (Desktop) */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href="https://wa.me/971525453323?text=Hello%20New%20Guide,%20I%20would%20like%20to%20get%20assistance%20with%20UAE%20document%20clearing%20and%20corporate%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center gap-2.5 px-5 py-2.5 rounded-xl text-xs font-extrabold tracking-widest uppercase text-white bg-[#123D88] hover:bg-[#071D45] shadow-md transition-all duration-300 overflow-hidden cursor-pointer"
              >
                <span className="relative z-10">
                  Get Assistance
                </span>
                <ArrowRight className="w-4 h-4 text-[#00A9D6] transition-transform duration-300 group-hover:translate-x-1 relative z-10" />
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex sm:hidden items-center gap-2">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-200 text-[#071D45] focus:outline-none transition-colors cursor-pointer"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6 text-[#00A9D6]" /> : <Menu className="w-6 h-6 text-[#071D45]" />}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Crisp White Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-x-0 top-[64px] bottom-0 z-40 bg-white text-[#071D45] flex flex-col justify-between overflow-y-auto px-6 py-6 border-b border-slate-200 shadow-2xl sm:hidden"
          >
            <div className="relative z-10 space-y-6">

              {/* Mobile Category Eyebrow Tag */}
              <div className="flex items-center gap-2.5 pb-3 border-b border-slate-200">
                <span className="w-6 h-[2px] bg-[#00A9D6]" />
                <span className="text-[11px] font-mono font-bold tracking-widest text-[#00A9D6] uppercase">
                  NAVIGATION MENU
                </span>
              </div>

              {/* Numbered Link Items */}
              <div className="space-y-1">
                {navLinks.map((link) => {
                  const isActive = currentPage === 'about'
                    ? link.id === 'about'
                    : currentPage === 'services' || currentPage === 'service-detail'
                      ? link.id === 'services'
                      : currentPage === 'contact'
                        ? link.id === 'contact'
                        : activeSection === link.id;

                  if (link.hasDropdown) {
                    return (
                      <div key={link.name} className="space-y-1">
                        <div
                          className={`group flex items-center justify-between py-3 px-3.5 rounded-xl transition-all duration-200 cursor-pointer ${
                            isActive
                              ? 'bg-[#123D88]/10 border border-[#00A9D6]/40 text-[#071D45]'
                              : 'hover:bg-slate-50 text-slate-700'
                          }`}
                        >
                          <div
                            onClick={(e) => handleNavClick(e, link)}
                            className="flex items-center gap-3.5 flex-1"
                          >
                            <span className={`font-mono text-xs font-extrabold ${isActive ? 'text-[#00A9D6]' : 'text-slate-400'}`}>
                              {link.num}
                            </span>
                            <span className={`font-display font-extrabold text-lg tracking-tight ${isActive ? 'text-[#071D45]' : 'text-slate-700'}`}>
                              {link.name}
                            </span>
                          </div>

                          <button
                            onClick={() => setMobileServicesExpanded(!mobileServicesExpanded)}
                            className="p-1 rounded-lg hover:bg-slate-200 text-[#00A9D6] transition-colors"
                            aria-label="Toggle Services List"
                          >
                            <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${
                              mobileServicesExpanded ? 'rotate-180' : ''
                            }`} />
                          </button>
                        </div>

                        {/* Mobile Expandable Services List */}
                        <AnimatePresence>
                          {mobileServicesExpanded && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className="pl-4 pr-1 py-2 space-y-1 bg-slate-50 rounded-xl border border-slate-200"
                            >
                              <button
                                onClick={() => {
                                  setMobileMenuOpen(false);
                                  onNavigate('services');
                                }}
                                className="w-full text-left py-2 px-3 text-xs font-mono font-bold text-[#00A9D6] uppercase tracking-wider flex items-center justify-between"
                              >
                                <span>→ Full Services Directory</span>
                                <ChevronRight className="w-3.5 h-3.5" />
                              </button>

                              <div className="border-t border-slate-200 pt-1 space-y-0.5 max-h-[300px] overflow-y-auto">
                                {DIRECTORY_SERVICES.map((srv) => (
                                  <button
                                    key={srv.id}
                                    onClick={() => handleServiceSelect(srv.id)}
                                    className="w-full text-left py-2 px-3 rounded-lg hover:bg-white text-xs font-medium text-slate-700 hover:text-[#071D45] flex items-center justify-between"
                                  >
                                    <span className="flex items-center gap-2">
                                      <span className="font-mono text-[10px] text-[#00A9D6] font-bold">{srv.num}</span>
                                      <span>{srv.title}</span>
                                    </span>
                                    <ChevronRight className="w-3 h-3 text-slate-400" />
                                  </button>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  }

                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link)}
                      className={`group flex items-center justify-between py-3 px-3.5 rounded-xl transition-all duration-200 cursor-pointer ${
                        isActive
                          ? 'bg-[#123D88]/10 border border-[#00A9D6]/40 text-[#071D45]'
                          : 'hover:bg-slate-50 text-slate-700'
                      }`}
                    >
                      <div className="flex items-center gap-3.5">
                        <span className={`font-mono text-xs font-extrabold ${isActive ? 'text-[#00A9D6]' : 'text-slate-400'}`}>
                          {link.num}
                        </span>
                        <span className={`font-display font-extrabold text-lg sm:text-xl tracking-tight ${isActive ? 'text-[#071D45]' : 'text-slate-700'}`}>
                          {link.name}
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        {isActive && (
                          <span className="w-2 h-2 rounded-full bg-[#00A9D6] animate-pulse" />
                        )}
                        <ChevronRight className={`w-4 h-4 transition-transform duration-200 ${isActive ? 'text-[#00A9D6] translate-x-1' : 'text-slate-400 group-hover:text-[#071D45]'}`} />
                      </div>
                    </a>
                  );
                })}
              </div>

            </div>

            {/* Bottom Actions & Accreditation Footer */}
            <div className="relative z-10 pt-6 mt-6 border-t border-slate-200 space-y-4">

              {/* Primary CTA */}
              <a
                href="https://wa.me/971525453323?text=Hello%20New%20Guide,%20I%20would%20like%20to%20get%20assistance%20with%20UAE%20document%20clearing%20and%20corporate%20services."
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2.5 py-4 rounded-xl text-xs font-extrabold tracking-widest uppercase text-white bg-[#123D88] hover:bg-[#071D45] shadow-xl transition-all cursor-pointer"
              >
                <span>Get Immediate Assistance</span>
                <ArrowRight className="w-4 h-4 text-[#00A9D6]" />
              </a>

              {/* Quick Contact Info */}
              <div className="grid grid-cols-2 gap-3 text-xs">
                <a
                  href="tel:+971525453323"
                  className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-slate-100 border border-slate-200 text-[#071D45] hover:bg-slate-200 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#00A9D6]" />
                  <span className="font-mono text-[11px] font-bold">+971 52 545 3323</span>
                </a>

                <a
                  href="https://wa.me/971525453323"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-[#25D366]/15 border border-[#25D366]/30 text-emerald-700 hover:bg-[#25D366]/25 transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                  <span className="font-mono text-[11px] font-bold">WhatsApp</span>
                </a>
              </div>

              {/* Licensed Badge */}
              <div className="flex items-center justify-center gap-2 text-[10px] font-mono text-slate-500">
                <ShieldCheck className="w-3.5 h-3.5 text-[#00A9D6]" />
                <span>LICENSED UAE CORPORATE SERVICES PROVIDER</span>
              </div>

            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
