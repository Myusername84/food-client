import React from "react";
import Burger from "./Burger";

import cls from "@/styles/burgers.module.css";

function Burgers({ burgers }) {
  return (
    <div className={cls.container}>
      {burgers.map((item) => (
        <Burger key={item._id} item={item} />
      ))}
    </div>
  );
}

export default Burgers;
