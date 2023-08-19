import React, { useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

import { Layout } from './ServicesDetiails';
import { ServicesDetails } from './ServicesDetiails';
import serviceStyles from './serviceLayout.module.css';
import { ServicesDetailsProps } from './ServicesDetiails';
import { endianness } from 'os';


const ServicesLayout: React.FC<ServicesDetailsProps> = ({ id }) => {
    const [page, setPage] = useState(1);
    const itemsPerPage = 8;

    const startIndex = (page - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage;


    const displayedCategories = ServicesDetails.slice(startIndex, endIndex);

    const handleNextClick = () => {
        if (endIndex <= ServicesDetails.length) {
            setPage(page + 1);
        }
    };


    const handlePrevClick = () => {
        if (startIndex > 0) {
            setPage(page - 1);
        }
    }


    return (
        <div className={`container mx-auto my-[50px]`}>
            <div className={`w-[370px] h-[65px] my-6 mx-auto text-white text-lg font-bold bg-purple flex justify-center items-center rounded-xl`}>
                <h3>SERVICE CATEGORIES</h3>
            </div>
            <div className={`flex flex-wrap `}>
                {displayedCategories.map((category) => (
                    <div className={`p-4 w-1/4 my-5 ${serviceStyles['hover-scale']}`} key={category.id}>
                        <Layout key={category.id} {...category} />
                    </div>
                ))}
            </div>
            <div className="flex justify-center mt-2">
                <button
                    className="mr-12 px-2 py-2 back border-medium  border-[2px] text-medium text-sm rounded-[18px] disabled:border-grey disabled:text-grey hover:text-dark hover:border-dark"
                    onClick={handlePrevClick}
                    disabled={startIndex === 0}
                >
                    <IoIosArrowBack />
                </button>
                <button
                    className="ml-12 px-2 py-2 back border-medium  border-[2px] text-medium text-sm rounded-[18px] disabled:border-grey disabled:text-grey hover:text-dark hover:border-dark"
                    onClick={handleNextClick}
                    disabled={endIndex >= ServicesDetails.length}
                >
                    <IoIosArrowForward />
                </button>
            </div>
        </div >
    );
};

export default ServicesLayout;
