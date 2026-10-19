import Link from "next/link";
import { festivals } from "@/app/lib/festivals";
import FestivalCard from "@/app/components/FestivalCard";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        {/* ── Hero Section ── */}
        <section className="relative overflow-hidden bg-gradient-to-br from-purple-900 via-indigo-800 to-purple-800 animate-gradient-shift">
          {/* Background decorations */}
          <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
            {/* Large blurred circles */}
            <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl" />
            <div className="absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl" />
            <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-500/10 blur-3xl" />

            {/* Floating sparkles */}
            {["✨", "🌟", "💫", "⭐", "✨", "🌟"].map((emoji, i) => (
              <span
                key={i}
                className="absolute animate-float text-xl opacity-30"
                style={{
                  left: `${15 + i * 15}%`,
                  top: `${20 + (i % 3) * 25}%`,
                  animationDelay: `${i * 0.5}s`,
                  animationDuration: `${3 + i * 0.5}s`,
                }}
              >
                {emoji}
              </span>
            ))}
          </div>

          <div className="relative z-10 mx-auto max-w-4xl px-4 py-24 text-center sm:px-6 sm:py-32 lg:py-40">
            {/* Main heading */}
            <h1 className="animate-fade-in-up text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Share Happiness,
              <br />
              <span className="bg-gradient-to-r from-amber-300 via-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Spread Wishes
              </span>{" "}
              <span aria-hidden="true">✨</span>
            </h1>

            {/* Subheading */}
            <p className="animate-fade-in-up stagger-2 mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-purple-100/80 sm:text-xl">
              Create beautiful personalized wishes and share them with your
              loved ones through WhatsApp. Choose a festival, write your
              heartfelt message, and spread joy! 🎉
            </p>

            {/* CTA button */}
            <div className="animate-fade-in-up stagger-3 mt-10">
              <Link
                href="/create"
                className="animate-pulse-gentle inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-amber-400 via-yellow-400 to-orange-400 px-8 py-4 text-lg font-bold text-gray-900 shadow-xl shadow-amber-500/30 transition-all duration-300 hover:from-amber-300 hover:via-yellow-300 hover:to-orange-300 hover:shadow-amber-500/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-purple-800"
              >
                <span aria-hidden="true">🎉</span>
                Create Your Wish
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* ── Festival Grid Section ── */}
        <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <div className="mb-12 text-center">
            <h2 className="animate-fade-in text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
              Choose a Festival{" "}
              <span aria-hidden="true">🎊</span>
            </h2>
            <p className="animate-fade-in stagger-1 mt-3 text-lg text-gray-600 dark:text-gray-400">
              Pick an occasion and create a beautiful wish card
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {festivals.map((festival, index) => (
              <FestivalCard
                key={festival.id}
                festival={festival}
                index={index}
              />
            ))}
          </div>
        </section>

        {/* ── How It Works Section ── */}
        <section className="border-t border-gray-200/60 bg-gray-50/50 dark:border-gray-800/60 dark:bg-gray-900/50">
          <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20">
            <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 dark:text-white">
              How It Works
            </h2>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
              {[
                {
                  step: "1",
                  emoji: "🎨",
                  title: "Choose & Customize",
                  desc: "Select a festival, pick a theme, and write your personalized message in Hindi or English.",
                },
                {
                  step: "2",
                  emoji: "👀",
                  title: "Preview Your Wish",
                  desc: "See a live preview of your beautiful greeting card as you type.",
                },
                {
                  step: "3",
                  emoji: "📲",
                  title: "Share on WhatsApp",
                  desc: "Send your wish directly through WhatsApp with one tap.",
                },
              ].map((item, i) => (
                <div
                  key={item.step}
                  className={`animate-fade-in-up stagger-${i + 1} flex flex-col items-center rounded-2xl bg-white p-8 text-center shadow-md dark:bg-gray-800`}
                >
                  <span className="text-4xl" aria-hidden="true">
                    {item.emoji}
                  </span>
                  <div className="mt-3 flex h-8 w-8 items-center justify-center rounded-full bg-purple-100 text-sm font-bold text-purple-700 dark:bg-purple-900/40 dark:text-purple-300">
                    {item.step}
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
