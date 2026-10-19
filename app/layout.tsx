import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wish Karo — Share Happiness, Spread Wishes",
  description:
    "Create beautiful personalized festival wishes and share them with your loved ones via WhatsApp. Dussehra, Diwali, Holi, Birthday & more!",
  keywords: [
    "festival wishes",
    "Diwali greetings",
    "Dussehra wishes",
    "Holi wishes",
    "birthday wishes",
    "WhatsApp wishes",
    "wish karo",
  ],
  other: {
    "google-adsense-account": "ca-pub-1894720951836503",
  },
};


export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1894720951836503"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
