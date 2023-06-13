import React from "react";
import Image from "next/image";

const CenterTitle = ({ title, titleBack }) => {
  return (
    <div className="flex flex-col items-center relative">
      <Image
        src={titleBack}
        alt="title"
        width={300}
        height={300}
        className="object-cover"
      />
      <p className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-2xl text-white">
        {title}
      </p>
    </div>
  );
};

export default CenterTitle;
