import React, { useRef, useState } from 'react'
import Link from "next/link";
import { useRouter } from 'next/router';
import Image from 'next/image'
import logoImg from '../../public/logo.png'
import { Button } from '../buttons/Button';


import { SlArrowDown, SlArrowUp } from 'react-icons/sl'
// import styles from './Nav.module.css'

const Nav = () => {
  const router = useRouter();
  const isLinkActive = (linkPath: string) => {
    return router.pathname === linkPath;
  };

const [isOpen, setIsOpen] = useState(false);

// const contactRef = useRef;



  return (

    <div className='flex flex-col'>
      <div className={`drop-shadow-md z-50 w-full bg-white fixed top-0`}>
        
        <div className={`max-w-7xl mx-auto px-8 py-3 flex items-center justify-between font-extrabold`}>
          <div>
            <Link href='/' className={`flex space-x-3 items-center`}>
              <Image src={logoImg} width={50} height={40} alt='' className={`mt-[-10px]`} />
              <h4 className={`text-sm font-extrabold `}>TaskHub</h4>
            </Link>
          </div>

          <div className="flex space-x-12 items-center text-sm">
            <Link href="/" className={`p-2 hover:text-purpleBase text-[13px] ${isLinkActive("/") && "text-purpleBase"}`} >
              Home
            </Link>
            <Link href='/about' className={`p-2 hover:text-purpleBase text-[13px] ${isLinkActive("/about") && "text-purpleBase"}`}  >
              About Us
            </Link>
            <Link href="/services" className={`p-2 hover:text-purpleBase text-[13px] ${isLinkActive("/services") && "text-purpleBase"}`} >
              Services
            </Link>
            <Link href="/faq" className={`p-2 hover:text-purpleBase text-[13px] ${isLinkActive("/faq") && "text-purpleBase"}`} >
              FAQs
            </Link>

            <div className={`flex cursor-pointer`}
            // ref={contactRef}
            onClick={() => setIsOpen(!isOpen)}>
              <p className={`flex p-2 hover:text-purpleBase text-[13px]`}>
              Contact Us
              <span className='text-[10px] ml-1 mt-1'>{isOpen ? <SlArrowDown /> : <SlArrowUp /> }</span></p>
            </div>
            
          </div>

            

          <div className={`flex space-x-3 items-center`}>
            <Link href='/auth'>
              <Button
                btnValue='Sign Up'
                className='w-[95px] px-3 border-[2px] border-purpleBase bg-purpleBase text-white  text-base font-extralight h-[45px] hover:bg-purple7'
              />
            </Link>
            <Link href='/auth/login'>
              <Button
                btnValue='Log in'
                className='bg-white border-[2px] w-[95px] h-[45px]  px-4 border-purpleBase text-black  hover:text-white font-extralight text-base hover:bg-purple7'
              />
            </Link>
          </div>
        </div>
      </div>

      {/* {
        isOpen &&

        <div className='relative max-w-7xl mx-auto'>
        <div className=' aboslute top-[250px] left-[87px] w-[250px] text-[15px] bg-[#ead8d8] p-2 flex flex-col rounded-md items-center duration-1000'>
          <p className=''><b>Tel:</b> +6145000000</p>
          <p><b>Email:</b> privacy@taskhub.com</p>
        </div> 
      </div>

  
      } */}
      

    </div>
  )
}





export default Nav