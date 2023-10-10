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
            <div className="flex justify-between items-center"
                // className={style.heading}
            >
                <p>A catering service wanted: Prepare a 100 People Meal Birthday</p>
                <BsHeart className={style.heart}/>
            </div>
            <div className="flex justify-between items-center mt-[15px]">
                <div>
                    <p className={style.jobPrice}>Fixed-price - Est. Budget: $125 - Posted 18 hours ago</p>
                    <div className="flex items-center">
                        <GrLocation className={style.locationLogo}/>
                        <p className={style.location}>TASMAIA, AUSTRALIA</p>
                    </div>
                </div>
                <div className="flex items-center">
                    <button className={style.openBtn}>Open</button>
                    <Image src={provider} alt="customer-image" className={style.customerImage}/>
                </div>
            </div>
        </div>
    )
}

function Index(props: IProps) {
    return (
        <DashboardLayout>
            <div className={style.mainDiv}>
                <div className={style.topDiv}>
                    <h2>VIEW JOBS</h2>
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
                    <div className={style.jobsDiv}>
                        <div className={style.postedJobDiv}>
                            <div className={style.postedJob}>
                                <Job/>
                            </div>
                            <br/>
                            <div className={style.postedJob}>
                                <Job/>
                            </div>
                            <br/>
                            <div className={style.postedJob}>
                                <Job/>
                            </div>
                        </div>

                        <div className={style.selectedJob}>
                            <p>A Catering Service Wanted</p>
                            <div>
                                <div className={style.postedBy}>
                                    <div>
                                        <p>POSTED BY:</p>
                                        <p>karl Agnes</p>
                                    </div>
                                    <button>Open</button>
                                </div>

                                <div className={style.price}>
                                    <p>Fixed price -</p>
                                    <p>Estimated budget: $125 - </p>
                                    <p>Posted 18 hours ago</p>
                                </div>

                                <div className={style.doneWithin}>
                                    <p>TO BE DONE:</p>
                                    <p>Within 3 days</p>
                                </div>

                                <div className={style.description}>
                                    <p>JOB DESCRIPTION:</p>
                                    <p>
                                        Seeking an experienced Catering Service Provider on Taskhub to deliver
                                        exceptional culinary experiences for events.
                                        Must excel in menu planning, food preparation, presentation, and customer
                                        service.
                                        Ensure seamless event catering, exceeding client expectations.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>


                    <button className={style.viewMore}>View More...</button>
                </div>
            </div>
        </DashboardLayout>
    );
}

export default Index;