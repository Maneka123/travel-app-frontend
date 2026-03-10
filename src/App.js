import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegisterForm from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div style={{ maxWidth: 400, margin: "50px auto" }}>
              <h1>Travel App</h1>
              <RegisterForm />
              <hr />
              <LoginForm />
            </div>
          }
        />
        <Route path="/dashboard/*" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;