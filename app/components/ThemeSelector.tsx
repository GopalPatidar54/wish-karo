"use client";

import { cardThemes, type CardTheme } from "@/app/lib/themes";

export default function ThemeSelector({
  selectedThemeId,
  onSelect,
}: {
  selectedThemeId: string;
  onSelect: (theme: CardTheme) => void;
}) {
  return (
    <div className="flex flex-col gap-2">
      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
        Card Theme
      </span>
      <div className="flex flex-wrap gap-3" role="radiogroup" aria-label="Card theme selection">
        {cardThemes.map((theme) => {
          const isSelected = theme.id === selectedThemeId;
          return (
            <button
              key={theme.id}
              type="button"
              role="radio"
              aria-checked={isSelected}
              aria-label={theme.name}
              title={theme.name}
              onClick={() => onSelect(theme)}
              className={`
                h-9 w-9 rounded-full ${theme.previewClass}
                transition-all duration-200 ring-offset-2
                hover:scale-110 focus:outline-none
                focus-visible:ring-2 focus-visible:ring-purple-500
                ${isSelected
                  ? "ring-2 ring-purple-600 dark:ring-purple-400 scale-110 shadow-lg"
                  : "ring-1 ring-gray-300 dark:ring-gray-600"
                }
              `}
            />
          );
        })}
      </div>
    </div>
  );
}

