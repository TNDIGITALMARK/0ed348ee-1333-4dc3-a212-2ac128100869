'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, TrendingUp, Users } from 'lucide-react';
import { SearchBar } from './search-bar';

export function HeroSection() {
  return (
    <section className="relative bg-secondary text-secondary-foreground overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary to-accent/20" />

      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              CONNECT. COLLECT. TRADE.
              <br />
              <span className="text-primary">YOUR POKEMON UNIVERSE.</span>
            </h1>
            <p className="text-lg md:text-xl text-secondary-foreground/80">
              Join the ultimate platform to discover rare cards, track values, and trade with collectors worldwide.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                DOWNLOAD THE APP
              </Button>
              <Button size="lg" variant="outline" className="border-secondary-foreground/30 hover:bg-secondary-foreground/10">
                LEARN MORE <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Right - Phone mockup placeholder */}
          <div className="relative">
            <div className="aspect-[9/16] max-w-sm mx-auto bg-gradient-to-br from-accent/30 to-primary/20 rounded-3xl shadow-2xl border-8 border-secondary-foreground/10 flex items-center justify-center">
              <div className="text-center p-6">
                <div className="w-20 h-20 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Sparkles className="w-10 h-10 text-primary-foreground" />
                </div>
                <p className="text-sm text-secondary-foreground/60">Mobile App Preview</p>
              </div>
            </div>
          </div>
        </div>

        {/* Feature badges */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16">
          <div className="flex items-center gap-4 p-4 bg-card rounded-lg">
            <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-accent" />
            </div>
            <div>
              <h3 className="font-bold text-card-foreground">Organize Your Cards</h3>
              <p className="text-sm text-muted-foreground">Digital collection manager</p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-4 bg-card rounded-lg">
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-bold text-card-foreground">Smart Trading Price</h3>
              <p className="text-sm text-muted-foreground">Real-time market values</p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-4 bg-card rounded-lg">
            <div className="w-12 h-12 rounded-full bg-success/20 flex items-center justify-center">
              <Users className="w-6 h-6 text-success" />
            </div>
            <div>
              <h3 className="font-bold text-card-foreground">Global Community</h3>
              <p className="text-sm text-muted-foreground">Connect with collectors</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
