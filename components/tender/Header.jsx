import React from "react";
import styles from "@/styles/hero.module.css";
import Image from "next/image";
import { BiChevronDown } from "react-icons/bi";

const Header =()=>{
    function scrollToSportContent() {
        if (typeof document !== "undefined") {
          const element = document.getElementById("tenders");
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
              src="/assets/tenderheader.png"
              alt="shops"
              width={450}
              height={450}
              className="lg:w-[450px] lg:h-[500px] w-[300px] h-[300px]"
            />
          </div>

          <div className="text-right mr-16 lg:mt-4 mt-16">
            <h1 className=" text-3xl text-primary">
              {" "}
              المناقصات{" "}
            </h1>
            <div className="mt-6 mb-8 text-xl">
              <p>
                {" "}
                لأن في
                <span className="text-secondary"> النادي </span>{" "}
              </p>
              <p> دايما في مكان للكل للمشاركة بكل شفافية</p>
            </div>
            <button
              className="bg-secondary2 py-2 px-6 rounded-lg hover:bg-secondary text-lg text-white relative lg:top-6 top-24"
              onClick={() => scrollToSportContent()}
            >
              <BiChevronDown className="inline mr-2" size={25} />
              عرض المناقصات
            </button>{" "}
          </div>
        </div>
      </div>
      <div className="bg-secondary h-[3vh]" />
        </>
    )
}

export default Header;