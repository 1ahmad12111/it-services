
import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className="flex items-center">
      <Link to="/" className="flex items-center gap-3">
        <img src="/lovable-uploads/4347267f-1b7e-4e60-acaa-8e92a9c788c3.png" alt="MOSIVANT logo" className="h-14 w-auto" />
      </Link>
    </div>
  );
};

export default Logo;
