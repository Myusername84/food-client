import Image from "next/image";
import Link from "next/link";
import React from "react";

import cls from "@/styles/notFound.module.css";

function NotFound() {
  return (
    <div className={cls.container}>
      <div className={cls.text}>
        <h2>4</h2>
        <Image src="/burger.svg" width={116} height={116} alt="Burger icon" />
        <h2>4</h2>
      </div>

      <h2 className={cls.title}>Page not Found</h2>
      <Link className={cls.link} href="/">
        Back to home
      </Link>
    </div>
  );
}

export default NotFound;
