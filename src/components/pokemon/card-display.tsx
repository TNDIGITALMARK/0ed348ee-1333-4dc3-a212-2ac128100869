'use client';

import { PokemonCard } from '@/lib/mock-data';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Star } from 'lucide-react';
import Link from 'next/link';

interface CardDisplayProps {
  card: PokemonCard;
  variant?: 'grid' | 'list';
}

export function CardDisplay({ card, variant = 'grid' }: CardDisplayProps) {
  const rarityColors = {
    'Common': 'bg-gray-100 text-gray-800',
    'Uncommon': 'bg-green-100 text-green-800',
    'Rare': 'bg-blue-100 text-blue-800',
    'Rare Holo': 'bg-purple-100 text-purple-800',
    'Ultra Rare': 'bg-yellow-100 text-yellow-800'
  };

  const conditionColors = {
    'Mint': 'bg-green-500',
    'Near Mint': 'bg-green-400',
    'Excellent': 'bg-blue-400',
    'Good': 'bg-yellow-400',
    'Played': 'bg-orange-400',
    'Heavily Played': 'bg-red-400'
  };

  if (variant === 'list') {
    return (
      <Link href={`/cards/${card.id}`}>
        <Card className="p-4 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer">
          <div className="flex gap-4">
            <div className="w-24 h-32 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center text-white font-bold">
              {card.name.charAt(0)}
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
      <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-2 cursor-pointer group">
        <div className="aspect-[3/4] bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white text-4xl font-bold relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          <span className="relative z-10">{card.name.charAt(0)}</span>
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
