import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import heroImage from "@/assets/hero-romance.jpg";
import { toast } from "sonner";

const LandingHero = () => {
  const [email, setEmail] = useState("");

  const onJoinWaitlist = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error("Please enter a valid email to join the waitlist.");
      return;
    }

    try {
      const key = "lovable_waitlist_emails";
      const current = JSON.parse(localStorage.getItem(key) || "[]") as string[];
      if (!current.includes(email)) current.push(email);
      localStorage.setItem(key, JSON.stringify(current));
      toast.success("You're on the list! We'll reach out soon.");
      setEmail("");
    } catch {
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <section aria-labelledby="hero-heading" className="relative overflow-hidden">
      {/* Ambient gradient glow */}
      <div className="pointer-events-none absolute inset-x-0 -top-32 h-72 bg-gradient-to-b from-[hsl(var(--primary)/0.35)] to-transparent blur-3xl opacity-60" />

      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          {/* Copy */}
          <div className="text-left animate-enter">
            <h1 id="hero-heading" className="text-4xl md:text-5xl font-bold tracking-tight">
              Lovable Dating App — Designed for Real Love
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-prose">
              Beautifully crafted to spark meaningful connections. Feel the warmth,
              the story, and the smoothness — a premium experience that’s meant to
              be deleted.
            </p>

            <form onSubmit={onJoinWaitlist} className="mt-8 flex w-full max-w-xl items-center gap-3">
              <Input
                type="email"
                inputMode="email"
                aria-label="Email address"
                placeholder="Enter your email for early access"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12"
                required
              />
              <Button type="submit" variant="hero" size="lg" className="h-12 px-6 hover-scale">
                Join waitlist
              </Button>
            </form>

            <p className="mt-3 text-sm text-muted-foreground">
              No spam. Just a heartfelt invite when we’re ready.
            </p>
          </div>

          {/* Visual */}
          <div className="relative animate-fade-in">
            <div className="rounded-xl overflow-hidden shadow-xl ring-1 ring-border">
              <img
                src={heroImage}
                alt="Warm, cinematic scene with gentle bokeh — the romantic vibe of Lovable"
                loading="lazy"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingHero;
