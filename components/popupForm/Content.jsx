import React from "react";

const Content = ({ handleChange, bookName }) => {
  return (
    <div className=" mt-6 ">
      {/* 1 */}
      <div className="mb-8  w-full ">
        <div className=" mb-4">
          <label style={{ textAlign: "right" }}>اختار اللعبة الرياضية </label>
          <input
            className="border border-gray-400 rounded-lg py-2 px-3 mt-2 w-full  bg-transparent"
            name="sportName"
            type="text"
            style={{ textAlign: "right", boxShadow: "1px 1px 3px gray" }}
            placeholder="اكتب هنا"
            required
            onChange={handleChange}
          />
        </div>
      </div>

      {/* 2 */}
      <div className="mb-8  w-full ">
        <div className=" mb-4">
          <label style={{ textAlign: "right" }}>اختار {bookName} </label>
          <input
            className="border border-gray-400 rounded-lg py-2 px-3 mt-2 w-full bg-transparent"
            name="academyName"
            type="text"
            style={{ textAlign: "right", boxShadow: "1px 1px 3px gray" }}
            placeholder="اكتب هنا"
            required
            onChange={handleChange}
          />
        </div>
      </div>

      {/* 3 */}
      <div className="mb-2 flex lg:flex-row-reverse flex-col justify-between  gap-x-4 ">
        <div className=" mb-4">
          <label style={{ textAlign: "right" }}>تاريخ الميلاد</label>
          <div className="flex gap-2">
            <select
              className="border border-gray-400 rounded-lg py-2 px-2 my-2 text-slate-500 bg-transparent"
              name="dob-day"
              required
              onChange={handleChange}
              style={{ boxShadow: "1px 1px 3px gray" }}
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
              className="border border-gray-400 rounded-lg py-2 px-2 my-2 text-slate-500 bg-transparent"
              name="dob-month"
              required
              onChange={handleChange}
              style={{ boxShadow: "1px 1px 3px gray" }}
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
              className="border border-gray-400 rounded-lg py-2 px-2 my-2 text-slate-500 bg-transparent"
              name="dob-year"
              required
              onChange={handleChange}
              style={{ boxShadow: "1px 1px 3px gray" }}
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
        <div className=" mb-4">
          <label style={{ textAlign: "right" }}>اسم الطفل</label>
          <input
            className="border border-gray-400 rounded-lg py-2 px-3 mt-2 w-full bg-transparent"
            name="childName"
            type="text"
            style={{ textAlign: "right", boxShadow: "1px 1px 3px gray" }}
            placeholder="اكتب هنا"
            required
            onChange={handleChange}
          />
        </div>
      </div>

      {/* 4 */}
      <div className="mb-2  w-full ">
        <div className=" mb-4">
          <label style={{ textAlign: "right" }}>اختار المرحلة العمرية </label>
          <input
            className="border border-gray-400 rounded-lg py-2 px-3 mt-2 w-full bg-transparent"
            name="age"
            type="text"
            style={{ textAlign: "right", boxShadow: "1px 1px 3px gray" }}
            placeholder="اكتب هنا"
            required
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Content;
