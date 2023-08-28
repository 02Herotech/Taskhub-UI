/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../../../public/logo.png'
import { montsearrat } from '@/styles/font'
// import { useRouter } from 'next/dist/client/router'


import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { BackButton } from '../../../components/buttons/Button'
import { serviceProviderSignup } from '../../../network/auth'
import axios from 'axios'

interface FormState {
    firstName: string;
    lastName: string;
    address: string;
    phoneNumber: string;
    email: string;
    password: string;
    confirmPassword: string;
    agreement: boolean;
    error: string;
    idNUmber: string;
}

const authServiceProviderSignup: React.FC<FormState> = () => {

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        address: '',
        phoneNumber: '',
        email: '',
        password: '',
        confirmPassword: '',
        agreement: false,
        error: '',
        idNumber: '',
    });

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);


    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,

        }));

        if (name === 'password') {
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
        const requiredFields = ['firstName', 'lastName', 'address', 'phoneNumber', 'email', 'password', 'confirmPassword', 'idNumber'];
        return requiredFields.every(field => formData[field] !== '') && formData.agreement;
    }

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    const onSubmit = async (event: any) => {
        event.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            setFormData((prevData) => ({
                ...prevData,
                error: 'Password should match',
            }));
            return;
        }

        const formattedPhoneNumber = formData.phoneNumber.startsWith("+61") ? formData.phoneNumber : "+61" + formData.phoneNumber;


        try {
            const user = {
                request: {
                    firstName: formData.firstName,
                    lastName: formData.lastName,
                    phoneNumber: formattedPhoneNumber, // Use the formatted phone number here
                    emailAddress: formData.email,
                    password: formData.password,
                },
                idNumber: formData.idNumber,
            }

            const res = await serviceProviderSignup(user);

            console.log('Signup response:', res);
        } catch (error) {
            console.log('Signup error:', error);
        }


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
                                        <label htmlFor="firstName" className={`font-extrabold text-[16px]  my-3`}>
                                            First Name <span className={`text-red`}>*</span>
                                        </label>
                                        <input type="text" placeholder='First name' id='firstName' name='firstName' className={` border-[1px] text-base text-black font-bold py-3 px-5 rounded-xl`} value={formData.firstName} onChange={handleChange} required

                                        />
                                    </div>

                                    <div className={`flex flex-col`}>
                                        <label htmlFor="lastName" className={`font-bold text-[16px]  my-3`}>
                                            Last Name <span className={`text-red`}>*</span>
                                        </label>
                                        <input type="text" placeholder='Last name' id='lastName' name='lastName' className={`border-medium border-[1px] text-base text-black font-bold py-3 px-5 rounded-xl`} value={formData.lastName} onChange={handleChange} required
                                        />
                                    </div>
                                </div>

                                <div className={`flex flex-col`}>
                                    <label htmlFor="address" className={`font-bold text-[16px] my-3`}>
                                        Address <span className={`text-red`}>*</span>
                                    </label>
                                    <input type="text" id='address' name='address' placeholder='Enter your address' className={`border-medium border-[1px] text-base text-black font-bold py-3 px-5 rounded-xl w-[400px]`} value={formData.address} onChange={handleChange} required
                                    />
                                </div>

                                <div className={`flex flex-col`}>
                                    <label htmlFor="phoneNumber" className={`font-bold text-[16px] my-3`}>
                                        Phone Number <span className={`text-red`}>*</span>
                                    </label>
                                    <div className={`flex items-center space-x-4`}>
                                        <h4 className={`border-medium border-[1px] text-base text-black font-bold p-3 rounded-xl`}>AU +61</h4>
                                        <input type="text" placeholder='Enter phone number' name='phoneNumber' id='phoneNumber' className={`border-medium border-[1px] text-base text-black font-bold py-3 px-5 rounded-xl`} value={formData.phoneNumber} onChange={handleChange} required maxLength={9} minLength={9}
                                        />
                                    </div>
                                </div>

                                <div className={`flex flex-col`}>
                                    <label htmlFor="email" className={`font-bold text-[16px] my-3`}>
                                        Email <span className={`text-red`}>*</span>
                                    </label>
                                    <input type="email" placeholder='Enter your email-address' id='email' name='email' className={`border-medium border-[1px] text-base text-black font-bold py-3 px-5 rounded-xl w-2/3`} value={formData.email} onChange={handleChange} required
                                    />
                                </div>

                                <div className={`flex flex-col`}>
                                    <label htmlFor="password" className={`font-bold text-[16px] my-3`}>
                                        Password <span className={`text-red`}>*</span>
                                    </label>
                                    <div className={`relative`}>
                                        <input type={showPassword ? 'text' : 'password'} id='password' name='password' placeholder='Enter your password' className={`border-medium border-[1px] text-base text-black font-bold py-3 px-5 rounded-xl w-2/3`} value={formData.password} onChange={handleChange} required maxLength={15}
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
                                <div className={`text-red p-2 w-[300px] my-0 py-0 text-base`}>
                                    <p >{formData.error}</p>

                                </div>

                                <div className={`flex flex-col`}>
                                    <label htmlFor="confirmPassword" className={`font-bold text-[16px] my-3`}>
                                        Confirm your Password <span className={`text-red`}>*</span>
                                    </label>
                                    <div className={`relative`}>
                                        <input type={showConfirmPassword ? 'text' : 'password'} id='confirmPassword' name='confirmPassword' placeholder='Enter your password' className={`border-medium border-[1px] text-base text-black font-bold py-3 px-5 rounded-xl w-2/3`} value={formData.confirmPassword} onChange={handleChange} required maxLength={15}
                                        />
                                        <button
                                            type="button"
                                            onClick={toggleConfirmPasswordVisibility}
                                            className="absolute inset-y-0 right-[10rem] pr-3 flex items-center focus:outline-none"
                                        >
                                            {showConfirmPassword ? (
                                                <AiOutlineEye className="h-5 w-5 text-black" />
                                            ) : (
                                                <AiOutlineEyeInvisible className="h-5 w-5 text-black" />
                                            )}
                                        </button>
                                    </div>

                                </div>
                                <div className={`flex flex-col`}>
                                    <label htmlFor="identification" className={`font-bold text-[16px] my-3`}>
                                        MEANS OF IDENTIFICATION <span className={`text-red`}>*</span>
                                    </label>
                                    <select name="identification" id="identification" className={`border-medium border-[1px] text-base text-black font-bold py-3 px-3 rounded-xl w-2/3 bg-contain`} >
                                        <option value="none">None</option>
                                        <option value="drivers_license">National Driver&rsquo;s License</option>
                                        <option value="national_id">National ID</option>
                                        <option value="voters_card">Voter&rsquo;s Card</option>
                                        <option value="passport">International Passport</option>
                                    </select>

                                </div>

                                <div className={`flex flex-col`}>
                                    <label htmlFor="idNumber" className={`font-bold text-[16px]`}>
                                        Valid ID NUMBER
                                    </label>
                                    <input type="text" placeholder='Enter the ID number' name='idNumber' id='idNumber' className={`border-medium border-[1px] text-base text-black font-bold py-3 px-5 rounded-xl w-2/3 my-3`} value={formData.idNumber} onChange={handleChange} required
                                    />

                                </div>


                                <div className={`space-x-2`}>
                                    <input onChange={handleChange} type="checkbox" name="agreement" id="agreement" required />
                                    <label htmlFor="agreement" className={`font-bold text-base`}>I agree to  all <Link href='/termsAndConditions' className={`text-purple text-base hover:underline`}>Terms of service </Link> and <Link href='/termsAndConditions' className={`text-purple text-base hover:underline `}> Privacy</Link></label>
                                </div>

                            </div>

                            <div className={`flex justify-center items-center`}>
                                <button
                                    type="submit"
                                    className={`w-5/6 bg-purple text-white py-2 px-4 rounded-md hover:bg-purpleLight  ${isAllFieldsFilled() ? '' : 'cursor-not-allowed opacity-50'}`}
                                    disabled={!isAllFieldsFilled()}
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

export default authServiceProviderSignup