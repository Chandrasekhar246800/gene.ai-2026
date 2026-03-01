"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Microscope, 
  Brain, 
  Pill, 
  HeartPulse, 
  Dna, 
  FlaskConical,
  Presentation,
  Users,
  MessageSquare,
  Sparkles,
  Rocket,
  GraduationCap
} from "lucide-react";

const sessions = [
  { icon: HeartPulse, title: "AI in Healthcare", gradient: "from-emerald to-electric" },
  { icon: Pill, title: "AI in Drug Discovery", gradient: "from-electric to-emerald" },
  { icon: Microscope, title: "AI in Precision Medicine", gradient: "from-emerald to-electric" },
  { icon: Brain, title: "AI in Precision Diagnostics", gradient: "from-electric to-emerald" },
  { icon: Dna, title: "BioAI & BioE3", gradient: "from-emerald to-electric" },
  { icon: FlaskConical, title: "Synthetic Biology & Smart Proteins", gradient: "from-electric to-emerald" },
];

const activities = [
  { icon: Presentation, title: "Scientific Sessions" },
  { icon: Microscope, title: "Clinical Research Symposium" },
  { icon: MessageSquare, title: "Industry Fireside Chat" },
  { icon: Users, title: "Panel Discussions" },
  { icon: Rocket, title: "Product Launches"},
  { icon: GraduationCap, title: "Student Scientific Presentations" },
];

export default function Sessions() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="sessions" className="py-16 md:py-24 bg-navy-dark">
      <div ref={ref} className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-2xl md:text-4xl font-semibold tracking-tight mb-4 text-white">
            Conference Sessions
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald to-electric mx-auto mb-4" />
          <p className="text-base md:text-lg text-slate-300 max-w-2xl mx-auto">
            Explore cutting-edge topics at the intersection of AI and genomics
          </p>
        </motion.div>

        {/* Main Sessions Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 md:mb-16">
          {sessions.map((session, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-2xl border border-slate-700 bg-slate-900/40 backdrop-blur-md p-6 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${session.gradient} flex items-center justify-center mb-4`}>
                <session.icon className="text-white" size={28} />
              </div>
              <h3 className="text-lg font-semibold text-white">
                {session.title}
              </h3>
            </motion.div>
          ))}
        </div>

        {/* Activities Section */}
        <div>
          <h3 className="text-xl md:text-2xl font-semibold text-center mb-8 text-white">
            Conference Activities
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {activities.map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                className="flex items-center gap-4 rounded-lg border border-slate-700 bg-slate-900/40 backdrop-blur-md p-4 hover:bg-slate-800/60 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-emerald/20 flex items-center justify-center flex-shrink-0">
                  <activity.icon className="text-emerald" size={20} />
                </div>
                <span className="text-slate-300 font-medium text-sm md:text-base">{activity.title}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
