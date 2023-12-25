"use client";

import React from "react";
import { motion } from "framer-motion";

export default function FounderOfSpiderwebbizPage() {
  return (
    <>
      <h2 className="uppercase text-3xl tracking-[20px] text-center text-black dark:text-white mx-auto">
        Founder of Spiderwebbiz
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
            Founder of Spiderwebbiz Solutions
          </span>{" "}
          <br />
          <p className="text-sm text-black dark:text-white">
            A dynamic business that specializes in creating and leveraging
            interconnected networks to drive growth and success. Inspired by the
            intricate and efficient design of a spiderweb, we believe in the
            power of collaboration, partnerships and network effects to unlock
            new opportunities and achieve outstanding results. I have managed to
            initiate this innovative and unique concept to offer businesses
            comprehensive solutions across all platforms shared by partners as a
            combo package for profitability. We offer comprehensive solutions
            across all platforms shared by our partners as a combo package
            saving time and resources. SPIDER WEBBIZ Solutions is a dynamic
            business that specializes in creating and leveraging interconnected
            networks to drive growth and success. Inspired by the intricate and
            efficient design of a spiderweb, we believe in the power of
            collaboration, partnerships and network effects to unlock new
            opportunities and achieve outstanding results. We are going to offer
            you comprehensive solutions across all platforms shared by our
            partners as a combo package.
          </p>
        </div>
      </motion.section>
      <div className="max-w-6xl py-10 mx-auto">
        <a
          href=""
          className="group relative flex h-80 items-end overflow-hidden rounded-lg shadow-lg md:col-span-2 md:h-96"
        >
          <img
            src="/about/solutions.jpg"
            loading="lazy"
            alt="Sparkiling Hope book cover"
            className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
          />

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

          <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
            Spiderwebbiz Solutions
          </span>
        </a>
        <p className="text-sm md:text-base py-8 px-8 text-center md:text-left text-black dark:text-white">
          We save you time and resources by giving you a one stop marketing
          podium that has all other brands in one. SPIDER WEBBIZ is a unique,
          innovative marketing and advertisement network solutions provider that
          provides the following:
        </p>
        <ul className="text-sm md:text-base gap-8 py-8 px-8 text-center md:text-left text-black dark:text-white">
          <li>
            {" "}
            <span className="font-semibold text-accent dark:text-accentDark">
              Network Building:{" "}
            </span>{" "}
            We excel in building robust and interconnected networks that bring
            together diverse stakeholders.{" "}
          </li>
          <li>
            {" "}
            <span className="font-semibold text-accent dark:text-accentDark">
              Marketing:{" "}
            </span>{" "}
            By strategically identifying and nurturing relationships, we help
            businesses expand their reach, enhance their influence and tap into
            new markets.
          </li>
          <li>
            {" "}
            <span className="font-semibold text-accent dark:text-accentDark">
              Advertisement:{" "}
            </span>{" "}
            We integrate and deploy our advertising platforms to members for
            maximum promotion and brand awareness.
          </li>
          <li>
            {" "}
            <span className="font-semibold text-accent dark:text-accentDark">
              Partnership:{" "}
            </span>{" "}
            We facilitate partnerships between companies that can mutually
            benefit from each other’s products and services.{" "}
          </li>
          <li>
            {" "}
            <span className="font-semibold text-accent dark:text-accentDark">
              Success:{" "}
            </span>{" "}
            Our expertise lies in identifying synergies and fostering
            collaborations that create win-win situations that enable businesses
            to achieve greater success together.
          </li>
          <li>
            {" "}
            <span className="font-semibold text-accent dark:text-accentDark">
              Growth:{" "}
            </span>{" "}
            Our co-operation and understanding ensures a steady and growing
            network of active participating businesses and new memberships to
            the SPIDER WEBBIZ platform.
          </li>
        </ul>
      </div>
    </>
  );
}
