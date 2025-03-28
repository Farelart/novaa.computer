"use client";

import { useState } from "react";
import { CheckCircle } from "lucide-react";

export default function Waitlist() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const email = form.email.value;

    if (!email) {
      setErrorMessage("Email is required");
      return;
    }

    try {
      const existingEmails = JSON.parse(
        localStorage.getItem("waitlistEmails") || "[]"
      );
      existingEmails.push({
        email,
        timestamp: new Date().toISOString(),
      });
      localStorage.setItem("waitlistEmails", JSON.stringify(existingEmails));

      setIsSubmitted(true);
      form.reset();
      setErrorMessage("");

      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch {
      setErrorMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="max-w-md mx-auto">
      {!isSubmitted ? (
        <>
          <form
            id="waitlist"
            onSubmit={handleSubmit}
            className="flex border border-gray-300 rounded-md overflow-hidden hover:border-gray-400 focus-within:border-black focus-within:ring-1 focus-within:ring-black transition-colors"
          >
            <input
              name="email"
              type="email"
              placeholder="name@email.com"
              className="flex-grow px-4 py-2 outline-none focus:ring-0 focus:outline-none"
              required
            />
            <button
              type="submit"
              className="bg-black text-white px-6 py-2 hover:bg-gray-800 transition-colors"
            >
              Join
            </button>
          </form>
          {errorMessage && (
            <p className="text-red-500 mt-2 text-sm text-center">
              {errorMessage}
            </p>
          )}
        </>
      ) : (
        <div className="flex items-center justify-center mt-4 text-green-600 gap-2">
          <CheckCircle size={20} />
          <span>Thank you for joining our waitlist!</span>
        </div>
      )}
    </div>
  );
}
