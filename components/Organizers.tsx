"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { organizingTeam } from "@/data/team";
import { Crown, Award, Users, UserCheck } from "lucide-react";
import Image from "next/image";

const iconMap: Record<string, any> = {
  "Chief Patron": Crown,
  "Patron": Award,
  "Conveners": Users,
  "Co-Conveners": Users,
  "Coordinators": UserCheck,
};

export default function Organizers() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="organizers" className="py-16 md:py-24 bg-gradient-to-b from-navy-light to-navy">
      <div ref={ref} className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-2xl md:text-4xl font-semibold tracking-tight mb-4 text-white">
            Organizing Team
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald to-electric mx-auto mb-4" />
          <p className="text-base md:text-lg text-slate-300 max-w-2xl mx-auto">
            Distinguished leadership driving excellence in genomic research
          </p>
        </motion.div>

        <div className="space-y-12">
          {organizingTeam.map((section, sectionIndex) => {
            const Icon = iconMap[section.title] || Users;
            
            return (
              <motion.div
                key={sectionIndex}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: sectionIndex * 0.2 }}
              >
                <div className="flex items-center gap-3 mb-6 md:mb-8">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-gradient-to-br from-emerald to-electric flex items-center justify-center">
                    <Icon className="text-white" size={20} />
                  </div>
                  <h3 className="text-xl md:text-2xl font-semibold text-white">
                    {section.title}
                  </h3>
                </div>

                <div className={`grid grid-cols-1 ${
                  section.members.length === 1 ? 'md:grid-cols-1' : 
                  section.members.length === 2 ? 'md:grid-cols-2' : 
                  'sm:grid-cols-2 lg:grid-cols-4'
                } gap-6 md:gap-8`}>
                  {section.members.map((member, memberIndex) => (
                    <motion.div
                      key={memberIndex}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.5, delay: sectionIndex * 0.2 + memberIndex * 0.1 }}
                      className="glass p-6 rounded-2xl glow-on-hover text-center"
                    >
                      {/* Avatar / Photo */}
                      {member.image ? (
                        <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-2 border-emerald/50">
                          <Image
                            src={member.image}
                            alt={member.name}
                            width={96}
                            height={96}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ) : (
                        <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-emerald/30 to-electric/30 flex items-center justify-center border-2 border-emerald/50">
                          <Users className="text-emerald" size={40} />
                        </div>
                      )}
                      
                      <h4 className="text-lg font-bold text-white mb-2">
                        {member.name}
                      </h4>
                      <p className="text-emerald/90 text-sm font-medium mb-1">
                        {member.designation}
                      </p>
                      {member.organization && (
                        <p className="text-white/60 text-sm">
                          {member.organization}
                        </p>
                      )}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
