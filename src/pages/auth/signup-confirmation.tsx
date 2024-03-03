import React from "react";
import Link from "next/link";
import logoImg from "../../../public/logo.png";
import Image from "next/image";

import welcome from "../../../public/welcome.svg";
import image1 from "../../../public/signupConfirm1.png";
import image2 from "../../../public/signupConfirm2.png";
import image3 from "../../../public/signupConfirm3.png";
import image4 from "../../../public/signupConfirm4.png";

const SignupConfirmation = () => {
  return (
    <div className={`m-auto`}>
      <div
        className={`p-5 flex h-[80px] drop-shadow-md fixed z-50 w-full bg-white font-extrabold justify-center`}
      >
        <div className="w-[80em]">
          <Link href="/" className={`flex space-x-3 items-center`}>
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
        className={`flex max-w-7xl mx-auto h-full flex-col items-center justify-center min-h-screen pt-20 bg-purpleBase`}
      >
        {/* <div className={`w-[166px] h-[166px] `}>
          <Image src={welcome} width={166} height={166} alt="" />
        </div>
        <p className="text-center mt-10">
          Before we get started, please use the link <br /> in the mail sent to
          you to verify your email
        </p> */}
        {/* <Link href='https://mail.google.com/mail/u/0/#inbox' target='_blank' className={`text-purpleBase  underline hover:text-md`}>Link to my mail</Link > */}

        <div className=" h-full w-full p-12 flex justify-center items-center ">
          <div className="items-center w-[800px] text-white border border-white flex flex-col  space-y-16 justify-center">
            <div className="flex flex-col items-center space-y-3">
              <h1 className="text-[45px] text-center">Welcome to TaskHub!</h1>
              <div className="text-justify w-[430px]  text-[14px] flex flex-col space-y-3">
                <p className="">
                  We’re thrilled to have you onboard. should you have any
                  inquires or require support, feel free to reach out to us on
                  our support platform.
                </p>
                <p>Enjoy your journey with us!</p>
              </div>
            </div>

            <div className="flex">
              <div>
                <div className="flex -space-x-2">
                  <Image src={image1} width={20} alt="" />
                  <Image src={image2} width={20} alt="" />
                  <Image src={image3} width={20} alt="" />
                </div>
                <p>
                  Connect <br /> with customers
                </p>
              </div>
              <Image
                src={image4}
                width={350}
                alt=""
                className="rounded-b-3xl"
              />
              <p>Over 50+ services available</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupConfirmation;
