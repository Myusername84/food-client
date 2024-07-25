"use client";

import SignInFooter from "@/components/SignInFooter";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

import cls from "@/styles/register.module.css";
import PasswordInput from "@/components/ui/PasswordInput";
import Link from "next/link";
import axios from "axios";

function Register() {
  const router = useRouter();

  const [form, setForm] = useState({
    email: "",
    password: "",
    name: "",
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
      await axios.post("http://localhost:3001/auth/register", form);
      router.push("/logIn");
    } catch (err) {
      alert("Error");
      console.log(err.message);
    }
  }

  return (
    <div className={cls.container}>
      <div className={cls.text}>
        <h1 className={cls.title}>Create your new account</h1>
        <p className={cls.parag}>
          Create an account to start looking for the food you like
        </p>
      </div>

      <form onSubmit={(e) => handleSubmit(e)} className={cls.form}>
        <div className={cls.inputs}>
          <Input
            label="Email Address"
            type="email"
            name="email"
            placeholder="Enter Email"
            value={form.email}
            onChange={handleChange}
          />
          <Input
            label="User Name"
            type="text"
            name="name"
            placeholder="User Name"
            value={form.name}
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

        <div className={cls.checkboxContainer}>
          <label className={cls.checkbox}>
            <input type="checkbox" />
            <span></span>
          </label>

          <p className={cls.checkboxLabel}>
            I Agree with{" "}
            <Link className={cls.regularLink} href="#">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link className={cls.regularLink} href="#">
              Privacy Policy
            </Link>
          </p>
        </div>

        <Button width={327} type="submit">
          Register
        </Button>
      </form>

      <SignInFooter link="/logIn" text="Sign in" />
    </div>
  );
}

export default Register;
