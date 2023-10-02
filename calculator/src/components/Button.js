import React from "react";
import styles from "./Button.module.css";

const Button = (props) => {
  const onClickHandler = (event) => {
    props.onValue(event.target.innerText.trim());
  };

  return (
    <button
      className={`${styles.button} ${props.className && styles.equal}`}
      onClick={onClickHandler}
    >
      {props.children}
    </button>
  );
};

export default Button;
