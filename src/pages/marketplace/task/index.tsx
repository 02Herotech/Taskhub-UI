import React, { useState, useEffect } from "react";
import axios from "axios";
import { FiMapPin } from "react-icons/fi";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Link from "next/link";
import Image from "next/image";
import { CiCalendar } from "react-icons/ci";
import { BiVector } from "react-icons/bi";
import { FaArrowLeftLong } from "react-icons/fa6";

import { poppins } from "@/styles/font";
import loader from "../../../../public/taskhub-newloader.gif";
import Nav from "../../../../components/nav/Nav";
import ServiceSlider from "../../../../components/serviceSlider/ServiceSlider";
import NewFooter from "../../../../components/NewFooter/NewFooter";

interface taskData {
  totalElements: number;
  totalPages: number;
  pageNumber: number;
  pageSize: number;
  content: [
    {
      id: number;
      posterId: number;
      taskServiceName: string;
      category: string;
      subCategory: string;
      taskDescription: string;
      userAddress: string;
      postedAt: [string];
      customerBudget: number;
      taskImage: string;
      taskDates: [[string]];
      active: boolean;
    }
  ];
}

const MPTask = () => {
  const [taskData, setTaskData] = useState<taskData>({
    totalElements: 0,
    totalPages: 0,
    pageNumber: 0,
    pageSize: 0,
    content: [
      {
        id: 0,
        posterId: 0,
        taskServiceName: "",
        category: "",
        subCategory: "",
        taskDescription: "",
        userAddress: "",
        postedAt: [""],
        customerBudget: 0,
        taskImage: "",
        taskDates: [[""]],
        active: true,
      },
    ],
  });

  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const [lastPage, setLastPage] = useState(0);

  const handleFetchTask = async () => {
    setIsLoading(true);

    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}task/all-active-tasks/${currentPage}`
      );

      //   console.log("Task: ", response);
      //   console.log("setTaskData: ", taskData);

      if (response.status === 200) {
        setTaskData(response.data);
        setLastPage(response.data.totalPages);
        setIsLoading(false);
      }
    } catch (error) {
      //   console.log(error);
      setIsLoading(false);
      setErrorMsg("Error loading task");
    }
  };

  useEffect(() => {
    handleFetchTask();
  }, [currentPage]);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1); // Update currentPage using functional form to ensure the correct value is used
  };

  const goBack = () => {
    window.history.back();
  };

  return (
    <div>
      <Nav />
      <main className={`min-h-screen py-20 ${poppins.className}`}>
        <div>
          <ServiceSlider />
        </div>
        <div className="max-w-7xl mx-auto px-20 my-20 flex flex-col space-y-16">
          <div className="flex flex-col space-y-10">
            <div className="flex bg-[#381F8C] w-[200px] items-center justify-center space-x-2 py-3">
              <span className="text-[#FE9B07]">
                <BiVector />
              </span>
              <p className="text-white">Task Requests</p>
            </div>
          </div>
          {isLoading ? (
            <div className="w-full flex items-center justify-center h-[300px] ">
              <Image src={loader} alt="loader" width={80} />
            </div>
          ) : (
            <div className="flex flex-col space-y-8">
              <div className="grid grid-cols-2 gap-10">
                {taskData.content.map((task: any) => (
                  <Link href={`/marketplace/task/${task.id}`} key={task.id}>
                    <div className="border-[1.5px] border-grey3 hover:border-[#FE9B07]  hover:bg-[#F2F0F3] rounded-lg shadow-lg p-4 my-5 w-full flex group transition-colors duration-200 space-x-2 bg-[#FBFAFB]">
                      <div
                        className={`w-[130px] h-[90px] rounded-[50%] border-2 border-grey3 flex justify-center items-center group-hover:border-[#FE9B07] transition-colors duration-200 `}
                      >
                        <img
                          src={task.taskImage}
                          alt=""
                          width={130}
                          className={`rounded-[50%] object-cover h-[85px]`}
                        />
                      </div>
                      <div className="flex  justify-between px-4 w-[550px]">
                        <div className="flex flex-col space-y-6 justify-center">
                          <h4 className="font-extrabold text-[18px]">
                            {task.taskServiceName}
                          </h4>
                          <div className="flex space-x-3 items-center text-[12px]">
                            <div className=" flex items-center space-x-1 bg-[#F8E9FE] text-green6 rounded-lg py-1 px-2  font-bold ">
                              <span>
                                <FiMapPin />
                              </span>
                              <p>{task.userAddress.slice(0, 15)}</p>
                            </div>
                            <p className="bg-[#F8E9FE] rounded-lg py-1 px-2 font-bold ">
                              ${task.customerBudget}
                            </p>
                          </div>
                        </div>
                        <div className="flex flex-col items-end space-y-4">
                          <div className="flex flex-col space-y-2 items-center font-bold">
                            <h2 className="">Needed on:</h2>
                            <div className="flex items-center space-x-1 text-[12px]">
                              <span className="text-[20px] ">
                                <CiCalendar />
                              </span>
                              <p>
                                {task.taskDates.map((date: any) => {
                                  const currentDate = new Date(date);
                                  const day = currentDate.getDate();
                                  const monthName =
                                    currentDate.toLocaleDateString(undefined, {
                                      month: "short",
                                    });
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

              <div className="flex justify-between w-[1100px] my-10">
                <div
                  onClick={goBack}
                  className="flex px-2 py-1 items-center space-x-1 hover:text-[#FE9B07] hover:scale-110 cursor-pointer"
                >
                  <span>
                    <FaArrowLeftLong />
                  </span>
                  <p>Back</p>
                </div>

                <div className="flex justify-center items-center space-x-5">
                  <button
                    onClick={handlePreviousPage}
                    disabled={currentPage === 0}
                    className="border rounded-full p-2 hover:border-[#FE9B07] hover:text-[#FE9B07] cursor-pointer disabled:border-grey4 disabled:text-grey4"
                  >
                    <IoIosArrowBack />
                  </button>
                  <p>{currentPage + 1}</p>
                  <button
                    onClick={handleNextPage}
                    disabled={currentPage === lastPage - 1}
                    className="border rounded-full p-2 hover:border-[#FE9B07] hover:text-[#FE9B07] cursor-pointer disabled:border-grey4 disabled:text-grey4"
                  >
                    <IoIosArrowForward />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
      <NewFooter />
    </div>
  );
};

export default MPTask;
