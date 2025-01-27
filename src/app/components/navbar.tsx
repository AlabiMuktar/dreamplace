import React from "react";
import dreamlogo from "/public/bxs-plane-alt 1.svg";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center h-[68px] w-full bg-[#FFFFFF]">
      <Link href={"/"}>
        <div className="flex items-center space-x-[4px]">
          <Image src={dreamlogo} width={24} height={24} alt="dreamplace logo" />
          <p className="text-lg text-[#1B1F2D]">my Dream Place</p>
        </div>
      </Link>
      <ul className="flex items-center gap-x-6 text-[#333333]">
        <li className="cursor-pointer">Home</li>
        <li className="cursor-pointer">Discover</li>
        <li className="cursor-pointer">Activities</li>
        <li className="cursor-pointer">About</li>
        <li className="cursor-pointer">Contact</li>
        <li className="cursor-pointer">List your property</li>
      </ul>
      <div className="flex space-x-4">
        <Link href={"/register"}>
          <button className="px-[18px] py-[10px] text-[#2F80ED] border border-[#2F80ED] rounded-[6px]">
            Register
          </button>
        </Link>
        <Link href={"/signin"}>
          <button className="px-[18px] py-[10px] text-[#FFFFFF] bg-[#2F80ED] rounded-[6px]">
            Sign In
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
