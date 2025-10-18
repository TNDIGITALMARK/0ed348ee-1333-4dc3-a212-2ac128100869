export const dynamic = 'force-dynamic'

import { Navigation } from '@/components/pokemon/navigation';
import { mockCards, mockPriceHistory, mockUsers } from '@/lib/mock-data';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Star, TrendingUp, TrendingDown, ShoppingCart, MessageSquare, Heart } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export default function CardDetailPage({ params }: { params: { id: string } }) {
  const card = mockCards.find(c => c.id === params.id);

  if (!card) {
    notFound();
  }

  const seller = mockUsers[card.sellerId];
  const priceHistory = mockPriceHistory[card.id] || [];
  const latestChange = priceHistory.length > 0 ? priceHistory[priceHistory.length - 1].change : 0;

  const rarityColors = {
    'Common': 'bg-gray-100 text-gray-800',
    'Uncommon': 'bg-green-100 text-green-800',
    'Rare': 'bg-blue-100 text-blue-800',
    'Rare Holo': 'bg-purple-100 text-purple-800',
    'Ultra Rare': 'bg-yellow-100 text-yellow-800'
  };

  const conditionColors = {
    'Mint': 'text-green-600',
    'Near Mint': 'text-green-500',
    'Excellent': 'text-blue-500',
    'Good': 'text-yellow-500',
    'Played': 'text-orange-500',
    'Heavily Played': 'text-red-500'
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column - Card Image */}
          <div className="space-y-4">
            <Card className="p-8">
              <div className="aspect-[3/4] bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center text-white text-8xl font-bold shadow-xl">
                {card.name.charAt(0)}
              </div>
            </Card>

            {/* Additional Images */}
            <div className="grid grid-cols-4 gap-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="aspect-[3/4] bg-gradient-to-br from-blue-300 to-blue-500 rounded-lg cursor-pointer hover:opacity-75 transition-opacity" />
              ))}
            </div>
          </div>

          {/* Right Column - Card Details */}
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-bold mb-2">{card.name}</h1>
              <p className="text-xl text-muted-foreground">{card.set}</p>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-2">
              <Badge className={rarityColors[card.rarity]}>{card.rarity}</Badge>
              <Badge variant="outline">{card.type} Type</Badge>
              <Badge variant="outline">Generation {card.generation}</Badge>
            </div>

            {/* Price */}
            <Card className="p-6 bg-primary/5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Current Price</p>
                  <p className="text-4xl font-bold text-primary">${card.price}</p>
                </div>
                <div className="text-right">
                  <div className={`flex items-center gap-1 ${latestChange >= 0 ? 'text-success' : 'text-destructive'}`}>
                    {latestChange >= 0 ? <TrendingUp className="w-5 h-5" /> : <TrendingDown className="w-5 h-5" />}
                    <span className="font-semibold">{latestChange >= 0 ? '+' : ''}{latestChange.toFixed(1)}%</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Last 30 days</p>
                </div>
              </div>
            </Card>

            {/* Condition */}
            <Card className="p-6">
              <h3 className="font-semibold mb-3">Condition</h3>
              <div className="flex items-center justify-between">
                <span className={`text-xl font-bold ${conditionColors[card.condition]}`}>
                  {card.condition}
                </span>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div
                      key={i}
                      className={`w-3 h-3 rounded-full ${
                        i <= (['Mint', 'Near Mint'].includes(card.condition) ? 5 : ['Excellent'].includes(card.condition) ? 4 : 3)
                          ? 'bg-success'
                          : 'bg-muted'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </Card>

            {/* Seller Info */}
            <Card className="p-6">
              <h3 className="font-semibold mb-4">Seller Information</h3>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center text-white font-bold text-xl">
                  {seller?.username.charAt(0).toUpperCase()}
                </div>
                <div className="flex-1">
                  <p className="font-semibold">{seller?.username}</p>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="ml-1 text-sm">{seller?.rating}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">•</span>
                    <span className="text-sm text-muted-foreground">{seller?.totalTrades} trades</span>
                  </div>
                </div>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/profile">View Profile</Link>
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">
                Specialization: {seller?.specialization}
              </p>
            </Card>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <Button size="lg" className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                <ShoppingCart className="w-5 h-5 mr-2" />
                Buy Now
              </Button>
              <Button size="lg" variant="outline" className="flex-1">
                <MessageSquare className="w-5 h-5 mr-2" />
                Make Offer
              </Button>
              <Button size="lg" variant="outline">
                <Heart className="w-5 h-5" />
              </Button>
            </div>

            {/* Trade Suggestion */}
            <Card className="p-6 bg-accent/5 border-accent">
              <h3 className="font-semibold mb-3">Trade Suggestion</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Based on your collection, we recommend trading:
              </p>
              <div className="flex gap-4">
                <div className="w-20 h-28 bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold">
                  M
                </div>
                <div className="flex-1">
                  <p className="font-semibold">Mewtwo EX</p>
                  <p className="text-sm text-muted-foreground">Value: $65</p>
                  <Badge className="mt-2" variant="outline">Fair Trade</Badge>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Price History */}
        <div className="mt-12">
          <Card className="p-6">
            <h2 className="text-2xl font-bold mb-6">Price History</h2>
            {priceHistory.length > 0 ? (
              <div className="space-y-4">
                <div className="h-48 bg-muted/30 rounded-lg flex items-center justify-center">
                  <p className="text-muted-foreground">Price chart visualization</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {priceHistory.map((entry) => (
                    <div key={entry.date} className="text-center">
                      <p className="text-sm text-muted-foreground">{entry.date}</p>
                      <p className="text-xl font-bold">${entry.price}</p>
                      <p className={`text-sm ${entry.change >= 0 ? 'text-success' : 'text-destructive'}`}>
                        {entry.change >= 0 ? '+' : ''}{entry.change}%
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <p className="text-muted-foreground">No price history available</p>
            )}
          </Card>
        </div>

        {/* Similar Cards */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Similar Cards</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {mockCards.filter(c => c.id !== card.id).slice(0, 4).map((similarCard) => (
              <Link key={similarCard.id} href={`/cards/${similarCard.id}`}>
                <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                  <div className="aspect-[3/4] bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white text-3xl font-bold">
                    {similarCard.name.charAt(0)}
                  </div>
                  <div className="p-3">
                    <p className="font-semibold text-sm truncate">{similarCard.name}</p>
                    <p className="text-lg font-bold text-primary">${similarCard.price}</p>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
