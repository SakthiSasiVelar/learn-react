import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <img
        src="https://logolook.net/wp-content/uploads/2023/04/Swiggy-Emblem.png"
        className="logo"
      />
      <div>
        <ul>
          <Link to="/about">
            <li>About</li>
          </Link>
          <li>Offers</li>
          <li>Help</li>
          <li>Sign In</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
