import React from "react";
import { useTranslation } from "react-i18next";

function Content() {
  const { t } = useTranslation();
  return (
    <div>
      <p>{t("Statement")}</p>
      <p>{t("Reason")}</p>
    </div>
  );
}

export default Content;
