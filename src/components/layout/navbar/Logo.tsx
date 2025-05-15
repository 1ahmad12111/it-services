
import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className="flex items-center">
      <Link to="/" className="flex items-center gap-3">
        <img src="/lovable-uploads/3068e93f-dc9c-4c22-b5d3-fd587fcceb71.png" alt="MOSIVANT logo" className="h-14 w-auto" />
      </Link>
    </div>
  );
};

export default Logo;
