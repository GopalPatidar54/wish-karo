"use client";

import { useEffect } from "react";
import { getTemplatesList } from "@/app/lib/templates";
import { getFestivalById } from "@/app/lib/festivals";

interface TemplatePickerModalProps {
  isOpen: boolean;
  onClose: () => void;
  occasionId: string;
  language: "hi" | "en";
  onLanguageChange: (lang: "hi" | "en") => void;
  selectedIndex: number; // 1-indexed (1 to 15)
  onSelectTemplate: (index: number, messageText: string) => void;
}

export default function TemplatePickerModal({
  isOpen,
  onClose,
  occasionId,
  language,
  onLanguageChange,
  selectedIndex,
  onSelectTemplate,
}: TemplatePickerModalProps) {
  const festival = getFestivalById(occasionId);
  const templates = getTemplatesList(occasionId, language);

  // Close on Escape key
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="template-modal-title"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity animate-fade-in"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog Container */}
      <div className="relative w-full max-w-2xl max-h-[88vh] flex flex-col rounded-3xl bg-white dark:bg-gray-900 shadow-2xl border border-gray-100 dark:border-gray-800 z-10 overflow-hidden animate-scale-in">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-gray-100 dark:border-gray-800 p-5 sm:p-6 bg-gradient-to-r from-purple-50/50 via-white to-pink-50/40 dark:from-gray-900 dark:via-gray-900 dark:to-gray-850">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-2xl" aria-hidden="true">
                {festival?.emoji ?? "✨"}
              </span>
              <h2
                id="template-modal-title"
                className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white"
              >
                Choose from 15 {festival?.name ?? "Festive"} Wishes
              </h2>
            </div>
            <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
              Select one popular message. Using a template creates a clean, compact share link!
            </p>
          </div>

          {/* Language Switcher Tabs */}
          <div className="flex items-center self-start sm:self-auto rounded-xl bg-gray-100 p-1 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
            <button
              type="button"
              onClick={() => onLanguageChange("hi")}
              className={`rounded-lg px-3 py-1.5 text-xs font-bold transition-all ${
                language === "hi"
                  ? "bg-purple-600 text-white shadow-sm"
                  : "text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
              }`}
            >
              🇮🇳 हिंदी
            </button>
            <button
              type="button"
              onClick={() => onLanguageChange("en")}
              className={`rounded-lg px-3 py-1.5 text-xs font-bold transition-all ${
                language === "en"
                  ? "bg-purple-600 text-white shadow-sm"
                  : "text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
              }`}
            >
              🇬🇧 English
            </button>
          </div>
        </div>

        {/* Templates List */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-3 divide-y-0">
          {templates.map((text, idx) => {
            const templateNumber = idx + 1;
            const isSelected = selectedIndex === templateNumber;

            return (
              <div
                key={templateNumber}
                onClick={() => {
                  onSelectTemplate(templateNumber, text);
                  onClose();
                }}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    onSelectTemplate(templateNumber, text);
                    onClose();
                  }
                }}
                className={`group relative flex cursor-pointer items-start gap-4 rounded-2xl p-4 transition-all duration-200 border text-left ${
                  isSelected
                    ? "border-purple-500 bg-purple-50/70 dark:bg-purple-950/30 ring-2 ring-purple-500/30 shadow-md"
                    : "border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/60 hover:border-purple-300 dark:hover:border-purple-700 hover:bg-gray-50/80 dark:hover:bg-gray-800/50"
                }`}
              >
                {/* Index Pill */}
                <div
                  className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold transition-colors ${
                    isSelected
                      ? "bg-purple-600 text-white"
                      : "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-300 group-hover:bg-purple-100 group-hover:text-purple-700 dark:group-hover:bg-purple-900/50 dark:group-hover:text-purple-300"
                  }`}
                >
                  {templateNumber}
                </div>

                {/* Message Content */}
                <div className="flex-1 pr-6">
                  <p className="text-sm leading-relaxed text-gray-800 dark:text-gray-200 font-medium">
                    &ldquo;{text}&rdquo;
                  </p>
                </div>

                {/* Selection Checkmark */}
                {isSelected ? (
                  <span className="absolute top-4 right-4 flex h-6 w-6 items-center justify-center rounded-full bg-purple-600 text-white shadow-sm">
                    <svg
                      className="h-3.5 w-3.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={3}
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </span>
                ) : (
                  <span className="absolute top-4 right-4 text-xs font-medium text-purple-600 dark:text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity">
                    Select &rarr;
                  </span>
                )}
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between border-t border-gray-100 dark:border-gray-800 px-6 py-4 bg-gray-50 dark:bg-gray-900/80">
          <span className="text-xs text-gray-500 dark:text-gray-400">
            Showing 15 popular wishes in {language === "hi" ? "Hindi" : "English"}
          </span>
          <button
            type="button"
            onClick={onClose}
            className="rounded-xl px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-200 dark:text-gray-300 dark:hover:bg-gray-800 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

