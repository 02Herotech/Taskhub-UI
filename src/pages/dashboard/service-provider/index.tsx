import DashboardLayout from "../../../../components/dashboardLayout";
import styles from "./styles.module.scss";
import Image from "next/image";
import provider from "../../../../public/dashboardAssets/portrait.jpg";
import React from "react";
import {GrLocation, GrSearch} from "react-icons/gr";
import {MdVerified} from "react-icons/md";
import Card from "../../../../components/card/Card";
import Picture1 from "../../../../public/customerAssets/close-up-collection-make-up-beauty-products.jpg";
import Picture2 from "../../../../public/customerAssets/vintage-sewing-machine-with-thread-measuring-tape.jpg";

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
                            <div className={styles.onDiv}>
                                <p>ON</p>
                                <div className={styles.on}></div>
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
                    </div>
                </div>

                <div className={styles.cardsDiv}>
                    <Card
                        image={Picture1}
                        description={<p>I Provide Painting Services for House, Offices and Shops</p>}
                        address={<p>No 102, 02 Arena , Sydney Flat A, New South Wales.</p>}
                        count={3}
                    />
                    <Card
                        image={Picture2}
                        description={<p>I Provide Painting Services for House, Offices and Shops</p>}
                        address={<p>No 102, 02 Arena , Sydney Flat A, New South Wales.</p>}
                        count={1}
                    />
                    <Card
                        image={Picture1}
                        description={<p>I Provide Painting Services for House, Offices and Shops</p>}
                        address={<p>No 102, 02 Arena , Sydney Flat A, New South Wales.</p>}
                        count={3}
                    />
                </div>
            </div>
        </DashboardLayout>
    );
}

export default Index;