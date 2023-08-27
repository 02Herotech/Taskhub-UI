/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react'
import { montsearrat } from '@/styles/font'
import Link from 'next/link'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { BackButton } from '../../../components/buttons/Button'

interface FormState {
    email: string;
    password: string;
    rememberMe: boolean;
    error: string;
}


const authLogin: React.FC<FormState> = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        rememberMe: false,
        error: '',
    });
    const [showPassword, setShowPassword] = useState(false)


    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,

        }));
    };

    const isAllFieldsFilled = () => {
        const requiredFields: (keyof FormState)[] = ['email', 'password'];
        return requiredFields.every(field => formData[field] !== '') && formData.rememberMe;
    }



    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };


    const onSubmit = (event: { preventDefault: () => void }) => {
        event.preventDefault();

    }




    return (
        <div className="flex m-auto">
            <div className={`${montsearrat.className} w-[550px] flex h-full flex-col m-auto p-20 `}>
                <div className={`font-extrabold justify-start my-5  px-2`}>
                    <h1 className={`text-md`}>Welcome Back,</h1>
                    <h2 className={`text-lg`}>Log <span className={`text-purple`}>In</span></h2>
                </div>
                <div className='p-2'>
                    <form action="" onSubmit={onSubmit} className={`space-y-5     py-5`}>
                        <div className={`flex flex-col `}>
                            <label htmlFor="email" className={`font-bold text-[16px] px-2 my-1`}>
                                Email <span className={`text-red`}>*</span>
                            </label>
                            <input type="email" placeholder='Enter your email-address' id='email' name='email' className={`border-medium border-[1px] text-base text-black font-bold py-3 px-5 rounded-xl w-full`} value={formData.email} onChange={handleChange} required
                            />
                        </div>

                        <div className={`flex flex-col`}>
                            <label htmlFor="password" className={`font-bold text-[16px] px-2 my-1`}>
                                Password <span className={`text-red`}>*</span>
                            </label>
                            <div className={`relative`}>
                                <input type={showPassword ? 'text' : 'password'} id='password' name='password' placeholder='Enter your password' className={`border-medium border-[1px] text-base text-black font-bold py-3 px-5 rounded-xl w-full`} value={formData.password} onChange={handleChange} required
                                />
                                <button
                                    type="button"
                                    onClick={togglePasswordVisibility}
                                    className="absolute inset-y-0 right-[0rem] pr-3 flex items-center focus:outline-none"
                                >
                                    {showPassword ? (
                                        <AiOutlineEye className="h-5 w-5 text-black" />
                                    ) : (
                                        <AiOutlineEyeInvisible className="h-5 w-5 text-black" />
                                    )}
                                </button>
                            </div>
                        </div>
                        <div className={`flex justify-between`}>
                            <div className={`space-x-2 px-2 flex`}>
                                <input onChange={handleChange} type="checkbox" name="rememberMe" id="rememberMe" required />
                                <label htmlFor="rememberMe" className={`font-normal text-base`}>Remember Me</label>
                            </div>

                            <div>
                                <Link href='/auth/authForgetPassword' className={`text-base hover:underline hover:text-purple`}>Forget Password?</Link>

                            </div>
                        </div>

                        <div className={`flex justify-center items-center`}>
                            <button
                                type="submit"
                                className={`w-4/6 bg-purple text-white py-2 px-4 rounded-md hover:bg-purpleLight  ${isAllFieldsFilled() ? '' : 'cursor-not-allowed opacity-50'}`}
                                disabled={!isAllFieldsFilled()}
                            >
                                Log In
                            </button>
                        </div>

                    </form>
                    <div className={`flex justify-around space-x-1 mt-5`}>
                        <h5>Don't have an account before? </h5>
                        <Link href='/auth' className={`text-purple hover:text-[17px] underline`}>Sign Up</Link>
                    </div>
                </div>
                <div className={`flex justify-center  items-center mt-[-20px]`}>
                    <BackButton btnLink='/auth' btnValue='Go back' />
                </div>
            </div >
        </div >
    )
}

export default authLogin
