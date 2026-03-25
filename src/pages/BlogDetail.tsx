
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import LiveChat from "@/components/services/LiveChat";
import SEOMetaTags from "@/components/common/SEOMetaTags";
import { Toaster } from "@/components/ui/toaster";
import { blogPosts } from "@/data/blogPosts";
import { BlogPost } from "@/types/blog";
import { ArrowLeft, Calendar, User, Tag, Clock } from "lucide-react";
import { ContentSection } from "@/types/blog";
import NewsletterSubscribe from "@/components/common/NewsletterSubscribe";
import { Button } from "@/components/ui/button";

const BlogDetail = () => {
  const { postId } = useParams<{ postId: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);
  
  useEffect(() => {
    // Find the current post
    const currentPost = blogPosts.find(p => p.id === postId);
    setPost(currentPost || null);
    
    // Find related posts (same category, excluding current)
    if (currentPost) {
      const related = blogPosts
        .filter(p => p.category === currentPost.category && p.id !== currentPost.id)
        .slice(0, 3);
      setRelatedPosts(related);
    }
    
    // Scroll to top when post changes
    window.scrollTo(0, 0);
  }, [postId]);
  
  if (!post) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Article Not Found</h1>
            <p className="mb-8">The article you're looking for doesn't exist or has been removed.</p>
            <Button asChild>
              <Link to="/blog" className="bg-coral hover:bg-coral/90 text-white">
                Back to Blog
              </Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  const ctaTopic = post.category || post.tags?.[0] || "Your Next Project";
  
  return (
    <div className="min-h-screen flex flex-col">
      <SEOMetaTags
        title={`${post.title} | Mosivant IT Blog`}
        description={post.excerpt}
        keywords={post.tags.join(", ")}
        ogType="article"
      />
      <Navbar />
      <main className="flex-grow">
        {/* Article Hero */}
        <section className="bg-black text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Link to="/blog" className="inline-flex items-center text-lemon hover:text-lemon/80 mb-8">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to all articles
              </Link>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">{post.title}</h1>
              
              <div className="flex flex-wrap items-center text-sm text-gray-300 gap-4 mb-4">
                <div className="flex items-center">
                  <Calendar size={16} className="mr-2" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center">
                  <User size={16} className="mr-2" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center">
                  <Tag size={16} className="mr-2" />
                  <span>{post.category}</span>
                </div>
                <div className="flex items-center">
                  <Clock size={16} className="mr-2" />
                  <span>{post.readTime} min read</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Article Content */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-12">
              {/* Main Content */}
              <div className="lg:w-2/3">
                <div className="prose prose-lg max-w-full">
                  {/* Featured Image */}
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-auto object-cover rounded-lg mb-8 shadow-md"
                  />
                  
                  {/* Article Content */}
                  <div className="space-y-6">
                    <p className="text-xl text-gray-700 font-medium leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    {post.content ? (
                      post.content.map((section: ContentSection, idx: number) => {
                        switch (section.type) {
                          case "heading2":
                            return <h2 key={idx} className="text-2xl font-bold text-gray-800 mt-8 mb-4">{section.text}</h2>;
                          case "heading3":
                            return <h3 key={idx} className="text-xl font-bold text-gray-800 mt-6 mb-3">{section.text}</h3>;
                          case "paragraph":
                            return <p key={idx}>{section.text}</p>;
                          case "list":
                            return (
                              <ul key={idx} className="list-disc pl-6 space-y-2">
                                {section.items?.map((item, i) => <li key={i}>{item}</li>)}
                              </ul>
                            );
                          case "quote":
                            return (
                              <blockquote key={idx} className="border-l-4 border-coral pl-4 italic text-gray-600 my-6">
                                {section.text}
                              </blockquote>
                            );
                          case "callout":
                            return (
                              <div key={idx} className="bg-lemon/10 border border-lemon/30 rounded-xl p-6 my-8">
                                <p className="text-gray-800 font-medium">{section.text}</p>
                              </div>
                            );
                          default:
                            return null;
                        }
                      })
                    ) : (
                      <>
                        <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Content Coming Soon</h2>
                        <p>
                          We are currently finalizing this article and expanding it with practical guidance,
                          examples, and implementation details for {post.category.toLowerCase()} teams.
                        </p>
                        <p>
                          Check back soon for the full write-up, or contact us if you want direct guidance on
                          this topic right now.
                        </p>
                      </>
                    )}
                  </div>
                  
                  {/* Tags */}
                  <div className="mt-12 pt-8 border-t border-gray-200">
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag, index) => (
                        <Link 
                          key={index} 
                          to={`/blog?tag=${tag}`}
                          className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-sm text-gray-800 transition-colors"
                        >
                          {tag}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="bg-coral/10 border border-coral/20 rounded-xl p-8 mt-10">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Need Help With {ctaTopic}?</h3>
                  <p className="text-gray-700 mb-6">
                    Our team specializes in turning ideas into production-ready software.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button asChild className="bg-coral hover:bg-coral/90 text-white">
                      <Link to="/contact">Get a Free Quote</Link>
                    </Button>
                    <Button asChild variant="outline" className="border-coral text-coral hover:bg-coral/5">
                      <Link to="/booking">Book a Call</Link>
                    </Button>
                  </div>
                </div>
              </div>
              
              {/* Sidebar */}
              <div className="lg:w-1/3">
                {/* Author Box */}
                <div className="bg-white p-6 rounded-xl shadow-md mb-8">
                  <h3 className="text-xl font-bold mb-4 text-coral">About the Author</h3>
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-gray-200 mr-4"></div>
                    <div>
                      <p className="font-bold text-gray-800">{post.author}</p>
                      <p className="text-sm text-gray-600">IT Consultant</p>
                    </div>
                  </div>
                  <p className="text-gray-700">
                    An experienced consultant specializing in {post.category} with a passion for helping 
                    businesses leverage technology effectively.
                  </p>
                </div>
                
                {/* Related Articles */}
                <div className="bg-white p-6 rounded-xl shadow-md mb-8">
                  <h3 className="text-xl font-bold mb-4 text-coral">Related Articles</h3>
                  
                  {relatedPosts.length > 0 ? (
                    <div className="space-y-4">
                      {relatedPosts.map((related) => (
                        <Link 
                          key={related.id} 
                          to={`/blog/${related.id}`}
                          className="block group"
                        >
                          <div className="flex items-start">
                            <img 
                              src={related.image} 
                              alt={related.title} 
                              className="w-20 h-16 object-cover rounded mr-3"
                            />
                            <div>
                              <h4 className="font-medium text-gray-800 group-hover:text-coral transition-colors">
                                {related.title}
                              </h4>
                              <p className="text-xs text-gray-500 mt-1">{related.date}</p>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-600">No related articles found.</p>
                  )}
                </div>
                
                {/* Subscribe Box */}
                <div className="bg-black text-white p-6 rounded-xl mb-8">
                  <h3 className="text-xl font-bold mb-4">Subscribe to Our Newsletter</h3>
                  <p className="text-white mb-4">Get the latest insights delivered directly to your inbox.</p>
                  <NewsletterSubscribe darkMode={true} />
                </div>
                
                {/* CTA */}
                <div className="bg-gradient-to-r from-coral to-coral/80 text-white p-6 rounded-xl shadow-md">
                  <h3 className="text-xl font-bold mb-3">Need Expert IT Advice?</h3>
                  <p className="mb-4 text-white">Schedule a free consultation with our experienced IT consultants.</p>
                  <Button className="w-full bg-white text-coral hover:bg-white/90 hover:text-coral/90">
                    <Link to="/booking">Book a Consultation</Link>
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
      <Toaster />
    </div>
  );
};

export default BlogDetail;
