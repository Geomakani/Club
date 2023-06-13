import Navbar from "@/components/Navbar";
import Hero from "@/components/halls/Hero";
import React from "react";
import HallsContent from "@/components/halls/HallsContent";
import Footer from "@/components/Footer";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

const Halls = () => {
  const { t } = useTranslation("common");

  return (
    <>
      <Navbar />
      <Hero />
      <HallsContent />
      <Footer />
    </>
  );
};

export async function getServerSideProps({ locale = "ar" }) {
  return {
    props: { ...(await serverSideTranslations(locale, ["common"])) },
  };
}

export default Halls;
