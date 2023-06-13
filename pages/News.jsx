import React from "react";
import { news } from "@/components/data/news";
import Hero from "@/components/home/Hero";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

const News = () => {
  const { t } = useTranslation("common");

  return (
    <>
      <Navbar />
      <Hero />

      <div className=" bg-primary pb-20">
        <div className="flex flex-col items-center relative py-12">
          <Image
            src="/assets/shapeBase2.png"
            alt="shape"
            width={300}
            height={300}
            className="object-cover"
          />
          <p className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-2xl text-white ">
            اخر الأخبار
          </p>
        </div>
        <div className="w-[85%] m-auto grid lg:grid-cols-4 grid-cols-2 gap-x-6 gap-y-16 ">
          {news.map((item) => (
            <div className="" key={item.id}>
              <Image src={item.image} alt="" width={300} height={300} />
              <h3 className="text-white my-4">{item.title}</h3>
              <div className="flex gap-4 text-xs  text-gray-300">
                <p>{item.date}</p>
                <p>{item.country}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps({ locale = "ar" }) {
  return {
    props: { ...(await serverSideTranslations(locale, ["common"])) },
  };
}

export default News;
