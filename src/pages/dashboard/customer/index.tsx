import React from 'react';
import DashboardLayout from "../../../../components/dashboardLayout";
import customer from "../../../../public/dashboardAssets/portrait.jpg";
import styles from "../customer/styles.module.scss"
import Image from 'next/image';
import {MdVerified} from "react-icons/md";
import {GrLocation, GrSearch} from "react-icons/gr";

interface IProps {

}

function Index(props: IProps) {
    return (
        <DashboardLayout>
            <div className={styles.mainContainer}>
                <div>
                    <div className={styles.customerDetails}>
                        <div className={styles.imageDiv}>
                            <Image src={customer} className={styles.customerImage} alt="customer-image"/>
                        </div>
                        <div className={styles.customerInfo}>
                            <div className={styles.nameAndVerification}>
                                <p>Dotun A.</p>
                                <MdVerified className={styles.verificationLogo}/>
                            </div>
                            <div className={styles.location}>
                                <GrLocation className={styles.locationLogo}/>
                                <p>Sydney, Australia</p>
                            </div>
                        </div>
                        <div className={styles.searchDiv}>
                            <GrSearch className={styles.searchLogo}/>
                            <input type="text" className={styles.searchInput} placeholder="Search"/>
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}

export default Index;