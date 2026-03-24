
import React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { blogPosts } from "@/data/blogPosts";

// Get the latest 3 blog posts
const latestPosts = blogPosts.slice(0, 3);

const InsightsSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Latest Insights</h2>
            <p className="text-xl text-gray-600 max-w-2xl">
              Expert perspectives on technology trends and business innovation
            </p>
          </div>
          <Button 
            variant="outline" 
            className="mt-4 md:mt-0 border-coral text-coral hover:bg-coral/5"
            asChild
          >
            <Link to="/blog">
              View All Articles <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestPosts.map((post, index) => (
            <Card key={index} className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow">
              <div className="h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                />
              </div>
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-coral font-medium">{post.category}</span>
                  <span className="text-xs text-gray-500">{post.date}</span>
                </div>
                <CardTitle className="text-xl">{post.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{post.excerpt.substring(0, 120)}...</CardDescription>
              </CardContent>
              <CardFooter>
                <Button 
                  variant="ghost" 
                  className="p-0 text-coral hover:text-coral/80 hover:bg-transparent"
                  asChild
                >
                  <Link to={`/blog/${post.id}`}>
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-10 text-center bg-white/70 border border-coral/20 rounded-xl p-6 max-w-3xl mx-auto">
          <p className="text-gray-700 mb-4">
            Want to discuss how these insights apply to your business?
          </p>
          <Button asChild variant="outline" className="border-coral text-coral hover:bg-coral/5">
            <Link to="/booking">Talk to an Expert</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;
