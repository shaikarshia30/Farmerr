import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tractor, Users, Wrench, MapPin, CheckCircle, Clock } from "lucide-react";
import heroImage from "@assets/generated_images/Agricultural_hero_landscape_image_fc1b3e42.png";

export default function LandingPage() {
  const features = [
    {
      icon: Tractor,
      title: "For Farmers",
      description: "Post job listings and find skilled agricultural workers quickly. Manage your workforce efficiently.",
    },
    {
      icon: Users,
      title: "For Workers",
      description: "Discover nearby farming jobs, apply instantly, and build your reputation in the agricultural community.",
    },
    {
      icon: Wrench,
      title: "For Equipment Providers",
      description: "List your vehicles and equipment for rent. Connect with farmers who need your tools.",
    },
  ];

  const steps = [
    {
      number: "1",
      title: "Create Your Account",
      description: "Choose your role and set up your profile in minutes",
    },
    {
      number: "2",
      title: "Post or Browse",
      description: "Farmers post jobs, workers find opportunities, providers list equipment",
    },
    {
      number: "3",
      title: "Connect & Work",
      description: "Connect directly and get work done efficiently",
    },
  ];

  const stats = [
    { number: "2,500+", label: "Jobs Posted" },
    { number: "5,000+", label: "Workers Connected" },
    { number: "800+", label: "Equipment Listed" },
    { number: "50+", label: "Locations" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <Tractor className="h-6 w-6 text-primary" />
            <span className="text-lg font-semibold">Former Code Connect</span>
          </div>
          <nav className="hidden items-center gap-6 md:flex">
            <a href="#how-it-works" className="text-sm text-muted-foreground hover:text-foreground">
              How It Works
            </a>
            <a href="#features" className="text-sm text-muted-foreground hover:text-foreground">
              Features
            </a>
            <a href="#about" className="text-sm text-muted-foreground hover:text-foreground">
              About
            </a>
          </nav>
          <div className="flex items-center gap-2">
            <Link href="/login">
              <Button variant="ghost" data-testid="button-login">
                Login
              </Button>
            </Link>
            <Link href="/register">
              <Button data-testid="button-register">Get Started</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative flex h-screen items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
          <h1 className="mb-6 text-5xl font-bold text-white md:text-7xl">
            Connecting Agriculture, One Job at a Time
          </h1>
          <p className="mb-12 text-xl text-white/90 md:text-2xl">
            The platform that brings farmers, workers, and equipment providers together
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/register?role=farmer">
              <Button
                size="lg"
                variant="outline"
                className="h-12 border-white/20 bg-white/10 text-white backdrop-blur-md hover:bg-white/20"
                data-testid="button-farmer-signup"
              >
                <Tractor className="mr-2 h-5 w-5" />
                I'm a Farmer
              </Button>
            </Link>
            <Link href="/register?role=coolie">
              <Button
                size="lg"
                variant="outline"
                className="h-12 border-white/20 bg-white/10 text-white backdrop-blur-md hover:bg-white/20"
                data-testid="button-worker-signup"
              >
                <Users className="mr-2 h-5 w-5" />
                I'm a Worker
              </Button>
            </Link>
            <Link href="/register?role=rental">
              <Button
                size="lg"
                variant="outline"
                className="h-12 border-white/20 bg-white/10 text-white backdrop-blur-md hover:bg-white/20"
                data-testid="button-rental-signup"
              >
                <Wrench className="mr-2 h-5 w-5" />
                I Provide Equipment
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-semibold">Built for Everyone in Agriculture</h2>
            <p className="text-lg text-muted-foreground">
              Whether you're hiring, seeking work, or renting equipment, we've got you covered
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {features.map((feature, index) => (
              <Card key={index} className="hover-elevate">
                <CardHeader>
                  <feature.icon className="mb-4 h-12 w-12 text-primary" />
                  <CardTitle>{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="bg-muted/30 py-24">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-semibold md:text-4xl">How It Works</h2>
            <p className="text-lg text-muted-foreground">Get started in three simple steps</p>
          </div>
          <div className="grid gap-12 md:grid-cols-3">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
                  {step.number}
                </div>
                <h3 className="mb-3 text-xl font-semibold">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-semibold md:text-4xl">Trusted by Thousands</h2>
            <p className="flex items-center justify-center gap-2 text-muted-foreground">
              <MapPin className="h-5 w-5 text-primary" />
              Location-based matching ensures you find opportunities nearby
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="mb-2 text-4xl font-bold text-primary">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-primary py-20 text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-semibold md:text-4xl">
              Ready to Transform Your Agricultural Work?
            </h2>
            <p className="mb-8 text-lg text-primary-foreground/90">
              Join thousands of farmers, workers, and equipment providers already using Former Code Connect
            </p>
            <Link href="/register">
              <Button
                size="lg"
                variant="outline"
                className="h-12 border-primary-foreground/20 bg-primary-foreground/10 text-primary-foreground backdrop-blur-md hover:bg-primary-foreground/20"
                data-testid="button-cta-signup"
              >
                Get Started Today
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <div className="mb-4 flex items-center gap-2">
                <Tractor className="h-5 w-5 text-primary" />
                <span className="font-semibold">Former Code Connect</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Connecting agriculture communities for better opportunities
              </p>
            </div>
            <div>
              <h3 className="mb-4 font-semibold">Platform</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>For Farmers</li>
                <li>For Workers</li>
                <li>For Rental Providers</li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 font-semibold">Company</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>About Us</li>
                <li>Contact</li>
                <li>Support</li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 font-semibold">Legal</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
            © 2025 Former Code Connect. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
