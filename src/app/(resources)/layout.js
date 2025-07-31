import InsightRoll from "/src/components/About/InsightRoll";

export const metadata = {
  title: "Our Resources",
  description: "Here are some useful resources that we offer.",
};

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

export default function AboutLayout({ children }) {
  return (
    <main className="w-full flex flex-col items-center justify-between">
      <InsightRoll insights={insights} />
      {children}
    </main>
  );
}
