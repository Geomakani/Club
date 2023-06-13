import React from "react";
import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import Back from "@/components/Back";

const HallDetails = () => {
  const data = [
    {
      id: 1,
      image: "/assets/place1.png",
    },
    {
      id: 2,
      image: "/assets/place1.png",
    },
    {
      id: 3,
      image: "/assets/place1.png",
    },
    {
      id: 4,
      image: "/assets/place1.png",
    },
    {
      id: 5,
      image: "/assets/place1.png",
    },
  ];

  const [selected, setSelected] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  function handleNext(e) {
    setSelected((selected + 1 + data.length) % data.length);
  }

  function handlePrev(e) {
    setSelected((selected - 1 + data.length) % data.length);
  }

  return (
    <div className="flex">
      <div className="text-white z-[100] relative">
        <Back to="/Halls" title="العودة" />
      </div>

      <div className="lg:w-[80%] m-auto px-4 mb-8 relative">
        <div className="flex gap-2 justify-center items-center m-auto relative transition-all duration-500">
          <FaArrowLeft
            size={100}
            onClick={handlePrev}
            className="bg-gray-400 text-white w-12 h-20 p-2 cursor-pointer hover:bg-gray-500"
          />
          {data.map((item, index) => (
            <div className="" key={item.id}>
              <div
                className={`slider-item ${
                  selected === index
                    ? "relative left-0 opacity-100"
                    : "opacity-0"
                }`}
              >
                {selected === index && (
                  <>
                    <div className="flex lg:flex-row flex-col items-center lg:gap-8 gap-3 lg:p-10 py-2 ">
                      <Image
                        src={item.image}
                        alt="hero"
                        width={600}
                        height={300}
                        className="lg:w-[600px] lg:h-[300px]  w-[350px] h-[200px] "
                      />
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}

          <FaArrowRight
            size={100}
            onClick={handleNext}
            className="bg-gray-400 text-white w-12 h-20 p-2 cursor-pointer hover:bg-gray-500"
          />
        </div>

        <div className="flex lg:gap-4 gap-1 justify-center mb-16 ">
          {data.map((item) => (
            <img
              src={item.image}
              alt="hero"
              key={item.id}
              onClick={() => setSelected(item.id - 1)}
              className="cursor-pointer lg:h-[90px] lg:w-[150px] h-[55px] w-[65px]"
            />
          ))}
        </div>

        <div className="flex lg:flex-row-reverse flex-col items-end mt-4 lg:gap-12 gap-4 mx-2">
          <div className="text-right">
            <h3 className="text-3xl mb-4">اسم القاعة</h3>
            <p>
              هنا يكتب بعض التفاصيل عن القاعة هنا يكتب بعض التفاصيل عن القاعة
              هنا يكتب بعض التفاصيل عن القاعة هنا يكتب بعض التفاصيل عن القاعة
              هنا يكتب بعض التفاصيل عن القاعة{" "}
            </p>
          </div>
          <button
            className="bg-secondary2 text-white w-[40%] h-[50px] rounded-lg hover:bg-secondary text-lg "
            style={{ boxShadow: "3px 3px #001517" }}
          >
            <Link href="">حجز القاعة </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HallDetails;
