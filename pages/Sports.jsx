import React from "react";
import Hero from "@/components/sports/Hero";
import Navbar from "@/components/Navbar";
import { sports } from "@/components/data/sports";
import Content from "@/components/sports/Content";
import { useContext } from "react";
import { MyAppContext } from "./_app.js";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Form from "../components/popupForm/Form";
import { useState } from "react";

const Sports = () => {
  const { t } = useTranslation("common");

  const [formIsVisible, setFormIsVisible] = useState(false);
  const { clickedSport, setClickedSport } = useContext(MyAppContext);

  const onClickFormButton = () => {
    setFormIsVisible(!formIsVisible);
  };

  return (
    <>
      <Navbar />
      {formIsVisible && (
        <Form
          onClose={onClickFormButton}
          bookName="المدرسة الرياضية"
          headerName="نشاط رياضي"
        />
      )}
      <Hero sports={sports} setClickedSport={setClickedSport} />
      <Content
        sports={sports}
        clickedSport={clickedSport}
        onClick={onClickFormButton}
      />
    </>
  );
};

export async function getServerSideProps({ locale = "ar" }) {
  return {
    props: { ...(await serverSideTranslations(locale, ["common"])) },
  };
}

export default Sports;
