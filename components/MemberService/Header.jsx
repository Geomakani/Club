import React from "react";
import styles from "@/styles/hero.module.css";
import Image from "next/image";
import { BiChevronDown } from "react-icons/bi";
import Link from "next/link";

const Header = () => {
  function scrollToSportContent() {
    if (typeof document !== "undefined") {
      const element = document.getElementById("contracts");
      console.log(element);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }

  return (
    <>
      <div className={`w-full pt-[80px] relative ${styles.hero}`}>
        <div className="w-[85%] m-auto grid lg:grid-cols-2 grid-cols-1 justify-center items-center">
          <div className="hidden lg:block">
            <Image
              src="/assets/membership.png"
              alt=""
              width={450}
              height={450}
              className="lg:w-[500px] lg:h-[450px]"
            />
          </div>

          <div className="text-right mr-16 lg:mt-4 mt-4">
            <h1 className="lg:text-4xl text-5xl text-primary">
              {" "}
              عضويتك مش بس للنادي
            </h1>
            <div className="mt-6 mb-8 text-xl">
              <p>
                {" "}
                لأن في <span className="text-secondary"> النادي </span>{" "}
              </p>
              <p>هتلاقي تعاقدات و خصومات في اماكن كتير</p>
            </div>
            <button
              className="bg-secondary py-2 px-6 rounded-lg hover:bg-secondary2 hover:text-white text-lg text-primary "
              style={{ boxShadow: "4px 4px #001517" }}
            >
              <Link href={"/Membership"}>احصل على عضوية</Link>
            </button>
          </div>
        </div>
        <div className=" flex justify-center">
          <button
            className="bg-secondary2 py-2 px-6 rounded-lg hover:bg-secondary text-lg text-white relative lg:top-6 top-24"
            onClick={() => scrollToSportContent()}
          >
            <BiChevronDown className="inline mr-2" size={25} />
            عرض جميع التعاقدات
          </button>{" "}
        </div>
      </div>
      <div className="bg-secondary h-[3vh]" />
    </>
  );
};

export default Header;
