"use client";

import Burgers from "@/components/Burgers";
import BurgersSkeleton from "@/components/burgersSkeleton";
import Categories from "@/components/Categories";
import MainFooter from "@/components/MainFooter";
import MainNav from "@/components/MainNav";
import cls from "@/styles/homePage.module.css";
import axios from "axios";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Home() {
  const [burgers, setBurgers] = useState([]);
  const [category, setCategory] = useState("None");
  const [burgersLoading, setBurgersLoading] = useState(true);

  useEffect(() => {
    getBurgers();
  }, []);

  useEffect(() => {
    getCategory();
  }, [category]);

  function sendCategory(text) {
    setCategory(text);
  }

  async function getBurgers() {
    setBurgersLoading(true);

    try {
      const response = await axios.get(
        "https://food-server-iohq.onrender.com/burgers"
      );
      const data = await response.data;

      setBurgersLoading(false);
      setBurgers(data);
    } catch (err) {
      alert("Error");
      console.log(err.message);
    }
  }

  async function getCategory() {
    try {
      const response = await axios.post(
        "https://food-server-iohq.onrender.com/burgers",
        {
          name: "",
          category: category,
        }
      );
      setBurgers(response.data);
    } catch (err) {
      alert("Error");
      console.log(err.message);
    }
  }

  return (
    <div className={cls.container}>
      <div className={cls.content}>
        <MainNav />

        <div className={cls.content}>
          <div className={cls.nav}>
            <h3 className={cls.title}>Find by Category</h3>
            <Link className={cls.link} href="#">
              See All
            </Link>
          </div>

          <Categories sendCategory={sendCategory} />

          {burgersLoading ? <BurgersSkeleton /> : <Burgers burgers={burgers} />}
        </div>
      </div>

      <MainFooter />
    </div>
  );
}
