// src/components/Dashboard.js
import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>

      {/* Navbar */}
      <nav style={{ marginBottom: "20px" }}>
        <Link to="create" style={{ marginRight: "10px" }}>Create Listing</Link>
        <Link to="all" style={{ marginRight: "10px" }}>All Listings</Link>
        <Link to="mine" style={{ marginRight: "10px" }}>My Listings</Link>
        <Link to="search" style={{ marginRight: "10px" }}>Search Listing</Link>
      </nav>

      {/* Nested routes render here */}
      <Outlet />
    </div>
  );
};

export default Dashboard;