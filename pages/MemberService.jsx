import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Header from "@/components/MemberService/Header";
import Cards from "@/components/MemberService/Cards";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
const MemberService = () => {
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

export default MemberService;
