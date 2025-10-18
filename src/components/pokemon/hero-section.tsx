'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, TrendingUp, Users } from 'lucide-react';
import { SearchBar } from './search-bar';
import Image from 'next/image';

export function HeroSection() {
  return (
    <section className="relative bg-secondary text-secondary-foreground overflow-hidden">
      {/* Background with Pokémon pattern */}
      <div className="absolute inset-0 opacity-30">
        <Image
          src="/generated/hero-background.png"
          alt="Pokémon background pattern"
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/80 via-secondary/70 to-warning/20" />

      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              CONNECT. COLLECT. TRADE.
              <br />
              <span className="text-primary drop-shadow-lg">YOUR POKÉMON UNIVERSE.</span>
            </h1>
            <p className="text-lg md:text-xl text-secondary-foreground/90">
              Join the ultimate platform to discover rare cards, track values, and trade with collectors worldwide.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-lg hover:shadow-xl transition-all">
                DOWNLOAD THE APP
              </Button>
              <Button size="lg" variant="outline" className="border-foreground/30 bg-card/50 hover:bg-card backdrop-blur-sm">
                LEARN MORE <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Right - Phone mockup with image */}
          <div className="relative">
            <div className="aspect-[9/16] max-w-sm mx-auto relative">
              <Image
                src="/generated/mobile-mockup.png"
                alt="Mobile app interface"
                fill
                className="object-contain drop-shadow-2xl"
                priority
              />
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
