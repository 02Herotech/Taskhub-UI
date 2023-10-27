/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logoImg from '../../public/logo.png'
import Newsletter from '../newsletter/Newsletter'

const Footer = () => {
    return (
        <div className={`w-full h-[500px]  bg-white py-[100px]`}>
            <div className={`flex flex-col  justify-around text-black max-w-7xl mx-auto`}>
                <div className={` flex px-3 justify-evenly`}>
                    <div className={` font-extrabold space-y-8`}>
                        <div className={`  w-[170px]`}>
                            <Link href='/' className={`flex space-x-3 items-center`}>
                                <Image src={logoImg} width={52} height={47} alt='' />
                                <h4 className={`text-[22px] mt-[4px] font-extrabold`}>TaskHub</h4>
                            </Link>
                        </div>
                        <div className={`w-[300px] text-[12px] pl-[5px]`}>
                            <h5>
                                From home maintenance to professional consultations,
                                creative solutions to skilled experts, we've curated a vast
                                network of top-tier service providers.
                            </h5>
                        </div>

                        <div >
                            <Newsletter />
                        </div>

                        <div className={`text-base font-bold pt-12`}>
                            <h2> &copy; 2023 TaskHub. All Rights Reserved.</h2>
                        </div>
                    </div>
                    <div className={`flex flex-col space-y-2 mt-2`}>
                        <h3 className={`mb-8 font-extrabold text-sm`}>Company</h3>
                        <ul className={`space-y-3 `}>
                            <li >
                                <Link href='/about' className={`hover:text-medium hover:text-grey4`}> About Us </Link>
                            </li>
                            <li>
                                <Link href='/#' className={`hover:text-medium hover:text-grey4`}> Companies </Link>

                            </li>
                            <li>
                                <Link href='/#' className={`hover:text-medium hover:text-grey4`}> Pricing</Link>
                            </li>

                        </ul>
                    </div>

                    <div className={`flex flex-col space-y-2 mt-2`}>
                        <h3 className={`mb-8 font-extrabold text-sm`}>Services</h3>
                        <ul className={`space-y-3 `}>
                            <li className={`hover:text-grey4`}>Automotive Services</li>
                            <li className={`hover:text-grey4`}>Health & Fitness</li>
                            <li className={`hover:text-grey4`}>Real Estate Services</li>
                            <li className={`hover:text-grey4`}>Delivery & Logistics</li>
                            <li className={`hover:text-grey4`}>Art & Creativity</li>
                            <li className={`hover:text-grey4`}>Travel & Adventure</li>
                            <li className={`hover:text-grey4`}>Childcare & Babysitting</li>
                            <li className={`hover:text-grey4`}>Education & Tutoring</li>
                        </ul>

                    </div>

                    <div className={`flex flex-col space-y-2 mt-2`}>
                        <h3 className={`mb-8 font-extrabold text-sm`}>Others</h3>

                        <ul className={`space-y-3`}>
                            <li>
                                <Link href='/faq' className={`hover:text-medium hover:text-grey4`}> FAQs </Link>
                            </li>
                            <li>
                                <Link href='/about' className={`hover:text-medium hover:text-grey4`}>Contack Us </Link>
                            </li>
                            <li>
                                <Link href='/termsAndConditions' className={`hover:text-medium hover:text-grey4`}> Terms and Conditions</Link>
                            </li>
                            <li>
                                <Link href='/privacy' className={`hover:text-medium hover:text-grey4`}> Privacy </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Footer