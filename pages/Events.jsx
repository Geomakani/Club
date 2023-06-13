import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Sliders from "@/components/Sliders";
import ImageSlider from "@/components/events/ImageSlider";
import Celendar from "@/components/events/Celendar";
import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

const Events = () => {
  const { t } = useTranslation("common");

  return (
    <>
      <Navbar />
      <Sliders />
      <Celendar />
      <ImageSlider />
      <Footer />
    </>
  );
};

export async function getServerSideProps({ locale = "ar" }) {
  return {
    props: { ...(await serverSideTranslations(locale, ["common"])) },
  };
}

export default Events;
