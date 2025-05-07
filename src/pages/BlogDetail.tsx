import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import LiveChat from "@/components/services/LiveChat";
import SEOMetaTags from "@/components/common/SEOMetaTags";
import { blogPosts } from "@/data/blogPosts";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, User, Tag, Share2, Facebook, Linkedin, Twitter } from "lucide-react";
import { 
  Table, 
  TableBody, 
  TableCaption,
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import NewsletterSubscribe from "@/components/common/NewsletterSubscribe";
import { Toaster } from "@/components/ui/toaster";

const BlogDetail = () => {
  const { postId } = useParams<{ postId: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState(blogPosts.find(p => p.id === postId));
  const [relatedPosts, setRelatedPosts] = useState<typeof blogPosts>([]);
  
  useEffect(() => {
    // If post doesn't exist, redirect to blog page
    if (!post) {
      navigate("/blog");
      return;
    }
    
    // Find related posts based on category and tags
    const related = blogPosts
      .filter(p => 
        p.id !== postId && 
        (p.category === post.category || 
         p.tags.some(tag => post.tags.includes(tag)))
      )
      .slice(0, 3);
    
    setRelatedPosts(related);
  }, [postId, post, navigate]);

  if (!post) return null;

  return (
    <div className="min-h-screen flex flex-col">
      <SEOMetaTags
        title={post.title}
        description={post.excerpt}
        keywords={post.tags.join(', ')}
        ogType="article"
        ogImage={post.image}
      />
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-consulting-900 to-consulting-800 py-20 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Link 
                to="/blog" 
                className="inline-flex items-center text-consulting-100 hover:text-white mb-6"
              >
                <ArrowLeft size={16} className="mr-2" />
                Back to all articles
              </Link>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                {post.title}
              </h1>
              
              <div className="flex flex-wrap items-center text-consulting-100 mt-6 mb-4 gap-4">
                <div className="flex items-center">
                  <User size={16} className="mr-2" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center">
                  <Calendar size={16} className="mr-2" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center">
                  <Tag size={16} className="mr-2" />
                  <span>{post.category}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Main Content */}
            <div className="lg:w-2/3">
              {/* Featured Image */}
              <div className="rounded-lg overflow-hidden mb-8">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-auto"
                />
              </div>
              
              {/* Article Content */}
              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-gray-700 mb-6">
                  {post.excerpt}
                </p>
                
                <h2>Introduction</h2>
                <p>
                  In today's rapidly evolving technological landscape, businesses must stay informed about the latest developments and best practices. This article explores key considerations, challenges, and opportunities related to {post.title.toLowerCase()}.
                </p>
                
                <h2>Key Considerations</h2>
                <p>
                  When approaching {post.category.toLowerCase()}, organizations should consider several important factors that can significantly impact success. Strategic planning, proper resource allocation, and stakeholder alignment are crucial elements.
                </p>
                
                <p>
                  Additionally, consideration must be given to existing systems, processes, and organizational culture. Successful implementation requires a holistic approach that addresses technical, operational, and human factors.
                </p>
                
                <h2>Common Challenges</h2>
                <p>
                  Organizations frequently encounter obstacles when implementing new technologies or approaches. These challenges can include:
                </p>
                
                <ul>
                  <li>Resource constraints and competing priorities</li>
                  <li>Technical integration with existing systems</li>
                  <li>Change management and user adoption</li>
                  <li>Security and compliance considerations</li>
                  <li>Measuring and demonstrating return on investment</li>
                </ul>
                
                <h2>Industry Best Practices</h2>
                <p>
                  Based on extensive experience working with clients across industries, we've identified several best practices that can increase the likelihood of success:
                </p>
                
                <Table>
                  <TableCaption>Best practices for successful implementation</TableCaption>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Practice</TableHead>
                      <TableHead>Description</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">Clear Objectives</TableCell>
                      <TableCell>Define specific, measurable goals aligned with business strategy</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Stakeholder Engagement</TableCell>
                      <TableCell>Involve key stakeholders throughout the process</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Incremental Approach</TableCell>
                      <TableCell>Implement changes in manageable phases with defined milestones</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Continuous Evaluation</TableCell>
                      <TableCell>Regularly assess progress and make adjustments as needed</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
                
                <h2>Future Trends</h2>
                <p>
                  Looking ahead, we anticipate several emerging trends that will shape the future of {post.category}:
                </p>
                <p>
                  Organizations that stay informed about these developments and proactively adapt their strategies will be better positioned to leverage new opportunities and maintain competitive advantage.
                </p>
                
                <h2>Conclusion</h2>
                <p>
                  In conclusion, {post.title.toLowerCase()} represents both significant opportunities and challenges for modern businesses. By adopting a strategic approach, following industry best practices, and partnering with experienced consultants, organizations can navigate complexity and achieve meaningful results.
                </p>
                
                <p>
                  If you're interested in learning more about how our team can assist with your specific needs, please don't hesitate to <Link to="/contact" className="text-consulting-600 hover:text-consulting-800">contact us</Link> for a consultation.
                </p>
              </div>
              
              {/* Tags */}
              <div className="mt-8 pt-6 border-t">
                <h3 className="text-lg font-semibold mb-3">Tags:</h3>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, index) => (
                    <Link 
                      key={index}
                      to={`/blog?tag=${tag}`}
                      className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </Link>
                  ))}
                </div>
              </div>
              
              {/* Share */}
              <div className="mt-8 pt-6 border-t">
                <h3 className="text-lg font-semibold mb-3 flex items-center">
                  <Share2 size={18} className="mr-2" /> Share this article:
                </h3>
                <div className="flex gap-3">
                  <Button variant="outline" size="icon" className="rounded-full">
                    <Facebook size={18} />
                    <span className="sr-only">Share on Facebook</span>
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full">
                    <Twitter size={18} />
                    <span className="sr-only">Share on Twitter</span>
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full">
                    <Linkedin size={18} />
                    <span className="sr-only">Share on LinkedIn</span>
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="lg:w-1/3">
              {/* Author Box */}
              <div className="bg-white rounded-xl p-6 shadow-md mb-8">
                <h3 className="text-xl font-bold mb-4">About the Author</h3>
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 mr-4">
                    <User size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">{post.author}</h4>
                    <p className="text-gray-600">IT Consultant</p>
                  </div>
                </div>
                <p className="text-gray-700">
                  An experienced consultant specializing in {post.category} with a passion for helping businesses leverage technology effectively.
                </p>
              </div>
              
              {/* Related Articles */}
              <div className="bg-white rounded-xl p-6 shadow-md mb-8">
                <h3 className="text-xl font-bold mb-4">Related Articles</h3>
                {relatedPosts.length > 0 ? (
                  <div className="space-y-4">
                    {relatedPosts.map((relatedPost, index) => (
                      <div key={index} className="border-b pb-4 last:border-0">
                        <Link 
                          to={`/blog/${relatedPost.id}`}
                          className="font-medium hover:text-consulting-600 block mb-2"
                        >
                          {relatedPost.title}
                        </Link>
                        <div className="text-sm text-gray-500 flex items-center">
                          <Calendar size={14} className="mr-1" />
                          <span>{relatedPost.date}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-600">No related articles found.</p>
                )}
              </div>
              
              {/* Newsletter Box */}
              <div className="bg-consulting-800 text-white p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3">Stay Updated</h3>
                <p className="mb-4">Subscribe to our newsletter for the latest insights and industry news.</p>
                <NewsletterSubscribe darkMode={true} />
              </div>
            </div>
          </div>
        </div>
        
        <LiveChat />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
};

export default BlogDetail;
