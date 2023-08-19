import React from 'react'
import Link from "next/link";
import Image from 'next/image'
import logoImg from '../../public/logo.png'
import { Button } from '../buttons/Button';
import { FaArrowDown } from 'react-icons/fa'

const Nav = () => {
  return (
    <div className={`p-1 flex items-center justify-around h-[100px]`}>
      <Link href='/'>
        <Image src={logoImg} width={162} height={162} alt='' />
      </Link>

      <div className="flex  space-x-12 items-center ">
        <Link href="/" className="text-sm font-bold text-black hover:text-medium" >
          Home
        </Link>
        <Link href='/about' className="text-sm font-bold text-black hover:text-medium" >
          About Us
        </Link>
        <Link href="/services" className="text-sm font-bold text-black hover:text-medium" >
          Services
        </Link>
        <Link href="/faq" className="text-sm font-bold text-black hover:text-medium" >
          FAQs
        </Link>
        <Link href="/help" className="text-sm font-bold text-black hover:text-medium" >
          Help
        </Link>
      </div>

      <div className={`flex space-x-3 items-center`}>
        <Link href='#'>
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