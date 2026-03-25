
import { useState, useMemo, useEffect } from "react";
import { blogPosts } from "@/data/blogPosts";
import { BlogPost } from "@/types/blog";

export const useBlogFilters = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 5;
  
  // Get unique categories from blog posts (limited to 10)
  const categories = useMemo(() => {
    const allCategories = Array.from(new Set(blogPosts.map(post => post.category)));
    return allCategories.slice(0, 10);
  }, []);

  // Popular tags extraction
  const popularTags = useMemo(() => {
    const allTags = blogPosts.flatMap(post => post.tags);
    const tagCount = allTags.reduce((acc: {[key: string]: number}, tag) => {
      acc[tag] = (acc[tag] || 0) + 1;
      return acc;
    }, {});
    
    return Object.keys(tagCount)
      .sort((a, b) => tagCount[b] - tagCount[a])
      .slice(0, 12);
  }, []);
  
  // Reset to first page when search query or active tab changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, activeTab]);

  // Filter posts based on search query and active category
  const filteredPosts = useMemo(() => {
    return blogPosts.filter(post => {
      const matchesSearch = searchQuery.trim() === "" || 
                          post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())) ||
                          post.category.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = activeTab === "all" || post.category.toLowerCase() === activeTab.toLowerCase();
      
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeTab]);

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

  return {
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
  };
};
