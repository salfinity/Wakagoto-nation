"use client";

import TransitionEffect from "/src/components/TransitionEffect";
import React from "react";
import ManagementCoverSection from "/src/components/About/ManagementCoverSection";

export const metadata = {
  title: "Team | Management",
  description: "this is the staff of iqra FM.",
};

export default function Books() {
  return (
    <>
      <TransitionEffect />
      <h2
        className="uppercase  text-3xl tracking-[20px] text-center mt-10 mx-auto font-semibold  
      justify my-8 sm:text-3xl md:text-4xl text-accent dark:text-accentDark"
      >
        Management
      </h2>
      <ManagementCoverSection />
    </>
  );
}
