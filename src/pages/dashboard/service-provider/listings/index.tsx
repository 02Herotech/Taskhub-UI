import React, { useState } from 'react';
import { AiOutlineRight  } from "react-icons/ai";
import { FaArrowLeft } from "react-icons/fa6";


import SPDashboardLayout from '../../../../../components/spdashboardLayout';
import customer from "../../../../public/dashboardAssets/portrait.jpg";
import styles from "../customer/styles.module.scss"
import Image from 'next/image';
import {MdVerified} from "react-icons/md";
import {GrLocation, GrSearch} from "react-icons/gr";
import Card from "../../../../../components/card2/Card";
import Picture1 from "../../../../public/customerAssets/close-up-collection-make-up-beauty-products.jpg";
import Picture2 from "../../../../public/customerAssets/vintage-sewing-machine-with-thread-measuring-tape.jpg";

interface FormState {
    businessName: string;
    serviceCategoies: string;
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
    houseNumber: string;
    streetName: string;
    town: string;
    state: string;
    country: string;
    image1: File | undefined;
    image2: File | undefined;
    image3: File | undefined;
}

const PostRequest = () => {

    const step = [
        {id: '1', name: 'Business Name'},
        {id: '2', name: ' Description & Status'},
        {id: '3', name: 'Pricing'},
        {id: '4', name: 'Location & Image'}
    ]

    // console.log("step lenght: ", step.length)

    const [formData, setFormData] = useState({
        businessName: '',
        serviceCategoies: '',
        serviceDescription: '',
        serviceName: '',
        pricing: '',
        availableDays: '',
        available: '',
        startMinute: '',
        startHour: '',
        closeMinute: '',
        closeHour: '',
        houseNumber: '',
        streetName: '',
        town: '',
        state: '',
        country: '',
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

    
    //   To check all required fields 
    const isAllFieldsFilled = () => {
        const requiredFields: (keyof FormState)[] = [
            "businessName",
            "serviceCategoies",
            "serviceDescription",
            "serviceName",
            "pricing",
            "availableDays",
            "available",
            "startMinute",
            "startHour",
            "closeMinute",
            "closeHour",
            "houseNumber",
            "streetName",
            "town",
            "state",
            "country",
            "country",
            "image1",
            "image2",
            "image3"
        ];
        return requiredFields.every((field) => formData[field] !== "");
      };

    //   To reset the form

      const resetForm = () => {
        setFormData({
            businessName: '',
            serviceCategoies: '',
            serviceDescription: '',
            serviceName: '',
            pricing: '',
            availableDays: '',
            available: '',
            startMinute: '',
            startHour: '',
            closeMinute: '',
            closeHour: '',
            houseNumber: '',
            streetName: '',
            town: '',
            state: '',
            country: '',
            image1: undefined,
            image2: undefined,
            image3: undefined
        })
      }


    //   To go to next step

    const [currentStep, setCurrentStep] = useState(0)

    const next = () => {
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
                
                <div className='my-16 flex flex-col justify-center items-start w-[800px]'>

                        
                        <form>

                            {currentStep === 0 && (
                                <div >
                                    <h1 className='text-lg font-extrabold'>Bussiness Name</h1>

                                    <div className='my-20'>
                                        <div className='flex justify-start text-[15px]'>
                                            <label 
                                            htmlFor="businessTitle"
                                            className='font-semibold mt-2 mr-10 w-[110px]'
                                            >
                                                Business Title
                                            </label>

                                            <textarea 
                                                name="businessTitle" 
                                                id="businessTitle" 
                                                cols={50}
                                                rows={5}
                                                className='resize-none border-grey4 border-[1.5px] rounded-lg p-2 shadow-lg'
                                            />
                                        </div>

                                        <p  className='text-[11px] text-grey4 flex justify-end mt-2'>(maximum of 50 characters)</p>
                                    </div>

                                    <div className='flex justify-start text-[15px] my-20'>
                                        <label 
                                            htmlFor="category"
                                            className='font-semibold mt-2 mr-10 w-[110px]'
                                        >
                                            Category
                                        </label>

                                        <select
                                            name="category" 
                                            id="category" 
                                            className='border-grey4 border-[1.5px] rounded-lg p-2 w-[300px]'
                                        >
                                            <option value="" className='text-grey4'>--Select Category--</option>
                                            <option value="Gardener">Gardener</option>
                                            <option value="Tech">Tech</option>
                                            <option value="Mechanic">Mechanic</option>
                                            <option value="Laundry">Laundry</option>
                                            <option value="Caterer">Caterer</option>

                                        </select>


                                    </div>
                                    
                                </div>
                                
                            )}

                            {currentStep === 1 && (
                               <div >
                                    <h1 className='text-lg font-extrabold'>Description & Availability</h1>

                                    <div className='my-16'>
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
                                                    className='resize-none border-grey4 border-[1.5px] rounded-lg p-2 shadow-lg ml-10'
                                                />
                                            </div>

                                            <p  className='text-[11px] text-grey4 flex justify-end mt-2'>(maximum of 500 characters)</p>
                                    </div>

                                    <div className='my-16'>
                                        <h3 className='text-md font-extrabold mb-5'>Availability</h3>
                                        <div className='flex flex-col text-[15px] ml-5'>
                                            <label  
                                                    htmlFor="businessTitle"
                                                    className='font-semibold mb-10'
                                            >
                                                Choose your business working Days and Hour 
                                            </label>

                                            <select
                                                name="availability" 
                                                id="availability" 
                                                className='border-grey4 border-[1.5px] rounded-lg p-2 w-[300px]'
                                            >
                                                <option value="" className='text-grey4'>--Select Category--</option>
                                                <option value="Gardener">Gardener</option>
                                                <option value="Tech">Tech</option>
                                                <option value="Mechanic">Mechanic</option>
                                                <option value="Laundry">Laundry</option>
                                                <option value="Caterer">Caterer</option>

                                            </select>
                                        </div>

                                            {/* <p  className='text-[11px] text-grey4 flex justify-end mt-2'>(maximum of 500 characters)</p> */}
                                    </div>
                               
                                </div>
                            )}

                            {currentStep === 2 && (
                                <div >
                                <h1 className='text-lg font-extrabold'>Description & Availability</h1>

                                <div className='my-16'>
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
                                                className='resize-none border-grey4 border-[1.5px] rounded-lg p-2 shadow-lg ml-10'
                                            />
                                        </div>

                                        <p  className='text-[11px] text-grey4 flex justify-end mt-2'>(maximum of 500 characters)</p>
                                </div>

                                <div className='my-16'>
                                    <h3 className='text-md font-extrabold mb-5'>Availability</h3>
                                    <div className='flex flex-col text-[15px] ml-5'>
                                        <label  
                                                htmlFor="businessTitle"
                                                className='font-semibold mb-10'
                                        >
                                            Choose your business working Days and Hour 
                                        </label>

                                        <select
                                            name="availability" 
                                            id="availability" 
                                            className='border-grey4 border-[1.5px] rounded-lg p-2 w-[300px]'
                                        >
                                            <option value="" className='text-grey4'>--Select Category--</option>
                                            <option value="Gardener">Gardener</option>
                                            <option value="Tech">Tech</option>
                                            <option value="Mechanic">Mechanic</option>
                                            <option value="Laundry">Laundry</option>
                                            <option value="Caterer">Caterer</option>

                                        </select>
                                    </div>

                                        {/* <p  className='text-[11px] text-grey4 flex justify-end mt-2'>(maximum of 500 characters)</p> */}
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
                                                    Street Number
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
                                                    Street Name
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
                                                htmlFor="postalCode"
                                                className='font-semibold mb-4'
                                            >
                                                Postal Code
                                            </label>

                                            <input
                                                type='number'
                                                name="postalCode" 
                                                id="postalCode" 
                                                className='border-grey4 border-[1.5px] rounded-lg p-2 shadow-lg ml-3 w-[100px]'
                                            />
                                        </div>

                                        <div className='flex items-center'>
                                            <div className='flex flex-col text-[15px] '>
                                                <label  
                                                    htmlFor="city"
                                                    className='font-semibold mb-4'
                                                >
                                                    City
                                                </label>

                                            
                                                <select
                                                    name="city" 
                                                    id="city" 
                                                    className='border-grey4 border-[1.5px] rounded-lg ml-3 p-2 w-[200px]'
                                                >
                                                    <option value="" className='text-grey4'>--Select City--</option>
                                                    <option value="Gardener">Gardener</option>
                                                    <option value="Tech">Tech</option>
                                                    <option value="Mechanic">Mechanic</option>
                                                    <option value="Laundry">Laundry</option>
                                                    <option value="Caterer">Caterer</option>

                                                 </select>
                                            </div>

                                            <div className='flex flex-col text-[15px] ml-10 '>
                                                <label  
                                                    htmlFor="state"
                                                    className='font-semibold mb-4'
                                                >
                                                    State
                                                </label>

                                                <select
                                                    name="state" 
                                                    id="state" 
                                                    className='border-grey4 border-[1.5px] rounded-lg ml-3 p-2 w-[350px]'
                                                >
                                                <option value="" className='text-grey4'>--Select State--</option>
                                                <option value="Gardener">Gardener</option>
                                                <option value="Tech">Tech</option>
                                                <option value="Mechanic">Mechanic</option>
                                                <option value="Laundry">Laundry</option>
                                                <option value="Caterer">Caterer</option>

                                                </select>
                                            </div>
                                        </div>
                                        
                                        <div className='flex flex-col text-[15px] my-10 '>
                                            <label  
                                                htmlFor="country"
                                                className='font-semibold mb-4'
                                            >
                                                Country
                                            </label>

                                            <input
                                                type='text'
                                                name="country" 
                                                id="country" 
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
                    
                        <div className='w-full mt-10 relative'>
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
