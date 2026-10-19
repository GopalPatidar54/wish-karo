import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-40 w-full border-b border-gray-200/60 bg-white/80 backdrop-blur-lg dark:border-gray-800/60 dark:bg-gray-950/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 text-xl font-bold text-gray-900 transition-colors hover:text-purple-600 dark:text-white dark:hover:text-purple-400"
        >
          <span className="text-2xl" aria-hidden="true">
            🎉
          </span>
          <span>
            Wish <span className="text-purple-600 dark:text-purple-400">Karo</span>
          </span>
        </Link>

        {/* Center / Navigation Links */}
        <div className="hidden sm:flex items-center gap-6 text-sm font-medium text-gray-600 dark:text-gray-300">
          <Link
            href="/#festivals"
            className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
          >
            Festivals
          </Link>
          <Link
            href="/about"
            className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
          >
            Contact
          </Link>
        </div>

        {/* CTA */}
        <Link
          href="/create"
          className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 px-5 py-2 text-sm font-semibold text-white shadow-md shadow-purple-500/20 transition-all duration-200 hover:from-purple-700 hover:to-indigo-700 hover:shadow-purple-500/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2"
        >
          <span aria-hidden="true">✨</span>
          Create Wish
        </Link>
      </div>
    </nav>
  );
}
