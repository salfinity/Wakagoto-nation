"use client";

import React from "react";
import Image from "next/image";
import { useState } from "react";
import circleImg from "/public/circletextquotes.png";
import whatsappImg from "/public/quotes.png";
import Modal from "../Quotes/Modal";
import { quotesData } from "/lib/data";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const CircleQuotes = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleButtonClick = () => {
    setModalOpen(!isModalOpen);
  };

  const { number, text, author } = quotesData[0];

  return (
    <div className="fixed right-4 bottom-4 flex items-center justify-center overflow-hidden z-50">
      <div className="w-48 h-auto flex items-center justify-center relative">
        <Image
          src={circleImg}
          alt="animation text"
          className="w-full h-auto rounded-full fill-black dark:fill-slate-50 animate-spin-slow"
          priority
        />
        <button
          className="flex items-center justify-center absolute
        left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer p-4 hover:opacity-80 focus:outline-none"
          onClick={handleButtonClick}
        >
          <Image
            src={whatsappImg}
            alt="quotesBahaidar"
            width={100}
            height={100}
          />
        </button>
        <Modal isOpen={isModalOpen} onClose={handleButtonClick}>
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
        </Modal>
      </div>
    </div>
  );
};

export default CircleQuotes;
