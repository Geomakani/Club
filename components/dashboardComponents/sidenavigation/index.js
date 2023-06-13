import SidenavItems from "./items";
import SidenavHeader from "./header";
import css from "./style.module.css";
import { useToggle } from "../provider/context";

const style = {
  mobilePosition: {
    left: "left-0 ",
    right: "right-0 ",
  },
  container: `pb-32 lg:pb-12`,
  close: `duration-500 ease-out hidden transition-all lg:w-[75px] `,
  open: `absolute duration-500 ease-in transition-all w-6/12 z-40 sm:w-4/12 md:w-60`,
  default: `h-screen overflow-y-auto text-white top-0 lg:absolute bg-gray-900 lg:block lg:z-40`,
};

export default function SideNavigation({ mobilePosition }) {
  const { open, ref } = useToggle();
  return (
    <aside
      ref={ref}
      className={`${style.default} ${style.mobilePosition[mobilePosition]} 
        ${open ? style.open : style.close} ${css.scrollbar}`}
      style={{ right: "0px", boxShadow: "0px 0px 10px 0px #000000" }}
    >
      <div className={style.container}>
        <SidenavHeader />
        <SidenavItems />
      </div>
    </aside>
  );
}
