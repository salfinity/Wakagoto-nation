"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { LinkedinIcon, TwitterIcon } from "../Icons";
import { FaFacebook, FaYoutube, FaInstagram } from "react-icons/fa";
import { PiTiktokLogoLight } from "react-icons/pi";
import Link from "next/link";
import siteMetadata from "../../utils/siteMetaData";

const Footer = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <footer className="mt-16 rounded-2xl bg-dark dark:bg-accentDark/90 m-2 sm:m-10 flex flex-col items-center text-light dark:text-dark">
      <h3 className="mt-16 font-medium dark:font-bold text-center capitalize text-2xl sm:text-3xl lg:text-4xl px-4">
        Tune in to IQRA FM 95.0 | The Station With a Difference | We Love you
        for the sake of Allah.
      </h3>
      <p className="mt-5 px-4 text-center w-full sm:w-3/5 font-light dark:font-medium text-sm sm:text-base">
        Subscribe now and become one of the 2 million Muslims who have embraced
        IQRA FM's powerful voice and opinion. Join us on Twitter, Facebook,
        LinkedIn, Instagram, and YouTube to stay abreast of the latest updates
        and engage with our dynamic community.
      </p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-6 w-fit sm:min-w-[384px] flex items-stretch bg-light dark:bg-dark p-1 sm:p-2 rounded mx04"
      >
        <input
          type="email"
          placeholder="Enter your email"
          {...register("email", { required: true, maxLength: 80 })}
          className="w-full bg-transparent pl-2 sm:pl-0 text-dark focus:border-dark focus:ring-0 border-0 border-b mr-2 pb-1"
        />

        <input
          type="submit"
          className="bg-dark text-light dark:text-dark dark:bg-light cursor-pointer font-medium rounded px-3 sm:px-5 py-1"
        />
      </form>
      <div className="flex items-center mt-8">
        <a
          href={siteMetadata.instagram}
          className="inline-block w-6 h-6 mr-4"
          aria-label="Reach out to me via LinkedIn"
          target="_blank"
        >
          <FaInstagram
            size={25}
            className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 hover:scale-125 transition-all ease cursor-pointer rounded-md text-white duration-200"
          />
        </a>
        <a
          href={siteMetadata.linkedin}
          className="inline-block w-6 h-6 mr-4"
          aria-label="Reach out to me via LinkedIn"
          target="_blank"
        >
          <LinkedinIcon className="hover:scale-125 transition-all ease duration-200" />
        </a>
        <a
          href={siteMetadata.twitter}
          className="inline-block w-6 h-6 mr-4"
          aria-label="Reach out to me via Twitter"
          target="_blank"
        >
          <TwitterIcon className="hover:scale-125 transition-all ease duration-200" />
        </a>
        <a
          href={siteMetadata.youtube}
          className="inline-block w-6 h-6 mr-4"
          aria-label="Check my profile on Twitter"
          target="_blank"
        >
          <FaYoutube
            size={30}
            className="text-red-600 hover:scale-125 transition-all ease duration-200 "
          />
        </a>
        <a
          href={siteMetadata.tiktok}
          className="inline-block w-6 h-6 mr-4"
          aria-label="Check my profile on Twitter"
          target="_blank"
        >
          <PiTiktokLogoLight
            size={30}
            className="text-purple-900 dark:text-white hover:scale-125 transition-all ease duration-200 "
          />
        </a>
        <a
          href={siteMetadata.facebook}
          className="inline-block w-6 h-6 mr-4"
          aria-label="Check my profile on Dribbble"
          target="_blank"
        >
          <FaFacebook
            size={30}
            className="text-blue-600 hover:scale-125 transition-all ease duration-200"
          />
        </a>
      </div>

      <div className="w-full z-10 mt-16 md:mt-24 relative font-medium border-t border-solid border-light py-6 px-8 flex  flex-col md:flex-row items-center justify-between">
        <span className="text-center">
          &copy;2023 IqraFM 95.0. All rights reserved.
        </span>
        <Link
          href="/sitemap.xml"
          className="text-center underline my-4 md:my-0"
        >
          sitemap.xml
        </Link>
        <div className="text-center">
          Made with &hearts; by{" "}
          <a
            href="https://salfinity.vercel.app/"
            className="underline"
            target="_blank"
          >
            Salfinity
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
