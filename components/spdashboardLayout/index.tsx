"use client"


import React, {ReactNode} from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { signOut, useSession } from 'next-auth/react';
import axios from "axios";
import { useState } from 'react';
import { IoMdArrowDropup } from "react-icons/io";
// import { AuthResponse } from 'next-auth';

import {IoIosNotificationsOutline} from "react-icons/io";
// import {RiArrowDropDownLine} from "react-icons/ri";
import {RxDashboard} from "react-icons/rx";
import {IoPersonOutline} from "react-icons/io5";
import {IoClipboardOutline} from "react-icons/io5";
import {CgBox} from "react-icons/cg";
import {FiHelpCircle, FiMessageCircle} from "react-icons/fi";
import {FiLogOut} from "react-icons/fi";
import {GoGear, GoPulse} from "react-icons/go";
import {TfiWallet} from "react-icons/tfi";
// import { AuthResponse } from '../../types/next-auth';


import portrait from "./../../public/dashboardAssets/portrait.jpg";
import taskHub from "./../../public/dashboardAssets/TASK.png"
import Footer from '../footer/Footer'; 

interface IProps {
    children: ReactNode
}

function SPDashboardLayout(props: IProps) {

    const router = useRouter();
    
    const isLinkActive = (linkPath: string) => {
      return router.pathname === linkPath;
    };
  
    const { data: session } = useSession();
    console.log(session)
    // console.log(session?.user.accessToken)

    const firstName = session?.user.user.firstName
    const lastName = session?.user.user.lastName
    const userRole = session?.user.user.roles[0]
    

    const [isOpen, setIsOpen] = useState(false);

        const contactClick = () => {
            setIsOpen(!isOpen)
        }


    const handleLogOut = async () => {

        signOut({
            redirect: false
        })

        try {
            const response = await axios.post('https://test.jacinthsolutions.com.au/api/v1/auth/logout')
            console.log("Sign Out: ", response)

            if(response.status == 200) {
                router.push('/auth/login')
            }
        } catch (error) {
            console.error(error)
        }

    }

    return (
        <div className='max-w-7xl mx-auto'>
            {/* <div className={``}> */}

                {/*Top Bar*/}

                <div className={`flex justify-between px-6 py-3 border-b-[1.5px] border-grey4 z-50`}>
                    <div className={`flex justify-center items-center`}>
                        <Image src={taskHub} className={`mx-2`} alt="task-hub"/>
                        <h3 className={`text-lg font-extrabold`}>TaskHub</h3>
                    </div>
                    <div className={`flex justify-around w-[300px] items-center bg-purpleBase rounded-md px-3 py-2 text-white`}>
                        <div className={``}>
                            <span className={`text-[20px]`}><IoIosNotificationsOutline /></span>
                        </div>
                        <div className={`relative`}>
                            <span className={`text-[20px] `}><FiMessageCircle /></span>
                            <span className={`absolute top-[-7px] right-[3px] bg-[#FE9B07] text-[10px] text-white rounded-[50%] px-[4px] py-[1px]`}>5</span>
                        </div>

                        <div className={``}>
                            <p className={`font-extrabold text-[15px]`}>{firstName} {lastName}</p>
                            <p className={`text-[12px]`}>{userRole}</p>
                        </div>
                        <Image src={portrait} alt="User Portrait" className={`rounded-[50%] h-[40px] w-[40px] object-cover`}/>

                        <div className=' flex relative cursor-pointer' onClick={contactClick}>
                            <ul>
                                <li  className={`text-[20px] hover:text-[#FE9B07] ${isLinkActive("/dashboard/service-provider/settings") && "text-[#FE9B07]"} `}>
                                    <GoGear />
                                </li>

                                { !isOpen ? '' :
                                <div className='absolute top-[50px] ml-[-75px] w-[100px]'>
                                    <span className='text-purpleBase flex justify-end mb-[-12px] text-[30px]'><IoMdArrowDropup /></span>

                                    <ul className='hover: bg-purpleBase  py-2 px-4  text-[13px] flex flex-col items-center justify-center rounded-md'>

                                        <li className='py-1 px-2 my-1 hover:text-[#FE9B07]'>
                                            <Link href='/dashboard/service-provider/settings'>
                                                Settings
                                            </Link>
                                        </li>
                                        <li className='py-1 px-2 my-1 hover:text-[#FE9B07]'>
                                            <button onClick={handleLogOut}>
                                                Log out
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                                }
                            </ul>
                        </div>
                        
                        {/* <Link href="/dashboard/customer/settings" className={`text-[20px] hover:text-[#FE9B07] ${isLinkActive("/dashboard/customer/settings") && "text-[#FE9B07]"} `}><GoGear /></Link> */}
                    </div>
                </div>

                {/*sidebar*/}

                <div className={`flex`}>

                    <div className={`flex flex-col bg-purpleBase min-h-screen w-[250px] items-center`}>
                        <div className={`flex flex-col items-start justify-between text-white py-20`}>
                            <div className='mb-[20em] text-[14px]'>
                                <Link  href="/dashboard/service-provider" className={`flex items-center gap-[20px] hover:text-[#FE9B07] mb-14 ${isLinkActive("/dashboard/service-provider") && "text-[#FE9B07]"}`}>
                                    <RxDashboard size={16}/>Dashboard
                                </Link>
                                <Link href="/dashboard/service-provider/profile" className={`flex items-center gap-[20px] hover:text-[#FE9B07]  mb-14 ${isLinkActive("/dashboard/service-provider/profile") && "text-[#FE9B07]"}`}>
                                    <IoPersonOutline size={16}/>Profile
                                </Link>
                                <Link href="/dashboard/service-provider/listings" className={`flex items-center gap-[20px] hover:text-[#FE9B07] mb-14 ${isLinkActive("/dashboard/service-provider/listings") && "text-[#FE9B07]"}`}>
                                    <IoClipboardOutline size={16}/>Listings
                                </Link>
                                <Link href="/dashboard/service-provider/manage-bookings" className={`flex items-center gap-[20px] hover:text-[#FE9B07] mb-14 ${isLinkActive("/dashboard/service-provider/manage-bookings") && "text-[#FE9B07]"}`}>
                                    <TfiWallet size={16}/>Manage Bookings
                                </Link>
                                <Link href="/dashboard/service-provider/view-jobs" className={`flex items-center gap-[20px] hover:text-[#FE9B07] mb-14 ${isLinkActive("/dashboard/service-provider/view-jobs") && "text-[#FE9B07]"}`}>
                                    <GoPulse size={16}/>View Jobs
                                </Link>
                                <Link href="/dashboard/service-provider/billings&payments" className={`flex items-center gap-[20px] hover:text-[#FE9B07] mb-14 ${isLinkActive("/dashboard/service-provider/billings&payments") && "text-[#FE9B07]"}`}>
                                    <CgBox size={16}/> Billing and Payments
                                </Link>
                                <Link href="/dashboard/service-provider/help&support" className={`flex items-center gap-[20px] hover:text-[#FE9B07] mb-14 ${isLinkActive("/dashboard/service-provider/help&support") && "text-[#FE9B07]"}`}>
                                    <FiHelpCircle size={16}/>Help and Support
                                </Link>
                            </div>

                            <button className={`flex items-center text-[16px] gap-[20px] hover:text-[#FE9B07]`}
                            onClick={handleLogOut}
                            >
                                <FiLogOut size={16}/> Logout
                            </button>
                            
                        </div>
                    </div>

                    <div className='w-full flex flex-col justify-start items-center mx-auto'>{props.children}</div>
                </div>

                {/*Footer*/}

                <Footer />

            {/* </div> */}
        </div>
    );
}

export default SPDashboardLayout;
