import { allBlogs } from ".contentlayer/generated";
import HomeCoverSection from "../components/Home/HomeCoverSection";
import FeaturedPosts from "../components/Home/FeaturedPosts";
import RecentPosts from "../components/Home/RecentPosts";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CircleQuotes from "../components/Blog/CircleQuotes";
import RadioWindow from "../components/radio/RadioWindow";
import InsightRoll from "/src/components/About/InsightRoll";

const insights = [
  "Holy Quran recitations",
  "Quran Translations in English, Swahili, Somali, and Urdu",
  "Talks by Prominent scholars from Kenya and abroad",
  "Question and Answer sessions on religious matters",
  "Panel discussions by prominent Muslim Ulaamas on Hadith and Fiqh",
  "Enlightening program on Teaching yourself Arabic",
  "Educative program in Kikuyu Language",
  "Local and international news at frequent intervals daily",
  "Talk Shows on Contemporary issues, political, cultural, social and economic issues",
  "Health and educational programmes",
  "Outside broadcasting services",
  "Studio production services for recording programs or commercials/advertisements",
];

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <InsightRoll insights={insights} />
      <RadioWindow />
      <HomeCoverSection blogs={allBlogs} />
      <FeaturedPosts blogs={allBlogs} />
      <RecentPosts blogs={allBlogs} />
      <CircleQuotes />
    </main>
  );
}
