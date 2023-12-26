"use client";

import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

const SkillList = [
  "Leadership",
  "Strategic Management",
  "Research",
  "Authorship",
  "Consultancy",
  "Award Recognition",
  "Team Collaboration",
  "Negotiation",
  "Strategic Communication",
  "Management",
  "Cross-Cultural Understanding",
  "Problem Solving",
  "Networking",
  "Global Engagement",
  "Media Engagement",
  "Motivational Speaking",
  "Counseling",
];

export default function Skills() {
  const skillsData = SkillList;
  return (
    <section
      id="skills"
      className="flex flex-col max-w-6xl text-center  sm:mb-16"
    >
      <span className="font-semibold text-lg sm:text-3xl md:text-4xl text-slate-800 dark:text-slate-500">
        Here are my Skills...
      </span>
      <ul className="flex flex-wrap mt-4 justify-center gap-2 text-lg text-gray-800">
        {skillsData.map((skill, index) => (
          <motion.li
            className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
