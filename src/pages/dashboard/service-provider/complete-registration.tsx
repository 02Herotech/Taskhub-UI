import React from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import Image from 'next/image';

import SPDashboardLayout from '../../../../components/spdashboardLayout';
import loader from '../../../../public/loader.svg';
import success from '../../../../public/success.svg';
import styles from '../../../styles/animation.module.css';



interface FormState {
    streetNumber: string,
    streetName : string,
    suburb: string,
    state: string,
    postCode: string,
    unitNumber: string,
    idImage: File | undefined,
    idType: string,
    idNumber: string
}

const CompleteRegistration = () => {

    const [formData, setFormData] = useState({
        streetNumber: "",
        streetName: "",
        suburb: "",
        state: "",
        postCode: "",
        unitNumber: "",
        idType: "",
        idNumber: "",
        idImage: undefined
      });

      

    
        const[isLoading, setIsLaoding] = useState(false);
        const[isDone, setIsDone] = useState(false)


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

    const handleImage = (e: any) => {
        setFormData((prevData) => ({
            ...prevData,
            idImage: e.target.files[0]
        }));
    }


    //   To check all required fields 
      const isAllFieldsFilled = () => {
        const requiredFields: (keyof FormState)[] = [
            "streetNumber",
            "streetName",
            "suburb",
            "state",
            'postCode',
            'idType',
            'idNumber',
            'idImage'
        ];
        return requiredFields.every((field) => formData[field] !== "");
      };


    //   To reset form fields after submission 
      const resetForm = () => {
        setFormData({
            streetNumber: "",
            streetName: "",
            suburb: "",
            state: "",
            postCode: "",
            unitNumber: "Australia",
            idType: "",
            idNumber: "",
            idImage: undefined
        })
      }



    // To submit formit 
     
    const {data: session} = useSession()
    const accessTokenValue = session?.user.accessToken;
    
    const handleSubmit = async (e: {preventDefault: () => void}) => {
        e.preventDefault()

        const apiFormData = new FormData()
        apiFormData.append("streetNumber", formData.streetNumber)
        apiFormData.append("streetName", formData.streetName)
        apiFormData.append("suburb", formData.suburb)
        apiFormData.append("state", formData.state)
        apiFormData.append("postCode", formData.postCode)
        apiFormData.append("unitNumber", formData.unitNumber)
        apiFormData.append("idImage", formData.idImage!)
        apiFormData.append("idType", formData.idType)
        apiFormData.append("idNumber", formData.idNumber)


        console.log(formData)
        
        setIsLaoding(true)
        
            try {
                const response = await axios.post(
                    `${process.env.NEXT_PUBLIC_API_URL}service_provider/complete?token=${accessTokenValue}`,
                    apiFormData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                      }
                }
                )

                console.log(response)
                
                if (response.status === 200){
                    setIsDone(!isDone)
                    setIsLaoding(false)
                }

            } catch (error) {
               console.error("Unable to complete reg: ", error);
            }

            resetForm()
    
    }
    

    return (
        <SPDashboardLayout>
            <div className={`mt-16 flex flex-col justify-center items-start w-[900px]`}>
         
                <h1 className='text-lg font-extrabold'>Complete Registration</h1>

                <div className={`flex justify-center items-start my-20 w-[800px] mx-auto`}>

                    { isDone ? 

                        <div className={`flex flex-col items-center justify-center mt-10 ${styles.animation}`}>
                        <div className={`w-[166px] h-[166px]`}>
                            <Image src={success} width={166} height={166} alt='' />
                        </div>
                        <p className="text-center mt-10">Your registration is complete and your account is verified. <br /> Kindly log out and login to effect your verification</p>
                        </div>

                        :

                        <div className='w-[800px] bg-white shadow-lg p-5'>

                                <form className={`p-5`} onSubmit={handleSubmit}>
                                    
                                    <div className='flex justify-around'>

                                        <div className={`flex flex-col w-[300px]`}>

                                            <label htmlFor="streetNumber" 
                                            className={`font-bold text-[16px] my-3 flex items-center w-[500px] h-[30px]`}>
                                                Street Number
                                                <span className={`text-red10`}>*</span>
                                            </label>
                                            <input type='number' 
                                                id='streetNumber' 
                                                name='streetNumber' 
                                                placeholder='Enter house number' 
                                                className={`border-medium border-[1px] text-base text-black font-bold py-3 px-5 rounded-xl w-full`} 
                                                value={formData.streetNumber} 
                                                onChange={handleChange} 
                                                required 
                                                maxLength={15}
                                            />
                                        </div>

                                        <div className={`flex flex-col w-[300px]`}>
                                            <label htmlFor="unitNumber" 
                                            className={`font-bold text-[16px] my-3 flex  items-center w-[500px] h-[30px] `}>
                                                Unit Number
                                            </label>
                                            <input type='text'
                                                id='unitNumber' 
                                                name='unitNumber' 
                                                className={`border-medium border-[1px] text-base text-black font-bold py-3 px-5 rounded-xl w-full`} 
                                                value={formData.unitNumber} 
                                                onChange={handleChange} 
                                            />
                                        </div>

                                    </div>

                                    <div className='flex justify-around my-3'>

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
                                            />
                                        </div>

                                        <div className={`flex flex-col w-[300px]`}>
                                            <label htmlFor="suburb" 
                                            className={`font-bold text-[16px] my-3 flex  items-center w-[500px] h-[30px] `}>
                                                Suburb
                                                <span className={`text-red10`}>*</span>
                                            </label>
                                            <input type='text'
                                                id='suburb' 
                                                name='suburb' 
                                                placeholder='Enter town name' 
                                                className={`border-medium border-[1px] text-base text-black font-bold py-3 px-5 rounded-xl w-full`} 
                                                value={formData.suburb} 
                                                onChange={handleChange} 
                                                required 
                                            />
                                        </div>


                                    </div>

                                    <div className='flex justify-around my-3'>

                                        <div className={`flex flex-col w-[300px]`}>
                                            <label htmlFor="state" 
                                            className={`font-bold text-[16px] my-3 flex  items-center w-[500px] h-[30px] `}>
                                                State
                                                <span className={`text-red10`}>*</span>
                                            </label>
                                            <select 
                                                name="state" 
                                                id="state"
                                                value= {formData.state}
                                                className={`border-medium border-[1px] text-base text-black font-bold py-3 px-5 rounded-xl w-full`} 
                                                required
                                                onChange={handleChange}
                                            >
                                                <option value="">--Select State--</option>
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
                                            />
                                        </div>  


                                    </div>

                                    <div className='flex justify-around my-3'>

                                        <div className={`flex flex-col w-[300px]`}>

                                            <label htmlFor="idType" 
                                            className={`font-bold text-[16px] my-3 flex items-center w-[500px] h-[30px] appearance-none`}>
                                                ID Type
                                                <span className={`text-red10`}>*</span>
                                            </label>
                                            <select name="idType" 
                                            id="idType"
                                            className='border-medium border-[1px] text-base text-black font-bold py-3 px-5 rounded-xl w-full'
                                            value={formData.idType} 
                                            onChange={handleChange} 
                                            required 
                                            >
                                                <option value="">--Select ID Type--</option>
                                                <option  value="International Passport">International Passport</option>
                                                <option value="Photo ID">Photo ID</option>
                                                <option value="Driver's Licence">Driver's Licence</option>
                                                <option value="Medicare Card">Medicare Card</option>
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
                                            />

                                        </div>  

                                    </div>

                                    <div className={`flex flex-col mx-auto w-[300px]`}>

                                        <label htmlFor="idImage" 
                                        className={`font-bold text-[16px] my-3 flex items-center w-[500px] h-[30px] appearance-none`}>
                                            ID Type
                                            <span className={`text-red10`}>*</span>
                                        </label>
                                        <input type='file'
                                                id='idImage' 
                                                name='idImage' 
                                                placeholder='Upload ID' 
                                                className={`border-medium border-[1px] text-base text-black font-bold py-3 px-5 rounded-xl w-full`} 
                                                // value={formData.idImage} 
                                                onChange={handleImage} 
                                                required 
                                            />
                                    </div>

                                    <div className={`flex justify-center items-center mt-16 w-[300px] mx-auto`}>
                                        <button
                                            type="submit"
                                            className={`w-full bg-[#34a853] text-white py-2 px-4 rounded-md hover:bg-[#46694f] text-sm disabled:opacity-50`}
                                            disabled={!isAllFieldsFilled() || isLoading}>
                                            {!isLoading ? "Save Changes" : "Saving..."}
                                        </button>
                                    </div>
                                </form>
                
                
                            {/* <div className="text-red4 text-[13px] text-center h-[20px] flex items-center justify-center">{error}</div> */}
                        
                        </div>
                    }       

                </div>
                
            </div>
        </SPDashboardLayout>
    );
}
 
export default CompleteRegistration;
