import React, { useState } from "react";
import style from "./Card.module.css";

function Card(props) {
  const [inputNumber] = useState(props.number);
  const [dynamicNumber, setDynamicNumber] = useState(props.number);

  let backgroundStyle = "";
  switch (inputNumber) {
    case 1:
      backgroundStyle = style.customOne;
      break;
    case 2:
      backgroundStyle = style.customTwo;
      break;
    case 3:
      backgroundStyle = style.customThree;
      break;
    case 4:
      backgroundStyle = style.customFour;
      break;
    default:
      backgroundStyle = "";
  }

  const handleClick = () => {
    setDynamicNumber(dynamicNumber + inputNumber);
    props.onClick();
  };

  return (
    <button
      className={`${style.container} ${backgroundStyle}`}
      onClick={handleClick}
    >
      {dynamicNumber}
    </button>
  );
}

export default Card;
