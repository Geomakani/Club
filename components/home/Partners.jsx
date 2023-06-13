import React from "react";
import Image from "next/image";
import CenterTitle from "../CenterTitle";

const Partners = () => {
  const data = [
    {
      id: 1,
      image: "/assets/geomakani.jpg",
    },
    {
      id: 2,
      image: "/assets/partner2.png",
    },
  ];
  return (
    <div className="bg-primary py-12">
      <CenterTitle title="شركاء النجاح" titleBack="/assets/shapeBase2.png" />

      <div className="lg:flex lg:flex-row grid grid-cols-2 m-auto gap-16 w-[85%] mt-8">
        {data.map((item) => (
          <Image
            src={item.image}
            alt="partner"
            width={200}
            height={200}
            key={item.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Partners;
