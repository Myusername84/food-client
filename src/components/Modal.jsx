import Image from "next/image";
import React from "react";

import cls from "@/styles/modal.module.css";

function Modal({ children, setModal, text }) {
  return (
    <div className={cls.container} onClick={() => setModal(false)}>
      <div onClick={(e) => e.stopPropagation()} className={cls.mainContent}>
        {children}

        <button className={cls.close} onClick={() => setModal(false)}>
          <Image src="/x.svg" width={10} height={10} alt="X icon" />
        </button>
      </div>
    </div>
  );
}

export default Modal;
