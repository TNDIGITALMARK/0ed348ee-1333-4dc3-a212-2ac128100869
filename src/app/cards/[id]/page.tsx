export const dynamic = 'force-dynamic'

import { Navigation } from '@/components/pokemon/navigation';
import { mockCards, mockPriceHistory, mockUsers } from '@/lib/mock-data';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Star, TrendingUp, TrendingDown, ShoppingCart, MessageSquare, Heart } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
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
    'Common': 'bg-muted text-foreground',
    'Uncommon': 'bg-success/20 text-success-foreground',
    'Rare': 'bg-accent/20 text-accent-foreground',
    'Rare Holo': 'bg-warning/30 text-warning-foreground',
    'Ultra Rare': 'bg-primary/20 text-primary'
  };

  const conditionColors = {
    'Mint': 'text-success',
    'Near Mint': 'text-success',
    'Excellent': 'text-accent',
    'Good': 'text-warning',
    'Played': 'text-warning',
    'Heavily Played': 'text-destructive'
  };

  const cardImageMap: Record<string, string> = {
    'Charizard': '/generated/card-charizard.png',
    'Pikachu': '/generated/card-pikachu.png',
    'Mewtwo': '/generated/card-mewtwo.png',
  };

  const cardImage = cardImageMap[card.name] || '/generated/card-collection.png';

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column - Card Image */}
          <div className="space-y-4">
            <Card className="p-8 bg-gradient-to-br from-background to-muted">
              <div className="aspect-[3/4] relative rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src={cardImage}
                  alt={card.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </Card>

            {/* Additional Images */}
            <div className="grid grid-cols-4 gap-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="aspect-[3/4] relative rounded-lg overflow-hidden cursor-pointer hover:opacity-75 transition-opacity border-2 border-transparent hover:border-primary">
                  <Image
                    src={cardImage}
                    alt={`${card.name} view ${i}`}
                    fill
                    className="object-cover"
                  />
                </div>
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
              <Button size="lg" className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-lg hover:shadow-xl transition-all">
                <ShoppingCart className="w-5 h-5 mr-2" />
                Buy Now
              </Button>
              <Button size="lg" variant="outline" className="flex-1 hover:bg-primary/10 hover:text-primary hover:border-primary">
                <MessageSquare className="w-5 h-5 mr-2" />
                Make Offer
              </Button>
              <Button size="lg" variant="outline" className="hover:bg-primary/10 hover:text-primary hover:border-primary">
                <Heart className="w-5 h-5" />
              </Button>
            </div>

            {/* Trade Suggestion */}
            <Card className="p-6 bg-gradient-to-br from-accent/10 to-primary/5 border-accent/30">
              <h3 className="font-semibold mb-3">Trade Suggestion</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Based on your collection, we recommend trading:
              </p>
              <div className="flex gap-4">
                <div className="w-20 h-28 relative rounded-lg overflow-hidden">
                  <Image
                    src="/generated/card-mewtwo.png"
                    alt="Mewtwo EX"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <p className="font-semibold">Mewtwo EX</p>
                  <p className="text-sm text-muted-foreground">Value: $65</p>
                  <Badge className="mt-2 bg-success/20 text-success hover:bg-success/30" variant="outline">Fair Trade</Badge>
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
            {mockCards.filter(c => c.id !== card.id).slice(0, 4).map((similarCard) => {
              const similarCardImage = cardImageMap[similarCard.name] || '/generated/card-collection.png';
              return (
                <Link key={similarCard.id} href={`/cards/${similarCard.id}`}>
                  <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border-2 hover:border-primary/30">
                    <div className="aspect-[3/4] relative bg-muted">
                      <Image
                        src={similarCardImage}
                        alt={similarCard.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-3">
                      <p className="font-semibold text-sm truncate">{similarCard.name}</p>
                      <p className="text-lg font-bold text-primary">${similarCard.price}</p>
                    </div>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
