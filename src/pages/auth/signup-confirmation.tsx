import React from "react";
import Link from "next/link";
import logoImg from "../../../public/logo.png";
import Image from "next/image";
import { IoIosArrowRoundForward } from "react-icons/io";

import welcome from "../../../public/welcome.svg";
import image1 from "../../../public/activationChat1.png";
import image2 from "../../../public/signupConfirm2.png";
import image3 from "../../../public/signupConfirm3.png";
import image4 from "../../../public/signupConfirm4.png";

const SignupConfirmation = () => {
  return (
    <div className={`m-auto`}>
      <div
        className={`p-5 flex h-[80px] drop-shadow-md fixed z-50 w-full bg-white font-extrabold justify-center`}
      >
        <div className="w-[80em] flex ">
          <Link href="/" className={`flex space-x-3 items-center p-2`}>
            <Image
              src={logoImg}
              width={50}
              height={40}
              alt=""
              className={`mt-[-10px]`}
            />
            <h4 className={`text-sm font-extrabold `}>TaskHub</h4>
          </Link>
        </div>
      </div>

      <div
        className={`flex max-w-7xl mx-auto h-full flex-col items-center justify-center min-h-screen pt-20 bg-gradient-to-r from-[#E9F3FF] to-[#F5DDFD]`}
      >
        <div className="flex flex-col justify-center items-center  relative ">
          <div className="items-center  flex flex-col justify-center space-y-[100px]">
            <div className="flex flex-col justify-center items-center  space-y-5">
              <h1 className="text-[45px] text-center font-bold mt-10 ">
                Welcome to TaskHub!
              </h1>
              <div className="flex flex-col justify-center items-center">
                <p className="text-[15px] font-semibold">
                  We’re thrilled to have you onboard!
                </p>
                <p className="text-[15px] font-semibold">
                  Before first, kindly use the link sent to your email address
                  to verify to email
                </p>
              </div>
            </div>

            <div className="flex justify-center items-center space-x-16">
              <div className="text-center flex flex-col justify-center items-center  space-y-3">
                <div className="flex -space-x-2">
                  <Image src={image1} width={20} alt="" />
                  <Image src={image2} width={20} alt="" />
                  <Image src={image3} width={20} alt="" />
                </div>
                <p className="leading-tight text-[15px]">
                  Connect <br /> with customers
                </p>
              </div>
              <Image
                src={image4}
                width={400}
                alt=""
                className="rounded-b-3xl"
              />
              <p className="text-center leading-tight text-[15px]">
                <span className="text-[30px] font-bold">50+</span> <br />
                services available
              </p>
            </div>
          </div>

          {/* <div className="py-4 px-6 bg-white rounded-full absolute bottom-44">
            <Link
              href="/auth/login"
              className="flex items-center bg-purpleBase hover:bg-purpleHover py-2 px-8 rounded-full text-white "
            >
              Proceed to Login{" "}
              <span className="-rotate-45 ml-1">
                <IoIosArrowRoundForward />
              </span>
            </Link>
          </div> */}

          <div className="bg-[#FE9B07AB] rounded-full h-[60px] w-[60px] absolute top-20 left-16"></div>
          <div className="bg-[#FE9B07AB] rounded-full h-[30px] w-[30px] absolute top-8 right-24"></div>
        </div>
      </div>
    </div>
  );
};

export default SignupConfirmation;
