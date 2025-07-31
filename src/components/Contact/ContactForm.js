"use client";

import React from "react";
import { motion } from "framer-motion";
import { sendEmail } from "/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";

export default function Contact() {
  return (
    <motion.section
      id="contact"
      className="mb-5 mt-0 sm:mb-8 w-[min(100%,38rem)] text-center mx-auto  flex flex-col  max-w-6xl justify-center h-screen"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <h2 className="top-0 uppercase text-3xl tracking-[20px] text-black dark:text-white mb-8">
        Contact Us
      </h2>

      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Please contact us directly at{" "}
        <a className="underline" href="mailto:drbahaidar@gmail.com">
          Info@wakagotonation.com
        </a>{" "}
        or through this form.
      </p>

      <form
        className="mt-10 flex flex-col dark:text-black"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          console.log(data);

          toast.success("Email sent successfully!");
        }}
      >
        <input
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
