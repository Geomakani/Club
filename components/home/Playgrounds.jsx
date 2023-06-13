import React from "react";
import Image from "next/image";
import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import CenterTitle from "../CenterTitle";

const Playgrounds = () => {
  const data = [
    {
      id: 1,
      image: "/assets/playGround1.png",
      description:
        "يضم فرع النادي بشيراتون ملعب كرة قدم قانوني و6 ملاعب اسكواش و2 ملعب تنس أرضي و حمام سباحة أوليمبي وحمام سباحة أطفال وصالة بولينج وجيم بمساحة 2400 متر وصالة ألعاب قتالية وجمباز و3 ملاعب مطاطية وتراك مشي وتراك دراجات، وصالة تنس طاولة ومنطقة ملاعب للأطفال ومسرح مكشوف كما يوجد بالنادي ثلاث قاعات أفراح وجراج 2 دور، ومبني خدمات، ومبني إداري، ومقر لثلاث بنوك، وسلسلة محلات تجارية ",
      header: "اعرفنا أكتر",
    },
    {
      id: 2,
      image: "/assets/playGround2.png",
      description:
        "يضم فرع النادي بشيراتون ملعب كرة قدم قانوني و6 ملاعب اسكواش و2 ملعب تنس أرضي و حمام سباحة أوليمبي وحمام سباحة أطفال وصالة بولينج وجيم بمساحة 2400 متر وصالة ألعاب قتالية وجمباز و3 ملاعب مطاطية وتراك مشي وتراك دراجات، وصالة تنس طاولة ومنطقة ملاعب للأطفال ومسرح مكشوف كما يوجد بالنادي ثلاث قاعات أفراح وجراج 2 دور، ومبني خدمات، ومبني إداري، ومقر لثلاث بنوك، وسلسلة محلات تجارية ",
      header: "ملاعب السلة",
    },
    {
      id: 3,
      image: "/assets/playGround3.png",
      description:
        "يضم فرع النادي بشيراتون ملعب كرة قدم قانوني و6 ملاعب اسكواش و2 ملعب تنس أرضي و حمام سباحة أوليمبي وحمام سباحة أطفال وصالة بولينج وجيم بمساحة 2400 متر وصالة ألعاب قتالية وجمباز و3 ملاعب مطاطية وتراك مشي وتراك دراجات، وصالة تنس طاولة ومنطقة ملاعب للأطفال ومسرح مكشوف كما يوجد بالنادي ثلاث قاعات أفراح وجراج 2 دور، ومبني خدمات، ومبني إداري، ومقر لثلاث بنوك، وسلسلة محلات تجارية ",
      header: "حمامات السباحة",
    },
    {
      id: 4,
      image: "/assets/playGround4.png",
      description:
        "يضم فرع النادي بشيراتون ملعب كرة قدم قانوني و6 ملاعب اسكواش و2 ملعب تنس أرضي و حمام سباحة أوليمبي وحمام سباحة أطفال وصالة بولينج وجيم بمساحة 2400 متر وصالة ألعاب قتالية وجمباز و3 ملاعب مطاطية وتراك مشي وتراك دراجات، وصالة تنس طاولة ومنطقة ملاعب للأطفال ومسرح مكشوف كما يوجد بالنادي ثلاث قاعات أفراح وجراج 2 دور، ومبني خدمات، ومبني إداري، ومقر لثلاث بنوك، وسلسلة محلات تجارية ",
      header: "ملاعب التنس",
    },
    {
      id: 5,
      image: "/assets/playGround5.png",
      description:
        "يضم فرع النادي بشيراتون ملعب كرة قدم قانوني و6 ملاعب اسكواش و2 ملعب تنس أرضي و حمام سباحة أوليمبي وحمام سباحة أطفال وصالة بولينج وجيم بمساحة 2400 متر وصالة ألعاب قتالية وجمباز و3 ملاعب مطاطية وتراك مشي وتراك دراجات، وصالة تنس طاولة ومنطقة ملاعب للأطفال ومسرح مكشوف كما يوجد بالنادي ثلاث قاعات أفراح وجراج 2 دور، ومبني خدمات، ومبني إداري، ومقر لثلاث بنوك، وسلسلة محلات تجارية .",
      header: "كرة القدم",
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
      <div className="flex items-center lg:w-[80%] m-auto relative transition-all duration-500 mt-12">
        <FaArrowLeft
          size={100}
          onClick={handlePrev}
          className="bg-gray-400 text-white w-64 h-16 p-2 cursor-pointer hover:bg-gray-500"
        />
        {data.map((item, index) => (
          <div key={item.id}>
            <div
              className={`slider-item ${
                selected === index ? "relative left-0 opacity-100" : "opacity-0"
              }`}
            >
              {selected === index && (
                <>
                  <CenterTitle
                    title={item.header}
                    titleBack="/assets/shapeBase1.png"
                  />

                  <div className="flex lg:flex-row flex-col items-center lg:gap-8 gap-3 lg:p-10 py-2 ">
                    <Image
                      src={item.image}
                      alt="hero"
                      width={300}
                      height={300}
                      className=""
                    />
                    <p className="text-right w-2/3 lg:text-base text-sm">
                      {item.description}
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>
        ))}

        <FaArrowRight
          size={100}
          onClick={handleNext}
          className="bg-gray-400 text-white w-64 h-16 p-2 cursor-pointer hover:bg-gray-500"
        />
      </div>

      <div className="flex justify-evenly mb-16">
        {data.map((item) => (
          <img
            src={item.image}
            alt="hero"
            key={item.id}
            onClick={() => setSelected(item.id - 1)}
            className="cursor-pointer lg:h-[150px] lg:w-[150px] h-[60px] w-[70px]"
          />
        ))}
      </div>
    </>
  );
};

export default Playgrounds;
