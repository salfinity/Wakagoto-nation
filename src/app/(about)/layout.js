"use client";
import InsightRoll from "@/src/components/About/InsightRoll";
import TransitionEffect from "@/src/components/TransitionEffect";

const insights = [
  "20+ Projects Completed",
  "10+ Years of Management Experience",
  "99% Client Satisfaction",
  "Motovational Speaker",
  "20K+ Instagram Subscribers",
  "Authored 10 books social issues",
  "covered over 2000 books that deal with Philosophy and psychology of life.📝",
  "I have also resolved over 10000 cases of family and relationship conflicts.",
  "Recipient of the Meena Award in Muscat, Oman.🏆",
];

export default function AboutLayout({ children }) {
  return (
    <>
      <TransitionEffect />
      <main className="w-full flex flex-col items-center justify-between">
        <InsightRoll insights={insights} />
        {children}
      </main>
    </>
  );
}
