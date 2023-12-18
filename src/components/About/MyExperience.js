"use client";

import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { LuGraduationCap } from "react-icons/lu";
import { CgWorkAlt } from "react-icons/cg";
import { LiaBusinessTimeSolid } from "react-icons/lia";
import { GiPocketRadio } from "react-icons/gi";
import "react-vertical-timeline-component/style.min.css";

const experiencesData = [
  {
    title: "Doctor of Philosophy in Management",
    location: "University of New Castle (AIMS) Kuala Lumpur – Malaysia",
    description:
      "as i graduated i was serving as a manager at Savoy Real Estate & Gelato Divino in Mombasa from 2012 to 2016.",
    icon: React.createElement(LuGraduationCap),
    date: "2016",
  },
  {
    title: "Acting manager",
    location: "Alshaya (Debenhams) Mall of Qatar (Doha - Qatar) ",
    description:
      "In charge of cosmetics department.Training & developing staff abilities.Overseeing stocks controller’s work and Initiating business growth.",
    icon: React.createElement(CgWorkAlt),
    date: "2016 - 2020",
  },
  {
    title: " Business Proprietor",
    location: "Dr.Bahaidar Consultancy Ltd Nairobi – Kenya.",
    description:
      "We provide case studies and practical solutions to assist sole proprietors and enterprises streamline operations and achieve thresholds of success.",
    icon: React.createElement(LiaBusinessTimeSolid),
    date: "2021 - present",
  },
  {
    title: " Chief Executive Officer",
    location: "IQRA FM, Nairobi – Kenya.",
    description:
      "Creation of enticing marketing strategies, clearing debts, and resolving management issues at IQRA FM as the CEO.",
    icon: React.createElement(GiPocketRadio),
    date: "2021 - present",
  },
];

export default function MyExperience() {
  const theme = "light"; // or "dark" depending on your application logic

  return (
    <section
      id="experience"
      className="flex flex-col max-w-6xl text-center sm:mb-16"
    >
      <h2 className="mt-28 mb-8 uppercase text-3xl tracking-[14px]">
        experience
      </h2>
      <VerticalTimeline
        className="min-h-screen flex flex-col items-center justify-center" // Set a minimum height for the timeline
      >
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              contentStyle={{
                background:
                  theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
                minHeight: "200px", // Set a minimum height for each element
              }}
              contentArrowStyle={{
                borderRight:
                  theme === "light"
                    ? "0.4rem solid #9ca3af"
                    : "0.4rem solid rgba(255, 255, 255, 0.5)",
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                background:
                  theme === "light" ? "white" : "rgba(255, 255, 255, 0.15)",
                fontSize: "1.5rem",
              }}
            >
              <h3 className="font-semibold capitalize">{item.title}</h3>
              <p className="font-normal !mt-0">{item.location}</p>
              <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                {item.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
