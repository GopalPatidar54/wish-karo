/**
 * Builds a shareable wish URL using search parameters.
 * Encodes from (sender), to (recipient), occasion, message, and theme into query params.
 */
export function buildShareUrl(
  origin: string,
  params: {
    from: string;
    to?: string;
    occasion: string;
    message: string;
    theme?: string;
  }
): string {
  // Use configured public site URL if available, else supplied origin
  const base = process.env.NEXT_PUBLIC_SITE_URL || origin;
  const url = new URL("/wish", base);

  url.searchParams.set("from", params.from.trim().slice(0, 50));
  if (params.to && params.to.trim()) {
    url.searchParams.set("to", params.to.trim().slice(0, 50));
  }
  url.searchParams.set("occasion", params.occasion);

  // Truncate very long messages for URL safety (keep ~800 chars)
  const cleanMsg = params.message.trim().slice(0, 800);
  url.searchParams.set("message", cleanMsg);

  if (params.theme) {
    url.searchParams.set("theme", params.theme);
  }
  return url.toString();
}

/**
 * Builds a WhatsApp share invitation text containing ONLY a warm short invite and the link.
 * Does NOT put the entire greeting text into the WhatsApp message.
 */
export function buildWhatsAppInvitation(params: {
  from: string;
  to?: string;
  shareUrl: string;
}): string {
  const recipientPart = params.to && params.to.trim() ? `${params.to.trim()}, ` : "";
  const senderPart = params.from.trim();

  return `${recipientPart}${senderPart} ki taraf se aapke liye ek special wish hai ❤️\n✨ Apna greeting dekhein:\n${params.shareUrl}`;
}

/**
 * Builds the WhatsApp web / app link using https://wa.me/?text=
 */
export function buildWhatsAppUrl(invitationText: string): string {
  return `https://wa.me/?text=${encodeURIComponent(invitationText)}`;
}

/**
 * Copies text to the clipboard. Returns true on success.
 */
export async function copyToClipboard(text: string): Promise<boolean> {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return true;
    }
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.style.position = "fixed";
    textarea.style.left = "-9999px";
    document.body.appendChild(textarea);
    textarea.focus();
    textarea.select();
    const success = document.execCommand("copy");
    document.body.removeChild(textarea);
    return success;
  } catch {
    return false;
  }
}

export type DecodedWish = {
  from: string;
  to?: string;
  occasion: string;
  message: string;
  theme: string;
};

/**
 * Decodes wish parameters from search params safely.
 * Returns null if required sender or message is missing.
 */
export function decodeWishParams(searchParams: {
  [key: string]: string | string[] | undefined;
}): DecodedWish | null {
  // Support both "from" and legacy "sender"
  const rawFrom = searchParams.from ?? searchParams.sender;
  const from = typeof rawFrom === "string" ? rawFrom.trim().slice(0, 50) : "";

  const rawTo = searchParams.to ?? searchParams.recipient;
  const to = typeof rawTo === "string" ? rawTo.trim().slice(0, 50) : undefined;

  const occasion =
    typeof searchParams.occasion === "string" ? searchParams.occasion.trim() : "dussehra";

  const message =
    typeof searchParams.message === "string"
      ? searchParams.message.trim().slice(0, 1000)
      : "";

  const theme =
    typeof searchParams.theme === "string" && searchParams.theme
      ? searchParams.theme
      : "royal-purple";

  if (!from || !message) return null;

  return { from, to, occasion, message, theme };
}
