import React from "react";
import Image from "next/image";
// import "@/styles/Home.module.css";
import Carousel from "./Carousel";
import Link from "next/link";

const Hero = () => {
  const data = [
    {
      id: 1,
      image: "/assets/homeHero1.png",
      header: "النادي قربلك",
    },
    {
      id: 2,
      image: "/assets/homeHero2.png",
      header: "النادي اجتماعي ورياضي",
    },
    {
      id: 3,
      image: "/assets/homeHero3.png",
      header: "النادي مجتمع الأبطال",
    },
  ];

  return (
    <div className="w-full pt-[70px]">
      <Carousel>
        {data.map((item) => (
          <div className="relative h-[88vh] " key={item.id}>
            <Image src={item.image} alt="" layout="fill" objectFit="cover" />
            <img
              src="/assets/sliderLayer.png"
              alt=""
              className="relative w-full h-full"
            />
            <Image
              src="/assets/designCircle.png"
              alt=""
              width={500}
              height={500}
              className="hidden lg:block absolute lg:right-[10%] md:right-[10%] top-[15%] "
            />

            <div className="text-white absolute right-[15%]  top-[48%] font-bold z-[3] text-right ">
              <h1 className="lg:text-5xl text-2xl z-[5] [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">
                {item.header.split(" ").map((word, index) => (
                  <span
                    key={index}
                    className={index === 0 ? "text-secondary" : ""}
                  >
                    {word}{" "}
                  </span>
                ))}
              </h1>
              <p className="lg:text-xl text-md mt-6 mb-4 md:mt-8 drop-shadow-lg [text-shadow:_0_1px_0_rgb(0_0_0_/_50%)]">
                دلوقتي في شيراتون
              </p>
              <button
                className="bg-secondary2 py-2 px-6 rounded-lg hover:bg-secondary lg:text-xl text-lg"
                style={{ boxShadow: "3px 3px" }}
              >
                <Link href="/Membership">تفاصيل العضويات</Link>
              </button>
            </div>
          </div>
        ))}
      </Carousel>
      <div className="bg-secondary h-[10px]" />
    </div>
  );
};
export default Hero;
