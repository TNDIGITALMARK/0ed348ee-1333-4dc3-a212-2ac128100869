/**
 * Mock data for Pokemon Card Trading App MVP
 * Realistic data matching specifications from design document
 */

export interface PokemonCard {
  id: string;
  name: string;
  set: string;
  rarity: 'Common' | 'Uncommon' | 'Rare' | 'Rare Holo' | 'Ultra Rare';
  condition: 'Mint' | 'Near Mint' | 'Excellent' | 'Good' | 'Played' | 'Heavily Played';
  price: number;
  imageUrl: string;
  type: string;
  generation: number;
  sellerId: string;
  sellerName: string;
  sellerRating: number;
  dateAdded: string;
}

export interface PriceHistory {
  date: string;
  price: number;
  change: number;
}

export interface User {
  id: string;
  username: string;
  rating: number;
  totalTrades: number;
  collectionValue: number;
  specialization: string;
  joinDate: string;
  avatar?: string;
}

export interface Trade {
  id: string;
  date: string;
  cardName: string;
  value: number;
  status: 'completed' | 'pending' | 'cancelled';
  partnerId: string;
  partnerName: string;
  feedback?: string;
}

// Mock Pokemon Cards Database
export const mockCards: PokemonCard[] = [
  {
    id: 'charizard-base-shadowless',
    name: 'Charizard',
    set: 'Base Set Shadowless',
    rarity: 'Rare Holo',
    condition: 'Near Mint',
    price: 250,
    imageUrl: '/cards/charizard-base.jpg',
    type: 'Fire',
    generation: 1,
    sellerId: 'user-001',
    sellerName: 'pokemon_master_1998',
    sellerRating: 5,
    dateAdded: '2025-10-15'
  },
  {
    id: 'blastoise-base-set',
    name: 'Blastoise',
    set: 'Base Set',
    rarity: 'Rare Holo',
    condition: 'Mint',
    price: 180,
    imageUrl: '/cards/blastoise-base.jpg',
    type: 'Water',
    generation: 1,
    sellerId: 'user-002',
    sellerName: 'card_collector_pro',
    sellerRating: 4.8,
    dateAdded: '2025-10-16'
  },
  {
    id: 'pikachu-vmax',
    name: 'Pikachu VMAX',
    set: 'Vivid Voltage',
    rarity: 'Ultra Rare',
    condition: 'Mint',
    price: 95,
    imageUrl: '/cards/pikachu-vmax.jpg',
    type: 'Electric',
    generation: 8,
    sellerId: 'user-003',
    sellerName: 'lightning_trades',
    sellerRating: 4.9,
    dateAdded: '2025-10-17'
  },
  {
    id: 'mewtwo-ex',
    name: 'Mewtwo EX',
    set: 'BREAKthrough',
    rarity: 'Ultra Rare',
    condition: 'Near Mint',
    price: 65,
    imageUrl: '/cards/mewtwo-ex.jpg',
    type: 'Psychic',
    generation: 1,
    sellerId: 'user-001',
    sellerName: 'pokemon_master_1998',
    sellerRating: 5,
    dateAdded: '2025-10-14'
  },
  {
    id: 'rayquaza-vmax',
    name: 'Rayquaza VMAX',
    set: 'Evolving Skies',
    rarity: 'Ultra Rare',
    condition: 'Mint',
    price: 120,
    imageUrl: '/cards/rayquaza-vmax.jpg',
    type: 'Dragon',
    generation: 3,
    sellerId: 'user-004',
    sellerName: 'dragon_hoard',
    sellerRating: 4.7,
    dateAdded: '2025-10-18'
  },
  {
    id: 'lugia-legend',
    name: 'Lugia LEGEND',
    set: 'HeartGold SoulSilver',
    rarity: 'Rare Holo',
    condition: 'Excellent',
    price: 210,
    imageUrl: '/cards/lugia-legend.jpg',
    type: 'Psychic',
    generation: 2,
    sellerId: 'user-002',
    sellerName: 'card_collector_pro',
    sellerRating: 4.8,
    dateAdded: '2025-10-13'
  }
];

// Mock Price History
export const mockPriceHistory: Record<string, PriceHistory[]> = {
  'charizard-base-shadowless': [
    { date: '2025-07-01', price: 220, change: 0 },
    { date: '2025-08-01', price: 235, change: 6.8 },
    { date: '2025-09-01', price: 245, change: 4.3 },
    { date: '2025-10-01', price: 250, change: 2.0 }
  ],
  'blastoise-base-set': [
    { date: '2025-07-01', price: 165, change: 0 },
    { date: '2025-08-01', price: 170, change: 3.0 },
    { date: '2025-09-01', price: 175, change: 2.9 },
    { date: '2025-10-01', price: 180, change: 2.9 }
  ]
};

// Mock Users
export const mockUsers: Record<string, User> = {
  'user-001': {
    id: 'user-001',
    username: 'pokemon_master_1998',
    rating: 5.0,
    totalTrades: 47,
    collectionValue: 3200,
    specialization: 'Vintage Cards',
    joinDate: '2023-03-15'
  },
  'user-002': {
    id: 'user-002',
    username: 'card_collector_pro',
    rating: 4.8,
    totalTrades: 132,
    collectionValue: 8500,
    specialization: 'Rare Holos',
    joinDate: '2022-11-20'
  },
  'user-003': {
    id: 'user-003',
    username: 'lightning_trades',
    rating: 4.9,
    totalTrades: 89,
    collectionValue: 5400,
    specialization: 'Modern Cards',
    joinDate: '2023-06-08'
  }
};

// Mock Trades
export const mockTrades: Trade[] = [
  {
    id: 'trade-001',
    date: '2025-10-12',
    cardName: 'Venusaur Base Set',
    value: 145,
    status: 'completed',
    partnerId: 'user-005',
    partnerName: 'plant_power',
    feedback: 'Great trader! Card arrived in perfect condition.'
  },
  {
    id: 'trade-002',
    date: '2025-10-10',
    cardName: 'Gyarados Holo',
    value: 85,
    status: 'completed',
    partnerId: 'user-006',
    partnerName: 'water_type_fan',
    feedback: 'Fast shipping and well packaged.'
  },
  {
    id: 'trade-003',
    date: '2025-10-18',
    cardName: 'Umbreon VMAX',
    value: 165,
    status: 'pending',
    partnerId: 'user-007',
    partnerName: 'dark_collector'
  }
];

// Featured/Trending Cards
export const featuredCards = mockCards.slice(0, 3);
export const trendingCards = mockCards.slice(2, 5);

// Filter options
export const filterOptions = {
  sets: ['Base Set', 'Base Set Shadowless', 'Jungle', 'Fossil', 'Team Rocket', 'Evolving Skies', 'Vivid Voltage', 'BREAKthrough'],
  rarities: ['Common', 'Uncommon', 'Rare', 'Rare Holo', 'Ultra Rare'],
  conditions: ['Mint', 'Near Mint', 'Excellent', 'Good', 'Played', 'Heavily Played'],
  types: ['Fire', 'Water', 'Electric', 'Grass', 'Psychic', 'Fighting', 'Dragon', 'Dark', 'Steel', 'Fairy'],
  generations: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  priceRanges: [
    { label: 'Under $25', min: 0, max: 25 },
    { label: '$25 - $50', min: 25, max: 50 },
    { label: '$50 - $100', min: 50, max: 100 },
    { label: '$100 - $250', min: 100, max: 250 },
    { label: '$250+', min: 250, max: 999999 }
  ]
};
