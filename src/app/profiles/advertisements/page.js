import Link from "next/link";
import React from "react";
import qytImg from "public/projects/qyt.jpg";
import KipsImg from "public/projects/kips.jpg";
import BlankImg from "public/projects/blue.jpg";
import salsabilImg from "public/projects/sals.jpg";
import UnityImg from "public/projects/unity.png";
import pembeltdImg from "public/projects/pembeltd.jpg";
import AdvertItem from "/src/components/Adverts/AdvertItem";
import { RiArrowGoBackFill } from "react-icons/ri";

export const metadata = {
  title: "Adverticements | Iqra FM",
  description: "Here are some details about Iqra FM.",
};

const AdvertisementsPage = () => {
  return (
    <div className="container mx-auto px-5 py-2 max-w-6xl">
      <h1 className="uppercase text-black dark:text-white mb-5 text-3xl tracking-[16px] text-center mt-10 mx-auto">
        <span
          className="underline decoration-6 
     decoration-orange-400 pb-2"
        >
          ADVERTISE
        </span>
        MENTS
      </h1>
      <span className="font-semibold flex text-center mx-auto gap-3 text-base sm:text-3xl md:text-4xl mb-4 text-accent dark:text-accentDark">
        Call us at{" "}
        <Link href="tel:+0727444454">
          <p>
            <span className="underline decoration-orange-500">0727 444454</span>
          </p>
        </Link>{" "}
        to advertise your business here...
      </span>
      <div className="max-w-[1240px] m-auto w-full py-10">
        <div className="grid md:grid-cols-2 gap-8">
          <AdvertItem
            title="QYT Health Care"
            backgroundImg={qytImg.src}
            projectUrl="/adverts/qyt"
            tech="chech ups & medication"
          />
          <AdvertItem
            title="Salsabil Heights"
            backgroundImg={salsabilImg.src}
            projectUrl="/adverts/salsabil"
            tech="Female studets Hostels"
          />
          <AdvertItem
            title="Pembe flour millers"
            backgroundImg={pembeltdImg.src}
            projectUrl="/adverts/pembe"
            tech="Maize & wheat flour"
          />
          <AdvertItem
            title="Kips technical college"
            backgroundImg={KipsImg.src}
            projectUrl="/adverts/kips"
            tech="Kenya Institute of Professional Studies"
          />
          <AdvertItem
            title="Unity Auto Garage"
            backgroundImg={UnityImg.src}
            projectUrl="/adverts/unity"
            tech="The friendly garage"
          />
          <AdvertItem
            title="ADD AN ADVERT"
            backgroundImg={BlankImg.src}
            projectUrl=""
            tech="Description"
          />
          <AdvertItem
            title="ADD AN ADVERT"
            backgroundImg={BlankImg.src}
            projectUrl=""
            tech="Description"
          />
          <AdvertItem
            title="ADD AN ADVERT"
            backgroundImg={BlankImg.src}
            projectUrl=""
            tech="Description"
          />
        </div>
      </div>
      <div className="text-center justify-center mx-auto max-w-6xl">
        <button className="border-4 dark:border-white border-black rounded-full px-4 py-2">
          <Link href="/resources">
            <span className="underline text-black dark:text-white cursor-pointer items-center flex pl-8 pr-8 gap-2">
              <RiArrowGoBackFill className="text-bold" /> Back
            </span>
          </Link>
        </button>
      </div>
    </div>
  );
};

export default AdvertisementsPage;
