"use client";

import Image from "next/image";
import React, { useState } from "react";

import cls from "@/styles/categories.module.css";

function Categories({ sendCategory }) {
  const [category, setCategory] = useState("Burger");

  function handleChange(text) {
    setCategory(text);
    sendCategory(text);
  }

  return (
    <div className={cls.container}>
      <div className={cls.categories}>
        <Category
          category={category}
          setCategory={handleChange}
          image="/burger.svg"
          text="Burger"
        />
        <Category
          category={category}
          setCategory={handleChange}
          image="/taco.svg"
          text="Taco"
        />
        <Category
          category={category}
          setCategory={handleChange}
          image="/drink.svg"
          text="Drink"
        />
        <Category
          category={category}
          setCategory={handleChange}
          image="pizza.svg"
          text="Pizza"
        />
      </div>
    </div>
  );
}

function Category({ category, setCategory, image, text }) {
  return (
    <button
      className={
        category == text ? `${cls.category} ${cls.active}` : cls.category
      }
      onClick={() => setCategory(text)}
    >
      <Image alt={text} width={24} height={24} src={image} />
      <p className={cls.categoryName}>{text}</p>
    </button>
  );
}

export default Categories;
