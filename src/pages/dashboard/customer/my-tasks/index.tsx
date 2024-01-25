import React, { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import axios from 'axios';
import { useRef } from 'react';
import Link from 'next/link';


import { CiCalendar } from "react-icons/ci";
import { FiMapPin } from "react-icons/fi";
import CustomerDashboardLayout from '../../../../../components/customerdashboardLayout';


interface taskData {
    id: number;
    active: boolean;
    customerBudget: number;
    posterId: number;
    taskServiceName: string;
    taskDescription: string;
    userAddress: string;
    postedAt: [string];
    taskImage: string;
    taskDates: [number]
}

const MyTask = () => {

    const catgeory = [
        {
            id: '1', 
            name: 'Active',
        },
        {
            id: '2', 
            name: ' Closed',
            
        },
        {
            id: '3', 
            name: 'All'
        },
    ]

    const [currentCategory, setcurrentCategory] = useState(0)

    const [isLoading, setIsLoading] = useState(true)
    const [taskData, setTaskData] = useState<taskData[]>([])


    const{data: session} = useSession()
    
    const hasEffectRun = useRef(false);

    const handleFetchTask =async () => {

        const userToken = session?.user?.accessToken
        console.log('usertoken:', userToken)

        try {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}task/active-tasks`,
                {
                    headers: {
                        Authorization: `Bearer ${userToken}`,
                        "Content-Type": "multipart/form-data",
                    }
                }
            )
            console.log('task response: ', response)
            setTaskData(response.data as taskData[])
            // setIsLoading(false)
            console.log('data: ', taskData)
        } catch (error) {
            console.log(error)
        }
        
    }


    useEffect(() => {
        if (!hasEffectRun.current) {
            const delay = 5000; 
            const timeoutId = setTimeout(() => {
                handleFetchTask();
            }, delay);
    
            return () => {
                clearTimeout(timeoutId);
            };
        }
    }, []);
    
    // to filter customer's task

        const filteredTasks = taskData
        .filter((task) => task.posterId === session?.user?.user.id)
        .sort((a, b) => {
        const dateA = new Date(a.taskDates[0]);
        const dateB = new Date(b.taskDates[0]);
        return dateB.getTime() - dateA.getTime(); // Sort in descending order
        });

 

    return (
        <CustomerDashboardLayout>
            <div className={`mt-16 flex flex-col justify-center items-start w-[900px]`}>
               <h1 className='text-lg font-extrabold border-2 border-grey2 rounded-md p-2'>MY TASKS</h1>

                <div className='flex w-[500px] justify-evenly items-center border'>
                    {catgeory.map((catgeory, index) => (
                        <div key={index}>
                            <p>{catgeory.name}</p>
                        </div>
                    ))}
                </div>  

                <div className='my-10 flex justify-around w-[700px]'>
                    <div className=' grid grid-cols-2 justify-between'>
                        {filteredTasks.map((task: taskData) => (
                            <div 
                                key={task.id}
                                className='border border-grey3 rounded-lg shadow-lg p-4 mx-10 my-5 w-[250px]'
                            >
                                <div className='flex justify-between items-center'>
                                    <h4 className='font-extrabold text-[18px]'>{task.taskServiceName}</h4>

                                    <div className='w-[12px] h-[12px] block rounded-[50%] border-[1.5px] border-green4 relative'>
                                        <span className='w-[6px] h-[6px] block rounded-[50%] bg-green4 absolute right-[1.5px] top-[1.5px]'></span>
                                    </div>
                                </div>

                                <div className='flex justify-between my-3 text-[13px]'>
                                    <p className=''>AUD$ {task.customerBudget}</p>

                                    <div className='flex items-center space-x-1'>
                                        <span className='text-[20px] '><CiCalendar /></span>
                                        <p>
                                            {task.taskDates.map((date) => {
                                            const currentDate = new Date(date);
                                            const day = currentDate.getDate();
                                            const monthName = currentDate.toLocaleDateString(undefined, { month: 'short' });
                                            const year = currentDate.getFullYear();
                                            return `${day} ${monthName}`;
                                            })}
                                        </p>
                                    </div>
                                </div>

                                <div className='text-[13px] flex items-center space-x-1'>
                                    <span><FiMapPin /></span>
                                    <p>{task.userAddress}</p>
                                </div>

                                {/* <p>Task ID: {task.id}</p> */}
                                {/* <p>Description Name: {task.taskDescription}</p> */}
                                {/* <p>active: {task.active}</p> */}
                                {/* <img src={task.taskImage} alt={`Task ID: ${task.id}`} width="300" height="200" />                      */}
                            </div>
                        ))}
                    </div>
                </div>    

                
                <div
                    className='flex justify-center items-center w-[700px] my-4'
                >
                    <Link href='/dashboard/customer/my-tasks/post-request'>
                        <button
                            className='bg-purpleBase text-[15px] rounded-lg border-none px-4 py-2 text-white hover:bg-purpleHover'
                        >
                            Create New Task
                        </button>
                    </Link>
                </div>             
            </div>
        </CustomerDashboardLayout>
    );
}
 
export default MyTask;
