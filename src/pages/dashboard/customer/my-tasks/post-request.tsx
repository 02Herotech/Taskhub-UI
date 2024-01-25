import React, { useState } from 'react';
import { useSession } from 'next-auth/react';
import axios from 'axios';
import { useRef } from 'react';
import { useRouter } from 'next/router';


import CustomerDashboardLayout from '../../../../../components/customerdashboardLayout';


interface FormState {
    taskServiceName: string;
    taskDescription: string;
    userAddress: string;
    customerBudget: string | number;
    taskImage: File | undefined;
    taskDate: Date | undefined
}

const PostRequest = () => {

    const [isLoading, setIsLoading] = useState(false)
    const [resMsg, setResMsg] = useState('')

    const route = useRouter();

    const taskDateRef = useRef<HTMLInputElement>(null);
    const taskImageRef = useRef<HTMLInputElement>(null);

    const [formData, setFormData] = useState({
        taskServiceName: '',
        taskDescription: '',
        userAddress: '',
        customerBudget: '',
        taskImage: undefined,
        taskDate: undefined
    })


const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
        ...prevData,
        [name]: value,
    }));
};


// To handle input type file

const handleImage = (e: any) => {
    setFormData((prevData) => ({
        ...prevData,
        taskImage: e.target.files[0]
    }));
}


const isAllFieldsFilled = () => {
    const requiredFields: (keyof FormState)[] = [
        'taskServiceName',
        'taskDescription',
        'userAddress',
        'customerBudget',
        'taskDate',
        // 'taskImage'
    ];
    return requiredFields.every((field) => {
        const value = formData[field];
        return typeof value === 'number' || (typeof value === 'string' && value.trim() !== '');
    });
};

//   To reset the form

  const resetForm = () => {
    setFormData({
        taskServiceName: '',
        taskDescription: '',
        userAddress: '',
        customerBudget: '',
        taskDate: undefined,
        taskImage: undefined
    })

      // Reset date input
      if (taskDateRef.current) {
        taskDateRef.current.value = '';
      }
  
      // Reset file input
      if (taskImageRef.current) {
        taskImageRef.current.value = '';
      }
  };

// To submit form

  const{data: session} = useSession()
  const userToken = session?.user.accessToken

  const handleSubmit = async (e: {preventDefault: () => void}) => {
    e.preventDefault()
    console.log(formData)
    setIsLoading(true)
    
    const apiFormData = new FormData()
    apiFormData.append("taskServiceName", formData.taskServiceName)
    apiFormData.append("taskDescription", formData.taskDescription)
    apiFormData.append("userAddress", formData.userAddress)
    apiFormData.append("customerBudget", formData.customerBudget)
    apiFormData.append("taskImage", formData.taskImage!)
    apiFormData.append("taskDate", formData.taskDate!)
    
    try {
        const response = await axios.post(
            `${process.env.NEXT_PUBLIC_API_URL}task/post`, 
            apiFormData,
          {
            headers: {
                Authorization: `Bearer ${userToken}`,
                "Content-Type": "multipart/form-data",
            }
        }
      )
    
      console.log(response)
      if (response.status === 200){
         setResMsg(response.data.message)
        }
      
    } catch (error) {
      console.log(error)
    } finally {
        resetForm()
        setIsLoading(false)
        setTimeout(() => {
            setResMsg('')
            route.push('/dashboard/customer/my-tasks')
        }, 3000);
    }
}

    return (
        <CustomerDashboardLayout>
             
            <div className={`mt-16 flex flex-col justify-center items-start w-[900px]`}>
                
                <h1 className='text-lg font-extrabold border-2 border-grey2 rounded-md p-2'>POST A REQUEST</h1>
            
                <div className='my-8 flex flex-col justify-center items-start w-[800px] p-8'>
                    <form className='flex flex-col'
                    onSubmit={handleSubmit}
                    > 
                        <p className='text-md font-extrabold my-5'>Request Details</p>

                        <input type="text"
                            placeholder='Title'
                            id='taskServiceName' 
                            name='taskServiceName'
                            value= {formData.taskServiceName}
                            className='p-2 border-2 border-grey2 rounded-md w-[300px] my-5'
                            required
                            onChange={handleChange}
                        />

                        <div className='w-[500px] my-5'>
                            <textarea
                                placeholder='Description'
                                cols={10}
                                rows={5}
                                id='taskDescription'
                                name='taskDescription'
                                value= {formData.taskDescription}
                                className=' resize-none p-2 border-2 border-grey2 rounded-md w-full '
                                required
                                onChange={handleChange}
                            />
                            <p className='text-[13px] flex justify-end text-grey4'>(maximum of 50 characters)</p>
                        </div>
                
                        <input type="text"
                            placeholder='Address'
                            id='userAddress'
                            name='userAddress'
                            value= {formData.userAddress}
                            className='p-2 border-2 border-grey2 rounded-md w-[500px] my-5'
                            required
                            onChange={handleChange}
                        />

                        <div className=' flex relative p-2 border-2 border-grey2 rounded-md w-[500px] my-5 focus:border-black '>
                            <p className='abosulte left-2 mr-2'>$</p>
                            <input 
                                type="number"
                                placeholder="Customer's Budget"
                                id='customerBudget' 
                                name='customerBudget'
                                value= {formData.customerBudget}
                                className='border-none outline-none w-full'
                                required
                                onChange={handleChange}
                            />
                        </div>

                        <input 
                            type="file" 
                            placeholder="jpg,png,pdf format"
                            id='taskImage' 
                            name='taskImage'
                            // value= {formData.taskImage}
                            className='p-2 border-2 border-grey2 rounded-md w-[300px] my-5'
                            required
                            onChange={handleImage}
                            ref={taskImageRef}
                        />

                        <input type="date"
                            placeholder='date'
                            id='taskDate'
                            name='taskDate'
                            // value= {formData.taskDate}
                            className='p-2 border-2 border-grey2 rounded-md w-[500px] my-5'
                            required
                            onChange={handleChange}
                            ref={taskDateRef}
                        />

                        <button 
                            type="submit"
                            className={` bg-[#34a853] text-white w-[180px] py-4 px-6 my-8 rounded-md hover:bg-[#46694f] text-sm disabled:opacity-50`}
                            disabled={!isAllFieldsFilled() || isLoading}
                        >
                        
                            {!isLoading ? "Save Changes" : "Saving..."}
                            
                        </button>

                    </form>

                    <p className='my-2 text-md'>{resMsg}</p>


                </div>
                    
            </div>
        </CustomerDashboardLayout>
    );
}
 
export default PostRequest;
