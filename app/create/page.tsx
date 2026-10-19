"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";

import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Input from "@/app/components/ui/Input";
import Textarea from "@/app/components/ui/Textarea";
import Select from "@/app/components/ui/Select";
import GreetingPreview from "@/app/components/GreetingPreview";
import ThemeSelector from "@/app/components/ThemeSelector";
import ShareActions from "@/app/components/ShareActions";
import FloatingElements from "@/app/components/FloatingElements";
import ToastContainer from "@/app/components/ui/Toast";
import TemplatePickerModal from "@/app/components/TemplatePickerModal";

import { festivals, getFestivalById } from "@/app/lib/festivals";
import { getTemplateByIndex } from "@/app/lib/templates";
import { cardThemes } from "@/app/lib/themes";

function CreateWishContent() {
  const searchParams = useSearchParams();
  const initialOccasion = searchParams.get("occasion") ?? "dussehra";
  const initialFrom = searchParams.get("from") ?? searchParams.get("sender") ?? "";
  const initialTo = searchParams.get("to") ?? searchParams.get("recipient") ?? "";

  // ── Form State ──
  const [sender, setSender] = useState(initialFrom);
  const [recipient, setRecipient] = useState(initialTo);
  const [occasion, setOccasion] = useState(initialOccasion);
  const [messageMode, setMessageMode] = useState<"template" | "custom">("template");
  const [language, setLanguage] = useState<"hi" | "en">("hi");
  const [selectedTemplateIndex, setSelectedTemplateIndex] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [message, setMessage] = useState(() => {
    return getTemplateByIndex(initialOccasion, "hi", 1);
  });

  const [selectedTheme, setSelectedTheme] = useState(cardThemes[0]);
  const [errors, setErrors] = useState<Record<string, string>>({});

  // ── Derived State ──
  const currentFestival = getFestivalById(occasion);

  // ── Handlers ──
  const handleOccasionChange = (newOccasion: string) => {
    setOccasion(newOccasion);
    setSelectedTemplateIndex(1);
    if (messageMode === "template") {
      const templateMsg = getTemplateByIndex(newOccasion, language, 1);
      setMessage(templateMsg);
    }
    setErrors((prev) => ({ ...prev, occasion: "" }));
  };

  const handleLanguageChange = (newLang: "hi" | "en") => {
    setLanguage(newLang);
    if (messageMode === "template" && occasion) {
      const templateMsg = getTemplateByIndex(occasion, newLang, selectedTemplateIndex);
      setMessage(templateMsg);
    }
  };

  const handleModeChange = (mode: "template" | "custom") => {
    setMessageMode(mode);
    if (mode === "template" && occasion) {
      const templateMsg = getTemplateByIndex(occasion, language, selectedTemplateIndex);
      setMessage(templateMsg);
    }
  };

  const handleSelectTemplateFromModal = (index: number, messageText: string) => {
    setSelectedTemplateIndex(index);
    setMessage(messageText);
    setMessageMode("template");
  };

  const handleSenderChange = (name: string) => {
    setSender(name);
    setErrors((prev) => ({ ...prev, sender: "" }));
  };

  const handleMessageChange = (text: string) => {
    setMessage(text);
    // If user modifies message directly in textarea, treat as custom so full text is encoded
    setMessageMode("custom");
    setErrors((prev) => ({ ...prev, message: "" }));
  };

  const isValid = sender.trim().length > 0 && occasion.length > 0 && message.trim().length > 0;

  const festivalOptions = festivals.map((f) => ({
    value: f.id,
    label: `${f.emoji} ${f.name} (${f.nameHi})`,
  }));

  return (
    <div className="flex min-h-screen flex-col bg-gray-50 dark:bg-gray-950">
      <Navbar />
      <ToastContainer />

      {/* Template Selection Modal */}
      <TemplatePickerModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        occasionId={occasion}
        language={language}
        onLanguageChange={handleLanguageChange}
        selectedIndex={selectedTemplateIndex}
        onSelectTemplate={handleSelectTemplateFromModal}
      />

      <main className="flex-1">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12">
          {/* Page Header */}
          <div className="mb-8 text-center">
            <h1 className="animate-fade-in-down text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
              Create Personalized Wish <span aria-hidden="true">💌</span>
            </h1>
            <p className="animate-fade-in stagger-1 mt-2 text-gray-600 dark:text-gray-400">
              Pick from 15 popular wishes to generate a clean, short WhatsApp invitation link!
            </p>
          </div>

          {/* Two-Column Layout */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* ── Left Column: Form ── */}
            <div className="animate-fade-in-up space-y-6 rounded-2xl bg-white p-6 shadow-lg dark:bg-gray-900 sm:p-8">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                <span>Personalize Your Wish</span>
                <span className="text-sm font-normal text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-950/50 px-2.5 py-0.5 rounded-full">
                  Step 1 of 2
                </span>
              </h2>

              {/* Sender Name */}
              <Input
                label="Your Name (Sender)"
                placeholder="e.g. Gopal"
                value={sender}
                onChange={(e) => handleSenderChange(e.target.value)}
                error={errors.sender}
                required
                maxLength={50}
                hint="Your name will be signed on the greeting card"
              />

              {/* Recipient Name */}
              <Input
                label="Recipient's Name (Optional)"
                placeholder="e.g. Rahul"
                value={recipient}
                onChange={(e) => setRecipient(e.target.value)}
                maxLength={50}
                hint="Shows at the top of the card (e.g. प्रिय Rahul ❤️). If empty, shows 'प्रिय मित्र ❤️'"
              />

              {/* Occasion */}
              <Select
                label="Festival or Occasion"
                value={occasion}
                onChange={(e) => handleOccasionChange(e.target.value)}
                options={festivalOptions}
                placeholder="Select a festival or occasion"
                error={errors.occasion}
                required
              />

              {/* Message Mode: Template vs Custom */}
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Message Option
                  </span>
                  {messageMode === "template" && (
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/50 px-2 py-0.5 rounded-full">
                      <span>⚡ Ultra Short URL</span>
                    </span>
                  )}
                </div>

                <div className="grid grid-cols-2 gap-3" role="radiogroup" aria-label="Message option">
                  <button
                    type="button"
                    role="radio"
                    aria-checked={messageMode === "template"}
                    onClick={() => {
                      handleModeChange("template");
                      setIsModalOpen(true);
                    }}
                    className={`flex items-center justify-center gap-2 rounded-xl py-2.5 px-4 text-sm font-semibold transition-all ${
                      messageMode === "template"
                        ? "bg-purple-600 text-white shadow-md shadow-purple-500/20"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
                    }`}
                  >
                    <span>📜 Choose a Template</span>
                  </button>

                  <button
                    type="button"
                    role="radio"
                    aria-checked={messageMode === "custom"}
                    onClick={() => handleModeChange("custom")}
                    className={`flex items-center justify-center gap-2 rounded-xl py-2.5 px-4 text-sm font-semibold transition-all ${
                      messageMode === "custom"
                        ? "bg-purple-600 text-white shadow-md shadow-purple-500/20"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
                    }`}
                  >
                    <span>✍️ Write My Own</span>
                  </button>
                </div>
              </div>

              {/* Template Mode Banner & Picker Button */}
              {messageMode === "template" && (
                <div className="rounded-2xl bg-gradient-to-r from-purple-50 to-pink-50 p-4 dark:from-purple-950/30 dark:to-pink-950/20 border border-purple-200/60 dark:border-purple-800/40 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-purple-900 dark:text-purple-300">
                      Active Template ({selectedTemplateIndex} of 15)
                    </span>
                    {/* Language Switcher */}
                    <div className="flex gap-1.5">
                      {[
                        { value: "hi" as const, label: "🇮🇳 हिंदी" },
                        { value: "en" as const, label: "🇬🇧 Eng" },
                      ].map((lang) => (
                        <button
                          key={lang.value}
                          type="button"
                          onClick={() => handleLanguageChange(lang.value)}
                          className={`rounded-lg px-2.5 py-1 text-xs font-bold transition-all ${
                            language === lang.value
                              ? "bg-purple-600 text-white shadow-sm"
                              : "bg-white text-gray-700 hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-300"
                          }`}
                        >
                          {lang.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => setIsModalOpen(true)}
                    className="w-full flex items-center justify-between gap-2 rounded-xl bg-white dark:bg-gray-800/90 p-3 text-sm text-left font-medium text-gray-800 dark:text-gray-200 border border-purple-200 dark:border-purple-800/50 hover:border-purple-400 transition-colors shadow-sm"
                  >
                    <span className="truncate pr-2">
                      &ldquo;{message.slice(0, 75)}...&rdquo;
                    </span>
                    <span className="shrink-0 text-xs font-bold text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-950 px-2.5 py-1 rounded-lg">
                      Change (15 Available) &rarr;
                    </span>
                  </button>
                </div>
              )}

              {/* Message Editor */}
              <div className="space-y-1">
                <Textarea
                  label={messageMode === "template" ? "Selected Message" : "Custom Greeting Message"}
                  placeholder="Write your personalized festive wish here..."
                  value={message}
                  onChange={(e) => handleMessageChange(e.target.value)}
                  error={errors.message}
                  required
                  rows={4}
                  maxLength={600}
                />
                <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400">
                  <span>
                    {messageMode === "template"
                      ? "✨ Using this template generates a tiny, fast-loading URL."
                      : "✍️ Editing text switches to custom message mode."}
                  </span>
                  <span>{message.length} / 600</span>
                </div>
              </div>

              {/* Theme Selector */}
              <ThemeSelector
                selectedThemeId={selectedTheme.id}
                onSelect={setSelectedTheme}
              />

              {/* Share Actions */}
              <div className="border-t border-gray-200 pt-6 dark:border-gray-800">
                <ShareActions
                  from={sender}
                  to={recipient}
                  occasion={occasion}
                  message={message}
                  theme={selectedTheme.id}
                  templateId={messageMode === "template" ? selectedTemplateIndex : undefined}
                  language={messageMode === "template" ? language : undefined}
                  disabled={!isValid}
                />
                {!isValid && (
                  <p className="mt-2 text-center text-xs text-amber-600 dark:text-amber-400">
                    Please fill in your name and greeting message to enable sharing.
                  </p>
                )}
              </div>
            </div>

            {/* ── Right Column: Live Greeting Card Preview ── */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                  <span>Live Card Preview</span>
                  <span className="text-sm font-normal text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-950/50 px-2.5 py-0.5 rounded-full">
                    Step 2 of 2
                  </span>
                </h2>
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  Updates in real time
                </span>
              </div>

              <div className="overflow-hidden rounded-2xl shadow-xl transition-all">
                <GreetingPreview
                  message={message}
                  from={sender}
                  to={recipient}
                  theme={selectedTheme}
                  festival={currentFestival}
                />
              </div>

              {/* Guidance card */}
              <div className="rounded-xl border border-gray-200 bg-white/70 p-4 backdrop-blur dark:border-gray-800 dark:bg-gray-900/70 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                <p className="font-semibold text-gray-900 dark:text-white mb-1">
                  💡 How Sharing Works:
                </p>
                <p>
                  When you click <strong>Share on WhatsApp</strong>, a friendly invitation with your short link is shared. Your recipient clicks it to open the full interactive greeting with animated music, falling petals, and festive themes!
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Subtle Floating Elements in Background */}
      {currentFestival && (
        <FloatingElements
          emojis={currentFestival.decorEmojis}
          count={6}
          className="pointer-events-none fixed inset-0 z-0 opacity-15"
        />
      )}

      <Footer />
    </div>
  );
}

function CreateLoadingFallback() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50 dark:bg-gray-950">
      <Navbar />
      <main className="flex flex-1 flex-col items-center justify-center px-4 py-20 text-center">
        <div className="flex flex-col items-center gap-4">
          <span className="text-5xl animate-bounce" aria-hidden="true">
            💌
          </span>
          <p className="text-base font-medium text-purple-600 dark:text-purple-400">
            Loading wish creator...
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default function CreatePage() {
  return (
    <Suspense fallback={<CreateLoadingFallback />}>
      <CreateWishContent />
    </Suspense>
  );
}
