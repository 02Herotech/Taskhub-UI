import React, {ReactNode} from 'react';
import styles from "./styles.module.scss";
import {IoIosNotificationsOutline} from "react-icons/io";
import {RiArrowDropDownLine} from "react-icons/ri";
import {RxDashboard} from "react-icons/rx";
import {IoPersonOutline} from "react-icons/io5";
import {IoClipboardOutline} from "react-icons/io5";
import {CgBox} from "react-icons/cg";
import {FiHelpCircle} from "react-icons/fi";
import { FiLogOut } from "react-icons/fi";
import Image from 'next/image';
import portrait from "./../../public/dashboardAssets/portrait.jpg";

interface IProps {
    children: ReactNode
}

function DashboardLayout(props: IProps) {

    return (
        <>
            <div className={styles.dashboardLayout}>
                <div className={styles.topBar}>
                    <div>
                        <h3 className={styles.name}>
                            Task<span>HUB</span>
                        </h3>
                    </div>
                    <div className={styles.userInfo}>
                        <div className={styles.notificationIndicator}>
                            <IoIosNotificationsOutline className={styles.notification}/>
                        </div>
                        <div className={styles.userDetails}>
                            <p className={styles.userName}>Dotun Atom</p>
                            <p className={styles.role}>Customer</p>
                        </div>
                        <Image src={portrait} alt="User Portrait" className={styles.userImage}/>
                        <RiArrowDropDownLine className={styles.dropdown}/>
                    </div>
                </div>
                <div className={styles.bottom}>
                    <div className={styles.sideBar}>
                        <div>
                            <ol>
                                <li><RxDashboard size={20}/> Dashboard</li>
                                <li><IoPersonOutline size={20}/> Profile</li>
                                <li><IoClipboardOutline size={20}/> Post a Request</li>
                                <li><CgBox size={20}/> Billing and Payments</li>
                                <li><FiHelpCircle size={20}/> Help and Support</li>
                            </ol>
                        </div>
                        <button className={styles.logoutButton}>
                            <FiLogOut size={20} />
                            Logout
                        </button>
                    </div>
                    <div>{props.children}</div>
                </div>
            </div>
        </>
    );
}

export default DashboardLayout;
