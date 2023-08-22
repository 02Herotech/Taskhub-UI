/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logo from '../../public/footerLogo.png'

const Footer = () => {
    return (
        <div className={`w-full h-[450px] flex flex-col p-[100px] items-center justify-around bg-ash text-white`}>
            <div className={`w-[900px] flex  py-[2px] justify-evenly`}>
                <div className={`px-5`}>
                    <div className={`flex items-center ml-[-35px]`}>
                        <Image src={logo} width={100} height={100} alt='' />
                        <h3 className={`ml-[-20px] mt-[10px]`}>TaskHUB</h3>
                    </div>
                    <div className={`w-[320px] text-[12px] mt-[-20px]`}>
                        <h5>
                            From home maintenance to professional consultations,
                            creative solutions to skilled experts, we've curated a vast
                            network of top-tier service providers.
                        </h5>
                    </div>
                </div>

                <div className={`flex flex-col px-10 py-10 space-y-2 `}>
                    <Link href='/support' className={`hover:text-medium`}> Support </Link>

                    <Link href='/help' className={`hover:text-medium`}> Help </Link>
                </div>

                <div className={`flex flex-col py-10 space-y-2`}>
                    <Link href='/support' className={`hover:text-medium`}> FAQs </Link>
                    <Link href='/about' className={`hover:text-medium`}> About Us </Link>
                    <Link href='/terms' className={`hover:text-medium`}> Terms </Link>
                    <Link href='/privacy' className={`hover:text-medium`}> Privacy </Link>
                </div>

            </div>
            <span className={`w-[550px] mb-5 border-b-white border-b-[1px] flex justify-center`}></span>

            <div className={`py-5 text-base`}>
                <h2> &copy; 2023 TaskHUB, all rights reserved</h2>
            </div>
        </div>
    )
}

export default Footer