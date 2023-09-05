/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react'
import { poppins, revalia } from '@/styles/font'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../../../public/logo.png'
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
        return requiredFields.every(field => formData[field] !== '');
    }



    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };


    const onSubmit = (event: { preventDefault: () => void }) => {
        event.preventDefault();

    }




    return (
        <div className={` w-full ${poppins.className} text-black`}>
            <div className={`w-full p-10 flex drop-shadow-md bg-white h-[80px]`}>
                <Link href='/' className={`flex space-x-3 items-center`}>
                    <Image src={logo} width={61} height={55} alt='' className={`mt-[-10px]`} />
                    <h4 className={`text-lg font-extrabold `}>TaskHub</h4>
                </Link>
            </div>
            <div className={` flex font-bold h-full flex-col m-auto py-12  justify-center items-center `}>
                <div className={` p-3 space-y-5 text-center mb-2`}>
                    <div className={`text-[30px] font-bold w-full  `}>
                        <h1 className={``}>Login into your TaskHub account</h1>
                    </div>

                    <div className={`flex justify-around font-[600] w-[300px]  mx-auto`}>
                        <h5>Don't have an account?</h5>
                        <Link href='/auth' className={`text-purpleBase hover:text-[17px] `}>Create one</Link>
                    </div>
                </div>
                <div className='w-[450px]'>
                    <form action="" onSubmit={onSubmit} className={`space-y-5  p-5`}>
                        <div className={`flex flex-col `}>
                            <label htmlFor="email" className={`font-bold text-[16px] px-2 my-1`}>
                                Email <span className={`text-red10`}>*</span>
                            </label>
                            <input type="email" placeholder='Enter your email-address' id='email' name='email' className={`border-medium border-[1px] text-base text-black font-bold py-3 px-5 rounded-xl w-full`} value={formData.email} onChange={handleChange} required
                            />
                        </div>

                        <div className={`flex flex-col`}>
                            <label htmlFor="password" className={`font-bold text-[16px] px-2 my-1`}>
                                Password <span className={`text-red10`}>*</span>
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
                        <div className={`flex justify-around font-[600] w-[300px] text-base mx-auto`}>
                            <h5>Forgot your Password?</h5>
                            <Link href='/auth/authForgetPassword' className={`text-purpleBase hover:text-[16px] `}>Reset here</Link>
                        </div>

                        <div className={`flex justify-center items-center`}>
                            <button
                                type="submit"
                                className={`w-4/6 bg-purpleBase text-white py-2 px-4 rounded-md hover:bg-purple5 text-sm ${isAllFieldsFilled() ? '' : 'cursor-not-allowed opacity-50'}`}
                                disabled={!isAllFieldsFilled()}
                            >
                                Log In
                            </button>
                        </div>
                    </form>
                </div>
            </div >
        </div >
    )
}

export default authLogin

