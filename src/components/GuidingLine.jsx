import React from 'react';
import { motion } from 'framer-motion';

/**
 * The Guiding Line component represents the core visual identity
 * derived from the sweeping gold line in the New Guide official logo.
 */
export const GuidingLineHero = () => {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none z-10 overflow-visible"
      viewBox="0 0 1440 900"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="goldGradientHero" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#D5AF38" stopOpacity="0" />
          <stop offset="25%" stopColor="#D5AF38" stopOpacity="0.8" />
          <stop offset="60%" stopColor="#E8CA6B" stopOpacity="1" />
          <stop offset="85%" stopColor="#D5AF38" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#B89225" stopOpacity="0.2" />
        </linearGradient>
        <filter id="goldGlowHero" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Primary sweeping guiding line */}
      <motion.path
        d="M 120,380 C 350,380 480,480 720,440 C 960,400 1080,260 1340,320"
        stroke="url(#goldGradientHero)"
        strokeWidth="2.5"
        strokeLinecap="round"
        filter="url(#goldGlowHero)"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
      />

      {/* Subtle secondary directional echo line */}
      <motion.path
        d="M 280,410 C 460,410 560,510 800,470 C 1040,430 1150,330 1380,360"
        stroke="#D5AF38"
        strokeWidth="1"
        strokeDasharray="4 8"
        strokeOpacity="0.4"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.4 }}
        transition={{ duration: 2.2, delay: 0.8, ease: "easeOut" }}
      />

      {/* Strategic guiding point node */}
      <motion.circle
        cx="720"
        cy="440"
        r="4"
        fill="#D5AF38"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: [0, 1.4, 1], opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.6 }}
      />
      <motion.circle
        cx="720"
        cy="440"
        r="9"
        stroke="#D5AF38"
        strokeWidth="1"
        strokeOpacity="0.5"
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1.8, 1], opacity: [0, 0.8, 0.4] }}
        transition={{ duration: 1.2, delay: 1.8, repeat: Infinity, repeatDelay: 3 }}
      />
    </svg>
  );
};

export const GuidingLineUnderline = ({ className = "" }) => {
  return (
    <span className={`relative inline-block ${className}`}>
      <svg
        className="absolute -bottom-2.5 left-0 w-full h-3 overflow-visible pointer-events-none"
        viewBox="0 0 100 12"
        preserveAspectRatio="none"
      >
        <motion.path
          d="M 0,6 Q 40,11 75,5 T 100,6"
          stroke="#D5AF38"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
        />
      </svg>
    </span>
  );
};
