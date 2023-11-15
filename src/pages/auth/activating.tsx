

// import { useRouter } from 'next/router';
// import { useEffect, useState } from 'react';

// const VerifyTokenPage = () => {
//   const router = useRouter();
//   const [isLoading, setIsLoading] = useState(true);
//   const [isValidToken, setIsValidToken] = useState(false);

//   useEffect(() => {
//     const { t, e } = router.query;
//     console.log({t, e});
    

//     if (!{ t, e }) {
//       setIsLoading(false);
//       setIsValidToken(false);
//       return;
//     }

//     const checkTokenValidity = async () => {
//       try {
//         const response = await fetch('https://service-rppp.onrender.com/api/v1/user/verify', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({ t, e }), // Send token directly, assuming it's a string
//         });

//         // if (!response.ok) {
//         //     const errorData = await response.json();
//         //     console.error('Error:', response.status, errorData);

//         if (response.ok) {
//           setIsValidToken(true);
//         } else {
//           setIsValidToken(false);
//         }
//       } catch (error) {
//         setIsValidToken(false);
//         // const errorData = await res.json();
//         console.error('Error while validating token:', error);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     checkTokenValidity();
//   }, [router.query.token]);

//   useEffect(() => {
//     if (isValidToken) {
//       router.push('/auth/signup-verification');
//     }
//   }, [isValidToken, router]);

//   return (
//     <div className="flex h-screen justify-center items-center">

//     <p>Activation Page</p>

//       {isLoading ? (
//         <p>Activating...</p>
//       ) : isValidToken ? (
//         <p>Activation successful! Redirecting to the login page...</p>
//       ) : (
//         <p>Invalid token. Activation failed.</p>
//       )}
//     </div>
//   );
// };

// export default VerifyTokenPage;




"use client"


import axios from "axios";
import { useState, useEffect } from "react";

const VerifyEmail = () => {
  const [t, setT] = useState<string>("");
  const [e, setE] = useState<string>("");
  const [tAndE, setTAndE] = useState<string>("");

  const [verified, setVerified] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const verifyUserEmail = async () => {
   
    try {
      setLoading(true);
      await axios.post("https://service-rppp.onrender.com/api/v1/user/verify", {t}, {e});
      setVerified(true);
    } catch (error) {
      setError(true);
      console.error("Error verifying email:", error);
    } finally {
      setLoading(false);
    }
  };
 

  
  useEffect(() => {
    const urlParams = window.location.search.split("?")[1];
      setTAndE(urlParams)

    if (urlParams) {
      const urlTokenAndHashedEmail = urlParams.split("&");
      
      if (urlTokenAndHashedEmail.length > 0) {
        const urlToken = urlTokenAndHashedEmail[0].split("=")[1];
        const urlHashedEmail = urlTokenAndHashedEmail[1].split("=")[1];
        setT(urlToken || "");
        setE(urlHashedEmail || "");

      }
    }

  }, []);




  useEffect(() => {
    if (t.length > 0 && e.length > 0) {
      verifyUserEmail();
    }
  }, [t, e]);

  return (
    <div>

      <p>Activation Page</p>

    <div className="text-grey5 my-10">
      <p><span className="text-black">Token and Hashed Email: </span>{tAndE}</p>
      <p><span className="text-black">Token: </span>{t}</p>
      <p><span className="text-black">Hashed email: </span>{e}</p>
    </div>
      {loading && <div>Loading...</div>}
      {verified && (
        <div className="text-green5">
          Email Verified. Proceed to login <a href="/auth/LoginLayout">Login</a>
        </div>
      )}
      {error && <div className="text-red5">Error verifying email. Please try again later.</div>}
    </div>  
  );
};

export default VerifyEmail;