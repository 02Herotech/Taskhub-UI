import DashboardLayout from "../../../../components/dashboardLayout";
import styles from "./styles.module.scss";
import Image from "next/image";
import provider from "../../../../public/dashboardAssets/portrait.jpg";
import React from "react";
import {GrSearch} from "react-icons/gr";

function Index() {
    return (
        <DashboardLayout>
            <div className={styles.main}>
                <div className={styles.provider}>
                    <div className={styles.imageDiv}>
                        <Image src={provider} className={styles.providerImage} alt="customer-image"/>
                    </div>
                    <div className={styles.searchDiv}>
                        <GrSearch className={styles.searchLogo}/>
                        <input type="text" className={styles.searchInput} placeholder="Search"/>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}

export default Index;