import Image from "next/image";
import React from "react";
import impressImg from "public/management/impress.jpg";
import { RiArrowGoBackFill } from "react-icons/ri";
import { BiLogoFacebookSquare } from "react-icons/bi";
import { ImLocation } from "react-icons/im";
import { IoIosCall } from "react-icons/io";
import {
  FaInstagramSquare,
  FaTiktok,
  FaWhatsappSquare,
  FaYoutube,
} from "react-icons/fa";
import Link from "next/link";
import { AiFillTwitterSquare } from "react-icons/ai";
import { MdEmail } from "react-icons/md";

function HistoryPage() {
  return (
    <div className="mx-auto max-w-6xl">
      <h1 className="uppercase text-black dark:text-white text-3xl tracking-[15px] text-center mt-10 mb-5 mx-auto">
        <span className="underline decoration-6 decoration-orange-300">
          THIS IS
        </span>{" "}
        ABOUT US
      </h1>

      <div className="max-w-6xl h-[50vh] relative">
        <div className="absolute top-0 left-0 max-w-6xl h-[50vh] bg-black/70 z-10" />
        <Image
          className="rounded-lg"
          layout="fill"
          objectFit="cover"
          src={impressImg}
          alt="Wakagoto Foundation Cover"
        />
        <div className="font-serif absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2 font-extrabold text-4xl">WAKAGOTO NATION</h2>
          <h3>Empowering Communities. Transforming Lives.</h3>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-4 pr-4 grid md:grid-cols-5 gap-8 py-8">
        <div className="font-serif col-span-4">
          <p className="text-black dark:text-white">OUR STORY</p>
          <h2>
            <span className="text-red-600 font-serif text-5xl font-extrabold pr-3">
              Since
            </span>
            <span className="text-5xl font-extrabold text-black dark:text-white">
              2024
            </span>
          </h2>
          <p className="mb-3 text-black dark:text-white">
            Founded in 2024, Wakagoto Nation is a grassroots community-driven
            organization focused on improving the quality of life in underserved
            regions of Embu County and beyond. Our work spans education, youth
            mentorship, environmental sustainability, entrepreneurship, and
            social inclusion.
          </p>

          <h2 className="mt-4 mb-2 text-5xl font-extrabold text-black dark:text-white">
            <span className="text-red-600 font-serif text-3xl font-extrabold pr-3">
              Our
            </span>
            Vision
          </h2>
          <p className="text-black dark:text-white">
            A united, empowered and self-reliant community, where everyone has
            the opportunity to grow, lead, and thrive.
          </p>

          <h2 className="mt-4 mb-2 text-5xl font-extrabold text-black dark:text-white">
            <span className="text-red-600 font-serif text-3xl font-extrabold pr-3">
              Our
            </span>
            Mission
          </h2>
          <p className="text-black dark:text-white">
            To drive sustainable community transformation through inclusive
            education, grassroots innovation, youth and women empowerment,
            environmental advocacy, and leadership development.
          </p>

          <h2 className="mt-4 mb-2 text-5xl font-extrabold text-black dark:text-white">
            <span className="text-red-600 font-serif text-3xl font-extrabold pr-3">
              Our
            </span>
            Objectives
          </h2>
          <ul className="list-disc pl-6 text-black dark:text-white space-y-2">
            <li>Empower young people with skills and mentorship.</li>
            <li>Promote sustainable development and environmental care.</li>
            <li>Support women-led businesses and initiatives.</li>
            <li>Facilitate access to education and innovation resources.</li>
            <li>Foster community unity, dialogue, and resilience.</li>
          </ul>

          <h2 className="mt-4 mb-2 text-5xl font-extrabold text-black dark:text-white">
            <span className="text-red-600 font-serif text-3xl font-extrabold pr-3">
              Our
            </span>
            Programmes
          </h2>
          <ul className="list-disc pl-6 text-black dark:text-white space-y-2">
            <li>Youth leadership and mentorship workshops</li>
            <li>Community clean-up and tree-planting drives</li>
            <li>
              Training sessions on entrepreneurship and financial literacy
            </li>
            <li>Creative arts and storytelling festivals</li>
            <li>Health camps and wellness talks</li>
          </ul>

          <h2 className="mt-4 mb-2 text-5xl font-extrabold text-black dark:text-white">
            <span className="text-red-600 font-serif text-3xl font-extrabold pr-3">
              Our
            </span>
            Achievements
          </h2>
          <ul className="list-disc pl-6 text-black dark:text-white space-y-2">
            <li>Launched 3 youth empowerment centers in Embu by 2025</li>
            <li>
              Over 500 young people trained in digital literacy and job
              readiness
            </li>
            <li>
              Partnered with local businesses to sponsor 50+ school scholarships
            </li>
            <li>Organized 10+ clean water access initiatives in rural areas</li>
          </ul>

          <h2 className="mt-4 mb-2 text-5xl font-extrabold text-black dark:text-white">
            <span className="text-red-600 font-serif text-3xl font-extrabold pr-3">
              Headquarters &
            </span>
            Outreach
          </h2>
          <p className="text-black dark:text-white">
            Wakagoto Nation is based in Embu, Kenya. Our operations extend
            across multiple wards with satellite initiatives in partnership with
            grassroots leaders, youth clubs, and civil society organizations.
            Our mission is to serve where we are needed most — both physically
            and digitally.
          </p>
        </div>

        {/* Sidebar Contact Info */}
        <div className="col-span-4 md:col-span-1 text-black dark:text-white shadow-lg shadow-gray-300 rounded-xl py-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Connect With Us</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <FaYoutube size={35} className="pr-3" />
                <a href="#" target="_blank">
                  YouTube
                </a>
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <FaTiktok size={35} className="pr-3" />
                <a href="#" target="_blank">
                  TikTok
                </a>
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <FaInstagramSquare size={35} className="pr-3" />
                <a href="#" target="_blank">
                  Instagram
                </a>
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <AiFillTwitterSquare size={35} className="pr-3" />
                <a href="#" target="_blank">
                  Twitter
                </a>
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <BiLogoFacebookSquare size={40} className="pr-3" />
                <a href="#" target="_blank">
                  Facebook
                </a>
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <ImLocation size={35} className="pr-3" />
                <a href="#">Location – Embu, Kenya</a>
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <MdEmail size={35} className="pr-3" />
                <a href="mailto:info@wakagoto.org">Email Us</a>
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <IoIosCall size={35} className="pr-3" />
                <a href="tel:+254712345678">Call Us</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HistoryPage;
