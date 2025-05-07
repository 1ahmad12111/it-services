
import React from "react";
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
  const handleTabChange = (value: string) => {
    setActiveTab(value);
    setCurrentPage(1);
  };

  return (
    <Tabs value={activeTab} onValueChange={handleTabChange} className="mb-8">
      <TabsList className="bg-white border shadow-sm overflow-auto flex w-full h-auto p-1">
        <TabsTrigger 
          value="all" 
          className="data-[state=active]:bg-consulting-50 data-[state=active]:text-consulting-700"
        >
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
  );
};

export default BlogCategoryTabs;
