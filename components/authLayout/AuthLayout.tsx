import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logoImg from '../../public/logo.png'
import { BackButton, Button } from '../../components/buttons/Button'



const AuthLayout = () => {
    return (
        <div className={` w-full    text-black`}>
            <div className={`p-10 flex h-[100px] drop-shadow-md fixed z-[9999] w-full bg-white   font-extrabold`}>
                <Link href='/' className={`flex space-x-3 items-center`}>
                    <Image src={logoImg} width={61} height={55} alt='' className={`mt-[-10px]`} />
                    <h4 className={`text-lg font-extrabold `}>TaskHub</h4>
                </Link>
            </div>
            <div className={` flex items-center min-h-screen justify-center w-full my-auto `}>
                <div className={`px-20  flex justify-center items-center m-auto flex-col  `}>
                    <div className={`w-[600px] p-3 space-y-5 text-center mb-10`}>
                        <div className={`  text-[36px] font-bold `}>
                            <h1 className={` `}>Create your TaskHub account</h1>
                        </div>

                        <div className={`flex justify-around font-[600] w-[300px]  mx-auto`}>
                            <h5>Already have an account?</h5>
                            <Link href='/auth/authLogin' className={`text-purpleBase hover:text-[17px] `}>Log in</Link>
                        </div>
                    </div>

                    <div className={`space-y-5  text-black `}>
                        <div className={`flex space-x-4 font-light`}>
                            <div>
                                <Link href='/auth/customer-signup'>
                                    <Button btnValue='CUSTOMER'
                                        className='h-[60px] w-[200px]  text-base bg-white hover:text-white'
                                    />
                                </Link>
                            </div>

                            <div>
                                <Link href='/auth/service-provider-signup'>
                                    <Button btnValue='SERVICE PROVIDER'
                                        className='h-[60px] w-[200px] bg-white hover:text-white  text-base'
                                    />
                                </Link>
                            </div>
                        </div>
                        <div className={`flex justify-center items-center`} >
                            <BackButton
                                btnLink='/'
                                btnValue='Go Home'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div >

    )
}

export default AuthLayout