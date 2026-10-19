"use client";

import { useState } from "react";

interface Petal {
  id: number;
  char: string;
  left: string;
  size: number;
  duration: string;
  delay: string;
  swayAmount: string;
}

const PETAL_EMOJIS = ["🌸", "🌺", "🌼", "✨", "🍃", "🏵️", "🍂", "✨"];

function createPetals(count: number): Petal[] {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    char: PETAL_EMOJIS[i % PETAL_EMOJIS.length],
    left: `${(i / count) * 96 + Math.random() * 4}%`,
    size: 0.9 + Math.random() * 0.9,
    duration: `${6 + Math.random() * 8}s`,
    delay: `${Math.random() * 6}s`,
    swayAmount: `${-25 + Math.random() * 50}px`,
  }));
}

/**
 * Renders lightweight, GPU-accelerated falling flower petals and sparkles.
 */
export default function FallingPetals({
  count = 22,
  className = "",
}: {
  count?: number;
  className?: string;
}) {
  const [petals] = useState(() => createPetals(count));

  return (
    <div
      className={`fixed inset-0 pointer-events-none overflow-hidden z-0 ${className}`}
      aria-hidden="true"
    >
      {petals.map((petal) => (
        <span
          key={petal.id}
          className="absolute animate-petal-fall select-none"
          style={{
            left: petal.left,
            top: "-40px",
            fontSize: `${petal.size}rem`,
            animationDuration: petal.duration,
            animationDelay: petal.delay,
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            ["--sway" as any]: petal.swayAmount,
          }}
        >
          {petal.char}
        </span>
      ))}
    </div>
  );
}

