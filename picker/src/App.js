import { useState } from "react";
import DisplayDifficulty from "./components/DisplayDifficulty/DisplayDifficulty";
import MenuList from "./components/MenuList/MenuList";
import style from "./style.module.css";
function App() {
  const [currentDifficulty, setCurrentDifficulty] = useState("Insane");

  const onMenuListItemClick = (difficulty) => {
    setCurrentDifficulty(difficulty);
  };

  return (
    <>
      <h1 style={{ backgroundColor: "green" }}>Select your react difficulty</h1>
      <div className={style.workspace}>
        <MenuList onMenuListItemClick={onMenuListItemClick} />
        <DisplayDifficulty difficulty={currentDifficulty} />
      </div>
    </>
  );
}

export default App;
