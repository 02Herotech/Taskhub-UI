
"use client"


import axios from "axios";
import { useState, useEffect } from "react";
import Image from 'next/image'
import Link from 'next/link'

import logoImg from '../../../public/logo.png'
import loader from '../../../public/loader.svg'
import success from '../../../public/success.svg'
import styles from '../../styles/animation.module.css'


const VerifyEmail = () => {
  const [tokenAndHashedEmail, setTokenAndHashedEmail] = useState<string>("");

  const [verified, setVerified] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
 
  useEffect(() => {
    const urlParams = window.location.search.split("?")[1];
    setTokenAndHashedEmail(urlParams)

  }, []);

  const verifyUserEmail = async () => {
    
    
    try {
      setLoading(true);
      await axios.post(`https://service-rppp.onrender.com/api/v1/user/verify?${tokenAndHashedEmail}`);
      setVerified(true);
    } catch (error) {
      setError(true);
      console.error("Error verifying email:", error);
    } finally {
      setLoading(false);
    }
  };
 

  


  useEffect(() => {
    if (tokenAndHashedEmail.length > 0) {
      verifyUserEmail();
    }
  }, [tokenAndHashedEmail]);

  return (

    <div className={`m-auto`}>
      <div className={`p-5 flex h-[80px] drop-shadow-md fixed z-50 w-full bg-white font-extrabold justify-center`}>
          <div className='w-[80em]'>
              <Link href='/' className={`flex space-x-3 items-center`}>
                  <Image src={logoImg} width={50} height={40} alt='' className={`mt-[-10px]`} />
                  <h4 className={`text-sm font-extrabold `}>TaskHub</h4>
              </Link>
          </div>
      </div>

      <div className={`flex h-full flex-col items-center justify-center min-h-screen pt-20`}>

        {loading && 
           <div className={`w-[100x] h-[100px]`}>
           <Image src={loader} width={100} height={100} alt='' />
          </div>
        }
            
        {verified && (
          <div className={`flex flex-col items-center justify-center ${styles.animation}`}>
            <div className={`w-[166px] h-[166px]`}>
                <Image src={success} width={166} height={166} alt='' />
            </div>
              <p className="text-center mt-10">Your email has been verified successfully. <br /> Kindly proceed to <a href="/auth/LoginLayout" className="text-purpleBase underline hover:text-purple7">Login</a></p>
          </div>
        )}
        
        {error && <div>Error verifying email. Please try again later</div>}
        
      </div>
 </div>

  );
};

export default VerifyEmail;


