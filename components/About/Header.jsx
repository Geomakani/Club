import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <>
      <div className="flex justify-center m-auto pt-[70px] w-screen">
        <Image
          src={"/assets/about.png"}
          width={1000}
          height={90}
          alt=""
          className="w-[86%] h-[400px]"
        />
      </div>
    </>
  );
};

export default Header;
