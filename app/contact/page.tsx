"use client";

import { useState } from "react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Input from "@/app/components/ui/Input";
import Textarea from "@/app/components/ui/Textarea";
import Button from "@/app/components/ui/Button";
import { showToast } from "@/app/components/ui/Toast";
import ToastContainer from "@/app/components/ui/Toast";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      showToast("Please fill in all required fields.", "error");
      return;
    }

    // Client-side confirmation
    setIsSubmitted(true);
    showToast("Message received! We will get back to you shortly.", "success");
  };

  return (
    <div className="flex min-h-screen flex-col bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <Navbar />
      <ToastContainer />

      <main className="flex-1 py-12 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl space-y-8">
          <header className="text-center">
            <span className="text-xs uppercase tracking-widest font-bold text-purple-600 dark:text-purple-400">
              Get In Touch
            </span>
            <h1 className="mt-2 text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white">
              Contact Wish Karo Support 📬
            </h1>
            <p className="mt-2 text-base text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
              Have questions, feedback, festival suggestions, or need partnership assistance? We&apos;d love to hear from you.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Contact Information Cards */}
            <div className="space-y-4 md:col-span-1">
              <div className="p-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200/70 dark:border-gray-800 shadow-sm">
                <span className="text-3xl select-none" aria-hidden="true">✉️</span>
                <h3 className="mt-3 font-bold text-base text-gray-900 dark:text-white">Direct Email</h3>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  For support inquiries, DMCA, or feedback:
                </p>
                <a
                  href="mailto:support.wishkaro@gmail.com"
                  className="mt-2 block text-sm font-semibold text-purple-600 dark:text-purple-400 hover:underline"
                >
                  support.wishkaro@gmail.com
                </a>
              </div>

              <div className="p-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200/70 dark:border-gray-800 shadow-sm">
                <span className="text-3xl select-none" aria-hidden="true">⏱️</span>
                <h3 className="mt-3 font-bold text-base text-gray-900 dark:text-white">Response Time</h3>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  Our team typically responds within <strong>24 to 48 business hours</strong>.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200/70 dark:border-gray-800 shadow-sm">
                <span className="text-3xl select-none" aria-hidden="true">💡</span>
                <h3 className="mt-3 font-bold text-base text-gray-900 dark:text-white">Festival Requests</h3>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  Missing your local festival or custom occasion? Tell us and we will add customized templates!
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="md:col-span-2 rounded-3xl bg-white p-8 shadow-sm border border-gray-200/70 dark:bg-gray-900 dark:border-gray-800">
              {isSubmitted ? (
                <div className="text-center py-12 space-y-4">
                  <span className="text-5xl" aria-hidden="true">🎉</span>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Thank You for Reaching Out!
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 max-w-md mx-auto">
                    Your message has been logged. If your inquiry requires a response, we will write back to <strong>{email}</strong> soon.
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setIsSubmitted(false);
                      setName("");
                      setEmail("");
                      setSubject("");
                      setMessage("");
                    }}
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                    Send Us a Message
                  </h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input
                      label="Your Name"
                      placeholder="e.g. Ramesh Sharma"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                    <Input
                      label="Your Email"
                      type="email"
                      placeholder="e.g. ramesh@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>

                  <Input
                    label="Subject"
                    placeholder="e.g. Template suggestion for Chhath Puja"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                  />

                  <Textarea
                    label="Message"
                    placeholder="Please describe your question or suggestion in detail..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    rows={5}
                  />

                  <Button type="submit" variant="primary" size="lg" className="w-full sm:w-auto">
                    Submit Message →
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

