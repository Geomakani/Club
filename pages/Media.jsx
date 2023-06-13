import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Gallery from "@/components/media/Gallery";
import MediaNews from "@/components/media/MediaNews";

const Media = () => {
  const { t } = useTranslation("common");

  return (
    <>
      <Navbar />
      <Gallery />
      {/* <MediaNews /> */}
      {/* <Footer /> */}
    </>
  );
};

export async function getServerSideProps({ locale = "ar" }) {
  return {
    props: { ...(await serverSideTranslations(locale, ["common"])) },
  };
}

export default Media;
