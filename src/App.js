import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import RegisterForm from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";
import Dashboard from "./components/Dashboard";
import CreateListing from "./components/CreateListing";
import AllListings from "./components/AllListings";
import MyListings from "./components/MyListings";
import SearchListing from "./components/searchListing";

function App() {
  return (
    <Router>
      <Routes>
        {/* Home redirect to login */}
        <Route path="/" element={<Navigate to="/login" />} />

        {/* Auth pages */}
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/login" element={<LoginForm />} />

        {/* Dashboard with nested routes */}
        <Route path="/dashboard/*" element={<Dashboard />}>
          <Route path="create" element={<CreateListing />} />
          <Route path="all" element={<AllListings />} />
          <Route path="mine" element={<MyListings />} />
          <Route path="search" element={<SearchListing />} />
        </Route>

        {/* Catch-all redirect */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;