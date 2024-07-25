"use client";

import React, { useState, useEffect } from "react";
import cls from "@/styles/cart.module.css";
import BackButton from "@/components/ui/BackButton";
import Image from "next/image";
import axios from "axios";
import MainFooter from "@/components/MainFooter";
import CartItem from "@/components/CartItem";
import CartNotFound from "@/components/CartNotFound";
import Link from "next/link";

function Cart() {
  const [orders, setOrders] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    getOrders();
  }, []);

  async function getOrders() {
    try {
      const response = await axios.get("http://localhost:3001/orders", {
        withCredentials: true,
      });

      setOrders(response.data);

      const total = response.data
        .map((item) => Number(item.price.replace(",", "")) * item.count)
        .reduce((a, b) => a + b, 0);

      setTotal(total);
    } catch (err) {
      console.log(err.message);
    }
  }

  function setNewItems(items) {
    setOrders(items);

    const total = items
      .map((item) => Number(item.price.replace(",", "") * item.count))
      .reduce((a, b) => a + b, 0);

    setTotal(total);
  }

  return (
    <div className={cls.container}>
      {orders.length > 0 ? (
        <div className={cls.content}>
          <nav className={cls.nav}>
            <BackButton />
            <p>My Cart</p>
            <button>
              <Image
                src="/dots.svg"
                width={13.33}
                height={1.67}
                alt="Three black dots"
              />
            </button>
          </nav>

          <div className={cls.orders}>
            {orders.map((item) => (
              <CartItem key={item._id} setNewItems={setNewItems} item={item} />
            ))}
          </div>

          <div className={cls.payment}>
            <h3>Payment Summary</h3>

            <div className={cls.info}>
              <div className={cls.infoBlock}>
                <p>Total items ({orders.length})</p>
                <h3>{total}</h3>
              </div>

              <div className={cls.infoBlock}>
                <p>Delivery Fee</p>
                <h3>Free</h3>
              </div>

              <div className={cls.infoBlock}>
                <p>Discount</p>
                <h3 className={cls.orange}>$ 10,000</h3>
              </div>

              <div className={cls.infoBlock}>
                <p>Total</p>
                <h3>{total - 10},000</h3>
              </div>
            </div>
          </div>

          <Link href="/payment" className={cls.orangeBtn}>
            Order Now
          </Link>
        </div>
      ) : (
        <CartNotFound />
      )}

      <MainFooter />
    </div>
  );
}

export default Cart;
