import React from "react";
import Link from "next/link";
import Image from "next/image";
import logoImg from "../../../public/newlogo.png";
import thumbsUp from "../../../public/thumbsUp.svg";

const ResetPasswordConfirmation = () => {
  return (
    <div className={`m-auto `}>
      <div
        className={`p-5 flex h-[80px] drop-shadow-md fixed z-50 w-full bg-white font-extrabold justify-center`}
      >
        <div className="w-[80em] flex justify-start">
          <Link href="/" className={`flex p-1 items-center`}>
            <Image src={logoImg} width={120} alt="" />
          </Link>
        </div>
      </div>

      <div
        className={`space-y-3 flex h-full flex-col items-center justify-center m-auto min-h-screen p-20`}
      >
        <div className={`w-[160px] h-[160px] `}>
          <Image src={thumbsUp} width={157} height={157} alt="" />
        </div>
        <h1 className={`font-bold text-xl`}>Password reset successful!</h1>
        <Link
          href="/auth/login"
          target="_self"
          className={`text-white bg-purpleBase hover:bg-purpleHover p-4 rounded-xl`}
        >
          Proceed to Log in
        </Link>
      </div>
    </div>
  );
};

export default ResetPasswordConfirmation;
