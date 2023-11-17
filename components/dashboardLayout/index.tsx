import React, {ReactNode} from 'react';
import Image from 'next/image';


import {IoIosNotificationsOutline} from "react-icons/io";
import {RiArrowDropDownLine} from "react-icons/ri";
import {RxDashboard} from "react-icons/rx";
import {IoPersonOutline} from "react-icons/io5";
import {IoClipboardOutline} from "react-icons/io5";
import {CgBox} from "react-icons/cg";
import {FiHelpCircle, FiMessageCircle} from "react-icons/fi";
import {FiLogOut} from "react-icons/fi";
import {GoGear, GoPulse} from "react-icons/go";
import {TfiWallet} from "react-icons/tfi";

import styles from "./styles.module.scss";
import portrait from "./../../public/dashboardAssets/portrait.jpg";
import taskHub from "./../../public/dashboardAssets/TASK.png"
import Footer from '../footer/Footer'; 

interface IProps {
    children: ReactNode
}

function DashboardLayout(props: IProps) {

    return (
        <div className='max-w-7xl mx-auto'>
            <div className={styles.dashboardLayout}>

                {/*Top Bar*/}

                <div className={`flex justify-between px-6 py-3 border-b-[1.5px] border-grey4 z-50`}>
                    <div className={`flex justify-center items-center`}>
                        <Image src={taskHub} className={`mx-2`} alt="task-hub"/>
                        <h3 className={`text-lg font-extrabold`}>TaskHub</h3>
                    </div>
                    <div className={`flex justify-around w-[300px] items-center bg-purpleBase rounded-md px-3 py-2`}>
                        <div className={``}>
                            <span className={`text-[20px] text-white`}><IoIosNotificationsOutline /></span>
                        </div>
                        <div className={`relative`}>
                            <span className={`text-[20px] text-white`}><FiMessageCircle /></span>
                            <span className={`absolute top-[-7px] right-[3px] bg-[#FE9B07] text-[10px] text-white rounded-[50%] px-[4px] py-[1px]`}>5</span>
                        </div>

                        <div className={`text-white`}>
                            <p className={`font-extrabold text-[15px]`}>Dotun Atom</p>
                            <p className={`text-[12px]`}>Customer</p>
                        </div>
                        <Image src={portrait} alt="User Portrait" className={`rounded-[50%] h-[40px] w-[40px] object-cover`}/>
                        <span className={`text-[20px] text-white`}><GoGear /></span>
                    </div>
                </div>

                {/*sidebar*/}

                <div className={`flex`}>

                    <div className={`flex flex-col bg-purpleBase min-h-screen w-[350px] items-center`}>
                        <div className={`flex flex-col items-start justify-between text-white py-20`}>
                            <ul className='mb-[60px]'>
                                <button className={`flex items-center text-[16px] gap-[20px] hover:text-[#FE9B07] mb-14`}>
                                    <RxDashboard size={20}/> Dashboard
                                </button>
                                <button className={`flex items-center text-[16px] gap-[20px] hover:text-[#FE9B07] mb-14`}>
                                    <IoPersonOutline size={20}/> Profile
                                </button>
                                <button className={`flex items-center text-[16px] gap-[20px] hover:text-[#FE9B07] mb-14`}>
                                    <IoClipboardOutline size={20}/> Post a Request
                                </button>
                                <button className={`flex items-center text-[16px] gap-[20px] hover:text-[#FE9B07] mb-14`}>
                                    <TfiWallet size={20}/> Bookings
                                </button>
                                <button className={`flex items-center text-[16px] gap-[20px] hover:text-[#FE9B07] mb-14`}>
                                    <GoPulse size={20}/> View Jobs
                                </button>
                                <button className={`flex items-center text-[16px] gap-[20px] hover:text-[#FE9B07] mb-14`}>
                                    <CgBox size={20}/> Billing and Payments
                                </button>
                                <button className={`flex items-center text-[16px] gap-[20px] hover:text-[#FE9B07] mb-14`}>
                                    <FiHelpCircle size={20}/> Help and Support
                                </button>
                            </ul>

                            <button className={`flex items-center text-[16px] gap-[20px] hover:text-[#FE9B07]`}>
                                <FiLogOut size={20}/> Logout
                            </button>
                        </div>
                    </div>

                    {/* <div className={styles.content}>{props.children}</div> */}
                </div>

                {/*Footer*/}

                <Footer />
                
            </div>
        </div>
    );
}

export default DashboardLayout;
