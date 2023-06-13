import React from "react";
import { IoChevronBack } from "react-icons/io5";
import Link from "next/link";
import { useState } from "react";

const Back = ({ to, title }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="absolute flex justify-center items-center bg-primary rounded-md ml-4 mt-4 cursor-pointer border-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href={to}>
        <IoChevronBack
          className="w-10 h-10"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        />
      </Link>

      {isHovered && <span className="pr-4">{title} </span>}
    </div>
  );
};

export default Back;
