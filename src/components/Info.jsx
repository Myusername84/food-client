import Image from "next/image";
import React from "react";

import cls from "@/styles/info.module.css";

function Info({ burger }) {
  return (
    <div className={cls.info}>
      <InfoItem
        image="/dollar.svg"
        width={10}
        height={23}
        text="Free Delivery"
      />
      <InfoItem image="/time.svg" width={14} height={14} text="20-30" />
      <InfoItem
        image="/star.svg"
        width={11.5}
        height={11}
        text={burger.stars}
      />
    </div>
  );
}

function InfoItem({ text, image, width, height }) {
  return (
    <div className={cls.infoBlock}>
      <Image alt="Info Item" src={image} width={width} height={height} />
      <p>{text}</p>
    </div>
  );
}

export default Info;
