import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';


import DashboardLayout from "../../../../../components/dashboardLayout";



import customer from "../../../../public/dashboardAssets/portrait.jpg";
import styles from "../customer/styles.module.scss"
import Image from 'next/image';
import {MdVerified} from "react-icons/md";
import {GrLocation, GrSearch} from "react-icons/gr";
import Card from "../../../../../components/card2/Card";
import Picture1 from "../../../../public/customerAssets/close-up-collection-make-up-beauty-products.jpg";
import Picture2 from "../../../../public/customerAssets/vintage-sewing-machine-with-thread-measuring-tape.jpg";




const CustomerDashboard = () => {

    const router = useRouter();
    const isLinkActive = (linkPath: string) => {
      return router.pathname === linkPath;
    };
    

    return (
        <DashboardLayout>
            <div className={`m-16 w-[800px] flex flex-col justify-center`}>
                <h1 className='text-lg font-extrabold'>Settings</h1>

                <div>
                    <Link  href="/dashboard/customer" className={`flex items-center gap-[20px] hover:text-[#FE9B07] mb-14 ${isLinkActive("/dashboard/customer") && "text-[#FE9B07]"}`}>
                       Change Password
                    </Link>
                    <Link  href="/dashboard/customer" className={`flex items-center gap-[20px] hover:text-[#FE9B07] mb-14 ${isLinkActive("/dashboard/customer") && "text-[#FE9B07]"}`}>
                      Deactivate Account
                    </Link>
                    <Link  href="/dashboard/customer" className={`flex items-center gap-[20px] hover:text-[#FE9B07] mb-14 ${isLinkActive("/dashboard/customer") && "text-[#FE9B07]"}`}>
                       Log out
                    </Link>
                </div>


                
            </div>
        </DashboardLayout>
    );
}
 
export default CustomerDashboard;
