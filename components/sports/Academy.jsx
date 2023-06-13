import React from "react";
import Image from "next/image";

const Academy = ({ sport }) => {
  return (
    <div className=" bg-primary pb-12">
      <div className="flex flex-col lg:w-[85%] w-[90%] m-auto justify-end text-right  ">
        <div className="flex flex-col items-end relative top-12">
          <Image
            src="/assets/shape3.png"
            alt="shape"
            width={350}
            height={300}
            className="object-cover "
          />
          <p className="absolute top-0 lg:right-8 right-10 w-full h-full flex items-center justify-end lg:text-xl text-lg text-white">
            {sport.academyName}
          </p>{" "}
        </div>{" "}
        <div className=" flex lg:flex-row flex-col m-auto items-center lg:gap-20 ">
          <Image
            src={sport.academyLogo}
            width={350}
            height={300}
            alt="academyLogo"
            className=" lg:ml-12 pb-4 lg:w-[200] mt-20 lg:mt-0"
          />
          <p className="text-lg text-white p-4 mt-4 items-center">
            {sport.academyContent}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Academy;
