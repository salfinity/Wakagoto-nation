import { allBlogs } from ".contentlayer/generated";
import HomeCoverSection from "../components/Home/HomeCoverSection";
import FeaturedPosts from "../components/Home/FeaturedPosts";
import RecentPosts from "../components/Home/RecentPosts";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CircleQuotes from "../components/Blog/CircleQuotes";
import RadioWindow from "../components/radio/RadioWindow";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <RadioWindow />
      <HomeCoverSection blogs={allBlogs} />
      <FeaturedPosts blogs={allBlogs} />
      <RecentPosts blogs={allBlogs} />
      <CircleQuotes />
    </main>
  );
}
