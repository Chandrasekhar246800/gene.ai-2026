"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Building2, Users, Award } from "lucide-react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const partners = [
    { name: "TNFOG", type: "Association Partner" },
    { name: "TIGU", type: "Association Partner" },
    { name: "VivagenDx Research Labs", type: "Association Partner" },
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-navy to-navy-light relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300B894' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div ref={ref} className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-emerald to-electric bg-clip-text text-transparent">
            About the Summit
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald to-electric mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          <div className="glass p-8 rounded-2xl glow-on-hover">
            <p className="text-lg text-white/90 leading-relaxed mb-6">
              GENE.AI 2026 is a premier national summit bringing together leading researchers, clinicians, 
              and industry experts to explore the transformative potential of <span className="text-emerald font-semibold">Artificial Intelligence</span> in 
              <span className="text-electric font-semibold"> Genome Engineering</span> and precision medicine.
            </p>
            <p className="text-base md:text-lg leading-relaxed text-slate-300 text-left">
              This DST-TIDE sponsored conference will focus on cutting-edge applications including 
              AI-enabled genomic platforms, precision diagnostics, drug discovery, personalized therapies, 
              and the critical pathway from translational research to clinical impact.
            </p>
          </div>

          {/* Organized By Section */}
          <div className="rounded-2xl border border-slate-700 bg-slate-900/40 backdrop-blur-md p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <Building2 className="text-emerald" size={24} />
              <h3 className="text-xl md:text-2xl font-semibold text-white">Organized By</h3>
            </div>
            <div className="space-y-3 text-slate-300 text-left">
              <p className="text-base md:text-lg">
                <span className="text-emerald font-semibold">Centre for Drug Discovery and Development (CDDD)</span>
              </p>
              <p className="text-base md:text-lg">
                <span className="text-emerald font-semibold">Department of BioMed</span>
              </p>
              <p className="text-base md:text-lg">
                <span className="text-electric font-semibold">Department of Computer Science Engineering</span>
              </p>
              <p className="text-base md:text-lg font-medium">
                Sathyabama Institute of Science & Technology
              </p>
            </div>
          </div>

          {/* Association Partners */}
          <div className="rounded-2xl border border-slate-700 bg-slate-900/40 backdrop-blur-md p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <Users className="text-electric" size={24} />
              <h3 className="text-xl md:text-2xl font-semibold text-white">In Association With</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {partners.map((partner, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                  className="border border-slate-700 bg-slate-800/40 p-4 rounded-lg text-center hover:bg-slate-800/60 transition-all duration-300"
                >
                  <p className="font-semibold text-white text-base md:text-lg">{partner.name}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Sponsorship Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-3 border border-slate-700 bg-slate-900/40 backdrop-blur-md px-6 md:px-8 py-3 md:py-4 rounded-lg">
              <Award className="text-emerald" size={20} />
              <span className="text-base md:text-lg font-semibold text-white">DST-TIDE Sponsored Summit</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
