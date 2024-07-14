"use client";
import React, { useContext } from "react";
import styles from "./styles.module.scss";
import { AppContext } from "@/context";

const AdvantageItem = ({ advantage, id }) => {
  const { currentLang } = useContext(AppContext);

  return (
    <div className={styles.card}>
      <h3>
        <span>{id + 1}</span> {advantage.title[currentLang]}
      </h3>

      <div
        dangerouslySetInnerHTML={{
          __html: advantage.descriptions[currentLang],
        }}
      />
    </div>
  );
};

export default AdvantageItem;
