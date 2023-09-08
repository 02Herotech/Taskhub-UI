import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineStar } from 'react-icons/ai'

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
    return (
        <div>
            <div>
                <Link href='#'>
                    <Image src={providerImage} width={130} height={110} alt='' />
                </Link>
            </div>

            <div>
                <h3>{providerName}</h3>
                <p>{description}</p>
                <div><AiOutlineStar />{rating}</div>
            </div>

        </div>
    )
}