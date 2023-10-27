import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import PokeBall from "../assets/pokeball.svg";
import "../App.css";

const Navbar = () => {
  const { trainer, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
      <Link to="/" className="navbar-brand">
        <img src={PokeBall} alt="Poke Ball" className="poke-ball" />
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          {trainer ? (
            <>
              <li className="nav-item">
                <Link to="/profile" className="nav-link">
                  Profile
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/pokemon" className="nav-link">
                  Pokemons
                </Link>
              </li>
              <li className="nav-item">
                <button
                  onClick={handleLogout}
                  className="btn btn-outline-danger"
                >
                  Logout
                </button>
              </li>
            </>
          ) : (
            <>
              <li className="nav-item">
                <Link to="/login" className="nav-link">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/register" className="nav-link">
                  Register
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
