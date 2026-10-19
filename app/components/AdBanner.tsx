"use client";

import { useEffect, useRef } from "react";

interface AdBannerProps {
  client?: string;
  slot?: string;
  format?: string;
  responsive?: boolean;
  className?: string;
}

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    adsbygoogle?: any[];
  }
}

/**
 * Reusable Google AdSense Banner Component
 */
export default function AdBanner({
  client = "ca-pub-1894720951836503",
  slot = "5133956843",
  format = "auto",
  responsive = true,
  className = "",
}: AdBannerProps) {
  const adRef = useRef<HTMLModElement | null>(null);
  const isLoadedRef = useRef(false);

  useEffect(() => {
    try {
      if (typeof window !== "undefined" && !isLoadedRef.current) {
        // Push ad call to adsbygoogle queue
        (window.adsbygoogle = window.adsbygoogle || []).push({});
        isLoadedRef.current = true;
      }
    } catch {
      // Ignore if AdSense blocked by adblocker
    }
  }, []);

  return (
    <div
      className={`w-full overflow-hidden flex flex-col items-center justify-center my-4 ${className}`}
    >
      <span className="text-[10px] tracking-wider uppercase text-gray-400 dark:text-gray-500 mb-1 select-none">
        Advertisement
      </span>
      <div className="w-full min-h-[90px] flex items-center justify-center rounded-xl bg-gray-50/50 dark:bg-gray-800/40 border border-dashed border-gray-200 dark:border-gray-700/60 p-1">
        <ins
          ref={adRef}
          className="adsbygoogle"
          style={{ display: "block", width: "100%", textAlign: "center" }}
          data-ad-client={client}
          {...(slot ? { "data-ad-slot": slot } : {})}
          data-ad-format={format}
          data-full-width-responsive={responsive ? "true" : "false"}
        />
      </div>
    </div>
  );
}

