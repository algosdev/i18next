import React from "react";
import Navbar from "./components/Navbar";
import Content from "./components/Content";
// import { useTranslation, Trans } from "react-i18next";

function App() {
  // const { i18n } = useTranslation();
  // const handleClick = (lang) => {
  //   i18n.changeLanguage(lang);
  // };
  return (
    <div className="App">
      <Navbar />
      <Content />
      {/* <div>
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
        <div>
          <Trans i18nKey="Statement">This should be translated</Trans>
          <Trans i18nKey="Reason">Beacuse it is what it does</Trans>
          <p>{t("Statement")}</p>
          <p>{t("Reason")}</p>
        </div>
      </div> */}
    </div>
  );
}

export default App;
