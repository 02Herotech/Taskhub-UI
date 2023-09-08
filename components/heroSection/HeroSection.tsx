import React, { useEffect } from 'react'
import serviceProvImg from '../../public/service-provider5.svg'
import serviceProvChatImg from '../../public/hero-chat-img.png'
import { SearchButton } from '../buttons/Button'
import { Button } from '../buttons/Button'
import Link from 'next/link'
import { revalia } from '@/styles/font'
import Nav from '../nav/Nav'
import { gsap } from 'gsap'


const HeroSection = () => {


    return (
        <div className={` w-full relative ${revalia.className} p-5  my-[100px] bg-white px-20 py-10`}>
            <div className={`flex flex-col justify-around text-black`}>
                <div className={`flex flex-col`}>
                    <h1 className={`text-xl mt-[3rem] mb-5 font-[400] w-[375px]`}>
                        GET QUICK <br />AND <span className={`text-purpleBase`}> EFFICIENT </span>SERVICE
                    </h1>

                    <p className={`text-base w-[600px] font-[100]`}>
                        Our user-friendly platform ensures a seamless
                        experience, allowing you to effortlessly find, connect,
                        and engage with the perfect service professionals.
                    </p>
                </div>

                <div className={`flex justify-around items-center w-[650px] h-[200px]  mt-10`}>
                    <div className={`flex justify-center mt-[70px] items-center`}>
                        <Link href='/auth/'>
                            <Button btnValue='Get Started'
                                className='h-[65px] w-[180px] border-none text-white bg-purpleBase'
                            />
                        </Link>
                    </div>
                    <div className={`flex justify-center items-center`}>
                        <SearchButton
                            btnPlaceholder1='By Location'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection

