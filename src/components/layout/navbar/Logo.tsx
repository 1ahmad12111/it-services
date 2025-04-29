
import React from "react";
import { Link } from "react-router-dom";
import { Sparkles } from "lucide-react";

const Logo = () => {
  return (
    <div className="flex items-center">
      <Link to="/" className="flex items-center gap-2">
        <div className="bg-gradient-to-r from-consulting-500 to-consulting-700 p-1.5 rounded-md">
          <Sparkles size={20} className="text-white" />
        </div>
        <span className="font-heading text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-consulting-700 to-consulting-500">
          TechConsult
        </span>
      </Link>
    </div>
  );
};

export default Logo;
