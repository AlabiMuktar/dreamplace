import React from 'react'
import Image from "next/image";
import Link from "next/link";
import dreamlogo from "/public/bxs-plane-alt 1.svg";

const AuthNavbar = () => {
  return (
    <div className="flex justify-between items-center h-[68px] w-full bg-[#FFFFFF] px-[20px] sm:px-[24px] md:px-[64px]">
      <Link href={"/"}>
        <div className="flex items-center space-x-[4px]">
          <Image src={dreamlogo} width={24} height={24} alt="dreamplace logo" />
          <p className="text-lg text-[#1B1F2D] font-semibold">Dream Place</p>
        </div>
      </Link>
    </div>
  )
}

export default AuthNavbar
