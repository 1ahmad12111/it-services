
import React, { memo, useCallback } from "react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

interface BlogHeroProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

// Memoize the component to prevent unnecessary re-renders
const BlogHero = memo(({ searchQuery, setSearchQuery }: BlogHeroProps) => {
  // Optimize search input handling with debounce
  const handleSearchChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  }, [setSearchQuery]);

  return (
    <section className="bg-gradient-to-r from-consulting-900 to-consulting-800 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">IT Insights & Expertise</h1>
          <p className="text-xl text-consulting-100 mb-8">
            Stay informed with the latest technology trends, best practices, and industry insights
          </p>
          
          <div className="relative max-w-xl mx-auto">
            <Input
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search for articles..."
              className="pl-10 py-6 bg-white/10 border-white/20 text-white placeholder:text-gray-300 w-full"
              aria-label="Search for articles"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300" size={20} aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  );
});

// Add display name for better debugging
BlogHero.displayName = "BlogHero";

export default BlogHero;
