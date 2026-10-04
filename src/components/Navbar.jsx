import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Menu, X, Phone, MessageCircle, ChevronRight, ShieldCheck } from 'lucide-react';

export default function Navbar({ onOpenAssistance, currentPage = 'home', onNavigate }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      if (currentPage === 'about') {
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
    { num: '03', name: 'Our Services', href: '#services', id: 'services' },
    { num: '04', name: 'Why Choose Us', href: '#difference', id: 'difference' },
    { num: '05', name: 'How It Works', href: '#process', id: 'process' },
    { num: '06', name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (e, link) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (onNavigate) {
      if (link.id === 'about') {
        onNavigate('about');
        return;
      }
      if (link.id === 'home') {
        onNavigate('home');
        return;
      }
      if (link.id === 'contact') {
        const target = document.getElementById('contact');
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
        return;
      }
      // For services, difference, process
      onNavigate('home', link.id);
      return;
    }

    const target = document.querySelector(link.href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
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
                const isActive = currentPage === 'about' ? link.id === 'about' : activeSection === link.id;
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
                        className="absolute bottom-0 left-4 right-4 h-[2px] bg-[#09A9D4] rounded-full"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* RIGHT: CTA Button (Desktop) */}
            <div className="hidden sm:flex items-center gap-3">
              <button
                onClick={onOpenAssistance}
                className="group relative inline-flex items-center justify-center gap-2.5 px-5 py-2.5 rounded-xl text-xs font-extrabold tracking-widest uppercase text-white bg-[#123D88] hover:bg-[#071D45] shadow-md transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10">
                  Get Assistance
                </span>
                <ArrowRight className="w-4 h-4 text-[#09A9D4] transition-transform duration-300 group-hover:translate-x-1 relative z-10" />
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex sm:hidden items-center gap-2">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-200 text-[#071D45] focus:outline-none transition-colors"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6 text-[#09A9D4]" /> : <Menu className="w-6 h-6 text-[#071D45]" />}
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
                <span className="w-6 h-[2px] bg-[#09A9D4]" />
                <span className="text-[11px] font-mono font-bold tracking-widest text-[#09A9D4] uppercase">
                  NAVIGATION MENU
                </span>
              </div>

              {/* Numbered Link Items */}
              <div className="space-y-1">
                {navLinks.map((link) => {
                  const isActive = currentPage === 'about' ? link.id === 'about' : activeSection === link.id;
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link)}
                      className={`group flex items-center justify-between py-3 px-3.5 rounded-xl transition-all duration-200 cursor-pointer ${
                        isActive
                          ? 'bg-[#123D88]/10 border border-[#09A9D4]/40 text-[#071D45]'
                          : 'hover:bg-slate-50 text-slate-700'
                      }`}
                    >
                      <div className="flex items-center gap-3.5">
                        <span className={`font-mono text-xs font-extrabold ${isActive ? 'text-[#09A9D4]' : 'text-slate-400'}`}>
                          {link.num}
                        </span>
                        <span className={`font-display font-extrabold text-lg sm:text-xl tracking-tight ${isActive ? 'text-[#071D45]' : 'text-slate-700'}`}>
                          {link.name}
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        {isActive && (
                          <span className="w-2 h-2 rounded-full bg-[#09A9D4] animate-pulse" />
                        )}
                        <ChevronRight className={`w-4 h-4 transition-transform duration-200 ${isActive ? 'text-[#09A9D4] translate-x-1' : 'text-slate-400 group-hover:text-[#071D45]'}`} />
                      </div>
                    </a>
                  );
                })}
              </div>

            </div>

            {/* Bottom Actions & Accreditation Footer */}
            <div className="relative z-10 pt-6 mt-6 border-t border-slate-200 space-y-4">

              {/* Primary CTA */}
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAssistance();
                }}
                className="w-full flex items-center justify-center gap-2.5 py-4 rounded-xl text-xs font-extrabold tracking-widest uppercase text-white bg-[#123D88] hover:bg-[#071D45] shadow-xl transition-all"
              >
                <span>Get Immediate Assistance</span>
                <ArrowRight className="w-4 h-4 text-[#09A9D4]" />
              </button>

              {/* Quick Contact Info */}
              <div className="grid grid-cols-2 gap-3 text-xs">
                <a
                  href="tel:+971525453323"
                  className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-slate-100 border border-slate-200 text-[#071D45] hover:bg-slate-200 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#09A9D4]" />
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
                <ShieldCheck className="w-3.5 h-3.5 text-[#09A9D4]" />
                <span>LICENSED UAE CORPORATE SERVICES PROVIDER</span>
              </div>

            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
