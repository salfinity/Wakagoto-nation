import React from "react";
import Schedule from "/src/components/resources/Schedule";

export const metadata = {
  title: "Weekly Schedule | Iqra FM",
  description: "Here are some details about Our programmes on a weekly basis.",
};

const SchedulePage = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Schedule />
    </div>
  );
};

export default SchedulePage;
