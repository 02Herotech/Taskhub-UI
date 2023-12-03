import React from 'react';
// import DashboardLayout from "../../../../components/spdashboardLayout";
import CustomerDashboardLayout from '../../../../components/customerdashboardLayout';
import customer from "../../../../public/dashboardAssets/portrait.jpg";
import styles from "../customer/styles.module.scss"
import Image from 'next/image';
import {MdVerified} from "react-icons/md";
import {GrLocation, GrSearch} from "react-icons/gr";
import Card from "../../../../components/card2/Card";
import Picture1 from "../../../../public/customerAssets/close-up-collection-make-up-beauty-products.jpg";
import Picture2 from "../../../../public/customerAssets/vintage-sewing-machine-with-thread-measuring-tape.jpg";


// interface IProps {

// }

const Billings = () => {
    return (
     

            <CustomerDashboardLayout>

            <p>Billings and Payment</p>
                
                {/* <div className={styles.mainContainer}>

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
                    
                    <div className={styles.topButtonDiv}>
                        <button className={styles.editBtn}>
                            Edit Profile
                        </button>
                        <button className={styles.accountBtn}>
                            Switch Account
                        </button>
                    </div> */}

                    {/* <div className={styles.cardsDiv}>
                        <Card
                            image={Picture1}
                            title={"HEADIE’S Clean Agent"}
                            pay={55}
                            stars={3}
                        />
                        <Card
                            image={Picture1}
                            title={"ELECTRICAL SERVICE CONSULT"}
                            pay={35}
                            stars={3}
                        />
                        <Card
                            image={Picture1}
                            title={"HEADIE’S Clean Agent"}
                            pay={55}
                            stars={3}
                        />
                        <Card
                            image={Picture1}
                            title={"ELECTRICAL SERVICE CONSULT"}
                            pay={35}
                            stars={3}
                        />
                        <Card
                            image={Picture1}
                            title={"HEADIE’S Clean Agent"}
                            pay={55}
                            stars={3}
                        />
                        <Card
                            image={Picture1}
                            title={"ELECTRICAL SERVICE CONSULT"}
                            pay={35}
                            stars={5}
                        />

                    </div> */}
                {/* </div> */}
            </CustomerDashboardLayout>
    );
}
 
export default Billings;
