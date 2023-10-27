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
    <div className={`drop-shadow-md fixed z-50 w-full bg-white`}>
      <div className={`px-2 py-3 flex items-center justify-around font-extrabold max-w-7xl mx-auto`}>
        <div>
          <Link href='/' className={`flex space-x-3 items-center`}>
            <Image src={logoImg} width={50} height={40} alt='' className={`mt-[-10px]`} />
            <h4 className={`text-sm font-extrabold `}>TaskHub</h4>
          </Link>
        </div>

        <div className="flex space-x-12 items-center font-extrabold text-sm text-black">
          <Link href="/" className={`p-2 hover:text-purpleBasetext-purpleBase text-[13px] ${isLinkActive("/") ? "text-purpleBase" : ""}`} >
            Home
          </Link>
          <Link href='/about' className={`hover:text-purpleBase text-[13px] ${isLinkActive("/about") ? "text-purpleBase" : ""}`}  >
            About Us
          </Link>
          <Link href="/services" className={` hover:text-purpleBase text-[13px] ${isLinkActive("/services") ? "text-purpleBase" : ""}`} >
            Services
          </Link>
          <Link href="/faq" className={`hover:text-purpleBase text-[13px] ${isLinkActive("/faq") ? "text-purpleBase" : ""}`} >
            FAQs
          </Link>
          <div>   <Link href="/help" className={`hover:text-purpleBase text-[13px] ${isLinkActive("/help") ? "text-purpleBase" : ""}`} >
            Contact Us
          </Link>
            <SlArrowDown className={`inline-block ml-1 text-[10px]`} />
          </div>

        </div>

        <div className={`flex space-x-3 items-center`}>
          <Link href='/auth'>
            <Button
              btnValue='Sign Up'
              className='w-[95px] px-3 bg-purpleBase text-white  text-base font-extralight h-[45px] hover:bg-purple7'
            />
          </Link>
          <Link href='/auth/login'>
            <Button
              btnValue='Log in'
              className='bg-white border-[1px] w-[95px] h-[45px]  px-4 border-purpleBase text-black  hover:text-white font-extralight text-base hover:bg-purple7'
            />
          </Link>
        </div>
      </div>
    </div>

  )
}





export default Nav