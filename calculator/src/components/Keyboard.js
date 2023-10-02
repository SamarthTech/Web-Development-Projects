import React from "react";
import Button from "./Button";

const Keyboard = (props) => {
  return (
    <>
      <div>
        <Button onValue={props.onValue}>AC</Button>
        <Button onValue={props.onValue}>DE</Button>
        <Button onValue={props.onValue}>.</Button>
        <Button onValue={props.onValue}>/</Button>
      </div>
      <div>
        <Button onValue={props.onValue}>7</Button>
        <Button onValue={props.onValue}>8</Button>
        <Button onValue={props.onValue}>9</Button>
        <Button onValue={props.onValue}>*</Button>
      </div>
      <div>
        <Button onValue={props.onValue}>4</Button>
        <Button onValue={props.onValue}>5</Button>
        <Button onValue={props.onValue}>6</Button>
        <Button onValue={props.onValue}>-</Button>
      </div>
      <div>
        <Button onValue={props.onValue}>1</Button>
        <Button onValue={props.onValue}>2</Button>
        <Button onValue={props.onValue}>3</Button>
        <Button onValue={props.onValue}>+</Button>
      </div>
      <div>
        <Button onValue={props.onValue}>00</Button>
        <Button onValue={props.onValue}>0</Button>
        <Button className="equal" onValue={props.onValue}>
          =
        </Button>
      </div>
    </>
  );
};

export default Keyboard;
