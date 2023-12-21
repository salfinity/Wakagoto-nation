import React from "react";
import Image from "next/image";
import circleImg from "/public/circletext1.png";
import whatsappImg from "/public/whatsapp2.png";
import Link from "next/link";

const CircleWhatsapp = () => {
  return (
    <div className="fixed left-4 bottom-4 flex items-center justify-center overflow-hidden z-50">
      <div className="w-48 h-auto flex items-center justify-center relative">
        <Image
          src={circleImg}
          alt="animation text"
          className="w-full h-auto rounded-full fill-black dark:fill-slate-50 animate-spin-slow"
          priority
        />
        <Link
          href="https://wa.me/254740049095"
          target="_blank"
          className="flex items-center justify-center absolute
        left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 p-4 hover:opacity-80 focus:outline-none"
        >
          <Image
            src={whatsappImg}
            alt="whatsappBahaidar"
            width={100}
            height={100}
          />
        </Link>
      </div>
    </div>
  );
};

export default CircleWhatsapp;
