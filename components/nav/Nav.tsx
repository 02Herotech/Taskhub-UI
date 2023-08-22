import React from 'react'
import Link from "next/link";
import { useRouter } from 'next/router';
import Image from 'next/image'
import logoImg from '../../public/logo.png'
import { Button } from '../buttons/Button';
import { FaArrowDown } from 'react-icons/fa'

const Nav = () => {
  const router = useRouter();
  const isLinkActive = (linkPath: string) => {
    return router.pathname === linkPath;
  };
  return (
    <div className={`p-1 flex items-center justify-around h-[100px]`}>
      <Link href='/'>
        <Image src={logoImg} width={162} height={162} alt='' />
      </Link>

      <div className="flex  space-x-12 items-center ">
        <Link href="/" className={`text-sm font-bold text-black hover:text-medium ${isLinkActive("/") ? "text-[23px]" : ""}`} >
          Home
        </Link>
        <Link href='/about' className={`text-sm font-bold text-black hover:text-medium ${isLinkActive("/about") ? "text-[23px]" : ""}`}  >
          About Us
        </Link>
        <Link href="/services" className={`text-sm font-bold text-black hover:text-medium ${isLinkActive("/services") ? "text-[23px]" : ""}`} >
          Services
        </Link>
        <Link href="/faq" className={`text-sm font-bold text-black hover:text-medium ${isLinkActive("/faq") ? "text-[23px]" : ""}`} >
          FAQs
        </Link>
        <Link href="/help" className={`text-sm font-bold text-black hover:text-medium ${isLinkActive("/help ") ? "text-[23px] " : ""}`} >
          Help
        </Link>
      </div>

      <div className={`flex space-x-3 items-center`}>
        <Link href='/auth'>
          <Button
            btnValue='Sign Up'
            className='w-[110px] text-white p-2'
          />
        </Link>
        <Link href='#'>
          <Button
            btnValue='Log in'
            className='bg-transparent border-[1px] w-[110px] p-2 border-purple text-black  hover:text-white'
          />
        </Link>
      </div>
    </div>

  )
}





export default Nav