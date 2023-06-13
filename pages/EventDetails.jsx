import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import { useContext } from "react";
import { MyAppContext } from "./_app.js";
import { format } from "date-fns";
import Link from "next/link.js";
import { IoChevronBack } from "react-icons/io5";
import { useState } from "react";
import Back from "@/components/Back.jsx";

const EventDetails = () => {
  const { t } = useTranslation("common");

  // const { events, selectedDate } = useContext(MyAppContext);

  // var selectedEvent = events.find(
  //   (event) =>
  //     format(event.date, "yyyy-MM-dd") === format(selectedDate, "yyyy-MM-dd")
  // );

  return (
    <>
      {/* <Navbar /> */}
      <div className="text-white">
        <Back to="/Events" title="العودة" />
      </div>

      <div className='bg-[url("/assets/signBackground.png")] pt-[70px] text-white lg:min-h-screen'>
        <div className="w-[75%] m-auto mt-4">
          <Image
            src={selectedEvent.image}
            alt="event"
            width={300}
            height={200}
            className="w-full h-[60vh]"
          />
          <div className="flex lg:flex-row-reverse flex-col items-end mt-4 gap-4">
            <div className="text-right">
              <h3 className="text-3xl mb-4">{selectedEvent.title}</h3>
              <p>{selectedEvent.details}</p>
            </div>
            <button className="bg-secondary text-white w-[40%] h-[50px] rounded-lg hover:bg-secondary2 text-lg mb-4">
              <Link href="">احجز الان </Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps({ locale = "ar" }) {
  return {
    props: { ...(await serverSideTranslations(locale, ["common"])) },
  };
}

export default EventDetails;
