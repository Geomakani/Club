import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
// import styles from "@/styles/Home.module.css";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/home/Hero";
import Playgrounds from "@/components/home/Playgrounds";
import News from "@/components/home/News";
import Sports from "@/components/home/Sports";
import ThreeD from "@/components/home/ThreeD.jsx";
import Partners from "@/components/home/Partners";
import Map from "@/components/home/Map";
import DownloadApp from "@/components/home/DownloadApp";
import Footer from "@/components/Footer";
import { news } from "@/components/data/news";
import { useContext } from "react";
import { MyAppContext } from "./_app.js";
import { useState } from "react";
import Form from "@/components/popupForm/Form";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { t } = useTranslation("common");

  const [formIsVisible, setFormIsVisible] = useState(false);
  const { clickedSport, setClickedSport } = useContext(MyAppContext);
  const onClickFormButton = () => {
    setFormIsVisible(!formIsVisible);
  };

  return (
    <>
      <Navbar />
      <Hero />
      <Playgrounds />
      <News news={news} />{" "}
      <Sports clickedSport={clickedSport} setClickedSport={setClickedSport} />
      {formIsVisible && (
        <Form onClose={onClickFormButton} bookName="الملعب" headerName="ملعب" />
      )}
      <ThreeD onClick={onClickFormButton} />
      <Partners />
      <DownloadApp />
      <Map />
      <Footer />
    </>
  );
}

export async function getServerSideProps({ locale = "ar" }) {
  return {
    props: { ...(await serverSideTranslations(locale, ["common"])) },
  };
}
