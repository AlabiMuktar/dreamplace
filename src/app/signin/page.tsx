"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { UseSelector } from "react-redux";
import AuthNavbar from "../components/authNavbar";
import google from "/public/image 4.svg";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useGoogleLogin } from "@react-oauth/google";
import { userLogin } from "../services/userAPI";
import axios from "axios";

const signInSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(8),
});

type FormValues = z.infer<typeof signInSchema>;

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const [isGoogleLoading, setIsGoogleLoading] = useState(false);
  const [googleError, setGoogleError] = useState<string | null>(null);

  const router = useRouter()

  const handleGoogleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      setIsGoogleLoading(true);
      setGoogleError(null);

      try {
        // Send the Google access token to your backend
        const response = await axios.post("/auth/google", {
          accessToken: tokenResponse.access_token,
        });

        // Handle successful authentication
        if (response.data.token) {
          // Store the token (consider using httpOnly cookies in production)
          localStorage.setItem("authToken", response.data.token);

          // Redirect to protected page
          // router.push("/dashboard");
        }
      } catch (error) {
        setGoogleError("Failed to authenticate with Google. Please try again.");
        console.error("Google authentication error:", error);
      } finally {
        setIsGoogleLoading(false);
      }
    },
    onError: (error) => {
      setGoogleError("Google login failed. Please try again.");
      console.error("Google Login Error:", error);
    },
  });
  
  const handleUserSignIn = async(data: FormValues) => {
    console.log("User Signin", data)
    const response = await userLogin(data)
    console.log(response)
    router.push('/')
  }
  return (
    <div className="h-auto pb-[92px]">
      <AuthNavbar />
      <div className="flex flex-col justify-center sm:items-center max-sm:px-[20px] max-md:px-[24px]">
        <h1 className="font-semibold">Sign in</h1>
        <form onSubmit={handleSubmit(handleUserSignIn)} className="w-full sm:max-w-[400px] flex flex-col gap-y-[20px] mt-[40px]">
          <div className="flex flex-col">
            <label className="text-sm text-[#181818]">Email address</label>
            <input
              {...register("email")}
              type="text"
              className={`p-[12px] rounded-[4px] bg-[#F2F2F2] outline-none focus-within:shadow-custom focus-within:border-[#2F80ED] ${
                errors.email ? "border border-red-500" : ""
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>
          <div className="flex flex-col">
            <label className="text-sm text-[#181818]">Password</label>
            <input
              {...register("password")}
              type="password"
              className={`p-[12px] rounded-[4px] bg-[#F2F2F2] outline-none focus-within:shadow-custom focus-within:border-[#2F80ED] ${
                errors.password ? "border border-red-500" : ""
              }`}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>
          <div className="flex justify-between">
            <div className="flex items-center gap-x-[6px]">
              <input type="checkbox" />
              <p className="text-sm tracking-tight text-[#4F4F4F]">I agree to the Terms & Privacy</p>
            </div>
            <Link href={"/forgotpassword"}>
              <p className="text-sm text-[#2F80ED] cursor-pointer">
                forgot password?
              </p>
            </Link>
          </div>
          <button type="submit" className="text-[#FFFFFF] px-[18px] py-[12px] text-sm rounded-[6px] bg-[#2F80ED]">
            Continue with email
          </button>
          <div className="flex items-center">
            <hr className="border-t border-t-[#E0E0E0] w-full" />
            <p className="px-[16px] text-[#4F4F4F] text-sm text-nowrap">
              Or continue with
            </p>
            <hr className="border-t border-t-[#E0E0E0] w-full" />
          </div>
          <button disabled={isGoogleLoading} type="button" className={`flex items-center justify-center gap-x-[10px] px-[18px] py-[12px] rounded-[6px] text-sm border border-[#E0E0E0] ${
              isGoogleLoading ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-50"
            } transition-colors`} onClick={handleGoogleLogin}>
            {isGoogleLoading ? (
              <span className="animate-spin">🌀</span> 
            ) : (
              <>
                <Image 
                  src={google} 
                  width={20} 
                  height={20} 
                  alt="google logo"
                  priority
                />
                Continue with Google
              </>
            )}
          </button>
          <p className="text-sm text-center mt-[40px]">
            Don't have an account?{" "}
            <Link href={"/register"}>
              <span className="text-[#2F80ED] cursor-pointer">Register</span>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
