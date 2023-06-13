import React from "react";
import Image from "next/image";

const ProfileHeader = () => {
  return (
    <div className="h-20 w-full mb-4 ">
      <div className="flex justify-end gap-2 mb-2 ">
        <Image
          src="/assets/follower1.png"
          alt="follower"
          width={44}
          height={44}
          className=""
        />
        <Image
          src="/assets/follower2.png"
          alt="follower"
          width={44}
          height={44}
          className=""
        />
        <Image
          src="/assets/follower3.png"
          alt="follower"
          width={44}
          height={44}
          className=""
        />
      </div>
      <h1 className="text-2xl ">الملف الشخصي</h1>
    </div>
  );
};

export default ProfileHeader;
