import NextImage from "next/image";
import { Tab } from "@headlessui/react";

import { cn } from "/lib/utilstwo";

const GalleryTab = ({ image }) => {
  return (
    <Tab className="relative flex aspect-square cursor-pointer items-center justify-center rounded-lg md:rounded-xl bg-white">
      {({ selected }) => (
        <div>
          <span className="absolute bg-white h-full w-full aspect-square inset-0 overflow-hidden rounded-sm md:rounded-md">
            <NextImage
              fill
              src={image.url}
              alt=""
              className="object-cover object-center"
            />
          </span>
          <span
            className={cn(
              "absolute inset-0 rounded-sm md:rounded-md ring-2 ring-offset-2",
              selected ? "ring-black dark:ring-orange-300" : "ring-transparent"
            )}
          />
        </div>
      )}
    </Tab>
  );
};

export default GalleryTab;
