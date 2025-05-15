import React from "react";
import { Link } from "react-router-dom";
const Logo = () => {
  return <div className="flex items-center">
      <Link to="/" className="flex items-center gap-2.5">
        <div className="relative">
          <img src="/lovable-uploads/34880202-0804-4af2-a75d-b60725da0d26.png" alt="MOSIVANT logo" className="h-10 w-auto" />
          {/* Add a subtle glow effect with our primary color */}
          <div className="absolute -inset-1 rounded-lg bg-coral opacity-20 blur-sm"></div>
        </div>
        <div className="flex flex-col">
          <span className="font-heading text-coral leading-tight font-extrabold text-4xl">
            MOSIVANT
          </span>
          <span className="leading-none tracking-wider uppercase text-slate-950 text-center font-semibold text-xs">
            CONSULTING (OPC) PRIVATE LIMITED
          </span>
        </div>
      </Link>
    </div>;
};
export default Logo;