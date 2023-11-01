import Image from 'next/image'
import { revalia } from '@/styles/font'


import corporate from '../../public/corporate.png'
import mechanic from '../../public/mechanic.png'
import cleaner from '../../public/cleaner.png'



const ServiceSlider = () => {
    return (
        <div className="max-w-7xl mx-auto px-20 my-20 flex flex-col justify-center items-center">
           <div className='flex'>
                <div>
                    <Image src={corporate} width={300} height={100} alt=''/>
                </div>
                <div className='flex flex-col w-[229px] h-[229px] bg-purpleBase items-center justify-center text-center'>
                    <h1 className={`text-white ${revalia.className} uppercase text-md`}>Service <br />Categories</h1>
                    <button className='text-[10px] text-white bg-[#ff9b07] hover:bg-[#ff8b07] py-2 px-8 mt-6 font-extrabold'>BOOK NOW</button>
                </div>
           </div>

           <div className='w-[700px] my-16 font-extrabold text-center'>
            <p>"Welcome to our Service Page! Discover a world of solution tailored just for you. From expert advice to top-notch sevices, 
                we're here to meet your needs. Explore our offering and let us help you achieve your gooals."</p>
           </div>
        </div>
    );
}
 
export default ServiceSlider;