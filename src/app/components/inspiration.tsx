"use client";
import { useState } from "react";
import Image from "next/image";
import { tripInspiration } from "../data/data";

const Inspiration = () => {
  const [inspirations, setInspirations] = useState(tripInspiration);
  return (
    <div className="mt-[60px]">
      <p className="text-[28px] font-semibold text-[#181818]">
        Get inspiration for your next trip
      </p>
      <div className="flex items-center justify-between max-md:gap-x-[6px] mt-[24px]">
        {inspirations.map((inspiration, idx) => (
          <div key={idx} className="relative grid col-span-1">
            <Image
              src={inspiration.img}
              width={400}
              height={280}
              alt={`inspiration ${idx}`}
              className="max-md:max-w-[400px] max-h-[280px]"
            />
            <div className="absolute md:bottom-[14px] flex flex-col justify-end gap-y-[8px] px-[14px] text-start text-wrap text-[#FFFFFF] ">
              <h2 className="font-semibold text-lg md:text-xl">{inspiration.inspiration}</h2>
              <p className="font-extralight tracking-wide max-md:text-sm">{inspiration.details}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Inspiration;
