"use client";
import { AppContext } from "@/context";
import React, { useContext } from "react";

export const TranslationMethod = (keyCode, translations, currentLang) => {
  return translations && currentLang === "en"
    ? translations.en?.[keyCode]
    : translations.tr?.[keyCode];
};

const Translation = ({ keyCode }) => {
  const { translations, currentLang } = useContext(AppContext);

  return (
    <>
      {translations && currentLang === "en"
        ? translations.en?.[keyCode]
        : translations.tr?.[keyCode]}
    </>
  );
};

export default Translation;
