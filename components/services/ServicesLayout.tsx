import React, { useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

import { ServiceDetailsLayout } from './ServicesDetiails';
import { ServicesDetails } from './ServicesDetiails';
import serviceStyles from './serviceLayout.module.css';
import { ServicesDetailsProps } from './ServicesDetiails';
import { endianness } from 'os';
import { poppins, revalia } from '@/styles/font'
import { maxId } from './ServicesDetiails';



const ServicesLayout: React.FC<ServicesDetailsProps> = ({ id }) => {
    const itemsPerPage = 6;
    const totalCategories = ServicesDetails.length;

    const [page, setPage] = useState(1);
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, totalCategories);

    const handleNextClick = () => {
        if (endIndex < totalCategories) {
            setPage(page + 1);
        }
    };

    const handlePrevClick = () => {
        if (startIndex > 0) {
            setPage(page - 1);
        }
    };

    const displayedCategories = ServicesDetails.slice(startIndex, endIndex);


    return (
        <div className={`flex justify-center flex-col space-y-6 px-20 py-10 `}>
            <div className={`w-[200px] h-[65px] my-6 mx-20  text-black  font-bold flex-col flex justify-center items-center `}>
                <h3 className={`${revalia.className} text-2xl`}>SERVICE CATEGORIES</h3>
                <h4 className={`${poppins.className} ml-[-65px] text-sm w-[250px]`} >Showing {startIndex + 1} - {endIndex} of {maxId} results</h4>
            </div>
            <div className={`flex justify-center py-6 items-center`}>
                <div>
                    <button
                        className="mr-12 px-2 py-2 back border-medium  border-[2px] text-medium text-sm rounded-[18px] disabled:border-grey3 disabled:text-grey3 hover:text-grey5 hover:border-grey5"
                        onClick={handlePrevClick}
                        disabled={startIndex === 0}
                    >
                        <IoIosArrowBack />
                    </button>
                </div>

                <div className={`flex flex-wrap`}>
                    {displayedCategories.map((category) => (
                        <div className={`p-6 w-1/3 my-5 ${serviceStyles['hover-scale']}`} key={category.id}>
                            <ServiceDetailsLayout key={category.id} {...category} />
                        </div>
                    ))}
                </div>

                <div>
                    <button
                        className="ml-12 px-2 py-2 back border-medium  border-[2px] text-medium text-sm rounded-[18px] disabled:border-grey3 disabled:text-grey3 hover:text-grey5 hover:border-grey5"
                        onClick={handleNextClick}
                        disabled={endIndex >= ServicesDetails.length}
                    >
                        <IoIosArrowForward />
                    </button>
                </div>
            </div>
        </div >
    );
};

export default ServicesLayout;
