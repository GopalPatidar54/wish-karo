import type { Metadata } from "next";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms and Conditions — Wish Karo",
  description:
    "Read the terms of service and acceptable usage guidelines for creating and sharing greeting cards on Wish Karo.",
};

export default function TermsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <Navbar />

      <main className="flex-1 py-12 px-4 sm:px-6 lg:px-8">
        <article className="mx-auto max-w-4xl rounded-3xl bg-white p-8 sm:p-12 shadow-sm border border-gray-200/70 dark:bg-gray-900 dark:border-gray-800 space-y-8">
          <header className="border-b border-gray-200 dark:border-gray-800 pb-6">
            <span className="text-xs uppercase tracking-widest font-bold text-purple-600 dark:text-purple-400">
              User Agreement
            </span>
            <h1 className="mt-2 text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white">
              Terms and Conditions
            </h1>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              Effective Date: October 20, 2026 • Last Updated: October 20, 2026
            </p>
          </header>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
              1. Acceptance of Terms
            </h2>
            <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed">
              By accessing or using <strong>Wish Karo</strong> (accessible at wish-karo.vercel.app or its associated custom domains), you confirm that you have read, understood, and agreed to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you must refrain from using the service.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
              2. Description of Service
            </h2>
            <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed">
              Wish Karo provides a free, interactive greeting card generation platform enabling users to create personalized festive wishes and share them with friends, family, and colleagues via instant messaging services (primarily WhatsApp) or direct web links.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
              3. Acceptable Use Policy
            </h2>
            <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed">
              You agree to use Wish Karo solely for lawful, celebratory, and personal communication purposes. When creating custom greetings, you strictly agree NOT to write, generate, or transmit any message that:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">
              <li>Contains hate speech, defamation, harassment, threats, or abusive language targeting any individual or community.</li>
              <li>Promotes violence, illegal acts, discrimination, or obscenity.</li>
              <li>Constitutes unsolicited spam, mass advertising, phishing, or deceitful marketing schemes.</li>
              <li>Infringes upon any third party&apos;s trademark, copyright, or proprietary rights.</li>
              <li>Attempts to exploit the platform through automated scraping, denial of service attacks, or malicious scripts.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
              4. User-Generated Content & Responsibility
            </h2>
            <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed">
              Because greetings are generated client-side and encoded directly into URL parameters without pre-moderation or server storage, <strong>you bear sole responsibility</strong> for the custom text you write and transmit. Wish Karo does not endorse and disclaims liability for any user-generated text transmitted between third parties via shared links.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
              5. Intellectual Property Rights
            </h2>
            <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed">
              All website source code, visual design elements, logo graphics, UI components, animations, and editorial articles remain the exclusive intellectual property of Wish Karo. You are granted a limited, revocable, non-exclusive license to use the service for personal, non-commercial festive greeting creation.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
              6. Advertisements & Third-Party Platforms
            </h2>
            <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed">
              Wish Karo displays advertisements served by Google AdSense to sustain hosting and development costs. We are not responsible for the products, services, or content advertised by third parties. Interactions with advertisers or external links (e.g. WhatsApp) are strictly between you and the respective third party.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
              7. Disclaimer of Warranties & Limitation of Liability
            </h2>
            <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed">
              Wish Karo is provided on an &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; basis without warranties of any kind, whether express or implied. We do not guarantee uninterrupted availability, error-free operation, or that third-party services (such as WhatsApp) will accept or deliver every link. In no event shall Wish Karo, its creators, or contributors be liable for any indirect, incidental, or consequential damages resulting from your use of the website.
            </p>
          </section>

          <section className="space-y-4 border-t border-gray-200 dark:border-gray-800 pt-6">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
              8. Contact & Questions
            </h2>
            <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed">
              If you have any questions or require clarification regarding these Terms and Conditions, please visit our{" "}
              <Link href="/contact" className="text-purple-600 underline dark:text-purple-400">
                Contact Page
              </Link>{" "}
              or email us at <span className="font-semibold text-purple-600 dark:text-purple-400">support.wishkaro@gmail.com</span>.
            </p>
          </section>
        </article>
      </main>

      <Footer />
    </div>
  );
}

