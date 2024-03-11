import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import axios from "axios";

import Link from "next/link";
import Image from "next/image";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import { CiCalendar } from "react-icons/ci";
import { FiMapPin } from "react-icons/fi";
import CustomerDashboardLayout from "../../../../../components/customerdashboardLayout";

import loader from "../../../../../public/taskhub-newloader.gif";
import Head from "next/head";

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
    {
      id: "2",
      name: "Closed",
    },
    {
      id: "3",
      name: "All",
    },
  ];

  const [isLoading, setIsLoading] = useState(true);
  const [taskData, setTaskData] = useState<taskData[]>([]);
  const [activeTasks, setActiveTasks] = useState<taskData[]>([]);
  const [inactiveTasks, setInactiveTasks] = useState<taskData[]>([]);
  const { data: session } = useSession();
  const [currentCategory, setCurrentCategory] = useState<string>("Open");
  const [errorMsg, setErrorMsg] = useState("");

  const handleFetchTask = async () => {
    await new Promise((resolve) => setTimeout(resolve, 3000));

    if (!userToken) {
      return; // Skip fetching if userToken is not available
    }

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

      const customerTasks = response.data
        .filter((task: taskData) => task.posterId === session?.user?.user.id)
        .sort((a: any, b: any) => b.id - a.id);
      setTaskData(customerTasks);

      console.log("task response: ", response);
      console.log("data: ", taskData);
    } catch (error) {
      console.log(error);
      setErrorMsg("Error loading tasks");
    } finally {
      setIsLoading(false);
    }
  };

  const userToken = session?.user?.accessToken;

  useEffect(() => {
    handleFetchTask();
  }, [userToken, session]);

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

  const tasksPerPage = 4;
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the indexes for the tasks to be displayed on the current page
  const indexOfLastTask = currentPage * tasksPerPage;
  const indexOfFirstTask = indexOfLastTask - tasksPerPage;

  const currentActiveTasks = activeTasks.slice(
    indexOfFirstTask,
    indexOfLastTask
  );
  const currentCLosedTasks = inactiveTasks.slice(
    indexOfFirstTask,
    indexOfLastTask
  );
  const currentAllTasks = taskData.slice(indexOfFirstTask, indexOfLastTask);

  const nthPageforActive = Math.ceil(activeTasks.length / tasksPerPage);
  const nthPageforClosed = Math.ceil(inactiveTasks.length / tasksPerPage);
  const nthPageforAll = Math.ceil(taskData.length / tasksPerPage);

  // const handlePageChange = (pageNumber: any) => {
  //   setCurrentPage(pageNumber);
  // };

  return (
    <CustomerDashboardLayout>
      <div>
        <Head>
          <title>TaskHub | My Task</title>
        </Head>
      </div>
      <div
        className={`my-16 flex flex-col justify-center items-start w-[900px]`}
      >
        <h1 className="text-lg font-extrabold border border-grey2 rounded-md p-2">
          My Tasks
        </h1>

        <div className="flex justify-start mt-10 w-[700px] ">
          <div className="flex w-[350px] justify-between items-center ">
            {catgeory.map((category) => (
              <button
                key={category.id}
                onClick={() => {
                  setCurrentCategory(category.name);
                  handleFetchTask();
                }}
                className={`text-[15px] border py-1 px-4 rounded-3xl hover:border-[#FE9B07] hover:text-[#FE9B07] ${
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
          {isLoading ? (
            <div className="w-[700px] flex items-center justify-center h-[300px] ">
              <Image src={loader} alt="loader" width={150} />
            </div>
          ) : (
            <div>
              {currentCategory === "Open" && (
                <div className="flex flex-col">
                  <div className=" flex flex-col space-y-2  w-[700px]">
                    {currentActiveTasks.map((task) => (
                      <Link
                        href={`/dashboard/customer/my-tasks/${task.id} `}
                        key={task.id}
                      >
                        <div className="border-[1.5px] border-grey3 hover:border-[#FE9B07]  hover:bg-[#F2F0F3] rounded-lg shadow-lg p-4 my-5 w-full flex group transition-colors duration-200 space-x-2 bg-[#FBFAFB]">
                          <div
                            className={`w-[100px] h-[100px] rounded-[50%] border-2 border-grey3 flex justify-center items-center group-hover:border-[#FE9B07] transition-colors duration-200 `}
                          >
                            <img
                              src={task.taskImage}
                              alt=""
                              width={90}
                              className={`rounded-[50%] object-cover h-[90px]`}
                            />
                          </div>
                          <div className="flex  justify-between px-4 w-[550px]">
                            <div className="flex flex-col space-y-6 justify-center">
                              <h4 className="font-extrabold text-[18px]">
                                {task.taskServiceName}
                              </h4>
                              <div className="flex space-x-3 items-center text-[12px]">
                                <div className=" flex items-center space-x-1 bg-[#F8E9FE] text-green6 rounded-lg py-1 px-2 ">
                                  <span>
                                    <FiMapPin />
                                  </span>
                                  <p>{task.userAddress.slice(0, 15)}</p>
                                </div>
                                <p className="bg-[#F8E9FE] rounded-lg py-1 px-2 ">
                                  ${task.customerBudget}
                                </p>
                              </div>
                            </div>
                            <div className="flex flex-col items-end space-y-4">
                              <div
                                className={`w-[12px] h-[12px]  rounded-[50%] border-[1.5px] border-green4 relative flex justify-center items-center ${
                                  task.active === true
                                    ? " border-green5"
                                    : " border-red5"
                                }`}
                              >
                                <span
                                  className={`w-[6px] h-[6px] block rounded-[50%] ${
                                    task.active === true
                                      ? " bg-green5"
                                      : " bg-red5"
                                  }`}
                                ></span>
                              </div>

                              <div className="flex flex-col space-y-2 items-center font-bold">
                                <h2 className="">Needed on:</h2>
                                <div className="flex items-center space-x-1 text-[12px]">
                                  <span className="text-[20px] ">
                                    <CiCalendar />
                                  </span>
                                  <p>
                                    {task.taskDates.map((date) => {
                                      const currentDate = new Date(date);
                                      const day = currentDate.getDate();
                                      const monthName =
                                        currentDate.toLocaleDateString(
                                          undefined,
                                          {
                                            month: "short",
                                          }
                                        );
                                      return `${day} ${monthName}`;
                                    })}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>

                  {currentCategory === "Open" && activeTasks.length > 0 && (
                    <div className="flex justify-center items-center my-10 space-x-5">
                      <button
                        onClick={() => setCurrentPage(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="border rounded-full p-2 hover:border-[#FE9B07] hover:text-[#FE9B07] cursor-pointer disabled:border-grey4 disabled:text-grey4"
                      >
                        <IoIosArrowBack />
                      </button>
                      <p>{currentPage}</p>
                      <button
                        onClick={() => setCurrentPage(currentPage + 1)}
                        disabled={currentPage === nthPageforAll}
                        className="border rounded-full p-2 hover:border-[#FE9B07] hover:text-[#FE9B07] cursor-pointer disabled:border-grey4 disabled:text-grey4"
                      >
                        <IoIosArrowForward />
                      </button>
                    </div>
                  )}
                </div>
              )}

              {currentCategory === "Open" && activeTasks.length === 0 && (
                <div className="w-[700px] flex items-center justify-center h-[300px] ">
                  <p className="text-center text-grey5 text-[15px]">
                    Open task is empty
                  </p>
                </div>
              )}
            </div>
          )}

          <div>
            {currentCategory === "All" && (
              <div className="flex flex-col">
                <div className=" flex flex-col space-y-2  w-[700px]">
                  {currentAllTasks.map((task: taskData) => (
                    <Link
                      href={`/dashboard/customer/my-tasks/${task.id} `}
                      key={task.id}
                    >
                      <div className="border-[1.5px] border-grey3 hover:border-[#FE9B07] rounded-lg shadow-lg p-4 my-5 w-full flex group transition-colors duration-200 space-x-2">
                        <div
                          className={`w-[100px] h-[100px] rounded-[50%] border-2 border-grey3 flex justify-center items-center group-hover:border-[#FE9B07] transition-colors duration-200 `}
                        >
                          <img
                            src={task.taskImage}
                            alt=""
                            width={90}
                            className={`rounded-[50%] object-cover h-[90px]`}
                          />
                        </div>
                        <div className="flex  justify-between px-4 w-[550px]">
                          <div className="flex flex-col space-y-6 justify-center">
                            <h4 className="font-extrabold text-[18px]">
                              {task.taskServiceName}
                            </h4>
                            <div className="flex space-x-3 items-center text-[12px]">
                              <div className=" flex items-center space-x-1 bg-[#F8E9FE] text-green6 rounded-lg py-1 px-2 ">
                                <span>
                                  <FiMapPin />
                                </span>
                                <p>{task.userAddress.slice(0, 15)}</p>
                              </div>
                              <p className="bg-[#F8A8AB] rounded-lg py-1 px-2 ">
                                ${task.customerBudget}
                              </p>
                            </div>
                          </div>
                          <div className="flex flex-col items-end space-y-4">
                            <div
                              className={`w-[12px] h-[12px]  rounded-[50%] border-[1.5px] border-green4 relative flex justify-center items-center ${
                                task.active === true
                                  ? " border-green5"
                                  : " border-red5"
                              }`}
                            >
                              <span
                                className={`w-[6px] h-[6px] block rounded-[50%] ${
                                  task.active === true
                                    ? " bg-green5"
                                    : " bg-red5"
                                }`}
                              ></span>
                            </div>

                            <div className="flex flex-col space-y-2 items-center">
                              <h2 className="font-bold">Needed on:</h2>
                              <div className="flex items-center space-x-1 text-[12px]">
                                <span className="text-[20px] ">
                                  <CiCalendar />
                                </span>
                                <p>
                                  {task.taskDates.map((date) => {
                                    const currentDate = new Date(date);
                                    const day = currentDate.getDate();
                                    const monthName =
                                      currentDate.toLocaleDateString(
                                        undefined,
                                        {
                                          month: "short",
                                        }
                                      );
                                    return `${day} ${monthName}`;
                                  })}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>

                {currentCategory === "All" && taskData.length > 0 && (
                  <div className="flex justify-center items-center my-10 space-x-5">
                    <button
                      onClick={() => setCurrentPage(currentPage - 1)}
                      disabled={currentPage === 1}
                      className="border rounded-full p-2 hover:border-[#FE9B07] hover:text-[#FE9B07] cursor-pointer disabled:border-grey4 disabled:text-grey4"
                    >
                      <IoIosArrowBack />
                    </button>
                    <p>{currentPage}</p>
                    <button
                      onClick={() => setCurrentPage(currentPage + 1)}
                      disabled={currentPage === nthPageforActive}
                      className="border rounded-full p-2 hover:border-[#FE9B07] hover:text-[#FE9B07] cursor-pointer disabled:border-grey4 disabled:text-grey4"
                    >
                      <IoIosArrowForward />
                    </button>
                  </div>
                )}
              </div>
            )}

            {currentCategory === "All" && taskData.length === 0 && (
              <div className="w-[700px] flex items-center justify-center h-[300px] ">
                <p className="text-center text-grey5 text-[15px]">
                  All task is empty
                </p>
              </div>
            )}
          </div>

          <div>
            {currentCategory === "Closed" && (
              <div className="flex flex-col">
                <div className=" flex flex-col space-y-2  w-[700px]">
                  {currentCLosedTasks.map((task: taskData) => (
                    <Link
                      href={`/dashboard/customer/my-tasks/${task.id} `}
                      key={task.id}
                    >
                      <div className="border-[1.5px] border-grey3 hover:border-[#FE9B07] rounded-lg shadow-lg p-4 my-5 w-full flex group transition-colors duration-200 space-x-2">
                        <div
                          className={`w-[100px] h-[100px] rounded-[50%] border-2 border-grey3 flex justify-center items-center group-hover:border-[#FE9B07] transition-colors duration-200 `}
                        >
                          <img
                            src={task.taskImage}
                            alt=""
                            width={90}
                            className={`rounded-[50%] object-cover h-[90px]`}
                          />
                        </div>
                        <div className="flex  justify-between px-4 w-[550px]">
                          <div className="flex flex-col space-y-6 justify-center">
                            <h4 className="font-extrabold text-[18px]">
                              {task.taskServiceName}
                            </h4>
                            <div className="flex space-x-3 items-center text-[12px]">
                              <div className=" flex items-center space-x-1 bg-[#F8E9FE] text-green6 rounded-lg py-1 px-2 ">
                                <span>
                                  <FiMapPin />
                                </span>
                                <p>{task.userAddress.slice(0, 15)}</p>
                              </div>
                              <p className="bg-[#F8A8AB] rounded-lg py-1 px-2 ">
                                ${task.customerBudget}
                              </p>
                            </div>
                          </div>
                          <div className="flex flex-col items-end space-y-4">
                            <div
                              className={`w-[12px] h-[12px]  rounded-[50%] border-[1.5px] border-green4 relative flex justify-center items-center ${
                                task.active === true
                                  ? " border-green5"
                                  : " border-red5"
                              }`}
                            >
                              <span
                                className={`w-[6px] h-[6px] block rounded-[50%] ${
                                  task.active === true
                                    ? " bg-green5"
                                    : " bg-red5"
                                }`}
                              ></span>
                            </div>

                            <div className="flex flex-col space-y-2 items-center">
                              <h2 className="font-bold">Needed on:</h2>
                              <div className="flex items-center space-x-1 text-[12px]">
                                <span className="text-[20px] ">
                                  <CiCalendar />
                                </span>
                                <p>
                                  {task.taskDates.map((date) => {
                                    const currentDate = new Date(date);
                                    const day = currentDate.getDate();
                                    const monthName =
                                      currentDate.toLocaleDateString(
                                        undefined,
                                        {
                                          month: "short",
                                        }
                                      );
                                    return `${day} ${monthName}`;
                                  })}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>

                {currentCategory === "Closed" && inactiveTasks.length > 0 && (
                  <div className="flex justify-center items-center my-10 space-x-5">
                    <button
                      onClick={() => setCurrentPage(currentPage - 1)}
                      disabled={currentPage === 1}
                      className="border rounded-full p-2 hover:border-[#FE9B07] hover:text-[#FE9B07] cursor-pointer disabled:border-grey4 disabled:text-grey4"
                    >
                      <IoIosArrowBack />
                    </button>
                    <p>{currentPage}</p>
                    <button
                      onClick={() => setCurrentPage(currentPage + 1)}
                      disabled={currentPage === nthPageforClosed}
                      className="border rounded-full p-2 hover:border-[#FE9B07] hover:text-[#FE9B07] cursor-pointer disabled:border-grey4 disabled:text-grey4"
                    >
                      <IoIosArrowForward />
                    </button>
                  </div>
                )}
              </div>
            )}

            {currentCategory === "Closed" && inactiveTasks.length === 0 && (
              <div className="w-[700px] flex items-center justify-center h-[300px]">
                <p className="text-center text-grey5 text-[15px]">
                  Closed task is empty
                </p>
              </div>
            )}

            {/* <p className="text-center text-red4 text-[15px]">{errorMsg}</p> */}
          </div>
        </div>

        <div className="flex justify-center items-center w-[700px] my-2">
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
