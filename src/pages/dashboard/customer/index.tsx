import React from 'react';
import DashboardLayout from "../../../../components/dashboardLayout";
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

const CustomerDashboard = () => {
    return (
     

            <DashboardLayout>
                <div className={`m-16 w-[800px] flex flex-col justify-center`}>

                    {/* <div> */}
                        <div className={`flex items-center justify-between`}>
                            <div className='flex justify-center items-center'>
                                <div className={`w-[160px] h-[160px] rounded-[50%] border-2 border-[#FE9B07] flex justify-center items-center`}>
                                    <Image src={customer} width={150} alt="customer-image" className={`rounded-[50%] object-cover h-[150px]`}/>
                                </div>
                                <div className={`flex flex-col justify-center items-start ml-5`}>
                                    <div className={`flex items-center justify-center text-[18px] font-extrabold`}>
                                        <p>Dotun A.</p>
                                        <MdVerified className={`text-green4 ml-2`}/>
                                    </div>
                                    <div className={`flex text-[13px] items-center justify-center`}>
                                        <GrLocation className={`mr-1`}/>
                                        <p>Sydney, Australia</p>
                                    </div>
                                </div>
                            </div>

                            <div className={`flex justify-center border-[1px] border-[#D9D9D9] p-2 rounded-md items-center`}>
                                <GrSearch className={`mr-2`}/>
                                <input type="text" className={`w-[350px] outline-none`} placeholder="Search"/>
                            </div>
                        </div>
                    {/* </div> */}
                    
                    {/* <div className={styles.topButtonDiv}>
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
                </div>
            </DashboardLayout>
    );
}
 
export default CustomerDashboard;
