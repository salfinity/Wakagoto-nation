import { allBlogs } from ".contentlayer/generated";
import HomeCoverSection from "../components/Home/HomeCoverSection";
import FeaturedPosts from "../components/Home/FeaturedPosts";
import RecentPosts from "../components/Home/RecentPosts";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CircleQuotes from "../components/Blog/CircleQuotes";
import InsightRoll from "/src/components/About/InsightRoll";

const insights = [
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

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <InsightRoll insights={insights} />
      <HomeCoverSection blogs={allBlogs} />
      <FeaturedPosts blogs={allBlogs} />
      <RecentPosts blogs={allBlogs} />
      <CircleQuotes />
    </main>
  );
}
