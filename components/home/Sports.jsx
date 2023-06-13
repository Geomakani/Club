import React from "react";
import Image from "next/image";
import Link from "next/link";
import CenterTitle from "../CenterTitle";
// import { useRouter } from "next/router";

// import {GiPingPongBat} from "react-icons/gi"
// import {TbSwimming,MdSportsGymnastics} from "react-icons/ti"

const Sports = ({ clickedSport, setClickedSport }) => {
  // const router = useRouter();

  // const sportsIcons = [
  //   {
  //     id: 1,
  //     name: GiPingPongBat,
  //   },
  //   {
  //     id: 2,
  //     name: TbSwimming,
  //   },
  //   {
  //     id: 3,
  //     name: MdSportsGymnastics,
  //   },
  //   {}
  // ]
  return (
    <div className="py-12">
      <CenterTitle
        title=" المركز الترفيهي"
        titleBack="/assets/shapeBase1.png"
      />

      <div className="w-[85%] mx-auto my-8">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 justify-center items-center">
          <Image
            src="/assets/sports.png"
            alt="sports"
            width={400}
            height={400}
            className="m-auto lg:w-[400px] lg:h-[400px] w-[300px] h-[300px]"
          />
          <div className="text-right">
            <p className="mb-10 lg:text-xl text-lg">
              وكان يحتوي مركز التنمية الرياضية في الدور الأرضي على 4 ملاعب
              أسكواش وصالة بلياردو وسنوكر وغرف خلع ملابس وحمامات نظيفة للرجال
              وللسيدات، وعيادة طبية وكافيتريا.
            </p>

            <button
              className="bg-secondary2 text-white lg:text-xl px-4 py-2 hover:bg-secondary"
              style={{ boxShadow: "-3px -3px #001517" }}
            >
              <Link href={"/Sports"}>استكشف الان</Link>
            </button>
          </div>
        </div>
        {/* sports icons */}
        <div className="grid lg:grid-cols-10 grid-cols-5 gap-x-2 gap-y-6 justify-items-center items-center mt-10">
          {/* <Link
            href="/Sports#sportContent"
            onClick={(e) => {
              e.preventDefault(); // prevent the default behavior of the link
              setClickedSport(0);
              router.push("/Sports#sportContent"); // redirect to the new page
            }}
          >
            <Image
              src="/assets/Vector1.png"
              alt="sports"
              width={50}
              height={50}
            />
            
          </Link> */}
          <Image
            src="/assets/Vector1.png"
            alt="sports"
            width={50}
            height={50}
          />
          <Image
            src="/assets/Vector2.png"
            alt="sports"
            width={50}
            height={50}
          />
          <Image
            src="/assets/Vector3.png"
            alt="sports"
            width={50}
            height={50}
          />
          <Image
            src="/assets/Vector4.png"
            alt="sports"
            width={50}
            height={50}
          />
          <Image
            src="/assets/Vector5.png"
            alt="sports"
            width={50}
            height={50}
          />
          <Image
            src="/assets/Vector6.png"
            alt="sports"
            width={50}
            height={50}
          />
          <Image
            src="/assets/Vector7.png"
            alt="sports"
            width={50}
            height={50}
          />
          <Image
            src="/assets/Vector8.png"
            alt="sports"
            width={50}
            height={50}
          />
          <Image
            src="/assets/Vector9.png"
            alt="sports"
            width={50}
            height={50}
          />
          <Image
            src="/assets/Vector10.png"
            alt="sports"
            width={50}
            height={50}
          />
        </div>
      </div>
    </div>
  );
};

export default Sports;
