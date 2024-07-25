"use client";

import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import PasswordInput from "@/components/ui/PasswordInput";
import Link from "next/link";
import React, { useState } from "react";

import cls from "@/styles/login.module.css";
import axios from "axios";
import { useRouter } from "next/navigation";
import SignInFooter from "@/components/SignInFooter";

function LogIn() {
  const router = useRouter();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await axios.post(
        "https://food-server-iohq.onrender.com/auth/logIn",
        form,
        {
          withCredentials: true,
        }
      );
      router.push("/");
    } catch (err) {
      alert("Error");
      console.error(err);
    }
  }

  return (
    <div className={cls.container}>
      <div className={cls.text}>
        <h1 className={cls.title}>Login to your account.</h1>
        <p className={cls.parag}>Please sign in to your account</p>
      </div>

      <form
        onSubmit={(e) => handleSubmit(e)}
        autoComplete="off"
        className={cls.form}
      >
        <div className={cls.inputs}>
          <Input
            label="Email Address"
            type="email"
            name="email"
            placeholder="Enter Email"
            value={form.email}
            onChange={handleChange}
          />
          <PasswordInput
            label="Password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
          />
        </div>

        <Link className={cls.regularLink} href="#">
          Forgot password?
        </Link>

        <Button width={327} type="submit">
          Sign In
        </Button>
      </form>

      <SignInFooter link="/register" text="Register" />
    </div>
  );
}

export default LogIn;
