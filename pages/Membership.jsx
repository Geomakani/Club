import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Hero from "@/components/membership/Hero";
import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import KnowUs from "@/components/membership/KnowUs";
import Contact from "@/components/membership/Contact";
import Form from "../components/membership/membershipForm";
import { useState } from "react";

const Membership = () => {
  const { t } = useTranslation("common");
  const [formIsVisible, setFormIsVisible] = useState(false);

  const onClickFormButton = () => {
    setFormIsVisible(!formIsVisible);
  };

  return (
    <>
      <Navbar />
      {formIsVisible && <Form onClose={onClickFormButton} />}
      <Hero onClick={onClickFormButton} />
      <KnowUs />
      <Contact />
      <Footer />
    </>
  );
};

export async function getServerSideProps({ locale = "ar" }) {
  return {
    props: { ...(await serverSideTranslations(locale, ["common"])) },
  };
}

export default Membership;
