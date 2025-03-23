import Image from "next/image";
import React from "react";
import HeroImg from "/public/Rectangle 2.png";
import User from "/public/user-square 1.svg";
import Calendar from "/public/calendar 1.svg";
import Location from "/public/location 1.svg";

const Hero = () => {
  return (
    <div className="w-full max-md:mt-[20px]">
      <div className="relative w-full h-[500px]">
        <Image
          src={HeroImg}
          className="absolute w-full h-full object-center object-cover rounded-[10px]"
          alt="hero image"
        />
        <div className="absolute w-[100%] h-[100%] flex flex-col max-md:justify-start md:justify-center items-center max-md:mt-[30px]">
          <h1 className="text-[#FFFFFF] font-bold max-md:text-center">
            Enjoy Your Dream Vacation
          </h1>
          <p className="text-[#FFFFFF] text-center leading-[28px]">
            Plan and book our perfect trip with expert advice, travel tips,
            destination
            <br /> information and inspiration from us
          </p>
        </div>
        <div className="absolute w-[100%] flex justify-center bottom-[-10%] md:bottom-[-7%]">
          <div className="lg:w-[1030px] flex justify-center items-center md:h-[64px] bg-[#FFFFFF] shadow-custom-searchbar rounded-[8px] max-md:py-[30px] max-md:px-[16px] max-md:shadow-md">
            <form className="flex max-md:flex-col items-center gap-x-[10px] gap-y-[8px]">
              <div className="flex items-end gap-[10px] bg-[#F2F2F2] w-full lg:w-[260px] px-[12px] pt-[11px] pb-[12px] rounded-[4px] mx-[8px]">
                <Image src={Location} alt="location" />
                <input
                  className="bg-transparent focus:outline-none placeholder:text-[]"
                  placeholder="Where are you going?"
                />
              </div>

              <div className="flex items-end gap-[10px] bg-[#F2F2F2] w-full lg:w-[170px] px-[12px] pt-[11px] pb-[12px] rounded-[4px]">
                <Image src={Calendar} alt="calendar" />
                <input
                  className="bg-transparent focus:outline-none"
                  placeholder="Check in date"
                />
              </div>

              <div className="flex items-end gap-[10px] bg-[#F2F2F2] w-full lg:w-[170px] px-[12px] pt-[11px] pb-[12px] rounded-[4px]">
                <Image src={Calendar} alt="calendar" />
                <input
                  className="bg-transparent focus:outline-none"
                  placeholder="Check out date"
                />
              </div>

              <div className="flex items-end gap-x-[10px] bg-[#F2F2F2] w-full lg:w-[210px] px-[12px] pt-[11px] pb-[12px] rounded-[4px]">
                <Image src={User} alt="calendar" />
                <input
                  className="bg-transparent focus:outline-none"
                  placeholder="Guests"
                />
              </div>

              <button
                className="bg-[#2F80ED] w-full md:w-[148px] py-[12px] px-[18px] rounded-[4px] text-[#FFFFFF]
                  transition-transform duration-200 ease-in-out 
                  hover:bg-[#2575D1] hover:scale-105 hover:shadow-lg 
                  active:bg-[#1E60BF]"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
