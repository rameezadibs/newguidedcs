import React, { useState } from 'react';
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

function App() {
  const [assistanceModalOpen, setAssistanceModalOpen] = useState(false);
  const [selectedServiceForModal, setSelectedServiceForModal] = useState(null);

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
    <div className="min-h-screen bg-[#F7F6F1] text-[#111827] font-sans relative selection:bg-[#09A9D4]/30 selection:text-[#071D45]">
      
      {/* Navigation Header */}
      <Navbar onOpenAssistance={() => handleOpenAssistance('General Inquiry')} />

      {/* Main Content Sections */}
      <main>
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
      </main>

      {/* Structured Footer */}
      <Footer
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
