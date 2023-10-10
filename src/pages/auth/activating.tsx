import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const Activating = () => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(true);
    const [isValidToken, setIsValidToken] = useState(false);

    useEffect(() => {
        const t = router.query.token;

        if (!t) {
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
                    body: JSON.stringify({ token: t }),
                });

                if (response.ok) {
                    setIsValidToken(true);
                } else {
                    setIsValidToken(false);
                }
            } catch (error) {
                setIsValidToken(false);
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
                <p>Activation successful! Redirecting to login page...</p>
            ) : (
                <p>Invalid token. Activation failed.</p>
            )}
        </div>
    );
};

export default Activating;

