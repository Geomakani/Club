import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

const BoardMembers = () => {
  const { t } = useTranslation("common");

  return (
    <>
      <Navbar />
      {/* <Footer /> */}
    </>
  );
};

export async function getServerSideProps({ locale = "ar" }) {
  return {
    props: { ...(await serverSideTranslations(locale, ["common"])) },
  };
}

export default BoardMembers;
