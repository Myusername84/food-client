import Image from "next/image";
import React from "react";

import cls from "@/styles/order.module.css";

function Order({ item }) {
  return (
    <div className={cls.container}>
      <Image src={item.image} width={80} height={70} alt="Burger Image" />

      <div className={cls.content}>
        <div className={cls.text}>
          <h3>{item.name}</h3>
          <p>$ {item.price}</p>
        </div>

        <p>{item.count} items</p>
      </div>
    </div>
  );
}

export default Order;
