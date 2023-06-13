import React from "react";
import Image from "next/image";
import Link from "next/link";

const SportHeader = ({ sport, onClick }) => {
  return (
    <>
      <div className='bg-[url("/assets/sportBack.png")] bg-cover h-[100vh] relative text-right'>
        <div className="absolute bottom-0 ">
          <div className="w-[80%] flex lg:justify-between m-auto lg:pr-12 lg:pl-4 justify-center">
            <Image
              src={sport.headerImage}
              alt={sport.name}
              width={480}
              height={400}
              className="relative hidden lg:block"
            />

            <div className="lg:mt-16 lg:mb:0 mb-24">
              <div className="flex justify-end ">
                <Image
                  src="/assets/Logo-2.png"
                  alt={sport.name}
                  width={150}
                  height={100}
                />
              </div>

              <h1 className="text-5xl my-2">{sport.name}</h1>
              <p className="mb-1">في النادي</p>
              <p> جبنالك الأفضل في كل الملاعب</p>
              <button
                className="bg-secondary2 py-2 px-8 hover:bg-secondary text-lg mt-12"
                style={{ boxShadow: "3px 3px" }}
                onClick={onClick}
              >
                اشترك الآن
              </button>
            </div>
          </div>

          <div className="h-4 w-screen bg-secondary" />
        </div>
      </div>
    </>
  );
};

export default SportHeader;
