"use client";

import { FileQuestion, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-navy flex items-center justify-center px-4">
      <div className="text-center max-w-2xl">
        <div className="w-24 h-24 mx-auto mb-8 rounded-full bg-gradient-to-br from-emerald/30 to-electric/30 flex items-center justify-center border-2 border-emerald/50">
          <FileQuestion className="text-emerald" size={48} />
        </div>

        <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-emerald to-electric bg-clip-text text-transparent">
          404
        </h1>

        <h2 className="text-3xl font-bold text-white mb-4">
          Page Not Found
        </h2>

        <p className="text-xl text-white/70 mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>

        <a
          href="/"
          className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald to-electric text-white rounded-full font-semibold hover:shadow-lg hover:shadow-emerald/50 transition-all duration-300 hover:scale-105"
        >
          <Home size={20} />
          Back to Home
        </a>
      </div>
    </div>
  );
}
