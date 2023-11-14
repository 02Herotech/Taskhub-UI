import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
// import logoImg from '../../public/logo.png'
import logoImg from "../../../public/logo.png"
import { Button } from '../../../components/buttons/Button'
import { BsArrowLeftCircle } from 'react-icons/bs'




const AuthLayout = () => {
    return (
        <div className={` w-full text-black`}>
            <div className={`p-5 flex h-[80px] drop-shadow-md fixed z-50 w-full bg-white font-extrabold justify-center`}>
                <div className='w-[80em]'>
                    <Link href='/' className={`flex space-x-3 items-center`}>
                        <Image src={logoImg} width={50} height={40} alt='' className={`mt-[-10px]`} />
                        <h4 className={`text-sm font-extrabold `}>TaskHub</h4>
                    </Link>
                </div>
            </div>

            <div className={`flex pt-10 items-center min-h-screen justify-center w-full my-auto `}>
                <div className={`px-20  flex justify-center items-center m-auto flex-col`}>
                    <div className={`w-[600px] p-3 space-y-5 text-center mb-10`}>
                        <div className={`  text-[36px] font-bold `}>
                            <h1 className={` `}>Login to your Taskhub Account</h1>
                        </div>

                        <div className={`flex justify-around items-center font-[600] w-[320px] h-[50px] mx-auto`}>
                            <h5>Don't have an account?</h5>
                            <Link href='/auth' className={`text-purpleBase hover:text-[17px] w-[100px] h-[30px] flex justify-center items-center`}>Create one</Link>
                        </div>
                    </div>

                    <div className={`space-y-5  text-black flex flex-col justify-center items-center`}>
                        <div className={`flex space-x-4 font-light mb-10`}>
                            <div>
                                <Link href='/auth/CustomerLogin'>
                                    <Button btnValue='CUSTOMER'
                                        className='h-[60px] w-[200px]  text-base bg-white hover:text-white'
                                    />
                                </Link>
                            </div>

                            <div>
                                <Link href='/auth/ServiceProviderLogin'>
                                    <Button btnValue='SERVICE PROVIDER'
                                        className='h-[60px] w-[200px] bg-white hover:text-white  text-base'
                                    />
                                </Link>
                            </div>
                        </div>
                        <div className={`flex justify-center items-center h-[35px] w-[150px]`} >
                            <Link href='/' className='text-base font-extrabold hover:scale-110'>
                                <button className='flex justify-center items-center'><span className='mr-1'><BsArrowLeftCircle /></span>Back Home</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div >

    )
}

export default AuthLayout