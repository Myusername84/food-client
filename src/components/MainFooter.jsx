"use client";

import Image from "next/image";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

import cls from "@/styles/mainFooter.module.css";

function MainFooter() {
  return (
    <div className={cls.container}>
      <Item text="Home" path="/" image="/home.svg" width={19.2} height={19.2} />
      <Item
        text="Cart"
        path="/cart"
        image="/cart.svg"
        width={16.8}
        height={19.2}
      />
      <Item
        text="Messages"
        path="/messages"
        image="/messages.svg"
        width={19.2}
        height={16.8}
      />
      <Item
        text="Profile"
        path="/profile"
        image="/user.svg"
        width={16.8}
        height={18}
      />
    </div>
  );
}

function Item({ path, text, image, width, height }) {
  const pathname = usePathname();

  return (
    <Link className={cls.item} href={path}>
      <Image
        alt="Icon"
        className={
          pathname === path ? `${cls.itemImage} ${cls.active}` : cls.itemImage
        }
        src={image}
        width={width}
        height={height}
      />
      {pathname === path ? <p className={cls.itemName}>{text}</p> : null}
    </Link>
  );
}

export default MainFooter;
