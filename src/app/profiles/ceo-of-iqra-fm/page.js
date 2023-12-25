"use client";

import React from "react";
import { motion } from "framer-motion";
import corpcommentImg from "/public/corpcomment2.png";

export default function CeoOfIqraFmPage() {
  return (
    <>
      <h2 className="uppercase text-3xl tracking-[20px] text-center text-black dark:text-white mx-auto">
        Ceo Iqra Fm Kenya
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
          src="/about/pic7.jpeg" // Use the imported image here
          height={560}
          width={460}
          className="mb-22 mt-8 md:mb-0 flex-shrink-0 w-36 h-36 rounded-full object-cover md:rounded-lg xl:w-[400px] xl:h-[500px]"
        />
        <div className="space-y-10 px-0 md:px-10">
          <span className="font-semibold text-base sm:text-3xl md:text-4xl text-accent dark:text-accentDark">
            The need to strengthen communication lines and reach out to the
            masses led me to launching the Dawn of IQRA FM
          </span>{" "}
          <br />
          <p className="text-sm text-black dark:text-white">
            as the current Chief Executive Officer (CEO). 95.0 IQRA FM has
            established itself as a reputable radio station that reaches a large
            audience across the Muslim community. The Station has a target
            audience of 700,000 listeners this includes Nairobi and its environs
            plus a few other towns within Kenya, a record of 1,500,000 listeners
            during Ramadhan month. I am fully engaged in the operations and
            advertising departments with clear focus on creation of quality
            content and marketing. 95.0 IQRA FM is the first Islamic radio
            station in Kenya since 2001. The station normally runs for 24 hours
            daily and is the most trusted mouth piece of the community with its
            practical slogan
            <span className="font-semibold text-accent dark:text-accentDark">
              “The Station with a Difference”
            </span>
          </p>
        </div>
      </motion.section>
      <div className="max-w-6xl py-10 mx-auto">
        <a
          href=""
          className="group relative flex h-80 items-end overflow-hidden rounded-lg shadow-lg md:col-span-2 md:h-96"
        >
          <img
            src="/corpcomment2.png"
            loading="lazy"
            alt="Iqra fm 95.0"
            className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
          />

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

          <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
            Iqra fm 95.0
          </span>
        </a>
        <p className="text-sm md:text-base py-8 px-8 text-center md:text-left text-black dark:text-white">
          It is constantly evolving and diversifying business opportunities and
          intensifying its coverage and reach. IQRA FM Radio offers a golden
          opportunity to tap into Kenya's thriving Muslim market to gain access
          to loyal and family-oriented consumers, boost sales and elevate brands
          of advertisers.
        </p>
        <p className="text-sm md:text-base py-8 px-8 text-center md:text-left text-black dark:text-white">
          {" "}
          <span className="font-semibold text-accent dark:text-accentDark">
            Radio Coverage:{" "}
          </span>{" "}
          - Entire Nairobi, Thika, Kirinyaga, Karatina, Nyeri, Kerugoya, Mwingi,
          Kitui, Machakos, Sultan Hamud, Mtito andei, Magadi, Oloitoktok,
          Naivasha, Narok, Murang’a, Embu, Mbeere, Areas of Mount Kilimanjaro,
          Makindu, Namanga, Gilgil, Kajiado with more network areas.
        </p>
        <p className="text-sm md:text-base py-8 px-8 text-center md:text-left text-black dark:text-white">
          {" "}
          <span className="font-semibold text-accent dark:text-accentDark">
            Our digital platform/website:{" "}
          </span>{" "}
          is accessible all over the world for livestreams and much more. Visit{" "}
          <a
            href="https://iqrafm.com"
            target="_blank"
            className="inline-block rounded-full border text-black bg-white dark:bg-gray-700 dark:border-none px-4 py-2 text-center text-sm font-semibold text-gray-500 dark:text-gray-200 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:px-8 md:py-3 md:text-base"
          >
            https://iqrafm.com
          </a>
        </p>
      </div>
    </>
  );
}
