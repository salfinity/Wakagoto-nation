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
  "Youth mentorship & leadership programs",
  "Women empowerment and entrepreneurship training",
  "Environmental clean-ups & tree planting",
  "Community health outreach & awareness",
  "Digital literacy & computer training",
  "Life skills & financial literacy workshops",
  "Art, music & storytelling festivals",
  "Vocational training for unemployed youth",
  "Community townhalls & civic education",
  "Sports & talent development initiatives",
  "Small business incubation & support",
  "Local events documentation & media services",
];

export default function Skills() {
  const skillsData = SkillList;
  return (
    <section
      id="skills"
      className="flex flex-col max-w-6xl text-center  sm:mb-16"
    >
      <span className="font-semibold text-lg sm:text-3xl md:text-4xl text-accent dark:text-accentDark">
        Here are our Services...
      </span>
      <ul className="flex flex-wrap mt-4 justify-center gap-2 text-lg text-gray-800">
        {skillsData.map((skill, index) => (
          <motion.li
            className="bg-gray/10 borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
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
