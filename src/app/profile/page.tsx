export const dynamic = 'force-dynamic'

import { Navigation } from '@/components/pokemon/navigation';
import { mockUsers, mockCards, mockTrades } from '@/lib/mock-data';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Star, TrendingUp, Package, Heart, Settings, DollarSign, Calendar } from 'lucide-react';
import Link from 'next/link';

export default function ProfilePage() {
  const currentUser = mockUsers['user-001'];
  const userCards = mockCards.filter(card => card.sellerId === currentUser.id);
  const userTrades = mockTrades;

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 py-8">
        {/* Profile Header */}
        <Card className="p-8 mb-8">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center text-white text-5xl font-bold shadow-lg">
              {currentUser.username.charAt(0).toUpperCase()}
            </div>

            <div className="flex-1">
              <div className="flex items-center gap-4 mb-2">
                <h1 className="text-3xl font-bold">{currentUser.username}</h1>
                <Badge className="bg-primary text-primary-foreground">Verified</Badge>
              </div>

              <div className="flex flex-wrap gap-6 mb-4">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <span className="font-semibold">{currentUser.rating}</span>
                  <span className="text-sm text-muted-foreground">Rating</span>
                </div>
                <div className="flex items-center gap-2">
                  <Package className="w-5 h-5 text-accent" />
                  <span className="font-semibold">{currentUser.totalTrades}</span>
                  <span className="text-sm text-muted-foreground">Trades</span>
                </div>
                <div className="flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-success" />
                  <span className="font-semibold">${currentUser.collectionValue.toLocaleString()}</span>
                  <span className="text-sm text-muted-foreground">Collection Value</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Joined {currentUser.joinDate}</span>
                </div>
              </div>

              <div className="flex items-center gap-2 mb-4">
                <Badge variant="outline">{currentUser.specialization}</Badge>
              </div>

              <div className="flex gap-3">
                <Button>
                  <Settings className="w-4 h-4 mr-2" />
                  Edit Profile
                </Button>
                <Button variant="outline">Share Profile</Button>
              </div>
            </div>
          </div>
        </Card>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-muted-foreground">Total Cards</h3>
              <Package className="w-5 h-5 text-accent" />
            </div>
            <p className="text-3xl font-bold">{userCards.length}</p>
            <p className="text-sm text-muted-foreground mt-2">In your collection</p>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-muted-foreground">Portfolio Value</h3>
              <TrendingUp className="w-5 h-5 text-success" />
            </div>
            <p className="text-3xl font-bold text-success">${currentUser.collectionValue.toLocaleString()}</p>
            <p className="text-sm text-success mt-2">+12.5% this month</p>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-muted-foreground">Wishlist Items</h3>
              <Heart className="w-5 h-5 text-destructive" />
            </div>
            <p className="text-3xl font-bold">8</p>
            <p className="text-sm text-muted-foreground mt-2">Cards you want</p>
          </Card>
        </div>

        {/* Tabs Section */}
        <Tabs defaultValue="collection" className="space-y-6">
          <TabsList className="grid w-full md:w-auto grid-cols-3 md:inline-grid">
            <TabsTrigger value="collection">Collection</TabsTrigger>
            <TabsTrigger value="trades">Trade History</TabsTrigger>
            <TabsTrigger value="wishlist">Wishlist</TabsTrigger>
          </TabsList>

          {/* Collection Tab */}
          <TabsContent value="collection" className="space-y-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold">My Collection</h2>
              <Button variant="outline">
                <Package className="w-4 h-4 mr-2" />
                Add Card
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {userCards.map((card) => (
                <Link key={card.id} href={`/cards/${card.id}`}>
                  <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                    <div className="aspect-[3/4] bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white text-4xl font-bold relative">
                      <span>{card.name.charAt(0)}</span>
                      <Badge className="absolute top-2 right-2 text-xs">{card.condition}</Badge>
                    </div>
                    <div className="p-3">
                      <p className="font-semibold text-sm truncate">{card.name}</p>
                      <p className="text-xs text-muted-foreground truncate">{card.set}</p>
                      <p className="text-lg font-bold text-primary mt-1">${card.price}</p>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </TabsContent>

          {/* Trade History Tab */}
          <TabsContent value="trades" className="space-y-6">
            <h2 className="text-2xl font-bold mb-4">Trade History</h2>

            <div className="space-y-4">
              {userTrades.map((trade) => (
                <Card key={trade.id} className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-20 bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold">
                        {trade.cardName.charAt(0)}
                      </div>
                      <div>
                        <h3 className="font-semibold">{trade.cardName}</h3>
                        <p className="text-sm text-muted-foreground">with {trade.partnerName}</p>
                        <p className="text-xs text-muted-foreground">{trade.date}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-xl font-bold">${trade.value}</p>
                      <Badge
                        className={
                          trade.status === 'completed'
                            ? 'bg-success text-success-foreground'
                            : trade.status === 'pending'
                            ? 'bg-warning text-warning-foreground'
                            : 'bg-muted'
                        }
                      >
                        {trade.status}
                      </Badge>
                    </div>
                  </div>
                  {trade.feedback && (
                    <div className="mt-4 p-3 bg-muted/50 rounded-lg">
                      <p className="text-sm italic">"{trade.feedback}"</p>
                      <div className="flex items-center gap-1 mt-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                  )}
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Wishlist Tab */}
          <TabsContent value="wishlist" className="space-y-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold">Wishlist</h2>
              <Button variant="outline">
                <Heart className="w-4 h-4 mr-2" />
                Add to Wishlist
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {mockCards.slice(2, 6).map((card) => (
                <Card key={card.id} className="overflow-hidden">
                  <Link href={`/cards/${card.id}`}>
                    <div className="aspect-[3/4] bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center text-white text-4xl font-bold relative cursor-pointer hover:opacity-90 transition-opacity">
                      <span>{card.name.charAt(0)}</span>
                      <div className="absolute top-2 right-2">
                        <Heart className="w-5 h-5 fill-red-500 text-red-500" />
                      </div>
                    </div>
                  </Link>
                  <div className="p-3">
                    <p className="font-semibold text-sm truncate">{card.name}</p>
                    <p className="text-xs text-muted-foreground truncate">{card.set}</p>
                    <div className="flex items-center justify-between mt-2">
                      <p className="text-lg font-bold text-primary">${card.price}</p>
                      <Button size="sm" variant="outline">Find Match</Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
