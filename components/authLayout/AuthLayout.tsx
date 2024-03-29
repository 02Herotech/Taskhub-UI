import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BsArrowLeftCircle } from "react-icons/bs";

import logoImg from "../../public/newlogo.png";
import { Button } from "../../components/buttons/Button";

const AuthLayout = () => {
  return (
    <div className={` w-full text-black`}>
      <div
        className={`p-5 flex h-[80px] drop-shadow-md fixed z-50 w-full bg-white font-extrabold justify-center `}
      >
        <div className="w-[80em] flex justify-start">
          <Link href="/" className={`flex items-center  p2-1 px-3`}>
            <Image src={logoImg} width={120} alt="" className="" />
          </Link>
        </div>
      </div>

      <div
        className={`flex  mt-10 items-center min-h-screen justify-center w-full my-auto `}
      >
        <div
          className={`px-20  flex justify-center items-center m-auto flex-col`}
        >
          <div className={`w-[600px] p-3 space-y-5 text-center mb-10`}>
            <div className={`  text-[36px] font-bold `}>
              <h1 className={` `}>Create your TaskHub account</h1>
            </div>

            <div
              className={`flex justify-around items-center font-[600] w-[280px] h-[50px] mx-auto`}
            >
              <h5>Already have an account?</h5>
              <Link
                href="/auth/login"
                className={`text-purpleBase hover:text-[17px] w-[60px] h-[30px] flex justify-center items-center`}
              >
                Log in
              </Link>
            </div>
          </div>

          <div
            className={`space-y-5  text-black flex flex-col justify-center items-center`}
          >
            <div className={`flex space-x-4 font-light mb-10`}>
              <div>
                <Link href="/auth/customer-signup">
                  <Button
                    btnValue="CUSTOMER"
                    className="h-[60px] w-[200px]  text-base bg-white hover:text-white"
                  />
                </Link>
              </div>

              <div>
                <Link href="/auth/service-provider-signup">
                  <Button
                    btnValue="SERVICE PROVIDER"
                    className="h-[60px] w-[200px] bg-white hover:text-white  text-base"
                  />
                </Link>
              </div>
            </div>
            <div
              className={`flex justify-center items-center h-[35px] w-[150px]`}
            >
              <Link
                href="/"
                className="text-base font-extrabold hover:scale-110"
              >
                <button className="flex justify-center items-center">
                  <span className="mr-1">
                    <BsArrowLeftCircle />
                  </span>
                  Back Home
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
