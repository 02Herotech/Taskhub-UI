import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'

import { StaticImageData } from 'next/image'
const o2hero = require('../../public/02hero.png') as StaticImageData;
const fedex = require('../../public/fedex.png') as StaticImageData;




export interface ServicesProviderDetailsProps {
    id: number,
    providerName: string,
    providerImage: StaticImageData,
    rating: number,
    description: string,
}

export const ServiceProviderDetails: ServicesProviderDetailsProps[] = [
    {
        id: 1,
        providerName: '02herotechconsluting',
        providerImage: o2hero,
        rating: 5,
        description: `We are a dynamic training provider and software development company passionate about streamlining organizations' operations and helping individuals acquire skills & knowledge required for career advancement.`
    },
    {
        id: 2,
        providerName: 'FedEX Delivery Company',
        providerImage: fedex,
        rating: 3,
        description: `We are a dynamic training provider and software development company passionate about streamlining organizations' operations and helping individuals acquire skills & knowledge required for career advancement.`
    }, {
        id: 3,
        providerName: '02herotechconsluting',
        providerImage: o2hero,
        rating: 4,
        description: `We are a dynamic training provider and software development company passionate about streamlining organizations' operations and helping individuals acquire skills & knowledge required for career advancement.`
    },
    {
        id: 4,
        providerName: 'FedEX Delivery Company',
        providerImage: fedex,
        rating: 2,
        description: `We are a dynamic training provider and software development company passionate about streamlining organizations' operations and helping individuals acquire skills & knowledge required for career advancement.`
    },
    {
        id: 5,
        providerName: '02herotechconsluting',
        providerImage: o2hero,
        rating: 5,
        description: `We are a dynamic training provider and software development company passionate about streamlining organizations' operations and helping individuals acquire skills & knowledge required for career advancement.`
    },
    {
        id: 6,
        providerName: 'FedEX Delivery Company',
        providerImage: fedex,
        rating: 4,
        description: `We are a dynamic training provider and software development company passionate about streamlining organizations' operations and helping individuals acquire skills & knowledge required for career advancement.`
    }
]

export const ServiceProviderDetailsLayout: React.FC<ServicesProviderDetailsProps> = ({ providerName, providerImage, description, rating }) => {

    const renderRatingStars = (rating: number) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            if (i <= rating) {
                stars.push(<AiFillStar className={`text-[#FE9B07]`} key={i} />);
            } else {
                stars.push(<AiOutlineStar key={i} />);
            }
        }
        return stars;
    };
    return (
        <div className={`bg-[white] border-[0.5px] border-grey3 flex rounded-md justify-center w-[665px] h-[170px] drop-shadow-md`}>
            <Link href='#'>
                <div className={`flex w-[650px] h-[170px] items-center bg-[#F5EDED] rounded-[5px] p-5 mt-[-10px] justify-between`}>

                    <div className={`w-[100px] flex items-center h-[110px]`}>
                        <Image src={providerImage} width={100} height={110} alt='' />
                    </div>

                    <div className={`w-[500px] h-[120px] px-2 space-y-3 flex flex-col`}>
                        <h3 className={`font-bold text-sm`}>{providerName}</h3>
                        <p className={`text-[12px]`}>{description}</p>
                        <div className={`flex `}>
                            {renderRatingStars(rating)}
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}