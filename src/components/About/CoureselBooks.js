"use client";

import Modal from "./Modal";
import React, { useState } from "react";
import { FaHandPointDown } from "react-icons/fa";

const CoureselBooks = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const openModal = (imageUrl) => {
    setSelectedImage(imageUrl);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImage("");
    setModalOpen(false);
  };

  return (
    <div className="w-full h-full">
      <div className="py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="mb-4 flex items-center justify-between gap-8 sm:mb-8 md:mb-12">
            <div className="flex items-center gap-12">
              <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl dark:text-white">
                BOOKS
              </h2>

              <span className="font-semibold text-base sm:text-3xl md:text-4xl text-accent dark:text-accentDark">
                This are the best selling books authored by Dr Mohamed Bahaidar
              </span>
            </div>

            <a
              href=""
              className=" flex items-center rounded-lg border bg-white dark:bg-gray-700 dark:border-none px-4 py-2 text-center text-sm font-semibold text-gray-500 dark:text-gray-200 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:px-8 md:py-3 md:text-base"
            >
              Check out Blurbs <FaHandPointDown size={30} />
            </a>
          </div>

          <div className="grid grid-cols-1 cursor-pointer gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
            <a
              href=""
              onClick={() => openModal("/anime/point.jpg")}
              className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
            >
              <img
                src="/anime/point.jpg"
                loading="lazy"
                alt="Point of deflection book cover"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

              <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                The Point of deflection
              </span>
            </a>
            <a
              href=""
              onClick={() => openModal("/anime/hidden.jpg")}
              className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80"
            >
              <img
                src="/anime/hidden.jpg"
                loading="lazy"
                alt="The hidden self book cover"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

              <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                The hidden self
              </span>
            </a>
            <a
              href=""
              onClick={() => openModal("/anime/mirror.jpeg")}
              className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80"
            >
              <img
                src="/anime/mirror.jpeg"
                loading="lazy"
                alt="Mirrorr reflection book cover"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

              <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                The mirror reflection
              </span>
            </a>

            <a
              href=""
              onClick={() => openModal("/anime/household.jpg")}
              className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
            >
              <img
                src="/anime/household.jpg"
                loading="lazy"
                alt="A household of bliss"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

              <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                A household of Bliss
              </span>
            </a>
            <a
              href=""
              onClick={() => openModal("/anime/hope.jpeg")}
              className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-3 md:h-80"
            >
              <img
                src="/anime/hope.jpeg"
                loading="lazy"
                alt="Sparkiling Hope book cover"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

              <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                Sparkling Hope
              </span>
            </a>
          </div>
        </div>
      </div>
      {modalOpen && <Modal imageUrl={selectedImage} onClose={closeModal} />}
    </div>
  );
};

export default CoureselBooks;
