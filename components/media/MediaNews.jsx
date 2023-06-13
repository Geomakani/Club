import React from "react";
import Image from "next/image";

const MediaNews = () => {
  return (
    <>
      <div className="flex flex-col items-end relative mb-4">
        <Image
          src="/assets/shape3.png"
          alt="shape"
          width={320}
          height={300}
          className="object-cover"
        />
        <p className="absolute top-0 right-16 w-full h-full flex items-center justify-end text-2xl text-white">
          النادي في الاعلام{" "}
        </p>
      </div>
    </>
  );
};

export default MediaNews;
