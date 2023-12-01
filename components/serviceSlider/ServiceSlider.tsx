import Image from 'next/image'
import { revalia } from '@/styles/font'
import { StaticImageData } from 'next/image';
import Link from 'next/link';
import { useState } from 'react';



import image1 from '../../public/cleaners.png';
// import image2 from '../../public/mecho.png';
// import image3 from '../../public/laundryGirl.png'
import { SearchBar } from '../SearchBar/SearchBar';
import { SlArrowDown, SlArrowUp } from 'react-icons/sl';
import styles from '../../src/styles/font.module.css'



const ServiceSlider = () => {

    const [open, setOpen] = useState(false);

    return (
        <div className="max-w-7xl mx-auto px-20 my-20 flex flex-col justify-center items-center">
           <div className='flex w-[1000px] h-[300px] items-center justify-center'>
                <div>
                    <Image src={image1} width={700} alt=''/>
                </div>
                <div className='flex flex-col w-[300px] h-[292px] bg-purpleBase items-center justify-center text-center'>
                    <h1 className={`text-white ${styles.revaliaFont} uppercase text-xl`}>Service <br />Categories</h1>
                    <button className='text-[15px] text-white bg-[#ff9b07] hover:bg-[#ff8b07] py-2 px-8 mt-6 font-extrabold'>BOOK NOW</button>
                </div>
           </div>

           <div className='w-[700px] my-16 font-extrabold text-center'>
            <p>"Welcome to our Service Page! Discover a world of solution tailored just for you. From expert advice to top-notch sevices, 
                we're here to meet your needs. Explore our offering and let us help you achieve your gooals."</p>
           </div>

           <div className='flex justify-center items-center '>
                <div className={`bg-[#969696] hover:bg-[#828282] cursor-pointer h-[50px] w-[150px] flex justify-center items-center`} onClick={() => {setOpen(!open)}}>
                    <p className='text-[12px] font-extrabold'>All Categories</p>
                    <span className='text-[12px] ml-1'>{open ? <SlArrowDown /> : <SlArrowUp />}</span>
                </div>
                <SearchBar btnPlaceholder1='Search'/>
            </div>
         
        </div>
    );
}
 
export default ServiceSlider;