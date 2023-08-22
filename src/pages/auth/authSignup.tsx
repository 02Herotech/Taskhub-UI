import Image from 'next/image'
import React from 'react'
import logo from '../../../public/logo.png'
import auth from './index'
import AuthLayout from '../../../components/authLayout/AuthLayout'

const authSignup = () => {
    return (
        <div className={`flex justify-between w-full overflow-x-hidden`}>
            <div className={`w-1/2 py-5 px-10 `}>
                <div >
                    <Image src={logo} width={162} height={162} alt='' />
                </div>
                <div className={`container flex justify-center items-center`}>
                    <form action="">
                        <div className={`text-center`}>
                            <h3 className={`text-lg font-bold my-2`}>Create your account </h3>
                            <h6 className={`text-[16px] font-normal my-2`}>Let’s get started with your service provider account</h6>
                        </div>

                        <div className={`space-y-4`}>
                            <div className={`flex`}>
                                <div className={`flex flex-col`}>
                                    <label htmlFor="" className={`font-bold text-[16px] my-5`}>First Name</label>
                                    <input type="text" placeholder='First name' />
                                </div>
                                <div className={`flex flex-col`}>
                                    <label htmlFor="" className={`font-bold text-[16px] my-5`}>Last Name</label>
                                    <input type="text" placeholder='Last name' />
                                </div>
                            </div>

                            <div className={`flex flex-col`}>
                                <label htmlFor="" className={`font-bold text-[16px] my-5`}>Address</label>
                                <input type="text" placeholder='Enter your address' />
                            </div>
                            <div className={`flex flex-col`}>
                                <label htmlFor="" className={`font-bold text-[16px] my-5`}>Phone Number</label>
                                <div className={`flex`}>
                                    <h4>AU +61</h4>
                                    <input type="text" placeholder='Enter your phone number' />
                                </div>
                            </div>

                            <div className={`flex flex-col`}>
                                <label htmlFor="" className={`font-bold text-[16px] my-5`}>Email</label>
                                <input type="email" placeholder='Enter your email-address' />
                            </div>
                            <div className={`flex flex-col`}>
                                <label htmlFor="" className={`font-bold text-[16px] my-5`}>Password</label>
                                <input type="text" placeholder='Enter your password' />
                            </div>
                            <div className={`flex flex-col`}>
                                <label htmlFor="" className={`font-bold text-[16px] my-5`}>Confirm your Password</label>
                                <input type="text" placeholder='Enter your password' />
                            </div>
                            <div>
                                <input type="checkbox" name="" id="" />
                                <label htmlFor="" className={`font-bold text-[16px] my-5`}>I agree to  all <span>Terms of service </span> and <span> Privacy</span></label>
                            </div>

                        </div>

                        <div>
                            <button type="submit" className="text-black px-4 py-2 rounded hover:bg-blue bg-purple ">
                                Sign Up
                            </button>
                        </div>

                    </form>
                </div>

            </div>
            <div className={`w-1/2`}>
                <AuthLayout />

            </div>
        </div>
    )
}

export default authSignup