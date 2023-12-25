"use client";

import React from "react";
import { motion } from "framer-motion";

export default function MediaEngagementsPage() {
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
          src="/about/pic6.jpeg" // Use the imported image here
          height={560}
          width={460}
          className="mb-22 mt-8 md:mb-0 flex-shrink-0 w-36 h-36 rounded-full object-cover md:rounded-lg xl:w-[400px] xl:h-[500px]"
        />
        <div className="space-y-10 px-0 md:px-10">
          <br />
          <span className="font-semibold text-base sm:text-xl md:text-2xl text-accent dark:text-accentDark">
            panelist in Kenya media and ‘Amka na BBC’ program on various social
            issues.
          </span>{" "}
          <p className="text-sm text-black dark:text-white">
            I have been a panelist in Kenya media and ‘Amka na BBC’ program on
            various social issues. I have also been invited to a number of TV
            stations such as Citizen, KBC Channel 1, K24 and NTV among others. I
            have offered consultancy services to ‘Drop of Zanzibar’ a Mineral
            Water Company and the Debenhams in Qatar. I have been featured in
            print media by reputable newspapers that include The Daily Nation,
            Taifa Leo, Standard and Ghafla. TV and Radio interviews include the
            ‘SEMA na Citizen’ program which delved into my East Africa book tour
            in 2019. The launch of my book and website was a fanfare event held
            at City Blue Hotel in Mombasa. It was graced by many dignitaries and
            influencers.
          </p>
        </div>
      </motion.section>
      <div className="max-w-6xl mx-auto grid grid-cols-1 cursor-pointer gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
        <a
          href=""
          className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
        >
          <img
            src="/media.png"
            loading="lazy"
            alt="Standard"
            className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
          />

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

          <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
            Standard
          </span>
        </a>
        <a
          href=""
          className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80"
        >
          <img
            src="/about/president.png"
            loading="lazy"
            alt="president"
            className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
          />

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

          <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
            President
          </span>
        </a>
        <a
          href=""
          className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80"
        >
          <img
            src="/meenagroup.png"
            loading="lazy"
            alt="Meena"
            className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
          />

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

          <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
            The Meena Award
          </span>
        </a>

        <a
          href=""
          className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
        >
          <img
            src="/pic1.jpeg"
            loading="lazy"
            alt="public"
            className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
          />

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

          <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
            Public speaker
          </span>
        </a>
        <a
          href=""
          className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-3 md:h-80"
        >
          <img
            src="/msa.png"
            loading="lazy"
            alt="Meena"
            className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
          />

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

          <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
            Meena
          </span>
        </a>
      </div>
      <div className="max-w-6xl mx-auto my-8">
        <p className=" text-sm md:text-lg py-8 px-8 text-center md:text-left text-black dark:text-white">
          I proactively mentor many individuals and business professionals
          through motivational talks and social media interactions. Rubbing
          shoulders with game changers is decisive in articulating our ideas and
          aspirations. It was a pleasure meeting President Ruto at Statehouse
          during his election campaign.
        </p>
        <span className="font-semibold text-base text-center sm:text-xl md:text-2xl text-accent dark:text-accentDark">
          Dreams Come True with Positivity
        </span>{" "}
        <p className=" text-sm md:text-lg py-8 px-8 text-center md:text-left text-black dark:text-white">
          “To be confident with yourself you need to start to visualize your
          dream by implementing it in your reality. Affirmation is one way to
          convert it into reality, it’s all about how much faith you have in
          your dream in order to make it a reality”
        </p>
      </div>
    </>
  );
}
