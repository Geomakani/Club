import React, { useContext, useState, useEffect } from "react";
import Image from "next/image";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { format } from "date-fns";
import { MyAppContext } from "../../pages/_app";
import { GoChevronRight } from "react-icons/go";
import EventInfo from "./EventInfo";
import Title from "../Title";

const CalendarComponent = () => {
  const { events } = useContext(MyAppContext);
  const [selectedDate, setSelectedDate] = useState(new Date());

  // State to store whether an event was found for the selected date
  const [eventFound, setEventFound] = useState(false);

  // Update the eventFound state whenever the selectedDate or events change
  useEffect(() => {
    const selectedEvent = events.find(
      (event) =>
        format(event.date, "yyyy-MM-dd") === format(selectedDate, "yyyy-MM-dd")
    );
    setEventFound(selectedEvent !== undefined);
  }, [selectedDate, events]);

  // Function to handle date selection
  function handleDateSelect(date) {
    setSelectedDate(date);
  }

  // Function to determine the class name for each tile
  function getTileClassName({ date }) {
    const event = events.find(
      (event) => format(event.date, "yyyy-MM-dd") === format(date, "yyyy-MM-dd")
    );
    return event ? " tile-has-event text-blue-400 rounded-full" : "";
  }

  return (
    <div className="w-[85%] m-auto py-12">
      <div className="flex flex-col items-end relative mb-4">
        <Image
          src="/assets/shape3.png"
          alt="shape"
          width={320}
          height={300}
          className="object-cover"
        />
        <p className="absolute top-0 right-8 w-full h-full flex items-center justify-end text-2xl text-white">
          جدول الأحداث القادمة
        </p>
      </div>

      <div className="grid lg:flex grid-cols-1 gap-y-4 gap-x-32 justify-center items-center mt-12">
        <Calendar
          value={selectedDate}
          onChange={handleDateSelect}
          className="text-white rounded-md"
          tileClassName={getTileClassName}
        />
        <GoChevronRight size={150} className=" hidden lg:flex" />
        <div className="h-full ">
          <EventInfo
            events={events}
            selectedDate={selectedDate}
            eventFound={eventFound}
          />
        </div>
      </div>
    </div>
  );
};

export default CalendarComponent;
