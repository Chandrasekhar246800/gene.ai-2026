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
      className="rounded-2xl border border-slate-700 bg-slate-900/40 backdrop-blur-md p-6 text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2 h-full flex flex-col"
    >
      {/* Speaker Avatar */}
      <div className="mb-4">
        <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-emerald/30 to-electric/30 border-2 border-emerald/50 flex items-center justify-center">
          <Mic className="text-emerald" size={32} />
        </div>
      </div>

      {/* Speaker Info */}
      <div className="space-y-2 flex-grow flex flex-col">
        <div className="min-h-[56px] flex items-center justify-center">
          <h3 className="text-lg font-semibold text-white">
            {speaker.name}
          </h3>
        </div>
        
        <div className="flex items-start justify-center gap-2 text-sm text-emerald-400">
          <Building className="flex-shrink-0 mt-0.5" size={14} />
          <p className="font-medium">{speaker.designation}</p>
        </div>

        <p className="text-sm text-slate-400">
          {speaker.organization}
        </p>

        {speaker.location && (
          <div className="flex items-center justify-center gap-1 text-xs text-slate-500 mt-auto pt-2">
            <MapPin size={12} />
            <span>{speaker.location}</span>
          </div>
        )}
      </div>
    </motion.div>
  );
}