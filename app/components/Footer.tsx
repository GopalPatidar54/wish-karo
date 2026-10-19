export default function Footer() {
  return (
    <footer className="border-t border-gray-200/60 bg-gray-50/50 dark:border-gray-800/60 dark:bg-gray-950/50">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <div className="flex flex-col items-center gap-3 text-center">
          <p className="text-2xl" aria-hidden="true">
            🎉
          </p>
          <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
            <span className="font-bold text-gray-900 dark:text-white">
              Wish Karo
            </span>{" "}
            — Share Happiness, Spread Wishes
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-500">
            Made with ❤️ for spreading joy
          </p>
        </div>
      </div>
    </footer>
  );
}

