import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Header from "@/components/About/Header";
import Content from "@/components/About/Content";
import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

const About = () => {
  const { t } = useTranslation("common");

  return (
    <>
      <Navbar />
      <Header />
      <Content />
      <Footer />
    </>
  );
};

export async function getServerSideProps({ locale = "ar" }) {
  return {
    props: { ...(await serverSideTranslations(locale, ["common"])) },
  };
}

export default About;
