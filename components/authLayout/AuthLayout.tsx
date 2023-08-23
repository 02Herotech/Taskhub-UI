import React from 'react'
import Link from 'next/link'
import { Button } from '../../components/buttons/Button'
import { BsArrowLeftCircle } from 'react-icons/bs'


const AuthLayout = () => {
    return (
        <div>
            <div className={`p-20 flex items-center justify-center w-full bg-black h-screen  `}>
                <div className={`px-20  flex justify-center items-center m-auto flex-col  `}>
                    <div className={`text-white text-2xl text-center font-extrabold w-[500px] my-10`}>
                        <h1>CHOOSE YOUR SIGN-UP METHOD</h1>
                    </div>
                    <div className={`space-y-5 text-white font-bold`}>
                        <div>
                            <Link href='#'>
                                <Button btnValue='CUSTOMER'
                                    className='h-[55px] w-[200px] border-transparent '
                                />
                            </Link>
                        </div>

                        <div>
                            <Link href='#'>
                                <Button btnValue='SERVICE PROVIDER'
                                    className='h-[55px] bg-transparent border-purple'
                                />
                            </Link>
                        </div>
                        <div className={`flex justify-center items-center py-10`}>
                            <Link href='/' className={`text-center hover:underline p-1 flex`}>
                                <BsArrowLeftCircle className={`text-white text-md mr-2`} />
                                Back Home</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AuthLayout