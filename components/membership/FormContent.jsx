import React from "react";

const FormContent = ({ handleChange }) => {
  return (
    <div className=" mt-6 ">
      {/* 1 */}
      <div className="mb-2 flex lg:flex-row flex-col w-full justify-between gap-y-2 gap-x-8 ">
        <div className="lg:w-2/3 mb-4">
          <label style={{ textAlign: "right" }}>الاسم بالكامل</label>
          <input
            className="border border-gray-400 rounded-lg py-2 px-3 mt-2 w-full outline-secondary2"
            name="name"
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

      {/* 2 */}
      <div className="mb-2 flex lg:flex-row flex-col justify-between  gap-x-8 ">
        <div className="w-2/3 mb-4">
          <label style={{ textAlign: "right" }}>تاريخ الميلاد</label>
          <div className="flex w-full gap-2">
            <select
              className="border border-gray-400 rounded-lg py-2 px-4 my-2 text-gray-700 outline-secondary2"
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
            className="border border-gray-400 rounded-lg py-2 px-3 mt-2 w-full outline-secondary2"
            name="nationality"
            type="text"
            style={{ textAlign: "right" }}
            placeholder="اكتب هنا"
            required
            onChange={handleChange}
          />
        </div>
      </div>

      {/* 3 */}
      <div className="mb-2 ">
        <div className="mb-4 ">
          <label style={{ textAlign: "right" }}>العنوان بالتفصيل</label>
          <div className="grid lg:grid-cols-4 grid-cols-2 w-full justify-between gap-y-2 gap-x-4">
            <input
              className="border border-gray-400 rounded-lg py-2 px-3 mt-2 w-full outline-secondary2"
              name="governorate"
              type="text"
              style={{ textAlign: "right" }}
              placeholder="المحافظة"
              required
              onChange={handleChange}
            />
            <input
              className="border border-gray-400 rounded-lg py-2 px-3 mt-2 w-full outline-secondary2"
              name="region"
              type="text"
              style={{ textAlign: "right" }}
              placeholder="المنطقة"
              required
              onChange={handleChange}
            />
            <input
              className="border border-gray-400 rounded-lg py-2 px-3 mt-2 w-full outline-secondary2 col-span-2"
              name="street"
              type="text"
              style={{ textAlign: "right" }}
              placeholder=" اسم الشارع"
              onChange={handleChange}
            />
          </div>
        </div>
      </div>

      {/* 4 */}
      <div className="mb-2  ">
        <div className=" mb-4">
          <label style={{ textAlign: "right" }}>المؤهل الدراسي </label>
          <input
            className="border border-gray-400 rounded-lg py-2 px-3 mt-2 w-full outline-secondary2"
            name="educationalQualification"
            type="text"
            style={{ textAlign: "right" }}
            placeholder="اكتب هنا"
            required
            onChange={handleChange}
          />
          <p className="text-sm text-gray-400 mt-1">
            برجاء كتابة المؤهل الدراسي بالتفصيل{" "}
          </p>
        </div>
      </div>

      {/* 5 */}
      <div className="mb-2  ">
        <div className=" mb-4">
          <label style={{ textAlign: "right" }}>البريد الالكتروني </label>
          <input
            className="border border-gray-400 rounded-lg py-2 px-3 mt-2 w-full outline-secondary2"
            name="email"
            type="email"
            style={{ textAlign: "right" }}
            placeholder="اكتب هنا"
            required
            onChange={handleChange}
          />
        </div>
      </div>

      {/* 6 */}
      <div className="mb-2  grid lg:grid-cols-2 grid-cols-1 gap-4">
        <div className=" mb-4">
          <label style={{ textAlign: "right" }}>رقم الهاتف </label>
          <input
            className="border border-gray-400 rounded-lg py-2 px-3 mt-2 w-full outline-secondary2"
            name="phone"
            type="tel"
            style={{ textAlign: "right" }}
            placeholder="اكتب هنا"
            required
            onChange={handleChange}
          />
        </div>
        <div className=" mb-4">
          <label style={{ textAlign: "right" }}>رقم الهاتف الارضي </label>
          <input
            className="border border-gray-400 rounded-lg py-2 px-3 mt-2 w-full outline-secondary2"
            name="landlinePhoneNumber"
            type="tel"
            style={{ textAlign: "right" }}
            placeholder="اكتب هنا"
            onChange={handleChange}
          />
        </div>
      </div>

      {/* 7 */}
      <div className="mb-2  grid lg:grid-cols-2 grid-cols-1  lg:gap-4">
        <div className=" mb-4">
          <label style={{ textAlign: "right" }}>الحالة الاجتماعية</label>
          <select
            className="border border-gray-400 rounded-lg py-2 px-4 my-2 text-gray-700 outline-secondary2 w-full"
            name="marital-status"
            required
            onChange={handleChange}
          >
            <option value="" hidden>
              برجاء الاختيار
            </option>
            <option value="single">أعزب</option>
            <option value="married">متزوج</option>
            <option value="divorced">مطلق</option>
            <option value="widowed">أرمل</option>
            <option value="other">أخرى</option>
          </select>
        </div>
        <div className=" mb-4">
          <label style={{ textAlign: "right" }}>الوظيفة</label>
          <input
            className="border border-gray-400 rounded-lg py-2 px-3 mt-2 w-full outline-secondary2"
            name="job"
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

export default FormContent;
