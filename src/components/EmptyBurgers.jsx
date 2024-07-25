import Image from "next/image";
import React from "react";

import cls from "@/styles/emptyBurgers.module.css";

function EmptyBurgers() {
  return (
    <div className={cls.container}>
      <Image alt="Not Found" src="/notFound.svg" width={172} height={128} />

      <div className={cls.text}>
        <h3 className={cls.title}>We couldn't find any result!</h3>
        <p className={cls.parag}>
          Please check your search for any typos or spelling errors, or try a
          different search term.
        </p>
      </div>
    </div>
  );
}

export default EmptyBurgers;
