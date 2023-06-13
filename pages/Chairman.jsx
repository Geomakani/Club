import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Content from "@/components/chairman/Content";
import Hero from "@/components/chairman/Hero";
import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

const Chairman = () => {
  const { t } = useTranslation("common");

  return (
    <>
      <Navbar />
      <Hero />
      <Content />
      {/* <Footer /> */}
    </>
  );
};

export async function getServerSideProps({ locale = "ar" }) {
  return {
    props: { ...(await serverSideTranslations(locale, ["common"])) },
  };
}

export default Chairman;
