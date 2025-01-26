import React, { useEffect } from "react";
import Avatar from "@/assets/avatar.png";
import Logo from "@/assets/logo.png";
import { Header } from "@/components/header/Header";
import { SignInForm } from "@/components/auth/SignInForm";
import { useAuth } from "@/hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { Image } from "@/components/Image";;

export const Auth = () => {
  const navigate = useNavigate();
  const { isLogged } = useAuth();

  useEffect(() => {
    if (isLogged) {
      navigate("/", { replace: true });
    }
  }, [isLogged])

  return (
    <>
      <Header />
      <div className="md:w-fit md:my-20 mx-auto flex md:border border-gray-500 items-center bg-white">
        <div className="hidden md:flex flex-1 items-center">
          <Image src={Avatar} alt="photo" className="w-full h-full"/>
        </div>
        <div className="flex-1 p-10 w-96">
          <Image src={Logo} alt="logo" className="hidden md:block h-24 w-32 mb-2"/>
          <SignInForm />
        </div>
      </div>
    </>
  )
}
