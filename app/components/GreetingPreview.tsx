"use client";

import { type CardTheme } from "@/app/lib/themes";
import { type Festival } from "@/app/lib/festivals";

export default function GreetingPreview({
  message,
  from,
  to,
  theme,
  festival,
  className = "",
}: {
  message: string;
  from?: string;
  to?: string;
  theme: CardTheme;
  festival?: Festival;
  className?: string;
}) {
  const hasMessage = message.trim().length > 0;
  const recipientName = to?.trim();
  const senderName = from?.trim();

  return (
    <div
      className={`animate-scale-in rounded-3xl ${theme.bgGradient} ${theme.borderClass} greeting-card shadow-2xl relative overflow-hidden backdrop-blur-sm ${className}`}
    >
      {/* Decorative ambient corner glow */}
      <div className="absolute -top-16 -right-16 w-36 h-36 rounded-full bg-white/10 blur-2xl pointer-events-none" />
      <div className="absolute -bottom-16 -left-16 w-36 h-36 rounded-full bg-white/10 blur-2xl pointer-events-none" />

      {/* Festival emoji header */}
      {festival && (
        <div className="flex justify-center gap-2 pt-7 pb-2">
          {festival.decorEmojis.slice(0, 3).map((emoji, i) => (
            <span
              key={i}
              className="animate-float text-3xl sm:text-4xl select-none"
              style={{ animationDelay: `${i * 0.3}s` }}
              aria-hidden="true"
            >
              {emoji}
            </span>
          ))}
        </div>
      )}

      {/* Festival name & badge */}
      {festival && (
        <div className="text-center px-6">
          <span
            className={`inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-white/15 ${theme.accentColor}`}
          >
            {festival.name} • {festival.nameHi}
          </span>
        </div>
      )}

      {/* Card Content Area */}
      <div className="px-6 py-6 sm:px-10 sm:py-8 space-y-4">
        {/* Recipient Greeting Header */}
        <div className="border-b border-white/15 pb-3">
          <h2 className={`text-xl sm:text-2xl font-bold tracking-wide ${theme.textColor}`}>
            {recipientName ? (
              <>
                प्रिय {recipientName} <span className="animate-pulse-gentle inline-block" aria-hidden="true">❤️</span>
              </>
            ) : (
              <>
                प्रिय मित्र <span className="animate-pulse-gentle inline-block" aria-hidden="true">❤️</span>
              </>
            )}
          </h2>
        </div>

        {/* Message Body */}
        <div className="py-2">
          {hasMessage ? (
            <p
              className={`whitespace-pre-line text-base leading-relaxed sm:text-lg font-normal ${theme.textColor} transition-all`}
            >
              {message}
            </p>
          ) : (
            <p className={`text-center text-base italic opacity-60 ${theme.textColor}`}>
              Your heartfelt wish will appear here…
            </p>
          )}
        </div>

        {/* Sender Signature with pulsing flourish */}
        <div className="border-t border-white/15 pt-4 text-right">
          <p className={`text-sm italic opacity-85 ${theme.signatureColor}`}>
            सप्रेम,
          </p>
          <p className={`text-lg font-bold ${theme.textColor} flex items-center justify-end gap-1.5`}>
            <span>{senderName || "आपकी तरफ़ से"}</span>
            <span className="text-sm opacity-90">की तरफ़ से</span>
            <span className="animate-pulse-gentle inline-block text-red-400" aria-hidden="true">❤️</span>
          </p>
        </div>
      </div>

      {/* Bottom festive sparkle ribbon */}
      {festival && (
        <div className="flex justify-center gap-3 pb-6 select-none opacity-80">
          {festival.decorEmojis.slice(3, 6).map((emoji, i) => (
            <span
              key={i}
              className="animate-sparkle text-xl"
              style={{ animationDelay: `${i * 0.4}s` }}
              aria-hidden="true"
            >
              {emoji}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
