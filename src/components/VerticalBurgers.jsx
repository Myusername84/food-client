import Image from "next/image";
import Link from "next/link";
import React from "react";

import cls from "@/styles/verticalBurgers.module.css";

function VerticalBurgers({ burgers }) {
  return (
    <div className={cls.container}>
      {burgers.map((item) => (
        <Link
          key={item._id}
          className={cls.burger}
          href={`/burgers/${item._id}`}
        >
          <Image
            alt="Burger Image"
            className={cls.burgerImage}
            src={item.image}
            width={70}
            height={65}
          />

          <div className={cls.text}>
            <h3>{item.name}</h3>
            <p>{item.place}</p>

            <div className={cls.info}>
              <div className={cls.infoBlock}>
                <Image
                  alt="Burger Image"
                  src="/star.svg"
                  width={16}
                  height={16}
                />
                <p>{item.stars}</p>
              </div>

              <div className={cls.infoBlock}>
                <Image
                  alt="Burger Image"
                  src="/place.svg"
                  width={14}
                  height={14}
                />
                <p>{item.destination}m</p>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default VerticalBurgers;
