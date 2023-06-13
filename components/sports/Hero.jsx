import React from "react";
import Image from "next/image";
import styles from "@/styles/sports.module.css";
import Link from "next/link";

const Hero = ({ sports, setClickedSport }) => {
  const mobileImages = [
    {
      id: 1,
      image: "/assets/pingpongMobile.png",
    },
    {
      id: 2,
      image: "/assets/swimmingMobile.png",
    },
    {
      id: 3,
      image: "/assets/gombazMobile2.png",
    },
    {
      id: 4,
      image: "/assets/karateMobile.png",
    },
    {
      id: 5,
      image: "/assets/tennisMobile.png",
    },
    {
      id: 6,
      image: "/assets/footballMobile.png",
    },
    {
      id: 7,
      image: "/assets/basketballMobile.png",
    },
    {
      id: 8,
      image: "/assets/volleyballMobile.png",
    },
    {
      id: 9,
      image: "/assets/boxingMobile.png",
    },
    {
      id: 10,
      image: "/assets/handballMobile.png",
    },
  ];

  function scrollToSportContent() {
    if (typeof document !== "undefined") {
      const element = document.getElementById("sportContent");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }

  return (
    <div className="relative">
      <div
        className={`w-full pt-[70px] relative overflow-hidden ${styles.heroSports}`}
      >
        <div className="hidden lg:flex flex-col justify-center items-center  ">
          <Image
            src="/assets/LogoSports.png"
            alt="Logo"
            width={110}
            height={110}
            className="my-3"
          />
          <h1 className="text-3xl">اختر الرياضة التي تريدها </h1>
        </div>

        <div className=" hidden lg:flex absolute bottom-[-5%] h-[400px] ">
          <div
            className={`flex justify-evenly items-end w-full  ${styles.ImageContainer}`}
          >
            <Image
              src={sports[0].image}
              alt={sports[0].name}
              title={sports[0].name}
              width={210}
              height={500}
              className={`relative h-[500px]  mr-[-70px]   ${styles.Image}`}
              onClick={() => {
                setClickedSport(0);
                setTimeout(() => {
                  scrollToSportContent();
                }, 10);
              }}
            />
            <Image
              src={sports[1].image}
              alt={sports[1].name}
              title={sports[1].name}
              width={180}
              height={300}
              className={`relative h-[480px] pt-16 bottom-0 mr-[-50px]  ${styles.Image}`}
              onClick={() => {
                setClickedSport(1);
                setTimeout(() => {
                  scrollToSportContent();
                }, 10);
              }}
            />
            <Image
              src={sports[2].image}
              alt={sports[2].name}
              title={sports[2].name}
              width={160}
              height={300}
              className={`relative h-[550px] bottom-0 mr-[-60px]   ${styles.Image}`}
              onClick={() => {
                setClickedSport(2);
                setTimeout(() => {
                  scrollToSportContent();
                }, 10);
              }}
            />
            <Image
              src={sports[3].image}
              alt={sports[3].name}
              title={sports[3].name}
              width={170}
              height={300}
              className={`relative h-[430px] pt-4 bottom-0 mr-[-80px]  ${styles.Image}`}
              onClick={() => {
                setClickedSport(3);
                setTimeout(() => {
                  scrollToSportContent();
                }, 10);
              }}
            />
            <Image
              src={sports[4].image}
              alt={sports[4].name}
              title={sports[4].name}
              width={220}
              height={300}
              className={`absolute h-[600px] mb-[-15%] mr-[-80px]   ${styles.Image}`}
              onClick={() => {
                setClickedSport(4);
                setTimeout(() => {
                  scrollToSportContent();
                }, 10);
              }}
            />
            <Image
              src={sports[5].image}
              alt={sports[5].name}
              title={sports[5].name}
              width={240}
              height={300}
              className={`relative h-[350px] mb-[-5%] z-[10]  ${styles.Image}`}
              onClick={() => {
                setClickedSport(5);
                setTimeout(() => {
                  scrollToSportContent();
                }, 10);
              }}
            />
            <Image
              src={sports[6].image}
              alt={sports[6].name}
              title={sports[6].name}
              width={220}
              height={300}
              className={`relative h-[540px] mb-[-12%]  ml-[-100px] z-[9]  ${styles.Image}`}
              onClick={() => {
                setClickedSport(6);
                setTimeout(() => {
                  scrollToSportContent();
                }, 10);
              }}
            />
            <Image
              src={sports[7].image}
              alt={sports[7].name}
              title={sports[7].name}
              width={260}
              height={300}
              className={`relative h-[400px] bottom-0 ml-[-90px] z-[8] ${styles.Image}`}
              onClick={() => {
                setClickedSport(7);
                setTimeout(() => {
                  scrollToSportContent();
                }, 10);
              }}
            />
            <Image
              src={sports[8].image}
              alt={sports[8].name}
              title={sports[8].name}
              width={230}
              height={300}
              className={`relative h-[440px] bottom-0 ml-[-100px] z-[7] ${styles.Image}`}
              onClick={() => {
                setClickedSport(8);
                setTimeout(() => {
                  scrollToSportContent();
                }, 10);
              }}
            />
            <Image
              src={sports[9].image}
              alt={sports[9].name}
              title={sports[9].name}
              width={250}
              height={300}
              className={`relative h-[480px] bottom-0 ml-[-100px] ${styles.Image}`}
              onClick={() => {
                setClickedSport(9);
                setTimeout(() => {
                  scrollToSportContent();
                }, 10);
              }}
            />
          </div>
        </div>

        {/* Mobile */}
        <div className="lg:hidden">
          <h1 className="text-2xl text-center pt-4 ">
            اختر الرياضة التي تريدها{" "}
          </h1>

          <div className=" w-[90%] grid grid-cols-4 justify-center gap-4 m-auto h-[500px] py-6">
            {mobileImages.map((item, index) => (
              <div
                className=" bg-secondary2 rounded-lg justify-center items-center flex cursor-pointer"
                key={index}
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  width={100}
                  height={100}
                  className={index === 7 && "px-4"}
                  onClick={() => {
                    setClickedSport(index);
                    setTimeout(() => {
                      scrollToSportContent();
                    }, 10);
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-secondary h-[7vh] flex justify-center items-center text-white relative z-[100] text-center">
        <p>
          بولينج أو بلياردو؟ يمكنك الدخول إلى{" "}
          <span className="text-primary">
            <Link href="">المركز الترفيهي</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Hero;
