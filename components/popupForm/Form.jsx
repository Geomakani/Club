import React, { use } from "react";
import Modal from "react-modal";
import { useState } from "react";
import Header from "./Header";
import Content from "./Content";

Modal.setAppElement("#__next");

const Form = ({ onClose, bookName, headerName }) => {
  const [formData, setFormData] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <Modal
        isOpen={true}
        onRequestClose={onClose}
        className=" inset-0 z-50 overflow-auto bg-gray-800 bg-opacity-50 flex justify-center items-center pt-[75px]"
        overlayClassName="fixed inset-0 z-[200] overflow-auto"
      >
        <form
          onKeyDown={(event) => {
            if (event.key == "Enter") event.preventDefault();
          }}
          className=" rounded-lg py-6 pb-12 px-16 lg:w-[45%] w-[90%] bg-primary text-white "
          onSubmit={handleSubmit}
          style={{ direction: "rtl" }}
        >
          <Header close={onClose} headerName={headerName} />

          <Content
            handleChange={handleChange}
            bookName={bookName}
            headerName={headerName}
          />
          <div className=" flex justify-center">
            <button
              className="bg-secondary2 hover:bg-secondary text-white text-lg py-2 px-8 rounded relative top-5 w-[50%] m-auto"
              type="submit"
              style={{ boxShadow: "2px 2px " }}
            >
              تقديم الاستمارة
            </button>
          </div>
        </form>
      </Modal>{" "}
    </>
  );
};

export default Form;
