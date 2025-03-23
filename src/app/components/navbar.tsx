"use client";
import React, { useState } from "react";
import dreamlogo from "/public/bxs-plane-alt 1.svg";
import profilePicture from "/public/Ellipse 2.png";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoMenu } from "react-icons/io5";
import { FaBell } from "react-icons/fa6";
import { TbUserSquareRounded, TbLogout } from "react-icons/tb";
import { MdOutlineFlightTakeoff } from "react-icons/md";
import { LuWallet } from "react-icons/lu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-between items-center h-[68px] w-full bg-[#FFFFFF]">
        <Link href={"/"}>
          <div className="flex items-center space-x-[4px]">
            <Image
              src={dreamlogo}
              width={24}
              height={24}
              alt="dreamplace logo"
            />
            <p className="text-lg text-[#1B1F2D] font-semibold">Dream Place</p>
          </div>
        </Link>
        <ul className="hidden md:flex items-center gap-x-6 text-[#333333]">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">Discover</li>
          <li className="cursor-pointer">Activities</li>
          <li className="cursor-pointer">About</li>
          <li className="cursor-pointer">Contact</li>
          <li className="cursor-pointer">List your property</li>
        </ul>
        <div className="flex items-center space-x-4">
          <Link href={"/register"}>
            <button className="px-[14px] py-[8px] md:px-[18px] md:py-[10px] text-[#2F80ED] border border-[#2F80ED] rounded-[6px]">
              Register
            </button>
          </Link>
          <Link href={"/signin"}>
            <button className="px-[14px] py-[8px] md:px-[18px] md:py-[10px] text-[#FFFFFF] bg-[#2F80ED] rounded-[6px]">
              Sign In
            </button>
          </Link>
          <IoMenu className="text-xl flex md:hidden" />
          {/* <div className="flex items-center gap-x-[22px]">
            <FaBell className="text-[24px]" />

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Image
                  src={profilePicture}
                  alt="profile picture"
                  width={44}
                  height={44}
                  className="cursor-pointer"
                />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="md:w-56 md:mr-8">
                <DropdownMenuLabel className="flex items-center gap-x-[10px] text-[#4F4F4F] cursor-pointer"><TbUserSquareRounded className="text-[20px]" />Manage Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuLabel className="flex items-center gap-x-[10px] text-[#4F4F4F] cursor-pointer"><MdOutlineFlightTakeoff className="text-[20px]" />My Trips</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuLabel className="flex items-center gap-x-[10px] text-[#4F4F4F] cursor-pointer"><LuWallet className="text-[20px]" />Reward and wallet</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuLabel className="flex items-center gap-x-[10px] text-[#4F4F4F] cursor-pointer"><TbLogout className="text-[20px]" />Sign out</DropdownMenuLabel>
              </DropdownMenuContent>
            </DropdownMenu>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Navbar;
