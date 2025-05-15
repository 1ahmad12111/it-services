
import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className="flex items-center">
      <Link to="/" className="flex items-center gap-3">
        <img src="/lovable-uploads/9b98a8a8-3091-4a3c-95ad-08032283f696.png" alt="MOSIVANT logo" className="h-14 w-auto" />
      </Link>
    </div>
  );
};

export default Logo;
