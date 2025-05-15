
import React from "react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

interface BlogHeroProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const BlogHero = ({ searchQuery, setSearchQuery }: BlogHeroProps) => {
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <section className="bg-black text-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">IT Insights & Expertise</h1>
          <p className="text-xl text-lemon mb-8">
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
};

export default BlogHero;
