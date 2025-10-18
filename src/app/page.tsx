export const dynamic = 'force-dynamic'

import { Navigation } from '@/components/pokemon/navigation';
import { HeroSection } from '@/components/pokemon/hero-section';
import { SearchBar } from '@/components/pokemon/search-bar';
import { CardDisplay } from '@/components/pokemon/card-display';
import { mockCards, featuredCards, trendingCards } from '@/lib/mock-data';
import { Button } from '@/components/ui/button';
import { ArrowRight, TrendingUp, Zap, Search } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />

      {/* Search Section */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center gap-6">
            <SearchBar />
          </div>
        </div>
      </section>

      {/* Featured Cards Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold mb-2">Discover Rare Gems</h2>
              <p className="text-muted-foreground">Handpicked legendary cards available now</p>
            </div>
            <Button variant="ghost" asChild>
              <Link href="/cards" className="hidden sm:flex items-center gap-2">
                View All <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredCards.map((card) => (
              <CardDisplay key={card.id} card={card} />
            ))}
          </div>

          {/* Feature Icons */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-bold text-lg mb-2">Secure Transactions</h3>
              <p className="text-sm text-muted-foreground">Protected trades with escrow</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-lg mb-2">Real-Time Notifications</h3>
              <p className="text-sm text-muted-foreground">Never miss a deal</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-success/20 flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-success" />
              </div>
              <h3 className="font-bold text-lg mb-2">Profile & Condo Reviews</h3>
              <p className="text-sm text-muted-foreground">Trust verified sellers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trending Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <TrendingUp className="w-8 h-8 text-primary" />
            <h2 className="text-3xl font-bold">Trending Now</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {trendingCards.map((card) => (
              <CardDisplay key={card.id} card={card} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-secondary via-secondary to-warning/20 text-secondary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/generated/pokeball-icons.png')] bg-repeat bg-center" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            JOIN THE EVOLUTION OF TRADING!
          </h2>
          <p className="text-xl mb-8 text-secondary-foreground/90 max-w-2xl mx-auto">
            Start building your dream collection today with thousands of collectors worldwide.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg px-8 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1">
            GET STARTED TODAY
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-secondary text-secondary-foreground border-t border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold mb-4">About Us</h3>
              <ul className="space-y-2 text-sm text-secondary-foreground/70">
                <li><Link href="/about" className="hover:text-primary">Our Story</Link></li>
                <li><Link href="/team" className="hover:text-primary">Team</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Support</h3>
              <ul className="space-y-2 text-sm text-secondary-foreground/70">
                <li><Link href="/help" className="hover:text-primary">Help Center</Link></li>
                <li><Link href="/faq" className="hover:text-primary">FAQ</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Legal</h3>
              <ul className="space-y-2 text-sm text-secondary-foreground/70">
                <li><Link href="/terms" className="hover:text-primary">Terms of Service</Link></li>
                <li><Link href="/privacy" className="hover:text-primary">Privacy Policy</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Connect</h3>
              <ul className="space-y-2 text-sm text-secondary-foreground/70">
                <li><Link href="/social" className="hover:text-primary">Social Media</Link></li>
                <li><Link href="/contact" className="hover:text-primary">Contact</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border text-center text-sm text-secondary-foreground/60">
            © 2025 PokeTrader. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}