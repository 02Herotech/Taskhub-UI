import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { StaticImageData } from 'next/image'

const automative = require('../../public/automative.png') as StaticImageData;
const events = require('../../public/events.png') as StaticImageData;
const fashion = require('../../public/fashion.png') as StaticImageData;
const maintenance = require('../../public/maintenance.png') as StaticImageData;
const electronics = require('../../public/electronics.png') as StaticImageData;
const garden = require('../../public/garden.png') as StaticImageData;
const education = require('../../public/education.png') as StaticImageData;
// const travels = require('../../public/travels.png') as StaticImageData;
const childcare = require('../../public/childcare.png') as StaticImageData;
const logistics = require('../../public/logistics.png') as StaticImageData;
const realEstate = require('../../public/realEstate.png') as StaticImageData;





export interface ServicesDetailsProps {
    id: number,
    category: string,
    categoryImage: StaticImageData,
    services: string[],
    description: string,
}

export const ServicesDetails: ServicesDetailsProps[] = [
    {
        id: 1,
        category: 'Home Services & Maintenance',
        categoryImage: maintenance,
        services: [
            'CLeaning', 'plumbing', 'Electrician',
            'Carpentry', 'Pest Control', 'Landscaping',
            'HVAC (Heating, Ventilation, and Air Conditioning)',
            'Interior Design/Decor', 'Renovation/Remodeling',
            'Home Maintenance', 'Flooring', 'Painting', 'Windows & Doors',
            'Tiling'

        ],
        description: 'Home Services',
    },

    {
        id: 2,
        category: 'Personal Services',
        categoryImage: fashion,
        services: [
            'Beauty & Wellness', 'Personal Training', 'Massage Therapy',
            'Yoga & Meditation', 'Life Coaching', 'Pet Care & Grooming',
        ],
        description: 'Personal Services',
    },

    {
        id: 3,
        category: 'Events & Entertainment',
        categoryImage: events,
        services: [
            'Event Planning', 'Photography & Videography', 'DJ Services',
            'Catering', 'Live Performers(Musicians, Magicians, etc.)',
            'Bridal Makeup & Styling'

        ],
        description: 'Events',
    },

    {
        id: 4,
        category: 'Education & Tutoring',
        categoryImage: education,
        services: [
            'Academic Tutoring', 'Music Lessons', 'Language Lessons',
            'Art Classes', 'Computer Lessons', 'Driving Lessons', 'Test Prep',
        ],
        description: 'Education',
    },

    {
        id: 5,
        category: 'Professional Services',
        categoryImage: automative,
        services: [
            'Legal Services', 'Financial Planning', 'IT Support & Consulting',
            'Marketing & Design', 'Writing & Editing',
        ],
        description: 'Professional Services',
    },

    {
        id: 6,
        category: 'Automative',
        categoryImage: automative,
        services: [
            'Car Wash', 'Car Repair', 'Car Rental',
            'Car Insurance', 'Car Dealership',
            'Car Parts & Accessories', 'Tire services',
            'Car Towing', 'Car Inspection', 'Car Service'
        ],
        description: 'Automative',
    },

    {
        id: 7,
        category: 'Health & Fitness',
        categoryImage: garden,
        services: [
            'Fitness Training', 'Holistic Healing', 'Nutrition Coaching',
            'Physical Therapy', 'Mental Health Counseling', 'Yoga & Meditation'
        ],
        description: 'Fitness',
    },

    {
        id: 8,
        category: 'Technology & Electronics',
        categoryImage: electronics,
        services: [
            'Computer Repair', 'Phone Repair', 'TV Repair',
            'Graphic Design', 'Web Design', 'Web Development', 'App Development',
        ],
        description: 'Electronics',
    },

    {
        id: 9,
        category: 'Real Estate & Property Management',
        categoryImage: realEstate,
        services: [
            'Real Estate Agent', 'Property Management', 'Home Inspection',
        ],
        description: 'Real Estate',
    },

    {
        id: 10,
        category: 'Delivery & Logistics',
        categoryImage: logistics,
        services: [
            'Food Delivery', 'Grocery Delivery', 'Package Delivery',
            'Moving Services', 'Furniture Assembly', 'Storage',
        ],
        description: 'Logistics',
    },

    {
        id: 11,
        category: 'Art & Creativity',
        categoryImage: automative,
        services: [
            'Art Classes', 'Music Lessons', 'craftmanship', 'Creative Workshops',
            'Artists'
        ],
        description: 'Art',
    },

    {
        id: 12,
        category: 'Childcare & Babysitting',
        categoryImage: childcare,
        services: [
            'Babysitting', 'Nanny Services', 'Childcare', 'Daycare',
        ],
        description: 'Childcare',
    },

]

export const maxId = Math.max(...ServicesDetails.map(item => item.id));


export const ServiceDetailsLayout: React.FC<ServicesDetailsProps> = ({ categoryImage, description, services }) => {
    return (
        <div>
            <Link href='#'>
                <div className={`w-[230px] h-[200px] mt-10 p-8 space-y-2 relative flex flex-col justify-center items-center bg-purpleBase`}>
                    <div className='absolute w-[200px] h-[200px] top-[-2rem]'>
                        <Image src={categoryImage} width={250} height={200} alt='' />
                    </div>
                    <div className='absolute bottom-[10px] space-y-1 text-left'>
                        <h3 className={` px-5 text-white  text-[15px] font-bold `}>{description}</h3>
                        <p className={` px-5 text-white   text-[8px] font-extralight `}>
                            {services.map((service, index) => {
                                if (index < 5) {
                                    return (
                                        <span key={index}>
                                            {service}
                                            {index < 4 && ', '}
                                        </span>
                                    );
                                } else if (index === 5) {
                                    return (
                                        <span key={index}>
                                            , etc
                                        </span>
                                    );
                                }
                            })}
                        </p>
                    </div>
                </div>
            </Link>
        </div>

    )
}