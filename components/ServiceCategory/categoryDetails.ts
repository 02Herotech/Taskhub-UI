// import Image from "next/image";
import { StaticImageData } from "next/image";
// import { Interface } from "readline";
// import { number } from "yup";

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
    CategoryDescription: string;
    CategoryDetailsImage: StaticImageData;
    CategoryDetailsPrice: number | string;
}

export const CategoryDetails: CategoryDetailsProps[] = [
    {
        id: 1,
        CategoryDescription: "HEADIE's Cleaning Agent",
        CategoryDetailsImage: cleaning,
        CategoryDetailsPrice: '$35/hr'
    },
    {
        id: 2,
        CategoryDescription: "Best Photography",
        CategoryDetailsImage: studio,
        CategoryDetailsPrice: '$50/hr'
    },
    {
        id: 3,
        CategoryDescription: "Lily Electronic Solution",
        CategoryDetailsImage: electrical,
        CategoryDetailsPrice: '$35/hr'
    },
    {
        id: 4,
        CategoryDescription: "Jordan Laundry Shop",
        CategoryDetailsImage: laundry,
        CategoryDetailsPrice: '$30/hr'
    },
    {
        id: 5,
        CategoryDescription: "Torrento's Auto",
        CategoryDetailsImage: mechanic,
        CategoryDetailsPrice: '$35/hr'
    },
    {
        id: 6,
        CategoryDescription: "Fomstock Homes",
        CategoryDetailsImage: property,
        CategoryDetailsPrice: '$38/hr'
    },
    {
        id: 7,
        CategoryDescription: "02 Hero Tech Solution",
        CategoryDetailsImage: corporate,
        CategoryDetailsPrice: '$55/hr'
    },
    {
        id: 8,
        CategoryDescription: "Headway Data Service",
        CategoryDetailsImage: tech,
        CategoryDetailsPrice: '$35/hr'
    },
]