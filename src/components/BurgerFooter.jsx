"use client";

import axios from "axios";
import Image from "next/image";
import React, { useState } from "react";

import cls from "@/styles/burgerFooter.module.css";

function BurgerFooter({ burger }) {
  const [count, setCount] = useState(0);

  function decreaseCount() {
    if (count > 0) {
      setCount(count - 1);
    } else {
      return;
    }
  }

  async function addItem() {
    try {
      await axios.post(
        "https://food-server-iohq.onrender.com/cart",
        { id: burger._id, count: count },
        {
          withCredentials: true,
        }
      );
    } catch (err) {
      alert("Error");
      console.log(err.message);
    }
  }

  return (
    <div className={cls.container}>
      <div className={cls.buttons}>
        <CountButton text="-" onClick={decreaseCount} />
        <p className={cls.count}>{count}</p>
        <CountButton text="+" onClick={() => setCount(count + 1)} />
      </div>

      <button className={cls.addToCart} onClick={addItem}>
        <Image alt="cart bag icon" src="/cartBag.svg" width={15} height={15} />
        <p>Add to Carts</p>
      </button>
    </div>
  );
}

function CountButton({ text, onClick }) {
  return (
    <button className={cls.button} onClick={onClick}>
      {text}
    </button>
  );
}

export default BurgerFooter;
