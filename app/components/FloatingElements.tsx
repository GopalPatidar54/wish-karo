"use client";

import { useState } from "react";

interface FloatingItem {
  id: number;
  emoji: string;
  left: string;
  top: string;
  fontSize: string;
  driftX: string;
  driftY: string;
  driftR: string;
  duration: string;
  delay: string;
}

function createFloatingItems(emojis: string[], count: number): FloatingItem[] {
  if (!emojis.length) return [];
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    emoji: emojis[i % emojis.length],
    left: `${Math.random() * 90 + 5}%`,
    top: `${Math.random() * 90 + 5}%`,
    fontSize: `${1 + Math.random() * 1.5}rem`,
    driftX: `${-40 + Math.random() * 80}px`,
    driftY: `${-80 + Math.random() * 160}px`,
    driftR: `${-30 + Math.random() * 60}deg`,
    duration: `${6 + Math.random() * 8}s`,
    delay: `${Math.random() * 6}s`,
  }));
}

/**
 * Renders floating decorative emojis that drift around using pure CSS.
 */
export default function FloatingElements({
  emojis,
  count = 12,
  className = "",
}: {
  emojis: string[];
  count?: number;
  className?: string;
}) {
  // Use lazy initializer so Math.random() runs once, not on re-renders
  const [items] = useState(() => createFloatingItems(emojis, count));

  if (!items.length) return null;

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`} aria-hidden="true">
      {items.map((item) => (
        <span
          key={item.id}
          className="floating-emoji animate-float-drift"
          style={{
            left: item.left,
            top: item.top,
            fontSize: item.fontSize,
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            ["--drift-x" as any]: item.driftX,
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            ["--drift-y" as any]: item.driftY,
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            ["--drift-r" as any]: item.driftR,
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            ["--float-duration" as any]: item.duration,
            animationDelay: item.delay,
          }}
        >
          {item.emoji}
        </span>
      ))}
    </div>
  );
}

