
import React from "react";
import { NavLink } from "react-router-dom";
import { navItems } from "./NavbarData";

const DesktopMenuItems = () => {
  return (
    <div className="flex items-center">
      {navItems.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          className={({ isActive }) =>
            `mx-4 py-2 text-base font-medium transition-colors ${
              isActive ? "text-coral font-semibold" : "text-white hover:text-coral/80"
            }`
          }
          end
        >
          {item.label}
        </NavLink>
      ))}
    </div>
  );
};

export default DesktopMenuItems;
