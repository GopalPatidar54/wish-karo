"use client";

import Link from "next/link";
import type { Festival } from "@/app/lib/festivals";
import type { CardTheme } from "@/app/lib/themes";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import GreetingPreview from "@/app/components/GreetingPreview";
import FloatingElements from "@/app/components/FloatingElements";
import FallingPetals from "@/app/components/FallingPetals";
import ParticleBackground from "@/app/components/ParticleBackground";

export default function WishViewerClient({
  from,
  to,
  occasion,
  message,
  festival,
  theme,
}: {
  from: string;
  to?: string;
  occasion: string;
  message: string;
  festival: Festival | null;
  theme: CardTheme;
}) {
  const recipientName = to?.trim();

  return (
    <div className="flex min-h-screen flex-col bg-gray-950 text-white relative selection:bg-purple-500 selection:text-white">
      <Navbar />

      {/* Falling Flower Petals Animation across the full screen */}
      <FallingPetals count={26} />

      {/* Subtle Floating Ambient Particles */}
      <ParticleBackground count={18} />

      <main className="relative flex flex-1 flex-col items-center justify-center overflow-hidden px-4 py-10 sm:py-16">
        {/* Festival thematic background glow */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${
            festival?.gradient ?? "from-purple-900 via-indigo-950 to-slate-900"
          } opacity-20 pointer-events-none`}
          aria-hidden="true"
        />

        {/* Ambient floating decorative emojis */}
        {festival && (
          <FloatingElements
            emojis={festival.decorEmojis}
            count={10}
            className="z-0 opacity-40 pointer-events-none"
          />
        )}

        {/* Central Greeting Presentation Container */}
        <div className="relative z-10 w-full max-w-xl mx-auto flex flex-col items-center">
          {/* Top festive badge & greeting notification */}
          <div className="mb-6 text-center animate-fade-in-down">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 backdrop-blur-md border border-white/15 text-xs sm:text-sm font-medium text-purple-200 shadow-md">
              <span className="text-base" aria-hidden="true">💌</span>
              <span>
                {recipientName ? (
                  <>A special festive wish for <strong className="text-white">{recipientName}</strong></>
                ) : (
                  <>A special festive wish for you</>
                )}
              </span>
            </div>
          </div>

          {/* Single Central Greeting Card */}
          <div className="w-full shadow-2xl transition-all duration-300">
            <GreetingPreview
              message={message}
              from={from}
              to={to}
              theme={theme}
              festival={festival ?? undefined}
            />
          </div>

          {/* ── Feature 3: Bottom Call to Action ── */}
          <section className="mt-12 w-full animate-fade-in-up stagger-2">
            <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-6 sm:p-8 backdrop-blur-xl shadow-2xl text-center">
              <span className="text-4xl sm:text-5xl inline-block mb-3 animate-float select-none" aria-hidden="true">
                💖
              </span>
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                Want to share happiness with someone else? 💖
              </h2>
              <p className="mt-2 text-sm sm:text-base text-purple-200/90 max-w-md mx-auto leading-relaxed">
                Create your own personalized wish and make someone&apos;s day special.
              </p>

              <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
                <Link
                  href={`/create?occasion=${encodeURIComponent(occasion)}`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-amber-400 via-orange-400 to-rose-400 px-8 py-4 text-base font-bold text-gray-950 shadow-xl shadow-amber-500/25 transition-all duration-200 hover:scale-105 hover:shadow-amber-500/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300"
                >
                  <span>Create Your Own Wish ✨</span>
                </Link>

                <Link
                  href="/"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-4 text-sm font-semibold text-white/90 hover:bg-white/10 transition-colors"
                >
                  <span>Explore All Festivals</span>
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
