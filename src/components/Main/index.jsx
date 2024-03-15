import React, { useState, useEffect } from "react";
import style from "./Main.module.css";
import Card from "../Card";

function Main() {
  const [totalChanges, setTotalChanges] = useState(0);

  useEffect(() => {}, [totalChanges]);

  const handleChanges = () => {
    setTotalChanges(totalChanges + 1);
  };

  return (
    <div className={style.container}>
      <h1 className={style.h1}>{totalChanges} number changes detected</h1>
      <div className={style.top}>
        <Card number={1} onClick={handleChanges} />
        <Card number={2} onClick={handleChanges} />
      </div>
      <div className={style.bottom}>
        <Card number={3} onClick={handleChanges} />
        <Card number={4} onClick={handleChanges} />
      </div>
    </div>
  );
}

export default Main;
