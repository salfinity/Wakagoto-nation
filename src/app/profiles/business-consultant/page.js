"use client";

import React from "react";
import { motion } from "framer-motion";

export default function BusinessConsultantPage() {
  return (
    <>
      <h2 className="uppercase text-3xl tracking-[20px] text-center text-black dark:text-white mx-auto">
        Business Consultant
      </h2>
      <motion.section
        className="max-w-6xl mx-auto flex flex-col relative h-screen text-center md:text-left md:flex-row px-8 justify-evenly items-center mt-14 mb-28 "
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.175 }}
        id="about"
      >
        <motion.img
          initial={{
            x: -200,
          }}
          transition={{
            duration: 1.2,
          }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          src="/about/business.jpg" // Use the imported image here
          height={560}
          width={460}
          className="mb-22 mt-8 md:mb-0 flex-shrink-0 w-36 h-36 rounded-full object-cover md:rounded-lg xl:w-[400px] xl:h-[500px]"
        />
        <div className="space-y-10 px-0 md:px-10">
          <span className="font-semibold text-base sm:text-3xl md:text-4xl text-accent dark:text-accentDark">
            Business Consultant Providing Pragmatic & Comprehensive Solutions
          </span>{" "}
          <br />
          <p className="text-sm text-black dark:text-white">
            The more I delved into the world of philosophy, psychology and
            motivational stories the more craving I developed to cover as many
            more books, which made me recognize the beauty existence has to
            offer. Through one-on-one engagement in Q&A, my augmented wisdom
            comprehends how business functions in tandem with society,
            projections and expectations. It is this backdrop that gave me the
            aptitude to interact with more than 10,000 people by evaluating and
            introspecting through various cases. Coupled with managerial
            empiricism, I have evolved as an invaluable expert in providing
            counsel in both social and business-related matters. This enables me
            to solve personal obstacles, family conflicts and business-related
            predicaments.
          </p>
        </div>
      </motion.section>
    </>
  );
}
