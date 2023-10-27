import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "../App.css";

const Login = () => {
  const { login } = useAuth();
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8080/trainers/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });

      if (!response.ok) {
        throw new Error("Login failed");
      }

      const trainerData = await response.json();
      login(trainerData);
      navigate("/profile");
    } catch (error) {
      console.error("Login failed:", error.message);
    }
  };

  return (
    <div className="background-image forms-container">
      <div className="forms-box">
        <h2>Login</h2>
        <form onSubmit={handleSubmit} className="form">
          <label>Username:</label>
          <input
            type="username"
            name="username"
            value={credentials.username}
            onChange={handleChange}
            required
          />
          <br />
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            required
          />
          <br />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
