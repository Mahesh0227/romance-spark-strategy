import { Helmet } from "react-helmet-async";
import LandingHero from "@/components/marketing/LandingHero";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles, Heart, CalendarCheck2 } from "lucide-react";

const Index = () => {
  const canonical = typeof window !== "undefined" ? window.location.href : "/";

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Lovable Dating App – Designed for Real Love</title>
        <meta name="description" content="Lovable is a premium dating app built for meaningful connections. Join the waitlist and be first to feel the warm, romantic experience." />
        <link rel="canonical" href={canonical} />
      </Helmet>

      <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-background/70 border-b border-border">
        <nav className="container mx-auto px-4 h-14 flex items-center justify-between">
          <a href="/" aria-label="Lovable Home" className="font-semibold tracking-tight">
            Lovable
          </a>
          <div className="hidden sm:flex items-center gap-6 text-sm">
            <a href="#features" className="story-link">Features</a>
            <a href="#waitlist" className="story-link">Waitlist</a>
          </div>
        </nav>
      </header>

      <main>
        <LandingHero />

        <section id="features" aria-labelledby="features-heading" className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-2xl">
            <h2 id="features-heading" className="text-3xl md:text-4xl font-bold tracking-tight">Crafted for connection</h2>
            <p className="mt-3 text-muted-foreground">Thoughtful features to kindle real moments — not endless swipes.</p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card className="animate-fade-in">
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><Sparkles className="text-primary" /> Premium feel</CardTitle>
                <CardDescription>Elegant visuals, smooth animations, and a warm, romantic vibe throughout.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">We obsess over the details so every tap feels special.</p>
              </CardContent>
            </Card>

            <Card className="animate-fade-in">
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><Heart className="text-primary" /> Story-first</CardTitle>
                <CardDescription>Celebrating real couples and moments built with care.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Your journey matters more than the match count.</p>
              </CardContent>
            </Card>

            <Card className="animate-fade-in">
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><CalendarCheck2 className="text-primary" /> Date-ready</CardTitle>
                <CardDescription>Thoughtful prompts and ideas to spark memorable experiences.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">From love languages to shared challenges — we’ve got you.</p>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <footer className="border-t border-border py-8">
        <div className="container mx-auto px-4 text-sm text-muted-foreground flex items-center justify-between">
          <p>© {new Date().getFullYear()} Lovable</p>
          <a href="#" className="story-link">Privacy</a>
        </div>
      </footer>
    </div>
  );
};

export default Index;
