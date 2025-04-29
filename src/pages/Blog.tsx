
import React, { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Tag, Clock, ArrowRight, User } from "lucide-react";
import { Link } from "react-router-dom";
import LiveChat from "@/components/services/LiveChat";
import SEOMetaTags from "@/components/common/SEOMetaTags";
import { blogPosts } from "@/data/blogPosts";
import { 
  Pagination, 
  PaginationContent, 
  PaginationEllipsis, 
  PaginationItem, 
  PaginationLink, 
  PaginationNext, 
  PaginationPrevious 
} from "@/components/ui/pagination";

// Get unique categories from blog posts
const categories = Array.from(new Set(blogPosts.map(post => post.category)));

// Popular tags extraction
const allTags = blogPosts.flatMap(post => post.tags);
const tagCount = allTags.reduce((acc: {[key: string]: number}, tag) => {
  acc[tag] = (acc[tag] || 0) + 1;
  return acc;
}, {});

const popularTags = Object.keys(tagCount)
  .sort((a, b) => tagCount[b] - tagCount[a])
  .slice(0, 12);

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 5;
  
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = activeTab === "all" || post.category.toLowerCase() === activeTab.toLowerCase();
    
    return matchesSearch && matchesCategory;
  });

  // Pagination logic
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    // Scroll to top when changing pages
    window.scrollTo({ top: 400, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SEOMetaTags
        title="IT Insights & Expertise Blog"
        description="Stay informed with the latest technology trends, best practices, and industry insights from our expert consultants."
        keywords="IT consulting, technology trends, digital transformation, cybersecurity, cloud computing"
        ogType="website"
      />
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
                <Tabs value={activeTab} onValueChange={(value) => {
                  setActiveTab(value);
                  setCurrentPage(1);
                }} className="mb-8">
                  <TabsList className="bg-white border shadow-sm overflow-auto flex w-full h-auto p-1">
                    <TabsTrigger value="all" className="data-[state=active]:bg-consulting-50 data-[state=active]:text-consulting-700">
                      All Posts
                    </TabsTrigger>
                    {categories.map(category => (
                      <TabsTrigger 
                        key={category} 
                        value={category}
                        className="data-[state=active]:bg-consulting-50 data-[state=active]:text-consulting-700 whitespace-nowrap"
                      >
                        {category}
                      </TabsTrigger>
                    ))}
                  </TabsList>
                </Tabs>
                
                {/* Blog Posts */}
                <div className="grid gap-8">
                  {currentPosts.length > 0 ? (
                    currentPosts.map((post) => (
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
                
                {/* Pagination */}
                {filteredPosts.length > postsPerPage && (
                  <Pagination className="mt-8">
                    <PaginationContent>
                      <PaginationItem>
                        <PaginationPrevious 
                          onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
                          className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
                        />
                      </PaginationItem>
                      
                      {Array.from({ length: Math.min(5, totalPages) }).map((_, index) => {
                        let pageNumber;
                        
                        // Logic to show correct page numbers based on current page
                        if (totalPages <= 5) {
                          pageNumber = index + 1;
                        } else if (currentPage <= 3) {
                          pageNumber = index + 1;
                        } else if (currentPage >= totalPages - 2) {
                          pageNumber = totalPages - 4 + index;
                        } else {
                          pageNumber = currentPage - 2 + index;
                        }
                        
                        return (
                          <PaginationItem key={index}>
                            <PaginationLink 
                              onClick={() => handlePageChange(pageNumber)}
                              isActive={pageNumber === currentPage}
                            >
                              {pageNumber}
                            </PaginationLink>
                          </PaginationItem>
                        );
                      })}
                      
                      {totalPages > 5 && currentPage < totalPages - 2 && (
                        <>
                          <PaginationItem>
                            <PaginationEllipsis />
                          </PaginationItem>
                          <PaginationItem>
                            <PaginationLink onClick={() => handlePageChange(totalPages)}>
                              {totalPages}
                            </PaginationLink>
                          </PaginationItem>
                        </>
                      )}
                      
                      <PaginationItem>
                        <PaginationNext 
                          onClick={() => currentPage < totalPages && handlePageChange(currentPage + 1)}
                          className={currentPage === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"}
                        />
                      </PaginationItem>
                    </PaginationContent>
                  </Pagination>
                )}
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
                    <Link to="/contact">Book a Consultation</Link>
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
