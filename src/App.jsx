import Header from "./components/header";
import ColorsBox from "./components/colors-box";
import confetti from "./assets/confetti.gif";
import { useGame } from "./hooks/use-game";

function App() {
  const {
    changeGameLevel,
    checkSelection,
    colors,
    computerColor,
    gameLevel,
    gameState,
    restartGame,
  } = useGame();

  return (
    <>
      <Header
        computerColor={computerColor}
        gameLevel={gameLevel}
        changeGameLevel={changeGameLevel}
      />
      <ColorsBox
        colors={colors}
        gameLevel={gameLevel}
        onButtonClicked={checkSelection}
        disabled={gameState !== "pending"}
      />

      {gameState === "won" && <img className="confetti" src={confetti} />}

      {gameState !== "pending" && (
        <button onClick={restartGame} className="restart">
          Restart Game
        </button>
      )}
    </>
  );
}

export default App;

//1. make sure there is error message showing to the user on the screen before restart button
//2. make sure there is success message showing to the user on the screen before restart button

//3. make sure we have overlay on the button
