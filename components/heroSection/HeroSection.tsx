import React, { useEffect } from 'react'
import serviceProvImg from '../../public/service-provider5.svg'
import serviceProvChatImg from '../../public/hero-chat-img.png'
import { SearchButton } from '../buttons/Button'
import { Button } from '../buttons/Button'
import Link from 'next/link'
import { poppins, revalia } from '@/styles/font'
import Nav from '../nav/Nav'
import { gsap } from 'gsap'


const HeroSection = () => {
    // useEffect(() => {
    //     gsap.from('.herosection', { duration: 3, opacity: 1, scale: '1', ease: 'back' })
    // }, [])


    return (
        <div className={` w-full relative ${revalia.className} p-5 h-screen mt-[100px] bg-white px-20 py-10 `}>
            <div className="flex justify-between flex-col">
                <div className={`flex flex-col justify-around text-black mb-[-50px]`}>
                    <h1 className={`text-xl mt-[8rem] mb-5 font-[400] w-[375px]`}>
                        GET QUICK <br />AND <span className={`text-purpleBase`}> EFFICIENT </span>SERVICE
                    </h1>

                    <p className={`text-base w-[600px] font-[100]`}>
                        Our user-friendly platform ensures a seamless
                        experience, allowing you to effortlessly find, connect,
                        and engage with the perfect service professionals.
                    </p>
                    <div className={`flex justify-around herosection mt-10`}>
                        <div className={``}>
                            <Link href='/auth/'>
                                <Button btnValue='Get Started'
                                    className='h-[55px] w-[90px] border-none text-white bg-purpleBase'
                                />
                            </Link>
                        </div>
                        <div className={``}>
                            <SearchButton
                                btnPlaceholder1='By Location'
                            />
                        </div>


                    </div>

                </div>

            </div>

            <div className={`w-[1176px] h-[1176px] `} >

            </div>

        </div>

    )
}

export default HeroSection

{/* <div className="flex justify-between">
                <div className={`px-20 py-14 flex flex-col justify-around text-white space-y-10`}>
                    <h1 className={`text-2xl  font-extrabold w-[550px] mb-[-20px]`}>
                        GET QUICK AND EFFICIENT SERVICE
                    </h1>

                    <p className={`text-base w-[480px]`}>
                        Our user-friendly platform ensures a seamless
                        experience, allowing you to effortlessly find, connect,
                        and engage with the perfect service professionals.
                    </p>

                    <h4 className={`text-sm`}>
                        What are you looking for?
                    </h4>

                    <div className={`flex`}>
                        <SearchButton
                            btnPlaceholder1='By Location'
                            btnPlaceholder2='By Service'
                        />
                    </div>
                    <div className={`w-[160px]`}>
                        <Link href='/auth/'>
                            <Button btnValue='Get Started'
                                className='h-[55px] border-none'
                            />

                        </Link>
                    </div>
                </div>

                <div className={`items-end  absolute bottom-0 right-[6rem] `}>
                    <div className={``}>
                        <Image src={serviceProvImg} width={315} height={350} alt='' />
                    </div>
                </div>
                <div className={`items-end  absolute bottom-[5rem] right-[18rem] `}>
                    <div className={``}>
                        <Image src={serviceProvChatImg} width={300} height={85} alt='' />
                    </div>
                </div>
            </div> */}