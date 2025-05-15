
import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className="flex items-center">
      <Link to="/" className="flex items-center gap-3">
        <img src="/lovable-uploads/6dea7915-cef8-4b0e-90f3-c6597b1fee7f.png" alt="MOSIVANT logo" className="h-14 w-auto" />
      </Link>
    </div>
  );
};

export default Logo;
