import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import './Navbar.css'
const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    setIsLoggedIn(false);
    alert("Logged out successfully!");
    navigate("/signin");
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">LearnHub</div>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/courses">Courses</Link>
        <Link to="/progress">Progress</Link>
        <Link to="/about">About</Link>

        {isLoggedIn ? (
          <button onClick={handleLogout} className="logout-button">
            Logout
          </button>
        ) : (
          <Link to="/signin" className="signin-link">
            Sign In
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
