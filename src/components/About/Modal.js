import React from "react";

const Modal = ({ imageUrl, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="modal-overlay fixed inset-0 bg-white opacity-60 "></div>
      <div className="modal z-40 p-4 md:p-44 rounded-lg">
        <img
          src={imageUrl}
          alt="Enlarged Image"
          className="w-full h-screen my-10 object-contain mx-auto"
        />
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-4xl px-4 py-2 bg-neutral-800 text-white rounded-md"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
