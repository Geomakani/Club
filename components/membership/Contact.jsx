import React from "react";

const Contact = () => {
  return (
    <div className="bg-white py-12">
      <div className="w-[85%] m-auto ">
        <h1 className="lg:text-9xl text-5xl opacity-20 text-right">
          تواصل معنا
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-1 ">
          <form className="mt-10 lg:mb-0 mb-6">
            <div className="flex flex-col text-right ">
              <label className="mb-2">:الاسم</label>
              <div className="flex flex-row-reverse">
                <input
                  type="text"
                  placeholder="يمكن تغييره لاحقا"
                  className="border-2 border-black text-gray-900 rounded-md bg-[#D9D9D9] py-2 px-4 mb-4 lg:w-[80%] w-full text-right"
                  required
                />
              </div>
              <label className="mb-2">:رقم الهاتف</label>
              <div className="flex flex-row-reverse">
                <input
                  type="text"
                  placeholder="برجاء ادخال رقم الهاتف الخاص بك"
                  className="border-2 border-black text-gray-900 rounded-md bg-[#D9D9D9] py-2 px-4 mb-4 lg:w-[80%] w-full text-right"
                  required
                />
              </div>
              <label className="mb-2">:وقت الاتصال</label>
              <div className="flex flex-row-reverse">
                <input
                  type="text"
                  placeholder="برجاء تحديد وقت الاتصال المناسب لك"
                  className="border-2 border-black text-gray-900 rounded-md bg-[#D9D9D9] py-2 px-4 mb-2 lg:w-[80%] w-full text-right"
                  required
                />
              </div>
              <label className="mb-2">ملاحظات</label>
              <div className="flex flex-row-reverse">
                <textarea
                  type="text"
                  placeholder="يمكن تغييره لاحقا"
                  className="border-2 border-black text-gray-900 rounded-md bg-[#D9D9D9] py-2 px-4 mb-4 lg:w-[80%] w-full text-right"
                />
              </div>
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-secondary2 text-white py-2 px-16 rounded-md hover:bg-secondary lg:text-xl text-lg mt-6 lg:w-[80%] w-full"
              >
                ارسل البيانات
              </button>
            </div>
          </form>
          <div className="py-10 text-right relative lg:bottom-12">
            <div className="lg:text-3xl text-2xl">
              <p>!الفرصة مبتستناش </p>
              <p>سجل بياناتك واحنا هنكلمك</p>
            </div>
            <div className="text-gray-900 mt-12 lg:text-xl text-lg">
              <p>!شكرا على تواصلك</p>
              <p>من فضلك</p>
              <p>!املأ النموذج, أتمني لك يوما سعيدا</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
