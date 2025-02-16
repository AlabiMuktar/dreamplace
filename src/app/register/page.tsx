"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../state/store";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { toast } from "react-toastify";
import { setEmail } from "../state/registerSlice";
import AuthNavbar from "../components/authNavbar";
import google from "/public/image 4.svg";
import { userEmailVerification } from "@/app/libs/userAPI";
import { Loader2 } from "lucide-react";

const formSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

type FormValues = z.infer<typeof formSchema>;

const Register = () => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);
  const [googleError, setGoogleError] = useState<string | null>(null);

  const dispatch = useDispatch<AppDispatch>();

  const router = useRouter();

  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

  const handleGoogleLogin = () => {
    setIsGoogleLoading(true);
    setGoogleError(null);

    try {
      window.location.href = `${baseUrl}/auth/google`;
    } catch (error) {
      setGoogleError("Failed to authenticate with Google. Please try again.");
      console.error("Google authentication error:", error);
    }
  };

  useEffect(() => {
    const checkAuthStatus = async () => {
      const urlParams = new URLSearchParams(window.location.search);
      const token = urlParams.get('token');
      
      if (token) {
        try {
          localStorage.setItem("authToken", token);
          
          window.location.href = "/"
        } catch (error) {
          setGoogleError("Authentication failed");
        }
      }
    };
  
    checkAuthStatus();
  }, []);
  

  const handleuserEmailVerification = async (data: FormValues) => {
    setLoading(true)
    try {
      const response = await userEmailVerification(data);
      if (response?.status === 200) {
        dispatch(setEmail(data.email));
        console.log(response);
        setLoading(false);
        toast(response.data.message, {
          type: "success",
        });
        router.push("/register/password");
      } else {
        setLoading(false);
        toast("email already registered", {
          type: "warning",
        });
      }
    } catch (error) {
      console.error(error);
      setLoading(false)
    }
  };

  return (
    <div className="h-auto pb-[92px]">
      <AuthNavbar />
      <div className="flex flex-col justify-center sm:items-center max-sm:px-[20px] max-md:px-[24px]">
        <h1 className="font-semibold">Register</h1>
        <form
          onSubmit={handleSubmit(handleuserEmailVerification)}
          className="w-full sm:max-w-[400px] flex flex-col gap-y-[20px] mt-[40px]"
        >
          <div className="flex flex-col">
            <label className="text-sm text-[#181818]">Email address</label>
            <input
              {...register("email")}
              type="text"
              className={`py-[8px] px-[12px] rounded-[4px] bg-[#F2F2F2] focus:outline-none ${
                errors.email ? "border border-red-500" : ""
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <button
            disabled={loading}
            type="submit"
            className="flex justify-center items-end gap-x-1 text-[#FFFFFF] px-[18px] py-[12px] text-sm rounded-[6px] bg-[#2F80ED]"
          >
            Continue with email {loading ? <Loader2 className="h-4 w-4 animate-spin" />: ''}
          </button>
          <div className="flex items-center">
            <hr className="border-t border-t-[#E0E0E0] w-full" />
            <p className="px-[16px] text-[#4F4F4F] text-sm text-nowrap">
              Or continue with
            </p>
            <hr className="border-t border-t-[#E0E0E0] w-full" />
          </div>
          <button
            disabled={isGoogleLoading}
            type="button"
            className={`flex items-center justify-center gap-x-[10px] px-[18px] py-[12px] rounded-[6px] text-sm border border-[#E0E0E0] ${
              isGoogleLoading
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-gray-50"
            } transition-colors`}
            onClick={handleGoogleLogin}
          >
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
