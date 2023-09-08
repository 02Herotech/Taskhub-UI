import React, {ReactNode} from 'react';
import styles from "./styles.module.scss";
import {IoIosNotificationsOutline} from "react-icons/io";
import {RiArrowDropDownLine} from "react-icons/ri";
import {RxDashboard} from "react-icons/rx";
import {IoPersonOutline} from "react-icons/io5";
import {IoClipboardOutline} from "react-icons/io5";
import {CgBox} from "react-icons/cg";
import {FiHelpCircle, FiMessageCircle} from "react-icons/fi";
import {FiLogOut} from "react-icons/fi";
import Image from 'next/image';
import portrait from "./../../public/dashboardAssets/portrait.jpg";
import taskHub from "./../../public/dashboardAssets/TASK.png"
import {GoPulse} from "react-icons/go";
import {TfiWallet} from "react-icons/tfi";

interface IProps {
    children: ReactNode
}

function DashboardLayout(props: IProps) {

    return (
        <>
            <div className={styles.dashboardLayout}>
                <div className={styles.topBar}>
                    <div className={styles.topLogo}>
                        <Image src={taskHub} className={styles.firstLogo} alt="task-hub"/>
                        <h3 className={styles.name}> TaskHUB </h3>
                    </div>
                    <div className={styles.userInfo}>
                        <div className={styles.notificationDiv}>
                            <IoIosNotificationsOutline className={styles.notification}/>
                        </div>
                        <div className={styles.messageDiv}>
                            <FiMessageCircle className={styles.message}/>
                            <span className={styles.messageCount}>5</span>
                        </div>

                        <div className={styles.userDetails}>
                            <p className={styles.userName}>Dotun Atom</p>
                            <p className={styles.role}>Customer</p>
                        </div>
                        <Image src={portrait} alt="User Portrait" className={styles.userImage}/>
                        <RiArrowDropDownLine className={styles.dropdown}/>
                    </div>
                </div>
                <div className={styles.sidebarDiv}>
                    <div className={styles.sideBar}>
                        <div>
                            <ol>
                                <button className={styles.sidebarButton}>
                                    <RxDashboard size={20}/> Dashboard
                                </button>
                                <button className={styles.sidebarButton}>
                                    <IoPersonOutline size={20}/> Profile
                                </button>
                                <button className={styles.sidebarButton}>
                                    <IoClipboardOutline size={20}/> Post a Request
                                </button>
                                <button className={styles.sidebarButton}>
                                    <TfiWallet size={20}/> Bookings
                                </button>
                                <button className={styles.sidebarButton}>
                                    <GoPulse size={20}/> Market Place
                                </button>
                                <button className={styles.sidebarButton}>
                                    <CgBox size={20}/> Billing and Payments
                                </button>
                                <button className={styles.sidebarButton}>
                                    <FiHelpCircle size={20}/> Help and Support
                                </button>
                            </ol>

                        </div>
                        <button className={styles.logoutButton}>
                            <FiLogOut size={20}/>
                            Logout
                        </button>
                    </div>
                    <div className={styles.content}>{props.children}</div>
                </div>
                <div className={styles.footer}>
                    <div className={styles.footerColumn1}>
                        <div className={styles.secondLogo}>
                            <Image src={taskHub} alt="task-hub"/>
                            <h3>TaskHub</h3>
                        </div>
                        <p>
                            Online platform that connects service providers with customers who are seeking various services.
                            The platform offers a wide range of services.
                        </p>
                        <p>
                            2023 TaskHub. All Rights Reserved.
                        </p>
                    </div>
                    <div className={styles.footerColumn2}>
                        <p>Company</p>
                        <p>About Us</p>
                        <p>Companies</p>
                        <p>Pricing</p>
                    </div>
                    <div className={styles.footerColumn3}>
                        <p>Services</p>
                        <p>Automotive Services</p>
                        <p>Health & Fitness</p>
                        <p>Real Estate Services</p>
                        <p>Delivery & Logistics</p>
                        <p>Art & Creativity</p>
                        <p>Travel & Adventure</p>
                        <p>Childcare & Babysitting</p>
                        <p>Education & Tutoring</p>
                    </div>
                    <div className={styles.footerColumn4}>
                        <p>Other</p>
                        <p>FAQs</p>
                        <p>Contact Us</p>
                        <p>Terms and Conditions</p>
                        <p>Privacy</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DashboardLayout;
