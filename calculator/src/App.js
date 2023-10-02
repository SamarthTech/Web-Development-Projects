import React, { useState } from "react";
import Button from "./components/Button";
import styles from "./App.module.css";
import Card from "./components/Card";
import Keyboard from "./components/Keyboard";

function App() {
  const [display, setDisplay] = useState("");

  const enteredValueHandler = (value) => {
    if (value.trim() === "AC") {
      setDisplay("");
    } else if (value.trim() === "DE") {
      setDisplay(display.length > 0 ? display.slice(0, -1) : "");
    } else if (value.trim() === "=") {
      setDisplay(eval(display));
    } else {
      setDisplay(display + "" + value);
    }
  };

  return (
    <>
      <Card>
        <div className={styles.display}>
          <input
            type="text"
            className={styles.input}
            value={display}
            onChange=""
          ></input>
        </div>
        <div>
          <Keyboard onValue={enteredValueHandler} />
        </div>
      </Card>
    </>
  );
}

export default App;
