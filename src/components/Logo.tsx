import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link style={{ marginRight: "1rem" }} to="/">
      <img
        src="https://www.docsend.com/wp-content/uploads/2022/01/logo-docsend-1.svg"
        alt=""
        height={18}
      />
    </Link>
  );
};

export default Logo;
