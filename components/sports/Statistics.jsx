import React from "react";
import Image from "next/image";

const Statistics = ({ sport }) => {
  return (
    <div className="relative lg:h-[97vh] ">
      <div className=" flex flex-col m-auto items-center  justify-between">
        <Image
          src={sport.playgroundImage}
          width={1600}
          height={350}
          alt="academyLogo"
          className=" w-[100%] "
        />
        <div className="lg:flex flex-row justify-between lg:w-[85%] items-center absolute bottom-0 px-16 hidden">
          <div className="border border-secondary2 rounded-full flex flex-col text-center text-white lg:text-sm w-[185px] h-[185px] justify-center items-center  bg-secondary2">
            <Image
              src={"/assets/Vector11.png"}
              width={50}
              height={50}
              alt="players"
              className="sm:w-9"
            />
            <p>اكثر من </p>
            <span>{sport.playersNum}</span>
            <p>لاعب</p>
          </div>
          <div className="border border-secondary2 rounded-full flex flex-col text-center text-white lg:text-sm w-[185px] h-[185px] justify-center items-center  bg-secondary2">
            <Image
              src={"/assets/coaches.png"}
              width={50}
              height={50}
              alt="coaches"
            />
            <p>اكثر من</p>
            <span>{sport.coachesNum}</span>
            <p>مدرب معتمد</p>
          </div>
          <div className="border border-secondary2 rounded-full flex flex-col text-center text-white lg:text-sm w-[185px] h-[185px] justify-center items-center  bg-secondary2">
            <Image src={"/assets/ages.png"} width={50} height={50} alt="ages" />
            <p>اكثر من</p>
            <span>{sport.ages}</span>
            <p>مراحل عمرية</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
