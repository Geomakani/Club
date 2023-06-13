import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Hero from "@/components/shops/Hero";
import ShopsContent from "@/components/shops/ShopsContent";
import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

const Shops = () => {
  const { t } = useTranslation("common");

  return (
    <>
      <Navbar />
      <Hero />
      <ShopsContent />
      <Footer />
    </>
  );
};

export async function getServerSideProps({ locale = "ar" }) {
  return {
    props: { ...(await serverSideTranslations(locale, ["common"])) },
  };
}

export default Shops;
