import React from "react";
import cls from "@/styles/burgersSkeleton.module.css";

function BurgersSkeleton() {
  return (
    <div className={cls.container}>
      <Item />
      <Item />
      <Item />
      <Item />
    </div>
  );
}

function Item() {
  return (
    <div className={cls.burger}>
      <div className={cls.top}></div>

      <div className={cls.longText}></div>
      <div className={cls.shortText}></div>
    </div>
  );
}

export default BurgersSkeleton;
