import React from "react";
import Image from "next/image";
import { IoLogoTiktok } from "react-icons/io5";
import { FaFacebookF, FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-primary w-screen  ">
      <div className=" lg:w-[85%] w-[90%] pt-6 pb-12 m-auto grid lg:gap-8 lg:grid-cols-2 grid-cols-1 lg:items-center text-white lg:pr-0 pr-4">
        <div className="lg:h-20 relative lg:bottom-0 bottom-4">
          <Image
            src={"/assets/hotline 1.png"}
            width={220}
            height={220}
            className=" lg:w-[270px] w-[120px]  h-[120px]  absolute left-4 lg:left-[15%]"
            alt="hotline"
          />
        </div>

        <div className="flex flex-col">
          <div className="">
            <img
              src="/assets/Logo.png"
              width={100}
              height={100}
              className=" relative mb-2 float-right "
              alt="Logo"
            />
          </div>
          <div className=" text-sm text-right ">
            <span>
              سلسلة أندية النادي سلسلة تابعة لوزارة الشباب و الرياضة بالشراكة مع
              القطاع الخاص و تهدف السلسلة أيضا إلى تقديم خدمة رياضية وإجتماعية
              تستقطب كل الشرائح المجتمعية وجذب الشباب وأسرهم لسد الفجوة في
              الأعداد الكبيرة من المصريين غير المشتركة في الأندية، والتي لا تجد
              فيما هو معروض الخدمة الرياضية والإجتماعية المتكاملة، من حيث الجودة
              ورسوم الإشتراكات المناسبة لدخولها
            </span>
          </div>
          <div className=" flex lg:mr-16  mt-6 gap-4 items-center justify-end ">
            <Link href="https://www.facebook.com/TheClub.SportingClub">
              <FaFacebookF className="text-2xl" />
            </Link>
            <Link href="https://www.tiktok.com/@theclubsheraton?_t=8cPsS7y5w9t&_r=1">
              <IoLogoTiktok className="text-2xl" />
            </Link>
            <Link href="">
              <FaWhatsapp className="text-2xl" />
            </Link>
          </div>
        </div>
      </div>
      <div className=" bg-secondary text-center py-2 text-white px-2">
        تم التصميم و البرمجة من قبل شركة{" "}
        <Link href="https://www.linkedin.com/company/geomakani/about/">
          <span className="text-primary">جيومكاني</span> جميع الحقوق محفوظة
        </Link>
      </div>
    </div>
  );
};

export default Footer;
