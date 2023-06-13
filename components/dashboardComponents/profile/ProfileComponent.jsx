import React from "react";
import Image from "next/image";

const ProfileComponent = () => {
  return (
    <div className="lg:flex lg:flex-row-reverse lg:gap-x-32 border-t text-right pt-4">
      <div className="">
        <div className="flex flex-row-reverse gap-x-10">
          <div className="flex flex-row-reverse items-center gap-4">
            <Image src="/assets/user.png" alt="user" width={100} height={100} />
            <div>
              <h1 className=" lg:text-2xl text-lg">
                أحمد محمد عبد الواحد السيد
              </h1>
              <p className="text-gray-500">مصري</p>
            </div>
          </div>
        </div>

        <div className="mt-4 flex flex-col gap-y-2 ">
          <div className="flex flex-row-reverse items-center">
            <h2 className="text-lg"> :تاريخ الميلاد </h2>
            <p className="text-gray-900"> 1964/11/15&nbsp;</p>
          </div>

          <div className="flex flex-row-reverse items-center">
            <h2 className="text-lg"> :محل الميلاد </h2>
            <p className="text-gray-900"> القاهرة&nbsp;</p>
          </div>

          <div className="flex flex-row-reverse items-center">
            <h2 className="text-lg"> : الوظيفة </h2>
            <p className="text-gray-900"> محاسب الشركة الوطنية&nbsp;</p>
          </div>

          <div className="flex flex-row-reverse items-center">
            <h2 className="text-lg"> :المؤهل </h2>
            <p className="text-gray-900"> حاصل على بكالريوس تجارة&nbsp;</p>
          </div>

          <div className="flex flex-row-reverse items-center">
            <h2 className="text-lg"> : الحالة الاجتماعية </h2>
            <p className="text-gray-900"> </p>
          </div>
        </div>
      </div>

      <div className="lg:mt-0 mt-4 flex flex-col gap-y-2">
        <div className="flex flex-row-reverse items-center">
          <h2 className="text-lg"> :نوع العضوية </h2>
          <p className="text-gray-900">عامل &nbsp; </p>
        </div>
        <div className="flex flex-row-reverse items-center ">
          <h2 className="text-lg"> :رقم الاستمارة </h2>
          <p className="text-gray-900">250332000547890 &nbsp; </p>
        </div>

        <div className="lg:mt-10 flex flex-col gap-y-2 ">
          <div className="flex flex-row-reverse items-center">
            <h2 className="text-lg"> : السن </h2>
            <p className="text-gray-900"> 59 </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileComponent;
