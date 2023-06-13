import React from "react";
import Image from "next/image";

const NotReady = () => {
  return (
    <>
      <div className="flex flex-col m-[4%] gap-2 justify-center items-center text-center">
        <Image
          src={"/assets/Logo-2.png"}
          width={150}
          height={150}
          alt="logo"
          className=""
        />
        <p>...تحت الانشاء</p>
        <p>هذا الجزء مازال تحت التجريب... برجاء العودة لاحقا لاستكمال تجربتك</p>
        <Image
          src={"/assets/load-balls.gif"}
          width={250}
          height={250}
          alt=""
          className=""
        />
      </div>
    </>
  );
};

export default NotReady;
