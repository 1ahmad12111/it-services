
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
            `mx-3 py-2 text-base font-medium transition-colors hover:text-coral ${
              isActive ? "text-coral font-semibold" : "text-foreground"
            }`
          }
        >
          {item.label}
        </NavLink>
      ))}
    </div>
  );
};

export default DesktopMenuItems;
