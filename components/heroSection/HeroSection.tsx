import React, { useEffect } from 'react'
import { SearchButton } from '../buttons/Button'
import { Button } from '../buttons/Button'
import Link from 'next/link'
import { revalia } from '@/styles/font'
import Image from 'next/image'
import { gsap } from 'gsap'

import heroImage1 from '../../public/heroImage1.png'
import heroImage2 from '../../public/heroImage2.png'
import heroImage3 from '../../public/heroImage3.png'
import heroImage4 from '../../public/heroImage4.png'


const HeroSection = () => {


    return (
        <div className={` w-full flex justify-between  ${revalia.className} p-5 space-x-24  my-[100px] bg-gradient-to-r from-[#F8E9FE] via-[#FFFFFF] to-[#F5DDFD] px-20 py-10`}>
            <div>
                <div className={`flex flex-col justify-around w-1/2 text-black`}>
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
            <div className={`w-1/2  h-[500px] flex  flex-wrap items-center justify-center space-x-[45px] space-y-2`}>
                <div className={`w-[130px] h-[130px] flex items-center`}>
                    <Image src={heroImage1} width={130} height={130} alt='' />
                </div>
                <div className={`w-[200px] h-[200px] flex items-center`}>
                    <Image src={heroImage2} width={200} height={200} alt='' />
                </div>
                <div className={`w-[220px] h-[220px] flex items-center `}>
                    <Image src={heroImage3} width={200} height={200} alt='' />
                </div>
                <div className={`w-[130px] h-[130px] flex items-end `}>
                    <Image src={heroImage4} width={130} height={130} alt='' />
                </div>
            </div>
        </div>
    )
}

export default HeroSection

