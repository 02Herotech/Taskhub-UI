import React from 'react'
import Link from 'next/link'
import logoImg from '../../../public/logo.png'
import success from '../../../public/success.svg'
import Image from 'next/image'

const authSignupRegistered = () => {
    return (
        <div className={`m-auto`}>
            <div className={`w-full p-10 flex drop-shadow-md bg-white h-[80px]`}>
                <Link href='/' className={`flex space-x-3 items-center`}>
                    <Image src={logoImg} width={61} height={55} alt='' className={`mt-[-10px]`} />
                    <h4 className={`text-lg font-extrabold `}>TaskHub</h4>
                </Link>
            </div>
            <div className={`space-y-5 flex h-full flex-col items-center justify-center m-auto p-20`}>
                <div className={`w-[166px] h-[166px]`}>
                    <Image src={success} width={166} height={166} alt='' />
                </div>
                <h1 className={`font-bold`}>CONGRATULATIONS!</h1>
                <p className={`w-[492px] text-center`}>Your email has been verified successfully. <br />Please Kindly proceed to</p>
                <Link href='/auth/authLogin' target='_blank' className={`text-purpleBase  underline hover:text-md`}>Log in</Link >
            </div>
        </div>
    )
}

export default authSignupRegistered 
