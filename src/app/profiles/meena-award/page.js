"use client";

import React from "react";
import { motion } from "framer-motion";
import BahaidarImg from "/public/meena.jpeg";
import { useTypewriter } from "react-simple-typewriter";

export default function MeenaAwardPage() {
  const [text, count] = useTypewriter({
    words: ["Who is Dr Bahaidar"],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <>
      <h2 className="uppercase text-3xl tracking-[20px] text-center text-black dark:text-white mx-auto">
        The Meena Award
      </h2>
      <motion.section
        className="max-w-6xl mx-auto flex flex-col relative h-screen text-center md:text-left md:flex-row px-8 justify-evenly items-center mt-14 mb-12"
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
          src="/meena.jpeg" // Use the imported image here
          height={560}
          width={460}
          className="mb-22 mt-8 md:mb-0 flex-shrink-0 w-36 h-36 rounded-full object-cover md:rounded-lg xl:w-[400px] xl:h-[500px]"
        />
        <div className="space-y-10 px-0 md:px-10">
          <span className="font-semibold text-base sm:text-xl md:text-2xl text-black dark:text-white">
            Conferred the MEENA Brand Award in Muscat, Oman
          </span>
          <br />
          <span className="font-semibold text-base sm:text-xl md:text-2xl text-accent dark:text-accentDark">
            Author, Motivational Received the distinguished Middle East and
            North Africa (MEENA Award in a coveted ceremony on 30th October,
            2019 for providing visionary and pragmatic solutions (Reported in
            The Qatar Tribune 5th November, 2019 Edition)
          </span>{" "}
          <p className="text-sm text-black dark:text-white">
            The greatest motivation in life is inspiring others to believe in
            themselves and accomplish the impossible. I have dedicated my life
            to positively impact others. My disadvantaged background as a slow
            performer did not deter me from becoming an inspiring author who
            sees the need to not only motivate but provide pragmatic solutions
            to the existing complications that affect our lives. I have lived in
            Qatar for almost four years and was awarded Best Meena Personal
            Brand Award in Oman at an event which took place in Muscat.
          </p>
        </div>
      </motion.section>
      <div className="max-w-6xl py-10 mx-auto">
        <a
          href=""
          onClick={() => openModal("/anime/hope.jpeg")}
          className="group relative flex h-80 items-end overflow-hidden rounded-lg shadow-lg md:col-span-2 md:h-96"
        >
          <img
            src="/meenagroup.png"
            loading="lazy"
            alt="Sparkiling Hope book cover"
            className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
          />

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

          <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
            Sparkling Hope
          </span>
        </a>
        <p className="text-sm py-8 px-8 text-center md:text-left text-black dark:text-white">
          I was honored with one of the most distinguished awards in the Middle
          East and North Africa, a result of my visionary and innovative
          character working to create exceptional difference in the world
          leading to many advocates and fans. I have interacted with multiple
          personalities in my quest to drive across the message of hope and
          achievement. The greatest feat a man can accomplish is making a
          positive difference in the lives of ordinary and vulnerable people. It
          is this thinking that catapults me to social media stardom as a
          multifaceted individual. I have been frequently featured on Radio, TV
          and across major social media platforms. My agenda is cultivating the
          belief in selfconfidence to inspire and motivate people from all walks
          of life. I utilize my philosophical background and business acumen to
          help youth, women and families achieve their full potential.
        </p>
      </div>
    </>
  );
}
