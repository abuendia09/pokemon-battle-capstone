import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Pokemon = ({
  id,
  name,
  type,
  image,
  health,
  attack,
  defense,
  pokemonList,
}) => (
  <div className="card text-center" style={{ width: "400px", margin: "20px" }}>
    <img
      src={image}
      alt={name}
      className="card-img-top img-fluid mx-auto"
      style={{ maxHeight: "150px", maxWidth: "100px" }}
    />

    <div className="card-body d-flex flex-column justify-content-center">
      <h5 className="card-title">{name}</h5>
      <p className="card-text">Type: {type}</p>
      <p className="card-text">Health: {health}</p>
      <p className="card-text">Attack: {attack}</p>
      <p className="card-text">Defense: {defense}</p>

      <Link
        to={`/battle/${id}`}
        state={pokemonList}
        className="btn btn-danger mt-auto"
      >
        Battle
      </Link>
    </div>
  </div>
);

export default Pokemon;
