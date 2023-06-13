import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import Image from "next/image";

const Hero = ({ onClick }) => {
  return (
    <>
      <div
        className={`w-full pt-[80px] relative flex  lg:h-[97vh] bg-[url("/assets/signBackground.png")]`}
      >
        <div className="w-[85%] m-auto grid lg:grid-cols-2 grid-cols-1 gap-y-6">
          <div className="justify-center items-center flex">
            <div className="  items-center grid lg:grid-cols-2 grid-cols-1 gap-y-4">
              <div className="w-[320px] mr-[-16px] z-10">
                <div className="relative bg-secondary2 rounded-lg lg:h-[400px] h-[350px] w-[290px] flex justify-center items-center left-4">
                  <div
                    className="absolute p-4 bg-gray-300 rounded-lg h-[85%] w-[320px] "
                    style={{ "box-shadow": "3px 3px  20px black" }}
                  >
                    <h1 className="text-[gold] font-bold text-4xl text-center">
                      مميزة
                    </h1>
                    <p className="text-center text-sm mt-2 mb-6">عضوية كاملة</p>
                    <div className="text-right  flex flex-col gap-y-2">
                      <p>
                        تقسيط على ٣٠ شهر
                        <MdKeyboardArrowRight
                          className="inline-block font-bold"
                          size={25}
                        />
                      </p>
                      <p>
                        أنظمة سداد مختلفة
                        <MdKeyboardArrowRight
                          className="inline-block font-bold"
                          size={25}
                        />
                      </p>
                      <p>
                        عضوية تمنحك جميع الامتيازات
                        <MdKeyboardArrowRight
                          className="inline-block font-bold"
                          size={25}
                        />
                      </p>{" "}
                      <p>
                        عضوية لأكثر من فرع
                        <MdKeyboardArrowRight
                          className="inline-block font-bold"
                          size={25}
                        />
                      </p>{" "}
                    </div>
                  </div>
                  {/* <div className="flex justify-center absolute lg:bottom-12 bottom-10 w-full">
                    <button className="bg-secondary2 rounded-md text-white py-2 w-1/2  ">
                      اشتراك
                    </button>
                  </div> */}
                </div>
              </div>

              <div className="w-[320px] ">
                <div className="relative bg-secondary2 rounded-lg lg:h-[350px] h-[340px] w-[280px] flex justify-center items-center left-4">
                  <div className="absolute p-4 bg-gray-300 rounded-lg h-[85%] w-[310px] ">
                    <h1 className="text-gray-500 font-bold text-4xl text-center">
                      فضية
                    </h1>
                    <p className="text-center text-sm mt-2 mb-6">عضوية كاملة</p>
                    <div className="text-right  flex flex-col gap-y-1">
                      <p>
                        تقسيط على ٣٠ شهر
                        <MdKeyboardArrowRight
                          className="inline-block font-bold"
                          size={25}
                        />
                      </p>
                      <p>
                        أنظمة سداد مختلفة
                        <MdKeyboardArrowRight
                          className="inline-block font-bold"
                          size={25}
                        />
                      </p>
                      <p>
                        عضوية تمنحك جميع الامتيازات
                        <MdKeyboardArrowRight
                          className="inline-block font-bold"
                          size={25}
                        />
                      </p>{" "}
                      <p>
                        عضوية لأكثر من فرع
                        <MdKeyboardArrowRight
                          className="inline-block font-bold"
                          size={25}
                        />
                      </p>{" "}
                    </div>
                  </div>
                  {/* <div className="flex justify-center absolute lg:bottom-12 bottom-10 w-full">
                    <button className="bg-secondary2 rounded-md text-white py-2 w-1/2  ">
                      اشتراك
                    </button>
                  </div> */}
                </div>
              </div>
            </div>
          </div>

          <div className="text-white lg:mt-12">
            <div className="text-right mr-16 lg:mt-4 ">
              <h1 className="lg:text-7xl text-5xl ">
                {" "}
                ! احسبها <span className="text-secondary">صح </span>
              </h1>
              <div className="mt-6 mb-8 lg:text-xl text-lg">
                <p> دلوقتي تقدر تشترك في النادي</p>
                <p>! وتقسط على 30 شهر</p>
              </div>
            </div>
            <div className="lg:mt-12 flex flex-row-reverse items-center lg:gap-16 gap-4">
              <button
                onClick={onClick}
                className="bg-secondary2 py-2 lg:px-8 px-4  hover:bg-secondary hover:text-white text-lg lg:h-[50px]"
                style={{ boxShadow: "-4px -4px white" }}
              >
                سجل عضوية
              </button>
              <Image
                src="/assets/hotline 1.png"
                alt="hotline"
                width={150}
                height={150}
                className="w-[150px] lg:h-[150px] h-[100px]"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-secondary h-[3vh]" />
    </>
  );
};

export default Hero;
