// src/components/Dashboard.js
import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <h2>Dashboard</h2>
      {/* Navbar */}
      <nav style={{ marginBottom: "20px" }}>
        <Link to="create" style={{ marginRight: "10px" }}>Create Listing</Link>
        <Link to="all" style={{ marginRight: "10px" }}>View All Listings</Link>
        <Link to="mine" style={{ marginRight: "10px" }}>My Listings</Link>
        <Link to="search" style={{ marginRight: "10px" }}>Search Listing</Link>
        <Link to="/login">Logout</Link>
      </nav>

      {/* Nested routes will render here */}
      <Outlet />
    </div>
  );
};

export default Dashboard;