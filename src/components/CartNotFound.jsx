import Image from "next/image";
import React from "react";

import cls from "@/styles/cartNotFound.module.css";
import Link from "next/link";

function CartNotFound() {
  return (
    <div className={cls.container}>
      <Image src="/notFound.svg" width={278} height={207} alt="Not Found" />

      <div className={cls.text}>
        <h3>Ouch! Hungry</h3>
        <p>Seems like you have not ordered any food yet</p>

        <Link href="/">Find Foods</Link>
      </div>
    </div>
  );
}

export default CartNotFound;
