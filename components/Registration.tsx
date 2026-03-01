"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { eventConfig } from "@/data/config";
import { 
  Users, 
  GraduationCap, 
  Building, 
  Calendar, 
  Clock, 
  FileText, 
  Presentation,
  CheckCircle2,
  ArrowRight
} from "lucide-react";

const participants = [
  { icon: GraduationCap, title: "UG & PG Students" },
  { icon: Users, title: "Research Scholars" },
  { icon: Users, title: "Academicians" },
  { icon: Building, title: "Scientists" },
  { icon: Building, title: "Industry Professionals" },
];

const abstractGuidelines = [
  { icon: FileText, text: "Format: MS Word" },
  { icon: CheckCircle2, text: "Font: Times New Roman, 12pt" },
  { icon: CheckCircle2, text: "Spacing: Double spacing" },
  { icon: CheckCircle2, text: "Word Limit: Less than 200 words" },
];

export default function Registration() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="registration" className="py-16 md:py-24 bg-gradient-to-b from-navy to-navy-light">
      <div ref={ref} className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-2xl md:text-4xl font-semibold tracking-tight mb-4 text-white">
            Registration & Participation
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald to-electric mx-auto" />
        </motion.div>

        {/* Registration Fees */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-5xl mx-auto mb-12 md:mb-16"
        >
          <h3 className="text-xl md:text-2xl font-semibold text-white text-center mb-8">Registration Fees</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {eventConfig.fees.map((fee, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="rounded-2xl border border-slate-700 bg-slate-900/40 backdrop-blur-md p-6 md:p-8 text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                <p className="text-base md:text-lg text-slate-300 mb-3">{fee.category}</p>
                <p className="text-3xl md:text-4xl font-bold text-white">
                  {fee.amount}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Important Dates */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-5xl mx-auto mb-12 md:mb-16"
        >
          <h3 className="text-xl md:text-2xl font-semibold text-white text-center mb-8">Important Dates</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div className="rounded-2xl border border-slate-700 bg-slate-900/40 backdrop-blur-md p-6 flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-emerald to-electric flex items-center justify-center flex-shrink-0">
                <Calendar className="text-white" size={24} />
              </div>
              <div>
                <p className="text-slate-400 text-sm mb-1">Abstract Deadline</p>
                <p className="text-lg md:text-xl font-semibold text-white">{eventConfig.deadlines.abstract}</p>
              </div>
            </div>
            <div className="rounded-2xl border border-slate-700 bg-slate-900/40 backdrop-blur-md p-6 flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-electric to-emerald flex items-center justify-center flex-shrink-0">
                <Clock className="text-white" size={24} />
              </div>
              <div>
                <p className="text-slate-400 text-sm mb-1">Registration Deadline</p>
                <p className="text-lg md:text-xl font-semibold text-white">{eventConfig.deadlines.registration}</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Who Can Participate */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="max-w-5xl mx-auto mb-12 md:mb-16"
        >
          <h3 className="text-xl md:text-2xl font-semibold text-white text-center mb-8">Who Can Participate</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-6">
            {participants.map((participant, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="rounded-lg border border-slate-700 bg-slate-900/40 backdrop-blur-md p-4 md:p-6 text-center hover:bg-slate-800/60 transition-all duration-300"
              >
                <participant.icon className="text-emerald mx-auto mb-3" size={28} />
                <p className="text-xs md:text-sm text-slate-300">{participant.title}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Presentation Details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="max-w-5xl mx-auto mb-12 md:mb-16"
        >
          <div className="rounded-2xl border border-slate-700 bg-slate-900/40 backdrop-blur-md p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <Presentation className="text-emerald" size={24} />
              <h3 className="text-xl md:text-2xl font-semibold text-white">Presentation Guidelines</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              <div>
                <h4 className="text-base md:text-lg font-semibold text-emerald mb-3">Presentation Type</h4>
                <p className="text-slate-300 text-sm md:text-base">Oral & E-Poster Presentation</p>
                <p className="text-slate-400 text-sm mt-2">Duration: 5 minutes</p>
              </div>
              <div>
                <h4 className="text-base md:text-lg font-semibold text-emerald mb-3">Abstract Format</h4>
                <div className="space-y-2">
                  {abstractGuidelines.map((guideline, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <guideline.icon className="text-electric flex-shrink-0" size={16} />
                      <span className="text-slate-300 text-xs md:text-sm">{guideline.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Register CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center"
        >
          <a
            href={eventConfig.registrationLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 md:px-12 py-4 md:py-5 bg-gradient-to-r from-emerald to-electric text-white rounded-lg font-bold text-base md:text-xl hover:shadow-xl transition-all duration-300 group"
          >
            Register Now
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={24} />
          </a>
          <p className="text-slate-400 mt-4 text-xs md:text-sm">
            Secure your spot today • Limited seats available
          </p>
        </motion.div>
      </div>
    </section>
  );
}
