import React from 'react'
import Link from "next/link";
import Image from 'next/image'
import navstyles from './Nav.module.css'
import logoImg from '../../public/logo.svg'
import { FaArrowDown } from 'react-icons/fa'

const Nav = () => {
  return (
    <div className="container mx-auto">
      <div className={`m-1 p-3 flex items-center justify-center  w-[90%]  ${navstyles.navCont}`}>
        <div className={` mt-10 mr-10 ${navstyles["logoimg"]} `}>
          <Link href='/'>
            <Image src={logoImg} width={152} height={152} alt='' />

          </Link>
        </div>

        <div className="flex space-x-20 justify-center items-center text-center ">
          <Link href="/" className="text-sm font-bold w-[90px] text-black hover:text-medium" >
            Home
          </Link>
          <Link href='/about' className="text-sm w-[90px] font-bold text-black hover:text-medium" >
            About Us
          </Link>
          <Link href="/services" className="text-sm w-[90px] font-bold text-black hover:text-medium" >
            Services
          </Link>
          <Link href="/faq" className="text-sm w-[90px] font-bold text-black hover:text-medium" >
            FAQs
          </Link>
          <Link href="/help" className="text-sm w-[90px] font-bold text-black hover:text-medium" >
            Help
          </Link>
        </div>

      </div>
    </div>
  )
}





export default Nav