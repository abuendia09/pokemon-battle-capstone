import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

//components
import Login from "./components/Login";
import Register from "./components/Register";
import Profile from "./components/Profile";
import Navbar from "./components/Navbar";
import PokemonList from "./components/PokemonList";
import LandingPage from "./components/LandingPage";
import Footer from "./components/Footer";
import Battle from "./components/Battle";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" exact element={<LandingPage />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/pokemon" element={<PokemonList />} />
            <Route path="/battle/:id" element={<Battle />} />
          </Routes>
        </div>
      </Router>
      <Footer />
    </AuthProvider>
  );
};

export default App;
