import Image from 'next/image'
import { revalia } from '@/styles/font'


import cleaner from '../../public/cleaners.png';
import { SearchBar } from '../SearchBar/SearchBar';
import { SlArrowDown } from 'react-icons/sl';




const ServiceSlider = () => {
    return (
        <div className="max-w-7xl mx-auto px-20 my-20 flex flex-col justify-center items-center">
           <div className='flex w-[1000px] h-[300px] items-center justify-center'>
                <div>
                    <Image src={cleaner} width={700} alt=''/>
                </div>
                <div className='flex flex-col w-[300px] h-[292px] bg-purpleBase items-center justify-center text-center'>
                    <h1 className={`text-white ${revalia.className} uppercase text-xl`}>Service <br />Categories</h1>
                    <button className='text-[15px] text-white bg-[#ff9b07] hover:bg-[#ff8b07] py-2 px-8 mt-6 font-extrabold'>BOOK NOW</button>
                </div>
           </div>

           <div className='w-[700px] my-16 font-extrabold text-center'>
            <p>"Welcome to our Service Page! Discover a world of solution tailored just for you. From expert advice to top-notch sevices, 
                we're here to meet your needs. Explore our offering and let us help you achieve your gooals."</p>
           </div>

           <div className='flex justify-center items-center'>
                <div className={`bg-[#969696] [#969696] h-[50px] w-[150px] flex justify-center items-center`}>
                    <p className='text-[12px] font-extrabold'>All Categories</p>
                    <span className='text-[12px] ml-1'><SlArrowDown /></span>
                </div>
                <SearchBar btnPlaceholder1='Search'/>
            </div>
         
        </div>
    );
}
 
export default ServiceSlider;