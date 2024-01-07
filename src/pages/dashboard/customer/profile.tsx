import React, { useState } from 'react';
import { useSession } from 'next-auth/react'
import axios from 'axios';

import CustomerDashboardLayout from '../../../../components/customerdashboardLayout';


interface FormState {
    streetNumber: string;
    streetName: string;
    unitNumber: string;
    suburb: string;
    state: string;
    postCode: string;
}




const Profile = () => {

    const [formData, setFormData] = useState({
        streetNumber: '',
        streetName: '',
        unitNumber: '',
        suburb: '',
        state: '',
        postCode: ''
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

    
    //   To check all required fields 
    const isAllFieldsFilled = () => {
        const requiredFields: (keyof FormState)[] = [
            'streetNumber',
            'streetName',
            'suburb',
            'state',
            'postCode'
        ];
        return requiredFields.every((field) => formData[field] !== "");
      };

    //   To reset the form

      const resetForm = () => {
        setFormData({
            streetNumber: '',
            streetName: '',
            unitNumber: '',
            suburb: '',
            state: '',
            postCode: ''
        })
      }


      
      const {data: session} = useSession()
      
      const firstNameValue = session?.user.user.firstName || '';
      const lastNameValue = session?.user.user.lastName || '';
      const eamilAddressValue = session?.user.user.emailAddress || '';
      const streetNumberValue = session?.user.user.address.streetNumber || '';
      const streetNameValue = session?.user.user.address.streetName || '';
      const suburbValue = session?.user.user.address.suburb || '';
      const postCodeValue = session?.user.user.address.postCode || '';
      const stateValue = session?.user.user.address.state || '';
      const unitNumberValue = session?.user.user.address.unitNumber || '';
      
      // To submit form 
  
      const handleSubmit = async (e: {preventDefault: () => void}) => {
          e.preventDefault()
          console.log(formData)

          const streetNumebrValue = formData.streetNumber
          const streetNameValue = formData.streetName
          const suburbValue = formData.suburb
          const postCodeValue = formData.postCode
          const stateValue = formData.state
          const unitNumberValue = formData.unitNumber

          try {
            const response = await axios.patch('http://54.198.113.229:8080/api/v1/customer/update', 
            [
                {
                    "op":"replace",
                    "path":"/user/address/streetNumber",
                    "value":{streetNumebrValue}
                },
                {
                    "op":"replace",
                    "path":"/user/address/streetName",
                    "value":{streetNameValue}
                },
                {
                    "op":"replace",
                    "path":"/user/address/suburb",
                    "value":{suburbValue}
                },
                {
                    "op":"replace",
                    "path":"/user/address/postCode",
                    "value":{postCodeValue}
                },
                {
                    "op":"replace",
                    "path":"/user/address/state",
                    "value":{stateValue}
                },
                {
                    "op":"replace",
                    "path":"/user/address/unitNumber",
                    "value":{unitNumberValue}
                }
            ]
            )

            console.log(response)
            
          } catch (error) {
            console.log(error)
          }
      }

    return (
            <CustomerDashboardLayout>
             <div className='mt-16 flex flex-col justify-center items-start w-[800px] p-8 border-2 border-grey2 rounded-md'>
                
                <h1 className='text-lg font-extrabold'>Profile</h1>

                <div className='flex flex-col my-8 w-[500px]'>
                    <div className='flex items-center justify-between my-4'>
                        <label htmlFor="fullName"
                        className='font-extrabold'
                        >
                            Full Name
                        </label>
                        <input type="text"
                        value={`${firstNameValue} ${lastNameValue}`}
                        readOnly
                        className='border-2 border-grey2 rounded-md p-2 w-[300px] focus:border-transparent focus:ring-0 '
                        />
                    </div>

                    <div className='flex  items-center justify-between my-4 '>
                    <label htmlFor="fullName"
                        className='font-extrabold'
                        >
                            Email
                        </label>
                        <input type="text"
                        value={eamilAddressValue}
                        readOnly
                        className='border-2 border-grey2 rounded-md p-2 w-[300px] focus:border-transparent focus:ring-0'
                        />
                    </div>
                </div>

                <div>
                    <h2 className='text-[18px] font-extrabold my-5'>
                        Address
                    </h2>

                    <form className='my-[50px]'
                        onSubmit={handleSubmit}
                    >

                        <div className='flex justify-between w-[700px] my-5'>
                            <div className='flex flex-col'>
                                <label htmlFor="streetNumber"
                                className='font-extrabold'
                                >
                                    Street Number  <span className={`text-red10`}>*</span>
                                </label>
                                <input type="number"
                                    id='streetNumber' 
                                    name='streetNumber'
                                    placeholder= {streetNumberValue}
                                    value= {formData.streetNumber}
                                    className='p-2 border-2 border-grey2 rounded-md w-[150px] my-3'
                                    onChange={handleChange}
                                />
                            </div>

                            <div className='flex flex-col'>
                                <label htmlFor="streetName"
                                    className='font-extrabold'
                                >
                                    Street Name  <span className={`text-red10`}>*</span>
                                </label>
                                <input type="text"
                                    id='streetName'
                                    name='streetName'
                                    placeholder= {streetNameValue}
                                    value= {formData.streetName}
                                    className='p-2 border-2 border-grey2 rounded-md w-[500px] my-3'
                                    required
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div className='flex justify-between w-[700px] my-5'>
                            <div className='flex flex-col'>
                                <label htmlFor="unitNumber"
                                className='font-extrabold'
                                >
                                    Unit Number
                                </label>
                                <input type="number"
                                    id='unitNumber' 
                                    name='unitNumber'
                                    placeholder={unitNumberValue}
                                    value= {formData.unitNumber}
                                    className='p-2 border-2 border-grey2 rounded-md w-[150px] my-3'
                                    onChange={handleChange}
                                />
                            </div>

                            <div className='flex flex-col'>
                                <label htmlFor="suburb"
                                    className='font-extrabold'
                                >
                                    Suburb  <span className={`text-red10`}>*</span>
                                </label>
                                <input type="text"
                                    id='suburb'
                                    name='suburb'
                                    placeholder={suburbValue}
                                    value= {formData.suburb}
                                    className='p-2 border-2 border-grey2 rounded-md w-[500px] my-3'
                                    required
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div className='flex justify-between w-[700px] my-5'>
                            <div className='flex flex-col'>
                                <label htmlFor="state"
                                    className='font-extrabold'
                                >
                                    State <span className={`text-red10`}>*</span>
                                </label>

                                <select 
                                    name="state" 
                                    id="state"
                                    value= {formData.state}
                                    className='p-2 border-2 border-grey2 rounded-md w-[500px] my-3'
                                    required
                                    onChange={handleChange}
                                >
                                    <option value='' disabled>{stateValue}</option>
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

                            <div className='flex flex-col'>
                                <label htmlFor="unitNumber"
                                className='font-extrabold'
                                >
                                    Post Code <span className={`text-red10`}>*</span>
                                </label>
                                <input type="number"
                                    id='postCode'
                                    name='postCode'
                                    placeholder={postCodeValue}
                                    value= {formData.postCode}
                                    className='p-2 border-2 border-grey2 rounded-md w-[150px] my-3'
                                    required
                                    onChange={handleChange}
                                />
                            </div>

                        </div>
                        
                        <button 
                            type="submit"
                            className={` bg-[#34a853] text-white py-4 px-6 rounded-md hover:bg-[#46694f] text-sm disabled:opacity-50`}
                            disabled={!isAllFieldsFilled() || isLoading}>
                        
                            {!isLoading ? "Save Changes" : "Saving..."}
                            
                        </button>

                    </form>
                </div>
            </div>
             
                
             
             
        </CustomerDashboardLayout>
    );
}
 
export default Profile;
