
import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className="flex items-center">
      <Link to="/" className="flex items-center">
        <span className="font-heading text-xl font-bold text-consulting-800">
          TechConsult
        </span>
      </Link>
    </div>
  );
};

export default Logo;
