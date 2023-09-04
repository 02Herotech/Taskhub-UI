import React from 'react'
import { poppins, revalia } from '@/styles/font'
import Link from 'next/link'
import Image from 'next/image'
import thumbsUp from '../../../public/thumbsUp.svg'




const authResetPasswordConfirmation = () => {
    return (
        <div className="flex m-auto h-screen">
            <div className={`${poppins.className} space-y-3 flex h-full flex-col items-center justify-center m-auto p-20`}>
                <div className={`w-[160px] h-[160px]`}>
                    <Image src={thumbsUp} width={157} height={157} alt='' />
                </div>
                <h1 className={`font-bold text-xl`}>Password Saved</h1>
                <Link href='/auth/authLogin' target='_self' className={`text-white bg-purple hover:bg-purpleLight p-4 rounded-xl`}>Proceed to Log in</Link >
            </div>
        </div>

    )
}

export default authResetPasswordConfirmation