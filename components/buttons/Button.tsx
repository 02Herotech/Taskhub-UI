import React, { useState } from 'react';
import { FaSearch, FaMapMarkerAlt } from 'react-icons/fa';

interface SearchButtonProps {
    btnPlaceholder1: string;
    btnPlaceholder2: string;
}

interface ButtonProps {
    btnValue: string,
    className?: string
}

export const SearchButton: React.FC<SearchButtonProps> = ({ btnPlaceholder1, btnPlaceholder2 }) => {
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
        <div className={`flex flex-row mr-12 items-center mt-[-30px]`}>
            <div className={`my-4 px-3 self-stretch bg-white flex p-1.5 h-[60px] items-center`}>
                <div className={`flex text-purple items-center justify-center w-[30px] text-md`}>
                    <FaMapMarkerAlt />
                </div>
                {/* First Input */}
                <div className='mr-3'>
                    <input
                        type="text"
                        value={searchValues.input1}
                        onChange={(e) => handleInputChange('input1', e.target.value)}
                        placeholder={btnPlaceholder1}
                        className={`bg-grey text-black outline-none rounded-xl p-2 w-full h-[40px]`}
                    />
                </div>

                {/* Second Input */}
                <div className='mr-3'>
                    <input
                        type="text"
                        value={searchValues.input2}
                        onChange={(e) => handleInputChange('input2', e.target.value)}
                        placeholder={btnPlaceholder2}
                        className={`bg-grey text-black outline-none rounded-xl p-2 w-full h-[40px]`}
                    />
                </div>

                {/* Search Button */}
                <div
                    onClick={handleSearchClick}
                    className={`flex text-white items-center justify-center bg-purple hover:bg-purpleLight w-[40px] h-[35px] text-sm`}
                >
                    <FaSearch />
                </div>
            </div>
        </div>
    );
};


export const Button: React.FC<ButtonProps> = ({ btnValue, className }) => {
    return (
        <div className={`self-stretch m-1`}>
            <input
                type="button"
                value={btnValue}
                className={` text-[15px] rounded-[8px] bg-purple border-[1px] hover:bg-purpleLight p-1 w-full text-center justify-center items-center ${className} `}
            />
        </div>
    )

}
