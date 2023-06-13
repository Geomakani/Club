import React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
// import { sports } from "@/components/data/sports";
import { useContext } from "react";
import { MyAppContext } from "../pages/_app.js";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showList1, setShowList1] = useState(false);
  const [showList2, setShowList2] = useState(false);
  const [showList3, setShowList3] = useState(false);

  const { clickedSport, setClickedSport } = useContext(MyAppContext);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const { i18n } = useTranslation("common");

  const changeLanguage = (e) => {
    i18n.changeLanguage(e.target.value);
    router.push(router.pathname, router.asPath, { locale: e.target.value });
  };

  const router = useRouter();

  useEffect(() => {
    router.push(router.pathname, router.asPath, { locale: "ar" });
  }, []);

  return (
    <nav className="bg-primary lg:opacity-85 opacity-95 z-[200] shadow-lg fixed w-full">
      <div className="max-w-9xl mx-auto px-8 sm:px-6">
        <div className="flex lg:justify-evenly justify-between h-[70px] m-auto ">
          {/* Mobile menu button */}
          <div className="-mr-2 flex items-center lg:hidden">
            <select
              id="language-select"
              name="language"
              className="bg-transparent text-white text-sm focus:outline-none cursor-pointer mr-2"
              onChange={changeLanguage}
            >
              <option value="ar" className="text-black">
                Ar
              </option>
              <option value="en" className="text-black">
                En
              </option>
            </select>
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-slate-400  focus:outline-none focus:ring-1 focus:ring-inset focus:ring-white"
              aria-expanded="false"
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              {/* Icon when menu is closed. */}
              {isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                /* Icon when menu is open. */

                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
          {/* Desktop menu */}
          <div className="hidden lg:flex lg:justify-center lg:items-center lg:space-x-8 ">
            <div className="flex text-white justify-center items-center">
              <select
                id="language-select"
                name="language"
                className="bg-transparent text-white text-sm focus:outline-none cursor-pointer mr-2"
                onChange={changeLanguage}
              >
                <option value="ar" className="text-black">
                  Ar
                </option>
                <option value="en" className="text-black">
                  En
                </option>
              </select>
            </div>

            <Link
              href="/sign/SignIn"
              className="text-white bg-secondary hover:bg-primary hover:border border-secondary block px-5 py-2 text-sm rounded-md"
            >
              <span>تسجيل الدخول</span>
            </Link>
            <Link
              href="/Media"
              className=" text-white hover:text-secondary block px-3 py-2 text-sm"
            >
              <span className={router.pathname === "/Media" ? "active" : ""}>
                الاعلام
              </span>
            </Link>

            <div
              onMouseEnter={() => setShowList3(true)}
              onMouseLeave={() => setShowList3(false)}
            >
              <div className=" text-white hover:text-secondary block px- py-2 text-sm cursor-pointer">
                <div className="flex items-center gap-1">
                  {showList3 ? <IoIosArrowUp /> : <IoIosArrowDown />}
                  <span>عن النادي</span>
                </div>
              </div>
              {showList3 && (
                <div className="absolute origin-top-right bg-primary rounded-md border border-secondary text-gray-300 p-2 shadow-lg text-right">
                  <Link
                    href="/Chairman"
                    className="block px-3 py-2 text-sm hover:text-white"
                  >
                    كلمة رئيس النادي
                  </Link>
                  <Link
                    href="/NotReady"
                    className="block px-3 py-2 text-sm hover:text-white"
                  >
                    أعضاء المجلس
                  </Link>
                  <Link
                    href="/About"
                    className="block px-3 py-2 text-sm hover:text-white"
                  >
                    عن النادي
                  </Link>
                </div>
              )}
            </div>
            <Link
              href="/Shops"
              className=" text-white hover:text-secondary block px-3 py-2 text-sm"
            >
              <span className={router.pathname === "/Shops" ? "active" : ""}>
                المتاجر
              </span>
            </Link>

            <div
              onMouseEnter={() => setShowList2(true)}
              onMouseLeave={() => setShowList2(false)}
            >
              <div className=" text-white hover:text-secondary block px-3 py-2 text-sm cursor-pointer">
                <div className="flex items-center gap-1">
                  {showList2 ? <IoIosArrowUp /> : <IoIosArrowDown />}
                  <span>خدمات النادي</span>
                </div>
              </div>
              {showList2 && (
                <div className="absolute origin-top-right bg-primary rounded-md border border-secondary text-gray-300 p-[2px] shadow-lg text-right">
                  <Link
                    href="/MemberService"
                    className="block px-3 py-2 text-sm hover:text-white"
                  >
                    خدمات الأعضاء
                  </Link>
                  <Link
                    href="/Jobs"
                    className="block px-3 py-2 text-sm hover:text-white"
                  >
                    الوظائف
                  </Link>
                  <Link
                    href="/Tender"
                    className="block px-3 py-2 text-sm hover:text-white"
                  >
                    المناقصات
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/Sports"
              className=" text-white hover:text-secondary block px-3 py-2 text-sm"
            >
              <span className={router.pathname === "/Sports" ? "active" : ""}>
                الأنشطة الرياضية
              </span>
            </Link>

            <div
              onMouseEnter={() => setShowList1(true)}
              onMouseLeave={() => setShowList1(false)}
            >
              <div className=" text-white hover:text-secondary block px-3 py-2 text-sm cursor-pointer">
                <div className="flex items-center gap-1">
                  {showList1 ? <IoIosArrowUp /> : <IoIosArrowDown />}
                  <span>الأنشطة الاجتماعية</span>
                </div>
              </div>
              {showList1 && (
                <div className="absolute origin-top-right bg-primary rounded-md border border-secondary text-gray-300 p-2 shadow-lg text-right">
                  <Link
                    href="/Events"
                    className="block px-3 py-2 text-sm hover:text-white"
                  >
                    الأحداث
                  </Link>

                  <Link
                    href="/Halls"
                    className="block px-3 py-2 text-sm hover:text-white"
                  >
                    تأجير قاعات
                  </Link>
                  <Link
                    href="/NotReady"
                    className="block px-3 py-2 text-sm hover:text-white"
                  >
                    الأنشطة الاجتماعية
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/"
              className=" text-white hover:text-secondary block px-3 py-2 text-sm"
            >
              <span className={router.pathname === "/" ? "active" : ""}>
                الرئيسية
              </span>
            </Link>
          </div>

          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Image src="/assets/Logo.png" alt="Logo" width={75} height={60} />
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden text-right" id="mobile-menu">
          <div className="pt-2 pb-3 space-y-1">
            <Link
              href="/sign/SignIn"
              className=" text-white hover:text-secondary block px-3 py-2 text-sm"
            >
              <span
                className={router.pathname === "/sign/SignIn" ? "active" : ""}
              >
                تسجيل الدخول
              </span>
            </Link>
            <Link
              href="/Media"
              className="text-white hover:text-green-300 block px-3 py-2 text-sm"
            >
              <span className={router.pathname === "/Media" ? "active" : ""}>
                الاعلام
              </span>
            </Link>

            <div
              className="relative flex justify-end"
              onClick={() => setShowList3(!showList3)}
            >
              <div className="text-white hover:text-secondary block px-3 py-2 text-sm cursor-pointer">
                <div className="flex justify-end items-center gap-1">
                  {showList3 ? <IoIosArrowUp /> : <IoIosArrowDown />}
                  <span>عن النادي</span>
                </div>
              </div>
            </div>
            {showList3 && (
              <div className="relative bg-primary rounded-md text-gray-400 p-2 text-right mr-2 z-10">
                <Link
                  href="/Chairman"
                  className="block px-3 py-2 text-sm hover:text-white"
                >
                  كلمة رئيس النادي
                </Link>
                <Link
                  href="/NotReady"
                  className="block px-3 py-2 text-sm hover:text-white"
                >
                  أعضاء المجلس
                </Link>
                <Link
                  href="/About"
                  className="block px-3 py-2 text-sm hover:text-white"
                >
                  عن النادي
                </Link>
              </div>
            )}
            <Link
              href="/Shops"
              className=" text-white hover:text-secondary block px-3 py-2 text-sm"
            >
              <span className={router.pathname === "/Shops" ? "active" : ""}>
                المتاجر
              </span>
            </Link>

            <div
              className="relative flex justify-end"
              onClick={() => setShowList2(!showList2)}
            >
              <div className="text-white hover:text-secondary block px-3 py-2 text-sm cursor-pointer ">
                <div className="flex justify-end items-center gap-1">
                  {showList2 ? <IoIosArrowUp /> : <IoIosArrowDown />}
                  <span>خدمات النادي</span>
                </div>
                {showList2 && (
                  <div className="relative bg-primary text-gray-400 text-right p-2  mr-2 z-10">
                    <Link
                      href="/MemberService"
                      className="block px-3 py-2 text-sm hover:text-white"
                    >
                      خدمات الأعضاء
                    </Link>
                    <Link
                      href="/Jobs"
                      className="block px-3 py-2 text-sm hover:text-white"
                    >
                      الوظائف
                    </Link>
                    <Link
                      href="/Tender"
                      className="block px-3 py-2 text-sm hover:text-white"
                    >
                      المناقصات
                    </Link>
                  </div>
                )}
              </div>
            </div>

            <Link
              href="/Sports"
              className=" text-white hover:text-secondary block px-3 py-2 text-sm"
            >
              <span>الأنشطة الرياضية</span>
            </Link>

            <div
              className="relative flex justify-end"
              onClick={() => setShowList1(!showList1)}
            >
              <div className=" text-white hover:text-secondary block px-3 py-2 text-sm cursor-pointer">
                <div className="flex justify-end items-center gap-1">
                  {showList1 ? <IoIosArrowUp /> : <IoIosArrowDown />}
                  <span>الأنشطة الاجتماعية</span>
                </div>
                {showList1 && (
                  <div className="relative bg-primary text-gray-400 p-2 text-right mr-2 z-10">
                    <Link
                      href="/Events"
                      className="block px-3 py-2 text-sm hover:text-white"
                    >
                      الأحداث
                    </Link>

                    <Link
                      href="/Halls"
                      className="block px-3 py-2 text-sm hover:text-white"
                    >
                      تأجير قاعات
                    </Link>
                    <Link
                      href="/NotReady"
                      className="block px-3 py-2 text-sm hover:text-white"
                    >
                      الأنشطة الاجتماعية
                    </Link>
                  </div>
                )}
              </div>
            </div>

            <Link
              href="/"
              className="text-white hover:text-[/Test4BD064] block px-3 py-2 text-sm "
            >
              <span className={router.pathname === "/" ? "active" : ""}>
                الرئيسية
              </span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
