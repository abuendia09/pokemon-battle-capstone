import React from "react";
import { useAuth } from "../context/AuthContext";
import "../App.css";

const Profile = () => {
  const { trainer } = useAuth();

  return (
    <div className="profile-container">
      <div className="profile-content">
        <h2 className="profile-header">Trainer Profile</h2>
        <div>
          <p className="profile-text">Greetings, {trainer.username}! 🌟</p>
          <p className="profile-text">
            We're currently enhancing this section to provide you with a
            seamless experience. Stay tuned for exciting updates!
          </p>
          <p className="profile-text">
            Soon, you'll be able to track your victories, defeats, and more...
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
