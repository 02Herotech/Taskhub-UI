import React from 'react'
import { montsearrat } from '@/styles/font'
import Link from 'next/link'




const authSignupConfirmation = () => {
    return (

        <div className="flex m-auto h-screen">
            <div className={`${montsearrat.className} space-y-3 flex h-full flex-col items-center justify-center m-auto p-20`}>
                <h1 className={`font-bold`}>Welcome!</h1>
                <p>Before we get started, Please Kindly confirm email sent to you.</p>
                <Link href='https://mail.google.com/mail/u/0/#inbox' target='_blank' className={`text-purple  underline hover:text-md`}>Link to my mail</Link >

            </div>
        </div>

    )
}

export default authSignupConfirmation