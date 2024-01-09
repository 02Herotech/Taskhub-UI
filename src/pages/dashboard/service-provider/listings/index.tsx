import React, { useState } from 'react';
import { AiOutlineRight  } from "react-icons/ai";
import { FaArrowLeft } from "react-icons/fa6";
import Link from 'next/link';


import SPDashboardLayout from '../../../../../components/spdashboardLayout';
import styles from './listing.module.css'

import customer from "../../../../public/dashboardAssets/portrait.jpg";
// import styles from "../customer/styles.module.scss"
import Image from 'next/image';
import {MdVerified} from "react-icons/md";
import {GrLocation, GrSearch} from "react-icons/gr";
import Card from "../../../../../components/card2/Card";
import Picture1 from "../../../../public/customerAssets/close-up-collection-make-up-beauty-products.jpg";
import Picture2 from "../../../../public/customerAssets/vintage-sewing-machine-with-thread-measuring-tape.jpg";

interface FormState {
    businessName: string;
    serviceCategories: string;
    // subCategories: string;
    serviceDescription: string;
    serviceName: string;
    pricing: number;
    availableDays: [string];
    available: boolean;
    startMinute: number;
    startHour: number;
    closeMinute: number;
    closeHour: number;
    streetNumber: string;
    streetName: string;
    unitNumber: string;
    suburb: string;
    state: string;
    postCode: string;
    image1: File | undefined;
    image2: File | undefined;
    image3: File | undefined;
}

