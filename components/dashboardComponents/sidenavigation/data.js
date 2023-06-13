import { AiOutlineUser } from "react-icons/ai";
import { HiUsers } from "react-icons/hi";
import { MdOutlineSportsSoccer } from "react-icons/md";
import { AiOutlineCalendar } from "react-icons/ai";
import { AiOutlineFire } from "react-icons/ai";
import { BiCircleThreeQuarter } from "react-icons/bi";
import { IoSettingsOutline } from "react-icons/io5";

const data = [
  {
    title: "العضوية",
    icon: <AiOutlineUser size={23} />,
    link: "/dashboard/Profile",
  },
  {
    title: "التابعين",
    icon: <HiUsers size={23} />,
    link: "/",
  },
  {
    title: "الأنشطة",
    icon: <MdOutlineSportsSoccer size={23} />,
    link: "/",
  },
  {
    title: "الأحداث",
    icon: <AiOutlineCalendar size={23} />,
    link: "/",
  },
  {
    title: "الخدمات",
    icon: <AiOutlineFire size={23} />,
    link: "/",
  },
  {
    title: "اخرى",
    icon: <BiCircleThreeQuarter size={23} />,
    link: "/",
  },
  {
    title: "الاعدادات",
    icon: <IoSettingsOutline size={23} />,
    link: "/",
  },
];

export default data;
