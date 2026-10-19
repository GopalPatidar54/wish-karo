import Link from "next/link";
import { festivals } from "@/app/lib/festivals";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200/80 bg-gray-50/90 dark:border-gray-800/80 dark:bg-gray-950/90 text-gray-700 dark:text-gray-300">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-gray-200 dark:border-gray-800">
          {/* Brand & Purpose Column */}
          <div className="md:col-span-1 space-y-3">
            <Link
              href="/"
              className="flex items-center gap-2 text-xl font-bold text-gray-900 dark:text-white"
            >
              <span className="text-2xl" aria-hidden="true">🎉</span>
              <span>Wish <span className="text-purple-600 dark:text-purple-400">Karo</span></span>
            </Link>
            <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
              Create personalized digital festival greetings and share happiness through WhatsApp. Privacy-first, free, and bilingual.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-900 dark:text-white">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/create" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                  Create a Wish
                </Link>
              </li>
              <li>
                <Link href="/#festivals" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                  Browse Festivals
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Festivals Covered */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-900 dark:text-white">
              Festivals
            </h4>
            <ul className="space-y-2 text-sm">
              {festivals.slice(0, 5).map((f) => (
                <li key={f.id}>
                  <Link
                    href={`/create?occasion=${f.id}`}
                    className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>{f.emoji}</span>
                    <span>{f.name} ({f.nameHi})</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Policy (Mandatory for AdSense) */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-900 dark:text-white">
              Legal & Support
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy-policy" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                  Terms and Conditions
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500 dark:text-gray-400">
          <p>© 2026 Wish Karo. All rights reserved.</p>
          <p>
            Made with <span className="text-red-500">❤️</span> for spreading festive joy.
          </p>
        </div>
      </div>
    </footer>
  );
}
