"use client";

import React from "react";
import { motion } from "framer-motion";
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
        Who is Dr Bahaidar?
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
          src="/about/pic10.jpeg" // Use the imported image here
          height={560}
          width={460}
          className="mb-22 mt-8 md:mb-0 flex-shrink-0 w-36 h-36 rounded-full object-cover md:rounded-lg xl:w-[400px] xl:h-[500px]"
        />
        <div className="space-y-10 px-0 md:px-10">
          <span className="font-semibold text-base sm:text-3xl md:text-4xl text-accent dark:text-accentDark">
            A man who constantly evolves against all odds to inspire others to
            realize their self-worth and potential....
          </span>{" "}
          <br />
          <span className="font-semibold text-base capitalize text-accent dark:text-accentDark">
            Author, Motivational Speaker, Life Coach, Business Consultant,
            Influencer, Media Personality & Researcher
          </span>
          <p className="text-sm text-black dark:text-white">
            My name is Dr. Mohamed Bahaidar and I am currently the Chief
            Executive Officer (CEO) at 95.0 IQRA FM. I am a comprehensive
            business analyst and researcher with over 14 years’ experience
            acquainted with over 2,000 books in matters concerning philosophy,
            psychology, meditation, theology, business modules, leadership,
            entrepreneurship, management, marketing bravura and social issues. I
            provide professional business consultancy and solutions to everyday
            problems. My passion to positively impact my community and region is
            unending.
          </p>
        </div>
      </motion.section>
    </>
  );
}
