import { useBingoGame } from "./hooks/useBingoGame";
import { StartScreen } from "./components/StartScreen";
import { GameScreen } from "./components/GameScreen";
import { BingoModal } from "./components/BingoModal";

function App() {
  const {
    gameState,
    board,
    winningSquareIds,
    showBingoModal,
    startGame,
    handleSquareClick,
    resetGame,
    dismissModal,
  } = useBingoGame();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-bubble-bg">
      <div className="anime-title mb-2 mt-6">Anime Bubble Bingo</div>
      <div className="anime-subtitle mb-6">
        Playful, vibrant, and bubbly fun!
      </div>
      <div className="bubble-card w-full max-w-2xl mx-auto">
        {gameState === "start" ? (
          <StartScreen onStart={startGame} />
        ) : (
          <GameScreen
            board={board}
            winningSquareIds={winningSquareIds}
            hasBingo={gameState === "bingo"}
            onSquareClick={handleSquareClick}
            onReset={resetGame}
          />
        )}
        {showBingoModal && <BingoModal onDismiss={dismissModal} />}
      </div>
    </div>
  );
}

export default App;
