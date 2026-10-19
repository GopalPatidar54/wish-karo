import Link from "next/link";
import type { Festival } from "@/app/lib/festivals";

export default function FestivalCard({
  festival,
  index,
}: {
  festival: Festival;
  index: number;
}) {
  return (
    <Link
      href={`/create?occasion=${festival.id}`}
      className={`
        group relative flex flex-col items-center gap-3 rounded-2xl p-6
        bg-gradient-to-br ${festival.gradient}
        text-white shadow-lg
        glow-hover animate-fade-in-up
        stagger-${index + 1}
        overflow-hidden
        focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-purple-600
      `}
    >
      {/* Decorative overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      {/* Emoji */}
      <span
        className="relative z-10 text-4xl transition-transform duration-300 group-hover:scale-110 sm:text-5xl"
        aria-hidden="true"
      >
        {festival.emoji}
      </span>

      {/* Name */}
      <h3 className="relative z-10 text-lg font-bold">{festival.name}</h3>
      <p className="relative z-10 text-sm font-medium opacity-90">
        {festival.nameHi}
      </p>

      {/* Description */}
      <p className="relative z-10 mt-1 text-xs opacity-75">
        {festival.description}
      </p>

      {/* Sparkle decoration on hover */}
      <span className="absolute -right-2 -top-2 text-2xl opacity-0 transition-all duration-300 group-hover:opacity-70 group-hover:rotate-12">
        ✨
      </span>
    </Link>
  );
}

