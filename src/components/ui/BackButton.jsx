"use client";

import Image from "next/image";
import React from "react";

import cls from "@/styles/backButton.module.css";

import { useRouter } from "next/navigation";

function BackButton() {
  const router = useRouter();

  return (
    <button className={cls.button} onClick={() => router.back()}>
      <Image
        alt="Back icon"
        src="/backBlack.svg"
        width={15.67}
        height={13.83}
      />
    </button>
  );
}

export default BackButton;
