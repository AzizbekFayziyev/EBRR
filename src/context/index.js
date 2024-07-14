"use client";
import { getTranslations } from "@/services";
import { createContext, useEffect, useState } from "react";
export const AppContext = createContext();

const ContextWrapper = ({ children }) => {
  const [currentLang, setLang] = useState("tr");
  const [translations, setTranslations] = useState({});

  useEffect(() => {
    const getAllTranslations = async () => {
      const en = await getTranslations("en");
      const tr = await getTranslations("tr");

      setTranslations({ tr: tr, en: en });
    };

    getAllTranslations();
    // Saved language
    const savedLang = localStorage.getItem("lang");

    if (savedLang) {
      setLang(savedLang);
    }
  }, []);

  const value = { setLang, currentLang, translations, setTranslations };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default ContextWrapper;
