"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaInstagramSquare, FaTiktok, FaYoutube } from "react-icons/fa";
import bahaidarImg from "/public/management/bahaidar.jpeg";
import TeamPage from "./TeamPage";
import { Cursor } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";

export default function ManagementCoverSection() {
  const imageWidth = 200; // Set a reasonable width for your images
  const imageHeight = 200; // Set a reasonable height for your images
  return (
    <>
      <section
        id="intro"
        className="max-w-8xl mb-4 md:mb-40 flex flex-col items-center space-y-2 justify-center text-center sm:mb-0 scroll-mt-[100rem] h-screen overflow-hidden"
      >
        <BackgroundCircles />
        <div className="flex items-center justify-center max-w-6xl z-10">
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                type: "tween",
                duration: 0.2,
              }}
            >
              <Image
                src={bahaidarImg}
                alt="Bahaidar portrait"
                width="250"
                height="250"
                quality="100"
                priority={true}
                className="h-36 w-36 md:h-48 md:w-48 rounded-full object-cover border-[0.35rem] border-white shadow-xl z-0"
              />
            </motion.div>
          </div>
        </div>
        <motion.h2
          className="px-4 text-2xl uppercase font-thin tracking-[15px] !leading-[1.5] sm:text-4xl z-10"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="underline-none text-black dark:text-white">
            Dr.Mohamed Bahaidar
          </span>
          <Cursor cursorColor="#000000" />
        </motion.h2>

        <motion.h3
          className="py-2 px-4 text-xl uppercase text-black dark:text-white font-thin !leading-[1.5] sm:text-2xl z-10"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="underline-none" style={{ letterSpacing: "0.3em" }}>
            <a
              href="https://iqrafm.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              CEO IQRAFM{" "}
            </a>
            | AUTHOR & SCHOLAR | BUSINESS CONSULTANT | MOTIVATIONAL SPEAKER
          </span>
          <Cursor cursorColor="#000000" />
        </motion.h3>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium z-10"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.1,
          }}
        >
          <Link
            href="https://wa.me/254740049095"
            target="_blank"
            className="group bg-slate-400 dark:bg-slate-600 text-black dark:text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition z-10"
            onClick={() => {
              setActiveSection("Contact");
              setTimeOfLastClick(Date.now());
            }}
          >
            Contact me here{" "}
            <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
          </Link>

          <a
            className="group bg-slate-300 px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 z-10"
            href="/CV.pdf"
            download
          >
            Download CV{" "}
            <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
          </a>

          <motion.div className="flex sm:flex-col md:flex-row gap-4">
            <a
              className="bg-slate-200 p-4 text-gray-700 hover:text-gray-950 flex items-center gap-4 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60 z-10"
              href="https://ke.linkedin.com/in/dr-mohamed-bahaidar-73527313a/"
              target="_blank"
            >
              <BsLinkedin />
            </a>

            <a
              className="bg-slate-200 p-4 text-gray-700 flex items-center gap-4 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60 z-10"
              href="https://www.instagram.com/doctorbahaidar/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA=="
              target="_blank"
            >
              <FaInstagramSquare />
            </a>

            <a
              className="bg-slate-200 p-4 text-gray-700 flex items-center gap-4 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60 z-10"
              href="https://www.youtube.com/@dr.mbahaidar2308"
              target="_blank"
            >
              <FaYoutube />
            </a>

            <a
              className="bg-slate-200 p-4 text-gray-700 flex items-center gap-4 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60 z-10"
              href="https://www.tiktok.com/@doctor_bahaidar"
              target="_blank"
            >
              <FaTiktok />
            </a>
          </motion.div>
        </motion.div>
      </section>
      <h1
        className="uppercase  text-3xl tracking-[15px] text-center mt-10 mx-auto font-semibold  
      justify my-8 sm:text-3xl md:text-4xl text-accent dark:text-accentDark"
      >
        <span
          className="underline decoration-6 
          decoration-orange-400"
        >
          MEET
        </span>{" "}
        THE TEAM{" "}
      </h1>
      <div className="lg:gap-x-12 grid text-center mx-auto justify-center gap-x-6 grid-cols-2 md:grid-cols-5 xl:grid-cols-5">
        <div className="mb-12 items-center text-center">
          <Image
            layout="fixed" // Use "fixed" layout to specify width and height
            width={imageWidth} // Set the width for the image
            height={imageHeight} // Set the height for the image
            objectFit="cover"
            alt=""
            src="/management/mosque.jpg"
            className="mx-auto mb-4 rounded-full shadow-lg dark:shadow-black/20"
          />
          <p className="mb-2 font-bold text-black dark:text-white">
            Sofia Ibrahim
          </p>
          <p className="text-neutral-600 dark:text-neutral-300">
            Head of Productions
          </p>
        </div>
        <div className="mb-12 items-center text-center">
          <Image
            layout="fixed" // Use "fixed" layout to specify width and height
            width={imageWidth} // Set the width for the image
            height={imageHeight} // Set the height for the image
            objectFit="cover"
            alt=""
            src="/management/mosque.jpg"
            className="mx-auto mb-4 rounded-full shadow-lg dark:shadow-black/20"
          />
          <p className="mb-2 font-bold text-black dark:text-white">
            Khamis Abdallah
          </p>
          <p className="text-neutral-600 dark:text-neutral-300">
            Head of staff
          </p>
        </div>

        <div className="mb-12 items-center text-center">
          <Image
            layout="fixed" // Use "fixed" layout to specify width and height
            width={imageWidth} // Set the width for the image
            height={imageHeight} // Set the height for the image
            objectFit="cover"
            alt=""
            src="/management/ramla.jpeg"
            className="mx-auto mb-4 rounded-full shadow-lg dark:shadow-black/20"
          />
          <p className="mb-2 font-bold text-black dark:text-white">
            Ramla Abdi
          </p>
          <p className="text-neutral-600 dark:text-neutral-300">
            Head of admin
          </p>
        </div>
        <div className="mb-12 items-center text-center">
          <Image
            layout="fixed" // Use "fixed" layout to specify width and height
            width={imageWidth} // Set the width for the image
            height={imageHeight} // Set the height for the image
            objectFit="cover"
            alt=""
            src="/team/galoro.jpeg"
            className="mx-auto mb-4 rounded-full shadow-lg dark:shadow-black/20"
          />
          <p className="mb-2 font-bold text-black dark:text-white">
            Samira Galoro
          </p>
          <p className="text-neutral-600 dark:text-neutral-300">
            Technical support officer
          </p>
        </div>

        <div className="mb-12 items-center text-center">
          <Image
            layout="fixed" // Use "fixed" layout to specify width and height
            width={imageWidth} // Set the width for the image
            height={imageHeight} // Set the height for the image
            objectFit="cover"
            alt=""
            src="/management/moha.jpeg"
            className="mx-auto mb-4 rounded-full shadow-lg dark:shadow-black/20"
          />
          <p className="mb-2 font-bold text-black dark:text-white">
            Mohammed Rajab
          </p>
          <p className="text-neutral-600 dark:text-neutral-300">
            Technical support officer
          </p>
        </div>

        <div className="mb-12 items-center text-center">
          <Image
            layout="fixed" // Use "fixed" layout to specify width and height
            width={imageWidth} // Set the width for the image
            height={imageHeight} // Set the height for the image
            objectFit="cover"
            alt=""
            src="/management/david.jpeg"
            className="mx-auto mb-4 rounded-full shadow-lg dark:shadow-black/20"
          />
          <p className="mb-2 font-bold text-black dark:text-white">
            David Okwemba
          </p>
          <p className="text-neutral-600 dark:text-neutral-300">
            Tech support representative
          </p>
        </div>
        <div className="mb-12 items-center text-center">
          <Image
            layout="fixed" // Use "fixed" layout to specify width and height
            width={imageWidth} // Set the width for the image
            height={imageHeight} // Set the height for the image
            objectFit="cover"
            alt=""
            src="/management/moses.jpeg"
            className="mx-auto mb-4 rounded-full shadow-lg dark:shadow-black/20"
          />
          <p className="mb-2 font-bold text-black dark:text-white">
            Moses Ngati Mwololo
          </p>
          <p className="text-neutral-600 dark:text-neutral-300">
            Tech support representative
          </p>
        </div>

        {/* ... Repeat this structure for other team members */}
      </div>
      <TeamPage />
    </>
  );
}
