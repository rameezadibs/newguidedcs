import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Menu, X, Phone } from 'lucide-react';

export default function Navbar({ onOpenAssistance }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Update active nav based on scroll position
      const sections = ['home', 'about', 'services', 'difference', 'process', 'insights', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140 && rect.bottom >= 140) {
            setActiveSection(section === 'difference' || section === 'process' ? 'services' : section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'Blogs', href: '#insights', id: 'insights' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-[#123D88]/10 py-3.5'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            
            {/* LEFT: Official New Guide Logo */}
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="flex items-center shrink-0 group focus:outline-none"
              aria-label="New Guide Documents Clearing Services Co."
            >
              {/* Ample horizontal space provided so full text and emblem remain 100% visible and unclipped */}
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
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                      isActive
                        ? 'text-[#071D45] font-semibold'
                        : 'text-[#667085] hover:text-[#123D88]'
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

            {/* RIGHT: CTA Button */}
            <div className="hidden sm:flex items-center gap-3">
              <button
                onClick={onOpenAssistance}
                className="group relative inline-flex items-center justify-center gap-2.5 px-5 py-2.5 rounded text-sm font-medium text-white bg-[#123D88] hover:bg-[#071D45] border border-[#09A9D4]/40 hover:border-[#09A9D4] shadow-sm transition-all duration-300 overflow-hidden"
              >
                {/* Subtle cyan accent light sweep */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-[#09A9D4]/20 to-transparent pointer-events-none" />
                
                <span className="relative z-10 tracking-wide font-semibold text-xs uppercase">
                  Get Assistance
                </span>
                <ArrowRight className="w-4 h-4 text-[#09A9D4] transition-transform duration-300 group-hover:translate-x-1 relative z-10" />
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex sm:hidden items-center gap-2">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded text-[#071D45] hover:bg-black/5 focus:outline-none transition-colors"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-0 top-[60px] z-40 bg-white/98 backdrop-blur-xl border-b border-[#123D88]/10 shadow-xl px-6 py-6 sm:hidden"
          >
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`text-base font-medium py-2 flex items-center justify-between border-b border-gray-100 ${
                    activeSection === link.id
                      ? 'text-[#071D45] font-bold text-[#123D88]'
                      : 'text-[#667085]'
                  }`}
                >
                  <span>{link.name}</span>
                  {activeSection === link.id && (
                    <span className="w-2 h-2 rounded-full bg-[#09A9D4]" />
                  )}
                </a>
              ))}

              <div className="pt-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenAssistance();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded text-sm font-semibold uppercase tracking-wider text-white bg-[#123D88] border border-[#09A9D4]/40 shadow-sm"
                >
                  <span>Get Assistance</span>
                  <ArrowRight className="w-4 h-4 text-[#09A9D4]" />
                </button>
              </div>

              <div className="pt-2 flex items-center justify-between text-xs text-[#667085]">
                <a href="tel:+97142345678" className="flex items-center gap-1.5 hover:text-[#123D88]">
                  <Phone className="w-3.5 h-3.5 text-[#09A9D4]" />
                  <span>+971 4 234 5678</span>
                </a>
                <span className="text-[#09A9D4]">•</span>
                <span className="font-medium text-[#071D45]">Dubai, UAE</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
