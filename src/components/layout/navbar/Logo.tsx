
import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className="flex items-center">
      <Link to="/" className="flex items-center gap-3">
        <div className="bg-white/90 p-1 rounded">
          <img src="/lovable-uploads/34880202-0804-4af2-a75d-b60725da0d26.png" alt="MOSIVANT logo" className="h-10 w-auto" />
        </div>
        <div className="flex flex-col">
          <span className="font-heading text-coral font-extrabold text-2xl md:text-3xl tracking-tight leading-none">
            MOSIVANT
          </span>
          <span className="text-[8px] md:text-xs tracking-wider uppercase text-white font-extrabold">
            CONSULTING (OPC) PRIVATE LIMITED
          </span>
        </div>
      </Link>
    </div>
  );
};

export default Logo;
