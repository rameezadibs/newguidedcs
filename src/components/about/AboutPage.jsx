import React, { useEffect } from 'react';
import AboutHero from './AboutHero';
import AboutPrinciple from './AboutPrinciple';
import AboutRole from './AboutRole';
import AboutHowWeThink from './AboutHowWeThink';
import AboutTimeline from './AboutTimeline';
import AboutPeople from './AboutPeople';
import AboutCta from './AboutCta';

export default function AboutPage({ onOpenAssistance, onExploreServices }) {
  useEffect(() => {
    // Scroll to top upon mounting the About page
    window.scrollTo({ top: 0, behavior: 'instant' });
    document.title = "About Us | UAE Corporate PRO & Document Clearing — New Guide";
  }, []);

  return (
    <div className="relative w-full bg-[#FFFFFF] text-[#111827] overflow-x-hidden selection:bg-[#00A9D6]/20 selection:text-[#06162F]">
      
      {/* 01 — About Hero (Full-Screen Architectural Composition) */}
      <AboutHero />

      {/* 02 — The New Guide Principle (Guidance Before Process) */}
      <AboutPrinciple />

      {/* 03 — Our Role (Magazine Spread with Documentary Representative Photography) */}
      <AboutRole />

      {/* 04 — How We Think (Horizontal Kinetic Typography Rows) */}
      <AboutHowWeThink />

      {/* 05 — The Journey / Timeline (Vertical Scroll Illuminating Story) */}
      <AboutTimeline />

      {/* 06 — The People Behind the Process (Observational Photo Mosaic) */}
      <AboutPeople />

      {/* 07 — About Page CTA (Asymmetric Split Architectural Composition) */}
      <AboutCta
        onOpenAssistance={onOpenAssistance}
        onExploreServices={onExploreServices}
      />

    </div>
  );
}
