"use client"
import { useState } from "react"
import { hotelLists } from "../data/data"
import Image from "next/image"

const Hotels = () => {
  const [hotels, setHotels] = useState(hotelLists)
  return (
    <div className="flex flex-col gap-y-[24px] mt-[60px]">
      <p className="text-[28px] font-semibold text-[#181818]">
        Popular hotels
      </p>
      <div className="flex justify-between gap-x-[16px] gap-y-[6px]">
        {hotels.map((hotel) => (
          <div
            key={hotel.id}
            className="flex flex-col gap-y-[2px] cursor-pointer group"
          >
            <div className="relative w-[295px] h-[220px] group-hover:scale-105 duration-500">
              <Image
                className="absolute w-[100%] h-[100%]"
                src={hotel.img}
                width={295}
                height={220}
                alt="location image group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col gap-y-[2px] group">
              <p className="text-xl text-[#181818] font-semibold">
                {hotel.hotel}
              </p>
              <p className="text-sm">{hotel.properties}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Hotels
