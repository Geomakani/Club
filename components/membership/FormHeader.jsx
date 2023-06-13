import React from "react";

const FormHeader = ({ close }) => {
  return (
    <>
      <div
        className="flex justify-between items-center "
        style={{
          textAlign: "right",
          borderBottom: "1px solid #ccc",
          paddingBottom: "0.5rem",
        }}
      >
        <h2 className="lg:text-xl text-lg font-bold mb-4 relative  ">
          استمارة تقديم على عضوية في
          <span className="text-secondary"> النادي </span>
        </h2>
        <button
          className="ReactModal__Close bg-white hover:bg-gray-300 rounded-full p-2 relative  mr-2"
          onClick={close}
          style={{ float: "left" }}
        >
          <span className="sr-only">Close</span>
          <svg
            className="w-6 h-6 text-gray-700 stroke-current stroke-2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <p className="text-sm text-gray-400 mt-2">
        هذة استمارة مبدأية و جميع البيانات يمكن تغييرها بعد ذلك
      </p>
    </>
  );
};

export default FormHeader;
