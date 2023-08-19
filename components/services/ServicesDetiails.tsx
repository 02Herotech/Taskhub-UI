import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { StaticImageData } from 'next/image'

const automative = require('../../public/automative.png') as StaticImageData;
const beauty = require('../../public/beauty.png') as StaticImageData;
const cleaning = require('../../public/cleaning.png') as StaticImageData;
const fashion = require('../../public/fashion.png') as StaticImageData;
const fitness = require('../../public/fitness.png') as StaticImageData;
const laundry = require('../../public/laundry.png') as StaticImageData;
const repairs = require('../../public/repairs.png') as StaticImageData;
const sports = require('../../public/sports.png') as StaticImageData;


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
        categoryImage: laundry,
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
        categoryImage: cleaning,
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
        categoryImage: repairs,
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
            'Marketing & Deisign', 'Writing & Editing',
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
        categoryImage: fitness,
        services: [
            'Fitness Training', 'Holistic Healing', 'Nutrition Coaching',
            'Physical Therapy', 'Mental Health Counseling', 'Yoga & Meditation'
        ],
        description: 'Fitness',
    },

    {
        id: 8,
        category: 'Technology & Electronics',
        categoryImage: beauty,
        services: [
            'Computer Repair', 'Phone Repair', 'TV Repair',
            'Graphic Design', 'Web Design', 'Web Development', 'App Development',
        ],
        description: 'Technology',
    },

    {
        id: 9,
        category: 'Real Estate & Property Management',
        categoryImage: automative,
        services: [
            'Real Estate Agent', 'Property Management', 'Home Inspection',
        ],
        description: 'Real Estate',
    },

    {
        id: 10,
        category: 'Delivery & Logistics',
        categoryImage: automative,
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
        categoryImage: automative,
        services: [
            'Babysitting', 'Nanny Services', 'Childcare', 'Daycare',
        ],
        description: 'Childcare',
    },

    {
        id: 13,
        category: 'Travel & Adventure',
        categoryImage: sports,
        services: [
            'Travel Planning', 'Tour Guide', 'Travel Agent', 'Adventure Tours & Excursions',
        ],
        description: 'Travels',
    },

]



export const Layout: React.FC<ServicesDetailsProps> = ({ categoryImage, description }) => {
    return (
        <div>
            <div>
                <Link href='#'>
                    <Image src={categoryImage} alt='' />
                </Link>
            </div>
            <div>
                <h3 className={`bg-purple p-2 text-white text-center text-[15px] font-bold rounded-[8px]`}>{description}</h3>
            </div>
        </div>
    )
}