import React, { use } from "react";
import Modal from "react-modal";
import { useState } from "react";
import { MdAdd } from "react-icons/md";
import { HiMinusSm } from "react-icons/hi";
import Follower from "./Follower";
import FormHeader from "./FormHeader";
import FormContent from "./FormContent";

Modal.setAppElement("#__next");

const PopupForm = ({ onClose }) => {
  // console.log("Render");

  const [followersCount, setFollowersCount] = useState(0);
  const [formData, setFormData] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  // const handleChange = (event) => {
  //   const { name, value } = event.target;
  //   // if (name === "phone" || name === "landlinePhoneNumber") {
  //   //   value.replace(/[^0-9]/g, "");
  //   // }
  //   setFormData((prevData) => ({ ...prevData, [name]: value }));
  // };

  return (
    <>
      <Modal
        isOpen={true}
        onRequestClose={onClose}
        className=" inset-0 z-50 overflow-auto bg-gray-800 bg-opacity-50 flex justify-center items-center pt-[70px]"
        overlayClassName="fixed inset-0 z-50 overflow-auto"
      >
        <form
          onKeyDown={(event) => {
            if (event.key == "Enter") event.preventDefault();
          }}
          className="bg-white rounded-lg py-6 pb-12 px-10 lg:w-[55%] w-[90%] "
          onSubmit={handleSubmit}
          style={{ direction: "rtl" }}
        >
          <FormHeader close={onClose} />

          <FormContent handleChange={handleChange} />

          <div className="flex gap-2">
            <div
              className=" flex items-center justify-center gap-1  bg-secondary text-white  py-2 px-4 rounded relative cursor-pointer"
              style={{ float: "left" }}
              onClick={() => setFollowersCount(followersCount + 1)}
            >
              اضافة تابع
              <MdAdd size={25} />
            </div>
            {followersCount > 0 && (
              <div
                className=" flex items-center justify-center gap-1  bg-secondary text-white  py-2 px-4 rounded relative cursor-pointer"
                style={{ float: "left" }}
                onClick={() => setFollowersCount(followersCount - 1)}
              >
                حذف تابع
                <HiMinusSm size={25} />
              </div>
            )}
          </div>

          {/* followersData */}
          {[...Array(followersCount)].map((e, i) => (
            <Follower
              key={i}
              FollowerNumber={i + 1}
              handleChange={handleChange}
            />
          ))}

          <button
            className="bg-secondary2 hover:bg-secondary text-white text-lg py-2 px-12 rounded relative top-10"
            type="submit"
            style={{ float: "right" }}
          >
            ارسال
          </button>
        </form>
      </Modal>{" "}
    </>
  );
};

export default PopupForm;
