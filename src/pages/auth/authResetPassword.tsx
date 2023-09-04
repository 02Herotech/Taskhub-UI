/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react'
import { poppins, revalia } from '@/styles/font'
import Link from 'next/link'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { BackButton } from '../../../components/buttons/Button'

interface FormState {
    newPassword: string;
    confirmNewPassword: string;
    error: string;
}



const authResetPassword: React.FC<FormState> = () => {
    const [formData, setFormData] = useState({
        newPassword: '',
        confirmNewPassword: '',
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
        const requiredFields: (keyof FormState)[] = ['newPassword', 'confirmNewPassword'];
        return requiredFields.every(field => formData[field] !== '')
    }



    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };


    const onSubmit = (event: { preventDefault: () => void }) => {
        event.preventDefault();
        if (formData.newPassword !== formData.confirmNewPassword) {
            setFormData((prevData) => ({
                ...prevData,
                error: 'Password should be same',
            }));
            return;
        }

    }



    return (
        <div className="flex m-auto">
            <div className={`${poppins.className} w-[550px] flex h-full flex-col m-auto p-20 `}>
                <div className={`justify-start my-5 space-y-3  text-center px-2`}>
                    <h1 className={`text-md font-extrabold`}>Password reset</h1>
                    <h2 className={`text-base`}>Enter your new password and  your password
                        we be reset.</h2>
                </div>
                <div className='p-2'>
                    <form action="" onSubmit={onSubmit} className={`space-y-5 `}>
                        <div className={`flex flex-col`}>
                            <label htmlFor="password" className={`font-bold text-[16px] px-2 my-1`}>
                                New Password <span className={`text-red`}>*</span>
                            </label>
                            <div className={`relative`}>
                                <input type={showPassword ? 'text' : 'password'} id='password' name='password' placeholder='Enter your password' className={`border-medium border-[1px] text-base text-black font-bold py-3 px-5 rounded-xl w-full`} value={formData.newPassword} onChange={handleChange} required
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

                        <div className={`flex flex-col`}>
                            <label htmlFor="password" className={`font-bold text-[16px] px-2 my-1`}>
                                Confirm Password <span className={`text-red`}>*</span>
                            </label>
                            <div className={`relative`}>
                                <input type={showPassword ? 'text' : 'password'} id='password' name='password' placeholder='Enter your password' className={`border-medium border-[1px] text-base text-black font-bold py-3 px-5 rounded-xl w-full`} value={formData.confirmNewPassword} onChange={handleChange} required
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
                            <p className={`text-red p-2`}>{formData.error}</p>

                        </div>


                        <div className={`flex justify-center items-center text-sm`}>
                            <button
                                type="submit"
                                className={`w-4/6 bg-purple text-white py-2 px-4 rounded-md hover:bg-purpleLight  ${isAllFieldsFilled() ? '' : 'cursor-not-allowed opacity-50'}`}
                                disabled={!isAllFieldsFilled()}
                            >
                                Save Password
                            </button>
                        </div>

                    </form>
                </div>
            </div >
        </div >
    )
}

export default authResetPassword

