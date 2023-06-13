import React from "react";
import Image from "next/image";
import Link from "next/link";

const ElNadyBranches = () => {
  return (
    <div
      className="w-screen h-screen relative bg-cover bg-center bg-no-repeat "
      style={{
        backgroundImage: "url('/assets/branchesImage.png')",
      }}
    >
      <div className="flex flex-col justify-between ">
        <div className=" ">
          <Image
            src={"/assets/Logo-2.png"}
            width={180}
            height={180}
            alt="logo"
            className=" absolute lg:right-4 align-top lg:p-4 p-4 mt-6 right-0 lg:w-[180px] w-[150px]"
          />{" "}
          <div className="text-white text-right  absolute lg:right-44 lg:top-14 right-32 top-20 ">
            <p className="lg:text-xl text-md">سلسة فروع نادي النادي</p>{" "}
            <p className="lg:text-md text-sm">اقربلك في كل مكان </p>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-evenly w-screen pt-32 ">
        <div className="   ">
          <Image
            src={"/assets/Converted 1.png"}
            width={200}
            height={200}
            alt=""
            className=""
          />
        </div>
        <div className="   ">
          <Image
            src={"/assets/Converted 2.png"}
            width={200}
            height={200}
            alt=""
            className=""
          />
        </div>
        <div className="  ">
          <Image
            src={"/assets/Converted 3.png"}
            width={200}
            height={200}
            alt=""
            className=""
          />
        </div>
      </div>
      <div className="  absolute top-0">
        <Image
          src={"/assets/clouds.png"}
          width={850}
          height={100}
          alt="clouds"
          className="lg:w-[850px] w-[300px]"
        />
      </div>

      <div className="flex justify-end">
        <div className="flex flex-row justify-evenly gap-4 lg:w-[40%] w-[10%] relative right-40">
          <div className="flex flex-col justify-center items-center">
            <Image
              src={"/assets/Logo-2.png"}
              width={100}
              height={100}
              alt="العاصمة"
              className="lg:w-[100px] w-10"
            />
            <p className="text-center text-white lg:text-sm text-[10px]">
              فرع العاصمة
            </p>
            <Image
              src={"/assets/vector14.png"}
              width={50}
              height={100}
              alt=""
              className="lg:w-[50px] w-7"
            />
          </div>

          <div className="flex flex-col justify-center items-center ">
            <Link href="/">
              <Image
                src={"/assets/Logo-2.png"}
                width={100}
                height={100}
                alt="شيراتون"
                className="lg:w-[100px] w-10"
              />
              <p className="text-center text-white text-sm">فرع الشيراتون</p>
              <Image
                src={"/assets/vector14.png"}
                width={50}
                height={100}
                alt=""
                className="lg:w-[50px] w-7 ml-6"
              />
            </Link>
          </div>

          <div className="flex flex-col justify-center items-center">
            <Image
              src={"/assets/Logo-2.png"}
              width={100}
              height={100}
              alt="اكتوبر"
              className="lg:w-[100px] w-10"
            />
            <p className="text-center text-white text-sm">فرع اكتوبر</p>
            <Image
              src={"/assets/vector14.png"}
              width={50}
              height={100}
              alt=""
              className="lg:w-[50px] w-7"
            />
          </div>
        </div>
      </div>
      <div className=" absolute bottom-2 left-4 lg:p-8 p-2">
        <Image
          src={"/assets/hotline 1.png"}
          width={200}
          height={100}
          alt="hotline"
          className="lg:w-[200px] w-[120px]"
        />
      </div>
    </div>
  );
};

export default ElNadyBranches;
