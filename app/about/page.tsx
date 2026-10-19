import type { Metadata } from "next";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us — Wish Karo",
  description:
    "Learn about Wish Karo's mission to celebrate Indian festivals, milestones, and personal moments with privacy-friendly digital greeting cards.",
};

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <Navbar />

      <main className="flex-1 py-12 px-4 sm:px-6 lg:px-8">
        <article className="mx-auto max-w-4xl rounded-3xl bg-white p-8 sm:p-12 shadow-sm border border-gray-200/70 dark:bg-gray-900 dark:border-gray-800 space-y-10">
          <header className="border-b border-gray-200 dark:border-gray-800 pb-6 text-center sm:text-left">
            <span className="text-xs uppercase tracking-widest font-bold text-purple-600 dark:text-purple-400">
              Our Story & Mission
            </span>
            <h1 className="mt-2 text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white">
              About Wish Karo 🎉
            </h1>
            <p className="mt-2 text-base text-gray-600 dark:text-gray-300">
              Connecting hearts through thoughtful, beautifully animated digital festival greetings.
            </p>
          </header>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Why We Built Wish Karo
            </h2>
            <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed">
              In an era dominated by generic, forwarded WhatsApp messages and copied images that clutter phone galleries, we wanted to bring back the magic of receiving a personalized greeting card. Festivals in India—from Dussehra and Diwali to Holi, birthdays, and anniversaries—are rich emotional experiences meant to be shared with love, respect, and joy.
            </p>
            <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed">
              <strong>Wish Karo</strong> was born from a simple belief: wishing someone should feel special, authentic, and memorable. Instead of sending bulky forwarded media, our users send an elegant personal link. When the recipient opens it, they are greeted by an interactive full-screen experience with falling flower petals, gentle festive ambient lights, their own name honored in the greeting header, and a warm signature from the sender.
            </p>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            <div className="p-6 rounded-2xl bg-purple-50/60 dark:bg-purple-950/30 border border-purple-100 dark:border-purple-900/40">
              <span className="text-3xl select-none" aria-hidden="true">🔒</span>
              <h3 className="mt-3 font-bold text-lg text-gray-900 dark:text-white">Privacy First</h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                We never store your personal messages or names on our servers. Wishes are encoded client-side into secure shareable links.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-amber-50/60 dark:bg-amber-950/30 border border-amber-100 dark:border-amber-900/40">
              <span className="text-3xl select-none" aria-hidden="true">🎨</span>
              <h3 className="mt-3 font-bold text-lg text-gray-900 dark:text-white">Culturally Authentic</h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                Bilingual greeting templates crafted in sincere Hindi and English, thoughtfully customized for each festival&apos;s essence.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-rose-50/60 dark:bg-rose-950/30 border border-rose-100 dark:border-rose-900/40">
              <span className="text-3xl select-none" aria-hidden="true">⚡</span>
              <h3 className="mt-3 font-bold text-lg text-gray-900 dark:text-white">Lightweight & Fast</h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                Zero bloated downloads. Fast GPU-accelerated CSS animations that run buttery-smooth on any mobile browser.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Bilingual & Accessible Experience
            </h2>
            <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed">
              Whether you want to send traditional heartfelt Hindi blessings like <em className="text-purple-600 dark:text-purple-400">&quot;दशहरे की हार्दिक शुभकामनाएँ&quot;</em> or contemporary English celebration wishes, Wish Karo provides clean typography and smooth templates for all generations. The application also honors user accessibility preferences, supporting reduced-motion environments for individuals sensitive to visual motion.
            </p>
          </section>

          <section className="rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 p-8 text-white text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold">Ready to make someone smile today?</h3>
              <p className="mt-1 text-sm text-purple-100">
                Pick a festival or occasion and craft a personalized card in under 30 seconds.
              </p>
            </div>
            <Link
              href="/create"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-purple-700 shadow-md hover:bg-gray-100 transition-all shrink-0"
            >
              <span>Create a Wish Now ✨</span>
            </Link>
          </section>
        </article>
      </main>

      <Footer />
    </div>
  );
}

