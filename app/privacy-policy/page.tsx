import type { Metadata } from "next";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — Wish Karo",
  description:
    "Learn how Wish Karo protects your privacy. Read our policy regarding cookies, Google AdSense, third-party advertising, and client-side data handling.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <Navbar />

      <main className="flex-1 py-12 px-4 sm:px-6 lg:px-8">
        <article className="mx-auto max-w-4xl rounded-3xl bg-white p-8 sm:p-12 shadow-sm border border-gray-200/70 dark:bg-gray-900 dark:border-gray-800 space-y-8">
          <header className="border-b border-gray-200 dark:border-gray-800 pb-6">
            <span className="text-xs uppercase tracking-widest font-bold text-purple-600 dark:text-purple-400">
              Legal & Trust
            </span>
            <h1 className="mt-2 text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white">
              Privacy Policy
            </h1>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              Effective Date: October 20, 2026 • Last Updated: October 20, 2026
            </p>
          </header>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
              1. Introduction
            </h2>
            <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed">
              Welcome to <strong>Wish Karo</strong> (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). Your privacy is of paramount importance to us. This Privacy Policy document explains how personal information is handled when you visit and use our website at{" "}
              <Link href="/" className="text-purple-600 hover:underline dark:text-purple-400">
                wish-karo.vercel.app
              </Link>{" "}
              (or its custom domain) to create, customize, and share personalized festive greetings.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
              2. Privacy-First, Zero-Database Architecture
            </h2>
            <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed">
              Wish Karo operates on a privacy-by-design model:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">
              <li>
                <strong>No Account Required:</strong> You do not need to register, provide an email address, or create a password to create greetings.
              </li>
              <li>
                <strong>No Database Storage of Greetings:</strong> The sender name, recipient name, festival selection, and greeting messages you enter are <em>never stored in a database or server logs</em>. All information is safely encoded directly into the shareable URL query string on the client side.
              </li>
              <li>
                <strong>Control Over Sharing:</strong> Only individuals who receive the generated URL link can view the personalized greeting card.
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
              3. Google AdSense & Third-Party Cookies Disclosure
            </h2>
            <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed">
              We use <strong>Google AdSense</strong> to display advertisements on our website to support our free service. Please review how Google handles advertising data:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">
              <li>
                Third-party vendors, including <strong>Google</strong>, use cookies to serve ads based on a user&apos;s prior visits to our website or other websites on the Internet.
              </li>
              <li>
                Google&apos;s use of advertising cookies (such as the DoubleClick cookie) enables it and its partners to serve personalized or non-personalized ads to our visitors based on their visit to our site and other sites.
              </li>
              <li>
                <strong>How to Opt-Out:</strong> Users may opt out of personalized advertising by visiting{" "}
                <a
                  href="https://adssettings.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-600 underline dark:text-purple-400"
                >
                  Google Ads Settings
                </a>
                . Alternatively, you can opt out of third-party vendor cookies for personalized advertising by visiting{" "}
                <a
                  href="https://www.aboutads.info/choices/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-600 underline dark:text-purple-400"
                >
                  aboutads.info
                </a>
                .
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
              4. Log Files and Standard Web Analytics
            </h2>
            <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed">
              Like most web servers and hosting platforms (such as Vercel), standard log files may record anonymous technical details when you browse the site. These include Internet Protocol (IP) addresses, browser types, Internet Service Providers (ISPs), date/time stamps, and referring/exit pages. This information is not linked to any personally identifiable information and is used purely for system administration, traffic analysis, and securing the website against malicious requests.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
              5. Children&apos;s Information
            </h2>
            <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed">
              Wish Karo does not knowingly collect any personally identifiable information from children under the age of 13. Because our service does not store personal data or require user profiles, parents can rest assured that their child&apos;s personal records are not harvested or retained on our servers.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
              6. Third-Party Links
            </h2>
            <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed">
              Our website provides sharing links to external platforms like <strong>WhatsApp</strong> (via <code className="text-xs bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded">wa.me</code>). When you choose to share your wish, you are redirected to WhatsApp&apos;s interface, which is governed by WhatsApp&apos;s own independent terms and privacy policy. We encourage you to consult their respective policies.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
              7. Consent & Updates
            </h2>
            <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed">
              By using our website, you hereby consent to our Privacy Policy and agree to its terms. We may update this policy periodically to reflect operational, legal, or regulatory modifications. Any changes will be posted on this page with an updated revision date.
            </p>
          </section>

          <section className="space-y-4 border-t border-gray-200 dark:border-gray-800 pt-6">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
              8. Contact Us
            </h2>
            <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed">
              If you have any questions, feedback, or inquiries regarding our Privacy Policy or data handling practices, please contact us via our{" "}
              <Link href="/contact" className="text-purple-600 underline dark:text-purple-400">
                Contact Page
              </Link>{" "}
              or email us directly at <span className="font-semibold text-purple-600 dark:text-purple-400">support.wishkaro@gmail.com</span>.
            </p>
          </section>
        </article>
      </main>

      <Footer />
    </div>
  );
}

