import React from "react";
import cls from "@/styles/signInFooter.module.css";
import Link from "next/link";
import Image from "next/image";

function SignInFooter({ text, link }) {
  return (
    <div className={cls.footer}>
      <div className={cls.lineContainer}>
        <div className={cls.line}></div>
        <p className={cls.lineText}>Or sign in with</p>
      </div>

      <div className={cls.links}>
        <Link
          className={cls.authLink}
          href="https://food-server-iohq.onrender.com/google"
        >
          <Image alt="Google Icon" width={20} height={20} src="/google.svg" />
        </Link>
      </div>

      <p className={cls.registerPage}>
        Don't have an account?{" "}
        <Link className={cls.boldLink} href={link}>
          {text}
        </Link>
      </p>
    </div>
  );
}

export default SignInFooter;
