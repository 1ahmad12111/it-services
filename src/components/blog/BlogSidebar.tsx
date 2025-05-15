
import React from "react";
import { Button } from "@/components/ui/button";
import { Tag } from "lucide-react";
import { Link } from "react-router-dom";
import NewsletterSubscribe from "@/components/common/NewsletterSubscribe";

interface BlogSidebarProps {
  popularTags: string[];
  setSearchQuery: (query: string) => void;
}

const BlogSidebar = ({ popularTags, setSearchQuery }: BlogSidebarProps) => {
  return (
    <div className="lg:w-1/3">
      {/* Subscribe Card */}
      <div className="bg-black text-white p-6 rounded-xl mb-8">
        <h3 className="text-xl font-bold mb-4">Subscribe to Our Newsletter</h3>
        <p className="text-white mb-4">Get the latest insights delivered directly to your inbox.</p>
        <NewsletterSubscribe darkMode={true} />
      </div>
      
      {/* Popular Tags */}
      <div className="bg-white p-6 rounded-xl shadow-md mb-8">
        <h3 className="text-xl font-bold mb-4 flex items-center text-coral">
          <Tag className="mr-2" size={18} />
          Popular Tags
        </h3>
        <div className="flex flex-wrap gap-2">
          {popularTags.map((tag, index) => (
            <div 
              key={index} 
              className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-sm cursor-pointer transition-colors text-gray-800"
              onClick={() => setSearchQuery(tag)}
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
      
      {/* Call to Action */}
      <div className="bg-gradient-to-r from-coral to-coral/80 text-white p-6 rounded-xl shadow-md">
        <h3 className="text-xl font-bold mb-3">Need Expert IT Advice?</h3>
        <p className="mb-4 text-white">Schedule a free consultation with our experienced IT consultants.</p>
        <Button className="w-full bg-[#ea384c] text-white hover:bg-[#d73246] rounded-none">
          <Link to="/booking">Book a Consultation</Link>
        </Button>
      </div>
    </div>
  );
};

export default BlogSidebar;
