'use client';

import { motion } from "framer-motion";
import { useEffect } from "react";
import { AlertCircle, Home } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-navy flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-2xl"
      >
        <div className="w-24 h-24 mx-auto mb-8 rounded-full bg-gradient-to-br from-emerald/30 to-electric/30 flex items-center justify-center border-2 border-emerald/50">
          <AlertCircle className="text-emerald" size={48} />
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-emerald to-electric bg-clip-text text-transparent">
          Something Went Wrong
        </h1>

        <p className="text-xl text-white/70 mb-8">
          We encountered an error while loading the page. Please try again.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={reset}
            className="px-8 py-4 bg-gradient-to-r from-emerald to-electric text-white rounded-full font-semibold hover:shadow-lg hover:shadow-emerald/50 transition-all duration-300 hover:scale-105"
          >
            Try Again
          </button>
          <a
            href="/"
            className="flex items-center justify-center gap-2 px-8 py-4 glass text-white rounded-full font-semibold hover:bg-white/10 transition-all duration-300 hover:scale-105"
          >
            <Home size={20} />
            Go Home
          </a>
        </div>
      </motion.div>
    </div>
  );
}
