
import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className="flex items-center">
      <Link to="/" className="flex items-center gap-3">
        <img src="/lovable-uploads/c57e8617-7cd0-4e2f-b2dd-2ddae7f01227.png" alt="MOSIVANT logo" className="h-14 w-auto" />
      </Link>
    </div>
  );
};

export default Logo;
