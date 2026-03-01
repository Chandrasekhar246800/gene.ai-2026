"use client";

import { motion } from "framer-motion";

export default function LeftIntelligenceLayer() {
  return (
    <>
      {/* Circuit Grid Overlay - Computer Science Representation */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.06] hidden lg:block">
        <svg
          viewBox="0 0 600 600"
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="circuitGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1E90FF" />
              <stop offset="100%" stopColor="#00B894" />
            </linearGradient>
          </defs>

          {/* Horizontal circuit lines */}
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <motion.line
              key={`h-line-${i}`}
              x1="0"
              y1={100 + i * 80}
              x2="600"
              y2={100 + i * 80}
              stroke="url(#circuitGradient)"
              strokeWidth="1"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: i * 0.2 }}
            />
          ))}

          {/* Vertical circuit lines */}
          {[0, 1, 2, 3, 4].map((i) => (
            <motion.line
              key={`v-line-${i}`}
              x1={100 + i * 120}
              y1="0"
              x2={100 + i * 120}
              y2="600"
              stroke="url(#circuitGradient)"
              strokeWidth="1"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: i * 0.2 }}
            />
          ))}

          {/* Circuit nodes at intersections */}
          {[0, 1, 2, 3, 4, 5].map((row) =>
            [0, 1, 2, 3, 4].map((col) => (
              <motion.circle
                key={`node-${row}-${col}`}
                cx={100 + col * 120}
                cy={100 + row * 80}
                r="3"
                fill="url(#circuitGradient)"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 2.5 + (row * 5 + col) * 0.05 }}
              />
            ))
          )}

          {/* Animated pulse traveling through circuit */}
          <motion.circle
            cx="100"
            cy="100"
            r="5"
            fill="#1E90FF"
            filter="url(#glow)"
            initial={{ opacity: 0 }}
            animate={{
              cx: [100, 220, 340, 460, 580],
              cy: [100, 180, 260, 340, 420],
              opacity: [0, 1, 1, 1, 0],
            }}
            transition={{
              duration: 4,
              delay: 3,
              repeat: Infinity,
              repeatDelay: 6,
            }}
          />

          <defs>
            <filter id="glow">
              <feGaussianBlur stdDeviation="4" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
        </svg>
      </div>

      {/* AI Signal Pulse Line - Under Title */}
      <div className="absolute top-0 left-0 w-full h-1 overflow-hidden pointer-events-none">
        <motion.div
          className="h-full w-32 bg-gradient-to-r from-transparent via-electric to-transparent"
          initial={{ x: "-100%" }}
          animate={{ x: "400%" }}
          transition={{
            duration: 6,
            delay: 1,
            repeat: Infinity,
            repeatDelay: 6,
            ease: "linear",
          }}
          style={{ filter: "blur(2px)" }}
        />
      </div>
    </>
  );
}
