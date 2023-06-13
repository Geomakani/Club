import React from "react";
import Modal from "react-modal";
import { useState } from "react";

Modal.setAppElement("#__next");

const Follower = ({ FollowerNumber, handleChange }) => {
  return (
    <div className=" mt-6 ">
      {/* 1 */}
      <div className="mb-2 flex lg:flex-row flex-col w-full justify-between gap-y-2 gap-x-8 ">
        <div className="lg:w-2/3 mb-4">
          <label style={{ textAlign: "right" }}>
            اسم التابع رقم ({FollowerNumber})
          </label>
          <input
            className="border border-gray-400 rounded-lg py-2 px-3 mt-2 w-full outline-secondary2"
            name={`followerName ${FollowerNumber}`}
            type="text"
            style={{ textAlign: "right" }}
            placeholder="اكتب هنا"
            required
            onChange={handleChange}
          />
          <p className="text-sm text-gray-400 mt-1">
            يجب ان يكون هو الاسم الموجود ببطاقة اثبات الشخصية{" "}
          </p>
        </div>

        <div className="lg:w-1/3 w-full">
          <label style={{ textAlign: "right" }}>النوع</label>
          <select
            className="border border-gray-400 rounded-lg py-2 px-4 my-2 w-full text-gray-700 outline-secondary2 "
            name={`followerGender ${FollowerNumber}`}
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

      {/* 2 */}
      <div className="mb-2 flex lg:flex-row flex-col justify-between  gap-x-8 ">
        <div className="w-2/3 mb-4">
          <label style={{ textAlign: "right" }}>تاريخ الميلاد</label>
          <div className="flex w-full gap-2">
            <select
              className="border border-gray-400 rounded-lg py-2 px-4 my-2 text-gray-700 outline-secondary2"
              name={`follower-dob-day ${FollowerNumber}`}
              required
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
              name={`follower-dob-month ${FollowerNumber}`}
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
              name={`follower-dob-year ${FollowerNumber}`}
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
          <label style={{ textAlign: "right" }}>صلة القرابة</label>
          <input
            className="border border-gray-400 rounded-lg py-2 px-3 mt-2 w-full outline-secondary2"
            name={`followerRelation ${FollowerNumber}`}
            type="text"
            style={{ textAlign: "right" }}
            placeholder="اكتب هنا"
            required
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Follower;
