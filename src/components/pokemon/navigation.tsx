'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ShoppingCart, User, Menu } from 'lucide-react';
import { useState } from 'react';

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-secondary text-secondary-foreground border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-bold text-xl">
              P
            </div>
            <span className="font-bold text-xl hidden sm:block">PokeTrader</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/cards" className="hover:text-primary transition-colors">
              Browse Cards
            </Link>
            <Link href="/trade" className="hover:text-primary transition-colors">
              Trade
            </Link>
            <Link href="/community" className="hover:text-primary transition-colors">
              Community
            </Link>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon">
              <ShoppingCart className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="/profile">
                <User className="w-5 h-5" />
              </Link>
            </Button>
            <Button className="hidden sm:flex bg-primary hover:bg-primary/90 text-primary-foreground">
              Sign In
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-2">
            <Link href="/" className="block py-2 hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/cards" className="block py-2 hover:text-primary transition-colors">
              Browse Cards
            </Link>
            <Link href="/trade" className="block py-2 hover:text-primary transition-colors">
              Trade
            </Link>
            <Link href="/community" className="block py-2 hover:text-primary transition-colors">
              Community
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
