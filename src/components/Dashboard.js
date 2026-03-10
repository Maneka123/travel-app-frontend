// src/components/Dashboard.js
import React from "react";
import { Outlet, NavLink } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>

      {/* Navbar */}
      <nav style={{ marginBottom: "20px" }}>
        <NavLink
          to="create"
          style={({ isActive }) => ({
            marginRight: "10px",
            fontWeight: isActive ? "bold" : "normal",
          })}
        >
          Create Listing
        </NavLink>
        <NavLink
          to="all"
          style={({ isActive }) => ({
            marginRight: "10px",
            fontWeight: isActive ? "bold" : "normal",
          })}
        >
          All Listings
        </NavLink>
        <NavLink
          to="mine"
          style={({ isActive }) => ({
            marginRight: "10px",
            fontWeight: isActive ? "bold" : "normal",
          })}
        >
          My Listings
        </NavLink>
        <NavLink
          to="search"
          style={({ isActive }) => ({
            marginRight: "10px",
            fontWeight: isActive ? "bold" : "normal",
          })}
        >
          Search Listings
        </NavLink>
        <button
          onClick={() => {
            localStorage.removeItem("token");
            window.location.href = "/login";
          }}
          style={{ marginLeft: "20px" }}
        >
          Logout
        </button>
      </nav>

      {/* Render nested routes */}
      <Outlet />
    </div>
  );
};

export default Dashboard;