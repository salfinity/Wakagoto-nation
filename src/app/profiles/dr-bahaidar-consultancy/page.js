"use client";

import React from "react";
import { motion } from "framer-motion";

export default function DrBahaidarConsultancyPage() {
  return (
    <>
      <h2 className="uppercase text-3xl tracking-[20px] text-center text-black dark:text-white mx-auto">
        Dr Bahaidar Consultancy
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
          src="/about/consultancy.jpg" // Use the imported image here
          height={560}
          width={460}
          className="mb-22 mt-8 md:mb-0 flex-shrink-0 w-36 h-36 rounded-full object-cover md:rounded-lg xl:w-[400px] xl:h-[500px]"
        />
        <div className="space-y-10 px-0 md:px-10">
          <span className="font-semibold text-base sm:text-3xl md:text-4xl text-accent dark:text-accentDark">
            DOCTOR BAHAIDAR CONSULTANCY LIMITED
          </span>{" "}
          <br />
          <p className="text-sm text-black dark:text-white">
            Dr. Bahaidar is synonymous with business consultancy, support and
            training of Small and Medium Businesses (SMEs), individuals and
            organisations. Doctor Bahaidar Consultancy Ltd adopts the
            relationship marketing which is vital because it fosters customer
            loyalty through a healthy relationship that leads to long-term
            engagement. The company cultivates a working environment
            characterized by an open flow of information that meets our client
            needs and interests. This is a Nairobi based multi-functional
            enterprise that provides advertising and networking platforms to its
            clientele. The Company offers professional consultancy services and
            effective solutions to business hurdles. We channel our expertise in
            providing businesses with dynamic and integrated action plans.
          </p>
        </div>
      </motion.section>
      <div className="max-w-6xl mt-0 mx-auto">
        <p className="text-sm md:text-base py-8 px-8 text-center md:text-left text-black dark:text-white">
          Goals and objectives of Dr. Bahaidar Consultancy Ltd.
        </p>
        <ul className="text-sm md:text-base gap-8 py-8 px-8 text-center md:text-left text-black dark:text-white">
          <li>
            {" "}
            <span className="font-semibold text-accent dark:text-accentDark">
              Groom teamwork that inspires greatness.{" "}
            </span>
          </li>
          <li>
            {" "}
            <span className="font-semibold text-accent dark:text-accentDark">
              Endeavor to ensure the highest of quality.
            </span>
          </li>
          <li>
            {" "}
            <span className="font-semibold text-accent dark:text-accentDark">
              Craft standards that are depicted by our society.
            </span>
          </li>
          <li>
            {" "}
            <span className="font-semibold text-accent dark:text-accentDark">
              Help improve work ethics by enhancing communication.{" "}
            </span>
          </li>
          <li>
            {" "}
            <span className="font-semibold text-accent dark:text-accentDark">
              Exercise professionalism.{" "}
            </span>
          </li>
        </ul>
      </div>
    </>
  );
}
