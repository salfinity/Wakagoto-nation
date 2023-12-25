"use client";

import React from "react";
import { motion } from "framer-motion";

export default function EventOrganizerPage() {
  return (
    <>
      <h2 className="uppercase text-3xl tracking-[20px] text-center text-black dark:text-white mx-auto">
        Brands & Events
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
          src="/ambassador.jpeg" // Use the imported image here
          height={560}
          width={460}
          className="mb-22 mt-8 md:mb-0 flex-shrink-0 w-36 h-36 rounded-full object-cover md:rounded-lg xl:w-[400px] xl:h-[500px]"
        />
        <div className="space-y-10 px-0 md:px-10">
          <span className="font-semibold text-base sm:text-3xl md:text-4xl text-accent dark:text-accentDark">
            Event Organizer & Brand Ambassador
          </span>{" "}
          <br />
          <p className="text-sm text-black dark:text-white">
            I initiate programs and motivational talks to guide the youth
            towards their future ambitions. Furthermore, I took those who have a
            talent in singing to studios to ensure they record their music. For
            dancers and comedians, I introduced a platform called Cheka Na
            Doctor B where they showcase their talent and are featured in media.
            media, radio and tv interactions. I aspire to give back to society
            and make a positive difference. I am an ambassador for hire and
            represent brands in achieving their advertising and marketing goals.
            I have a knack for delivering results as per requirements and
            expectations. Dr. B is a strong personality that brands can create
            affinity and generate positive responses from their targeted
            markets.
          </p>
        </div>
      </motion.section>
    </>
  );
}
