"use client";

import Image from "next/image";
import React, { useState } from "react";

import cls from "@/styles/passwordInput.module.css";

function PasswordInput({ label, name, placeholder, value, onChange }) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className={cls.containre}>
      <label className={cls.label} htmlFor={name}>
        {label}
      </label>
      <div className={cls.inputContainer}>
        <input
          className={cls.input}
          name={name}
          id={name}
          placeholder={placeholder}
          value={value}
          type={showPassword ? "text" : "password"}
          onChange={(e) => onChange(e)}
          autoComplete="new-password"
        />

        <button
          type="button"
          className={cls.eye}
          onClick={() => setShowPassword(!showPassword)}
        >
          <Image alt="closed eye icon" width={16} height={15} src="/eye.svg" />
        </button>
      </div>
    </div>
  );
}

export default PasswordInput;
