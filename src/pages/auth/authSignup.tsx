/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../../../public/logo.png'
import { montsearrat } from '@/styles/font'

import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { BackButton } from '../../../components/buttons/Button'

const authSignup = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [address, setAddress] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [agreement, setAgreement] = useState(false)
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);


    const handleFirstNameChange = (event: { target: { value: React.SetStateAction<string> } }) => {
        setFirstName(event.target.value)
    }

    const handleAddressChange = (event: { target: { value: React.SetStateAction<string> } }) => {
        setAddress(event.target.value)
    }

    const handlePhoneNumberChange = (event: { target: { value: React.SetStateAction<string> } }) => {
        setPhoneNumber(event.target.value)
    }

    const handleEmailChange = (event: { target: { value: React.SetStateAction<string> } }) => {
        setEmail(event.target.value)
    }

    const handlePasswordChange = (event: { target: { value: React.SetStateAction<string> } }) => {
        setPassword(event.target.value)
    }

    const handleConfirmPasswordChange = (event: { target: { value: React.SetStateAction<string> } }) => {
        setConfirmPassword(event.target.value)
    }

    const handleLastNameChange = (event: { target: { value: React.SetStateAction<string> } }) => {
        setLastName(event.target.value)
    }

    const handleAgreementChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAgreement(event.target.checked)
    }

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    const onSubmit = (event: { preventDefault: () => void }) => {
        event.preventDefault();
        console.log(firstName)
        console.log(lastName)
        console.log(address)
        console.log(phoneNumber)
        console.log(email)
        console.log(password)
        console.log(confirmPassword)
        console.log(agreement)

    }



    return (
        <div className={`flex h-screen overflow-y-hidden justify-between w-full overflow-x-hidden  ${montsearrat.className}`}>
            <div className={`overflow-y-auto w-2/3 py-3 px-10 `}>
                <div className={`mt-[-20px]`}>
                    <Image src={logo} width={162} height={162} alt='' />
                </div>
                <div className={`flex justify-center items-center flex-col mt-[-45px]`}>
                    <div className={`text-center`}>
                        <h3 className={`text-lg font-bold my-3`}>Create your account </h3>
                        <h6 className={`text-[16px] font-normal my-3`}>Let’s get started with your service provider account</h6>
                    </div>

                    <div className='mb-10'>
                        <form action="" onSubmit={onSubmit}>
                            <div className={`space-y-4 mb-10`}>
                                <div className={`flex space-x-10`}>
                                    <div className={`flex flex-col`}>
                                        <label htmlFor="firstName" className={`font-extrabold text-[16px] px-2 my-3`}>
                                            First Name <span className={`text-red`}>*</span>
                                        </label>
                                        <input type="text" placeholder='First name' id='firstName' name='firstName' className={` border-[1px] text-base text-black font-bold py-3 px-5 rounded-xl`} value={firstName} onChange={handleFirstNameChange} required

                                        />
                                    </div>

                                    <div className={`flex flex-col`}>
                                        <label htmlFor="lastName" className={`font-bold text-[16px] px-2 my-3`}>
                                            Last Name <span className={`text-red`}>*</span>
                                        </label>
                                        <input type="text" placeholder='Last name' id='lastName' name='lastName' className={`border-medium border-[1px] text-base text-black font-bold py-3 px-5 rounded-xl`} value={lastName} onChange={handleLastNameChange} required
                                        />
                                    </div>
                                </div>

                                <div className={`flex flex-col`}>
                                    <label htmlFor="address" className={`font-bold text-[16px] px-2 my-3`}>
                                        Address <span className={`text-red`}>*</span>
                                    </label>
                                    <input type="text" id='address' name='address' placeholder='Enter your address' className={`border-medium border-[1px] text-base text-black font-bold py-3 px-5 rounded-xl w-[400px]`} value={address} onChange={handleAddressChange} required
                                    />
                                </div>

                                <div className={`flex flex-col`}>
                                    <label htmlFor="" className={`font-bold px-2 text-[16px] my-3`}>
                                        Phone Number <span className={`text-red`}>*</span>
                                    </label>
                                    <div className={`flex items-center space-x-4`}>
                                        <h4 className={`border-medium border-[1px] text-base text-black font-bold p-3 rounded-xl`}>AU +61</h4>
                                        <input type="text" placeholder='Enter phone number' className={`border-medium border-[1px] text-base text-black font-bold py-3 px-5 rounded-xl`} value={phoneNumber} onChange={handlePhoneNumberChange} required maxLength={10}
                                        />
                                    </div>
                                </div>

                                <div className={`flex flex-col`}>
                                    <label htmlFor="email" className={`font-bold text-[16px] px-2 my-3`}>
                                        Email <span className={`text-red`}>*</span>
                                    </label>
                                    <input type="email" placeholder='Enter your email-address' id='email' name='email' className={`border-medium border-[1px] text-base text-black font-bold py-3 px-5 rounded-xl w-2/3`} value={email} onChange={handleEmailChange} required
                                    />
                                </div>

                                <div className={`flex flex-col`}>
                                    <label htmlFor="password" className={`font-bold text-[16px] px-2 my-3`}>
                                        Password <span className={`text-red`}>*</span>
                                    </label>
                                    <div className={`relative`}>
                                        <input type={showPassword ? 'text' : 'password'} id='password' name='password' placeholder='Enter your password' className={`border-medium border-[1px] text-base text-black font-bold py-3 px-5 rounded-xl w-2/3`} value={password} onChange={handlePasswordChange} required
                                        />
                                        <button
                                            type="button"
                                            onClick={togglePasswordVisibility}
                                            className="absolute inset-y-0 right-[10rem] pr-3 flex items-center focus:outline-none"
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
                                    <label htmlFor="confirmPassword" className={`font-bold  px-2 text-[16px] my-3`}>
                                        Confirm your Password <span className={`text-red`}>*</span>
                                    </label>
                                    <div className={`relative`}>
                                        <input type={showConfirmPassword ? 'text' : 'password'} id='confirmPassword' name='confirmPassword' placeholder='Enter your password' className={`border-medium border-[1px] text-base text-black font-bold py-3 px-5 rounded-xl w-2/3`} value={confirmPassword} onChange={handleConfirmPasswordChange} required
                                        />
                                        <button
                                            type="button"
                                            onClick={toggleConfirmPasswordVisibility}
                                            className="absolute inset-y-0 right-[10rem] pr-3 flex items-center focus:outline-none"
                                        >
                                            {showPassword ? (
                                                <AiOutlineEye className="h-5 w-5 text-black" />
                                            ) : (
                                                <AiOutlineEyeInvisible className="h-5 w-5 text-black" />
                                            )}
                                        </button>
                                    </div>
                                </div>

                                <div className={`space-x-2 px-2`}>
                                    <input onChange={handleAgreementChange} type="checkbox" name="agreement" id="agreement" required />
                                    <label htmlFor="agreement" className={`font-bold text-base my-3`}>I agree to  all <Link href='/termsAndConditions' className={`text-purple text-base hover:underline`}>Terms of service </Link> and <Link href='/termsAndConditions' className={`text-purple text-base hover:underline`}> Privacy</Link></label>
                                </div>

                            </div>

                            <div className={`flex justify-center items-center`}>
                                <button
                                    type="submit"
                                    className="w-5/6 bg-purple text-white py-2 px-4 rounded-md hover:bg-purpleLight"
                                >
                                    Sign Up
                                </button>
                            </div>
                        </form>
                        <div className={`flex justify-center space-x-2 my-5`}>
                            <h5>Already have an account?</h5>
                            <Link href='/auth/authLogin' className={`text-purple hover:text-[17px] underline`}>log in</Link>
                        </div>
                    </div>
                </div>

            </div>
            <div className={`w-1/3 bg-signupBg flex items-center justify-center`}>
                <div className="flex flex-col text-center text-white  ">
                    <h1 className={`font-bold text-xl w-[300px]`}>Welcome to the <br /><span className={`text-purple text-xl font-extrabold`}>SignUp</span><br />page</h1>
                    <div className={`flex justify-center  items-center pt-10`}>
                        <BackButton btnLink='/auth' btnValue='Go back' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default authSignup