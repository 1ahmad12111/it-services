
import React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const insights = [
  {
    title: "Digital Innovation in the Post-Pandemic Era",
    category: "Digital Transformation",
    date: "April 21, 2025",
    description: "Discover how businesses are accelerating their digital transformation journey after the global pandemic.",
    image: "https://via.placeholder.com/600x340?text=Digital+Innovation"
  },
  {
    title: "The Future of Cloud-Native Applications",
    category: "Cloud Technology",
    date: "April 18, 2025",
    description: "Explore how cloud-native architectures are reshaping enterprise software development.",
    image: "https://via.placeholder.com/600x340?text=Cloud+Native"
  },
  {
    title: "Cybersecurity Challenges for Remote Workforces",
    category: "Security",
    date: "April 15, 2025",
    description: "Learn about the emerging security threats facing organizations with distributed teams.",
    image: "https://via.placeholder.com/600x340?text=Cybersecurity"
  }
];

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
          <Button variant="outline" className="mt-4 md:mt-0 border-consulting-600 text-consulting-600 hover:bg-consulting-50">
            View All Articles <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {insights.map((insight, index) => (
            <Card key={index} className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow">
              <div className="h-48 overflow-hidden">
                <img 
                  src={insight.image} 
                  alt={insight.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                />
              </div>
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-consulting-600 font-medium">{insight.category}</span>
                  <span className="text-xs text-gray-500">{insight.date}</span>
                </div>
                <CardTitle className="text-xl">{insight.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{insight.description}</CardDescription>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="p-0 text-consulting-600 hover:text-consulting-800 hover:bg-transparent">
                  Read More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;
