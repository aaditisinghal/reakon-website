"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";

export function NewsletterPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 20000); // 20 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => setIsVisible(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    setIsVisible(false);
    setEmail("");
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="relative w-full max-w-2xl mx-4 grid lg:grid-cols-2 gap-8 bg-white rounded-2xl p-8 lg:p-12 shadow-2xl">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-6 right-6 p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <X className="w-6 h-6 text-gray-600" />
        </button>

        {/* Left side - Content */}
        <div className="flex flex-col justify-center">
          <span className="text-sm font-mono text-gray-500 uppercase tracking-widest mb-4">
            Product Newsletter
          </span>
          <h2 className="text-4xl lg:text-5xl font-display tracking-tight mb-8 text-foreground">
            Stay up to date with Reakon's product team.
          </h2>

          <div className="space-y-6 mb-12">
            <div className="flex gap-4 items-start">
              <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-lg text-foreground">Monthly product updates straight to your inbox</span>
            </div>

            <div className="flex gap-4 items-start">
              <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-lg text-foreground">Access to exclusive webinars and content, for free</span>
            </div>

            <div className="flex gap-4 items-start">
              <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-lg text-foreground">See why 350k+ financial professionals use Reakon</span>
            </div>
          </div>

          {/* Email form */}
          <form onSubmit={handleSubmit} className="flex gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="What's your work email?"
              className="flex-1 px-6 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 text-foreground placeholder-gray-400"
              required
            />
            <button
              type="submit"
              className="px-8 py-4 bg-amber-400 text-black font-semibold rounded-lg hover:bg-amber-500 transition-colors whitespace-nowrap"
            >
              Get updates
            </button>
          </form>
        </div>

        {/* Right side - Image */}
        <div className="hidden lg:flex items-center justify-center">
          <div className="relative">
            <div className="absolute -top-4 -left-4 bg-amber-400 rounded-2xl px-6 py-3 text-black font-semibold text-lg">
              What's new at Reakon
            </div>
            <div className="bg-gray-200 rounded-2xl overflow-hidden shadow-xl">
              <img
                src="data:image/svg+xml,%3Csvg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'%3E%3Crect fill='%23e5e7eb' width='400' height='300'/%3E%3Ctext x='200' y='150' font-size='20' text-anchor='middle' fill='%236b7280'%3EProduct preview image%3C/text%3E%3C/svg%3E"
                alt="Product preview"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
