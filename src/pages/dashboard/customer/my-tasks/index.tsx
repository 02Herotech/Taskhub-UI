import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import axios from "axios";
import { useRef } from "react";
import Link from "next/link";

import { CiCalendar } from "react-icons/ci";
import { FiMapPin } from "react-icons/fi";
import CustomerDashboardLayout from "../../../../../components/customerdashboardLayout";
import { current } from "@reduxjs/toolkit";
import Image from "next/image";
import loader from "../../../../../public/taskhub-loader.gif";

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
  taskDates: [number];
}

const MyTask = () => {
  const catgeory = [
    {
      id: "1",
      name: "Open",
    },
    // {
    //   id: "2",
    //   name: " Closed",
    // },
    {
      id: "2",
      name: "Closed",
    },
    {
      id: "3",
      name: "All",
    },
  ];

  const [isLoading, setIsLoading] = useState(false);
  const [taskData, setTaskData] = useState<taskData[]>([]);
  const [activeTasks, setActiveTasks] = useState<taskData[]>([]);
  const [inactiveTasks, setInactiveTasks] = useState<taskData[]>([]);
  const { data: session } = useSession();
  const [currentCategory, setCurrentCategory] = useState<string>("Open");
  const [errorMsg, setErrorMsg] = useState("");

  const handleFetchTask = async () => {
    const userToken = session?.user?.accessToken;
    console.log("usertoken:", userToken);
    setIsLoading(true);

    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}task/active-tasks`,
        {
          headers: {
            Authorization: `Bearer ${userToken}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setIsLoading(false);
      const customerTasks = response.data
        .filter((task: taskData) => task.posterId === session?.user?.user.id)
        .sort((a: any, b: any) => b.id - a.id);
      setTaskData(customerTasks);

      console.log("task response: ", response);
      console.log("data: ", taskData);

      // setIsLoading(false)
    } catch (error) {
      console.log(error);
      setErrorMsg("Error loading task");
    } finally {
    }
  };

  useEffect(() => {
    handleFetchTask();
  }, []);

  // Update active and inactive tasks whenever taskData changes
  useEffect(() => {
    const activeTasksFiltered = taskData.filter((task) => task.active);
    const inactiveTasksFiltered = taskData.filter((task) => !task.active);
    console.log("inactiveTaskfiltered:", inactiveTasksFiltered);

    setActiveTasks(activeTasksFiltered);
    setInactiveTasks(inactiveTasksFiltered);

    console.log("Active tasks: ", activeTasks);
    console.log("Inactive tasks: ", inactiveTasks);
  }, [taskData]);

  return (
    <CustomerDashboardLayout>
      <div
        className={`my-16 flex flex-col justify-center items-start w-[900px]`}
      >
        <h1 className="text-lg font-extrabold border border-grey2 rounded-md p-2">
          MY TASKS
        </h1>

        <div className="flex justify-center mt-10 w-[700px]">
          <div className="flex w-[400px] justify-evenly items-center">
            {catgeory.map((category) => (
              <button
                key={category.id}
                onClick={() => {
                  setCurrentCategory(category.name);
                  handleFetchTask();
                }}
                className={`text-[15px] border py-1 px-4 rounded-3xl ${
                  category.name === currentCategory
                    ? "opacity-[100%]"
                    : "opacity-[50%]"
                }`}
              >
                <p>{category.name}</p>
              </button>
            ))}
          </div>
        </div>

        <div className="my-10 flex justify-around w-[700px]">
          <div>
            {currentCategory === "Open" && (
              <div className=" grid grid-cols-2 justify-between">
                {activeTasks.map((task) => (
                  <Link href={`/my-tasks/${task.id}`} key={task.id}>
                    <div className="border border-grey3 rounded-lg shadow-lg p-4 mx-10 my-5 w-[250px]">
                      <div className="flex justify-between items-center">
                        <h4 className="font-extrabold text-[18px]">
                          {task.taskServiceName}
                        </h4>

                        <div className="w-[12px] h-[12px] block rounded-[50%] border-[1.5px] border-green4 relative">
                          <span className="w-[6px] h-[6px] block rounded-[50%] bg-green4 absolute right-[1.5px] top-[1.5px]"></span>
                        </div>
                      </div>

                      <div className="flex justify-between my-3 text-[13px]">
                        <p className="">AUD$ {task.customerBudget}</p>
                        <p className="">Active {task.active}</p>

                        <div className="flex items-center space-x-1">
                          <span className="text-[20px] ">
                            <CiCalendar />
                          </span>
                          <p>
                            {task.taskDates.map((date) => {
                              const currentDate = new Date(date);
                              const day = currentDate.getDate();
                              const monthName = currentDate.toLocaleDateString(
                                undefined,
                                { month: "short" }
                              );
                              return `${day} ${monthName}`;
                            })}
                          </p>
                        </div>
                      </div>

                      <div className="text-[13px] flex items-center space-x-1">
                        <span>
                          <FiMapPin />
                        </span>
                        <p>{task.userAddress}</p>
                      </div>

                      {/* <p>Task ID: {task.id}</p> */}
                      {/* <p>Description Name: {task.taskDescription}</p> */}
                      {/* <p>active: {task.active}</p> */}
                      {/* <img src={task.taskImage} alt={`Task ID: ${task.id}`} width="300" height="200" />                      */}
                    </div>
                  </Link>
                ))}
              </div>
            )}

            {currentCategory === "Open" && activeTasks.length === 0 && (
              <div className="w-[700px] flex items-center justify-center h-[300px] ">
                <p className="text-center text-grey5 text-[15px]">
                  Open task is empty. <br /> Please use the button below to
                  create new task
                </p>
              </div>
            )}

            {/* <p className="text-center text-red4 text-[15px]">{errorMsg}</p> */}
          </div>

          <div>
            {currentCategory === "All" && (
              <div className=" grid grid-cols-2 justify-between">
                {taskData.map((task: taskData) => (
                  <Link href={`/my-tasks/${task.id}`} key={task.id}>
                    <div className="border border-grey3 rounded-lg shadow-lg p-4 mx-10 my-5 w-[250px]">
                      <div className="flex justify-between items-center">
                        <h4 className="font-extrabold text-[18px]">
                          {task.taskServiceName}
                        </h4>

                        <div className="w-[12px] h-[12px] block rounded-[50%] border-[1.5px] border-green4 relative">
                          <span className="w-[6px] h-[6px] block rounded-[50%] bg-green4 absolute right-[1.5px] top-[1.5px]"></span>
                        </div>
                      </div>

                      <div className="flex justify-between my-3 text-[13px]">
                        <p className="">AUD$ {task.customerBudget}</p>
                        <p className="">Active {task.active}</p>

                        <div className="flex items-center space-x-1">
                          <span className="text-[20px] ">
                            <CiCalendar />
                          </span>
                          <p>
                            {task.taskDates.map((date) => {
                              const currentDate = new Date(date);
                              const day = currentDate.getDate();
                              const monthName = currentDate.toLocaleDateString(
                                undefined,
                                { month: "short" }
                              );
                              return `${day} ${monthName}`;
                            })}
                          </p>
                        </div>
                      </div>

                      <div className="text-[13px] flex items-center space-x-1">
                        <span>
                          <FiMapPin />
                        </span>
                        <p>{task.userAddress}</p>
                      </div>

                      {/* <p>Task ID: {task.id}</p> */}
                      {/* <p>Description Name: {task.taskDescription}</p> */}
                      {/* <p>active: {task.active}</p> */}
                      {/* <img src={task.taskImage} alt={`Task ID: ${task.id}`} width="300" height="200" />                      */}
                    </div>
                  </Link>
                ))}
              </div>
            )}

            {currentCategory === "All" && taskData.length === 0 && (
              <div className="w-[700px] flex items-center justify-center h-[300px] ">
                <p className="text-center text-grey5 text-[15px]">
                  All task is empty. <br /> Please use the button below to get
                  started
                </p>
              </div>
            )}

            {/* <p className="text-center text-red4 text-[15px]">{errorMsg}</p> */}
          </div>

          <div>
            {currentCategory === "Closed" && (
              <div className=" grid grid-cols-2 justify-between">
                {inactiveTasks.map((task: taskData) => (
                  <Link href={`/my-tasks/${task.id}`} key={task.id}>
                    <div className="border border-grey3 rounded-lg shadow-lg p-4 mx-10 my-5 w-[250px]">
                      <div className="flex justify-between items-center">
                        <h4 className="font-extrabold text-[18px]">
                          {task.taskServiceName}
                        </h4>

                        <div className="w-[12px] h-[12px] block rounded-[50%] border-[1.5px] border-green4 relative">
                          <span className="w-[6px] h-[6px] block rounded-[50%] bg-green4 absolute right-[1.5px] top-[1.5px]"></span>
                        </div>
                      </div>

                      <div className="flex justify-between my-3 text-[13px]">
                        <p className="">AUD$ {task.customerBudget}</p>
                        <p className="">Active {task.active}</p>

                        <div className="flex items-center space-x-1">
                          <span className="text-[20px] ">
                            <CiCalendar />
                          </span>
                          <p>
                            {task.taskDates.map((date) => {
                              const currentDate = new Date(date);
                              const day = currentDate.getDate();
                              const monthName = currentDate.toLocaleDateString(
                                undefined,
                                { month: "short" }
                              );
                              return `${day} ${monthName}`;
                            })}
                          </p>
                        </div>
                      </div>

                      <div className="text-[13px] flex items-center space-x-1">
                        <span>
                          <FiMapPin />
                        </span>
                        <p>{task.userAddress}</p>
                      </div>

                      {/* <p>Task ID: {task.id}</p> */}
                      {/* <p>Description Name: {task.taskDescription}</p> */}
                      {/* <p>active: {task.active}</p> */}
                      {/* <img src={task.taskImage} alt={`Task ID: ${task.id}`} width="300" height="200" />                      */}
                    </div>
                  </Link>
                ))}
              </div>
            )}

            {currentCategory === "Closed" && inactiveTasks.length === 0 && (
              <div className="w-[700px] flex items-center justify-center h-[300px]">
                <p className="text-center text-grey5 text-[15px]">
                  Unfortunately, closed task is empty
                </p>
              </div>
            )}

            {/* <p className="text-center text-red4 text-[15px]">{errorMsg}</p> */}
          </div>
        </div>

        <div className="flex justify-center items-center w-[700px] my-4">
          <Link href="/dashboard/customer/my-tasks/post-request">
            <button className="bg-purpleBase text-[15px] rounded-lg border-none px-4 py-2 text-white hover:bg-purpleHover">
              Create New Task
            </button>
          </Link>
        </div>
      </div>
    </CustomerDashboardLayout>
  );
};

export default MyTask;
