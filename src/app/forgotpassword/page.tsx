"use client";
import React, { useState } from "react";
import Link from "next/link";
import AuthNavbar from "../components/authNavbar";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2 } from "lucide-react";
import { userEmailVerification } from "../libs/userAPI";

const formSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

type FormValues = z.infer<typeof formSchema>;

const ForgotPassword = () => {
  const [loading, setLoading] = useState(false)
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

  const handleUserVerification = async (data: FormValues) => {
    setLoading(true)
    try {
      const response = await userEmailVerification(data)
      console.log(response)
      setLoading(false)
    } catch (error) {
      console.error(error)
      setLoading(false)
    }
  }

  return (
    <div className="h-screen pb-[92px]">
      <AuthNavbar />
      <div className="flex flex-col justify-center sm:items-center max-sm: px-[20px] max-md:px-[24px] mt-[60px]">
        <h1 className="font-semibold">Forgot your password?</h1>
        <p className="text-sm text-center text-[#4F4F4F]">
          We'll send you a code to reset it. Enter your email address
          <br /> used for Dream Place
        </p>
        <form onSubmit={handleSubmit(handleUserVerification)} className="w-full sm:max-w-[400px] flex flex-col gap-y-[20px] mt-[40px]">
          <div className="flex flex-col">
            <label className="text-sm text-[#181818]">Your email address</label>
            <input
              {...register("email")}
              type="email"
              className="p-[12px] rounded-[4px] bg-[#F2F2F2] focus:outline-none"
            />
          </div>
          <button disabled={loading} className="flex justify-center items-end gap-x-1 text-[#FFFFFF] px-[18px] py-[12px] text-sm rounded-[6px] bg-[#2F80ED]">
              Get reset code {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : ''}
          </button>

          <p className="text-sm text-[#4F4F4F] mt-[4px]">
            By creating an account, you agree with our
            <Link href={"/register"}>
              <span className="text-[#2F80ED] cursor-pointer">
                Terms and Conditions
              </span>
            </Link>{" "}
            and <Link href={"/siginin"}>Privacy Statement</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
