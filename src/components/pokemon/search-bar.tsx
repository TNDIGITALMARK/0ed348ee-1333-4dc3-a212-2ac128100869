'use client';

import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface SearchBarProps {
  onSearch?: (query: string) => void;
  placeholder?: string;
}

export function SearchBar({ onSearch, placeholder = "Search for Pokemon cards..." }: SearchBarProps) {
  return (
    <div className="relative flex gap-2 w-full max-w-2xl">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
        <Input
          type="text"
          placeholder={placeholder}
          className="pl-10 h-12 text-lg"
          onChange={(e) => onSearch?.(e.target.value)}
        />
      </div>
      <Button className="h-12 px-8 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
        Search
      </Button>
    </div>
  );
}
