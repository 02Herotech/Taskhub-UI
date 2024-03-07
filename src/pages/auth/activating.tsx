"use client";

import axios from "axios";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";

import logoImg from "../../../public/logo.png";
import loader from "../../../public/loader.svg";
import newloader from "../../../public/newloader.gif";
import success from "../../../public/success.svg";
import styles from "../../styles/animation.module.css";

import welcome from "../../../public/welcome.svg";
import image1 from "../../../public/signupConfirm1.png";
import image2 from "../../../public/signupConfirm2.png";
import image3 from "../../../public/signupConfirm3.png";
import image4 from "../../../public/signupConfirm4.png";

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
        </div>
      </div>
    </div>
  );
};

export default VerifyEmail;
