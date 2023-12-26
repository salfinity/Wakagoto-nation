import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiFillProfile } from "react-icons/ai";

function TeamPage() {
  const imageWidth = 220; // Set a reasonable width for your images
  const imageHeight = 200;

  return (
    <div className="container mt-3 mx-auto md:px-6">
      <section className="mb-32 text-center">
        <h1
          className="uppercase  text-3xl tracking-[15px] text-center mt-10 mx-auto font-semibold  
      justify my-8 sm:text-3xl md:text-4xl text-accent dark:text-accentDark"
        >
          <span
            className="underline decoration-6 
          decoration-orange-400"
          >
            ESTEEMED
          </span>{" "}
          PRESENTERS{" "}
        </h1>

        <div className="lg:gap-xl-12 grid gap-x-6 md:grid-cols-3 xl:grid-cols-4">
          <div className="mb-12">
            <Image
              layout="fixed"
              width={imageWidth}
              height={imageHeight}
              objectFit="cover"
              src="/team/madina.jpg"
              className="mx-auto mb-4 rounded-full shadow-lg dark:shadow-black/20 h-56 md:max-width:100px"
              alt=""
            />
            <p className="mb-2 font-bold text-black dark:text-white">
              Madina Idd Juma
            </p>
            <p className="text-neutral-500 dark:text-neutral-300">Presenter</p>
          </div>

          <div className="mb-12">
            <Image
              layout="fixed"
              width={imageWidth}
              height={imageHeight}
              objectFit="cover"
              src="/team/nur.png"
              className="mx-auto mb-4 rounded-full shadow-lg dark:shadow-black/20 h-56 md:max-width:100px"
              alt=""
            />
            <p className="mb-2 font-bold text-black dark:text-white">
              Nur Saiid Thwalib
            </p>
            <p className="text-neutral-500 dark:text-neutral-300">Presenter</p>
          </div>

          <div className="mb-12">
            <Image
              layout="fixed"
              width={imageWidth}
              height={imageHeight}
              objectFit="cover"
              src="/team/galoro.jpeg"
              className="mx-auto mb-4 rounded-full shadow-lg dark:shadow-black/20 h-56 md:max-width:100px"
              alt=""
            />
            <p className="mb-2 font-bold text-black dark:text-white">
              Samira Galoro
            </p>
            <p className="text-neutral-500 dark:text-neutral-300">Presenter</p>
          </div>
          <div className="mb-12">
            <Image
              layout="fixed"
              width={imageWidth}
              height={imageHeight}
              objectFit="cover"
              src="/team/fahamu.jpg"
              className="mx-auto mb-4 rounded-full shadow-lg dark:shadow-black/20 h-56 md:max-width:100px"
              alt=""
            />
            <p className="mb-2 font-bold text-black dark:text-white">
              Daktari Fahamu Kazungu
            </p>
            <p className="text-neutral-500 dark:text-neutral-300">Presenter</p>
          </div>

          <div className="mb-12">
            <Image
              layout="fixed"
              width={imageWidth}
              height={imageHeight}
              objectFit="cover"
              src="/team/shuaib.jpeg"
              className="mx-auto mb-4 rounded-full shadow-lg dark:shadow-black/20 h-56 md:max-width:100px"
              alt=""
            />
            <p className="mb-2 font-bold text-black dark:text-white">
              Shuaib Ali
            </p>
            <p className="text-neutral-500 dark:text-neutral-300">Presenter</p>
          </div>

          <div className="mb-12">
            <Image
              layout="fixed"
              width={imageWidth}
              height={imageHeight}
              objectFit="cover"
              src="/team/ramlah.png"
              className="mx-auto mb-4 rounded-full shadow-lg dark:shadow-black/20 h-56 md:max-width:100px"
              alt=""
            />
            <p className="mb-2 font-bold text-black dark:text-white">
              Ramla Abdi
            </p>
            <p className="text-neutral-500 dark:text-neutral-300">Presenter</p>
          </div>

          <div className="mb-12">
            <Image
              layout="fixed"
              width={imageWidth}
              height={imageHeight}
              objectFit="cover"
              src="/team/salim.jpg"
              className="mx-auto mb-4 rounded-full shadow-lg dark:shadow-black/20 h-56 md:max-width:100px"
              alt=""
            />
            <p className="mb-2 font-bold text-black dark:text-white">
              Ali Salim
            </p>
            <p className="text-neutral-500 dark:text-neutral-300">
              Sports Presenter
            </p>
          </div>

          <div className="mb-12">
            <Image
              layout="fixed"
              width={imageWidth}
              height={imageHeight}
              objectFit="cover"
              src="/team/abubakar.png"
              className="mx-auto mb-4 rounded-full shadow-lg dark:shadow-black/20 h-56 md:max-width:100px"
              alt=""
            />
            <p className="mb-2 font-bold text-black dark:text-white">
              Abubakar Juma
            </p>
            <p className="text-neutral-500 dark:text-neutral-300">
              {" "}
              Business Presenter
            </p>
          </div>
        </div>
        <button
          className=" bg-white dark:bg-slate-900 h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] 
                        border border-white border-opacity-40 shadow-slate-900 dark:shadow-slate-800 
                        shadow-lg rounded-full justify-center hover:scale-[1.15] active:scale-105 
                        transition-all "
          style={{ animation: "none" }}
        >
          <Link href="/profiles/esteemed-sheikhs">
            <p className="text-black dark:text-white px-6 gap-3 flex items-center">
              Our Esteemed Sheikhs
              <AiFillProfile size={30} />
            </p>
          </Link>
        </button>
      </section>
    </div>
  );
}

export default TeamPage;
