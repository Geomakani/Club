import React from "react";
import { halls } from "@/components/data/halls";
import Image from "next/image";
import Link from "next/link";

const HallsContent = () => {
  return (
    <div id="sportContent" className="">
      <div className="w-[85%] m-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-6 gap-y-12 py-20">
        {halls.map((item) => (
          <div
            className=" rounded-md flex flex-col overflow-hidden"
            style={{ boxShadow: "8px 8px 5px lightgray" }}
            key={item.id}
          >
            <div className="bg-secondary w-full h-[220px] ">
              {/* <Image src={item.image} alt="" width={400} height={450} /> */}
            </div>

            <div className="px-4 py-6 bg-white ">
              <div className="flex flex-row-reverse justify-between mb-4">
                <h3 className="font-bold text-xl">{item.name}</h3>
                <span className="text-gray-400">{item.productType}</span>
              </div>
              <p className="text-center mb-4 text-gray-800">{item.content}</p>
              <div className="flex flex-row-reverse justify-between">
                <button
                  className="bg-secondary py-1 px-6 rounded-lg hover:bg-secondary2 hover:text-white text-lg text-primary "
                  style={{ boxShadow: "4px 4px #001517" }}
                >
                  <Link href={"/HallDetails"}> تفاصيل أكتر</Link>
                </button>
                {/* <button
                  className="bg-secondary py-1 px-6 rounded-lg hover:bg-secondary2 hover:text-white text-lg text-primary "
                  style={{ boxShadow: "4px 4px #001517" }}
                >
                  <Link href={"/NotReady"}> حجز القاعة</Link>
                </button> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HallsContent;
