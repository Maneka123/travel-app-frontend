import React from "react";
import RegisterForm from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";

function App() {
  return (
    <div style={{ maxWidth: 400, margin: "50px auto", fontFamily: "Arial" }}>
      <h1>Travel App</h1>
      <RegisterForm />
      <hr />
      <LoginForm />
    </div>
  );
}

export default App;