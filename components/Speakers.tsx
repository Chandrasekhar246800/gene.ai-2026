"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { speakers } from "@/data/speakers";
import { Mic, MapPin, Building } from "lucide-react";

export default function Speakers() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="speakers" className="py-16 md:py-24 bg-navy-dark">
      <div ref={ref} className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-2xl md:text-4xl font-semibold tracking-tight mb-4 text-white">
            Distinguished Speakers
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald to-electric mx-auto mb-4" />
          <p className="text-base md:text-lg text-slate-300 max-w-2xl mx-auto">
            Learn from renowned experts and thought leaders in genomics and AI
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-8">
          {speakers.map((speaker, index) => (
            <div key={speaker.id} className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.34rem)] xl:w-[calc(25%-1.5rem)]">
              <SpeakerCard speaker={speaker} index={index} isInView={isInView} />
            </div>
          ))}
        </div>

        {/* Speaker Count Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center gap-3 border border-slate-700 bg-slate-900/40 backdrop-blur-md px-6 md:px-8 py-3 md:py-4 rounded-lg">
            <Mic className="text-emerald" size={20} />
            <span className="text-base md:text-lg font-semibold text-white">
              {speakers.length} Distinguished Speakers
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Professional Speaker Card Component
interface SpeakerCardProps {
  speaker: any;
  index: number;
  isInView: boolean;
}

function SpeakerCard({ speaker, index, isInView }: SpeakerCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.05,
      }}
      className="group rounded-2xl border border-slate-700 bg-slate-900/40 backdrop-blur-md p-6 text-center transition-all duration-300 hover:border-emerald/50 hover:shadow-2xl hover:shadow-emerald/20 hover:-translate-y-3 hover:bg-slate-900/60 h-full flex flex-col cursor-pointer"
    >
      {/* Speaker Avatar */}
      <div className="mb-4">
        <motion.div 
          className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-emerald/30 to-electric/30 border-2 border-emerald/50 flex items-center justify-center transition-all duration-300 group-hover:border-emerald group-hover:from-emerald/40 group-hover:to-electric/40 group-hover:shadow-lg group-hover:shadow-emerald/30"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ duration: 0.3 }}
        >
          <Mic className="text-emerald transition-all duration-300 group-hover:scale-110 group-hover:text-white" size={32} />
        </motion.div>
      </div>

      {/* Speaker Info */}
      <div className="space-y-2 flex-grow flex flex-col">
        <div className="min-h-[56px] flex items-center justify-center">
          <h3 className="text-lg font-semibold text-white transition-colors duration-300 group-hover:text-emerald">
            {speaker.name}
          </h3>
        </div>
        
        <div className="flex items-start justify-center gap-2 text-sm text-emerald-400 transition-colors duration-300 group-hover:text-emerald-300">
          <Building className="flex-shrink-0 mt-0.5 transition-transform duration-300 group-hover:scale-110" size={14} />
          <p className="font-medium">{speaker.designation}</p>
        </div>

        <p className="text-sm text-slate-400 transition-colors duration-300 group-hover:text-slate-300">
          {speaker.organization}
        </p>

        {speaker.location && (
          <div className="flex items-center justify-center gap-1 text-xs text-slate-500 mt-auto pt-2 transition-colors duration-300 group-hover:text-slate-400">
            <MapPin size={12} className="transition-transform duration-300 group-hover:scale-110" />
            <span>{speaker.location}</span>
          </div>
        )}
      </div>
      
      {/* Hover indicator line */}
      <motion.div 
        className="h-1 w-0 bg-gradient-to-r from-emerald to-electric mx-auto mt-4 rounded-full transition-all duration-300 group-hover:w-full"
      />
    </motion.div>
  );
}