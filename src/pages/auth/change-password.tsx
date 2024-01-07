"use client"


import axios from "axios";
import { useState, useEffect } from "react";
import Image from 'next/image'
import Link from 'next/link'

import logoImg from '../../../public/logo.png'
import loader from '../../../public/loader.svg'
import success from '../../../public/success.svg'
import styles from '../../styles/animation.module.css'

const ChangePassword = () => {

    const [token, setToken] = useState<string>("");

    const [changed, setChanged] = useState(false);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const urlParams = window.location.search.split("?")[1];
        setToken(urlParams)
    
      }, []);

      const handleChangePassword = async () => {
    
        try {
          setLoading(true);
         const response = await axios.post(`http://54.198.113.229:8080/api/v1/change-password/change?${token}`);
         console.log(response)
         setChanged(true);
        } catch (error) {
          console.error("Error changing password:", error);
          setError(true)
        } finally {
          setLoading(false);
        }
      };

      useEffect(() => {
        if (token.length > 0) {
            handleChangePassword();
        }
      }, [token]);

    return (
        <div className={`m-auto`}>
            <div className={`p-5 flex h-[80px] drop-shadow-md fixed z-50 w-full bg-white font-extrabold justify-center`}>
                <div className='w-[80em] flex justify-start'>
                    <div className="">
                        <Link href='/' className={`flex space-x-3 items-center`}>
                            <Image src={logoImg} width={50} height={40} alt='' className={`mt-[-10px]`} />
                            <h4 className={`text-sm font-extrabold `}>TaskHub</h4>
                        </Link>
                    </div>
                </div>
            </div>

      <div className={`flex h-full flex-col items-center justify-center min-h-screen pt-20`}>

        {loading && 
           <div className={`w-[100x] h-[100px]`}>
           <Image src={loader} width={100} height={100} alt='' />
          </div>
        }
            
        {changed && (
          <div className={`flex flex-col items-center justify-center ${styles.animation}`}>
            <div className={`w-[166px] h-[166px]`}>
                <Image src={success} width={166} height={166} alt='' />
            </div>
              <p className="text-center mt-10">Your password has been changed successfully. <br /> Kindly proceed to <a href="/auth/login" className="text-purpleBase underline hover:text-purple7">Login</a></p>
          </div>
        )}
        
        {error && <div>Error changing password. Please try again later</div>}
        
      </div>
 </div>
    );
}
 
export default ChangePassword;