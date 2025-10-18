'use client';

import { PokemonCard } from '@/lib/mock-data';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Star } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

interface CardDisplayProps {
  card: PokemonCard;
  variant?: 'grid' | 'list';
}

export function CardDisplay({ card, variant = 'grid' }: CardDisplayProps) {
  const rarityColors = {
    'Common': 'bg-muted text-foreground',
    'Uncommon': 'bg-success/20 text-success-foreground',
    'Rare': 'bg-accent/20 text-accent-foreground',
    'Rare Holo': 'bg-warning/30 text-warning-foreground',
    'Ultra Rare': 'bg-primary/20 text-primary'
  };

  const conditionColors = {
    'Mint': 'bg-success',
    'Near Mint': 'bg-success/80',
    'Excellent': 'bg-accent',
    'Good': 'bg-warning',
    'Played': 'bg-warning/70',
    'Heavily Played': 'bg-destructive'
  };

  // Map card names to generated images
  const cardImageMap: Record<string, string> = {
    'Charizard': '/generated/card-charizard.png',
    'Pikachu': '/generated/card-pikachu.png',
    'Mewtwo': '/generated/card-mewtwo.png',
  };

  const cardImage = cardImageMap[card.name] || '/generated/card-collection.png';

  if (variant === 'list') {
    return (
      <Link href={`/cards/${card.id}`}>
        <Card className="p-4 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer">
          <div className="flex gap-4">
            <div className="w-24 h-32 relative rounded-lg overflow-hidden">
              <Image
                src={cardImage}
                alt={card.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-lg">{card.name}</h3>
              <p className="text-sm text-muted-foreground">{card.set}</p>
              <div className="flex gap-2 mt-2">
                <Badge className={rarityColors[card.rarity]}>{card.rarity}</Badge>
                <Badge variant="outline">{card.condition}</Badge>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <span className="text-sm text-muted-foreground">{card.sellerName}</span>
                <div className="flex items-center">
                  <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm ml-1">{card.sellerRating}</span>
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-primary">${card.price}</div>
              <div className={`w-2 h-2 rounded-full ${conditionColors[card.condition]} mt-2`} />
            </div>
          </div>
        </Card>
      </Link>
    );
  }

  return (
    <Link href={`/cards/${card.id}`}>
      <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group border-2 hover:border-primary/30">
        <div className="aspect-[3/4] relative overflow-hidden bg-muted">
          <Image
            src={cardImage}
            alt={card.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-4">
          <h3 className="font-bold text-lg truncate group-hover:text-accent transition-colors">{card.name}</h3>
          <p className="text-sm text-muted-foreground truncate">{card.set}</p>
          <div className="flex gap-2 mt-2 flex-wrap">
            <Badge className={`${rarityColors[card.rarity]} text-xs`}>{card.rarity}</Badge>
            <Badge variant="outline" className="text-xs">{card.condition}</Badge>
          </div>
          <div className="flex items-center justify-between mt-3">
            <div className="flex items-center gap-1">
              <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
              <span className="text-sm">{card.sellerRating}</span>
            </div>
            <div className="text-xl font-bold text-primary">${card.price}</div>
          </div>
        </div>
      </Card>
    </Link>
  );
}
