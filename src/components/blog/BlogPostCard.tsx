
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Clock, ArrowRight, User } from "lucide-react";
import { BlogPost } from "@/types/blog";

interface BlogPostCardProps {
  post: BlogPost;
}

const BlogPostCard = ({ post }: BlogPostCardProps) => {
  return (
    <article className="bg-white rounded-xl overflow-hidden shadow-md border-0 transition-all hover:shadow-lg">
      <div className="md:flex">
        <div className="md:w-1/3">
          <img 
            src={post.image} 
            alt={post.title} 
            className="h-full w-full object-cover aspect-video md:aspect-auto"
          />
        </div>
        <div className="p-6 md:w-2/3">
          <div className="flex items-center text-sm text-gray-500 mb-3">
            <span className="inline-flex items-center bg-consulting-50 text-consulting-700 px-2.5 py-0.5 rounded-full text-xs font-medium mr-2">
              {post.category}
            </span>
            <div className="flex items-center">
              <Clock size={14} className="mr-1" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center ml-4">
              <User size={14} className="mr-1" />
              <span>{post.author}</span>
            </div>
          </div>
          
          <h2 className="text-xl md:text-2xl font-bold mb-3">
            <Link to={`/blog/${post.id}`} className="text-gray-800 hover:text-consulting-700">
              {post.title}
            </Link>
          </h2>
          
          <p className="text-gray-600 mb-4">
            {post.excerpt}
          </p>
          
          <Button 
            variant="ghost" 
            className="text-consulting-600 hover:text-consulting-800 hover:bg-consulting-50 pl-0 flex items-center"
            asChild
          >
            <Link to={`/blog/${post.id}`}>
              Read More <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </article>
  );
};

export default BlogPostCard;
