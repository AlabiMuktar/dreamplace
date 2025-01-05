import React from "react";
import Image from "next/image";
import Link from "next/link";
import AuthNavbar from "../components/authNavbar";
import google from "/public/image 4.svg";
import facebook from "/public/facebook 1.svg";

const Register = () => {
  return (
    <div className="h-auto pb-[92px]">
      <AuthNavbar />
      <div className="flex flex-col justify-center md:items-center max-sm: px-[20px] max-md:px-[24px]">
        <h1 className="font-semibold">Register</h1>
        <form className="w-full md:max-w-[400px] flex flex-col gap-y-[20px] mt-[40px]">
          <div className="flex flex-col">
            <label className="text-sm text-[#181818]">Email address</label>
            <input
              type="text"
              className="p-[12px] rounded-[4px] bg-[#F2F2F2] focus:outline-none"
            />
          </div>
          
          <button className="text-[#FFFFFF] px-[18px] py-[12px] text-sm rounded-[6px] bg-[#2F80ED]">
            Continue with email
          </button>
          <div className="flex items-center">
            <hr className="border-t border-t-[#E0E0E0] w-full" />
            <p className="px-[16px] text-[#4F4F4F] text-sm text-nowrap">
              or use one these options
            </p>
            <hr className="border-t border-t-[#E0E0E0] w-full" />
          </div>
          <button className="flex items-center justify-center gap-x-[10px] px-[18px] py-[12px] rounded-[6px] text-sm border border-[#E0E0E0]">
            <Image src={google} width={20} height={20} alt="google logo" />
            Continue with Google
          </button>
          <button className="flex items-center justify-center gap-x-[10px] px-[18px] py-[12px] rounded-[6px] text-sm text-[#FFFFFF] bg-[#475993]">
            <Image src={facebook} width={20} height={20} alt="google logo" />
            Continue with Facebook
          </button>
          <p className="text-sm text-center mt-[40px]">
            Already have an account?{" "}
            <Link href={"/signin"}>
              <span className="text-[#2F80ED] cursor-pointer">Sign in</span>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
