import { ArrowUp, Phone, Mail, MapPin, MessageCircle, Clock, ShieldCheck } from 'lucide-react';

export default function Footer({ onOpenAssistance }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About New Guide', href: '#about' },
    { name: 'Services Index', href: '#services' },
    { name: 'Why New Guide', href: '#difference' },
    { name: 'How It Works', href: '#process' },
    { name: 'Contact Us', href: '#contact' },
  ];

  const serviceLinks = [
    'Document Clearing & MOFA Legalization',
    'Mainland LLC & Freezone Business Setup',
    'Dubai Economy & Tourism (DET) Filings',
    'UAE 10-Year Golden Visa & Residency',
    'Corporate PRO Liaison Services',
    'Chamber of Commerce Certifications',
    'Corporate Bank Account Assistance',
  ];

  return (
    <footer id="contact" className="relative bg-[#071D45] text-white pt-16 pb-12 overflow-hidden border-t border-[#123D88]/30">
      
      {/* Subtle Cyan Guiding Line Near Footer Boundary */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#09A9D4] to-transparent pointer-events-none" />

      {/* Blueprint Grid Overlay */}
      <div className="absolute inset-0 bg-grid-blueprint-dark opacity-15 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-12 border-b border-white/10">
          
          {/* Col 1: Official Logo & Company Profile (5 Cols) */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* Official Logo on Elegant Crisp Light Plaque */}
            <div className="inline-block bg-white rounded-lg p-3 shadow-md border border-white/20 max-w-[340px]">
              <img
                src="/new-guide-logo.png"
                alt="New Guide Documents Clearing Services Co."
                className="h-10 sm:h-12 w-auto object-contain"
                loading="lazy"
              />
            </div>

            {/* Short Company Description */}
            <p className="text-sm text-white/70 leading-relaxed max-w-md">
              New Guide Documents Clearing Services Co. is an authorized UAE corporate liaison and document clearance firm based in Dubai. We simplify complex bureaucratic requirements into transparent, expedited business milestones.
            </p>

            {/* Quick Accreditation Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-[#09A9D4]">
              <ShieldCheck className="w-4 h-4 text-[#09A9D4]" />
              <span>LICENSED UAE CORPORATE SERVICES PROVIDER</span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-[#123D88] hover:text-[#09A9D4] flex items-center justify-center text-white/80 transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.6 1.6 0 0 0-1.6 1.6 1.6 1.6 0 0 0 1.6 1.6 1.6 1.6 0 0 0 1.6-1.6 1.6 1.6 0 0 0-1.6-1.6Z" />
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-[#123D88] hover:text-[#09A9D4] flex items-center justify-center text-white/80 transition-colors"
                aria-label="X / Twitter"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-[#123D88] hover:text-[#09A9D4] flex items-center justify-center text-white/80 transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="https://wa.me/971501234567"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-[#25D366] hover:text-white flex items-center justify-center text-white/80 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links (2 Cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-mono font-bold text-[#09A9D4] tracking-widest uppercase">
              NAVIGATION
            </h4>
            <ul className="space-y-2.5 text-sm">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-white/70 hover:text-white transition-colors flex items-center gap-1.5"
                  >
                    <span>{item.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services Links (2 Cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-mono font-bold text-[#09A9D4] tracking-widest uppercase">
              SERVICES
            </h4>
            <ul className="space-y-2 text-xs text-white/70">
              {serviceLinks.slice(0, 5).map((service) => (
                <li key={service}>
                  <button
                    onClick={onOpenAssistance}
                    className="text-left hover:text-white transition-colors"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact Details (3 Cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono font-bold text-[#09A9D4] tracking-widest uppercase">
              CONTACT & LOCATION
            </h4>
            
            <div className="space-y-3 text-xs text-white/80">
              <a
                href="tel:+97142345678"
                className="flex items-start gap-3 hover:text-white transition-colors group"
              >
                <Phone className="w-4 h-4 text-[#09A9D4] shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white">+971 4 234 5678</div>
                  <div className="text-[10px] text-white/50">Central Dubai Office</div>
                </div>
              </a>

              <a
                href="https://wa.me/971501234567"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 hover:text-white transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white">+971 50 123 4567</div>
                  <div className="text-[10px] text-white/50">Direct WhatsApp Dispatch</div>
                </div>
              </a>

              <a
                href="mailto:info@newguidedcs.ae"
                className="flex items-start gap-3 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-[#09A9D4] shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white">info@newguidedcs.ae</div>
                  <div className="text-[10px] text-white/50">Inquiries & Document Submission</div>
                </div>
              </a>

              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#09A9D4] shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white">Business Bay / Deira</div>
                  <div className="text-[10px] text-white/50">Dubai, United Arab Emirates</div>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-1 text-[11px] text-white/60">
                <Clock className="w-4 h-4 text-[#09A9D4] shrink-0 mt-0.5" />
                <div>Sun – Thu: 8:00 AM – 6:00 PM</div>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Bar: Copyright & Terms */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50 font-mono">
          <div>
            © 2026 New Guide Documents Clearing Services Co. All Rights Reserved.
          </div>

          <div className="flex items-center gap-6">
            <button onClick={onOpenAssistance} className="hover:text-white transition-colors">
              Privacy Policy
            </button>
            <span>•</span>
            <button onClick={onOpenAssistance} className="hover:text-white transition-colors">
              Terms of Service
            </button>
            <span>•</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-[#09A9D4] hover:text-white transition-colors ml-2 font-bold"
              aria-label="Scroll to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-[#09A9D4]" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
