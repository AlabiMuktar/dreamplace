"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import AuthNavbar from "../../components/authNavbar";
import { userRegistration } from "@/app/libs/userAPI";
import { useSelector } from "react-redux";
import { loginSuccess } from "@/app/state/authSlice";
import { UseDispatch } from "react-redux";
import { AppDispatch } from "@/app/state/store";
import { RootState } from "@/app/state/store";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "react-toastify";
import { Loader2 } from "lucide-react";

const formSchema = z.object({
  name: z.string(),
  password: z.string(),
  confirm_password: z.string(),
});

type FormValues = z.infer<typeof formSchema>;

type UserValues = {
  name: string;
  email: string;
  password: string;
  confirm_password: string;
};

const CreatePassword = () => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      password: "",
      confirm_password: "",
    },
  });
  const email = useSelector((state: RootState) => state.register.email);

  const authState = useSelector((state: RootState)=> state.auth.isAuthenticated)

  const router = useRouter();

  const handleUserRegistration = async (data: FormValues) => {
    setLoading(true);
    const userData: UserValues = { ...data, email };
    try {
      const response = await userRegistration(userData);
      if (response?.data?.status === "success") {
        toast("user registration successful", {
          type: "success",
        });
        setLoading(false);
        router.push("/");
      } else {
        toast("error registering user", {
          type: "warning",
        });
      }
      console.log(response)
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-auto pb-[92px]">
      <AuthNavbar />
      <div className="flex flex-col justify-center sm:items-center max-sm: px-[20px] max-md:px-[24px]">
        <h1 className="font-semibold">Create password</h1>
        <p className="text-sm text-center text-[#4F4F4F]">
          Use a minimum of 10 characters, including letters,
          <br /> lowercase letters, and numbers.
        </p>
        <form
          onSubmit={handleSubmit(handleUserRegistration)}
          className="w-full sm:max-w-[400px] flex flex-col gap-y-[20px] mt-[40px]"
        >
          <div className="flex flex-col">
            <label className="text-sm text-[#181818]">Name</label>
            <input
              {...register("name")}
              type="text"
              className="p-[12px] rounded-[4px] bg-[#F2F2F2] focus:outline-none"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm text-[#181818]">Password</label>
            <input
              {...register("password")}
              type="password"
              className="p-[12px] rounded-[4px] bg-[#F2F2F2] focus:outline-none"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm text-[#181818]">Confirm password</label>
            <input
              {...register("confirm_password")}
              type="password"
              className="p-[12px] rounded-[4px] bg-[#F2F2F2] focus:outline-none"
            />
          </div>
          <button
            disabled={loading}
            className="flex justify-center items-center gap-x-1 text-[#FFFFFF] px-[18px] py-[12px] text-sm rounded-[6px] bg-[#2F80ED]"
          >
            Create account{" "}
            {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : ""}
          </button>

          <p className="text-sm text-[#4F4F4F] mt-[4px]">
            By creating an account, you agree with our
            <span className="text-[#2F80ED] cursor-pointer">
              Terms and Conditions
            </span>
            and Privacy Statement
          </p>
        </form>
      </div>
    </div>
  );
};

export default CreatePassword;
