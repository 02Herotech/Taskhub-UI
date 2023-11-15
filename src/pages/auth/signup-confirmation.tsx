import React from 'react'
import Link from 'next/link'
import logoImg from '../../../public/logo.png'
import Image from 'next/image'
import welcome from '../../../public/welcome.svg'




const signupConfirmation = () => {
    return (

        <div className={`m-auto`}>
            <div className={`w-full p-10 flex drop-shadow-md bg-white h-[80px]`}>
                <Link href='/' className={`flex space-x-3 items-center`}>
                    <Image src={logoImg} width={61} height={55} alt='' className={`mt-[-10px]`} />
                    <h4 className={`text-lg font-extrabold `}>TaskHub</h4>
                </Link>
            </div>
            <div className={`space-y-3 flex h-full flex-col items-center justify-center m-auto py-20`}>
                <div className={`w-[166px] h-[166px]`}>
                    <Image src={welcome} width={166} height={166} alt='' />
                </div>
                <p>Before we get started, please use the link in the mail sent to you to verify you email</p>
                <Link href='https://mail.google.com/mail/u/0/#inbox' target='_blank' className={`text-purpleBase  underline hover:text-md`}>Link to my mail</Link >

            </div>
        </div>

    )
}

export default signupConfirmation