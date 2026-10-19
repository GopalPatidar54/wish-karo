"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

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

import { festivals, getFestivalById } from "@/app/lib/festivals";
import { getTemplates } from "@/app/lib/templates";
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

  const [message, setMessage] = useState(() => {
    const t = getTemplates(initialOccasion, "hi");
    return t ? t.message : "आपको हार्दिक शुभकामनाएँ!";
  });

  const [selectedTheme, setSelectedTheme] = useState(cardThemes[0]);
  const [errors, setErrors] = useState<Record<string, string>>({});

  // ── Derived State ──
  const currentFestival = getFestivalById(occasion);

  // ── Handlers ──
  const handleOccasionChange = (newOccasion: string) => {
    setOccasion(newOccasion);
    if (messageMode === "template") {
      const template = getTemplates(newOccasion, language);
      if (template) {
        setMessage(template.message);
      }
    }
    setErrors((prev) => ({ ...prev, occasion: "" }));
  };

  const handleLanguageChange = (newLang: "hi" | "en") => {
    setLanguage(newLang);
    if (messageMode === "template" && occasion) {
      const template = getTemplates(occasion, newLang);
      if (template) {
        setMessage(template.message);
      }
    }
  };

  const handleModeChange = (mode: "template" | "custom") => {
    setMessageMode(mode);
    if (mode === "template" && occasion) {
      const template = getTemplates(occasion, language);
      if (template) {
        setMessage(template.message);
      }
    }
  };

  const handleSenderChange = (name: string) => {
    setSender(name);
    setErrors((prev) => ({ ...prev, sender: "" }));
  };

  const handleMessageChange = (text: string) => {
    setMessage(text);
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

      <main className="flex-1">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12">
          {/* Page Header */}
          <div className="mb-8 text-center">
            <h1 className="animate-fade-in-down text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
              Create Personalized Wish <span aria-hidden="true">💌</span>
            </h1>
            <p className="animate-fade-in stagger-1 mt-2 text-gray-600 dark:text-gray-400">
              Only a special invitation link will be shared via WhatsApp. Your friend sees the full animated card!
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
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Message Option
                </span>
                <div className="grid grid-cols-2 gap-3" role="radiogroup" aria-label="Message option">
                  <button
                    type="button"
                    role="radio"
                    aria-checked={messageMode === "template"}
                    onClick={() => handleModeChange("template")}
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

              {/* Language Switcher (Visible in Template mode) */}
              {messageMode === "template" && (
                <div className="flex items-center justify-between rounded-xl bg-purple-50/70 p-3 dark:bg-purple-950/40 border border-purple-200/50 dark:border-purple-800/40">
                  <span className="text-xs font-semibold text-purple-900 dark:text-purple-200 uppercase tracking-wide">
                    Template Language:
                  </span>
                  <div className="flex gap-2">
                    {[
                      { value: "hi" as const, label: "🇮🇳 हिंदी" },
                      { value: "en" as const, label: "🇬🇧 English" },
                    ].map((lang) => (
                      <button
                        key={lang.value}
                        type="button"
                        onClick={() => handleLanguageChange(lang.value)}
                        className={`rounded-lg px-3 py-1.5 text-xs font-bold transition-all ${
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
              )}

              {/* Message Editor */}
              <div className="space-y-1">
                <Textarea
                  label="Greeting Message (Editable)"
                  placeholder="Write your personalized festive wish here..."
                  value={message}
                  onChange={(e) => handleMessageChange(e.target.value)}
                  error={errors.message}
                  required
                  rows={5}
                  maxLength={600}
                />
                <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400">
                  <span>Names are automatically formatted in the greeting header and footer.</span>
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
                  disabled={!isValid}
                />

                {!isValid && (
                  <p className="mt-3 text-center text-xs text-amber-600 dark:text-amber-400">
                    👉 Please enter your name and choose a message to generate your shareable link
                  </p>
                )}
              </div>
            </div>

            {/* ── Right Column: Live Preview ── */}
            <div className="animate-fade-in-up stagger-2">
              <div className="sticky top-24">
                <div className="mb-4 flex items-center justify-between">
                  <h2 className="text-lg font-bold text-gray-800 dark:text-gray-200 flex items-center gap-2">
                    <span>Live Greeting Preview</span>
                    <span className="text-xs bg-green-100 text-green-700 dark:bg-green-950 dark:text-green-300 px-2 py-0.5 rounded-full font-medium">
                      Real-time
                    </span>
                  </h2>
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    How it looks when opened
                  </span>
                </div>

                {/* Preview Card Container */}
                <div className="relative">
                  {/* Floating decorations */}
                  {currentFestival && (
                    <FloatingElements
                      emojis={currentFestival.decorEmojis}
                      count={8}
                      className="z-0"
                    />
                  )}

                  {/* Greeting Card */}
                  <div className="relative z-10">
                    <GreetingPreview
                      message={message}
                      from={sender}
                      to={recipient}
                      theme={selectedTheme}
                      festival={currentFestival}
                    />
                  </div>
                </div>

                {/* Back to home link */}
                <div className="mt-6 text-center">
                  <Link
                    href="/"
                    className="text-sm font-medium text-purple-600 hover:text-purple-700 hover:underline dark:text-purple-400 dark:hover:text-purple-300"
                  >
                    ← Back to all festivals
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

function CreateLoadingFallback() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50 dark:bg-gray-950">
      <Navbar />
      <main className="flex-1 flex items-center justify-center py-20 px-4">
        <div className="flex flex-col items-center gap-4 text-center">
          <span className="text-4xl animate-bounce" aria-hidden="true">
            ✨
          </span>
          <p className="text-base font-medium text-gray-600 dark:text-gray-300">
            Loading wish studio...
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

