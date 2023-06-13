import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Back from "../Back";

const Signup = () => {
  const [signUpFormData, setsignUpFormData] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setsignUpFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(signUpFormData);
  };

  return (
    <div className="bg-[url('/assets/signBackground.png')]  w-screen h-full text-white lg:py-1">
      <Back to="/sign/SignIn" title="العودة " />

      <div className="bg-secondary2 rounded-lg shadow-lg shadow-primary py-4 flex flex-col justify-center items-center lg:w-[60%] m-auto">
        <Image
          src="/assets/LogoSports.png"
          alt="Logo"
          width={100}
          height={100}
          className=""
        />
        <h2 className="text-3xl mt-4 font-bold">تسجيل حساب</h2>
        <form
          className="mt-8 text-right w-[80%]"
          style={{ direction: "rtl" }}
          onSubmit={handleSubmit}
        >
          <div className="mb-2 flex lg:flex-row flex-col w-full justify-between gap-y-2 gap-x-8 ">
            <div className="lg:w-2/3 mb-4 ">
              <label style={{ textAlign: "right" }}>الاسم بالكامل</label>
              <input
                className="border border-gray-400 rounded-lg py-2 px-3 mt-2 w-full outline-secondary2 text-gray-900 "
                name="name"
                type="text"
                style={{ textAlign: "right" }}
                placeholder="اكتب هنا"
                required
                onChange={handleChange}
              />
            </div>

            <div className="lg:w-1/3 w-full">
              <label style={{ textAlign: "right" }}>النوع</label>
              <select
                className="border border-gray-400 rounded-lg py-2 px-4 my-2 w-full text-gray-700 outline-secondary2 "
                name="gender"
                required
                onChange={handleChange}
              >
                <option value="" hidden className="text-gray-400">
                  برجاء الاختيار
                </option>
                <option value="female">انثى</option>
                <option value="male">ذكر</option>
              </select>
            </div>
          </div>

          <div className="mb-2 flex lg:flex-row flex-col justify-between  gap-x-8 ">
            <div className="w-2/3 mb-4">
              <label style={{ textAlign: "right" }}>تاريخ الميلاد</label>
              <div className="flex w-full lg:gap-2 gap-1">
                <select
                  className="border border-gray-400 rounded-lg py-2 lg:px-4 px-2 my-2 text-gray-700 outline-secondary2"
                  name="dob-day"
                  required
                  onChange={handleChange}
                >
                  <option value="" hidden className="text-gray-400">
                    اليوم
                  </option>
                  {Array.from({ length: 31 }, (_, i) => (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  ))}
                </select>
                <select
                  className="border border-gray-400 rounded-lg py-2 px-4 my-2 text-gray-700 outline-secondary2"
                  name="dob-month"
                  required
                  onChange={handleChange}
                >
                  <option value="" hidden className="text-gray-400">
                    الشهر
                  </option>
                  {Array.from({ length: 12 }, (_, i) => (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  ))}
                </select>
                <select
                  className="border border-gray-400 rounded-lg py-2 px-4 my-2 text-gray-700 outline-secondary2"
                  name="dob-year"
                  required
                  onChange={handleChange}
                >
                  <option value="" hidden className="text-gray-400">
                    السنة
                  </option>
                  {Array.from(
                    { length: new Date().getFullYear() - 1920 + 1 },
                    (_, i) => (
                      <option key={i + 1920} value={i + 1920}>
                        {i + 1920}
                      </option>
                    )
                  )}
                </select>
              </div>
            </div>
            <div className="w-full mb-4">
              <label style={{ textAlign: "right" }}>الجنسية</label>
              <input
                className="border border-gray-400 rounded-lg py-2 px-3 mt-2 w-full outline-secondary2 text-gray-900"
                name="nationality"
                type="text"
                style={{ textAlign: "right" }}
                placeholder="اكتب هنا"
                required
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="mb-2  ">
            <div className=" mb-4">
              <label style={{ textAlign: "right" }}>البريد الالكتروني </label>
              <input
                className="border border-gray-400 rounded-lg py-2 px-3 mt-2 w-full outline-secondary2 text-gray-900"
                name="email"
                type="email"
                style={{ textAlign: "right" }}
                placeholder="اكتب هنا"
                required
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="mb-2  ">
            <div className=" mb-4">
              <label style={{ textAlign: "right" }}>رقم الهاتف </label>
              <input
                className="border border-gray-400 rounded-lg py-2 px-3 mt-2 w-full outline-secondary2 text-gray-900"
                name="phone"
                type="tel"
                style={{ textAlign: "right" }}
                placeholder="اكتب هنا"
                required
                onChange={handleChange}
              />
            </div>
          </div>

          <button
            type="submit"
            className="bg-primary text-white py-2 px-12 rounded-md hover:bg-secondary lg:text-xl text-lg mt-10 mb-2 flex w-[50%] m-auto justify-center"
          >
            تسجيل
          </button>
        </form>{" "}
      </div>
    </div>
  );
};

export default Signup;
