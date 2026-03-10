import React, { useState } from "react";
import api from "./services/api"; // make sure this points to your Axios instance

function App() {
  const [registerForm, setRegisterForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  // Handle register input changes
  const handleRegisterChange = (e) => {
    setRegisterForm({ ...registerForm, [e.target.name]: e.target.value });
  };

  // Handle login input changes
  const handleLoginChange = (e) => {
    setLoginForm({ ...loginForm, [e.target.name]: e.target.value });
  };

  // Submit register
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/register", registerForm);
      alert(res.data.message);
      setRegisterForm({ name: "", email: "", password: "" });
    } catch (err) {
      console.error(err.response?.data || err.message);
      alert(err.response?.data?.error || "Registration failed");
    }
  };

  // Submit login
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/login", loginForm);
      alert(res.data.message);
      localStorage.setItem("token", res.data.token);
      setLoginForm({ email: "", password: "" });
    } catch (err) {
      console.error(err.response?.data || err.message);
      alert(err.response?.data?.error || "Login failed");
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: "50px auto", fontFamily: "Arial" }}>
      <h1>Travel App</h1>

      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={registerForm.name}
          onChange={handleRegisterChange}
          required
        />
        <br />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={registerForm.email}
          onChange={handleRegisterChange}
          required
        />
        <br />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={registerForm.password}
          onChange={handleRegisterChange}
          required
        />
        <br />
        <button type="submit">Register</button>
      </form>

      <hr />

      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={loginForm.email}
          onChange={handleLoginChange}
          required
        />
        <br />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={loginForm.password}
          onChange={handleLoginChange}
          required
        />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default App;