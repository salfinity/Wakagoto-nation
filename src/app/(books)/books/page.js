"use client";

import { booksData } from "@/lib/data";
import { motion } from "framer-motion";
import TransitionEffect from "@/src/components/TransitionEffect";
import React from "react";

export default function Books() {
  return (
    <>
      <TransitionEffect />
      <h2 className="uppercase text-black dark:text-white text-3xl tracking-[20px] text-center mt-10 mx-auto">
        Books
      </h2>
      <motion.div
        className="w-full flex flex-col relative h-screen text-center md:text-left md:flex-row px-8 justify-evenly items-center mt-8 mb-28 "
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.175 }}
        id="books"
      >
        <div className="max-w-full flex overflow-x-scroll py-4 overflow-y-scroll md:overflow-y-scroll  snap-x snap-mandatory">
          {booksData.map((book, index) => (
            <div
              key={index}
              className="w-screen flex-shrink-0 snap-center flex flex-col md:flex-row items-center justify-center p-4 md:p-24 h-screen"
            >
              <motion.img
                initial={{
                  opacity: 0,
                  y: -200,
                }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                src={book.imageUrl} // Use the imageUrl from the book object
                alt="" // Use the title as alt text
                width={200}
                height={200}
                className="mb-22 mt-8 md:mb-0 flex-shrink-0 w-36 h-36 rounded-md object-cover md:rounded-lg xl:w-[300px] xl:h-[400px] hidden md:flex"
              />
              <div className="space-y-6 px-0 md:px-6 max-w-8xl">
                <div className="ml-12 items-center justify-center">
                  <img
                    src={book.titleImageUrl} // Use the imageUrl from the book object
                    alt="" // Use the title as alt text
                    width={45}
                    height={30}
                    className="mb-8 mt-0 md:mb-0 pt-24 flex-shrink-0 w-full h-full  object-cover "
                  />
                </div>

                <p
                  className="text-sm text-black dark:text-white text-center grow h-3/4 md:text-left"
                  style={{ maxHeight: "500px" }}
                >
                  {book.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="hidden w-full absolute top-[30%] bg-[#ff0000]/10 left-0 h-[500px] -skew-y-12" />
      </motion.div>
    </>
  );
}
