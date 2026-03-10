import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/"); // go back to home/login
  };

  return (
    <nav style={{ display: "flex", gap: 15, padding: 20, borderBottom: "1px solid #ccc" }}>
      <Link to="create">Create Listing</Link>
      <Link to="all">View All Listings</Link>
      <Link to="my">View My Listings</Link>
      <Link to="search">Search Listing</Link>
      <button onClick={handleLogout} style={{ marginLeft: "auto" }}>Logout</button>
    </nav>
  );
};

export default Navbar;