"use client";

import React, { useState, useEffect } from "react";
import cls from "@/styles/cartItem.module.css";
import Image from "next/image";
import axios from "axios";

function CartItem({ item, setNewItems }) {
  const [count, setCount] = useState(item.count);

  useEffect(() => {
    sendCount();
  }, [count]);

  function decreaseCount() {
    if (count - 1 > 0) {
      setCount(count - 1);
    } else {
      return;
    }
  }

  async function sendCount() {
    try {
      const response = await axios.post(
        "https://food-server-iohq.onrender.com/changeCount",
        {
          id: item._id,
          count: count,
        },
        {
          withCredentials: true,
        }
      );

      setNewItems(response.data);
    } catch (err) {
      console.log(err.message);
    }
  }

  async function deleteItem() {
    try {
      const response = await axios.get(
        `https://food-server-iohq.onrender.com/deleteItem/${item._id}`,
        {
          withCredentials: true,
        }
      );

      setNewItems(response.data);
    } catch (err) {
      console.log(err.message);
    }
  }

  return (
    <div className={cls.order}>
      <Image src={item.image} width={85} height={82} alt="Burger Image" />

      <div className={cls.mainContent}>
        <h3>{item.name}</h3>
        <p>$ {item.price}</p>

        <div className={cls.buttons}>
          <div className={cls.count}>
            <button onClick={decreaseCount}>-</button>
            <p>{item.count}</p>
            <button onClick={() => setCount(count + 1)}>+</button>
          </div>

          <button onClick={deleteItem} className={cls.deleteBtn}>
            <Image
              src="/delete.svg"
              width={13.33}
              height={15}
              alt="Red Trash"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
