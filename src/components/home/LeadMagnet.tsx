import React, { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const LeadMagnet = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email.trim()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/mgopwoew", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          source: "lead-magnet",
        }),
      });

      if (!response.ok) {
        throw new Error("Lead magnet form submission failed");
      }

      setSubmitted(true);
      setEmail("");
      setTimeout(() => navigate("/free-audit"), 900);
    } catch (error) {
      console.error("Error submitting lead magnet form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="lead-magnet" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl rounded-2xl bg-gradient-to-r from-coral/80 via-lemon/80 to-coral/80 p-[1px]">
          <div className="rounded-2xl bg-slate-900 px-6 py-10 md:px-10 md:py-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Free: 10-Point Dashboard Audit Checklist
            </h2>
            <p className="text-gray-200 text-base md:text-lg mb-8">
              Find out if your dashboard is helping or hurting your business. Takes 2 minutes to
              check.
            </p>

            {submitted ? (
              <p className="text-lemon font-semibold text-lg">Check your email!</p>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="email"
                  required
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="you@company.com"
                  className="h-12 bg-white/10 border-white/20 text-white placeholder:text-gray-300 focus-visible:ring-coral"
                />
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="h-12 bg-coral hover:bg-coral/90 text-black font-semibold px-6"
                >
                  {isSubmitting ? "Sending..." : "Get the Checklist"}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadMagnet;
