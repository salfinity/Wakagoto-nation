import React from "react";
import Image from "next/image";

const ScheduleItem = ({ photo, day, scheduleName, hostName, time }) => {
  return (
    <div className="p-4 mb-4 text-center justify-center">
      <Image
        width={250}
        height={250}
        src={photo}
        alt="Schedule"
        className="mb-4 mx-auto rounded-full"
      />
      <p className="text-lg font-bold text-black dark:text-slate-50">{day}</p>
      <p className="font-bold text-slate-700 dark:text-slate-400">
        {scheduleName}
      </p>
      <p className="text-orange-700 dark:text-orange-400">{hostName}</p>
      <p className="text-neutral-700 dark:text-neutral-500">{time}</p>
    </div>
  );
};

export default ScheduleItem;
