/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react'
import { montsearrat } from '@/styles/font'
import Link from 'next/link'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { BackButton } from '../../../components/buttons/Button'



const authResetPassword = () => {
    const [email, setEmail] = useState('')


    const handleEmailChange = (event: { target: { value: React.SetStateAction<string> } }) => {
        setEmail(event.target.value)
    }






    const onSubmit = (event: { preventDefault: () => void }) => {
        event.preventDefault();
        console.log(email)

    }



    return (
        <div className="flex m-auto">
            <div className={`${montsearrat.className} w-[550px] flex h-full flex-col m-auto p-20 `}>
                <div className={`justify-start my-5 space-y-3  text-center px-2`}>
                    <h1 className={`text-md font-extrabold`}>Forgot your password?</h1>
                    <h2 className={`text-base`}>
                        Enter your email below and we will send you instructions to reset your password.
                    </h2>
                </div>
                <div className='p-2'>
                    <form action="" onSubmit={onSubmit} className={`space-y-5 `}>
                        <div className={`flex flex-col`}>
                            <label htmlFor="email" className={`font-bold text-[16px] px-2 my-3`}>
                                Email <span className={`text-red`}>*</span>
                            </label>
                            <input type="email" placeholder='Enter your email-address' id='email' name='email' className={`border-medium border-[1px] text-base text-black font-bold py-3 px-5 rounded-xl w-full`} value={email} onChange={handleEmailChange} required
                            />
                        </div>



                        <div className={`flex justify-center items-center`}>
                            <button
                                type="submit"
                                className="w-4/6 bg-purple text-white py-2 px-4 rounded-md hover:bg-purpleLight"
                            >
                                Reset Password
                            </button>
                        </div>

                    </form>
                </div>
                <div className={`flex justify-around space-x-1 mt-5`}>
                    <h5>Remember your password? </h5>
                    <Link href='/auth/authLogin' className={`text-purple hover:text-[17px] underline`}>Log in</Link>
                </div>

            </div >
        </div >
    )
}

export default authResetPassword

