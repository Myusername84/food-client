"use client";

import Categories from "@/components/Categories";
import Image from "next/image";
import React, { useState } from "react";

import cls from "@/styles/search.module.css";
import VerticalBurgers from "@/components/VerticalBurgers";
import EmptyBurgers from "@/components/EmptyBurgers";
import axios from "axios";

function Search() {
  const [filter, setFilter] = useState(false);
  const [burgers, setBurgers] = useState([]);
  const [input, setInput] = useState("");
  const [category, setCategory] = useState("None");

  async function getBurgers(e) {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://food-server-iohq.onrender.com/burgers",
        {
          name: input,
          category: category,
        }
      );
      setBurgers(response.data);
    } catch (err) {
      alert("Error");
      console.log(err.message);
    }
  }

  function sendCategory(text) {
    setCategory(text);
  }

  return (
    <div className={cls.container}>
      <div className={cls.text}>
        <h1 className={cls.title}>Find Your Favorite Food</h1>
      </div>

      <form onSubmit={(e) => getBurgers(e)} className={cls.search}>
        <Image
          alt="Search icon"
          width={15}
          height={15}
          src="/blackSearch.svg"
        />
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className={cls.input}
          type="text"
        />
        <button
          type="button"
          className={cls.filter}
          onClick={() => setFilter(!filter)}
        >
          <Image
            width={13.33}
            height={13.33}
            src={filter ? "/grayFilter.svg" : "blackFilter.svg"}
            alt="Filter icon"
          />
        </button>
      </form>

      {filter ? <Categories sendCategory={sendCategory} /> : null}

      {burgers.length ? (
        <VerticalBurgers burgers={burgers} />
      ) : (
        <EmptyBurgers />
      )}
    </div>
  );
}

export default Search;
