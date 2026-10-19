import Link from "next/link";
import { festivals } from "@/app/lib/festivals";
import FestivalCard from "@/app/components/FestivalCard";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <Navbar />

      <main className="flex-1">
        {/* ── Hero Section ── */}
        <section className="relative overflow-hidden bg-gradient-to-br from-purple-900 via-indigo-800 to-purple-800 animate-gradient-shift">
          {/* Background decorations */}
          <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
            <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl" />
            <div className="absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl" />
            <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-500/10 blur-3xl" />

            {["✨", "🌟", "💫", "⭐", "✨", "🌟"].map((emoji, i) => (
              <span
                key={i}
                className="absolute animate-float text-xl opacity-30 select-none"
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
            <h1 className="animate-fade-in-up text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Share Happiness,
              <br />
              <span className="bg-gradient-to-r from-amber-300 via-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Spread Wishes
              </span>{" "}
              <span aria-hidden="true">✨</span>
            </h1>

            <p className="animate-fade-in-up stagger-2 mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-purple-100/90 sm:text-xl">
              Create beautiful, personalized festival greetings and celebrate life&apos;s special moments with family and friends through WhatsApp.
            </p>

            <div className="animate-fade-in-up stagger-3 mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/create"
                className="animate-pulse-gentle w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-amber-400 via-yellow-400 to-orange-400 px-8 py-4 text-lg font-bold text-gray-900 shadow-xl shadow-amber-500/30 transition-all duration-300 hover:from-amber-300 hover:via-yellow-300 hover:to-orange-300 hover:shadow-amber-500/50"
              >
                <span aria-hidden="true">🎉</span>
                <span>Create Your Wish</span>
                <span aria-hidden="true">→</span>
              </Link>

              <Link
                href="#festivals"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-4 text-base font-semibold text-white hover:bg-white/20 transition-all"
              >
                <span>Browse Festivals</span>
              </Link>
            </div>
          </div>
        </section>

        {/* ── Festival Grid Section ── */}
        <section id="festivals" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 scroll-mt-16">
          <div className="mb-12 text-center">
            <span className="text-xs uppercase tracking-widest font-bold text-purple-600 dark:text-purple-400">
              Celebrations & Milestones
            </span>
            <h2 className="animate-fade-in mt-2 text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
              Choose an Occasion <span aria-hidden="true">🎊</span>
            </h2>
            <p className="animate-fade-in stagger-1 mt-3 text-base text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
              Select any Indian festival or personal celebration below to generate an animated, personalized greeting link in seconds.
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
        <section className="border-t border-gray-200/70 bg-gray-50/70 dark:border-gray-800/70 dark:bg-gray-900/40">
          <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20">
            <div className="text-center mb-12">
              <span className="text-xs uppercase tracking-widest font-bold text-purple-600 dark:text-purple-400">
                Simple 3-Step Process
              </span>
              <h2 className="mt-2 text-3xl font-extrabold text-gray-900 dark:text-white">
                How Wish Karo Works
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
              {[
                {
                  step: "1",
                  emoji: "🎨",
                  title: "Personalize the Card",
                  desc: "Enter your name, your friend&apos;s name, pick a festival, and choose between authentic Hindi or English greeting templates or craft your own words.",
                },
                {
                  step: "2",
                  emoji: "👀",
                  title: "Live Interactive Preview",
                  desc: "Watch the greeting card transform in real-time with your chosen card theme, colorful gradients, and festive decor icons.",
                },
                {
                  step: "3",
                  emoji: "📲",
                  title: "Share Private Link",
                  desc: "Tap &apos;Share on WhatsApp&apos;. Your recipient gets a short invitation link that reveals the full animated card with falling flower petals.",
                },
              ].map((item, i) => (
                <div
                  key={item.step}
                  className={`animate-fade-in-up stagger-${i + 1} flex flex-col items-center rounded-2xl bg-white p-8 text-center shadow-sm border border-gray-100 dark:border-gray-800 dark:bg-gray-800/80`}
                >
                  <span className="text-4xl select-none" aria-hidden="true">
                    {item.emoji}
                  </span>
                  <div className="mt-3 flex h-8 w-8 items-center justify-center rounded-full bg-purple-100 text-sm font-bold text-purple-700 dark:bg-purple-900/50 dark:text-purple-300">
                    {item.step}
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-gray-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Original Editorial: Significance of Indian Festival Greetings ── */}
        <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20 border-t border-gray-200/70 dark:border-gray-800/70">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
            <span className="text-xs uppercase tracking-widest font-bold text-purple-600 dark:text-purple-400">
              Cultural Heritage & Traditions
            </span>
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">
              The Art of Sharing Festival Wishes in Indian Culture
            </h2>
            <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed">
              In Indian traditions, extending greetings (<em className="text-purple-600 dark:text-purple-400">शुभकामनाएँ</em>) during festivals is more than a courtesy—it is a sacred expression of blessings, camaraderie, and shared joy. Here is the spirit behind each celebration we support:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-orange-50/50 dark:bg-orange-950/20 border border-orange-200/60 dark:border-orange-900/40 space-y-2">
              <h3 className="text-lg font-bold text-orange-950 dark:text-orange-200 flex items-center gap-2">
                <span>🏹</span>
                <span>Dussehra (Vijayadashami) — Triumph of Goodness</span>
              </h3>
              <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                Celebrating Lord Rama&apos;s victory over Ravana and Goddess Durga&apos;s triumph over Mahishasura. Sharing Dussehra greetings inspires loved ones to conquer self-doubt, negativity, and obstacles on their path to righteous success.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-amber-50/50 dark:bg-amber-950/20 border border-amber-200/60 dark:border-amber-900/40 space-y-2">
              <h3 className="text-lg font-bold text-amber-950 dark:text-amber-200 flex items-center gap-2">
                <span>🪔</span>
                <span>Diwali (Deepavali) — Illumination and Abundance</span>
              </h3>
              <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                The festival of lights honors the dispelling of inner darkness. Sending Diwali wishes welcomes Goddess Lakshmi&apos;s prosperity, health, and wisdom into the homes of friends, relatives, and colleagues.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-pink-50/50 dark:bg-pink-950/20 border border-pink-200/60 dark:border-pink-900/40 space-y-2">
              <h3 className="text-lg font-bold text-pink-950 dark:text-pink-200 flex items-center gap-2">
                <span>🎨</span>
                <span>Holi — Harmony and Forgiveness</span>
              </h3>
              <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                The festival of colors welcomes spring and promotes reconciliation. Holi greetings rekindle bonds, mend old misunderstandings, and shower beloved individuals with vibrant optimism.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-indigo-50/50 dark:bg-indigo-950/20 border border-indigo-200/60 dark:border-indigo-900/40 space-y-2">
              <h3 className="text-lg font-bold text-indigo-950 dark:text-indigo-200 flex items-center gap-2">
                <span>🎂</span>
                <span>Birthdays, Anniversaries & New Year</span>
              </h3>
              <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                Personal milestones celebrate gratitude and the beauty of relationships. Personalized heartfelt wishes remind the recipient how deeply their journey is cherished by those around them.
              </p>
            </div>
          </div>
        </section>

        {/* ── Frequently Asked Questions (FAQ) Section ── */}
        <section className="bg-gray-50/80 dark:bg-gray-900/50 border-t border-gray-200/70 dark:border-gray-800/70">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 space-y-10">
            <div className="text-center">
              <span className="text-xs uppercase tracking-widest font-bold text-purple-600 dark:text-purple-400">
                Help & Information
              </span>
              <h2 className="mt-2 text-3xl font-extrabold text-gray-900 dark:text-white">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-4">
              {[
                {
                  q: "Is Wish Karo free to use?",
                  a: "Yes, Wish Karo is 100% free to use. You can generate and share unlimited personalized festival cards and greeting links without signing up or paying any fees.",
                },
                {
                  q: "Are my personal messages or names stored on your database?",
                  a: "No. Wish Karo is built with a zero-database privacy architecture. Your sender name, recipient name, and message are securely encoded into the URL parameters on your own device. We do not store or sell your greetings.",
                },
                {
                  q: "How does sharing on WhatsApp work?",
                  a: "When you tap 'Share on WhatsApp', only a warm short invitation and your unique greeting link are sent into the chat. The full greeting card with falling petals and music is revealed only when your friend opens the link.",
                },
                {
                  q: "Can the person who receives my wish create one too?",
                  a: "Yes! At the bottom of every greeting card, there is a 'Create Your Own Wish ✨' button. Your friend can easily enter their name, pick an occasion, and share happiness with someone else in their life.",
                },
              ].map((faq, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl bg-white p-6 dark:bg-gray-800 border border-gray-200/70 dark:border-gray-700/60 shadow-sm space-y-2"
                >
                  <h3 className="text-base font-bold text-gray-900 dark:text-white flex items-center gap-2">
                    <span className="text-purple-600 dark:text-purple-400">Q.</span>
                    <span>{faq.q}</span>
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed pl-6">
                    {faq.a}
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
