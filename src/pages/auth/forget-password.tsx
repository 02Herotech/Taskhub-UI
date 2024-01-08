import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import axios from "axios";


import logoImg from '../../../public/logo.png'
import padlock from '../../../public/padlock.svg'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { BackButton } from '../../../components/buttons/Button'
import success from '../../../public/success.svg'
import styles from '../../styles/animation.module.css'





const ForgetPassword = () => {
    const [email, setEmail] = useState<string>('');
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccessful, setIsSuccessful] = useState(false);
    const [error, setError] = useState("");


    const handleEmailChange = (event: { target: { value: React.SetStateAction<string> } }) => {
        setEmail(event.target.value)
    }

    const isAllFieldsFilled = () => {
        const requiredField = ['email'];
        return requiredField.every(() => email !== '');
    }

    const onSubmit = async (event: { preventDefault: () => void }) => {
        event.preventDefault();
        setIsLoading(true);
        
        try {
            const response = await axios.post("https://test.jacinthsolutions.com.au/api/v1/user/forgot-password", {email});
            console.log(response);
            console.log(response.status);

            if (response.status == 200) {
                setIsSuccessful(true)
                setIsLoading(false)
            }
   
        } catch (error:any) {
            setIsLoading(false)
            setError(error.response.data.message)
            console.error("Error sending link:", error)            
        
        }
        
        console.log(email)
    }



    return (
        <div className={`m-auto`} >
               <div className={`p-5 flex h-[80px] drop-shadow-md fixed z-50 w-full bg-white font-extrabold justify-center`}>
                <div className='w-[80em]'>
                    <Link href='/' className={`flex space-x-3 items-center`}>
                        <Image src={logoImg} width={50} height={40} alt='' className={`mt-[-10px]`} />
                        <h4 className={`text-sm font-extrabold `}>TaskHub</h4>
                    </Link>
                </div>
            </div>

    

            <div className={`flex min-h-screen  justify-center items-center flex-col m-auto pt-20 `}>

                { isSuccessful ?

                <div className={`flex flex-col items-center justify-center ${styles.animation}`}>
                    <div className={`w-[166px] h-[166px]`}>
                        <Image src={success} width={166} height={166} alt='' />
                    </div>
                    <p className="text-center mt-10">Kindly use the link sent to your email to reset your password</p>
                </div>

                :

                <div>  
                    <div className='flex items-center justify-center'>
                    <Image src={padlock} width={50} alt='' />
                    </div>

                    <div className={`justify-start my-5 space-y-3  text-center px-2`}>
                        <h1 className={`text-xl font-extrabold`}>Forgot your password?</h1>
                        <h2 className={`text-base w-[350px]`}>
                            Enter your email address used to sign up
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
                                className={`w-full bg-purpleBase text-white py-2 px-4 rounded-md hover:bg-purple5 disabled:opacity-50`}
                                disabled={!isAllFieldsFilled() || isLoading}
                            >
                                {!isLoading ?  "Send Reset Link" : "Sending..."}
                            </button>
                        </div>
                    </form>
                </div>
                }

                {error ? 
                    <div className='text-red4 text-[13px] text-center h-[25px] mt-1'>
                        <p>{error}</p>
                    </div>
                : ""} 

                <div className={`flex justify-around items-center font-bold space-x-1 mt-5 text-base w-[150px] h-[30px] `}>
                    <Link href='/auth/login' className={`text-purpleBase hover:text-[16px] hover:underline`}>Back to Log in</Link>
                </div>
            </div >
        </div >
    )
}

export default ForgetPassword

