import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const LandingHero = () => {
  const [email, setEmail] = useState("");
  const particles = [
    { top: "8%", left: "12%", size: 10, delay: "0s" },
    { top: "18%", left: "70%", size: 12, delay: "0.5s" },
    { top: "30%", left: "25%", size: 8, delay: "1s" },
    { top: "40%", left: "80%", size: 10, delay: "1.3s" },
    { top: "55%", left: "15%", size: 12, delay: "0.2s" },
    { top: "65%", left: "60%", size: 9, delay: "0.8s" },
    { top: "75%", left: "35%", size: 7, delay: "1.5s" },
    { top: "20%", left: "45%", size: 9, delay: "1.1s" },
    { top: "85%", left: "75%", size: 11, delay: "0.7s" },
    { top: "50%", left: "50%", size: 13, delay: "1.8s" },
  ];

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
    <section aria-labelledby="hero-heading" className="relative overflow-hidden min-h-[70vh] md:min-h-[80vh] flex items-center">
      {/* Background image + gradient overlay */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0 bg-[url('/lovable-uploads/825ac851-e4ca-45bb-a729-b1d62d7a115c.png')] bg-cover bg-center animate-soft-bloom"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-background/30 to-background/80" />
      </div>

      {/* Ambient gradient glow */}
      <div className="pointer-events-none absolute inset-x-0 -top-32 h-72 bg-gradient-to-b from-[hsl(var(--primary)/0.35)] to-transparent blur-3xl opacity-60" />

      {/* Floating lights */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        {particles.map((p, i) => (
          <span
            key={i}
            className="magic-particle animate-float-twinkle"
            style={{ top: p.top, left: p.left, width: p.size, height: p.size, animationDelay: p.delay }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="grid items-center gap-10">
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

            <form id="waitlist" onSubmit={onJoinWaitlist} className="mt-8 flex w-full max-w-xl items-center gap-3">
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

          {/* Visual moved to background layers */}
        </div>
      </div>
    </section>
  );
};

export default LandingHero;
