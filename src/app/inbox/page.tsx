import React from "react";
import Image from "next/image";
import Link from "next/link";
import mailbox from "/public/inbox 1.svg";
import AuthNavbar from "../components/authNavbar";
import { FaRegBell } from "react-icons/fa";

const CreatePassword = () => {
  return (
    <div className="h-auto pb-[92px]">
      <AuthNavbar />
      <div className="flex flex-col justify-center md:items-center max-sm: px-[20px] max-md:px-[24px]">
        <div className="flex items-center justify-center p-[24px] md:p-[36px] rounded-[20px] bg-[#FEE265]/30">
          <Image src={mailbox} height={200} width={200} alt="mailbox" />
        </div>
        <div className="mt-[40px] flex flex-col text-center">
          <p className="text-2xl">Check your Inbox</p>
          <p className="text-[#4F4F4F] text-sm mt-[12px]">
            We have just emailed you the instructions and a reset
            <br /> password link to{" "}
            <span className="text-[#000]">Sumail_john@gmail.com.</span> It might
            take a<br /> few minutes to arrive
          </p>
          <Link href={"/signin"}>
            <button className="px-[18px] py-[12px] mt-[40px] rounded-[6px] bg-[#2F80ED] text-[#FFFFFF]">
              Back to Sign in
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CreatePassword;
