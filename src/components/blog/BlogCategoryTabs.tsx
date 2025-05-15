
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
      <TabsList className="bg-white border border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] overflow-x-auto flex w-full h-auto p-1 pb-2 scrollbar-hide">
        <TabsTrigger 
          value="all" 
          className="data-[state=active]:bg-[#ea384c] data-[state=active]:text-white rounded-none px-6 py-2 mx-1"
        >
          All Posts
        </TabsTrigger>
        {categories.map(category => (
          <TabsTrigger 
            key={category} 
            value={category}
            className="data-[state=active]:bg-[#ea384c] data-[state=active]:text-white whitespace-nowrap rounded-none px-6 py-2 mx-1"
          >
            {category}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
};

export default BlogCategoryTabs;
