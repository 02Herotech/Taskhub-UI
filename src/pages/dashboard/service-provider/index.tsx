
import styles from "./styles.module.scss";
import Image from "next/image";
import provider from "../../../../public/dashboardAssets/portrait.jpg";
import React from "react";
import {GrLocation, GrSearch} from "react-icons/gr";
import {MdVerified} from "react-icons/md";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import Link from "next/link";


import SPDashboardLayout from '../../../../components/spdashboardLayout';
import Card from "../../../../components/card/Card";
import Picture1 from "../../../../public/customerAssets/close-up-collection-make-up-beauty-products.jpg";
import Picture2 from "../../../../public/customerAssets/vintage-sewing-machine-with-thread-measuring-tape.jpg";




function Index() {

    const [completeReg, setCompleteReg] = useState(true)

    const { data: session } = useSession();
    console.log(session)

    const firstName = session?.user.user.firstName;
    const lastName = session?.user.user.lastName;
    const lastNameInitial = lastName?.charAt(0);
    const suburb = session?.user?.user?.address?.suburb
    const state = session?.user?.user?.address?.state

    const isEnabled = session?.user?.user?.enabled
 

    useEffect(() => {
        if (isEnabled === false) {
            setCompleteReg(!completeReg)
        }
    
    }, [isEnabled])
    

    return (
        <SPDashboardLayout>


            { completeReg ? ""

            :

            <div className='bg-purpleBase mt-4  text-white rounded-md flex justify-center items-center w-[900px] mx-auto py-3'>
                <p>Before you proceed, kindly complete your registration to have full control of your account -</p>
                <Link href="/dashboard/service-provider/complete-registration" 
                className={`ml-2 text-[#FE9B07] border-[2px] border-[#FE9B07] py-2 px-4 rounded-md hover:text-[#b4b4b4] hover:border-[#b4b4b4]`}>
                    Complete
                </Link>
            </div>

            }


            {/* <div className={styles.main}> */}
            <div className={`m-10 w-[900px] flex flex-col justify-center`}>
                <div className={styles.provider}>
                    <div className={styles.imageDiv}>
                        <Image src={provider} className={styles.providerImage} alt="service-provider-image"/>
                    </div>
                    <div className={styles.searchDiv}>
                        <GrSearch className={styles.searchLogo}/>
                        <input type="text" className={styles.searchInput} placeholder="Search"/>
                    </div>
                </div>
                <div className={styles.providerInfo}>
                    <div className={styles.locationAndAvailability}>
                        <div className={styles.nameAndVerification}>
                            <p>{firstName} {lastNameInitial}.</p>

                            { completeReg ?
                                <MdVerified className={styles.verificationLogo}/>
                            :
                                ""
                            }

                        </div>

                        
                        { completeReg ? 
                            <div className={styles.location}>
                                <GrLocation className={styles.locationLogo}/>
                                <p>{suburb}, {state}</p>
                            </div>
                         :
                         ""
                        }

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
                        description={"I Provide Painting Services for House, Offices and Shops"}
                        address={"No 102, 02 Arena , Sydney Flat A, New South Wales."}
                        count={3}
                    />
                    <Card
                        image={Picture2}
                        description={"I Provide Painting Services for House, Offices and Shops"}
                        address={"No 102, 02 Arena , Sydney Flat A, New South Wales."}
                        count={1}
                    />
                    <Card
                        image={Picture1}
                        description={"I Provide Painting Services for House, Offices and Shops"}
                        address={"No 102, 02 Arena , Sydney Flat A, New South Wales."}
                        count={5}
                    />
                </div>
            </div>
        </SPDashboardLayout>
    );
}

export default Index;