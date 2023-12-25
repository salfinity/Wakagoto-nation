"use client";

import React from "react";
import { motion } from "framer-motion";
import BahaidarImg from "/public/about/pic10.jpeg";
import { useTypewriter } from "react-simple-typewriter";

export default function WhoIsDrBahaidarPage() {
  const [text, count] = useTypewriter({
    words: ["Who is Dr Bahaidar"],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <>
      <h2 className="uppercase text-3xl tracking-[20px] text-center text-black dark:text-white mx-auto">
        My journey...
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
          src="/about/education.jpg" // Use the imported image here
          height={560}
          width={460}
          className="mb-22 mt-8 md:mb-0 flex-shrink-0 w-36 h-36 rounded-full object-cover md:rounded-lg xl:w-[400px] xl:h-[500px]"
        />
        <div className="space-y-10 px-0 md:px-10">
          <span className="font-semibold text-base sm:text-3xl md:text-4xl text-accent dark:text-accentDark">
            My Journey Towards Excellence
          </span>{" "}
          <br />
          <p className="text-sm text-black dark:text-white">
            Coming from a childhood riddled with mockery and often being
            referred to as a failure and good for nothing, I did not let this
            break me but instead the misconceptions made me desire to succeed. I
            studied hard and achieved the doctorate level, achieving a PhD in
            Management from the University of Newcastle. I have always aspired
            to make a positive difference in my personal pursuit for knowledge
            and enlightenment of society in general. I am an established author
            of 5 books published in the United States and the United Kingdom and
            currently in the process of publishing more books. I have been a
            keynote speaker in various institutions to mention but a few;
            Stamford International University, Bangkok – Thailand, City
            University in Kuala Lumpur - Malaysia, a 3-day seminar at the Kenya
            Institute of foreign languages and professional studies in Nairobi -
            Kenya, and Universities in Zanzibar – Tanzania etc.
          </p>
        </div>
      </motion.section>
    </>
  );
}
