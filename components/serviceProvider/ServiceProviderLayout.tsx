import React, { useEffect, useState } from 'react'
import { revalia } from '@/styles/font'
import { Button } from '../buttons/Button';



import { ServiceProviderDetailsLayout } from './ServiceProviderDetails'
import { ServicesProviderDetailsProps } from './ServiceProviderDetails'
import { ServiceProviderDetails } from './ServiceProviderDetails'
import Link from 'next/link';
import Image from 'next/image';
import lines from '../../public/line.png'
import styles from '../../src/styles/font.module.css'


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
        const shuffleInterval = setInterval(shuffleProviders, 2000);

        // Clear the interval when the component unmounts
        return () => clearInterval(shuffleInterval);
    }, []);

    return (
        <div className={`flex overflow-hidden relative justify-center flex-col  px-20 py-[110px] pb-[150px] max-w-7xl mx-auto`}>
            <div className={`w-[600px] h-[65px] font-bold flex-col flex justify-center items-center `}>
                <h3 className={`${revalia.className}  text-xl`}>FEATURED SERVICE PROVIDERS</h3>
            </div>
            <div className={`ml-20 `}>
                <div className={`flex`}>
                    <div className={`flex flex-col py-4  mt-[100px]  border-[#FE9B07] w-[900px] `}>
                        {featuredProviders.map((provider) => (
                            <div className={`p-3 `} key={provider.id}>
                                <ServiceProviderDetailsLayout key={provider.id} {...provider} />
                            </div>
                        ))}
                    </div>

                    <div className='mt-[100px]'>
                        <Image src={lines} alt='' />
                    </div>
                </div>


                <div className='mt-[-70px] ml-3 '>
                    <Link href='#'>
                        <Button
                            btnValue='See more'
                            className=' border-[1px] w-[120px] h-[45px]  px-4 border-purpleBase   text-white font-extralight text-base hover:bg-purple5 bg-purpleBase'
                        />
                    </Link>
                </div>
            </div>
            <div className={`absolute right-[-400px] bottom-0`}>
                <div className={`w-[600px] h-[600px] relative bottom-[120px] bg-purpleBase opacity-[50%] rounded-full`}></div>
                <div className={`w-[600px] opacity-[50%] right-[-3rem] absolute h-[600px] bottom-[-3rem] bg-[#FE9B07]  rounded-full`}></div>
            </div>
        </div>
    )
}

export default ServiceProviderLayout