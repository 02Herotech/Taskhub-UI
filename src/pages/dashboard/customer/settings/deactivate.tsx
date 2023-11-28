import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { IoLockClosedOutline } from "react-icons/io5";
import { LuUsers } from "react-icons/lu";


import DashboardLayout from "../../../../../components/dashboardLayout";



// import customer from "../../../../public/dashboardAssets/portrait.jpg";
// import styles from "../customer/styles.module.scss"
// import Image from 'next/image';
// import {MdVerified} from "react-icons/md";
// import {GrLocation, GrSearch} from "react-icons/gr";
// import Card from "../../../../../components/card2/Card";
// import Picture1 from "../../../../public/customerAssets/close-up-collection-make-up-beauty-products.jpg";
// import Picture2 from "../../../../public/customerAssets/vintage-sewing-machine-with-thread-measuring-tape.jpg";




const Deactivate = () => {

    const router = useRouter();
    const isLinkActive = (linkPath: string) => {
      return router.pathname === linkPath;
    };
    
    

    return (
        <DashboardLayout>
            <div className={`m-16 flex flex-col justify-center items-start w-[900px]`}>
                <h1 className='text-lg font-extrabold'>Settings</h1>

                <div className={`flex justify-around items-start mt-20 w-[800px] mx-auto`}>

                    <div className='flex flex-col justify-center items-center bg-white shadow-lg w-[220px] py-5 text-[15px]'>
                        <div className='flex flex-col justify-center items-start'>
                            <Link  href="/dashboard/customer/settings/change-password" 
                                className={`flex items-center justify-center gap-[8px] hover:text-[#FE9B07] px-1 py-2 mx-1 my-2 ${isLinkActive("/dashboard/customer/settings/change-password") && "text-[#FE9B07]"}`}>
                                <IoLockClosedOutline />Change Password
                            </Link>
                            <Link  href="/dashboard/customer/settings/deactivate" 
                                className={`flex items-center justify-center gap-[8px] hover:text-[#FE9B07] px-1 py-2 mx-1 my-2 ${isLinkActive("/dashboard/customer/settings/deactivate") && "text-[#FE9B07]"}`}>
                                <LuUsers />Deactivate Account
                            </Link>
                        </div>
                    </div>

                    <div className='w-[430px] bg-white shadow-lg p-5'>
                    Deactivate
                    </div>

                </div>
                
            </div>
        </DashboardLayout>
    );
}
 
export default Deactivate;
