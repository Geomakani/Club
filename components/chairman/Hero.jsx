import React from "react";
import styles from "@/styles/hero.module.css";
import Image from "next/image";

const Hero = () => {
  return (
    <>
      <div
        className={`w-full pt-[80px] relative flex overflow-hidden ${styles.hero}`}
      >
        <h1 className="hidden lg:block lg:text-6xl text-3xl absolute lg:top-[40%] lg:left-[25%] ">
          رئيس مجلس الادارة
        </h1>
        <Image
          src="/assets/shapeBase3.png"
          alt=""
          width={300}
          height={300}
          className="hidden lg:block lg:w-[300px] lg:h-[350px]  absolute bottom-0 mb-[-140px] ml-[-24px]"
        />
        <Image
          src="/assets/circle2.png"
          alt=""
          width={500}
          height={500}
          className="hidden lg:block lg:w-[550px] lg:h-[500px]  z-1 absolute right-0"
        />
        {/* <Image
          src="/assets/chairman.png"
          alt="chairman.png"
          width={550}
          height={550}
          className="z-2 absolute bottom-0 mb-[-13px]  right-0 lg:w-[550px] lg:h-[550px] w-[450px] h-[450px] "
        /> */}
      </div>
      <div className="bg-secondary h-[3vh]" />
    </>
  );
};

export default Hero;
