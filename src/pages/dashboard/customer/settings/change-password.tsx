import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { IoLockClosedOutline } from "react-icons/io5";
import { useSession } from 'next-auth/react';
import { LuUsers } from "react-icons/lu";
import { useState, useEffect } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import axios from 'axios';
import Image from 'next/image';
import { signOut } from "next-auth/react";


import CustomerDashboardLayout from '../../../../../components/customerdashboardLayout';
import success from '../../../../../public/success.svg'
import styles from '../../../../styles/animation.module.css'
import useCountdown from '@/hooks/useCountdown';





interface FormState {
    oldPassword: string;
    newPassword: string;
    confirmNewPassword: string;
    error1: string;
    error2: string;
}


const ChangePassword = () => {

    const [formData, setFormData] = useState({
        oldPassword: "",
        newPassword: "",
        confirmNewPassword: "",
        error1: "",
        error2: "",
   
      });

      const[isLoading, setIsLoading] = useState(false);
      const [isSuccessful, setisSuccessful] = useState(false);
      const [showOldPassword, setShowOldPassword] = useState(false);
      const [showNewPassword, setShowNewPassword] = useState(false);
      const [showConfirmNewPassword, setshowConfirmNewPassword] = useState(false);
      const [notEmptyError2, setNotEmptyError2] = useState(false);
      const [errorMessage, setErrorMessage] = useState('')
      
      
      const { secondsLeft, start } = useCountdown();
      
      const {data: session} = useSession()
      
      const router = useRouter();

      const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));

        if (name === "newPassword") {
            const passwordPattern =
                /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
            if (value && !passwordPattern.test(value)) {
                setFormData((prevData) => ({
                    ...prevData,
                    error1:
                        "Must be min. of 8 characters and contain at least one uppercase letter, one special character and one number",
                }));
            } else {
                // Clear the error message if the password matches the pattern or is empty
                setFormData((prevData) => ({
                    ...prevData,
                    error1: "",
                }));
            }
        }

        if (name === "confirmNewPassword") {
            if (value !== formData.newPassword) {
                setFormData((prevData) => ({
                    ...prevData,
                    error2: "New password must match",
                }));
                setNotEmptyError2(true)
            } else {
                // Clear the error message if the confirm password matches the password
                setFormData((prevData) => ({
                    ...prevData,
                    error2: "",
                }));
                setNotEmptyError2(false)
            }
        }

        // Update the form data with the new password or confirm password value
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };


    //   To check all required fields 
      const isAllFieldsFilled = () => {
        const requiredFields: (keyof FormState)[] = [
            "oldPassword", 
            "newPassword",
            "confirmNewPassword"
        ];
        return requiredFields.every((field) => formData[field] !== "");
      };

    //   To show and hide password 
      const toggleOldPasswordVisibility = () => {
        setShowOldPassword(!showOldPassword);
      };

      const toggleNewPasswordVisibility = () => {
        setShowNewPassword(!showNewPassword);
      };
      
      const toggleConfirmNewPasswordVisibility = () => {
        setshowConfirmNewPassword(!showConfirmNewPassword);
      };


    //   To reset form fields after submission 
      const resetForm = () => {
            setFormData({
                oldPassword: "",
                newPassword: "",
                confirmNewPassword: "",
                error1: "",
                error2: ""
            })
        }


    // To check active link 
    const isLinkActive = (linkPath: string) => {
      return router.pathname === linkPath;
    };

    
    // To submit formit 
    
    const handleSubmit = async (e: {preventDefault: () => void}) => {
        e.preventDefault()

        const oldPasswordValue = formData.oldPassword;
        const NewPasswordValue = formData.newPassword;
        const userToken = session?.user.accessToken
        console.log(formData)
        console.log("accessToken :", userToken)
        setIsLoading(true)

        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}change-password/init`, {
                oldPassword: oldPasswordValue,
                newPassword: NewPasswordValue
            },
            {
                headers: {
                    Authorization: `Bearer ${userToken}`,
                    'Content-Type': 'application/json',
                }
            })
            console.log("Password Change:", response)
            if (response.status === 200) {
                setisSuccessful(true)
                start(10)

                try {const logOutRes = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}auth/logout`)
                    console.log("Sign Out: ", logOutRes)
                    setTimeout(() => {
                        signOut({
                    redirect: false
                        })
                    }, 10000)
                } catch (error) {
                    console.error(error);
                } finally {
                    setTimeout(() => {
                       router.push('/auth/login')
                    }, 12000)
                }
            }
        } catch (error: any) {
                console.error("Change password error: ", error);
                setErrorMessage(error.response.data.message)
                
                setTimeout(() => {
                    setErrorMessage("");
                  }, 3000);
        } finally {
            setIsLoading(false)
        }
    }
   
    return (
        <CustomerDashboardLayout>
            <div className={`mt-16 flex flex-col justify-center items-start w-[800px]`}>
                
                <h1 className='text-lg font-extrabold'>Settings</h1>

                <div className={`flex justify-around items-start mt-20 w-[800px] mx-auto`}>

                    <div className='flex flex-col justify-center items-center bg-white shadow-lg w-[220px] py-5 text-[15px]'>
                        <div className='flex flex-col justify-center items-start'>
                            <Link  href="/dashboard/customer/settings/change-password" 
                                className={`flex items-center justify-center gap-[8px] hover:text-[#FE9B07] px-1 py-2 mx-1 my-2 ${isLinkActive("/dashboard/customer/settings/change-password") && "text-[#FE9B07]"}`}>
                                <IoLockClosedOutline />Change Password
                            </Link>
                            <Link  href="/dashboard/customer/settings/deactivate" 
                                className={`flex items-center justify-center gap-[8px] hover:text-[#FE9B07] px-1 py-2 mx-1 my-2 ${isLinkActive("/dashboard/customer/settings/deactivate") && "text-[#FE9B07]"}`}>
                                <LuUsers />Deactivate Account
                            </Link>
                        </div>
                    </div>

                    <div className='w-[430px] bg-white shadow-lg p-5'>

                        { isSuccessful ?

                            <div className={`flex flex-col items-center justify-center ${styles.animation}`}>
                                <div className={`w-[166px] h-[166px]`}>
                                    <Image src={success} width={166} height={166} alt='' />
                                </div>
                                <p className="text-center mt-10">Please check the email sent to you to confirm password change</p>
                                <p className="text-center my-10">You'll be logged out in {secondsLeft > 0 && `${secondsLeft}`} sec</p>
                            </div>   
                        :             
                            <div className=" ">
                                <h3 className={`font-extrabold`}>Change Password</h3>
                                
                                <form  className={` p-5`} onSubmit={handleSubmit}>

                                    <div className={`flex flex-col`}>

                                        <label htmlFor="password" 
                                        className={`font-bold text-[16px] my-3 flex  items-center w-[500px] h-[30px] `}>
                                            Old Password 
                                            <span className={`text-red10`}>*</span>
                                            {/* <p className={`text-red10 p-2  my-0 py-0 text-[10px]`}>{formData.error1}</p> */}
                                        </label>
                                        <div className={`relative`}>
                                            <input type={showOldPassword ? 'text' : 'password'} 
                                            id='oldPassword' 
                                            name='oldPassword' 
                                            placeholder='Enter old password' 
                                            className={`border-medium border-[1px] text-base text-black font-bold py-3 px-5 rounded-xl w-full`} 
                                            value={formData.oldPassword} 
                                            onChange={handleChange} 
                                            required 
                                            maxLength={15}
                                            autoComplete='current-passowrd'
                                            />
                                            <button
                                                type="button"
                                                onClick={toggleOldPasswordVisibility}
                                                className="absolute inset-y-0 right-0 pr-3 flex items-center focus:outline-none"
                                            >
                                                {showOldPassword ? (
                                                    <AiOutlineEye className="h-5 w-5 text-black" />
                                                ) : (
                                                    <AiOutlineEyeInvisible className="h-5 w-5 text-black" />
                                                )}
                                            </button>
                                        </div>
                                    </div>


                                    <div className={`flex flex-col my-3`}>
                                        <label htmlFor="password" 
                                        className={`font-bold text-[16px] my-3 flex  items-center w-[500px] h-[30px] `}>
                                            New Password 
                                            <span className={`text-red10`}>*</span>
                                            <p className={`text-red10 p-2  my-0 py-0 text-[10px] w-[230px] text-justify`}>{formData.error1}</p>
                                        </label>
                                        <div className={`relative`}>
                                            <input type={showNewPassword ? 'text' : 'password'} 
                                            id='newPassword' 
                                            name='newPassword' 
                                            placeholder='Enter new password' 
                                            className={`border-medium border-[1px] text-base text-black font-bold py-3 px-5 rounded-xl w-full`} 
                                            value={formData.newPassword} 
                                            onChange={handleChange} 
                                            required 
                                            maxLength={15}
                                            autoComplete='new-passowrd'

                                            />
                                            <button
                                                type="button"
                                                onClick={toggleNewPasswordVisibility}
                                                className="absolute inset-y-0 right-0 pr-3 flex items-center focus:outline-none"
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
                                        <label htmlFor="password" 
                                        className={`font-bold text-[16px] my-3 flex  items-center w-[500px] h-[30px] `}>
                                            Confirm New Password 
                                            <span className={`text-red10`}>*</span>
                                            <p className={`text-red10 p-2  my-0 py-0 text-[10px]`}>{formData.error2}</p>
                                        </label>
                                        <div className={`relative`}>
                                            <input type={showConfirmNewPassword ? 'text' : 'password'} 
                                            id='confirmNewPassword' 
                                            name='confirmNewPassword' 
                                            placeholder='Enter new password' 
                                            className={`border-medium border-[1px] text-base text-black font-bold py-3 px-5 rounded-xl w-full`} 
                                            value={formData.confirmNewPassword} 
                                            onChange={handleChange} 
                                            required 
                                            maxLength={15}
                                            autoComplete='new-passowrd'
                                            />
                                            <button
                                                type="button"
                                                onClick={toggleConfirmNewPasswordVisibility}
                                                className="absolute inset-y-0 right-0 pr-3 flex items-center focus:outline-none"
                                            >
                                                {showConfirmNewPassword ? (
                                                    <AiOutlineEye className="h-5 w-5 text-black" />
                                                ) : (
                                                    <AiOutlineEyeInvisible className="h-5 w-5 text-black" />
                                                )}
                                            </button>
                                        </div>
                                    </div>

                                    <div className={`flex justify-center items-center mt-10`}>
                                        <button
                                            type="submit"
                                            className={`w-full bg-purpleBase text-white py-2 px-4 rounded-md hover:bg-purple7 text-sm disabled:opacity-50`}
                                            disabled={!isAllFieldsFilled() || isLoading || notEmptyError2}>
                                            {!isLoading ? "Save Changes" : "Saving..."}
                                        </button>
                                    </div>
                                </form>
                            
                                <div className="text-red4 text-[13px] text-center h-[20px] flex items-center justify-center my-3">{errorMessage}</div>
                            </div>

                        }
            
                    </div>

                </div>
                
            </div>
        </CustomerDashboardLayout>
    );
}
 
export default ChangePassword;
