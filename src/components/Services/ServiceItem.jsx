"use client";
import React, { useContext } from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import { AppContext } from "@/context";

const ServiceItem = ({ service, img }) => {
  const { currentLang } = useContext(AppContext);

  return (
    <div className={styles.card}>
      <Image
        src={img + service.photo}
        alt={service.title[currentLang]}
        width={590}
        height={400}
      />

      <div className={styles.content}>
        <h3>{service.title[currentLang]}</h3>
        <div
          dangerouslySetInnerHTML={{
            __html: service.descriptions[currentLang],
          }}
        />
      </div>
    </div>
  );
};

export default ServiceItem;
