import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { gallery } from "../data/gallery";
import Image from "next/image";

const Gallery = () => {
  const imagesPerRow = 5;
  const numRows = 3;
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
          slidesToShow: imagesPerRow - 2,
          slidesToScroll: imagesPerRow - 2,
          centerMode: false,
        },
      },
    ],
  };
  function CustomPrevArrow(props) {
    const { onClick } = props;
    return (
      <button
        className="slick-arrow slick-prev custom-arrow z-40 ml-4 lg:ml-0"
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
        className="slick-arrow slick-next text-black custom-arrow lg:mr-8 mr-12"
        onClick={onClick}
      >
        Next
      </button>
    );
  }

  return (
    <div className="pt-[70px]">
      <div className="mr-8">
        <div className="flex flex-col items-end relative mb-4">
          <Image
            src="/assets/shape3.png"
            alt="shape"
            width={260}
            height={260}
            className="object-cover"
          />
          <p className="absolute top-0 right-12 w-full h-full flex items-center justify-end text-2xl text-white">
            معرض الصور
          </p>
        </div>{" "}
      </div>
      <div className=" h-[100vh] w-[95%] m-auto">
        <Slider {...settings} className="">
          {gallery.map((item, index) => (
            <div key={index}>
              <div className="h-[180px] w-full relative">
                <div className="relative h-full w-full border-2 galleryImage transition-all duration-500 hover:scale-150 hover:z-[10] ">
                  <img
                    src={item.image}
                    alt={`Image ${index + 1}`}
                    className="absolute h-full w-full object-cover transition-all duration-500 "
                  />

                  <div className="flex justify-center group">
                    <div className="absolute inset-0 bg-black opacity-40 hover:opacity-0 transition-opacity duration-500 cursor-pointer" />
                    <h1 className="text-gray-300 text-lg text-center bottom-1  absolute px-1 group-hover:text-white">
                      {item.description}
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Gallery;
