import React from "react";
import Image from "next/image";

const SignInSide = () => {
  return (
    <div className="hidden lg:block relative ">
      <h1 className="text-9xl mt-12 ml-12">جاهز؟</h1>
      <Image
        href=""
        src="/assets/sign.png"
        alt="SignImage"
        width={700}
        height={700}
        className="lg:absolute bottom-0 right-24"
      />
    </div>
  );
};

export default SignInSide;
