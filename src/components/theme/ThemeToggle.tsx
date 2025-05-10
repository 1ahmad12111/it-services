
import React from "react";
import { Sun } from "lucide-react";
import { Toggle } from "@/components/ui/toggle";

const ThemeToggle = () => {
  // No longer toggles theme, just a decorative element
  return (
    <Toggle 
      aria-label="Theme"
      className="ml-2 p-2 hover:bg-gray-200 rounded-full"
    >
      <Sun className="h-4 w-4 text-positivus-dark" />
    </Toggle>
  );
};

export default ThemeToggle;
