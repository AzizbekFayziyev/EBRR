import Title from "@/components/UI/Title";
import React from "react";
import styles from "./styles.module.scss";
import ServiceItem from "./ServiceItem";
import Translation from "../UI/Translation";

async function getData() {
  const res = await fetch("https://verel-auto.uz" + "/api/portfolios");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Services() {
  const services = await getData();

  return (
    <section id="services" className={styles.services}>
      <div className="wrapperBorderedContent pt-20">
        <Title align="text-center" subtitle={<Translation keyCode="services.subtitle" />}>
        <Translation keyCode="services.title" />
        </Title>

        <div className={styles.cards}>
          {services?.map((service) => (
            <ServiceItem service={service} img={"https://verel-auto.uz/storage/"} key={service.id} />
          ))}
        </div>
      </div>
    </section>
  );
}