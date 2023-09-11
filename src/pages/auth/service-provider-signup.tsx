/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logoImg from '../../../public/logo.png'
// import { useRouter } from 'next/dist/client/router'


import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { BackButton } from '../../../components/buttons/Button'
// import { serviceProviderSignup } from '../../../network/auth'
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

const serviceProviderSignup: React.FC<FormState> = () => {

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

        if (name === 'confirmPassword') {
            if (value !== formData.password) {
                setFormData((prevData) => ({
                    ...prevData,
                    error: 'Password should match',
                }));
            } else {
                // Clear the error message if the confirm password matches the password
                setFormData((prevData) => ({
                    ...prevData,
                    error: '',
                }));
            }
        }

        // Update the form data with the new password or confirm password value
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handlePhoneNumberKeyDown = (e: any) => {
        // Check if the pressed key is a number (0-9) or Backspace/Delete key
        const isNumericKey = /^[0-9]$/.test(e.key);
        const isBackspaceOrDelete = ['Backspace', 'Delete'].includes(e.key);

        // If the pressed key is not numeric and not Backspace/Delete, prevent the input
        if (!isNumericKey && !isBackspaceOrDelete) {
            e.preventDefault();

        }
    };



    const isAllFieldsFilled = () => {
        const requiredFields: (keyof typeof formData)[] = ['firstName', 'lastName', 'address', 'phoneNumber', 'email', 'password', 'confirmPassword', 'idNumber'];
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

            const payload = {
                firstName: formData.firstName,
                lastName: formData.lastName,
                phoneNumber: formattedPhoneNumber, // Use the formatted phone number here
                emailAddress: formData.email,
                password: formData.password,
                idNumber: formData.idNumber,


            }

            // const res = await serviceProviderSignup(user);

            console.log('Signup payload:', payload);
            const res = await fetch('https://service-rppp.onrender.com/api/v1/service_provider/sign-up', { method: 'POST', body: JSON.stringify(payload) })

            console.log('Signup response:', res);
        } catch (error) {
            console.log('Signup error:', error);
        }


    }



    return (
        <div className={` h-screen  justify-between w-full overflow-x-hidden`}>
            <div className={`p-10 flex h-[100px] drop-shadow-md fixed z-[9999] w-full bg-white   font-extrabold`}>
                <Link href='/' className={`flex space-x-3 items-center`}>
                    <Image src={logoImg} width={61} height={55} alt='' className={`mt-[-10px]`} />
                    <h4 className={`text-lg font-extrabold `}>TaskHub</h4>
                </Link>
            </div>

            <div className={`flex justify-center mt-[120px] items-center flex-col`}>
                <div className={` p-3 space-y-5 text-center mb-2`}>
                    <div className={`text-lg font-bold w-full  `}>
                        <h1 >Create your your Service provider account</h1>
                    </div>

                    <div className={`flex justify-around font-[600] w-[300px]  mx-auto`}>
                        <h5>Already have an account?</h5>
                        <Link href='/auth/login' className={`text-purpleBase hover:text-[17px] `}>Log in</Link>
                    </div>
                </div>

                <div className='mb-10  w-[500px]'>
                    <form action="" onSubmit={onSubmit}>
                        <div className={`space-y-4 mb-10`}>
                            <div className={`flex justify-between`}>
                                <div className={`flex flex-col basis-[48%]`}>
                                    <label htmlFor="firstName" className={`font-extrabold text-[16px]  my-3`}>
                                        First Name <span className={`text-red10`}>*</span>
                                    </label>
                                    <input type="text" placeholder='First name' id='firstName' name='firstName' className={` border-[1px] text-base text-black font-bold py-3 px-5 rounded-xl`} value={formData.firstName} onChange={handleChange} required

                                    />
                                </div>

                                <div className={`flex flex-col basis-[48%]`}>
                                    <label htmlFor="lastName" className={`font-bold text-[16px]  my-3`}>
                                        Last Name <span className={`text-red10`}>*</span>
                                    </label>
                                    <input type="text" placeholder='Last name' id='lastName' name='lastName' className={`border-medium border-[1px] text-base text-black font-bold py-3 px-5 rounded-xl`} value={formData.lastName} onChange={handleChange} required
                                    />
                                </div>
                            </div>

                            <div className={`flex flex-col`}>
                                <label htmlFor="address" className={`font-bold text-[16px] my-3`}>
                                    Address <span className={`text-red10`}>*</span>
                                </label>
                                <input type="text" id='address' name='address' placeholder='Enter your address' className={`border-medium border-[1px] text-base text-black font-bold py-3 px-5 rounded-xl w-full`} value={formData.address} onChange={handleChange} required
                                />
                            </div>

                            <div className={`flex flex-col`}>
                                <label htmlFor="phoneNumber" className={`font-bold text-[16px] my-3`}>
                                    Phone Number <span className={`text-red10`}>*</span>
                                </label>
                                <div className={`flex items-center justify-around`}>
                                    <h4 className={`border-medium border-[1px] text-base text-black font-bold p-3 rounded-xl`}>AU +61</h4>
                                    <input type="tel" placeholder='Enter phone number' name='phoneNumber' id='phoneNumber' className={`border-medium border-[1px] text-base text-black font-bold py-3 px-10 tracking-[0.3rem] rounded-xl w-5/6`} value={formData.phoneNumber} onChange={handleChange} onKeyDown={handlePhoneNumberKeyDown} required maxLength={9} minLength={9}
                                    />
                                </div>
                            </div>

                            <div className={`flex flex-col`}>
                                <label htmlFor="email" className={`font-bold text-[16px] my-3`}>
                                    Email <span className={`text-red10`}>*</span>
                                </label>
                                <input type="email" placeholder='Enter your email-address' id='email' name='email' className={`border-medium border-[1px] text-base text-black font-bold py-3 px-5 rounded-xl w-full`} value={formData.email} onChange={handleChange} required
                                />
                            </div>

                            <div className={`flex flex-col`}>
                                <label htmlFor="password" className={`font-bold text-[16px] my-3`}>
                                    Password <span className={`text-red10`}>*</span>
                                </label>
                                <div className={`relative`}>
                                    <input type={showPassword ? 'text' : 'password'} id='password' name='password' placeholder='Enter your password' className={`border-medium border-[1px] text-base text-black font-bold py-3 px-5 rounded-xl w-full`} value={formData.password} onChange={handleChange} required maxLength={15}
                                    />
                                    <button
                                        type="button"
                                        onClick={togglePasswordVisibility}
                                        className="absolute inset-y-0 right-0 pr-3 flex items-center focus:outline-none"
                                    >
                                        {showPassword ? (
                                            <AiOutlineEye className="h-5 w-5 text-black" />
                                        ) : (
                                            <AiOutlineEyeInvisible className="h-5 w-5 text-black" />
                                        )}
                                    </button>
                                </div>

                            </div>
                            <div className={`text-red10 p-2  my-0 py-0 text-[10px]`}>
                                <p >{formData.error}</p>

                            </div>

                            <div className={`flex flex-col`}>
                                <label htmlFor="confirmPassword" className={`font-bold text-[16px] my-3`}>
                                    Confirm your Password <span className={`text-red10`}>*</span>
                                </label>
                                <div className={`relative`}>
                                    <input type={showConfirmPassword ? 'text' : 'password'} id='confirmPassword' name='confirmPassword' placeholder='Enter your password' className={`border-medium border-[1px] text-base text-black font-bold py-3 px-5 rounded-xl w-full`} value={formData.confirmPassword} onChange={handleChange} required maxLength={15}
                                    />
                                    <button
                                        type="button"
                                        onClick={toggleConfirmPasswordVisibility}
                                        className="absolute inset-y-0 right-0 pr-3 flex items-center focus:outline-none"
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
                                    MEANS OF IDENTIFICATION <span className={`text-red10`}>*</span>
                                </label>
                                <select name="identification" id="identification" className={`border-medium border-[1px] text-base text-black font-bold py-3 px-3 rounded-xl w-full bg-contain`} >
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
                                <input type="text" placeholder='Enter the ID number' name='idNumber' id='idNumber' className={`border-medium border-[1px] text-base text-black font-bold py-3 px-5 rounded-xl w-full my-3`} value={formData.idNumber} onChange={handleChange} required
                                />

                            </div>


                            <div className={`space-x-2`}>
                                <input onChange={handleChange} type="checkbox" name="agreement" id="agreement" required />
                                <label htmlFor="agreement" className={`font-bold text-base`}>I agree to  all <Link href='/termsAndConditions' className={`text-purpleBase text-base hover:underline`}>Terms of service </Link> and <Link href='/privacy' className={`text-purpleBase text-base hover:underline `}> Privacy</Link></label>
                            </div>

                        </div>

                        <div className={`flex justify-center items-center`}>
                            <button
                                type="submit"
                                className={`w-full bg-purpleBase text-white py-2 px-4 rounded-md hover:bg-purple5  ${isAllFieldsFilled() ? '' : 'cursor-not-allowed opacity-50'}`}
                                disabled={!isAllFieldsFilled()}
                            >
                                Create Account
                            </button>
                        </div>
                    </form>
                </div>
            </div>

        </div>

    )
}

export default serviceProviderSignup