"use client";
import React, { useContext, useState } from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import Link from "next/link";
import { CircleX, Menu } from "lucide-react";
import { AppContext } from "@/context";
import Translation from "../UI/Translation";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const { currentLang, setLang } = useContext(AppContext);

  const handleChangeLang = (lang) => {
    localStorage.setItem("lang", lang);

    setLang(lang);
  };

  return (
    <>
      <nav className={styles.navbar}>
        <div className="wrapper">
          <div className={styles.content}>
            <ul className={styles.links}>
              <Image src="/logo.svg" width={120} height={50} alt="logo" />

              <li>
                <Link href="#">
                  <Translation keyCode="navbar.link1" />
                </Link>
              </li>

              <li>
                <Link href="#about">
                  <Translation keyCode="navbar.link2" />
                </Link>
              </li>

              <li>
                <Link href="#services">
                  <Translation keyCode="navbar.link3" />
                </Link>
              </li>

              <li>
                <Link href="#contact">
                  <Translation keyCode="navbar.link4" />
                </Link>
              </li>
            </ul>

            <div className={styles.actions}>
              <Link href="tel:+905354094507">+90 535 409 4507</Link>

              <div className={styles.divider} />

              <div className={styles.langs}>
                <button
                  onClick={() => handleChangeLang("tr")}
                  className={currentLang === "tr" ? styles.active : ""}
                >
                  Türk
                </button>

                <button
                  onClick={() => handleChangeLang("en")}
                  className={currentLang === "en" ? styles.active : ""}
                >
                  Eng
                </button>
              </div>

              <button
                onClick={() => setMenu((prev) => !prev)}
                className={styles.menu}
              >
                {!menu ? <Menu size={38} /> : <CircleX size={38} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <nav
        className={`${styles.mobileMenu} ${
          menu ? "scale-100 visible" : "scale-0 invisible"
        }`}
      >
        <ul onClick={() => setMenu(false)}>
          <li>
            <Link href="#">Ev</Link>
          </li>

          <li>
            <Link href="#about">Hakkımızda</Link>
          </li>

          <li>
            <Link href="#services">Hizmetler</Link>
          </li>

          <li>
            <Link href="#contact">Bağlantı</Link>
          </li>
        </ul>

        <div className={styles.langs}>
          <button
            onClick={() => handleChangeLang("tr")}
            className={currentLang === "tr" ? styles.active : ""}
          >
            Türk
          </button>

          <button
            onClick={() => handleChangeLang("en")}
            className={currentLang === "en" ? styles.active : ""}
          >
            Eng
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
