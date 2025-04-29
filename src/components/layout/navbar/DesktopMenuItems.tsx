
import React from "react";
import { Link } from "react-router-dom";

const DesktopMenuItems = () => {
  return (
    <div className="flex space-x-6">
      <Link to="/" className="text-gray-700 hover:text-consulting-600 font-medium">Home</Link>
      <Link to="/services" className="text-gray-700 hover:text-consulting-600 font-medium">Services</Link>
      <Link to="/blog" className="text-gray-700 hover:text-consulting-600 font-medium">Blog</Link>
      <Link to="/about" className="text-gray-700 hover:text-consulting-600 font-medium">About</Link>
      <Link to="/contact" className="text-gray-700 hover:text-consulting-600 font-medium">Contact</Link>
    </div>
  );
};

export default DesktopMenuItems;
