import React, { useState } from 'react';
import { FaSearch, FaMapMarkerAlt } from 'react-icons/fa';
import { BsArrowLeftCircle } from 'react-icons/bs'
import Link from 'next/link';



interface SearchButtonProps {
    btnPlaceholder1: string;
    btnPlaceholder2?: string;
    className?: string

}

interface ButtonProps {
    btnValue: string,
    className?: string
}

interface BackBtnProps {
    btnValue: string,
    btnLink: string
}

export const SearchButton: React.FC<SearchButtonProps> = ({ btnPlaceholder1, btnPlaceholder2, className }) => {
    const [searchValues, setSearchValues] = useState({
        input1: '',
        input2: '',
    });

    const handleInputChange = (inputName: string, value: string) => {
        setSearchValues(prevValues => ({
            ...prevValues,
            [inputName]: value,
        }));
    };

    const handleSearchClick = () => {
        console.log('Search value 1:', searchValues.input1);
        console.log('Search value 2:', searchValues.input2);
    };

    return (
        <div className={`flex justify-center  cursor-pointer items-center `}>

            <div className=' flex  flex-col py-2 px-3 space-y-5  justify-center '>
                <div className={`flex space-x-4 p-2 items-center`}>
                    <h3 className={`text-base font-bold`}>Find any service in</h3>
                    <div className={`flex justify-between items-center p-2 w-[150px]  bg-black   h-[50px]`}>
                        <div className={` text-white text-sm `}>
                            <h4 ><FaMapMarkerAlt /></h4>
                        </div>
                        <div className={` text-white text-base `}>
                            All Australia
                        </div>
                    </div>
                </div>
                <div className={`flex justify-center  `} >
                    <div className={`flex justify-center  items-center mr-[-3rem] `}>
                        <input
                            type="text"
                            value={searchValues.input1}
                            onChange={(e) => handleInputChange('input1', e.target.value)}
                            placeholder={btnPlaceholder1}
                            className={`bg-grey1 text-black  outline-none rounded-xl p-5 border-2 border-black w-[400px] h-[50px]`}
                        />
                    </div>
                    <div
                        onClick={handleSearchClick}
                        className={`flex text-black items-center my-auto justify-center  w-[40px] h-[35px] text-sm`}
                    >
                        <FaSearch />
                    </div>
                </div>

            </div>

        </div>
    );
};


export const Button: React.FC<ButtonProps> = ({ btnValue, className }) => {
    return (
        <div className={` m-1`}>
            <input
                type="button"
                value={btnValue}
                className={` text-[15px] rounded-[8px] cursor-pointer bg-purpleBase border-[1px] hover:bg-purple5 py-1 px-2 text-center justify-center items-center ${className} `}
            />
        </div>
    )

}

export const BackButton: React.FC<BackBtnProps> = ({ btnValue, btnLink }) => {
    return (
        <div className={`flex justify-center items-center font-bold cursor-pointer pt-10 hover:text-[20px] w-[200px]`}>
            <BsArrowLeftCircle className={`text-md mr-2`} />
            <Link href={`${btnLink}`} className={`text-center  hover:underline p-1 flex`}>{btnValue}</Link>
        </div >

    )
}
