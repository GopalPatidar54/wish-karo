"use client";

import { useState } from "react";
import Button from "@/app/components/ui/Button";
import {
  buildShareUrl,
  buildWhatsAppInvitation,
  buildWhatsAppUrl,
  copyToClipboard,
} from "@/app/lib/utils";
import { showToast } from "@/app/components/ui/Toast";

export default function ShareActions({
  from,
  to,
  occasion,
  message,
  theme,
  disabled = false,
}: {
  from: string;
  to?: string;
  occasion: string;
  message: string;
  theme: string;
  disabled?: boolean;
}) {
  const [isCopied, setIsCopied] = useState(false);

  const getShareUrlAndInvite = () => {
    const origin =
      typeof window !== "undefined"
        ? window.location.origin
        : "https://wish-karo.vercel.app";

    const shareUrl = buildShareUrl(origin, {
      from,
      to,
      occasion,
      message,
      theme,
    });

    const inviteText = buildWhatsAppInvitation({
      from,
      to,
      shareUrl,
    });

    return { shareUrl, inviteText, origin };
  };

  const handleWhatsAppShare = () => {
    const { inviteText, origin } = getShareUrlAndInvite();

    // Warn if running on localhost that friends won't be able to open it until deployed
    if (origin.includes("localhost") || origin.includes("127.0.0.1")) {
      showToast(
        "Note: Localhost links can only be opened on this device. Deploy to share publicly!",
        "info"
      );
    }

    const waUrl = buildWhatsAppUrl(inviteText);
    window.open(waUrl, "_blank", "noopener,noreferrer");
  };

  const handleCopyLink = async () => {
    const { shareUrl } = getShareUrlAndInvite();
    const success = await copyToClipboard(shareUrl);
    if (success) {
      setIsCopied(true);
      showToast("Personalized link copied to clipboard! 🔗", "success");
      setTimeout(() => setIsCopied(false), 2000);
    } else {
      showToast("Failed to copy link. Please try again.", "error");
    }
  };

  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      <Button
        variant="whatsapp"
        size="lg"
        onClick={handleWhatsAppShare}
        disabled={disabled}
        className="flex-1"
        icon={
          <svg
            className="h-5 w-5"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        }
        aria-label="Share personalized wish link on WhatsApp"
      >
        Share on WhatsApp
      </Button>

      <Button
        variant="outline"
        size="lg"
        onClick={handleCopyLink}
        disabled={disabled}
        className="flex-1"
        icon={
          <svg
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-3.536l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
            />
          </svg>
        }
        aria-label="Copy wish link to clipboard"
      >
        {isCopied ? "Link Copied! ✓" : "Copy Wish Link"}
      </Button>
    </div>
  );
}
