import React from "react";
import Image from "next/image";
import Link from "next/link";

const ThreeD = ({ onClick }) => {
  return (
    <>
      <div
        className="flex flex-col gap-6 h-[570px] w-screen lg:h-[600px] lg:w-screen relative m-auto justify-center items-center"
        style={{
          backgroundImage: "url('/assets/playground.png')",
          objectFit: "cover",
          objectPosition: "center",
          backgroundRepeat: "no-repeat",
          position: "relative",
        }}
      >
        <div className="text-white text-center mx-1">
          <p className="text-2xl">الملاعب </p>
          <p className="text-lg">يمكنك الان اخذ جولة في ملعبنا بتقنية ْ360</p>
        </div>
        <Image
          src={"/assets/360-Degree-white 1.png"}
          width={250}
          height={250}
          alt=""
          className=""
        />
        <p className="text-white text-right text-lg">
          يمكنك حجز الملاعب اونلاين
        </p>

        <div className="flex justify-end">
          <button
            className="bg-secondary2 text-white py-2 px-8 rounded-lg hover:bg-secondary lg:text-xl text-lg   mt-6 flex justify-center"
            style={{ boxShadow: "4px 4px #000000" }}
            onClick={onClick}
          >
            حجز ملعب
          </button>
        </div>
      </div>
    </>
  );
};

export default ThreeD;
