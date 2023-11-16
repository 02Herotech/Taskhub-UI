import React from 'react'
import Link from 'next/link'
import logoImg from '../../../public/logo.png'
import Image from 'next/image'
import welcome from '../../../public/welcome.svg'




const SignupConfirmation = () => {
    return (

        <div className={`m-auto`}>
           <div className={`p-5 flex h-[80px] drop-shadow-md fixed z-50 w-full bg-white font-extrabold justify-center`}>
                <div className='w-[80em]'>
                    <Link href='/' className={`flex space-x-3 items-center`}>
                        <Image src={logoImg} width={50} height={40} alt='' className={`mt-[-10px]`} />
                        <h4 className={`text-sm font-extrabold `}>TaskHub</h4>
                    </Link>
                </div>
            </div>

            <div className={`flex h-full flex-col items-center justify-center min-h-screen pt-20`}>
                <div className={`w-[166px] h-[166px]`}>
                    <Image src={welcome} width={166} height={166} alt='' />
                </div>
                <p className='text-center mt-10'>Before we get started, please use the link <br /> in the mail sent to you to verify your email</p>
                {/* <Link href='https://mail.google.com/mail/u/0/#inbox' target='_blank' className={`text-purpleBase  underline hover:text-md`}>Link to my mail</Link > */}
            </div>
        </div>

    )
}

export default SignupConfirmation