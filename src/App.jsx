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

function App() {
  const [assistanceModalOpen, setAssistanceModalOpen] = useState(false);
  const [selectedServiceForModal, setSelectedServiceForModal] = useState(null);

  // Initialize page from pathname, hash or query params
  const [currentPage, setCurrentPage] = useState(() => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname.toLowerCase();
      const hash = window.location.hash.toLowerCase();
      const search = new URLSearchParams(window.location.search);
      if (path.includes('/about') || hash === '#/about' || hash === '#about-page' || search.get('page') === 'about') {
        return 'about';
      }
    }
    return 'home';
  });

  // Scroll to top whenever currentPage changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [currentPage]);

  // Handle browser back and forward navigation
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname.toLowerCase();
      const hash = window.location.hash.toLowerCase();
      const search = new URLSearchParams(window.location.search);
      if (path.includes('/about') || hash === '#/about' || hash === '#about-page' || search.get('page') === 'about') {
        setCurrentPage('about');
      } else {
        setCurrentPage('home');
      }
      window.scrollTo({ top: 0, behavior: 'instant' });
    };

    window.addEventListener('popstate', handlePopState);
    window.addEventListener('hashchange', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('hashchange', handlePopState);
    };
  }, []);

  const handleNavigate = (page, sectionId = null) => {
    if (page === 'about') {
      setCurrentPage('about');
      window.history.pushState({}, '', '/about');
      window.scrollTo({ top: 0, behavior: 'instant' });
    } else {
      const isPageSwitch = currentPage !== 'home';
      setCurrentPage('home');
      window.history.pushState({}, '', '/' + (sectionId ? `#${sectionId}` : ''));
      window.scrollTo({ top: 0, behavior: 'instant' });
      if (sectionId) {
        setTimeout(() => {
          const el = document.getElementById(sectionId);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        }, isPageSwitch ? 150 : 50);
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
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      handleOpenAssistance('General Inquiry');
    }
  };

  return (
    <div className="min-h-screen bg-[#F7F6F1] text-[#111827] font-sans relative selection:bg-[#00A9D6]/30 selection:text-[#071D45]">
      
      {/* Navigation Header - Preserved official header with full routing awareness */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenAssistance={() => handleOpenAssistance('General Inquiry')}
      />

      {/* Main Page Rendering: Home vs About */}
      <main>
        {currentPage === 'about' ? (
          <AboutPage
            onOpenAssistance={() => handleOpenAssistance('About Page Consultation')}
            onExploreServices={() => handleNavigate('home', 'services')}
          />
        ) : (
          <>
            {/* Section 01 — Hero */}
            <Hero
              onOpenAssistance={() => handleOpenAssistance('General Inquiry')}
              onOpenContact={handleOpenContact}
            />

            {/* Section 02 — Who We Are */}
            <WhoWeAre onOpenAssistance={() => handleOpenAssistance('General Inquiry')} />

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
