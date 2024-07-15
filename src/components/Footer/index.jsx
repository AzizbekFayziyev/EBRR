"use client";
import React, { useContext, useState } from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/UI/Button";
import Translation, { TranslationMethod } from "../UI/Translation";
import { AppContext } from "@/context";
import { postForm } from "@/services";

const Footer = () => {
  const { translations, currentLang } = useContext(AppContext);
  const [email, setEmail] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    const res = await postForm("no name", email, "get subscriber").then(() => {
      setEmail("");
    });

    console.log(res);

    alert(
      TranslationMethod(
        "alertMessages.getSubscriber",
        translations,
        currentLang
      )
    );
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <nav className={styles.footerNav}>
          <div className={styles.navItem}>
            <Image src="/logo.svg" width={120} height={50} alt="logo" />
            <p>
              <Translation keyCode="footer.title" />
            </p>
          </div>

          <div className={styles.navItem}>
            <h3>
              <Translation keyCode="footer.menu1" />
            </h3>
            <ul>
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
          </div>

          <div className={styles.navItem}>
            <h3>
              <Translation keyCode="footer.menu2" />
            </h3>
            <ul>
              <li>
                <Link href="tel:+905354094507">+90 535 409 4507</Link>
              </li>

              <li>
                <Link href="mailto:info@ekipmanisguvenlik.com">
                  info@ekipmanisguvenlik.com
                </Link>
              </li>

              <li>
                <Translation keyCode="contact.address2" />
              </li>
            </ul>
          </div>

          <div className={styles.navItem}>
            <form onSubmit={onSubmit} className={styles.form}>
              <input
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={TranslationMethod(
                  "form.email",
                  translations,
                  currentLang
                )}
              />
              <Button>
                <Translation keyCode="footer.subscribe" />
              </Button>
            </form>

            <div className={styles.social}>
              <h4>
                <Translation keyCode="contact.social" />
              </h4>
              <div className="flex gap-4">
                <Link href="#">
                  <Image
                    src="/icons/facebook.svg"
                    alt="facebook"
                    width={32}
                    height={32}
                  />
                </Link>

                <Link href="#">
                  <Image
                    src="/icons/linkedin.svg"
                    alt="linkedin"
                    width={32}
                    height={32}
                  />
                </Link>

                <Link href="#">
                  <Image
                    src="/icons/instagram.svg"
                    alt="instagram"
                    width={32}
                    height={32}
                  />
                </Link>

                <Link href="#">
                  <Image
                    src="/icons/telegram.svg"
                    alt="telegram"
                    width={32}
                    height={32}
                  />
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <div className={styles.footerBottom}>
        <h3>
          <Translation keyCode="footer.bottom" />
        </h3>
      </div>
    </footer>
  );
};

export default Footer;
