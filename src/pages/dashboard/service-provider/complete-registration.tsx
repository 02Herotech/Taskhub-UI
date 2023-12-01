import React from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useState } from 'react';
import axios from 'axios';
import Link from 'next/link';

import DashboardLayout from "../../../../components/dashboardLayout";



interface FormState {
    houseNumber: string,
    streetName : string,
    town: string,
    state: string,
    postCode: string,
    country: string,
    id: string,
    idNumber: string
}

const CompleteRegistration = () => {

    const [formData, setFormData] = useState({
        houseNumber: "",
        streetName: "",
        town: "",
        state: "",
        postCode: "",
        country: "Australia",
        id: "",
        idNumber: ""
      });

      

      const[isLoading, setIsLaoding] = useState(false);
    //   const [showOldPassword, setShowOldPassword] = useState(false);
    //   const [showNewPassword, setShowNewPassword] = useState(false);
    //   const [showConfirmNewPassword, setshowConfirmNewPassword] = useState(false);


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
            "houseNumber",
            "streetName",
            "town",
            "state",
            'postCode',
            'id',
            'idNumber'
        ];
        return requiredFields.every((field) => formData[field] !== "");
      };


    //   To reset form fields after submission 
      const resetForm = () => {
        setFormData({
            houseNumber: "",
            streetName: "",
            town: "",
            state: "",
            postCode: "",
            country: "Austraila",
            id: "",
            idNumber: ""
        })
      }


    // // To check active link 
    // const router = useRouter();
    // const isLinkActive = (linkPath: string) => {
    //   return router.pathname === linkPath;
    // };



    // To submit formit 

    const houseNumberValue = formData.houseNumber;
    const streetNameValue = formData.streetName;
    const townValue = formData.town;
    const stateValue = formData.state;
    const postCodeValue = formData.postCode;
    const countryValue = formData.country;
    const idValue = formData.id;
    const idNumberValue = formData.idNumber;



    const {data: session} = useSession()
    const accessTokenValue = session?.user.accessToken;

    const handleSubmit = async (e: {preventDefault: () => void}) => {
        e.preventDefault()
        console.log(formData)

            // try {
            //     const response = await axios.post(
            //         `https://service-rppp.onrender.com/api/v1/customer/complete?token=${accessTokenValue}`,
            //     {
            //         houseNumber: houseNumberValue,
            //         streetName: streetNameValue,
            //         town: townValue,
            //         state: stateValue,
            //         postCode: postCodeValue,
            //         country: countryValue,
            //     }
            //     )
            //     console.log(response)
            // } catch (error) {
            //    console.error("Unable to complete reg: ", error);
            // }

            resetForm()
    
    }
    

    return (
        <DashboardLayout>
            <div className={`mt-16 flex flex-col justify-center items-start w-[900px]`}>
         
                <h1 className='text-lg font-extrabold'>Complete Registration</h1>

                <div className={`flex justify-center items-start my-20 w-[800px] mx-auto`}>

                    <div className='w-[800px] bg-white shadow-lg p-5'>

                  
                            <form className={`p-5`} onSubmit={handleSubmit}>
                                
                                <div className='flex justify-around'>

                                    <div className={`flex flex-col w-[300px]`}>

                                        <label htmlFor="houseNumber" 
                                        className={`font-bold text-[16px] my-3 flex items-center w-[500px] h-[30px]`}>
                                            House Number
                                            <span className={`text-red10`}>*</span>
                                        </label>
                                        <input type='number' 
                                            id='houseNumber' 
                                            name='houseNumber' 
                                            placeholder='Enter house number' 
                                            className={`border-medium border-[1px] text-base text-black font-bold py-3 px-5 rounded-xl w-full`} 
                                            value={formData.houseNumber} 
                                            onChange={handleChange} 
                                            required 
                                            maxLength={15}
                                            // autoComplete='current-passowrd'
                                        />
                                    </div>


                                    <div className={`flex flex-col w-[300px]`}>
                                        <label htmlFor="streetName" 
                                        className={`font-bold text-[16px] my-3 flex  items-center w-[500px] h-[30px] `}>
                                            Street Name
                                            <span className={`text-red10`}>*</span>
                                        </label>
                                        <input type='text'
                                            id='streetName' 
                                            name='streetName' 
                                            placeholder='Enter street name' 
                                            className={`border-medium border-[1px] text-base text-black font-bold py-3 px-5 rounded-xl w-full`} 
                                            value={formData.streetName} 
                                            onChange={handleChange} 
                                            required 
                                            // maxLength={15}
                                            // autoComplete='new-passowrd'
                                        />
                                    </div>

                                </div>

                                <div className='flex justify-around my-3'>

                                    <div className={`flex flex-col w-[300px]`}>
                                        <label htmlFor="town" 
                                        className={`font-bold text-[16px] my-3 flex  items-center w-[500px] h-[30px] `}>
                                            Town
                                            <span className={`text-red10`}>*</span>
                                        </label>
                                        <input type='text'
                                            id='town' 
                                            name='town' 
                                            placeholder='Enter town name' 
                                            className={`border-medium border-[1px] text-base text-black font-bold py-3 px-5 rounded-xl w-full`} 
                                            value={formData.town} 
                                            onChange={handleChange} 
                                            required 
                                            // maxLength={15}
                                            // autoComplete='new-passowrd'
                                        />
                                    </div>

                                    <div className={`flex flex-col w-[300px]`}>
                                        <label htmlFor="state" 
                                        className={`font-bold text-[16px] my-3 flex  items-center w-[500px] h-[30px] `}>
                                            State
                                            <span className={`text-red10`}>*</span>
                                        </label>
                                        <input type='text'
                                            id='state' 
                                            name='state' 
                                            placeholder='Enter state name' 
                                            className={`border-medium border-[1px] text-base text-black font-bold py-3 px-5 rounded-xl w-full`} 
                                            value={formData.state} 
                                            onChange={handleChange} 
                                            required 
                                            // maxLength={15}
                                            // autoComplete='new-passowrd'
                                        />
                                    </div>

                                </div>

                                <div className='flex justify-around my-3'>

                                    <div className={`flex flex-col w-[300px]`}>

                                        <label htmlFor="postCode" 
                                        className={`font-bold text-[16px] my-3 flex items-center w-[500px] h-[30px] appearance-none`}>
                                            Post Code
                                            <span className={`text-red10`}>*</span>
                                        </label>
                                        <input type='number'
                                            id='postCode' 
                                            name='postCode' 
                                            placeholder='Enter house number' 
                                            className={`border-medium border-[1px] text-base text-black font-bold py-3 px-5 rounded-xl w-full`} 
                                            value={formData.postCode} 
                                            onChange={handleChange} 
                                            required 
                                            maxLength={15}
                                            // autoComplete='current-passowrd'
                                        />
                                    </div>  

                                    <div className={`flex flex-col w-[300px]`}>
                                        <label htmlFor="country" 
                                        className={`font-bold text-[16px] my-3 flex  items-center w-[500px] h-[30px] `}>
                                            Country
                                            <span className={`text-red10`}>*</span>
                                        </label>
                                        <input type='text'
                                            id='country' 
                                            name='country' 
                                            // placeholder='Enter country name' 
                                            className={`border-medium border-[1px] text-base text-black font-bold py-3 px-5 rounded-xl w-full`} 
                                            value={formData.country} 
                                            required
                                            onChange={handleChange} 
                                            readOnly
                                        />
                                    </div>

                                </div>

                                <div className='flex justify-around my-3'>

                                    <div className={`flex flex-col w-[300px]`}>

                                        <label htmlFor="id" 
                                        className={`font-bold text-[16px] my-3 flex items-center w-[500px] h-[30px] appearance-none`}>
                                            ID Type
                                            <span className={`text-red10`}>*</span>
                                        </label>
                                        <select name="id" 
                                        id="id"
                                        className='border-medium border-[1px] text-base text-black font-bold py-3 px-5 rounded-xl w-full'
                                        value={formData.id} 
                                        onChange={handleChange} 
                                        required 
                                        >
                                            <option value="International Passport<">International Passport</option>
                                            <option value="Drivers Licence">Drivers Licence</option>
                                            <option value="National ID">National ID</option>
                                        </select>
                                    </div>  

                                    <div className={`flex flex-col w-[300px]`}>

                                        <label htmlFor="idNumber" 
                                        className={`font-bold text-[16px] my-3 flex items-center w-[500px] h-[30px] appearance-none`}>
                                            ID Number
                                            <span className={`text-red10`}>*</span>
                                        </label>
                                        <input type='text'
                                            id='idNumber' 
                                            name='idNumber' 
                                            placeholder='Enter ID number' 
                                            className={`border-medium border-[1px] text-base text-black font-bold py-3 px-5 rounded-xl w-full`} 
                                            value={formData.idNumber} 
                                            onChange={handleChange} 
                                            required 
                                            // maxLength={15}
                                            // autoComplete='current-passowrd'
                                        />

                                    </div>  

                                </div>

                                <div className={`flex flex-col mx-auto w-[300px]`}>

                                    <label htmlFor="id" 
                                    className={`font-bold text-[16px] my-3 flex items-center w-[500px] h-[30px] appearance-none`}>
                                        ID Type
                                        <span className={`text-red10`}>*</span>
                                    </label>
                                    <input type='file'
                                            id='id' 
                                            name='id' 
                                            placeholder='Upload ID' 
                                            className={`border-medium border-[1px] text-base text-black font-bold py-3 px-5 rounded-xl w-full`} 
                                            value={formData.id} 
                                            onChange={handleChange} 
                                            required 
                                            // maxLength={15}
                                            // autoComplete='new-passowrd'
                                        />
                                </div>

                                <div className={`flex justify-center items-center mt-16 w-[300px] mx-auto`}>
                                    <button
                                        type="submit"
                                        className={`w-full bg-purpleBase text-white py-2 px-4 rounded-md hover:bg-purple7 text-sm disabled:opacity-50`}
                                        disabled={!isAllFieldsFilled() }>
                                        {!isLoading ? "Save Changes" : "Saving..."}
                                    </button>
                                </div>
                            </form>
             
            
                        {/* <div className="text-red4 text-[13px] text-center h-[20px] flex items-center justify-center">{error}</div> */}
                    
                    </div>
                    

                </div>
                
            </div>
        </DashboardLayout>
    );
}
 
export default CompleteRegistration;
