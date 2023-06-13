import React from "react";
import Image from "next/image";
import { contract } from "../data/contract";
import Link from "next/link";

const Cards = () => {
  return (
    <div className=" w-[85%] m-auto my-8 flex flex-col " id="contracts">
      {contract.map((item) => (
        <div
          className="  flex lg:w-[55%] my-4 items-center m-auto shadow-xl shadow-slate-500 rounded-lg overflow-hidden"
          key={item.id}
        >
          <div className=" bg-secondary2 justify-center " style={{}}>
            <Image
              src={item.image}
              alt=""
              width={250}
              height={250}
              className=" float-right ml-2 hidden lg:block"
            />
            <div className="flex flex-row text-xs my-4 justify-between text-gray-300  mr-8">
              <p className=" ml-4 ">{item.time}</p>
              <p className="ml-5 ">{item.title}</p>
            </div>
            <h3 className="text-white text-right m-5 ">{item.contname}</h3>
            <p className=" text-slate-300 text-sm m-4 text-right ">
              {" "}
              {item.content}
            </p>
            <div className="flex flex-row justify-between mt-2 mb-4  mr-4">
              <p className="text-2xl text-gray-300 ml-6 mt-2">
                {item.discount}
              </p>
              <button
                className="bg-secondary flex mt-2 py-1 px-6 rounded-lg hover:bg-teal-700 hover:text-white text-lg text-primary "
                style={{ boxShadow: "4px 4px #001517" }}
              >
                <Link href={"/NotReady"}>{item.button}</Link>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
