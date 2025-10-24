import { useState } from "react";
import { useColor } from "./use-color";

export const useGame = () => {
  const { generateColors } = useColor();
  const [gameLevel, setGameLevel] = useState(6);
  const [gameState, setGameState] = useState("pending"); //pending, lost, won
  const [colors, setColors] = useState(generateColors(gameLevel));

  const computerColor = colors[Math.floor(Math.random() * gameLevel)];

  const changeGameLevel = (level) => {
    setGameLevel(level);
    setColors(generateColors(level));
  };

  const checkSelection = (userSelection) => {
    if (userSelection === computerColor) {
      //user won the game(selected right color)
      setGameState("won");
    } else {
      //user lost(selected wrong color)
      setGameState("lost");
    }
  };

  const restartGame = () => {
    setGameState("pending");
    setColors(generateColors(gameLevel));
  };

  return {
    gameLevel,
    gameState,
    changeGameLevel,
    colors,
    checkSelection,
    computerColor,
    restartGame,
  };
};
