import React from 'react'
import { useState } from 'react'
import { FaSearch } from 'react-icons/fa'


interface SearchButtonProps {
    btnPlaceholder: string,
}

interface ButtonProps {
    btnValue: string,
    className?: string
}

export const SearchButton: React.FC<SearchButtonProps> = ({ btnPlaceholder }) => {
    const [searchValue, setSearchValue] = useState('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event.target.value);
    };

    const handleSearchClick = () => {
        // You can use the searchValue for your search logic
        console.log('Search value:', searchValue);
    };

    return (
        <div className={`flex flex-row mr-12  items-center`} >
            <div className={`w-[180px]  my-4 self-stretch`}>
                <input
                    type="text"
                    value={searchValue}
                    onChange={handleInputChange}
                    placeholder={btnPlaceholder}
                    className={` bg-white text-black outline-none rounded-l-xl p-4 w-full block h-[40px]`}
                />
            </div>
            <div
                onClick={handleSearchClick}
                className={` flex text-white items-center justify-center rounded-r-xl bg-purple hover:bg-purpleLight w-[50px] h-[40px] text-sm`}>
                <FaSearch />
            </div>
        </div>
    )
}

export const Button: React.FC<ButtonProps> = ({ btnValue, className }) => {
    return (
        <div className={` my-4 self-stretch m-4`}>
            <input
                type="button"
                value={btnValue}
                className={`text-white text-[15px] rounded-xl bg-purple hover:bg-purpleLight p-4 w-full h-[55px] ${className} `}
            />
        </div>
    )

}
