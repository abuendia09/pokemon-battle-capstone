import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <header>
        <h1>Pokemon Battle Game</h1>
      </header>

      <section className="hero">
        <div className="container">
          <h2>Welcome to the Ultimate Pokemon Battle Experience!</h2>
          <p>
            Choose your Pokemon and engage in epic battles to become the Pokemon
            Master.
          </p>
          <Link to="/register" className="btn btn-success">
            Get Started
          </Link>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <h2>Game Features</h2>
          <div className="feature">
            <h3>Choose Your Pokemon</h3>
            <p>Choose your Pokemon and prepare for battles.</p>
          </div>
          <div className="feature">
            <h3>Battle Other Trainers</h3>
            <p>
              Challenge trainers from around the world and prove your skills in
              intense battles.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
