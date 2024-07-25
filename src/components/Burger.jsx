import Image from "next/image";
import React from "react";

import cls from "@/styles/burger.module.css";
import Link from "next/link";

function Burger({ item }) {
  return (
    <Link href={`/burgers/${item._id}`} className={cls.container}>
      <div className={cls.top}>
        <Image
          className={cls.burgerImage}
          width={137}
          height={106}
          src={item.image}
          alt="delicious burger"
        />
        <button className={cls.heart}>
          <Image alt="Heart icon" src="/heart.svg" width={15} height={12.8} />
        </button>
      </div>

      <div className={cls.text}>
        <h3 className={cls.name}>{item.name}</h3>

        <div className={cls.items}>
          <div className={cls.stars}>
            <Image src="/star.svg" width={16} height={16} alt="star icon" />
            <p className={cls.starsText}>{item.stars}</p>
          </div>

          <div className={cls.destination}>
            <Image
              alt="Destination icon"
              src="/place.svg"
              height={11.27}
              width={9.33}
            />
            <p className={cls.destinationText}>{item.destination}m</p>
          </div>
        </div>

        <h3 className={cls.price}>$ {item.price}</h3>
      </div>
    </Link>
  );
}

export default Burger;
