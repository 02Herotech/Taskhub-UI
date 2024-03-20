import React, { useState, useEffect } from "react";
import axios from "axios";
import { FiMapPin } from "react-icons/fi";
import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";
import { CiCalendar } from "react-icons/ci";

import loader from "../public/taskhub-newloader.gif";

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

const TaskComp = () => {
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

  const handleFetchTask = async () => {
    setIsLoading(true);

    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}task/all-active-tasks/0`
      );

      //   console.log("Task: ", response);
      //   console.log("setTaskData: ", taskData);

      if (response.status === 200) {
        setTaskData(response.data);
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
  }, []);

  return (
    <div>
      <div>
        {isLoading ? (
          <div className="w-[700px] flex items-center justify-center h-[300px] ">
            <Image src={loader} alt="loader" width={80} />
          </div>
        ) : (
          <div className="flex flex-col space-y-8">
            <div className="grid grid-cols-2 gap-10">
              {taskData.content.slice(0, 4).map((task: any) => (
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
                        {/* <div
                          className={`w-[12px] h-[12px]  rounded-[50%] border-[1.5px] border-green4 relative flex justify-center items-center ${
                            task.active === true
                              ? " border-green5"
                              : " border-red5"
                          }`}
                        >
                          <span
                            className={`w-[6px] h-[6px] block rounded-[50%] ${
                              task.active === true ? " bg-green5" : " bg-red5"
                            }`}
                          ></span>
                        </div> */}

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
            <div className="flex justify-end w-full">
              <Link href="/marketplace/task">
                <button
                  type="button"
                  className="flex items-center  border-[1.5px] border-[#D0D5DD] px-3 py-2 rounded-xl hover:border-[#FE9B07] hover:bg-black hover:text-white"
                >
                  See more
                  <span className="ml-2">
                    <FaArrowRightLong />
                  </span>
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TaskComp;
