export const dynamic = 'force-dynamic'

import { Navigation } from '@/components/pokemon/navigation';
import { SearchBar } from '@/components/pokemon/search-bar';
import { FilterSidebar } from '@/components/pokemon/filter-sidebar';
import { CardDisplay } from '@/components/pokemon/card-display';
import { mockCards } from '@/lib/mock-data';
import { Button } from '@/components/ui/button';
import { Grid3x3, List, SlidersHorizontal } from 'lucide-react';

export default function CardsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 py-8">
        {/* Search Bar */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-6">Browse Pokemon Cards</h1>
          <SearchBar placeholder="Search by name, set, or type..." />
        </div>

        <div className="grid lg:grid-cols-[280px_1fr] gap-8">
          {/* Filter Sidebar */}
          <aside className="hidden lg:block">
            <FilterSidebar />
          </aside>

          {/* Main Content */}
          <div>
            {/* Controls */}
            <div className="flex items-center justify-between mb-6">
              <p className="text-muted-foreground">
                Showing <span className="font-semibold text-foreground">{mockCards.length}</span> results
              </p>

              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" className="lg:hidden">
                  <SlidersHorizontal className="w-4 h-4 mr-2" />
                  Filters
                </Button>
                <Button variant="outline" size="icon">
                  <Grid3x3 className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <List className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {mockCards.map((card) => (
                <CardDisplay key={card.id} card={card} />
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center gap-2 mt-8">
              <Button variant="outline">Previous</Button>
              <Button variant="outline" className="bg-primary text-primary-foreground">1</Button>
              <Button variant="outline">2</Button>
              <Button variant="outline">3</Button>
              <Button variant="outline">Next</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
