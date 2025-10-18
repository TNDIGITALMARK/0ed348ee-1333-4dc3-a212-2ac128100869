import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Search } from 'lucide-react';
import { Navigation } from '@/components/pokemon/navigation';

export default function CardNotFound() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto px-4 py-16">
        <Card className="max-w-2xl mx-auto p-12 text-center">
          <div className="w-24 h-24 rounded-full bg-muted flex items-center justify-center mx-auto mb-6">
            <Search className="w-12 h-12 text-muted-foreground" />
          </div>
          <h1 className="text-3xl font-bold mb-4">Card Not Found</h1>
          <p className="text-muted-foreground mb-8">
            Sorry, we couldn't find the Pokemon card you're looking for. It may have been sold or removed from the marketplace.
          </p>
          <div className="flex gap-4 justify-center">
            <Button asChild>
              <Link href="/cards">Browse All Cards</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/">Return Home</Link>
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
