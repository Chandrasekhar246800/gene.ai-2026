"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar, MapPin } from "lucide-react";
import { eventConfig } from "@/data/config";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-navy-dark to-navy">
      {/* Hero Content */}
      <div className="max-w-7xl mx-auto px-6 py-20 md:py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight"
          >
            <span className="bg-gradient-to-r from-emerald via-electric to-emerald bg-clip-text text-transparent">
              {eventConfig.name}
            </span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto"
          >
            {eventConfig.tagline}
          </motion.p>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-base md:text-lg leading-relaxed text-slate-300 max-w-3xl mx-auto"
          >
            {eventConfig.subtitle}
          </motion.p>

          {/* Event Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8"
          >
            <div className="flex items-center gap-3 rounded-lg border border-slate-700 bg-slate-900/40 backdrop-blur-md px-6 py-3">
              <Calendar className="text-emerald" size={20} />
              <span className="text-white">{eventConfig.date}</span>
            </div>
            <div className="flex items-center gap-3 rounded-lg border border-slate-700 bg-slate-900/40 backdrop-blur-md px-6 py-3">
              <MapPin className="text-electric" size={20} />
              <span className="text-white">{eventConfig.venue}</span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
          >
            <a
              href={eventConfig.registrationLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-4 bg-gradient-to-r from-emerald to-electric text-white rounded-lg font-semibold text-base md:text-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
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

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
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
