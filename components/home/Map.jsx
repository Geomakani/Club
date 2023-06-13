import React from "react";

const Map = () => {
  return (
    <>
      <section className="py-12">
        <div className="w-[85%] m-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 bg-white">
            <iframe
              loading="lazy"
              allowFullScreen
              aria-hidden="false"
              tabIndex="0"
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13714.382651071848!2d31.3772392!3d30.1103973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145817b220866f6b%3A0xc1a5226ca51ea78a!2sThe%20Club%20Sheraton%20%E2%80%AD%D9%86%D8%A7%D8%AF%D9%8A%20%D8%A7%D9%84%D9%86%D8%A7%D8%AF%D9%8A%20%D8%B4%D9%8A%D8%B1%D8%A7%D8%AA%D9%88%D9%86%E2%80%AD!5e0!3m2!1sen!2seg!4v1619406822924!5m2!1sen!2seg"
              className="border-none h-full w-full"
            />
            <div className="px-8 py-10 text-right">
              <div class="w-full">
                <h1 className="lg:text-7xl text-5xl opacity-20">تواصل معنا</h1>
              </div>

              <div className="text-2xl">
                <p>!الفرصة مبتستناش </p>
                <p>سجل بياناتك واحنا هنكلمك</p>
              </div>

              <form className=" mt-10">
                <div className="flex flex-col">
                  <label className="mb-2">:الاسم</label>
                  <div className="flex flex-row-reverse">
                    <input
                      type="text"
                      placeholder="يمكن تغييره لاحقا"
                      className="border-2 border-black text-gray-900 rounded-md bg-[#D9D9D9] py-2 px-4 mb-4 lg:w-2/3 w-full text-right"
                      required
                    />
                  </div>
                  <label className="mb-2">:رقم الهاتف</label>
                  <div className="flex flex-row-reverse">
                    <input
                      type="text"
                      placeholder="يمكن تغييره لاحقا"
                      className="border-2 border-black text-gray-900 rounded-md bg-[#D9D9D9] py-2 px-4 lg:w-2/3 w-full text-right"
                      required
                    />
                  </div>
                  <label className="mb-2">ملاحظات</label>
                  <div className="flex flex-row-reverse">
                    <textarea
                      rows={2}
                      cols={9}
                      itemScope={false}
                      onResize={false}
                      onScroll={false}
                      aria-rowcount={2}
                      type="text"
                      placeholder="يمكن تغييره لاحقا"
                      className="border-2 border-black text-gray-900 rounded-md bg-[#D9D9D9] py-2 px-4 mb-4 lg:w-2/3 w-full text-right"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="bg-primary text-white py-1 px-16 rounded-md hover:bg-secondary lg:text-xl text-lg mt-6 lg:w-2/3 w-full"
                >
                  ارسل الطلب
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Map;
