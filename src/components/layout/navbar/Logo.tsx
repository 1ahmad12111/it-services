
import React from "react";
import { Link } from "react-router-dom";
import { Sparkles } from "lucide-react";

const Logo = () => {
  return (
    <div className="flex items-center">
      <Link to="/" className="flex items-center gap-2.5">
        <div className="relative">
          <div className="bg-gradient-to-br from-consulting-600 to-consulting-800 p-2 rounded-lg shadow-lg">
            <Sparkles size={22} className="text-white" />
          </div>
          {/* Add a glowing effect */}
          <div className="absolute -inset-1 rounded-lg bg-consulting-400 opacity-30 blur-sm animate-pulse-slow"></div>
        </div>
        <div className="flex flex-col">
          <span className="font-heading text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-consulting-800 to-consulting-500 leading-tight">
            TechConsult
          </span>
          <span className="text-[10px] font-medium text-gray-500 leading-none tracking-wider uppercase">
            IT Solutions
          </span>
        </div>
      </Link>
    </div>
  );
};

export default Logo;
