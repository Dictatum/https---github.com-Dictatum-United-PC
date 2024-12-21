import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    setIsLoggedIn(true);
    navigate("/home");
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <header className="header">
      <div className="logo">
  <Link to="/home" className="logo-link">
    <span className="logo-text">PC United</span> {/* Add a span for custom styling */}
  </Link>
</div>
      <nav className="nav">
        <Link to="/home" className="nav-link">
          Home
        </Link>
        <Link to="/about" className="nav-link">
          System Builder
        </Link>
        <Link to="/contact" className="nav-link">
          Pre-Build Pro
        </Link>
        <a href="#intel-section" className="nav-link">
          View More
        </a>
      </nav>

      <div className="header-buttons">
        {!isLoggedIn ? (
          <button className="header-btn login" onClick={handleLogin}>
            Log In
          </button>
        ) : (
          <button className="header-btn logout" onClick={handleLogout}>
            Log Out
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
