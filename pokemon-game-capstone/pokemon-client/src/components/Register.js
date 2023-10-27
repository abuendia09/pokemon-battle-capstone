import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [trainer, setTrainer] = useState({
    username: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setTrainer({ ...trainer, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8080/trainers/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(trainer),
      });

      if (!response.ok) {
        throw new Error("Registration failed");
      }
      console.log("Trainer registered successfully");
      navigate("/login");
    } catch (error) {
      console.error("Registration failed:", error.message);
    }
  };

  return (
    <div className="background-image forms-container">
      <div className="forms-box">
        <h2>Trainer Registration</h2>
        <form onSubmit={handleSubmit} className="form">
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={trainer.username}
            onChange={handleChange}
            required
          />
          <br />
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={trainer.email}
            onChange={handleChange}
            required
          />
          <br />
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={trainer.password}
            onChange={handleChange}
            required
          />
          <br />
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
