"use client";

import React from "react";
import { profilesData } from "/lib/data";
import Project from "./project";

export default function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mt-28 max-w-6xl flex flex-col mb-64  mx-auto justify-center items-center cursor-pointer"
    >
      <h2 className="mb-4 uppercase text-3xl tracking-[14px] text-black dark:text-white">
        My Profile
      </h2>
      <span className="font-semibold text-lg sm:text-3xl md:text-4xl text-accent dark:text-accentDark">
        Have a look at it...
      </span>
      <div>
        {profilesData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
