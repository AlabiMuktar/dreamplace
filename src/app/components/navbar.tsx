import React from "react";
import dreamlogo from "/public/bxs-plane-alt 1.svg";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center h-[68px] w-full px-[64px] bg-[#FFFFFF]">
      <div className="flex items-center space-x-[4px]"> 
        <Image src={dreamlogo} width={24} height={24} alt="dreamplace logo" />
        <p className="text-lg">my Dream Place</p>
      </div>
      <ul className="flex items-center gap-x-6">
        <li className="cursor-pointer">Home</li>
        <li className="cursor-pointer">Discover</li>
        <li className="cursor-pointer">Activities</li>
        <li className="cursor-pointer">About</li>
        <li className="cursor-pointer">Contact</li>
      </ul>
      <div className="flex space-x-4">
        <button className="px-[18px] py-[10px] text-[#2F80ED] border border-[#2F80ED] rounded-[6px]">Register</button>
        <button className="px-[18px] py-[10px] text-[#FFFFFF] bg-[#2F80ED] rounded-[6px]">Sign In</button>
      </div>
    </div>
  );
};

export default Navbar;
