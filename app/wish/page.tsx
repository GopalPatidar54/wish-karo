import Link from "next/link";
import { decodeWishParams } from "@/app/lib/utils";
import { getFestivalById } from "@/app/lib/festivals";
import { getThemeById } from "@/app/lib/themes";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import AdBanner from "@/app/components/AdBanner";
import WishViewerClient from "./WishViewerClient";

export default async function WishPage(props: PageProps<"/wish">) {
  const searchParams = await props.searchParams;
  const wishData = decodeWishParams(searchParams);

  // Missing or corrupted parameters fallback
  if (!wishData) {
    return (
      <div className="flex min-h-screen flex-col bg-gray-50 dark:bg-gray-950">
        <Navbar />
        <main className="flex flex-1 flex-col items-center justify-center px-4 py-20 text-center">
          <div className="animate-scale-in max-w-md rounded-3xl bg-white p-8 shadow-xl dark:bg-gray-900 border border-gray-100 dark:border-gray-800">
            <span className="text-6xl select-none" aria-hidden="true">
              💌
            </span>
            <h1 className="mt-5 text-2xl font-bold text-gray-900 dark:text-white">
              Greeting Link Incomplete
            </h1>
            <p className="mt-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              It seems this greeting link is missing some details or is expired. But don&apos;t worry, you can easily create your own special wish right now!
            </p>
            <div className="mt-4 mb-2 w-full">
              <AdBanner client="ca-pub-1894720951836503" slot="5133956843" />
            </div>

            <div className="mt-4">
              <Link
                href="/create"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-500/25 transition-all hover:from-purple-700 hover:to-indigo-700 hover:shadow-purple-500/40"
              >
                <span>✨ Create Your Own Wish</span>
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const festival = getFestivalById(wishData.occasion);
  const theme = getThemeById(wishData.theme);

  return (
    <WishViewerClient
      from={wishData.from}
      to={wishData.to}
      occasion={wishData.occasion}
      message={wishData.message}
      festival={festival ?? null}
      theme={theme}
    />
  );
}
