import React from "react";
import Link from "next/link";
import AuthNavbar from "../components/authNavbar";


const ForgotPassword = () => {
  return (
    <div className="h-screen pb-[92px]">
      <AuthNavbar />
      <div className="flex flex-col justify-center md:items-center max-sm: px-[20px] max-md:px-[24px] mt-[60px]">
        <h1 className="font-semibold">Forgot your password?</h1>
        <p className="text-sm text-center text-[#4F4F4F]">We'll send you a link to reset it. Enter your email address<br /> used for My Dream Place</p>
        <form className="w-full md:max-w-[400px] flex flex-col gap-y-[20px] mt-[40px]">
          <div className="flex flex-col">
            <label className="text-sm text-[#181818]">Your email address</label>
            <input
              type="password"
              className="p-[12px] rounded-[4px] bg-[#F2F2F2] focus:outline-none"
            />
          </div>
          <button className="text-[#FFFFFF] px-[18px] py-[12px] text-sm rounded-[6px] bg-[#2F80ED]">
            Send Reset Link
          </button>
        
          <p className="text-sm text-[#4F4F4F] mt-[4px]">
            By creating an account, you agree with our  
            <Link href={"/register"}> 
              <span className="text-[#2F80ED] cursor-pointer">Terms and Conditions</span>
            </Link> and <Link href={'/siginin'}>Privacy Statement</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
