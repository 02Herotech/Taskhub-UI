import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logoImg from '../../../public/logo.png'
import thumbsUp from '../../../public/thumbsUp.svg'




const ResetPasswordConfirmation = () => {
    return (
        <div className={`m-auto `}>
            <div className={`w-full p-10 flex drop-shadow-md bg-white h-[80px]`}>
                <Link href='/' className={`flex space-x-3 items-center`}>
                    <Image src={logoImg} width={61} height={55} alt='' />
                    <h4 className={`text-lg font-extrabold `}>TaskHub</h4>
                </Link>
            </div>

            <div className={`space-y-3 flex h-full flex-col items-center justify-center m-auto p-20`}>
                <div className={`w-[160px] h-[160px]`}>
                    <Image src={thumbsUp} width={157} height={157} alt='' />
                </div>
                <h1 className={`font-bold text-xl`}>Password Saved</h1>
                <Link href='/auth/login' target='_self' className={`text-white bg-purpleBase hover:bg-purple5 p-4 rounded-xl`}>Proceed to Log in</Link >
            </div>
        </div>

    )
}

export default ResetPasswordConfirmation