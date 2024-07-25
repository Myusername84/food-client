import React from "react";
import cls from "@/styles/input.module.css";

function Input({ label, type, placeholder, onChange, name, value }) {
  return (
    <div className={cls.container}>
      <label className={cls.label} htmlFor={name}>
        {label}
      </label>

      <input
        className={cls.input}
        name={name}
        id={name}
        onChange={(e) => onChange(e)}
        placeholder={placeholder}
        value={value}
        type={type}
      />
    </div>
  );
}

export default Input;
