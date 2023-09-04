import React from 'react'
import { poppins, revalia } from '@/styles/font'
import Link from 'next/link'
import success from '../../../public/success.svg'
import Image from 'next/image'

const authSignupRegistered = () => {
    return (
        <div className="flex m-auto h-screen">
            <div className={`${poppins.className} space-y-5 flex h-full flex-col items-center justify-center m-auto p-20`}>
                <div className={`w-[166px] h-[166px]`}>
                    <Image src={success} width={166} height={166} alt='' />
                </div>
                <h1 className={`font-bold`}>CONGRATULATIONS!</h1>
                <p className={`w-[492px] text-center`}>Your email has been verified successfully. <br />Please Kindly proceed to</p>
                <Link href='/auth/authLogin' target='_blank' className={`text-purple  underline hover:text-md`}>Log in</Link >
            </div>
        </div>
    )
}

export default authSignupRegistered 
