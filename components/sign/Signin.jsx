import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Back from "../Back";
import SignInSide from "./SignInSide";

const Signin = () => {
  const [signInFormData, setsignInFormData] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setsignInFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(signInFormData);
  };

  return (
    <div className="bg-[url('/assets/signBackground.png')]  grid lg:grid-cols-2 grid-cols-1 w-screen h-screen text-white">
      <Back to="/" title="العودة للرئيسية" />

      <div className="bg-secondary2 rounded-md shadow-lg shadow-primary lg:py-16 flex flex-col justify-center items-center">
        <Image
          src="/assets/LogoSports.png"
          alt="Logo"
          width={100}
          height={100}
        />
        <h2 className="text-3xl mt-4 mb-2 font-bold">تسجيل الدخول</h2>
        <p>استعد لدخول عالم جديد من التحكم و الخصوصية</p>
        <form
          className="mt-6 text-right lg:w-[50%] w-[80%]"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col">
            <label className="mb-2">رقم العضوية</label>
            <div className="flex flex-row-reverse">
              <input
                type="text"
                name="membershipNumber"
                placeholder="يمكن تغييره لاحقا"
                className=" text-gray-900 rounded-md bg-[#D9D9D9] py-2 px-4 mb-4 text-right outline-none w-full"
                required
                onChange={handleChange}
              />
            </div>
            <label className="mb-2">كلمة المرور </label>
            <div className="flex flex-row-reverse">
              <input
                type="password"
                name="password"
                placeholder="يمكن تغييره لاحقا"
                className=" text-gray-900 rounded-md bg-[#D9D9D9] py-2 px-4 text-right outline-none w-full"
                required
                onChange={handleChange}
              />
            </div>
          </div>
          <button
            type="submit"
            className="bg-primary text-white py-2 px-12 rounded-md hover:bg-secondary lg:text-xl text-lg mt-12 mb-2 w-full"
          >
            تسجيل الدخول
          </button>
          <p className="text-center">
            {" "}
            لا تمتلك حساب؟{" "}
            <span className="text-secondary">
              {" "}
              <Link href="/sign/SignUp">تسجيل حساب جديد </Link>{" "}
            </span>
            {"  "}
          </p>

          <p className=" mt-2 text-center">
            او
            <span className="text-secondary ">
              {" "}
              <Link href="/Membership"> احصل على عضوية </Link>{" "}
            </span>
            {"  "}
          </p>
        </form>{" "}
      </div>

      <SignInSide />
    </div>
  );
};

export default Signin;
