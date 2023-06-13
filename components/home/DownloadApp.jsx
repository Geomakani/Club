import React from "react";
import Link from "next/link";

const DownloadApp = () => {
  return (
    <div className=" bg-primary border">
      <div
        className=" flex flex-col h-[570px]  lg:h-[600px] w-screen relative  justify-center"
        style={{
          backgroundImage: "url('/assets/download.png')",
          objectFit: "cover",
          objectPosition: "center",
          backgroundRepeat: "no-repeat",
          position: "relative",
        }}
      >
        <div className="text-right text-white lg:mr-16 mr-6 mt-[6%]">
          <p className="lg:text-5xl text-3xl">! حمل الابلكيشن دلوقتي</p>
          <p className="lg:text-2xl py-6 text-lg">
            وخلي النادي معاك فى اي مكان
          </p>
        </div>

        <div className="flex justify-end">
          <button
            className="bg-secondary2 text-white py-2 px-8 rounded-lg hover:bg-secondary lg:text-xl text-lg  mr-16 mt-6 flex"
            style={{ boxShadow: "4px 4px #000000" }}
          >
            <Link href={"/NotReady"}>تحميل الان</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DownloadApp;
