/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import padlock from '../../../public/padlock.svg'
import logoImg from '../../../public/logo.png'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { BackButton } from '../../../components/buttons/Button'



const authResetPassword = () => {
    const [email, setEmail] = useState('')


    const handleEmailChange = (event: { target: { value: React.SetStateAction<string> } }) => {
        setEmail(event.target.value)
    }




    const isAllFieldsFilled = () => {
        const requiredField = ['email'];
        return requiredField.every(() => email !== '');
    }




    const onSubmit = (event: { preventDefault: () => void }) => {
        event.preventDefault();
        console.log(email)

    }



    return (
        <div className={`m-auto`} >
            <div className={`w-full p-10 flex drop-shadow-md bg-white h-[80px]`}>
                <Link href='/' className={`flex space-x-3 items-center`}>
                    <Image src={logoImg} width={61} height={55} alt='' className={`mt-[-10px]`} />
                    <h4 className={`text-lg font-extrabold `}>TaskHub</h4>
                </Link>
            </div>
            <div className={`  flex h-full items-center flex-col m-auto p-10 `}>
                <div>
                    <Image src={padlock} width={81} height={81} alt='' />
                </div>
                <div className={`justify-start my-5 space-y-3  text-center px-2`}>
                    <h1 className={`text-xl font-extrabold`}>Forgot your password?</h1>
                    <h2 className={`text-base w-[350px]`}>
                        Enter the email address you signed up with below and we'll send you a link to help reset your password.
                    </h2>
                </div>
                <form action="" onSubmit={onSubmit} className={`space-y-5 p-2 w-[400px]`}>
                    <div className={`flex flex-col mx-auto `}>
                        <label htmlFor="email" className={`font-bold text-[16px] my-3`}>
                            Email <span className={`text-red10`}>*</span>
                        </label>
                        <input type="email" placeholder='Enter your email-address' id='email' name='email' className={`border-medium border-[1px] text-base text-black font-bold py-3 px-5 rounded-xl w-full`} value={email} onChange={handleEmailChange} required
                        />
                    </div>

                    <div className={`flex justify-center items-centerw-[400px] text-sm`}>
                        <button
                            type="submit"
                            className={`w-full bg-purpleBase text-white py-2 px-4 rounded-md hover:bg-purple5 ${isAllFieldsFilled() ? '' : 'cursor-not-allowed opacity-50'}`}
                            disabled={!isAllFieldsFilled()}
                        >
                            Send reset link
                        </button>
                    </div>
                </form>
                <div className={`flex justify-around font-bold space-x-1 mt-5 text-base`}>
                    <Link href='/auth/authLogin' className={`text-purpleBase hover:text-[16px] hover:underline`}>Back to log in page.</Link>
                </div>
            </div >
        </div >
    )
}

export default authResetPassword

