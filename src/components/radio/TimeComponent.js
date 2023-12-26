import React, { useEffect, useState } from "react";

const TimeComponent = ({ timeZone }) => {
  const [currentTime, setCurrentTime] = useState(""); // Corrected line

  useEffect(() => {
    const updateCurrentTime = () => {
      const options = {
        timeZone,
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
      };

      const formatter = new Intl.DateTimeFormat("en-US", options);
      const currentTimeString = formatter.format(new Date());

      setCurrentTime(currentTimeString);
    };

    // Update the current time every second
    const intervalId = setInterval(updateCurrentTime, 1000);

    // Initial update
    updateCurrentTime();

    // Clear the interval on component unmount
    return () => clearInterval(intervalId);
  }, [timeZone]);

  return (
    <div className="flex gap-2 text-white items-center">
      <p className="text-lg font-semibold italic">Live: </p>
      <span className="font-semibold text-xl">{currentTime} </span>
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-75"></span>
        <span className="relative inline-flex h-2 w-2 rounded-full bg-red-700"></span>
      </span>
      <p className="text-lg font-serif">Nairobi</p>
    </div>
  );
};

export default TimeComponent;
