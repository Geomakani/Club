import Image from "next/image";

export default function SidenavHeader() {
  return (
    <>
      <div className="bg-gray-900 flex justify-center items-center pt-6 pb-4 sticky top-0 z-10">
        <Image src="/assets/Logo-2.png" width={80} height={90} alt="logo" />
        {/* <div className="text-right">
          <h1 className="text-xl">نادي النادي</h1>
          <p className="text-gray-400">فرع شيراتون</p>
        </div> */}
      </div>
      <hr />
    </>
  );
}
