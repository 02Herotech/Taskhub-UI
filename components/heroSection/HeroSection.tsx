import React, { useEffect } from 'react'
import { SearchButton } from '../buttons/Button'
import { Button } from '../buttons/Button'
import Link from 'next/link'
import { revalia } from '@/styles/font'
import Image from 'next/image'
import styles from './herosection.module.css'

import heroImage1 from '../../public/heroImage1.png'
import heroImage2 from '../../public/heroImage2.png'
import heroImage3 from '../../public/heroImage3.png'
import heroImage4 from '../../public/heroImage4.png'


const HeroSection = () => {
    useEffect(() => {
        // Animate the element with class "search" using GSAP
        // gsap.from(".search", { duration: 1.5, opacity: 10, scale: 0.3, ease: "back" });

    }, []); // The empty dependency array ensures this effect runs once on component mount

    return (
        <div className={` w-full bg-gradient-to-r from-[#F8E9FE] via-[#FFFFFF] to-[#F5DDFD]`}>
            <div className={`max-w-7xl flex items-center justify-between p-5 space-x-24 px-20 pt-[100px] pb-20 mx-auto`}>
                <div className={`flex flex-col justify-around w-1/2 text-black`}>
                    <div className={`flex flex-col`}>
                        <h1 className={`text-xl mt-[3rem] mb-5 font-[400] w-[375px] ${revalia.className}`}>
                            GET QUICK<br />AND<span className={`text-purpleBase`}> EFFICIENT </span>SERVICE
                        </h1>

                        <p className={`text-base text-justify w-[380px] font-[100]`}>
                            Our user-friendly platform ensures a seamless
                            experience, allowing you to effortlessly find, connect,
                            and engage with the perfect service professionals.
                        </p>
                    </div>

                    <div className={`flex justify-start search items-center w-[650px] h-[200px]  mt-10 ${styles.getStartedAnimation}`}>
                        
                        <div className={`flex justify-center mt-[80px] items-center`}>
                            <Link href='/auth/'>
                                <Button btnValue='Get Started'
                                    className='text-base w-[120px] h-[50px] border-none text-white  bg-purpleBase'
                                />
                            </Link>
                        </div>

                        <div className={`flex justify-center items-center`}>
                            <SearchButton
                                btnPlaceholder1='By Location'
                                className='w-[400px]'
                            />
                        </div>
                    </div>
                </div>
                    

                < div className={`w-[800px]  h-[600px] flex  flex-wrap items-center justify-between space-y-2 ${styles.allImages}`}>
                    <div className={`w-[160px] flex items-center ${styles.imageAnimation2}`}>
                        <Image src={heroImage1} width={160} alt='' />
                    </div>
                    <div className={`w-[250px] flex items-center ${styles.imageAnimation1}`}>
                        <Image src={heroImage2} width={250} alt='' />
                    </div>
                    <div className={`w-[250px] flex items-center ${styles.imageAnimation1}`}>
                        <Image src={heroImage3}  width={250} alt='' />
                    </div>
                    <div className={`w-[160px] flex items-center ${styles.imageAnimation2}`}>
                        <Image src={heroImage4} width={160}alt='' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection

