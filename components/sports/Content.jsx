import React from "react";
import SportHeader from "./SportHeader";
import Academy from "./Academy";
import Statistics from "./Statistics";
import AcademyEvents from "./AcademyEvents";
import ThreeD from "../home/ThreeD";
import Contact from "../membership/Contact";
import Footer from "@/components/Footer.jsx";

const Content = ({ sports, clickedSport, onClick }) => {
  return (
    <div id="sportContent">
      {clickedSport !== -1 && (
        <div className=" text-white">
          {sports.map((sport, index) => (
            <div key={sport.id}>
              {clickedSport === index && (
                <>
                  <SportHeader sport={sport} onClick={onClick} />
                  <Academy sport={sport} />
                  <div className="bg-gray-100 ">
                    <Statistics sport={sport} />
                  </div>
                  <div className="bg-gray-100 ">
                    <AcademyEvents sport={sport} />
                  </div>
                  <ThreeD sport={sport} />
                  <div className="text-black">
                    <Contact sport={sport} />
                  </div>
                  <Footer />
                </>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Content;
