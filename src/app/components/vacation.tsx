"use client";
import { useState } from "react";
import Image from "next/image";
import { vacationData } from "../data/data";

const Vacation = () => {
  const [locationData, setLocationData] = useState(vacationData);
  return (
    <div className="w-full flex flex-col gap-y-[16px] mt-[80px]">
      <div className="flex flex-col gap-y-[24px]">
        <p className="text-[28px] font-semibold text-[#181818]">
          Enjoy your dream vacation
        </p>
        <p className="text-[#333333] leading-[22px]">
          Plan and book our perfect trip with expert advice, travel tips,
          destination information <br />
          and inspiration from us
        </p>
      </div>
      <div className="flex justify-between gap-x-[16px] gap-y-[6px]">
        {locationData.map((location, idx) => (
          <div
            key={location.id}
            className="flex flex-col gap-y-[2px] cursor-pointer hover:scale-105 duration-500"
          >
            <div className="relative w-[295px] h-[220px]">
              <Image
              className="absolute w-[100%] h-[100%]"
                src={location.img}
                width={295}
                height={220}
                alt="location image"
              />
            </div>
            <p className="text-xl text-[#181818] font-semibold">
              {location.country}
            </p>
            <p className="text-sm">{location.properties}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Vacation;
