import React from "react";
import Navbar from "@/components/Navbar";
import Header from "@/components/tender/Header";
import Cards from "@/components/tender/Cards";
import Footer from "@/components/Footer";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

const Tender =()=>{
    const { t } = useTranslation("common");

    return (
        <>
            <Navbar/>
            <Header/>
             <Cards/>
            <Footer/>
        </>
    )
}
export async function getServerSideProps({ locale = "ar" }) {
    return {
      props: { ...(await serverSideTranslations(locale, ["common"])) },
    };
  }

export default Tender;