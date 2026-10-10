import React, { useState, useEffect } from 'react';
import ServicesHero from './ServicesHero';
import ServicesIntent from './ServicesIntent';
import ServicesDirectory from './ServicesDirectory';

export default function ServicesPage({ onOpenAssistance, onNavigateService }) {
  const [selectedCategoryFromIntent, setSelectedCategoryFromIntent] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    document.title = "Services Directory | UAE Government Clearance & Corporate Services — New Guide";
  }, []);

  const handleScrollToDirectory = () => {
    const el = document.getElementById('intent-explorer');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectCategoryFromIntent = (catId) => {
    setSelectedCategoryFromIntent(catId);
    const targetEl = document.getElementById(`service-item-${catId}`) || document.getElementById(`directory-${catId}`) || document.getElementById('services-directory');
    if (targetEl) {
      const yOffset = -90;
      const y = targetEl.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative w-full bg-[#FFFFFF] text-[#111827] overflow-x-hidden selection:bg-[#00A9D6]/20 selection:text-[#06162F]">
      
      {/* 01 — SERVICES HERO */}
      <ServicesHero
        onOpenAssistance={onOpenAssistance}
        onScrollToDirectory={handleScrollToDirectory}
      />

      {/* 02 — "WHAT ARE YOU TRYING TO DO?" (INTENT EXPLORER) */}
      <ServicesIntent
        onSelectCategory={handleSelectCategoryFromIntent}
        onOpenAssistance={onOpenAssistance}
        onNavigateService={onNavigateService}
      />

      {/* 03 — MAIN SERVICE DIRECTORY PORTAL */}
      <ServicesDirectory
        onOpenAssistance={onOpenAssistance}
        onNavigateService={onNavigateService}
        activeCategoryFromParent={selectedCategoryFromIntent}
      />

    </div>
  );
}
