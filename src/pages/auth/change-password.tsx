"use client";

import axios from "axios";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import logoImg from "../../../public/newlogo.png";
import loader from "../../../public/loader.svg";
import success from "../../../public/success.svg";
import styles from "../../styles/animation.module.css";

const ChangePassword = () => {
  const [token, setToken] = useState<string>("");

  const [changed, setChanged] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!token) {
      setError("No token. Please try again");
      return;
    }

    const urlParams = window.location.search.split("?")[1];
    setToken(urlParams);
  }, []);

  const handleChangePassword = async () => {
    try {
      setLoading(true);
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}change-password/change?${token}`
      );
      // console.log(response);
      setChanged(true);
    } catch (error) {
      console.error(error);
      setError("Error changing password. Please try again later");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (token.length > 0) {
      handleChangePassword();
    }
  }, [token]);

  return (
    <div className={`m-auto`}>
      <div
        className={`p-5 flex h-[80px] drop-shadow-md fixed z-50 w-full bg-white font-extrabold justify-center`}
      >
        <div className="w-[80em] flex justify-start">
          <Link href="/" className={`flex  items-center`}>
            <Image src={logoImg} width={120} alt="" />
          </Link>
        </div>
      </div>

      <div
        className={`flex h-full flex-col items-center justify-center min-h-screen pt-20`}
      >
        {loading && (
          <div className={`w-[100x] h-[100px]`}>
            <Image src={loader} width={100} height={100} alt="" />
          </div>
        )}

        {changed && (
          <div
            className={`flex flex-col items-center justify-center ${styles.animation}`}
          >
            <div className={`w-[166px] h-[166px]`}>
              <Image src={success} width={166} height={166} alt="" />
            </div>
            <p className="text-center mt-10">
              Your password has been changed successfully. <br /> Kindly proceed
              to{" "}
              <Link
                href="/auth/login"
                className="text-purpleBase underline hover:text-purple7"
              >
                Login
              </Link>
            </p>
          </div>
        )}

        {error && <div className="text-red5">{error}</div>}
      </div>
    </div>
  );
};

export default ChangePassword;
