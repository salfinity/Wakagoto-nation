import educationImg from "/public/resources/education.jpeg";
import advertsImg from "/public/resources/advertisement.jpg";
import newsImg from "/public/resources/news.jpg";
import biasharaImg from "/public/resources/Ecommerce.jpg";
import scheduleImg from "/public/resources/schedule.jpg";

export const quotesData = [
  {
    number: "001",
    text: "The simple reflex of looking at the toilet bowl before flashing indicates our difficulty in disconnecting from our attachments. The best thing we can do is learn from it and move on. We should live in the moment and consciously relate to our actions.",
    author: "Dr. Mohamed Bahaidar",
  },
  {
    number: "002",
    text: "A house may just be a standing structure but what causes emotions, especially when we visit our ancestral homes? What remains edged in our minds as we reminiscence? Is it the housing facility or recollection of childhood experiences relived in our homes?",
    author: "Dr. Mohamed Bahaidar",
  },
  {
    number: "003",
    text: "It is incredible to realize that humans are the only creatures who allow their children to return home regardless of the conflict. Why is this the case? You may offend someone and repeat the same mistake over and over again. However, the love of your home no matter how humble will never fade.",
    author: "Dr. Mohamed Bahaidar",
  },
  {
    number: "004",
    text: "We can’t tolerate anymore that which emanates from deep inside us. We simply want people to understand where we are coming from as that is all we desire and crave for. We can do all manner of surprising things just to get this kind of attention. We all want it and use different means to attain it. Things get tougher as the years pass by. We get to the level of desperation and end up doing things sometimes deemed as unacceptable.",
    author: "Dr. Mohamed Bahaidar",
  },
];

export const resourcesData = [
  {
    title: "Wakagoto Foundation",
    description:
      "Wakagoto Foundation is a nonprofit organization founded by Kenjava Mwaniki Wakagoto in Embu County. Dedicated to uplifting the community, the foundation supports local businesses, education, and social welfare through ethical and sustainable initiatives. Join us in building a better future for all.",
    tags: [
      {
        name: "Explore Organisation",
        readMoreLink: "/businesses",
      },
    ],
    imageUrl: biasharaImg,
    readMoreLink: "/businesses",
  },
  {
    title: "Avocad Limited",
    description:
      "At Avocad Limited, we believe poverty is our common enemy — and together, we can eliminate it. Learn how planting just 30 avocado trees can secure your child’s future with a steady income. Explore sustainable farming, real success stories, and how we're transforming lives through agribusiness.",
    tags: [{ name: "Avocad Limited", readMoreLink: "/profiles/latest-news" }],
    imageUrl: newsImg,
    readMoreLink: "/profiles/latest-news",
  },
  {
    title: "Eagle Mabati",
    description:
      "Eagle Mabati is more than just roofing — it’s a symbol of quality, affordability, and local empowerment. As a flagship brand under the Embu Industrial Revolution – Vision 2035, Eagle Mabati offers free delivery, flexible payment plans, and 24-hour order fulfillment. Proudly rooted in Wakagoto Nation, we're building homes and transforming lives across Kenya.",
    tags: [{ name: "Explore more", readMoreLink: "/profiles/eagle-mabati" }],
    imageUrl: scheduleImg,
    readMoreLink: "/profiles/eagle-mabati",
  },
  {
    title: "Eagle 1 Company",
    description:
      "Eagle 1 Company is your trusted partner in construction and infrastructure development. We specialize in supplying quality building materials — including cabros, sand, ballast, and concrete stones — while also offering road construction and reliable transportation services. With a strong footprint across Embu and beyond, we deliver excellence from the ground up.",
    tags: [
      { name: "Construction & Materials", readMoreLink: "/profiles/eagle-1" },
    ],
    imageUrl: advertsImg,
    readMoreLink: "/profiles/eagle-1",
  },
];
