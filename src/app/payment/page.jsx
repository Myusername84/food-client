"use client";

import Order from "@/components/Order";
import axios from "axios";
import React, { useState, useEffect } from "react";

import cls from "@/styles/payment.module.css";
import BackButton from "@/components/ui/BackButton";

function Payment() {
  const [orders, setOrders] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    getOrders();
  }, []);

  async function getOrders() {
    try {
      const response = await axios.get(
        "https://food-server-iohq.onrender.com/orders",
        {
          withCredentials: true,
        }
      );

      setOrders(response.data);

      const total = response.data
        .map((item) => Number(item.price.replace(",", "")))
        .reduce((a, b) => a + b, 0);

      setTotal(total);
    } catch (err) {
      console.log(err.message);
    }
  }

  return (
    <div className={cls.container}>
      <nav className={cls.nav}>
        <BackButton />

        <p>Payment</p>
      </nav>

      <div className={cls.text}>
        <p>You deserve better meal</p>
        <h3>Items Ordered</h3>
      </div>

      <div className={cls.items}>
        {orders.map((item) => (
          <Order key={item._id} item={item} />
        ))}
      </div>

      <div className={cls.detailsContainer}>
        <p>Details Transaction</p>

        <div className={cls.details}>
          <div className={cls.detail}>
            <p>Cherry Healthy</p>
            <h3>$ 180.000</h3>
          </div>

          <div className={cls.detail}>
            <p>Driver</p>
            <h3>$ 50.000</h3>
          </div>

          <div className={cls.detail}>
            <p>Tax 10%</p>
            <h3>$ 180.000</h3>
          </div>

          <div className={cls.detail}>
            <p>Total Price</p>
            <h3 className={cls.total}>$ {total + total * 0.1}.000</h3>
          </div>
        </div>
      </div>

      <button className={cls.orangeBtn}>Checkout Now</button>
    </div>
  );
}

export default Payment;
