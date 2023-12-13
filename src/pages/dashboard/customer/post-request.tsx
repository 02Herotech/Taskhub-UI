import React, { useState } from 'react';


import CustomerDashboardLayout from '../../../../components/customerdashboardLayout';
import customer from "../../../../public/dashboardAssets/portrait.jpg";
import styles from "../customer/styles.module.scss"
import Image from 'next/image';
import {MdVerified} from "react-icons/md";
import {GrLocation, GrSearch} from "react-icons/gr";
import Card from "../../../../components/card2/Card";
import Picture1 from "../../../../public/customerAssets/close-up-collection-make-up-beauty-products.jpg";
import Picture2 from "../../../../public/customerAssets/vintage-sewing-machine-with-thread-measuring-tape.jpg";


interface FormState {
    jobTitle: string;
    jobDescription: string;
    category: string;
    address: string;
    budget: string;
    document: File | undefined;
}


const PostRequest = () => {

    
  const [formData, setFormData] = useState({
    jobTitle: '',
    jobDescription: '',
    category: '',
    address: '',
    budget: '',
    document: undefined
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

const handleFile = (e: any) => {
    setFormData((prevData) => ({
        ...prevData,
        document: e.target.files[0]
    }));
}


//   To check all required fields 
const isAllFieldsFilled = () => {
    const requiredFields: (keyof FormState)[] = [
        'jobTitle',
        'jobDescription',
        'category',
        'address',
        'budget',
        'document'
    ];
    return requiredFields.every((field) => formData[field] !== "");
  };

//   To reset the form

  const resetForm = () => {
    setFormData({
        jobTitle: '',
        jobDescription: '',
        category: '',
        address: '',
        budget: '',
        document: undefined
    })
  }

    return (
        <CustomerDashboardLayout>
             
            <div className={`mt-16 flex flex-col justify-center items-start w-[900px]`}>
                
                <h1 className='text-lg font-extrabold border-2 border-grey2 rounded-md p-2'>POST A REQUEST</h1>
            
                <div className='my-8 flex flex-col justify-center items-start w-[800px] p-8'>
                    <form className='flex flex-col'
                    // onSubmit={handleSubmit}
                    > 

                        <p className='text-md font-extrabold my-5'>Request Details</p>

                        <input type="text"
                            placeholder='Title'
                            id='jobTitle' 
                            name='jobTitle'
                            value= {formData.jobTitle}
                            className='p-2 border-2 border-grey2 rounded-md w-[300px] my-5'
                            required
                            onChange={handleChange}
                        />

                        <div className='w-[500px] my-5'>
                            <textarea
                                placeholder='Description'
                                cols={10}
                                rows={5}
                                id='jobDescription'
                                name='jobDescription'
                                value= {formData.jobDescription}
                                className=' resize-none p-2 border-2 border-grey2 rounded-md w-full '
                                required
                                onChange={handleChange}
                            />
                            <p className='text-[13px] flex justify-end text-grey4'>(maximum of 50 characters)</p>
                        </div>
        
                        <select 
                            name="category" 
                            id="category"
                            value= {formData.category}
                            className='p-2 border-2 border-grey2 rounded-md w-[500px] my-5'
                            required
                            onChange={handleChange}
                        >
                            <option value="" className='text-grey3'>--Select a Category--</option>
                            <option value="Western Australia">Tech</option>
                            <option value="Northern Territory">Plumber</option>
                            <option value="South Australia">Electrician</option>
                            <option value="Queensland">Mechanics</option>
                            <option value="New South Wales">Gardener</option>
                            <option value="Victoria">Painter</option>
                            <option value="Tasmania">Laundry</option>
                        </select>
                
                        <input type="text"
                            placeholder='Address'
                            id='address'
                            name='address'
                            value= {formData.address}
                            className='p-2 border-2 border-grey2 rounded-md w-[500px] my-5'
                            required
                            onChange={handleChange}
                        />

                        <div className=' flex relative p-2 border-2 border-grey2 rounded-md w-[500px] my-5 focus:border-black '>
                        <p className='abosulte left-2 mr-2'>$</p>
                        <input 
                            type="number"
                            placeholder="Customer's Budget"
                            id='budget' 
                            name='budget'
                            value= {formData.budget}
                            className='border-none outline-none w-full'
                            required
                            onChange={handleChange}
                        />
                        </div>

                        <input 
                            type="file" 
                            placeholder="jpg,png,pdf format"
                            id='document' 
                            name='document'
                            // value= {formData.budget}
                            className='p-2 border-2 border-grey2 rounded-md w-[300px] my-5'
                            required
                            onChange={handleFile}
                        />

                        <button 
                            type="submit"
                            className={` bg-[#34a853] text-white w-[180px] py-4 px-6 my-8 rounded-md hover:bg-[#46694f] text-sm disabled:opacity-50`}
                            disabled={!isAllFieldsFilled() || isLoading}>
                        
                            {!isLoading ? "Save Changes" : "Saving..."}
                            
                        </button>

                    </form>


                </div>
                    
            </div>
        </CustomerDashboardLayout>
    );
}
 
export default PostRequest;
