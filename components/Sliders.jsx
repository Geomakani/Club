import { events } from "./data/events";
import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Sliders = () => {
  const imagesPerRow = 3;
  const numRows = 1;
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: imagesPerRow,
    slidesToScroll: imagesPerRow,
    centerMode: true,
    centerPadding: "0px",
    rows: numRows,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
        },
      },
    ],
  };
  function CustomPrevArrow(props) {
    const { onClick } = props;
    return (
      <button
        className="slick-arrow slick-prev z-40 ml-12 lg:ml-0 text-black custom-arrow eventsArrow"
        onClick={onClick}
      >
        Previous
      </button>
    );
  }

  function CustomNextArrow(props) {
    const { onClick } = props;
    return (
      <button
        className="slick-arrow slick-next text-black  lg:mr-6 mr-14 custom-arrow eventsArrow"
        onClick={onClick}
      >
        Next
      </button>
    );
  }

  return (
    <>
      <div className=" h-screen pt-[70px] w-[85%] m-auto text flex flex-col justify-center gap-x-4 overflow-hidden lg:px-12">
        <Slider {...settings}>
          {events.slice(0, 5).map((item, index) => (
            <div
              className={`relative mx-4 rounded-lg overflow-hidden px-4 ${
                index === 0 ? "slick-active" : ""
              }`}
              key={item.id}
            >
              <Image
                src={item.image}
                width={300}
                height={300}
                alt=""
                className="h-[300px] rounded-lg w-full"
              />
              <div className="text-center">
                <h1 className="py-4 lg:text-2xl text-xl font-bold">
                  {item.title}
                </h1>
                <p className="lg:text-lg text-md">{item.details}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="h-[3vh] bg-secondary" />
    </>
  );
};

export default Sliders;
