import React from "react";
import Image from "next/image";

const Title = ({ title, titleBack }) => {
  return (
    <div className="flex flex-col items-end relative mb-4">
      <Image
        src={titleBack}
        alt="shape"
        width={320}
        height={300}
        className="object-cover"
      />
      <p className="absolute top-0 right-12 w-full h-full flex items-center justify-end text-2xl text-white">
        {title}
      </p>
    </div>
  );
};

export default Title;
