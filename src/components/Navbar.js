import React from "react";
import { useTranslation } from "react-i18next";
function Navbar() {
  const { i18n } = useTranslation();
  const handleClick = (lang) => {
    i18n.changeLanguage(lang);
  };
  return (
    <div>
      <button
        onClick={() => {
          handleClick("en");
        }}
      >
        English
      </button>
      <button
        onClick={() => {
          handleClick("ru");
        }}
      >
        Russian
      </button>
      <button
        onClick={() => {
          handleClick("uz");
        }}
      >
        Uzbek
      </button>
    </div>
  );
}

export default Navbar;
