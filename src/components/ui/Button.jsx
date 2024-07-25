import React from "react";
import cls from "@/styles/button.module.css";

function Button({ children, type, width }) {
  return (
    <button style={{ width: width + "px" }} className={cls.button} type={type}>
      {children}
    </button>
  );
}

export default Button;
