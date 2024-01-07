/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Router from 'next/router'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import axios from "axios"


import logoImg from '../../../public/logo.png'
import thumbsUp from '../../../public/thumbsUp.svg'
import styles from '../../styles/animation.module.css'




interface FormState {
    newPassword: string;
    confirmNewPassword: string;
    error1: string;
    error2: string;
}



const ResetPassword: React.FC<FormState> = () => {

    const [formData, setFormData] = useState({
        newPassword: '',
        confirmNewPassword: '',
        error1: '',
        error2: '',
    });


    

    const [showNewPassword, setShowNewPassword] = useState(false)
    const [showConfirmNewPassword, setShowConfirmNewPassword] = useState(false);
    const [isSuccessful, setisSuccessful] = useState(false)
    const [t, setT] = useState("")
    const [isloading, setIsLoading] = useState(false)
    const [errorState, setErrorState] = useState('')
    



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
                    error1: 'Must be min. of 8 characters and contain at least one uppercase letter, one special character and one number',
                }));
            } else {
                // Clear the error message if the password matches the pattern or is empty
                setFormData((prevData) => ({
                    ...prevData,
                    error1: '',
                }));
            }
        }

        
        if (name === "confirmNewPassword") {
            if (value !== formData.newPassword) {
                setFormData((prevData) => ({
                    ...prevData,
                    error2: "Password should match",
                }));
            } else {
                // Clear the error message if the confirm password matches the password
                setFormData((prevData) => ({
                    ...prevData,
                    error2: "",
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


    useEffect(() => {
        const urlParams = window.location.search.split("=")[1];
        setT(urlParams)
    }, [])
    
    
    const onSubmit = async (event: { preventDefault: () => void }) => {
        event.preventDefault();
        
        console.log(t)
        setIsLoading(true)

            try {
                const password = formData.newPassword
                console.log(password)
                
                const response = await axios.post(
                    `http://54.198.113.229:8080/api/v1/user/reset-password?t=${(t)}`, 
                    {password});
                console.log(response)

                if (response.status = 200) {
                    setisSuccessful(true)
                }
            } catch (error: any) {
                console.error("Password Reset Error: ", error)
                setIsLoading(false)
                setErrorState(error.message)

            }
        
                
    }
    
    

    return (
        <div className={`m-auto `}>
            <div className={`p-5 flex h-[80px] drop-shadow-md fixed z-50 w-full bg-white font-extrabold justify-center`}>
                <div className='w-[80em]'>
                    <Link href='/' className={`flex space-x-3 items-center`}>
                        <Image src={logoImg} width={50} height={40} alt='' className={`mt-[-10px]`} />
                        <h4 className={`text-sm font-extrabold `}>TaskHub</h4>
                    </Link>
                </div>
            </div>

           
                <div className={` flex min-h-screen items-center justify-center flex-col m-auto pt-10`}>

                    { isSuccessful ?

                        <div className={`space-y-4 flex h-full flex-col items-center justify-center m-auto ${styles.animation}`}>
                            <div className={`w-[160px] h-[160px]`}>
                                <Image src={thumbsUp} width={157} height={157} alt='' />
                            </div>
                            <h1 className={`font-bold text-lg `}>Password Reset Successful</h1>
                            <Link href='/auth/login' target='_self' className={`text-white bg-purpleBase hover:bg-purple7 p-4 rounded-xl mt-10`}>Proceed to Log in</Link >
                        </div>
                        :
                        <div>

                            <div className={` flex items-center flex-col my-2 space-y-2 mx-auto text-center px-2  w-[400px]`}>
                                <h1 className={`text-xl font-extrabold`}>Password Reset</h1>
                                <h2>
                                    Enter new password
                                </h2>
                            </div>

                            <div className='py-2 w-[450px] mx-auto px-5'>
                                <form action="" onSubmit={onSubmit} className={`space-y-5 `}>
                                    <div className={`flex flex-col`}>
                                        <div className='flex justify-between items-end my-2'>
                                            <label htmlFor="newPassword" className={`font-bold text-[16px]`}>
                                                New Password <span className={`text-red10`}>*</span>
                                            </label>

                                            <p className={`text-red10 text-[10px] w-[260px] h-[45px] text-justify`}>{formData.error1}</p>
                                        </div>

                                        <div className={`relative`}>
                                            <input type={showNewPassword ? 'text' : 'password'} id='newPassword' name='newPassword' placeholder='Enter your password' 
                                            className={`border-medium border-[1px] text-base text-black font-bold py-3 px-5 rounded-xl w-full`} 
                                            value={formData.newPassword} 
                                            onChange={handleChange} 
                                            required 
                                            maxLength={20}
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

                                    
                                        <div className='flex justify-between items-end my-2'>
                                            <label htmlFor="confirmNewPassword" className={`font-bold text-[16px]`}>
                                                Confirm Password <span className={`text-red10`}>*</span>
                                            </label>

                                            <p className={`text-red10 text-[10px] w-[240px] h-[20px] text-justify`}>{formData.error2}</p>
                                        </div>
                                        <div className={`relative`}>
                                            <input type={showConfirmNewPassword ? 'text' : 'password'} id='confirmNewPassword' name='confirmNewPassword' placeholder='Enter your password' 
                                            className={`border-medium border-[1px] text-base text-black font-bold py-3 px-5 rounded-xl w-full`} 
                                            value={formData.confirmNewPassword} 
                                            onChange={handleChange} 
                                            required
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
                                    </div>

                                    

                                    <div className={`flex justify-center items-center text-sm`}>
                                        <button
                                            type="submit"
                                            className={`w-full bg-purpleBase text-white py-2 px-4 rounded-md hover:bg-purple5  disabled:opacity-50`}
                                            disabled={!isAllFieldsFilled() || (formData.newPassword !== formData.confirmNewPassword) || isloading}
                                            // disabled={!isAllFieldsFilled() || (formData.newPassword !== formData.confirmNewPassword)}
                                        >
                                            {!isloading ? "Reset" : "Resetting..."}
                                            {/* Reset */}
                                        </button>
                                    </div>

                                </form>
                            </div>
                            
                            <div className='text-red5 mt-2 flex justify-center items-center'>{errorState}</div>
                            
                        </div>  
                        
                        
                    
                     }   
                                                    
                </div >

             
            
        </div >
    )
}

export default ResetPassword

