import React, { useState } from "react";
import Head from "next/head";
import { FiTool } from "react-icons/fi";
import { BiVector } from "react-icons/bi";

import ServiceSlider from "../../components/serviceSlider/ServiceSlider";
import Nav from "../../components/nav/Nav";
import NewFooter from "../../components/NewFooter/NewFooter";
import ServiceCategoryDetails from "../../components/ServiceCategory/ServiceCategoryDetails";
import { poppins } from "@/styles/font";
import { HiMiniBars4 } from "react-icons/hi2";
import { BiSolidQuoteAltLeft } from "react-icons/bi";

const Marketplace = () => {
  // const catgeories = {Gardening, khskks, jgsjsjjsd}

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Head>
        <title>TaskHub | Services</title>
      </Head>

      <Nav />

      <main className={`min-h-screen py-20 ${poppins.className}`}>
        <div>
          <ServiceSlider />
        </div>

        <div className="max-w-7xl mx-auto px-20 my-20 flex flex-col space-y-20">
          <div className="">
            <div className="flex bg-[#381F8C] w-[200px] items-center justify-center space-x-2 py-3">
              <span className="text-[#FE9B07]">
                <FiTool />
              </span>
              <p className="text-white">Service Listings</p>
            </div>
            <div></div>
          </div>

          <div className="">
            <div className="flex bg-[#381F8C] w-[200px] items-center justify-center space-x-2 py-3">
              <span className="text-[#FE9B07]">
                <BiVector />
              </span>
              <p className="text-white">Task Requests</p>
            </div>
            <div></div>
          </div>
        </div>

        {/* <div className='flex  max-w-7xl mx-auto px-20 justify-around items-start mt-72 mb-20'>
                    <div className='w-[350px] flex flex-col items-center justify-around h-full'>
                        <div className='w-[250px] h-[450px]'>
                            <h2 className='text-center bg-purpleBase text-white py-2 px-5 flex justify-center items-center cursor-pointer hover:bg-purple7' onClick={() => setIsOpen(!isOpen)}>
                                <span className='mr-2'><HiMiniBars4 /></span>
                                Order By Categories
                            </h2>
                            
                            { isOpen ? 
                                <div className='border-[1px] border-t-0 border-grey3 p-3 shadow-md'>
                                    <ul onClick={() => setIsOpen(!isOpen)} className='text-[13px]'>
                                        <li  className='my-1 py-1 cursor-pointer hover:text-grey4'>Gardening</li>
                                        <li  className='my-1 py-1 cursor-pointer hover:text-grey4'>Laundry</li>
                                        <li  className='my-1 py-1 cursor-pointer hover:text-grey4'>Electronics</li>
                                        <li  className='my-1 py-1 cursor-pointer hover:text-grey4'>Fashion and Style</li>
                                        <li  className='my-1 py-1 cursor-pointer hover:text-grey4'>Automobile Repairs</li>
                                        <li  className='my-1 py-1 cursor-pointer hover:text-grey4'>Delivery & Logistics</li>
                                        <li  className='my-1 py-1 cursor-pointer hover:text-grey4'>Education and Tutoring</li>
                                        <li  className='my-1 py-1 cursor-pointer hover:text-grey4'>Delivery & Logistics</li>
                                        <li  className='my-1 py-1 cursor-pointer hover:text-grey4'>Wedding Services</li>
                                    </ul>
                                </div>

                                : ''
                            }
                        </div>

                        <div className='w-[250px] h-[450px]'>
                            <h2 className='text-center bg-purpleBase text-white py-2 px-5'>Customer Reviews</h2>

                            <div className='flex flex-col justify-center items-center mt-[100px]'>
                                <span className='bg-purpleBase p-4 text-white text-xl my-5'><BiSolidQuoteAltLeft /></span>
                                <p className='text-center text-[13px]'>"Exception tech solutions - <br /> tranformed my digital world. <br /> Highly recommended"</p>
                            </div>
                        </div>

                    </div>
                    <div>
                        <ServiceCategoryDetails />
                    </div>
                </div> */}

        {/* <div className={`h-[1.5px] w-[45em] bg-black max-w-7xl mx-auto`}></div> */}
      </main>
      <NewFooter />
    </div>
  );
};

export default Marketplace;
