import React from 'react'
import { StaticImageData } from 'next/image'
import { poppins, revalia } from '@/styles/font'


import { ServiceProviderDetailsLayout } from './ServiceProviderDetails'
import { ServicesProviderDetailsProps } from './ServiceProviderDetails'
import { ServiceProviderDetails } from './ServiceProviderDetails'


const ServiceProviderLayout: React.FC<ServicesProviderDetailsProps> = () => {
    return (
        <div className={`flex justify-center flex-col space-y-6 px-20 py-10 `}>
            <div className={`w-[200px] h-[65px] my-6 mx-20  text-black  font-bold flex-col flex justify-center items-center `}>
                <h3 className={`${revalia.className} text-2xl`}>SERVICE Providers</h3>

            </div>
            <div className={`flex flex-col p`}>
                {ServiceProviderDetails.map((provider) => (
                    <div className={`p-6 w-1/3 my-5`} key={provider.id}>
                        <ServiceProviderDetailsLayout key={provider.id} {...provider} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ServiceProviderLayout