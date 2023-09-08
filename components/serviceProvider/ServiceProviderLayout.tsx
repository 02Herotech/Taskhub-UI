import React, { useEffect, useState } from 'react'
import { StaticImageData } from 'next/image'
import { revalia } from '@/styles/font'


import { ServiceProviderDetailsLayout } from './ServiceProviderDetails'
import { ServicesProviderDetailsProps } from './ServiceProviderDetails'
import { ServiceProviderDetails } from './ServiceProviderDetails'


const ServiceProviderLayout: React.FC<ServicesProviderDetailsProps> = () => {
    const [featuredProviders, setFeaturedProviders] = useState<ServicesProviderDetailsProps[]>([]);

    useEffect(() => {
        // Function to shuffle and update the providers
        const shuffleProviders = () => {
            const shuffledProviders = [...ServiceProviderDetails].sort(() => Math.random() - 0.5);
            const selectedProviders = shuffledProviders.slice(0, 4);
            setFeaturedProviders(selectedProviders);
        };

        // Initial shuffle
        shuffleProviders();

        // Set up interval to shuffle every 5 seconds
        // const shuffleInterval = setInterval(shuffleProviders, 5000);

        // Clear the interval when the component unmounts
        // return () => clearInterval(shuffleInterval);
    }, []);

    return (
        <div className={`flex overflow-hidden relative justify-center flex-col  px-20 py-[100px] `}>
            <div className={`w-[600px] h-[65px] my-6 mx-5  text-black  font-bold flex-col flex justify-center items-center `}>
                <h3 className={`${revalia.className} text-2xl`}>FEATURED SERVICE PROVIDERS</h3>

            </div>
            <div className={`flex flex-col ml-20 mt-[150px] `}>
                {featuredProviders.map((provider) => (
                    <div className={`p-3 w-1/3`} key={provider.id}>
                        <ServiceProviderDetailsLayout key={provider.id} {...provider} />
                    </div>
                ))}
            </div>
            <div className={`absolute right-[-400px] bottom-0`}>
                <div className={`w-[600px] h-[600px] relative bottom-[120px] bg-purpleBase opacity-[50%] rounded-full`}>

                </div>
                <div className={`w-[600px] opacity-[50%] right-[-2rem] absolute h-[600px] bottom-[-3rem] bg-[#FE9B07] rounded-full`}>

                </div>

            </div>
        </div>
    )
}

export default ServiceProviderLayout