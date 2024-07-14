"use client";
import React, { useContext, useEffect, useState } from "react";
import styles from "./styles.module.scss";
import Title from "@/components/UI/Title";
import Button from "@/components/UI/Button";
import { ChevronsRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Translation, { TranslationMethod } from "../UI/Translation";
import { AppContext } from "@/context";
import { postForm } from "@/services";

const Contact = () => {
  const { translations, currentLang } = useContext(AppContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    const res = await postForm(name, email, message);

    console.log(res);

    alert("Message sended successfully");

 
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className="wrapperBorderedContent py-20">
        <div className={styles.content}>
          <form onSubmit={onSubmit} className={styles.form}>
            <Title subtitle={<Translation keyCode="form.subtitle" />}>
              <Translation keyCode="form.title" />
            </Title>

            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              type="text"
              placeholder={TranslationMethod(
                "form.name",
                translations,
                currentLang
              )}
            />

            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              type="email"
              placeholder={TranslationMethod(
                "form.email",
                translations,
                currentLang
              )}
            />

            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={8}
              placeholder={TranslationMethod(
                "form.message",
                translations,
                currentLang
              )}
            />

            <Button>
              <Translation keyCode="form.button" /> <ChevronsRight />
            </Button>
          </form>

          <div className={styles.info}>
            <h2>
              <Translation keyCode="contact.title" />
            </h2>

            <div className={styles.infoItems}>
              <div className={styles.itemFlex}>
                <div className={styles.item}>
                  <h5>
                    <Translation keyCode="contact.addressTitle" />
                  </h5>
                  <h6>
                    <Translation keyCode="contact.address" />
                  </h6>
                </div>

                <div className={styles.item}>
                  <h5>
                    <Translation keyCode="contact.social" />
                  </h5>

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

              <div className={styles.item}>
                <h5>
                  <Translation keyCode="contact.addressTitle2" />
                </h5>
                <h6>
                  <Translation keyCode="contact.address2" />
                </h6>
              </div>

              <div className={styles.itemFlex}>
                <div className={styles.item}>
                  <h5>
                    <Translation keyCode="contact.email" />
                  </h5>
                  <Link href="mailto:info@ekipmanisguvenlik.com">
                    info@ekipmanisguvenlik.com
                  </Link>
                </div>

                <div className={styles.item}>
                  <h5>
                    <Translation keyCode="contact.tel" />
                  </h5>
                  <Link className="whitespace-nowrap" href="tel:+905353294507">
                    +90 535 329 4507
                  </Link>
                </div>
              </div>
            </div>

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2999.2635113177857!2d69.27657607591166!3d41.25959807131635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae6005c5142bf3%3A0xe04bf246835d2d7f!2sTashkent%20International%20Airport!5e0!3m2!1sen!2s!4v1720806462278!5m2!1sen!2s"
              className={styles.map}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
