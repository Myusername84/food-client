"use client";

import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import cls from "@/styles/profile.module.css";
import MainFooter from "@/components/MainFooter";
import Modal from "@/components/Modal";

function UserProfile() {
  const router = useRouter();
  const [user, setUser] = useState({});
  const [modal, setModal] = useState(false);

  useEffect(() => {
    getUser();
  }, []);

  async function getUser() {
    try {
      const response = await axios.get("http://localhost:3001/user", {
        withCredentials: true,
      });
      setUser(response.data);
    } catch (err) {
      console.log(err.message);
    }
  }

  async function signOut() {
    try {
      await axios.get("http://localhost:3001/signOut", {
        withCredentials: true,
      });
      router.push("/logIn");
    } catch (err) {
      console.log(err.message);
    }
  }

  async function deleteUser() {
    try {
      await axios.delete("http://localhost:3001/deleteAccount", {
        withCredentials: true,
      });
      router.push("/register");
    } catch (err) {
      console.log(err.message);
    }
  }

  return (
    <div className={cls.container}>
      <div className={cls.content}>
        <h3>Profile Settings</h3>

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

        <div className={cls.text}>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
        </div>

        <div className={cls.line}></div>

        <div className={cls.menu}>
          <div className={cls.menuItem}>
            <p>Profile</p>

            <div className={cls.items}>
              <Item
                href="personalData"
                image="/profileIcon.svg"
                width={11.6}
                height={15}
                text="Personal Data"
              />
              <Item
                href="settings"
                image="/settings.svg"
                width={15}
                height={15}
                text="Settings"
              />
            </div>
          </div>

          <div className={cls.menuItem}>
            <p>Support</p>

            <div className={cls.items}>
              <Item
                href="helpCenter"
                image="/info.svg"
                width={15}
                height={15}
                text="Help Center"
              />
            </div>
          </div>
        </div>

        <div className={cls.buttons}>
          <DangerButton onClick={() => setModal("signOut")}>
            <Image
              alt="Sign out button"
              src="/signOut.svg"
              width={15}
              height={13}
            />
            <p>Sign Out</p>
          </DangerButton>
          <DangerButton onClick={() => setModal("delete")}>
            <Image
              alt="Delete button"
              width={13}
              height={15}
              src="/delete.svg"
            />
            <p>Delete Account</p>
          </DangerButton>
        </div>
      </div>

      {modal == "signOut" ? (
        <Modal setModal={setModal}>
          <div className={cls.modal}>
            <h3>Sign Out</h3>
            <p>Do you want to sign out?</p>

            <div>
              <button onClick={() => setModal(false)} className={cls.grayBtn}>
                Cancel
              </button>
              <button onClick={signOut} className={cls.orangeBtn}>
                Log Out
              </button>
            </div>
          </div>
        </Modal>
      ) : null}

      {modal == "delete" ? (
        <Modal setModal={setModal}>
          <div className={cls.modal}>
            <h3>Delete Profile</h3>
            <p>Do you want to delete profile?</p>

            <div>
              <button onClick={() => setModal(false)} className={cls.grayBtn}>
                Cancel
              </button>
              <button onClick={deleteUser} className={cls.orangeBtn}>
                Delete
              </button>
            </div>
          </div>
        </Modal>
      ) : null}

      <MainFooter />
    </div>
  );
}

function Item({ href, image, width, height, text }) {
  return (
    <Link className={cls.item} href={`/profile/${href}`}>
      <div className={cls.front}>
        <div>
          <Image alt={text} src={image} width={width} height={height} />
        </div>
        <p>{text}</p>
      </div>

      <Image alt="forward icon" src="/forward.svg" width={14} height={14} />
    </Link>
  );
}

function DangerButton({ children, onClick }) {
  return (
    <button onClick={onClick} className={cls.dangerButton}>
      {children}
    </button>
  );
}

export default UserProfile;
