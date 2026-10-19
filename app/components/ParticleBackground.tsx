"use client";

import { useState } from "react";

interface Particle {
  id: number;
  left: string;
  size: number;
  duration: string;
  delay: string;
  opacity: number;
}

function createParticles(count: number): Particle[] {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    left: `${(i / count) * 100 + Math.random() * (100 / count)}%`,
    size: 2 + Math.random() * 4,
    duration: `${8 + Math.random() * 12}s`,
    delay: `${Math.random() * 10}s`,
    opacity: 0.15 + Math.random() * 0.3,
  }));
}

/**
 * Renders subtle floating particle dots using pure CSS animations.
 * No JavaScript animation loop — all GPU-accelerated CSS.
 */
export default function ParticleBackground({
  count = 20,
  className = "",
}: {
  count?: number;
  className?: string;
}) {
  // Use lazy initializer so Math.random() runs only once, not during re-renders
  const [particles] = useState(() => createParticles(count));

  return (
    <div className={`particles-container ${className}`} aria-hidden="true">
      {particles.map((p) => (
        <div
          key={p.id}
          className="particle animate-particle-rise"
          style={{
            left: p.left,
            bottom: `-${p.size}px`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            opacity: p.opacity,
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            ["--particle-duration" as any]: p.duration,
            animationDelay: p.delay,
          }}
        />
      ))}
    </div>
  );
}

