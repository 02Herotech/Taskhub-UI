import React from 'react';
import DashboardLayout from "../../../../../components/dashboardLayout";
import styles from "@/pages/dashboard/service-provider/styles.module.scss";
import style from "../../market/service-provider/styles.module.scss";
import {MdVerified} from "react-icons/md";
import {GrLocation} from "react-icons/gr";
import {BsHeart} from "react-icons/bs";
import Image from "next/image";
import provider from "../../../../../public/dashboardAssets/portrait.jpg";

interface IProps {

}

const Job = () => {
    return (
        // <div className={style.jobComponent}>
        //     <h3><u>A Catering Service Wanted: Prepare a 100 People Meal Birthday</u></h3>
        //     <p>Fixed-price - Est. Budget: $125 - Posted 18 hours ago</p>
        //     <p>
        //         Seeking exceptional catering for my upcoming birthday bash!
        //         I need delicious food, impeccable service, and options for all dietary preferences.
        //         Let&#39;s make it a memorable feast. Please send me your catering proposals.
        //     </p>
        //     <div className={styles.location}>
        //         <GrLocation className={styles.locationLogo}/>
        //         <p>TASMAIA, AUSTRALIA</p>
        //     </div>
        // </div>
        <div>

        </div>
    )
}

function Index(props: IProps) {
    return (
        <DashboardLayout>
            <div className={style.mainDiv}>
                <div className={style.topDiv}>
                    <h2>MARKET PLACE</h2>
                    <div className={style.providerDiv}>
                        <div className={styles.provider}>
                            <div className={styles.imageDiv}>
                                <Image src={provider} className={styles.providerImage} alt="customer-image"/>
                            </div>
                        </div>
                        <div className={styles.providerInfo}>
                            <div className={styles.locationAndAvailability}>
                                <div className={styles.nameAndVerification}>
                                    <p>Victor C.</p>
                                    <MdVerified className={styles.verificationLogo}/>
                                </div>
                                <div className={styles.location}>
                                    <GrLocation className={styles.locationLogo}/>
                                    <p>Tasmaia, Australia</p>
                                </div>
                                <div className={styles.availabilityDiv}>
                                    <p className={styles.aText}>Availability</p>
                                    <button className={styles.onDiv}>
                                        <p>ON</p>
                                        <div className={styles.on}></div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.jobs}>
                    <h2>Jobs you Might Like</h2>
                    <div className={style.jobDiv}>
                        <div>
                            <Job/>
                        </div>
                        <BsHeart className={style.heart}/>
                    </div>
                    <div className={style.jobDiv}>
                        <div>
                            <Job/>
                        </div>
                        <BsHeart className={style.heart}/>
                    </div>
                    <div className={style.jobDiv}>
                        <div>
                            <Job/>
                        </div>
                        <BsHeart className={style.heart}/>
                    </div>
                    <div className={style.jobDiv}>
                        <div>
                            <Job/>
                        </div>
                        <BsHeart className={style.heart}/>
                    </div>
                </div>
                <button className={style.viewMore}>View More...</button>
            </div>
        </DashboardLayout>
    );
}

export default Index;