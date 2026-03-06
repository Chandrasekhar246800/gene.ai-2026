"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function RotatingLogo() {
  return (
    <div className="flex justify-center lg:justify-start mb-4 lg:mb-5">
      {/* Complete Neuron Structure Container */}
      <div className="relative w-[320px] h-[170px] sm:w-[400px] sm:h-[200px] lg:w-[500px] lg:h-[260px]">
        {/* Neuron Axon and Terminals - Static SVG */}
        <svg 
          viewBox="0 0 400 200" 
          className="w-full h-full absolute top-0 left-0"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="axonGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#1e90ff" />
              <stop offset="100%" stopColor="#00b894" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          {/* Axon Body with Curve - extends from hexagon */}
          {/* Main axon path with slight S-curve - EXTENDED */}
          <path
            d="M 90 100 Q 150 95, 220 100 Q 280 105, 330 102"
            stroke="url(#axonGradient)"
            strokeWidth="8"
            fill="none"
            strokeLinecap="round"
            opacity="0.7"
          />

          {/* Myelin Sheath Segments - EXTENDED */}
          {/* Segment 1 */}
          <motion.line
            x1="105" y1="98"
            x2="125" y2="97"
            stroke="#00b894"
            strokeWidth="10"
            strokeLinecap="round"
            initial={{ opacity: 0.4 }}
            animate={{ opacity: [0.4, 0.8, 0.4] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0 }}
          />
          {/* Segment 2 */}
          <motion.line
            x1="140" y1="96"
            x2="160" y2="96"
            stroke="#1e90ff"
            strokeWidth="10"
            strokeLinecap="round"
            initial={{ opacity: 0.4 }}
            animate={{ opacity: [0.4, 0.8, 0.4] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
          />
          {/* Segment 3 */}
          <motion.line
            x1="175" y1="97"
            x2="195" y2="99"
            stroke="#00b894"
            strokeWidth="10"
            strokeLinecap="round"
            initial={{ opacity: 0.4 }}
            animate={{ opacity: [0.4, 0.8, 0.4] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
          />
          {/* Segment 4 */}
          <motion.line
            x1="210" y1="100"
            x2="230" y2="102"
            stroke="#1e90ff"
            strokeWidth="10"
            strokeLinecap="round"
            initial={{ opacity: 0.4 }}
            animate={{ opacity: [0.4, 0.8, 0.4] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.9 }}
          />
          {/* Segment 5 */}
          <motion.line
            x1="245" y1="103"
            x2="265" y2="104"
            stroke="#00b894"
            strokeWidth="10"
            strokeLinecap="round"
            initial={{ opacity: 0.4 }}
            animate={{ opacity: [0.4, 0.8, 0.4] }}
            transition={{ duration: 2, repeat: Infinity, delay: 1.2 }}
          />
          {/* Segment 6 */}
          <motion.line
            x1="280" y1="104"
            x2="300" y2="103"
            stroke="#1e90ff"
            strokeWidth="10"
            strokeLinecap="round"
            initial={{ opacity: 0.4 }}
            animate={{ opacity: [0.4, 0.8, 0.4] }}
            transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
          />

          {/* Axon Terminal Branches - EXTENDED */}
          {/* Branch 1 - upper */}
          <path
            d="M 330 102 Q 355 92, 375 75"
            stroke="url(#axonGradient)"
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
            opacity="0.6"
          />
          {/* Branch 2 - middle upper */}
          <path
            d="M 330 102 Q 355 98, 380 92"
            stroke="url(#axonGradient)"
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
            opacity="0.6"
          />
          {/* Branch 3 - center */}
          <path
            d="M 330 102 Q 355 102, 385 102"
            stroke="url(#axonGradient)"
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
            opacity="0.6"
          />
          {/* Branch 4 - middle lower */}
          <path
            d="M 330 102 Q 355 108, 380 115"
            stroke="url(#axonGradient)"
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
            opacity="0.6"
          />
          {/* Branch 5 - lower */}
          <path
            d="M 330 102 Q 352 115, 370 130"
            stroke="url(#axonGradient)"
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
            opacity="0.6"
          />

          {/* Synaptic Terminal Bulbs - EXTENDED */}
          <motion.circle
            cx="375" cy="75"
            r="5"
            fill="#1e90ff"
            filter="url(#glow)"
            animate={{ scale: [1, 1.2, 1], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0 }}
          />
          <motion.circle
            cx="380" cy="92"
            r="5"
            fill="#00b894"
            filter="url(#glow)"
            animate={{ scale: [1, 1.2, 1], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.4 }}
          />
          <motion.circle
            cx="385" cy="102"
            r="5"
            fill="#1e90ff"
            filter="url(#glow)"
            animate={{ scale: [1, 1.2, 1], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.8 }}
          />
          <motion.circle
            cx="380" cy="115"
            r="5"
            fill="#00b894"
            filter="url(#glow)"
            animate={{ scale: [1, 1.2, 1], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2, repeat: Infinity, delay: 1.2 }}
          />
          <motion.circle
            cx="370" cy="130"
            r="5"
            fill="#1e90ff"
            filter="url(#glow)"
            animate={{ scale: [1, 1.2, 1], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2, repeat: Infinity, delay: 1.6 }}
          />

          {/* Signal Pulse Animation along Axon - EXTENDED */}
          <motion.circle
            cx="90"
            cy="100"
            r="4"
            fill="#ffffff"
            filter="url(#glow)"
            animate={{
              cx: [90, 150, 220, 280, 330],
              cy: [100, 95, 100, 105, 102],
              opacity: [0, 1, 1, 1, 0],
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              repeatDelay: 2,
              ease: "easeInOut",
            }}
          />
        </svg>

        {/* Rotating Hexagon with Logo */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-8 left-6 sm:top-10 sm:left-8 lg:top-12 lg:left-10 w-24 h-24 sm:w-28 sm:h-28 lg:w-36 lg:h-36"
        >
          {/* Hexagon Shape with Gradient Border */}
          <div className="absolute inset-0">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <defs>
                <linearGradient id="hexGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#00b894" />
                  <stop offset="50%" stopColor="#1e90ff" />
                  <stop offset="100%" stopColor="#00b894" />
                </linearGradient>
              </defs>
              {/* Hexagon Path */}
              <path
                d="M50 5 L90 27.5 L90 72.5 L50 95 L10 72.5 L10 27.5 Z"
                fill="rgba(15, 23, 42, 0.95)"
                stroke="url(#hexGradient)"
                strokeWidth="2"
              />
            </svg>
          </div>

          {/* Logo in Center - Counter Rotate to Keep it Upright */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="w-16 h-16 sm:w-18 sm:h-18 lg:w-24 lg:h-24 rounded-full bg-white p-1.5 lg:p-2 shadow-lg">
              <Image
                src="/images/sist-logo.jpg"
                alt="SIST Logo"
                width={60}
                height={60}
                className="object-cover rounded-full w-full h-full"
              />
            </div>
          </motion.div>

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
        </motion.div>
      </div>
    </div>
  );
}
