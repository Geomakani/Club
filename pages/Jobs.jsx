import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Header from "@/components/Jobs/Header";
import Cards from "@/components/Jobs/Cards";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
const Jobs = () => {
  const { t } = useTranslation("common");

  return (
    <>
      <Navbar />
      <Header />
      <Cards />
      <Footer />
    </>
  );
};

export async function getServerSideProps({ locale = "ar" }) {
  return {
    props: { ...(await serverSideTranslations(locale, ["common"])) },
  };
}

export default Jobs;
