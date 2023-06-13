import React from "react";
import Image from "next/image";
import Link from "next/link";
import CenterTitle from "../CenterTitle";

const News = ({ news }) => {
  return (
    <div className="bg-primary py-12">
      <CenterTitle title="أهم الأخبار" titleBack="/assets/shapeBase2.png" />

      <div className="grid lg:grid-cols-5 grid-cols-2 gap-x-6 gap-y-12 w-[85%] m-auto mt-8">
        {news.slice(0, 5).map((item) => (
          <div className="" key={item.id}>
            <Image src={item.image} alt="" width={300} height={300} />
            <h3 className="text-white my-4">{item.title}</h3>
            <div className="flex gap-4 text-xs  text-gray-300">
              <p>{item.date}</p>
              <p>{item.country}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <button
          className="bg-secondary2 text-white lg:text-xl px-12 py-2 hover:bg-secondary m-auto mt-12 "
          style={{ boxShadow: "-3px -3px " }}
        >
          <Link href="/News">المزيد</Link>
        </button>
      </div>
    </div>
  );
};

export default News;
