"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function BioAIHeroVisual() {
  const [rotation, setRotation] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [binarySequence, setBinarySequence] = useState<string[]>([]);

  useEffect(() => {
    setMounted(true);
    // Generate deterministic binary sequence once after mount
    setBinarySequence(Array.from({ length: 8 }, () => Math.random() > 0.5 ? "1" : "0"));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => (prev + 0.3) % 360);
    }, 30); // Slower, more controlled rotation

    return () => clearInterval(interval);
  }, []);

  // DNA helix parameters - anatomically accurate
  const helixHeight = 480;
  const helixWidth = 400;
  const centerX = helixWidth / 2;
  const centerY = helixHeight / 2;
  const radius = 70; // Helix radius
  const helixRise = 34; // Distance per base pair (Angstroms scaled)
  const basesPerTurn = 10.5; // Actual DNA structure
  const totalBases = 30; // Total base pairs to display
  const perspective = 800; // Perspective depth

  // Generate realistic helix points
  const generateHelixPoints = () => {
    const strand1: { x: number; y: number; z: number; angle: number }[] = [];
    const strand2: { x: number; y: number; z: number; angle: number }[] = [];
    const basePairs: { 
      x1: number; y1: number; z1: number; 
      x2: number; y2: number; z2: number; 
      label: string;
      index: number;
    }[] = [];

    const baseSequence = ["C-G", "T-A", "A-T", "G-C", "C-G", "T-A", "G-C", "A-T"];

    for (let i = 0; i < totalBases; i++) {
      // Calculate angle with proper DNA twist
      const angleOffset = (rotation * Math.PI) / 180;
      const baseAngle = (i / basesPerTurn) * Math.PI * 2 + angleOffset;
      
      // Y position (vertical)
      const y = (i / totalBases) * helixHeight * 0.8 + 40;
      
      // Strand 1 (phosphate backbone)
      const x1 = centerX + Math.cos(baseAngle) * radius;
      const z1 = Math.sin(baseAngle) * radius;
      
      // Strand 2 (opposite side, 180 degrees)
      const x2 = centerX + Math.cos(baseAngle + Math.PI) * radius;
      const z2 = Math.sin(baseAngle + Math.PI) * radius;

      strand1.push({ x: x1, y, z: z1, angle: baseAngle });
      strand2.push({ x: x2, y, z: z2, angle: baseAngle + Math.PI });

      // Add base pairs at each position
      if (i % 2 === 0) {
        basePairs.push({
          x1, y1: y, z1,
          x2, y2: y, z2,
          label: baseSequence[i % baseSequence.length],
          index: i
        });
      }
    }

    return { strand1, strand2, basePairs };
  };

  const { strand1, strand2, basePairs } = generateHelixPoints();

  // 3D to 2D projection with realistic perspective
  const project3D = (x: number, y: number, z: number) => {
    const scale = perspective / (perspective + z);
    const projX = centerX + (x - centerX) * scale;
    const projY = y * scale * 0.9 + 10;
    
    // Depth-based opacity and brightness
    const depth = (z + radius) / (radius * 2);
    const opacity = 0.3 + (depth * 0.7);
    const brightness = 0.6 + (depth * 0.4);
    
    return { x: projX, y: projY, opacity, brightness, scale, z };
  };

  // Create smooth bezier path for strands
  const createSmoothPath = (points: { x: number; y: number; z: number }[]) => {
    if (points.length < 2) return "";
    
    let path = "";
    for (let i = 0; i < points.length; i++) {
      const proj = project3D(points[i].x, points[i].y, points[i].z);
      
      if (i === 0) {
        path += `M ${proj.x} ${proj.y}`;
      } else {
        const prevProj = project3D(points[i - 1].x, points[i - 1].y, points[i - 1].z);
        const cpX = (prevProj.x + proj.x) / 2;
        const cpY = (prevProj.y + proj.y) / 2;
        path += ` Q ${cpX} ${cpY} ${proj.x} ${proj.y}`;
      }
    }
    return path;
  };

  // Sort base pairs by z-index for proper rendering order
  const sortedBasePairs = [...basePairs].sort((a, b) => a.z1 - b.z1);

  return (
    <div className="relative w-full h-[400px] lg:h-[500px] pointer-events-none overflow-hidden">
      <svg
        viewBox="0 0 400 500"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Realistic gradients based on depth */}
          <linearGradient id="strandGradientFront" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#00B894" stopOpacity="0.95" />
            <stop offset="50%" stopColor="#1E90FF" stopOpacity="1" />
            <stop offset="100%" stopColor="#00B894" stopOpacity="0.95" />
          </linearGradient>

          <linearGradient id="strandGradientBack" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#00B894" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#1E90FF" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#00B894" stopOpacity="0.4" />
          </linearGradient>

          {/* Radial gradient for spheres (nucleotides) */}
          <radialGradient id="nucleotideGradient" cx="30%" cy="30%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#1E90FF" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#0B5394" stopOpacity="1" />
          </radialGradient>

          <radialGradient id="nucleotideGradientGreen" cx="30%" cy="30%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#00B894" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#007A5E" stopOpacity="1" />
          </radialGradient>

          {/* 3D-like glow and shadow */}
          <filter id="deepGlow">
            <feGaussianBlur stdDeviation="6" result="coloredBlur" />
            <feOffset dx="2" dy="2" result="offsetBlur" />
            <feMerge>
              <feMergeNode in="offsetBlur" />
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <filter id="strandGlow">
            <feGaussianBlur stdDeviation="4" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <filter id="shadow">
            <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
            <feOffset dx="1" dy="2" result="offsetblur" />
            <feComponentTransfer>
              <feFuncA type="linear" slope="0.3" />
            </feComponentTransfer>
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Subtle background grid - computational aesthetic */}
        <g opacity="0.08">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#1E90FF" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="400" height="500" fill="url(#grid)" />
        </g>

        {/* Digital data stream background */}
        {mounted && (
          <g opacity="0.1">
            {binarySequence.map((binary, i) => (
              <motion.text
                key={`binary-${i}`}
                x={20 + i * 50}
                y="0"
                fill="#1E90FF"
                fontSize="10"
                fontFamily="monospace"
                initial={{ y: 0, opacity: 0 }}
                animate={{ y: 500, opacity: [0, 0.3, 0] }}
                transition={{
                  duration: 8,
                  delay: i * 0.5,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                {binary}
              </motion.text>
            ))}
          </g>
        )}

        {/* Render back base pairs (lower z-index) */}
        {sortedBasePairs.filter((pair) => pair.z1 < 0).map((pair, index) => {
          const proj1 = project3D(pair.x1, pair.y1, pair.z1);
          const proj2 = project3D(pair.x2, pair.y2, pair.z2);
          const avgOpacity = (proj1.opacity + proj2.opacity) / 2;

          return (
            <g key={`base-back-${pair.index}`} opacity={avgOpacity * 0.6}>
              {/* Base pair connector */}
              <line
                x1={proj1.x}
                y1={proj1.y}
                x2={proj2.x}
                y2={proj2.y}
                stroke="#1E90FF"
                strokeWidth={2 * proj1.scale}
                opacity={avgOpacity * 0.4}
                strokeLinecap="round"
              />
              
              {/* Nucleotide spheres */}
              <circle
                cx={proj1.x}
                cy={proj1.y}
                r={5 * proj1.scale}
                fill="url(#nucleotideGradientGreen)"
                opacity={proj1.opacity * 0.7}
              />
              <circle
                cx={proj2.x}
                cy={proj2.y}
                r={5 * proj2.scale}
                fill="url(#nucleotideGradient)"
                opacity={proj2.opacity * 0.7}
              />
            </g>
          );
        })}

        {/* Render back strand (lower z-index) */}
        <motion.path
          d={createSmoothPath(strand2)}
          fill="none"
          stroke="url(#strandGradientBack)"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#shadow)"
          opacity="0.7"
        />

        {/* Render front base pairs (higher z-index) */}
        {sortedBasePairs.filter((pair) => pair.z1 >= 0).map((pair, index) => {
          const proj1 = project3D(pair.x1, pair.y1, pair.z1);
          const proj2 = project3D(pair.x2, pair.y2, pair.z2);
          const avgOpacity = (proj1.opacity + proj2.opacity) / 2;
          const avgBrightness = (proj1.brightness + proj2.brightness) / 2;

          return (
            <g key={`base-front-${pair.index}`} opacity={avgOpacity}>
              {/* Base pair connector with gradient */}
              <line
                x1={proj1.x}
                y1={proj1.y}
                x2={proj2.x}
                y2={proj2.y}
                stroke={`rgba(30, 144, 255, ${avgBrightness})`}
                strokeWidth={3 * proj1.scale}
                opacity={avgOpacity * 0.8}
                strokeLinecap="round"
                filter="url(#strandGlow)"
              />
              
              {/* Nucleotide spheres with 3D effect */}
              <circle
                cx={proj1.x}
                cy={proj1.y}
                r={7 * proj1.scale}
                fill="url(#nucleotideGradientGreen)"
                opacity={proj1.opacity}
                filter="url(#deepGlow)"
              />
              <circle
                cx={proj2.x}
                cy={proj2.y}
                r={7 * proj2.scale}
                fill="url(#nucleotideGradient)"
                opacity={proj2.opacity}
                filter="url(#deepGlow)"
              />

              {/* Base pair labels (only on front-facing pairs) */}
              {proj1.z > -20 && (
                <text
                  x={(proj1.x + proj2.x) / 2}
                  y={(proj1.y + proj2.y) / 2 + 3}
                  fill="#FFFFFF"
                  fontSize={9 * proj1.scale}
                  fontWeight="700"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  opacity={avgOpacity * avgBrightness * 0.9}
                  style={{ 
                    fontFamily: "monospace",
                    textShadow: "0 0 8px rgba(30,144,255,0.8)",
                  }}
                >
                  {pair.label}
                </text>
              )}
            </g>
          );
        })}

        {/* Render front strand (higher z-index) */}
        <motion.path
          d={createSmoothPath(strand1)}
          fill="none"
          stroke="url(#strandGradientFront)"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#strandGlow)"
          opacity="0.95"
        />

        {/* Add glossy highlights to front strand */}
        {strand1.filter((_, i) => i % 3 === 0).map((point, index) => {
          const proj = project3D(point.x, point.y, point.z);
          if (proj.z < -10) return null;
          
          return (
            <circle
              key={`highlight-${index}`}
              cx={proj.x + 2}
              cy={proj.y - 2}
              r={3 * proj.scale}
              fill="#FFFFFF"
              opacity={proj.brightness * 0.4}
              filter="url(#deepGlow)"
            />
          );
        })}

        {/* Neural network morphing at bottom */}
        <g opacity="0.75" transform="translate(0, 400)">
          {/* Morphing particles transitioning from DNA to AI */}
          {[...Array(12)].map((_, i) => {
            const angle = (i / 12) * Math.PI * 2 + (rotation * Math.PI) / 90;
            const x = centerX + Math.cos(angle) * 30;
            const y = 20 + Math.sin(angle) * 15;
            
            return (
              <motion.circle
                key={`morph-${i}`}
                cx={x}
                cy={y}
                r="2"
                fill="#1E90FF"
                initial={{ scale: 0 }}
                animate={{ 
                  scale: [1, 1.5, 1],
                  opacity: [0.6, 1, 0.6],
                }}
                transition={{
                  duration: 2,
                  delay: i * 0.1,
                  repeat: Infinity,
                }}
              />
            );
          })}

          {/* Neural network nodes */}
          {[0, 1, 2, 3, 4].map((i) => (
            <circle
              key={`nn-${i}`}
              cx={80 + i * 60}
              cy="60"
              r="6"
              fill="none"
              stroke="#00B894"
              strokeWidth="2.5"
              filter="url(#deepGlow)"
            />
          ))}

          {/* Connections */}
          {[0, 1, 2, 3, 4].map((i) =>
            [1, 2, 3].map((j) => (
              <line
                key={`nn-line-${i}-${j}`}
                x1={80 + i * 60}
                y1="60"
                x2={140 + j * 60}
                y2="80"
                stroke="url(#strandGradientFront)"
                strokeWidth="1"
                opacity="0.3"
              />
            ))
          )}
        </g>
      </svg>

      {/* Ambient lighting overlay */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(circle at 50% 30%, rgba(30,144,255,0.15), transparent 50%),
            radial-gradient(circle at 50% 70%, rgba(0,184,148,0.15), transparent 50%)
          `
        }}
      />
    </div>
  );
}
