
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import LiveChat from "@/components/services/LiveChat";
import SEOMetaTags from "@/components/common/SEOMetaTags";
import { Toaster } from "@/components/ui/toaster";
import BlogHero from "@/components/blog/BlogHero";
import BlogCategoryTabs from "@/components/blog/BlogCategoryTabs";
import BlogPostList from "@/components/blog/BlogPostList";
import BlogPagination from "@/components/blog/BlogPagination";
import BlogSidebar from "@/components/blog/BlogSidebar";
import { useBlogFilters } from "@/hooks/useBlogFilters";

const Blog = () => {
  const {
    searchQuery,
    setSearchQuery,
    activeTab,
    setActiveTab,
    currentPage,
    setCurrentPage,
    categories,
    popularTags,
    filteredPosts,
    currentPosts,
    totalPages,
    handlePageChange
  } = useBlogFilters();
  
  return (
    <div className="min-h-screen flex flex-col">
      <SEOMetaTags
        title="Blog — Web Development Insights for Business Owners | Mosivant"
        description="Practical guides on custom dashboards, web app development, and scaling your business with technology."
        keywords="Mosivant blog, web development guides, React dashboard insights, business technology growth"
        ogType="website"
        canonicalUrl="https://www.gomosivant.com/blog"
      />
      <Navbar />
      <main className="flex-grow">
        {/* Blog Hero Section */}
        <BlogHero 
          searchQuery={searchQuery} 
          setSearchQuery={setSearchQuery} 
        />

        {/* Blog Content */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Main Content */}
              <div className="lg:w-2/3">
                {/* Category Tabs */}
                <div className="mb-8">
                  <BlogCategoryTabs 
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                    setCurrentPage={setCurrentPage}
                    categories={categories}
                  />
                </div>
                
                {/* Blog Posts */}
                <BlogPostList 
                  currentPosts={currentPosts}
                  searchQuery={searchQuery}
                  setSearchQuery={setSearchQuery}
                  setActiveTab={setActiveTab}
                />
                
                {/* Pagination */}
                {totalPages > 1 && (
                  <BlogPagination 
                    currentPage={currentPage}
                    totalPages={totalPages}
                    handlePageChange={handlePageChange}
                  />
                )}
              </div>
              
              {/* Sidebar */}
              <BlogSidebar 
                popularTags={popularTags}
                setSearchQuery={setSearchQuery}
              />
            </div>
          </div>
        </section>
        
        {/* Live chat component */}
        <LiveChat />
      </main>
      <div className="fixed inset-x-0 bottom-0 z-40 px-4 pb-4">
        <div className="mx-auto max-w-4xl rounded-xl border border-coral/30 bg-slate-900/95 backdrop-blur supports-[backdrop-filter]:bg-slate-900/80 shadow-xl">
          <a
            href="/#lead-magnet"
            className="block px-5 py-4 text-center text-white font-semibold hover:text-lemon transition-colors"
          >
            Get our free dashboard audit checklist →
          </a>
        </div>
      </div>
      <Footer />
      <Toaster />
    </div>
  );
};

export default Blog;
