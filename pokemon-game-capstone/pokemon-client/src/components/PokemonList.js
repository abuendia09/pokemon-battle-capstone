import React, { useEffect, useState } from "react";
import Pokemon from "./Pokemon";

const PokemonList = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8080/pokemon");

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setPokemonList(data);
      } catch (error) {
        console.error("Error fetching Pokemon data:", error.message);
        setError("Failed to fetch Pokemon data. Please try again later.");
      }
    };

    fetchData();
  }, []);
  return (
    <div className="pokemon-list-container">
      <h2 className="text-center text-light mb-4 pt-4">Choose your Pokemon!</h2>

      {error ? (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      ) : (
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {pokemonList.map((pokemon) => (
            <div key={pokemon.pokemonId} className="col">
              <Pokemon
                id={pokemon.pokemonId}
                name={pokemon.name}
                image={pokemon.image}
                type={pokemon.type}
                health={pokemon.health}
                attack={pokemon.attack}
                defense={pokemon.defense}
                pokemonList={pokemonList}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PokemonList;
