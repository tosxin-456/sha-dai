import React from "react";
import { motion } from "framer-motion";

export default function PersonaCard({ persona, isSelected, onSelect }) {
  return (
    <motion.button
      layout
      onClick={() => onSelect(persona)}
      aria-pressed={isSelected}
      className={`relative rounded-2xl p-5 text-left shadow-lg border-2 focus:outline-none focus:ring-4 transition-all w-full
${isSelected ? "scale-105 shadow-2xl" : ""}`}
      style={{
        background: isSelected
          ? `linear-gradient(135deg, ${persona.accentGradient[0]}, ${persona.accentGradient[1]})`
          : "#ffffff",
        color: isSelected ? "#fff" : "#111827",
        borderColor: isSelected ? "rgba(255,255,255,0.18)" : "transparent"
      }}
    >
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-lg font-semibold">{persona.name}</h3>
          <p className="text-sm mt-1 opacity-80">
            {persona.keyQuizTriggers.join(" • ")}
          </p>
        </div>
        <div className="ml-3 text-sm opacity-90">
          {isSelected ? "Selected" : ""}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isSelected ? 1 : 0 }}
        transition={{ duration: 0.35 }}
        className="mt-4 text-sm"
      >
        <p className="text-xs">{persona.whyItFits}</p>
      </motion.div>
    </motion.button>
  );
}
