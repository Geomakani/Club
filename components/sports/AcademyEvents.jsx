import React, { useContext, useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { format } from "date-fns";
import { GoChevronRight } from "react-icons/go";
import EventInfo from "../events/EventInfo";
import { MyAppContext } from "../../pages/_app";

const AcademyEvents = ({ sport }) => {
  const { events } = useContext(MyAppContext);
  const [selectedDate, setSelectedDate] = useState(new Date());

  // State to store whether an event was found for the selected date
  const [eventFound, setEventFound] = useState(false);

  // Update the eventFound state whenever the selectedDate or events change
  useEffect(() => {
    const filteredEvents = events.filter(
      (event) =>
        format(event.date, "yyyy-MM-dd") ===
          format(selectedDate, "yyyy-MM-dd") &&
        event.sport === sport.name &&
        event.sport !== "None"
    );
    setEventFound(filteredEvents.length > 0);
  }, [selectedDate, events, sport]);

  // Function to handle date selection
  function handleDateSelect(date) {
    setSelectedDate(date);
  }

  // Function to determine the class name for each tile
  function getTileClassName({ date }) {
    const event = events.find(
      (event) =>
        format(event.date, "yyyy-MM-dd") === format(date, "yyyy-MM-dd") &&
        event.sport === sport.name
    );
    return event ? " tile-has-event text-blue-400 rounded-full" : "";
  }

  return (
    <div className="w-[85%] m-auto py-12 grid lg:flex grid-cols-1 gap-y-4 lg:gap-x-32 justify-center items-center lg:mt-8 ">
      <Calendar
        value={selectedDate}
        onChange={handleDateSelect}
        className="text-white rounded-md "
        tileClassName={getTileClassName}
      />
      <GoChevronRight size={150} className=" hidden lg:flex text-primary" />
      <div className="h-full text-black">
        <EventInfo
          events={events}
          selectedDate={selectedDate}
          eventFound={eventFound}
          selectedSport={sport}
        />
      </div>
    </div>
  );
};

export default AcademyEvents;
