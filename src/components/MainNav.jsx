import Image from "next/image";
import Link from "next/link";
import React from "react";

import cls from "@/styles/mainNav.module.css";

function MainNav() {
  return (
    <div className={cls.container}>
      <nav className={cls.nav}>
        <Link className={cls.link} href="/search">
          <Image
            src="/search.svg"
            width={18}
            height={18}
            alt="White search icon"
          />
        </Link>
        <Link className={cls.link} href="#">
          <Image
            src="/notifications.svg"
            width={16}
            height={18}
            alt="White bell icon for notifications"
          />
        </Link>
      </nav>

      <h1 className={cls.title}>Provide the best food for you</h1>
    </div>
  );
}

export default MainNav;
