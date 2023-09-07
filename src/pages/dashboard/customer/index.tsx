import React from 'react';
import DashboardLayout from "../../../../components/dashboardLayout";
import customer from "../../../../public/dashboardAssets/portrait.jpg";
import styles from "../customer/styles.module.scss"
import Image from 'next/image';
import {GoVerified} from "react-icons/go";

interface IProps {

}

function Index(props: IProps) {
    return (
        <DashboardLayout>
            <div>
                <div>
                    <div>
                        <Image src={customer} className={styles.customerImage} alt="customer-image"/>
                        <div>
                            <p>Dotun A.</p>
                            <GoVerified/>
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}

export default Index;