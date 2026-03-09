"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function RotatingLogo() {
  return (
    <div className="flex justify-center mb-2 lg:mb-3">
      {/* Complete Neuron Structure Container */}
      <div className="relative w-[320px] h-[170px] sm:w-[400px] sm:h-[200px] lg:w-[500px] lg:h-[260px]">
        {/* Hexagon with Logo - Centered */}
        <div className="absolute top-[55%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 sm:w-64 sm:h-64 lg:w-80 lg:h-80">
          {/* Hexagon Shape with Gradient Border */}
          <div className="absolute inset-0">
            <svg viewBox="-40 -50 180 180" className="w-full h-full" style={{ overflow: 'visible' }}>
              <defs>
                <linearGradient id="hexGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#00b894" />
                  <stop offset="50%" stopColor="#1e90ff" />
                  <stop offset="100%" stopColor="#00b894" />
                </linearGradient>
              </defs>
              
              {/* Line from top of hexagon to C.S.E. box */}
              <line
                x1="50" y1="5"
                x2="50" y2="-15"
                stroke="#1e90ff"
                strokeWidth="2"
              />
              
              {/* C.S.E. box at top */}
              <rect
                x="20" y="-35"
                width="60" height="20"
                fill="none"
                stroke="#1e90ff"
                strokeWidth="2"
              />
              <text
                x="50"
                y="-20"
                textAnchor="middle"
                fill="#1e90ff"
                fontSize="10"
                fontWeight="bold"
                fontFamily="Arial, sans-serif"
              >
                C.S.E.
              </text>
              
              {/* Line from left bottom of hexagon to BioMed box - ANGLED */}
              <line
                x1="10" y1="72.5"
                x2="-15" y2="90"
                stroke="#1e90ff"
                strokeWidth="2"
              />
              
              {/* BioMed box on left */}
              <rect
                x="-75" y="75"
                width="60" height="30"
                fill="none"
                stroke="#1e90ff"
                strokeWidth="2"
              />
              <text
                x="-45"
                y="93"
                textAnchor="middle"
                fill="#1e90ff"
                fontSize="10"
                fontWeight="bold"
                fontFamily="Arial, sans-serif"
                fontStyle="italic"
              >
                BioMed
              </text>
              
              {/* Line from right bottom of hexagon to C.D.D.D. box - ANGLED */}
              <line
                x1="90" y1="72.5"
                x2="115" y2="90"
                stroke="#1e90ff"
                strokeWidth="2"
              />
              
              {/* C.D.D.D. box on right */}
              <rect
                x="115" y="75"
                width="60" height="30"
                fill="none"
                stroke="#1e90ff"
                strokeWidth="2"
              />
              <text
                x="145"
                y="93"
                textAnchor="middle"
                fill="#1e90ff"
                fontSize="10"
                fontWeight="bold"
                fontFamily="Arial, sans-serif"
                fontStyle="italic"
              >
                C.D.D.D.
              </text>
              
              {/* Hexagon Path */}
              <path
                d="M50 5 L90 27.5 L90 72.5 L50 95 L10 72.5 L10 27.5 Z"
                fill="rgba(15, 23, 42, 0.95)"
                stroke="url(#hexGradient)"
                strokeWidth="2"
              />
            </svg>
          </div>

          {/* Logo in Center */}
          <div className="absolute top-[55.5%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 rounded-full bg-white p-2 lg:p-2.5 shadow-lg">
              <Image
                src="/images/sist-logo.jpg"
                alt="SIST Logo"
                width={60}
                height={60}
                className="object-cover rounded-full w-full h-full"
              />
            </div>
          </div>

          {/* Glowing Effect */}
          <motion.div
            animate={{
              opacity: [0.3, 0.6, 0.3],
              scale: [1, 1.15, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute inset-0 blur-xl bg-gradient-to-r from-emerald/20 to-electric/20 rounded-full"
          />
        </div>
      </div>
    </div>
  );
}
