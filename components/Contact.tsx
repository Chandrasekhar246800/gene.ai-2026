"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { eventConfig } from "@/data/config";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-16 md:py-24 bg-navy-dark">
      <div ref={ref} className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-2xl md:text-4xl font-semibold tracking-tight mb-4 text-white">
            Contact Us
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald to-electric mx-auto mb-4" />
          <p className="text-base md:text-lg text-slate-300">
            Get in touch with us for any queries
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12">
            {/* Email */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="rounded-2xl border border-slate-700 bg-slate-900/40 backdrop-blur-md p-6 md:p-8 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-emerald to-electric flex items-center justify-center flex-shrink-0">
                  <Mail className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                  <a 
                    href={`mailto:${eventConfig.email}`}
                    className="text-emerald hover:text-electric transition-colors text-sm md:text-base"
                  >
                    {eventConfig.email}
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Phone */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="rounded-2xl border border-slate-700 bg-slate-900/40 backdrop-blur-md p-6 md:p-8 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-electric to-emerald flex items-center justify-center flex-shrink-0">
                  <Phone className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
                  <div className="space-y-1">
                    {eventConfig.phone.map((number, index) => (
                      <a 
                        key={index}
                        href={`tel:${number}`}
                        className="block text-emerald hover:text-electric transition-colors"
                      >
                        {number}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Venue */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="glass p-8 rounded-2xl mb-12"
          >
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-emerald to-electric flex items-center justify-center flex-shrink-0">
                <MapPin className="text-white" size={28} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Venue</h3>
                <p className="text-white/90 text-lg">{eventConfig.venue}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="mt-24 border-t border-white/10 pt-8"
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center space-y-4">
            <div className="glass inline-block px-6 py-2 rounded-full">
              <p className="text-emerald font-semibold">DST-TIDE Sponsored Summit</p>
            </div>
            <h3 className="text-2xl font-bold text-white">
              Sathyabama Institute of Science & Technology
            </h3>
            <p className="text-xl bg-gradient-to-r from-emerald to-electric bg-clip-text text-transparent font-bold">
              GENE.AI 2026
            </p>
            <p className="text-white/60 text-sm">
              © 2026 GENE.AI Conference. All Rights Reserved.
            </p>
          </div>
        </div>
      </motion.footer>
    </section>
  );
}
