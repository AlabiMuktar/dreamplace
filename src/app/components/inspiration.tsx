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
      {inspirations.map((inspiration, idx) => (
        <div key={idx} className="grid grid-cols-3">
          <div>
            <Image src={inspiration.img}
                width={295}
                height={220}
                alt="inspiration image"/>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Inspiration;
