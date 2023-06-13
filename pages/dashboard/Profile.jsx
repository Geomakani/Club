import React from "react";
import DashboardLayout from "@/components/dashboardComponents/layout";
import ProfileHeader from "@/components/dashboardComponents/profile/ProfileHeader";
import ProfileComponent from "@/components/dashboardComponents/profile/ProfileComponent";

const Profile = () => {
  return (
    <DashboardLayout>
      <div
        className="lg:h-[80vh] lg:w-[90%] mt-2 bg-white rounded-lg pr-12 py-4 text-right lg:ml-[2%]"
        style={{ boxShadow: "-1px 1px 5px gray" }}
      >
        <ProfileHeader />
        <ProfileComponent />
      </div>
    </DashboardLayout>
  );
};

export default Profile;
