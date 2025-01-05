import Image from "next/image";
import React from "react";
import HeroImg from "/public/Rectangle 2.png";
import { CiLocationOn } from "react-icons/ci";
import { LuCalendarDays } from "react-icons/lu";

const Hero = () => {
  return (
    <div className="w-full ">
      <div className="relative w-full h-[500px]">
        <Image
          src={HeroImg}
          className="absolute w-full h-full object-center object-cover rounded-[10px]"
          alt="hero image"
        />
        <div className="absolute w-[100%] h-[100%] flex flex-col justify-center items-center">
          <h1 className="text-[#FFFFFF] font-bold">
            Enjoy Your Dream Vacation
          </h1>
          <p className="text-[#FFFFFF] text-center leading-[28px]">
            Plan and book our perfect trip with expert advice, travel tips,
            destination
            <br /> information and inspiration from us
          </p>
        </div>
        <div className="absolute w-[100%] flex justify-center bottom-[-7%]">
          <div className="w-[1030px] flex justify-center items-center h-[64px] bg-[#FFFFFF] shadow-custom-searchbar rounded-[8px]">
            <form className="flex items-center gap-x-[10px]">
              <input className="bg-[#F2F2F2] max-w-[260px] px-[12px] pt-[11px] pb-[12px] rounded-[4px] focus:outline-none placeholder:text-[]" placeholder="Where are you going?" />

              <input className="bg-[#F2F2F2] max-w-[170px] px-[12px] pt-[11px] pb-[12px] rounded-[4px] focus:outline-none" placeholder="Check in date" />

              <input className="bg-[#F2F2F2] max-w-[170px] px-[12px] pt-[11px] pb-[12px] rounded-[4px] focus:outline-none" placeholder="Check out date" />
              <input className="bg-[#F2F2F2] max-w-[210px] px-[12px] pt-[11px] pb-[12px] rounded-[4px] focus:outline-none" placeholder="Guests" />

              <button className="bg-[#2F80ED] w-[148px] py-[12px] px-[18px] rounded-[4px] text-[#FFFFFF]">Search</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