const PostRequest = () => {

    const step = [
        {id: '1', 
        name: 'Business Name',
        fields: ['businessName', 'serviceCategories']
        },
        {id: '2', name: ' Description & Status'},
        {id: '3', name: 'Pricing'},
        {id: '4', name: 'Location & Image'}
    ]

    // console.log("step lenght: ", step.length)

    const [formData, setFormData] = useState({
        businessName: '',
        serviceCategories: '',
        serviceDescription: '',
        serviceName: '',
        pricing: '',
        availableDays: [],
        available: '',
        startMinute: '',
        startHour: '',
        closeMinute: '',
        closeHour: '',
        streetNumber: '',
        streetName: '',
        unitNumber: '',
        suburb: '',
        state: '',
        postCode: '',
        image1: undefined,
        image2: undefined,
        image3: undefined
    
    })

    const [isLoading, setIsLoading] = useState(false)
    
    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));

        // Update the form data with the new password or confirm password value
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleImage1 = (e: any) => {
        setFormData((preData) => ({
            ...preData,
            image1: e.target.files[0]
        }))
    }

    const handleImage2 = (e: any) => {
        setFormData((prevData) => ({
            ...prevData,
            image2: e.target.files[0]
        }));
    }

    const handleImage3 = (e: any) => {
        setFormData((prevData) => ({
            ...prevData,
            image3: e.target.files[0]
        }));
    }
    
    
    // Check if necessary inputs are filled for each step
 
    const isAllFieldsFilled = () => {
        //  const fields = step[currentStep].fields 
        const requiredFields: (keyof FormState)[] = ['businessName', 'serviceCategories'];
        return requiredFields.every(field => formData[field] !== '')
    }

    //   To reset the form

      const resetForm = () => {
        setFormData({
            businessName: '',
            serviceCategories: '',
            serviceDescription: '',
            serviceName: '',
            pricing: '',
            availableDays: [],
            available: '',
            startMinute: '',
            startHour: '',
            closeMinute: '',
            closeHour: '',
            streetNumber: '',
            streetName: '',
            unitNumber: '',
            suburb: '',
            state: '',
            postCode: '',
            image1: undefined,
            image2: undefined,
            image3: undefined
        })
      }



      // Check box for days of the week 
  
      const daysOfWeek = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
      
      const [checkedDays, setCheckedDays] = useState<string[]>([]);
  

      // Function to handle checkbox change

      const handleCheckBoxChange = (day: string) => {
        if (checkedDays.includes(day)) {
          setCheckedDays(checkedDays.filter((checkedDay) => checkedDay !== day));
        } else {
          setCheckedDays([...checkedDays, day]);
        }
      };


      
    //   To go to next step

    const [currentStep, setCurrentStep] = useState(0)

    const next = () => {
        // const fields = step[currentStep].fields
        
        if(currentStep < step.length -1) {
            setCurrentStep(step => step + 1)
        }
    }

    const previous = () => {
        if(currentStep > 0) {
            setCurrentStep(step => step - 1)
        }
    }
    
    // Active Step

 

    // To submit form 

    const handleSubmit = async (e: {preventDefault: () => void}) => {
        e.preventDefault()
        console.log(formData)
    }



    return (
        <SPDashboardLayout>

                <div className='flex justify-around w-full'>
                    {step.map((step, index) => (
                        
                        <div 
                        key={index}
                        className={`flex justify-center items-center text-[13px] font-bold w-full bg-[#9747FF40] border-b-[4px] border-[#969696] py-3 ${index === currentStep && 'border-[#FE9B07]'}`}
                        >
                            <span className={`bg-[#969696] rounded-[50%] py-1.5 px-3 ${index === currentStep && 'bg-[#FE9B07]'}`}>{step.id}</span>
                            <span className='mx-3'>{step.name}</span>
                            <span><AiOutlineRight /></span>

                        </div>
                    ))}
                </div>   
                
                <div className='my-16 flex flex-col justify-center items-start w-[900px]'>

                        
                        <form>

                            {currentStep === 0 && (
                                <div className='w-full'>
                                    <h1 className='text-lg font-extrabold'>Bussiness Name</h1>

                                    <div className='my-20 max-w-[550px]'>
                                        <div className='flex justify-start text-[15px]'>
                                            <label 
                                            htmlFor="businessName"
                                            className='font-semibold mt-2 mr-10 w-[110px]'
                                            >
                                                Business Title
                                            </label>

                                            <textarea 
                                                name="businessName" 
                                                id="businessName" 
                                                cols={50}
                                                rows={4}
                                                maxLength={50}
                                                className='resize-none border-grey4 border-[1.5px] rounded-lg p-2 shadow-lg'
                                                placeholder=''
                                                required
                                                onChange={handleChange}
                                            />
                                        </div>

                                        <p  className='text-[11px] text-grey4 flex justify-end mt-2'>(maximum of 50 characters)</p>
                                    </div>

                                    <div className='flex justify-start text-[15px] my-20'>
                                        <label 
                                            htmlFor="serviceCategories"
                                            className='font-semibold mt-2 mr-10 w-[110px]'
                                        >
                                            Category
                                        </label>

                                        <select
                                            name="serviceCategories" 
                                            id="serviceCategories" 
                                            className='border-grey4 border-[1.5px] rounded-lg p-2 w-[300px]'
                                            required
                                            onChange={handleChange}
                                        >
                                            <option value="" className='text-grey4'>--Select Category--</option>
                                            <option value="Home Services">Home Services</option>
                                            <option value="Personal Services">Personal Services</option>
                                            <option value="Education & Tutoring">Education & Tutoring</option>
                                            <option value="Professional Services">Professional Services</option>
                                            <option value="Automotive Services">Automotive Services</option>
                                            <option value="Health & Fitness">Health & Fitness</option>
                                            <option value="Technology & Electronics">Technology & Electronics</option>
                                            <option value="Home Improvement">Home Improvement</option>
                                            <option value="Real Estate Services">Real Estate Services</option>
                                            <option value="Delivery & Logistics">Delivery & Logistics</option>
                                            <option value="Art & Creativity">Art & Creativity</option>
                                            <option value="Wedding Services">Wedding Services</option>
                                            <option value="Childcare & Babysitting">Childcare & Babysitting</option>
                                            <option value="Travel & Adventure">Travel & Adventure</option>
                                        </select>
                                    </div>

                                    {/* <div className='mt-32 flex justify-end w-[900px] '>
                                        <button 
                                            type='submit'
                                            className='bg-black py-3 px-6 rounded-lg text-white  hover:text-[#FE9B07] disabled:opacity-50'
                                            onClick={next} 
                                            disabled={!isAllFieldsFilled()}
                                        >
                                            Save & Continue
                                        </button>
                                    </div> */}
                                </div>
                                
                            )}

                            {currentStep === 1 && (
                               <div>
                                    <h1 className='text-lg font-extrabold'>Description & Availability</h1>

                                    <div className='my-16 w-[600px]'>
                                        <h3 className='text-md font-extrabold mb-5'>Description</h3>
                                            <div className='flex flex-col text-[15px] ml-5'>
                                                <label  
                                                        htmlFor="businessTitle"
                                                        className='font-semibold mb-10'
                                                >
                                                    Briefly Describe Your Service
                                                </label>

                                                <textarea 
                                                    name="businessTitle" 
                                                    id="businessTitle" 
                                                    cols={50}
                                                    rows={10}
                                                    maxLength={500}
                                                    className='resize-none border-grey4 border-[1.5px] rounded-lg p-2 shadow-lg ml-10'
                                                />
                                            </div>

                                            <p  className='text-[11px] text-grey4 flex justify-end mt-2'>(maximum of 500 characters)</p>
                                    </div>

                                    <div className='my-16'>
                                        <h3 className='text-md font-extrabold mb-5'>Availability</h3>
                                        <p className='font-semibold ml-5'>Choose your business working Days and Hour</p>

                                        <div className='flex items-center text-[15px] ml-5 mt-8'>
                                            <p  className='text-md font-semibold'>TIME:</p>
                                            
                                            <div className='flex items-center w-[280px] justify-around ml-3'>

                                                <input type="time" 
                                                    className=" p-2 border rounded-md" 
                                                    id='openTime'
                                                    name='openTime'
                                                />

                                                <p>-</p>   

                                                <input type="time" 
                                                    className=" p-2 border rounded-md" 
                                                    id='closeTime'
                                                    name='closeTime'
                                                /> 
                                            </div>

                                        </div>

                                        <div className='flex text-[12px]  w-[185px] justify-between ml-[85px] text-grey4 mt-1'>
                                            <p>Open</p>
                                            <p>Close</p>
                                        </div>

                                        <div className='flex items-center text-[15px] ml-5 mt-8'>
                                            <p  className='text-md font-semibold'>DAYS:</p>
                                        
                                            <div className='flex items-center ml-3 space-x-4'>
                                            
                                               {daysOfWeek.map((day) => (
                                                    <label
                                                    key={day}
                                                    className={`flex items-center justify-center border-[1.5px] py-2 px-4 cursor-pointer rounded-lg font-semibold hover:bg-green2 ${
                                                        checkedDays.includes(day) ? 'bg-[rgba(20,120,47,255)] text-white' : 'bg-white  text-grey5  border-grey5'
                                                    } transition-colors duration-200`}
                                                    >
                                                    <input
                                                        type="checkbox"
                                                        checked={checkedDays.includes(day)}
                                                        onChange={() => handleCheckBoxChange(day)}
                                                        className="hidden"
                                                    />
                                                    {day}
                                                    </label>
                                                ))}
                
                                            </div>

                                        </div>
                            
                                    </div>

                                    {/* <div className='mt-32 flex justify-between w-[900px] '>
                                        <button
                                            className='flex items-center hover:text-[#FE9B07]'
                                            onClick={previous}
                                        >
                                            <span className='mr-2'><FaArrowLeft /></span> Back
                                        </button>

                                        <button 
                                            className='bg-black py-3 px-6 rounded-lg text-white  hover:text-[#FE9B07] disabled:opacity-50'
                                            onClick={next} 
                                            disabled={!isAllFieldsFilled()}
                                            type='submit'
                                        >   
                                            Save & Continue
                                        </button>
                                    </div>                                 */}
                                </div>
                            )}

                            {currentStep === 2 && (
                                <div >
                                    <h1 className='text-lg font-extrabold'>Pricing</h1>
                                    <h3 className='text-[16px] my-5'>Choose the pricing method that best suit your niche</h3>

                                    <div className='my-16'>
                                        <h3 className='text-[16px] font-extrabold'>Business Fixed Price</h3>

                                        <div className='text-[15px] flex space-x-2 mt-10'>
                                            <p className='text-grey5 border-[1.5px] border-grey6 py-2 px-4 rounded-[12px] select-none'>AUD$</p>
                                            
                                            <input 
                                                type="number" 
                                                id='fixedPrice'
                                                className='border-[1.5px] border-grey6 text-grey5 rounded-[12px] py-2 px-4 w-[150px]'
                                                placeholder='0.00'
                                            />
                                        </div>
                                    </div>

                                    <div className='my-16'>
                                        <h3 className='text-[16px] font-extrabold'>Package Pricing</h3>

                                        <div className='flex space-x-6 mt-10'>
                                            
                                            <div className=' space-y-8'>
                                                <div className=' flex flex-col items-center space-y-[10px]'>
                                                    <label 
                                                        htmlFor='basic'
                                                        className=' bg-[#FE9B07] rounded-[12px] text-white text-center w-[160px] py-[35px] font-extrabold text-[14px]'
                                                    >
                                                        Basic
                                                    </label>
                                                
                                                    <textarea
                                                        rows={5}
                                                        cols={10}
                                                        id='basicText'
                                                        className=' resize-none border-[1.5px] border-grey6 text-grey5 rounded-[12px] py-2 px-4 w-[160px] h-[200px] text-[12px]'
                                                        placeholder='Describe details of the offer'
                                                    />
                                                </div>

                                                <div>
                                                    <p className='text-[14px] ml-2.5 font-extrabold'>Price</p>

                                                    <div className='flex space-x-1 mt-5 text-[13px]'>
                                                        <p className='text-grey5 border-[1.5px] border-grey6 p-2 rounded-[12px] select-none'>AUD$</p>
                                                    
                                                        <input 
                                                            type="number" 
                                                            id='basicPrice'
                                                            className='border-[1.5px] border-grey6 text-grey5 rounded-[12px] p-2 w-[80px]'
                                                            placeholder='0.00'
                                                        />
                                                    </div>

                                                </div>
                                            </div>

                                            <div className=' space-y-8'>
                                                <div className='flex flex-col items-center space-y-[10px] text-[13px]'>
                                                    <label 
                                                        htmlFor='standard'
                                                        className=' bg-[#FE9B07] rounded-[12px] text-white text-center w-[160px] py-[35px] font-extrabold text-[14px]'
                                                    >
                                                        Standard
                                                    </label>
                                                
                                                    <textarea 
                                                        rows={5}
                                                        cols={10} 
                                                        id='standardText'
                                                        className=' resize-none border-[1.5px] border-grey6 text-grey5 rounded-[12px] py-2 px-4 w-[160px] h-[200px] text-[12px]'
                                                        placeholder='Describe details of the offer'
                                                    />
                                                </div>

                                                <div>
                                                    <p className='text-[14px] ml-2.5 font-extrabold'>Price</p>

                                                    <div className='flex space-x-1 mt-5 text-[13px]'>
                                                        <p className='text-grey5 border-[1.5px] border-grey6 p-2 rounded-[12px] select-none'>AUD$</p>
                                                    
                                                        <input 
                                                            type="number" 
                                                            id='standardPrice'
                                                            className='border-[1.5px] border-grey6 text-grey5 rounded-[12px] p-2 w-[80px]'
                                                            placeholder='0.00'
                                                        />
                                                    </div>

                                                </div>
                                            
                                            </div>


                                            <div className=' space-y-8'>
                                                <div className='flex flex-col items-center space-y-[10px] text-[13px]'>
                                                    <label 
                                                        htmlFor='premium'
                                                        className=' bg-[#FE9B07] rounded-[12px] text-white text-center w-[160px] py-[35px] font-extrabold text-[14px]'
                                                    >
                                                        Premium
                                                    </label>
                                                
                                                    <textarea 
                                                        rows={5}
                                                        cols={10} 
                                                        id='standardText'
                                                        className=' resize-none border-[1.5px] border-grey6 text-grey5 rounded-[12px] py-2 px-4 w-[160px] h-[200px] text-[12px]'
                                                        placeholder='Describe details of the offer'
                                                    />
                                                </div>

                                                <div>
                                                    <p className='text-[14px] ml-2.5 font-extrabold'>Price</p>

                                                    <div className='flex space-x-1 mt-5 text-[13px]'>
                                                        <p className='text-grey5 border-[1.5px] border-grey6 p-2 rounded-[12px] select-none'>AUD$</p>
                                                    
                                                        <input 
                                                            type="number" 
                                                            id='standardPrice'
                                                            className='border-[1.5px] border-grey6 text-grey5 rounded-[12px] p-2 w-[80px]'
                                                            placeholder='0.00'
                                                        />
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='my-16'>
                                        <h3 className='text-[16px] font-extrabold'>Hourly Rate</h3>

                                        <div className='mt-10'>
                                            <p className='text-[14px] ml-2.5'>Price</p>

                                            <div className='flex space-x-3 mt-5 items-center'>
                                                <div className='flex space-x-1  text-[13px]'>
                                                    <p className='text-grey5 border-[1.5px] border-grey6 p-2 rounded-[12px] select-none'>AUD$</p>
                                            
                                                    <input 
                                                        type="number" 
                                                        id='standardPrice'
                                                        className='border-[1.5px] border-grey6 text-grey5 rounded-[12px] p-2 w-[80px]'
                                                        placeholder='0.00'
                                                    />
                                                </div>

                                                <h3 className='font-extrabold text-grey5'>PER HOUR</h3>
                                            </div>
                                        </div>
                                    </div>
                           
                                </div>
                            )}

                            {currentStep === 3 && (
                                <div>
                                    <h1 className='text-lg font-extrabold'>LOCATION</h1>

                                    <div className='my-14'>
                                        <h3 className='text-md font-extrabold mb-8'>Kindly Provide detailed location of your Business</h3>

                                        <div className='flex items-center'>
                                            <div className='flex flex-col text-[15px] '>
                                                <label  
                                                    htmlFor="streetNumber"
                                                    className='font-semibold mb-4'
                                                >
                                                    Street Number <span className={`text-red10`}>*</span>
                                                </label>

                                                <input
                                                    type='number'
                                                    name="streetNumber" 
                                                    id="streetNumber" 
                                                    className='border-grey4 border-[1.5px] rounded-lg p-2 shadow-lg ml-3 w-[100px]'
                                                />
                                            </div>

                                            <div className='flex flex-col text-[15px] ml-10 '>
                                                <label  
                                                    htmlFor="streetName"
                                                    className='font-semibold mb-4'
                                                >
                                                    Street Name <span className={`text-red10`}>*</span>
                                                </label>

                                                <input
                                                    type='text'
                                                    name="streetName" 
                                                    id="streetName" 
                                                    className='border-grey4 border-[1.5px] rounded-lg p-2 shadow-lg ml-3 w-[400px]'
                                                />
                                            </div>
                                        </div>

                                        <div className='flex flex-col text-[15px] my-10'>
                                            <label  
                                                htmlFor="unitNumber"
                                                className='font-semibold mb-4'
                                            >
                                                Unit Number
                                            </label>

                                            <input
                                                type='number'
                                                name="unitNumber" 
                                                id="unitNumber" 
                                                className='border-grey4 border-[1.5px] rounded-lg p-2 shadow-lg ml-3 w-[100px]'
                                            />
                                        </div>

                                        <div className='flex items-center'>
                                            <div className='flex flex-col text-[15px] '>
                                                <label  
                                                    htmlFor="suburb"
                                                    className='font-semibold mb-4'
                                                >
                                                    Suburb <span className={`text-red10`}>*</span>
                                                </label>

                                            
                                                <input
                                                   type="text"
                                                   id='suburb'
                                                   name='suburb'
                                                   className='border-grey4 border-[1.5px] rounded-lg ml-3 p-2 w-[200px]'
                                                />
                                                 
                                            </div>

                                            <div className='flex flex-col text-[15px] ml-10 '>
                                                <label  
                                                    htmlFor="state"
                                                    className='font-semibold mb-4'
                                                >
                                                    State <span className={`text-red10`}>*</span>
                                                </label>

                                                <select
                                                    name="state" 
                                                    id="state" 
                                                    className='border-grey4 border-[1.5px] rounded-lg ml-3 p-2 w-[350px]'
                                                > 
                                                    <option value="" disabled>--Select State--</option>
                                                    <option value="Western Australia">Western Australia</option>
                                                    <option value="Northern Territory">Northern Territory</option>
                                                    <option value="South Australia">South Australia</option>
                                                    <option value="Queensland">Queensland</option>
                                                    <option value="New South Wales">New South Wales</option>
                                                    <option value="Victoria">Victoria</option>
                                                    <option value="Tasmania">Tasmania</option>
                                                    <option value="Australian Capital Territory">Australian Capital Territory</option>
                                                </select>
                                            </div>
                                        </div>
                                        
                                        <div className='flex flex-col text-[15px] my-10 '>
                                            <label  
                                                htmlFor="postCode"
                                                className='font-semibold mb-4'
                                            >
                                                Post Code <span className={`text-red10`}>*</span>
                                            </label>

                                            <input
                                               type="number"
                                               id='postCode' 
                                               name='postCode'
                                               className='border-grey4 border-[1.5px] rounded-lg p-2 shadow-lg ml-3 w-[200px]'
                                                // readOnly
                                            />
                                        </div>

                                    </div>

                                    <div className='my-16'>
                                        <h3 className='text-md font-extrabold mb-5'>BUSINESS IMAGE</h3>
                                        <p className='text-[13px] font-semibold'>Images (up to 3) <br />Get noticed by the right buyers with visual examples of your services</p>
                                        {/* <p></p> */}
                                        
                                        <div className='flex text-[15px] mt-10 w-[350px] justify-between'>
                                        <input
                                            type='file'
                                            name="image1" 
                                            id="image1" 
                                            className='file:h-[100px] file:w-[100px] file:bg-transparent file:rounded-lg file:border-[1.5px] file:border-grey4 w-[100px]' 
                                            // readOnly
                                        />

                                        <input
                                            type='file'
                                            name="image1" 
                                            id="image1" 
                                            className='file:h-[100px] file:w-[100px] file:bg-transparent file:rounded-lg file:border-[1.5px] file:border-grey4 w-[100px]' 
                                            // readOnly
                                        />

                                        <input
                                            type='file'
                                            name="image1" 
                                            id="image1" 
                                            className='file:h-[100px] file:w-[100px] file:bg-transparent file:rounded-lg file:border-[1.5px] file:border-grey4 w-[100px]' 
                                            // readOnly
                                        />
                                        </div>

                                            {/* <p  className='text-[11px] text-grey4 flex justify-end mt-2'>(maximum of 500 characters)</p> */}
                                    </div>
                                
                                </div>
                            )}

                        </form>
                    
                        <div className='w-full mt-16 relative'>
                            {currentStep > 0 && 
                                <button
                                className='absolute left-0 bottom-0 flex items-center hover:text-[#FE9B07]'
                                onClick={previous}
                            >
                               <span className='mr-2'><FaArrowLeft /></span> Back
                            </button>
                            }
                            
                          
                            <button 
                                className='bg-black py-3 px-6 rounded-lg text-white absolute right-0 bottom-0 hover:text-[#FE9B07]'
                                onClick={next}
                            >
                                Save & Continue
                            </button>
                        
                        </div>
                </div>

                           
        </SPDashboardLayout>
    );
}
 
export default PostRequest;
