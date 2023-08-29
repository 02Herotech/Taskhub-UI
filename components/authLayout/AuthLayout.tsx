import React from 'react'
import Link from 'next/link'
import { BackButton, Button } from '../../components/buttons/Button'
import { montsearrat } from '@/styles/font'



const AuthLayout = () => {
    return (
        <div className={`p-20 flex items-center justify-center w-full ${montsearrat.className}`}>
            <div className={`px-20  flex justify-center items-center m-auto flex-col  `}>
                <div className={`text-white text-2xl text-center font-extrabold w-[500px] my-10`}>
                    <h1>CHOOSE YOUR <br />SIGN-UP <br /> METHOD</h1>
                </div>
                <div className={`space-y-5 text-white font-bold`}>
                    <div>
                        <Link href='/auth/authCustomerSignup'>
                            <Button btnValue='CUSTOMER'
                                className='h-[60px] w-[250px] border-transparent text-base'
                            />
                        </Link>
                    </div>

                    <div>
                        <Link href='/auth/authServiceProviderSignup'>
                            <Button btnValue='SERVICE PROVIDER'
                                className='h-[55px] w-[250px] bg-transparent  border-purple text-base'
                            />
                        </Link>
                    </div>
                    <BackButton
                        btnLink='/'
                        btnValue='Go Home'
                    />

                    <div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default AuthLayout