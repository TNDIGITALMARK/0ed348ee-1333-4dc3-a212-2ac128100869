'use client';

import { filterOptions } from '@/lib/mock-data';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

export function FilterSidebar() {
  return (
    <Card className="p-6 sticky top-4">
      <h2 className="font-bold text-xl mb-4">Filters</h2>

      <div className="space-y-6">
        {/* Rarity Filter */}
        <div>
          <Label className="text-base font-semibold mb-3 block">Rarity</Label>
          <div className="space-y-2">
            {filterOptions.rarities.map((rarity) => (
              <div key={rarity} className="flex items-center space-x-2">
                <Checkbox id={`rarity-${rarity}`} />
                <label
                  htmlFor={`rarity-${rarity}`}
                  className="text-sm cursor-pointer"
                >
                  {rarity}
                </label>
              </div>
            ))}
          </div>
        </div>

        <Separator />

        {/* Condition Filter */}
        <div>
          <Label className="text-base font-semibold mb-3 block">Condition</Label>
          <div className="space-y-2">
            {filterOptions.conditions.map((condition) => (
              <div key={condition} className="flex items-center space-x-2">
                <Checkbox id={`condition-${condition}`} />
                <label
                  htmlFor={`condition-${condition}`}
                  className="text-sm cursor-pointer"
                >
                  {condition}
                </label>
              </div>
            ))}
          </div>
        </div>

        <Separator />

        {/* Type Filter */}
        <div>
          <Label className="text-base font-semibold mb-3 block">Type</Label>
          <div className="space-y-2 max-h-48 overflow-y-auto">
            {filterOptions.types.map((type) => (
              <div key={type} className="flex items-center space-x-2">
                <Checkbox id={`type-${type}`} />
                <label
                  htmlFor={`type-${type}`}
                  className="text-sm cursor-pointer"
                >
                  {type}
                </label>
              </div>
            ))}
          </div>
        </div>

        <Separator />

        {/* Price Range */}
        <div>
          <Label className="text-base font-semibold mb-3 block">Price Range</Label>
          <div className="space-y-2">
            {filterOptions.priceRanges.map((range) => (
              <div key={range.label} className="flex items-center space-x-2">
                <Checkbox id={`price-${range.label}`} />
                <label
                  htmlFor={`price-${range.label}`}
                  className="text-sm cursor-pointer"
                >
                  {range.label}
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
}
