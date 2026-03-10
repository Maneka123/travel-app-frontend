import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./Navbar";
import CreateListing from "./CreateListing";
import AllListings from "./AllListings";
import MyListings from "./MyListings";
import SearchListing from "./SearchListing";

const Dashboard = () => {
  const token = localStorage.getItem("token");

  if (!token) {
    // Protect route
    return <Navigate to="/" replace />;
  }

  return (
    <div>
      <Navbar />
      <div style={{ padding: 20 }}>
        <Routes>
          <Route path="create" element={<CreateListing />} />
          <Route path="all" element={<AllListings />} />
          <Route path="my" element={<MyListings />} />
          <Route path="search" element={<SearchListing />} />
          <Route path="/" element={<h2>Welcome to your dashboard!</h2>} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;