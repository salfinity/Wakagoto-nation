"use client";

import React from "react";
import { useState } from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import { quotesData } from "/lib/data";

const Modal = ({ isOpen, onClose }) => {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  const handleNextClick = () => {
    setCurrentQuoteIndex((prevIndex) =>
      prevIndex === quotesData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevClick = () => {
    setCurrentQuoteIndex((prevIndex) =>
      prevIndex === 0 ? quotesData.length - 1 : prevIndex - 1
    );
  };

  const modalStyle = {
    display: isOpen ? "block" : "none",
  };
  const { number, text, author } = quotesData[currentQuoteIndex];

  return (
    <div
      className="fixed inset-0 p-6 md:p-24 flex flex-wrap 
      justify-center items-center w-full mx-auto h-full z-[1000] 
      before:fixed before:inset-0 before:w-full before:h-full 
      before:bg-[rgba(0,0,0,0.5)] overflow-auto font-[sans-serif]"
      style={modalStyle}
    >
      <div className="w-full max-w-lg justify-center bg-white shadow-lg rounded-xl mx-auto px-4 py-4 relative">
        <div className="flex items-center pb-2 border-b">
          <h3 className="text-lg text-black font-semibold flex-1">
            Delve into my collection of profound quotes
          </h3>
          <MdOutlineClose
            className="w-6 h-6 cursor-pointer fill-black hover:fill-red-500"
            onClick={onClose}
          />
        </div>
        <div className="my-4 pb-8">
          <h1 className="text-black text-2xl font-bold underline decoration-orange-500 pb-10 py-1 px-4">
            {number}
          </h1>
          <div className="flex flex-col text-center items-center">
            <FaQuoteLeft />
            <p className="text-sm text-black">{text}</p>
            <FaQuoteRight />
          </div>
          <h3 className="text-black italic font-semibold text-center md:text-right">
            -By {author}
          </h3>
          {/* Add more content as needed */}
        </div>
        <div className="border-t flex justify-end pt-2 space-x-4">
          <button
            className="items-center gap-4 flex px-3 py-2 rounded-full text-white text-sm font-semibold border-none outline-none bg-slate-600 hover:bg-slate-700 active:bg-gray-200"
            onClick={handlePrevClick}
          >
            <FaArrowAltCircleLeft />
            <span>prev</span>
          </button>
          <button
            className="items-center gap-4 flex px-3 py-2 rounded-full text-white text-sm font-semibold border-none outline-none bg-slate-600 hover:bg-slate-700 active:bg-gray-200"
            onClick={handleNextClick}
          >
            <span>next</span>
            <FaArrowAltCircleRight />
          </button>
          <button
            type="button"
            className="px-6 py-2 rounded text-white text-sm font-semibold border-none outline-none bg-red-600 hover:bg-red-700 active:bg-gray-200"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
