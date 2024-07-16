import React from "react";
import styles from "./styles.module.scss";
import Title from "@/components/UI/Title";
import { ChevronsRight, Phone } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Translation from "../UI/Translation";

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <div className="wrapperBorderedContent sm:pt-20 pt-10">
        <div className="wrapperInside">
          <Title subtitle={<Translation keyCode="about.subtitle" />}>
            <Translation keyCode="about.title" />
          </Title>

          <p className={styles.description}>
            <Translation keyCode="about.desc" />
          </p>

          <Image
            className={styles.heroMobile}
            src="/aboutBg.png"
            width={500}
            height={500}
            alt="about image"
          />

          <div className={styles.cards}>
            <div className={styles.card}>
              <span>5+</span>
              <p>
                {" "}
                <Translation keyCode="about.card1" />
              </p>
            </div>

            <div className={styles.card}>
              <span>45+</span>
              <p>
                {" "}
                <Translation keyCode="about.card2" />
              </p>
            </div>

            <div className={styles.card}>
              <span>5+</span>
              <p>
                {" "}
                <Translation keyCode="about.card3" />
              </p>
            </div>

            <Link href="tel:+905354094507" className={`${styles.card}`}>
              <span>
                <Translation keyCode="about.card4" />
                <ChevronsRight size={20} />
              </span>

              <Phone size={30} color="transparent" fill="#fff" />
            </Link>
          </div>

          <div className={styles.hero}>
            <Image
              unoptimized={true}
              src="/aboutBg.png"
              width={500}
              height={500}
              alt="about image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
