import React from "react";
import { Link } from "react-router-dom";

const NavbarBrand: React.FC = () => {
  return (
    <Link className="navbar-brand" to="/">
      <img
        src="https://www.docsend.com/wp-content/uploads/2022/01/logo-docsend-1.svg"
        alt=""
        height={18}
      />
    </Link>
  );
};

export default NavbarBrand;
