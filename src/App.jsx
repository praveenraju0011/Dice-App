import { useState } from "react";
import StartGame from "./components/StartGame";
import GamePlay from "./components/GamePlay";
function App() {
  const [startGameFlag, setStartGameFlag] = useState(false);
  const toggleGame = () => {
    setStartGameFlag((prev) => !prev);
  };

  return (
    <div>
      {startGameFlag ? <GamePlay /> : <StartGame toggle={toggleGame} />}
    </div>
  );
}

export default App;
