

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const VerifyTokenPage = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [isValidToken, setIsValidToken] = useState(false);

  useEffect(() => {
    const { t, e } = router.query;
    console.log({t, e});
    

    if (!{ t, e }) {
      setIsLoading(false);
      setIsValidToken(false);
      return;
    }

    const checkTokenValidity = async () => {
      try {
        const response = await fetch('https://service-rppp.onrender.com/api/v1/user/verify', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ t, e }), // Send token directly, assuming it's a string
        });

        // if (!response.ok) {
        //     const errorData = await response.json();
        //     console.error('Error:', response.status, errorData);

        if (response.ok) {
          setIsValidToken(true);
        } else {
          setIsValidToken(false);
        }
      } catch (error) {
        setIsValidToken(false);
        // const errorData = await res.json();
        console.error('Error while validating token:', error);
      } finally {
        setIsLoading(false);
      }
    };

    checkTokenValidity();
  }, [router.query.token]);

  useEffect(() => {
    if (isValidToken) {
      router.push('/auth/signup-verification');
    }
  }, [isValidToken, router]);

  return (
    <div className="flex h-screen justify-center items-center">
      {isLoading ? (
        <p>Activating...</p>
      ) : isValidToken ? (
        <p>Activation successful! Redirecting to the login page...</p>
      ) : (
        <p>Invalid token. Activation failed.</p>
      )}
    </div>
  );
};

export default VerifyTokenPage;