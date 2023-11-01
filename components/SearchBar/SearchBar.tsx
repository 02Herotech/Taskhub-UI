import React, { useState} from 'react';
import { FaSearch } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';






interface SearchBarProps {
    btnPlaceholder1: string;
    btnPlaceholder2?: string;
    className?: string

}


export const SearchBar: React.FC<SearchBarProps> = ({ btnPlaceholder1, btnPlaceholder2, className }) => {
    
    const [searchValues, setSearchValues] = useState('');
      
    const [erase, setErase] = useState(false)

    const handleSearchClick = () => {
        console.log('Search value:', searchValues);
        setErase(!erase)
    };
    
    console.log('Erase:', erase);

    const emptySearch = () => {
        setSearchValues('')
        setErase(!erase)
    }



    return (
        <div className={`flex justify-center  cursor-pointer items-center `}>

                <div className={`flex justify-center relative `} >
                    <div className={`flex justify-center  items-center`}>
                        <input
                            type="text"
                            value={searchValues}
                            onChange={(e) => setSearchValues(e.target.value)}
                            placeholder={btnPlaceholder1}
                            className={`bg-grey1 text-black  outline-none p-5 border-[1px] border-[#969696]  w-[400px] h-[50px]`}
                        />
                    </div>
                    <div className={`flex text-black items-center my-auto justify-center w-[40px] h-[35px] text-sm absolute right-1 top-[8px]`}>
                        { erase ? <AiOutlineClose onClick={emptySearch}/> : <FaSearch onClick={handleSearchClick} />}
                    </div>
                </div>

        </div>
    );
};


