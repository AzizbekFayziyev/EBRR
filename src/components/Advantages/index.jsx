import React from "react";
import styles from "./styles.module.scss";
import Title from "@/components/UI/Title";
import AdvantageItem from "./AdvantageItem";
import Translation from "../UI/Translation";

async function getData() {
  const res = await fetch(process.env.NEXT_PUBLIC_API + "/api/posts", {
    cache: "no-cache",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Advantages() {
  const advantages = await getData();

  return (
    <section id="advantages" className={styles.advantages}>
      <div className="wrapperBorderedContent sm:pt-80 pt-20">
        <div className="wrapperInside">
          <Title subtitle={<Translation keyCode="advantages.subtitle" />}>
            <Translation keyCode="advantages.title" />
          </Title>

          <div className={styles.cards}>
            {advantages?.map((advantage, id) => (
              <AdvantageItem key={advantage.id} advantage={advantage} id={id} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
