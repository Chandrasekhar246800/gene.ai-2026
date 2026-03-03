"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar, MapPin } from "lucide-react";
import { eventConfig } from "@/data/config";
import BioAIHeroVisual from "./BioAIHeroVisual";
import LeftIntelligenceLayer from "./LeftIntelligenceLayer";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Stagger animation for title letters
  const titleText = eventConfig.name;
  const titleWords = titleText.split(" ");

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Layered Radial Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-dark to-navy" />
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(circle at 20% 40%, rgba(30,144,255,0.08), transparent 60%),
            radial-gradient(circle at 80% 50%, rgba(0,184,148,0.08), transparent 60%)
          `
        }}
      />

      {/* 2-Column Grid Layout */}
      <div className="max-w-7xl mx-auto px-6 py-20 md:py-32 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          
          {/* LEFT SIDE - Content + Intelligence Layer */}
          <div className="relative z-10 text-center lg:text-left">
            {/* Left Intelligence Layer (Circuit Grid) */}
            <LeftIntelligenceLayer />

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8 relative z-10"
            >
              {/* Main Heading with Letter Stagger */}
              <div className="relative">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                  {titleWords.map((word, wordIndex) => (
                    <span key={wordIndex} className="inline-block">
                      {word.split("").map((char, charIndex) => (
                        <motion.span
                          key={`${wordIndex}-${charIndex}`}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{
                            duration: 0.5,
                            delay: 0.2 + (wordIndex * word.length + charIndex) * 0.05,
                          }}
                          className="inline-block bg-gradient-to-r from-emerald via-electric to-emerald bg-clip-text text-transparent"
                        >
                          {char}
                        </motion.span>
                      ))}
                      {wordIndex < titleWords.length - 1 && <span className="inline-block w-3" />}
                    </span>
                  ))}
                </h1>

                {/* AI Signal Pulse Under Title */}
                <motion.div
                  className="mt-4 h-1 w-32 mx-auto lg:mx-0 bg-gradient-to-r from-emerald via-electric to-transparent rounded-full"
                  initial={{ scaleX: 0, opacity: 0 }}
                  animate={{ scaleX: 1, opacity: 0.6 }}
                  transition={{ duration: 1, delay: 1.5 }}
                  style={{ transformOrigin: "left" }}
                />
              </div>

              {/* Tagline with Blur to Clear */}
              <motion.p
                initial={{ opacity: 0, filter: "blur(10px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto lg:mx-0"
              >
                {eventConfig.tagline}
              </motion.p>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-base md:text-lg leading-relaxed text-slate-300 max-w-3xl mx-auto lg:mx-0"
              >
                DST–TIDE Sponsored Summit on Genome Engineering &<br className="hidden lg:inline" /> Artificial Intelligence
              </motion.p>

              {/* Event Details */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex flex-col md:flex-row items-center lg:items-start lg:justify-start justify-center gap-4 md:gap-6"
              >
                <div className="flex items-center gap-3 rounded-lg border border-slate-700 bg-slate-900/40 backdrop-blur-md px-6 py-3">
                  <Calendar className="text-emerald" size={20} />
                  <span className="text-white text-sm md:text-base">{eventConfig.date}</span>
                </div>
                <div className="flex items-center gap-3 rounded-lg border border-slate-700 bg-slate-900/40 backdrop-blur-md px-6 py-3">
                  <MapPin className="text-electric" size={20} />
                  <span className="text-white text-sm md:text-base">{eventConfig.venue}</span>
                </div>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center pt-4"
              >
                <a
                  href={eventConfig.registrationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group px-8 py-4 bg-gradient-to-r from-emerald to-electric text-white rounded-lg font-semibold text-base md:text-lg hover:shadow-xl hover:shadow-emerald/30 transition-all duration-300 flex items-center gap-2"
                >
                  Register Now
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                </a>
                <button
                  onClick={() => scrollToSection("#contact")}
                  className="px-8 py-4 border border-slate-700 bg-slate-900/40 backdrop-blur-md text-white rounded-lg font-semibold text-base md:text-lg hover:bg-white/10 transition-all duration-300"
                >
                  Contact Us
                </button>
              </motion.div>
            </motion.div>
          </div>

          {/* RIGHT SIDE - Bio → AI Transformation (Desktop Only) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.5 }}
            className="relative hidden lg:block"
          >
            <BioAIHeroVisual />
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2"
          >
            <motion.div className="w-1.5 h-1.5 bg-emerald rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
