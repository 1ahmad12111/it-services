
import React, { useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface BlogCategoryTabsProps {
  activeTab: string;
  setActiveTab: (value: string) => void;
  setCurrentPage: (page: number) => void;
  categories: string[];
}

const BlogCategoryTabs = ({ 
  activeTab, 
  setActiveTab, 
  setCurrentPage, 
  categories 
}: BlogCategoryTabsProps) => {
  const [firstRowCategories, setFirstRowCategories] = useState<string[]>([]);
  const [secondRowCategories, setSecondRowCategories] = useState<string[]>([]);

  useEffect(() => {
    // Limit categories to a maximum of 10
    const limitedCategories = categories.slice(0, 10);
    
    // Split limited categories into two roughly equal rows
    const midpoint = Math.ceil(limitedCategories.length / 2);
    setFirstRowCategories(limitedCategories.slice(0, midpoint));
    setSecondRowCategories(limitedCategories.slice(midpoint));
  }, [categories]);

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    setCurrentPage(1);
  };

  return (
    <Tabs value={activeTab} onValueChange={handleTabChange} className="mb-8">
      <div className="flex flex-col gap-2">
        {/* First row with "All Posts" and first half of categories */}
        <TabsList className="bg-white border border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex w-full h-auto p-1">
          <TabsTrigger 
            value="all" 
            className="data-[state=active]:bg-[#ea384c] data-[state=active]:text-white rounded-none px-6 py-2 mx-1"
          >
            All Posts
          </TabsTrigger>
          {firstRowCategories.map(category => (
            <TabsTrigger 
              key={category} 
              value={category}
              className="data-[state=active]:bg-[#ea384c] data-[state=active]:text-white rounded-none px-6 py-2 mx-1"
            >
              {category}
            </TabsTrigger>
          ))}
        </TabsList>
        
        {/* Second row with remaining categories */}
        {secondRowCategories.length > 0 && (
          <TabsList className="bg-white border border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex w-full h-auto p-1">
            {secondRowCategories.map(category => (
              <TabsTrigger 
                key={category} 
                value={category}
                className="data-[state=active]:bg-[#ea384c] data-[state=active]:text-white rounded-none px-6 py-2 mx-1"
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
        )}
      </div>
    </Tabs>
  );
};

export default BlogCategoryTabs;
