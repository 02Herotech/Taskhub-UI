import React from 'react'
import Link from "next/link";
import { useRouter } from 'next/router';
import Image from 'next/image'
import logoImg from '../../public/logo.png'
import { Button } from '../buttons/Button';

import { SlArrowDown } from 'react-icons/sl'

const Nav = () => {
  const router = useRouter();
  const isLinkActive = (linkPath: string) => {
    return router.pathname === linkPath;
  };
  return (
    <div className={`p-1 flex items-center justify-around h-[100px] drop-shadow-md fixed z-50 w-full bg-white mt-[-100px]  font-extrabold`}>
      <div>
        <Link href='/' className={`flex space-x-3 items-center`}>
          <Image src={logoImg} width={61} height={55} alt='' className={`mt-[-10px]`} />
          <h4 className={`text-lg font-extrabold `}>TaskHub</h4>
        </Link>
      </div>

      <div className="flex  space-x-12 items-center font-extrabold text-sm text-black  ">
        <Link href="/" className={` hover:text-grey4 ${isLinkActive("/") ? "text-[22px]" : ""}`} >
          Home
        </Link>
        <Link href='/about' className={`hover:text-grey4 ${isLinkActive("/about") ? "text-[22px]" : ""}`}  >
          About Us
        </Link>
        <Link href="/services" className={` hover:text-grey4 ${isLinkActive("/services") ? "text-[22px]" : ""}`} >
          Services
        </Link>
        <Link href="/faq" className={` hover:text-grey4 ${isLinkActive("/faq") ? "text-[22px]" : ""}`} >
          FAQs
        </Link>
        <div>   <Link href="/help" className={`hover:text-grey4 ${isLinkActive("/help ") ? "text-[22px] " : ""}`} >
          Contact Us
        </Link>
          <SlArrowDown className={`inline-block ml-3`} />
        </div>

      </div>

      <div className={`flex space-x-3 items-center`}>
        <Link href='/auth'>
          <Button
            btnValue='Sign Up'
            className='w-[95px] px-3 bg-purpleBase text-white  text-base font-extralight h-[45px] hover:bg-purple5'
          />
        </Link>
        <Link href='/auth/login'>
          <Button
            btnValue='Log in'
            className='bg-white border-[1px] w-[95px] h-[45px]  px-4 border-purpleBase text-black  hover:text-white font-extralight text-base hover:bg-purple5'
          />
        </Link>
      </div>
    </div>

  )
}





export default Nav