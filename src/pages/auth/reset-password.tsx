/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Router from 'next/router'
import logoImg from '../../../public/logo.png'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { BackButton } from '../../../components/buttons/Button'

interface FormState {
    newPassword: string;
    confirmNewPassword: string;
    error: string;
}



const resetPassword: React.FC<FormState> = () => {
    const [formData, setFormData] = useState({
        newPassword: '',
        confirmNewPassword: '',
        error: '',
    });
    const [showNewPassword, setShowNewPassword] = useState(false)
    const [showConfirmNewPassword, setShowConfirmNewPassword] = useState(false);




    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,

        }));

        if (name === 'newPassword') {
            const passwordPattern = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
            if (value && !passwordPattern.test(value)) {
                setFormData((prevData) => ({
                    ...prevData,
                    error: 'Password should be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one special character, and one number.',
                }));
            } else {
                // Clear the error message if the password matches the pattern or is empty
                setFormData((prevData) => ({
                    ...prevData,
                    error: '',
                }));
            }
        }
    };


    const isAllFieldsFilled = () => {
        const requiredFields: (keyof FormState)[] = ['newPassword', 'confirmNewPassword'];
        return requiredFields.every(field => formData[field] !== '')
    }



    const toggleNewPasswordVisibility = () => {
        setShowNewPassword(!showNewPassword);
    };
    const toggleConfirmNewPasswordVisibility = () => {
        setShowConfirmNewPassword(!showConfirmNewPassword);
    };



    const onSubmit = (event: { preventDefault: () => void }) => {
        event.preventDefault();
        if (formData.newPassword !== formData.confirmNewPassword) {
            setFormData((prevData) => ({
                ...prevData,
                error: 'Password should be same',
            }));
            return;
        } else {
            Router.push('/auth/authLogin')
        }
    }






    return (
        <div className={`m-auto `}>
            <div className={`w-full p-10 flex drop-shadow-md bg-white h-[80px]`}>
                <Link href='/' className={`flex space-x-3 items-center`}>
                    <Image src={logoImg} width={61} height={55} alt='' className={`mt-[-10px]`} />
                    <h4 className={`text-lg font-extrabold `}>TaskHub</h4>
                </Link>
            </div>

            <div className={` flex h-full flex-col m-auto mt-10`}>
                <div className={` flex items-center flex-col my-5 space-y-3 mx-auto text-center px-2  w-[400px]  `}>
                    <h1 className={`text-xl font-extrabold`}>Password Reset</h1>
                    <h2 className={`text-base`}>
                        Enter your new password and  your password we be reset.
                    </h2>
                </div>

                <div className='p-2 w-[450px] mx-auto px-5 '>
                    <form action="" onSubmit={onSubmit} className={`space-y-5 `}>
                        <div className={`flex flex-col`}>
                            <label htmlFor="newPassword" className={`font-bold text-[16px]  my-1`}>
                                New Password <span className={`text-red10`}>*</span>
                            </label>
                            <div className={`relative`}>
                                <input type={showNewPassword ? 'text' : 'password'} id='newPassword' name='newPassword' placeholder='Enter your password' className={`border-medium border-[1px] text-base text-black font-bold py-3 px-5 rounded-xl w-full`} value={formData.newPassword} onChange={handleChange} required maxLength={15}
                                />
                                <button
                                    type="button"
                                    onClick={toggleNewPasswordVisibility}
                                    className="absolute inset-y-0 right-[0rem] pr-3 flex items-center focus:outline-none"
                                >
                                    {showNewPassword ? (
                                        <AiOutlineEye className="h-5 w-5 text-black" />
                                    ) : (
                                        <AiOutlineEyeInvisible className="h-5 w-5 text-black" />
                                    )}
                                </button>
                            </div>
                        </div>

                        <div className={`flex flex-col`}>
                            <label htmlFor="confirmNewPassword" className={`font-bold text-[16px] my-1`}>
                                Confirm Password <span className={`text-red10`}>*</span>
                            </label>
                            <div className={`relative`}>
                                <input type={showConfirmNewPassword ? 'text' : 'password'} id='confirmNewPassword' name='confirmNewPassword' placeholder='Enter your password' className={`border-medium border-[1px] text-base text-black font-bold py-3 px-5 rounded-xl w-full`} value={formData.confirmNewPassword} onChange={handleChange} required
                                />
                                <button
                                    type="button"
                                    onClick={toggleConfirmNewPasswordVisibility}
                                    className="absolute inset-y-0 right-[0rem] pr-3 flex items-center focus:outline-none"
                                >
                                    {showConfirmNewPassword ? (
                                        <AiOutlineEye className="h-5 w-5 text-black" />
                                    ) : (
                                        <AiOutlineEyeInvisible className="h-5 w-5 text-black" />
                                    )}
                                </button>
                            </div>
                            <p className={`text-red10 text-[10px] p-2`}>{formData.error}</p>

                        </div>


                        <div className={`flex justify-center items-center text-sm`}>
                            <button
                                type="submit"
                                className={`w-full bg-purpleBase text-white py-2 px-4 rounded-md hover:bg-purple5  ${isAllFieldsFilled() ? '' : 'cursor-not-allowed opacity-50'}`}
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

export default resetPassword

