import React from "react";
import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";

const EventInfo = ({ events, selectedDate, eventFound }) => {
  return (
    <>
      {eventFound ? (
        events.map((event) => (
          <div key={event.id}>
            {format(event.date, "yyyy-MM-dd") ===
              format(selectedDate, "yyyy-MM-dd") && (
              <div
                className=" rounded-md flex flex-col overflow-hidden"
                style={{ boxShadow: "8px 8px 5px lightgray" }}
              >
                <Image
                  src={event.image}
                  alt="event"
                  width={200}
                  height={200}
                  className="w-full h-[240px]"
                />
                <div className="text-center pt-4 pb-6 px-6 bg-white">
                  <h3 className="text-2xl text-primary">{event.title}</h3>
                  <p className="text-sm pt-2 pb-4">{event.details}</p>
                  <button className="bg-secondary text-white w-[40%] py-2 rounded-lg hover:bg-secondary2">
                    <Link href="">حجز الايفينت</Link>
                  </button>
                </div>
              </div>
            )}
          </div>
        ))
      ) : (
        <div className=" w-[400px]">
          <p className="text-gray-400 text-lg">
            لا يوجد أحداث لتاريخ {format(selectedDate, "yyyy-MM-dd")}
          </p>
        </div>
      )}
    </>
  );
};

export default EventInfo;
