"use client";

import BackButton from "@/components/ui/BackButton";
import React, { useState, useEffect } from "react";
import cls from "@/styles/personalData.module.css";
import Input from "@/components/ui/Input";
import Image from "next/image";
import Button from "@/components/ui/Button";

function PersonalData() {
  const [form, setForm] = useState({
    fullName: "",
    birth: new Date(Date.now())
      .toLocaleString("en-US", { timeZone: "UTC" })
      .split(",")[0],
    gender: "Male",
    phone: "+1 234-567-890",
    email: "johnSmith@gmail.com",
  });

  function handleChange(e) {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  }

  return (
    <div className={cls.container}>
      <nav className={cls.nav}>
        <BackButton />
        <h1>Personal Data</h1>
      </nav>

      <div className={cls.images}>
        <Image
          className={cls.profileImage}
          src="/userProfile.png"
          width={100}
          height={100}
          alt="User profile icon"
        />
        <Image
          className={cls.camera}
          src="/camera.svg"
          width={32}
          height={32}
          alt="Camera Icon"
        />
      </div>

      <form className={cls.form}>
        <div className={cls.inputs}>
          <Input
            label="Full Name"
            type="text"
            placeholder="John Doe"
            onChange={handleChange}
            name="fullName"
            value={form.fullName}
          />
          <Input
            label="Date of birth"
            type="date"
            placeholder="Enter your date"
            onChange={handleChange}
            name="birth"
            value={form.birth}
          />

          <div className={cls.selectContainer}>
            <label>Gender</label>
            <select
              className={cls.select}
              name="gender"
              onChange={handleChange}
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>

          <Input
            label="Phone"
            type="tel"
            placeholder="+1 123-456-7890"
            onChange={handleChange}
            name="phone"
            value={form.phone}
          />
          <Input
            label="Email"
            type="email"
            placeholder="Email"
            onChange={handleChange}
            name="email"
            value={form.email}
          />
        </div>

        <Button width={327} type="submit">
          <p>Save</p>
        </Button>
      </form>
    </div>
  );
}

export default PersonalData;

// label, type, placeholder, onChange, name, value
