"use client";

import axios from "axios";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";

import logoImg from "../../../public/newlogo.png";
import loader from "../../../public/loader.svg";
import newloader from "../../../public/newloader.gif";
import success from "../../../public/success.svg";
import styles from "../../styles/animation.module.css";

import image1 from "../../../public/activationImage1.jpg";
import image2 from "../../../public/activationImage2.jpg";
import image3 from "../../../public/activationChat1.png";
import image4 from "../../../public/activationChat2.png";

const VerifyEmail = () => {
  const [tokenAndHashedEmail, setTokenAndHashedEmail] = useState<string>("");

  const [verified, setVerified] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const urlParams = window.location.search.split("?")[1];
    setTokenAndHashedEmail(urlParams);
  }, []);

  const verifyUserEmail = async () => {
    try {
      setLoading(true);
      await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}user/verify?${tokenAndHashedEmail}`
      );
      setVerified(true);
    } catch (error) {
      setError(true);
      console.error("Error verifying email:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (tokenAndHashedEmail.length > 0) {
      verifyUserEmail();
    }
  }, [tokenAndHashedEmail]);

  const [selectedCustomerChat, setSelectedCustomerChat] = useState(0);
  const [customerChat, setCustomerChat] = useState([
    {
      id: 1,
      chat: "Hey, I need a plumber in my house",
    },
    {
      id: 2,
      chat: "What's your price to fix my bathroom?",
    },
    {
      id: 3,
      chat: "Okay, send me your invoice",
    },
  ]);

  return (
    <div className={`m-auto`}>
      <div
        className={`p-5 flex h-[80px] drop-shadow-md fixed z-50 w-full bg-white font-extrabold justify-center`}
      >
        <div className="w-[80em] flex justify-start  ">
          <Link href="/" className={`flex  items-center p-1 `}>
            <Image src={logoImg} width={120} alt="" />
          </Link>
        </div>
      </div>

      <div
        className={`flex max-w-7xl mx-auto h-full flex-col items-center justify-center min-h-screen pt-20 bg-gradient-to-r from-[#E9F3FF] to-[#F5DDFD]`}
      >
        <div className="flex flex-col justify-center items-center  relative ">
          <div className="items-center  flex flex-col justify-center space-y-[50px]">
            <div className="flex flex-col justify-center items-center  h-[220px] mt-5 ">
              {loading && (
                <div>
                  <Image src={newloader} width={150} height={150} alt="" />
                </div>
              )}

              {verified && (
                <div
                  className={`flex flex-col items-center justify-center ${styles.animation}`}
                >
                  <Image src={success} width={130} height={130} alt="" />

                  <p className="text-center mt-4 font-bold">
                    Your email has been verified successfully.
                  </p>
                </div>
              )}

              {error && (
                <div className="text-red5">
                  Email already verified. Please log in
                </div>
              )}
            </div>

            <div className="flex justify-center items-center relative w-[1100px] ">
              <div className="flex justify-center items-center space-x-20  ">
                <div
                  className={`w-[200px] h-[200px]  flex justify-center items-center `}
                >
                  <Image
                    src={image1}
                    alt=""
                    width={200}
                    className={`rounded-[50%] object-cover h-[200px]`}
                  />
                </div>
                <div
                  className={`w-[200px] h-[200px]  flex justify-center items-center `}
                >
                  <Image
                    src={image2}
                    alt=""
                    width={200}
                    className={`rounded-[50%] object-cover h-[200px]`}
                  />
                </div>
              </div>
              <div className="absolute inset-0 flex justify-center items-center  ">
                <p className="text-center leading-tight text-[15px]">
                  <span className="text-[30px] font-bold">50+</span> <br />
                  services <br /> available
                </p>
              </div>
              <div className="flex absolute inset-0 justify-start items-start space-x-2 ">
                <Image src={image3} alt="" width={40} />
                <p className="bg-grey2 w-[200px] py-2 px-4 rounded-md text-[12px] -mt-10">
                  "Hi, I'm a plumber. How may I be of your service?"
                </p>
              </div>

              <div className="flex absolute inset-0 justify-end items-center space-x-2 ">
                <p className="bg-grey2 w-[200px] py-2 px-4 rounded-md text-[12px] -mt-10 transition-all delay-500">
                  "Hi, I'm a plumber. How may I be of your service?"
                </p>

                <Image src={image4} alt="" width={40} />
              </div>
            </div>
          </div>

          <div className={`py-4 px-6 bg-white rounded-full absolute bottom-44`}>
            <Link
              href="/auth/login"
              className="flex items-center bg-purpleBase hover:bg-purpleHover py-2 px-8 rounded-full text-white "
            >
              Proceed to Login{" "}
              <span className="-rotate-45 ml-1">
                <IoIosArrowRoundForward />
              </span>
            </Link>
          </div>

          <div className="bg-[#FE9B07AB] rounded-full h-[60px] w-[60px] absolute top-20 left-60"></div>
          <div className="bg-[#FE9B07AB] rounded-full h-[30px] w-[30px] absolute top-8 right-72"></div>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmail;
