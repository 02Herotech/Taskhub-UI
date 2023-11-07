import { StaticImageData } from "next/image";
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'


const corporate = require ('../../public/corporate.png') as StaticImageData
const cleaning = require ('../../public/cleaning.png') as StaticImageData
const electrical = require ('../../public/electrical.png') as StaticImageData
const studio = require ('../../public/studio.png') as StaticImageData
const mechanic = require ('../../public/mechanic.png') as StaticImageData
const laundry = require ('../../public/laundry.png') as StaticImageData
const tech = require ('../../public/tech.png') as StaticImageData
const property = require ('../../public/property.png') as StaticImageData



export interface CategoryDetailsProps {
    id: number,
    CategoryDescription: string,
    CategoryDetailsImage: StaticImageData,
    CategoryDetailsPrice: number | string,
    rating: number
}

export const CategoryDetails: CategoryDetailsProps[] = [
    {
        id: 1,
        CategoryDescription: "HEADIE's Cleaning Agent",
        CategoryDetailsImage: cleaning,
        CategoryDetailsPrice: '$35/hr',
        rating: 4
    },
    {
        id: 2,
        CategoryDescription: "Best Photography",
        CategoryDetailsImage: studio,
        CategoryDetailsPrice: '$50/hr',
        rating: 3
    },
    {
        id: 3,
        CategoryDescription: "Lily Electronic Solution",
        CategoryDetailsImage: electrical,
        CategoryDetailsPrice: '$35/hr',
        rating: 3
    },
    {
        id: 4,
        CategoryDescription: "Jordan Laundry Shop",
        CategoryDetailsImage: laundry,
        CategoryDetailsPrice: '$30/hr',
        rating: 4
    },
    {
        id: 5,
        CategoryDescription: "Torrento's Auto",
        CategoryDetailsImage: mechanic,
        CategoryDetailsPrice: '$35/hr',
        rating: 4
    },
    {
        id: 6,
        CategoryDescription: "Fomstock Homes",
        CategoryDetailsImage: property,
        CategoryDetailsPrice: '$38/hr',
        rating: 2
    },
    {
        id: 7,
        CategoryDescription: "02 Hero Tech Solution",
        CategoryDetailsImage: corporate,
        CategoryDetailsPrice: '$55/hr',
        rating: 5
    },
    {
        id: 8,
        CategoryDescription: "Headway Data Service",
        CategoryDetailsImage: tech,
        CategoryDetailsPrice: '$35/hr',
        rating: 3
    },
]

export const CategoryDetailsStars: React.FC<CategoryDetailsProps> = ({ CategoryDescription, CategoryDetailsImage, rating }) => {

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