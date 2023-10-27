import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import BattleLog from "./BattleLog";

const Battle = () => {
  const { id } = useParams();
  const { state: pokemonList } = useLocation();
  const selectedPokemon = pokemonList.find(
    (pokemon) => pokemon.pokemonId === parseInt(id)
  );

  const [userPokemon, setUserPokemon] = useState(selectedPokemon);
  const [computerPokemon, setComputerPokemon] = useState({});
  const [battleLog, setBattleLog] = useState([]);
  const [isGameOver, setIsGameOver] = useState(false);
  const [userAnimation, setUserAnimation] = useState("");
  const [computerAnimation, setComputerAnimation] = useState("");

  useEffect(() => {
    setComputerPokemon(getRandomPokemon());
  }, [pokemonList]);

  const getRandomPokemon = () => {
    const remainingPokemon = pokemonList.filter(
      (pokemon) => pokemon.pokemonId !== selectedPokemon.pokemonId
    );
    const randomIndex = Math.floor(Math.random() * remainingPokemon.length);
    return remainingPokemon[randomIndex];
  };

  const handlePlayAgain = () => {
    setUserPokemon(selectedPokemon);
    setComputerPokemon(getRandomPokemon());
    setBattleLog([]);
    setIsGameOver(false);
  };

  const handleBattle = async (move) => {
    if (isGameOver) {
      return;
    }

    setComputerAnimation("");

    handleUserMove(move);

    setTimeout(() => {
      // computer move
      const computerMove = Math.random() < 0.8 ? "attack" : "heal";
      handleComputerMove(computerMove);
      setUserAnimation("");
    }, 1000);
  };

  const handleUserMove = (move) => {
    setUserAnimation(
      move === "attack"
        ? "attack-animation"
        : move === "heal"
        ? "heal-animation"
        : ""
    );

    let logEntry = "";

    // user move logic
    if (move === "attack") {
      const damage = Math.floor(Math.random() * 10) + 1;
      setComputerPokemon((prevComputerPokemon) => ({
        ...prevComputerPokemon,
        health: Math.max(0, prevComputerPokemon.health - damage),
      }));
      logEntry = `${userPokemon.name} attacked and dealt ${damage} damage!`;
    } else if (move === "heal") {
      const healing = Math.floor(Math.random() * 10) + 1;
      setUserPokemon((prevUserPokemon) => ({
        ...prevUserPokemon,
        health: Math.min(100, prevUserPokemon.health + healing),
      }));
      logEntry = `${userPokemon.name} healed and restored ${healing} health!`;
    }
    setBattleLog([logEntry]);
  };

  const handleComputerMove = (move) => {
    setComputerAnimation(
      move === "attack"
        ? "attack-animation"
        : move === "heal"
        ? "heal-animation"
        : ""
    );

    let logEntry = "";

    // computer move logic
    if (move === "attack") {
      const damage = Math.floor(Math.random() * 10) + 1;
      setUserPokemon((prevUserPokemon) => ({
        ...prevUserPokemon,
        health: Math.max(0, prevUserPokemon.health - damage),
      }));
      logEntry = `${computerPokemon.name} attacked and dealt ${damage} damage!`;
    } else if (move === "heal") {
      const healing = Math.floor(Math.random() * 10) + 1;
      setComputerPokemon((prevComputerPokemon) => ({
        ...prevComputerPokemon,
        health: Math.min(100, prevComputerPokemon.health + healing),
      }));
      logEntry = `${computerPokemon.name} healed and restored ${healing} health!`;
    }
    setBattleLog([logEntry]);
  };

  useEffect(() => {
    if (computerPokemon.health <= 0) {
      setIsGameOver(true);
      setBattleLog((prevBattleLog) => [
        ...prevBattleLog,
        `Game over! You are the winner!`,
      ]);
    } else if (userPokemon.health <= 0) {
      setIsGameOver(true);
      setBattleLog((prevBattleLog) => [
        ...prevBattleLog,
        `Game over! Computer is the winner!`,
      ]);
    }
  }, [userPokemon, computerPokemon]);

  return (
    <div className="battle-container">
      <div className="battle-background">
        <div className="pokemon-container">
          <div className="pokemon">
            <img
              src={userPokemon.image}
              alt={userPokemon.name}
              className={userAnimation}
            />
            <div className="pokemon-info">
              <p>{userPokemon.name}</p>
              <p>Health: {userPokemon.health}</p>
            </div>
            {!isGameOver && (
              <div className="battle-buttons">
                <button
                  className="attack"
                  onClick={() => handleBattle("attack")}
                >
                  Attack
                </button>
                <button className="heal" onClick={() => handleBattle("heal")}>
                  Heal
                </button>
              </div>
            )}
          </div>
          <div className="vs-text">VS</div>
          <div className="pokemon">
            <img
              src={computerPokemon.image}
              alt={computerPokemon.name}
              className={computerAnimation}
            />
            <div className="pokemon-info">
              <p>{computerPokemon.name}</p>
              <p>Health: {computerPokemon.health}</p>
            </div>
          </div>
        </div>

        <div className="battle-log-container">
          <BattleLog logs={battleLog} />
        </div>
        {isGameOver && (
          <div className="play-again-container">
            <button className="play-again" onClick={handlePlayAgain}>
              Play Again
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Battle;
