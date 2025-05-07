
import React from "react";
import { Button } from "@/components/ui/button";
import BlogPostCard from "./BlogPostCard";
import { BlogPost } from "@/types/blog";

interface BlogPostListProps {
  currentPosts: BlogPost[];
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  setActiveTab: (tab: string) => void;
}

const BlogPostList = ({ 
  currentPosts, 
  searchQuery, 
  setSearchQuery, 
  setActiveTab 
}: BlogPostListProps) => {
  return (
    <div className="grid gap-8">
      {currentPosts.length > 0 ? (
        currentPosts.map((post) => (
          <BlogPostCard key={post.id} post={post} />
        ))
      ) : (
        <div className="text-center py-10">
          <p className="text-gray-500 text-lg">No articles found matching your search criteria.</p>
          <Button 
            variant="outline" 
            className="mt-4"
            onClick={() => {
              setSearchQuery("");
              setActiveTab("all");
            }}
          >
            Reset Filters
          </Button>
        </div>
      )}
    </div>
  );
};

export default BlogPostList;
