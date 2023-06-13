import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import CenterTitle from "../CenterTitle";

const ImageSlider = () => {
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

  function handleNext(e) {
    setSelected((selected + 1 + data.length) % data.length);
  }

  function handlePrev(e) {
    setSelected((selected - 1 + data.length) % data.length);
  }

  return (
    <>
      <CenterTitle title="أماكن المناسبات" titleBack="/assets/shapeBase2.png" />

      <div className="flex justify-center items-center m-auto relative transition-all duration-500 mt-4">
        <FaArrowLeft
          size={100}
          onClick={handlePrev}
          className="bg-gray-400 text-white w-12 h-20 p-2 cursor-pointer hover:bg-gray-500"
        />
        {data.map((item, index) => (
          <div className="" key={item.id}>
            <div
              className={`slider-item ${
                selected === index ? "relative left-0 opacity-100" : "opacity-0"
              }`}
            >
              {selected === index && (
                <>
                  <div className="flex lg:flex-row flex-col items-center lg:gap-8 gap-3 lg:p-10 py-2 ">
                    <Image
                      src={item.image}
                      alt="hero"
                      width={500}
                      height={400}
                      className="lg:w-[500px] lg:h-[400px] w-[250px] h-[200px] mx-1"
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

      <div className="flex lg:gap-4 gap-1 justify-center mb-16 mx-1">
        {data.map((item) => (
          <img
            src={item.image}
            alt="hero"
            key={item.id}
            onClick={() => setSelected(item.id - 1)}
            className="cursor-pointer lg:h-[130px] lg:w-[180px] h-[55px] w-[65px]"
          />
        ))}
      </div>
    </>
  );
};

export default ImageSlider;
