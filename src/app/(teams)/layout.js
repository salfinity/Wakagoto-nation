import InsightRoll from "/src/components/About/InsightRoll";

export const metadata = {
  title: "Team | Management",
  description: "this is the staff of iqra FM.",
};

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

export default function AboutLayout({ children }) {
  return (
    <main className="w-full flex flex-col items-center justify-between">
      <InsightRoll insights={insights} />
      {children}
    </main>
  );
}
