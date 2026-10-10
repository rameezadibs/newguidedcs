import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhoWeAre from './components/WhoWeAre';
import ServicesIndex from './components/ServicesIndex';
import Difference from './components/Difference';
import Process from './components/Process';
import BrandStatement from './components/BrandStatement';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import AssistanceModal from './components/AssistanceModal';
import AboutPage from './components/about/AboutPage';
import ServicesPage from './components/services/ServicesPage';
import ContactPage from './components/contact/ContactPage';

function App() {
  const [assistanceModalOpen, setAssistanceModalOpen] = useState(false);
  const [selectedServiceForModal, setSelectedServiceForModal] = useState(null);

  // Helper to parse current route from URL, pathname, hash, or search params
  const getInitialRoute = () => {
    if (typeof window === 'undefined') return { page: 'home', serviceId: null };
    const path = window.location.pathname.toLowerCase().replace(/\/+$/, '');
    const hash = window.location.hash.toLowerCase();
    const search = new URLSearchParams(window.location.search);

    if (path.includes('/about') || hash === '#/about' || search.get('page') === 'about') {
      return { page: 'about', serviceId: null };
    }

    if (path.startsWith('/services') || hash.startsWith('#/services') || hash === '#services-page' || search.get('page') === 'services') {
      return { page: 'services', serviceId: null };
    }

    if (path.startsWith('/contact') || hash.startsWith('#/contact') || hash === '#contact' || hash === '#contact-page' || search.get('page') === 'contact') {
      return { page: 'contact', serviceId: null };
    }

    return { page: 'home', serviceId: null };
  };

  const [routeState, setRouteState] = useState(getInitialRoute);
  const currentPage = routeState.page;
  const currentServiceId = routeState.serviceId;

  // Scroll to top whenever route changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [routeState]);

  // Handle browser back and forward navigation
  useEffect(() => {
    const handlePopState = () => {
      const newRoute = getInitialRoute();
      setRouteState(newRoute);
      window.scrollTo({ top: 0, behavior: 'instant' });
    };

    window.addEventListener('popstate', handlePopState);
    window.addEventListener('hashchange', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('hashchange', handlePopState);
    };
  }, []);

  const handleNavigate = (page, target = null) => {
    if (page === 'about') {
      setRouteState({ page: 'about', serviceId: null });
      window.history.pushState({}, '', '/about');
      window.scrollTo({ top: 0, behavior: 'instant' });
    } else if (page === 'services' || page === 'service-detail') {
      setRouteState({ page: 'services', serviceId: null });
      window.history.pushState({}, '', '/services' + (target ? `#${target}` : ''));
      window.scrollTo({ top: 0, behavior: 'instant' });
      if (target) {
        setTimeout(() => {
          const el = document.getElementById(target);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        }, 150);
      }
    } else if (page === 'contact') {
      setRouteState({ page: 'contact', serviceId: null });
      window.history.pushState({}, '', '/contact');
      window.scrollTo({ top: 0, behavior: 'instant' });
    } else {
      setRouteState({ page: 'home', serviceId: null });
      window.history.pushState({}, '', '/' + (target ? `#${target}` : ''));
      window.scrollTo({ top: 0, behavior: 'instant' });
      if (target) {
        setTimeout(() => {
          const el = document.getElementById(target);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        }, 150);
      }
    }
  };

  const handleOpenAssistance = (serviceName = null) => {
    setSelectedServiceForModal(typeof serviceName === 'string' ? serviceName : null);
    setAssistanceModalOpen(true);
  };

  const handleCloseAssistance = () => {
    setAssistanceModalOpen(false);
    setSelectedServiceForModal(null);
  };

  const handleSelectService = (service) => {
    if (service && service.title) {
      handleOpenAssistance(service.title);
    }
  };

  const handleOpenContact = () => {
    handleNavigate('contact');
  };

  return (
    <div className="min-h-screen bg-[#F7F6F1] text-[#111827] font-sans relative selection:bg-[#00A9D6]/30 selection:text-[#071D45]">
      
      {/* Navigation Header - Preserved official header with full routing awareness */}
      <Navbar
        currentPage={currentPage}
        currentServiceId={currentServiceId}
        onNavigate={handleNavigate}
        onOpenAssistance={() => handleOpenAssistance('General Inquiry')}
      />

      {/* Main Page Rendering: Home vs About vs Services vs Contact */}
      <main>
        {currentPage === 'about' ? (
          <AboutPage
            onOpenAssistance={(service) => handleOpenAssistance(service || 'About Page Consultation')}
            onExploreServices={() => handleNavigate('services')}
          />
        ) : currentPage === 'services' ? (
          <ServicesPage
            onOpenAssistance={handleOpenAssistance}
          />
        ) : currentPage === 'contact' ? (
          <ContactPage />
        ) : (
          <>
            {/* Section 01 — Hero */}
            <Hero
              onOpenAssistance={() => handleOpenAssistance('General Inquiry')}
              onOpenContact={handleOpenContact}
            />

            {/* Section 02 — Who We Are */}
            <WhoWeAre
              onOpenAssistance={() => handleOpenAssistance('General Inquiry')}
              onNavigate={handleNavigate}
            />

            {/* Section 03 — Services Index (Midnight Navy Transition) */}
            <ServicesIndex
              onOpenAssistance={() => handleOpenAssistance('Document Clearing')}
              onSelectService={handleSelectService}
            />

            {/* Section 04 — The New Guide Difference */}
            <Difference />

            {/* Section 05 — Process: Requirement to Resolution */}
            <Process onOpenAssistance={() => handleOpenAssistance('Document Clearing')} />

            {/* Section 06 — Brand Statement: New Guide Commitment */}
            <BrandStatement onOpenAssistance={() => handleOpenAssistance('General Inquiry')} />
          </>
        )}
      </main>

      {/* Structured Footer - Connects smoothly to both pages */}
      <Footer
        onNavigate={handleNavigate}
        onOpenAssistance={() => handleOpenAssistance('General Inquiry')}
        onOpenContact={handleOpenContact}
      />

      {/* Tasteful Floating WhatsApp Contact */}
      <FloatingWhatsApp />

      {/* Interactive Consultation / Assistance Modal */}
      <AssistanceModal
        isOpen={assistanceModalOpen}
        onClose={handleCloseAssistance}
        initialService={selectedServiceForModal}
      />

    </div>
  );
}

export default App;
