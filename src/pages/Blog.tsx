
import React, { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Tag, Clock, ArrowRight, User } from "lucide-react";
import { Link } from "react-router-dom";
import LiveChat from "@/components/services/LiveChat";

// Sample blog data
const blogPosts = [
  {
    id: "why-professional-website",
    title: "Why Your Business Needs Professional Website Development",
    excerpt: "In today's digital landscape, a professionally developed website is crucial for business success. Learn why investing in professional web development pays off.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHdlYnNpdGUlMjBkZXZlbG9wbWVudHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    author: "Alex Johnson",
    date: "April 15, 2023",
    category: "Web Development",
    tags: ["website", "development", "business growth"]
  },
  {
    id: "it-strategy-digital-transformation",
    title: "The Importance of IT Strategy in Digital Transformation",
    excerpt: "Digital transformation requires a solid IT strategy. Discover how strategic IT planning can guide your organization through successful digital transformation.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZGlnaXRhbCUyMHRyYW5zZm9ybWF0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    author: "Maria Garcia",
    date: "March 22, 2023",
    category: "IT Strategy",
    tags: ["digital transformation", "IT strategy", "business innovation"]
  },
  {
    id: "cloud-computing-benefits",
    title: "5 Ways Cloud Computing Can Benefit Your Business",
    excerpt: "Cloud computing offers numerous advantages for businesses of all sizes. Explore five key benefits that could transform your operations and drive growth.",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xvdWQlMjBjb21wdXRpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    author: "David Park",
    date: "February 8, 2023",
    category: "Cloud Services",
    tags: ["cloud computing", "business efficiency", "scalability"]
  },
  {
    id: "cybersecurity-essentials",
    title: "Cybersecurity Essentials Every Business Should Implement",
    excerpt: "With cyber threats on the rise, businesses must prioritize security. Learn about essential cybersecurity measures to protect your organization's data and assets.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y3liZXJzZWN1cml0eXxlbnwwfHwwfHx8MA%3D&auto=format&fit=crop&w=800&q=60",
    author: "Sarah Williams",
    date: "January 17, 2023",
    category: "Cybersecurity",
    tags: ["cybersecurity", "data protection", "risk management"]
  },
  {
    id: "custom-software-vs-off-shelf",
    title: "Custom Software vs. Off-the-Shelf Solutions: Making the Right Choice",
    excerpt: "Deciding between custom software and pre-built solutions? This comparison will help you determine which approach best suits your business requirements.",
    image: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c29mdHdhcmUlMjBkZXZlbG9wbWVudHxlbnwwfHwwfHx8MA%3D&auto=format&fit=crop&w=800&q=60",
    author: "Michael Chen",
    date: "December 5, 2022",
    category: "Software Development",
    tags: ["custom software", "software solutions", "business software"]
  }
];

const popularTags = [
  "digital transformation",
  "cybersecurity",
  "cloud computing",
  "web development",
  "IT strategy",
  "software development",
  "business technology",
  "IT consulting"
];

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("all");
  
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = activeTab === "all" || post.category.toLowerCase() === activeTab.toLowerCase();
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Blog Hero Section */}
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
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for articles..."
                  className="pl-10 py-6 bg-white/10 border-white/20 text-white placeholder:text-gray-300 w-full"
                />
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300" size={20} />
              </div>
            </div>
          </div>
        </section>

        {/* Blog Content */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Main Content */}
              <div className="lg:w-2/3">
                {/* Category Tabs */}
                <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-8">
                  <TabsList className="bg-white border shadow-sm">
                    <TabsTrigger value="all" className="data-[state=active]:bg-consulting-50 data-[state=active]:text-consulting-700">
                      All Posts
                    </TabsTrigger>
                    <TabsTrigger value="Web Development" className="data-[state=active]:bg-consulting-50 data-[state=active]:text-consulting-700">
                      Web Dev
                    </TabsTrigger>
                    <TabsTrigger value="IT Strategy" className="data-[state=active]:bg-consulting-50 data-[state=active]:text-consulting-700">
                      IT Strategy
                    </TabsTrigger>
                    <TabsTrigger value="Cloud Services" className="data-[state=active]:bg-consulting-50 data-[state=active]:text-consulting-700">
                      Cloud
                    </TabsTrigger>
                    <TabsTrigger value="Cybersecurity" className="data-[state=active]:bg-consulting-50 data-[state=active]:text-consulting-700">
                      Security
                    </TabsTrigger>
                  </TabsList>
                </Tabs>
                
                {/* Blog Posts */}
                <div className="grid gap-8">
                  {filteredPosts.length > 0 ? (
                    filteredPosts.map((post) => (
                      <article key={post.id} className="bg-white rounded-xl overflow-hidden shadow-md border-0 transition-all hover:shadow-lg">
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
              </div>
              
              {/* Sidebar */}
              <div className="lg:w-1/3">
                {/* Subscribe Card */}
                <div className="bg-consulting-800 text-white p-6 rounded-xl mb-8">
                  <h3 className="text-xl font-bold mb-4">Subscribe to Our Newsletter</h3>
                  <p className="text-consulting-100 mb-4">Get the latest insights delivered directly to your inbox.</p>
                  <div className="space-y-4">
                    <Input placeholder="Your email address" className="bg-white/10 border-white/20 text-white placeholder:text-gray-300" />
                    <Button className="w-full bg-white text-consulting-800 hover:bg-gray-100">
                      Subscribe
                    </Button>
                  </div>
                </div>
                
                {/* Popular Tags */}
                <div className="bg-white p-6 rounded-xl shadow-md mb-8">
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <Tag className="mr-2" size={18} />
                    Popular Tags
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {popularTags.map((tag, index) => (
                      <div 
                        key={index} 
                        className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-sm cursor-pointer transition-colors"
                        onClick={() => setSearchQuery(tag)}
                      >
                        {tag}
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Call to Action */}
                <div className="bg-gradient-to-r from-consulting-600 to-consulting-700 text-white p-6 rounded-xl shadow-md">
                  <h3 className="text-xl font-bold mb-3">Need Expert IT Advice?</h3>
                  <p className="mb-4">Schedule a free consultation with our experienced IT consultants.</p>
                  <Button className="w-full bg-white text-consulting-800 hover:bg-gray-100">
                    <Link to="/services">Book a Consultation</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Live chat component */}
        <LiveChat />
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
