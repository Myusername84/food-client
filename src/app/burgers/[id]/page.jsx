"use client";

import axios from "axios";
import Image from "next/image";
import React, { useState, useEffect } from "react";

import cls from "@/styles/burgerAbout.module.css";
import Info from "@/components/Info";
import BurgerFooter from "@/components/BurgerFooter";

import { useRouter } from "next/navigation";

function Burger({ params }) {
  const router = useRouter();

  const { id } = params;
  const [burger, setBurger] = useState({});

  useEffect(() => {
    getBurger();
  });

  async function getBurger() {
    try {
      const response = await axios.get(`http://localhost:3001/burgers/${id}`);
      setBurger(response.data);
    } catch (err) {
      alert("Error");
      console.log(err.message);
    }
  }

  return (
    <div className={cls.container}>
      <div className={cls.mainContent}>
        <header className={cls.top}>
          <nav className={cls.nav}>
            <button onClick={() => router.back()} className={cls.whiteBtn}>
              <Image
                src="/back.svg"
                width={17.6}
                height={12.8}
                alt="Back icon"
              />
            </button>

            <h3 className={cls.navTitle}>About This Menu</h3>

            <button className={cls.whiteBtn}>
              <Image
                alt="Heart Icon"
                src="/whiteHeart.svg"
                width={15}
                height={12.8}
              />
            </button>
          </nav>

          <Image
            alt="Burger image"
            width={359}
            height={327}
            src={burger.image}
          />
        </header>

        <div className={cls.content}>
          <h3 className={cls.name}>{burger.name}</h3>
          <p className={cls.price}>$ {burger.price}</p>

          <Info burger={burger} />

          <div className={cls.line}></div>

          <h3 className={cls.descriptionTitle}>Description</h3>
          <p className={cls.descriptionText}>{burger.description}</p>
        </div>
      </div>

      <BurgerFooter burger={burger} />
    </div>
  );
}

export default Burger;
