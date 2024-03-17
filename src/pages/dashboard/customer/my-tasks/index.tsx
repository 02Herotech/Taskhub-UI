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
import OpenTaskCategory from "../../../../../components/taskCategory/open";
import AllTaskCategory from "../../../../../components/taskCategory/all";
import ClosedTaskCategory from "../../../../../components/taskCategory/closed";

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
  const [emptyMsg, setEmptyMsg] = useState("");

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

  // Calculate the indexes for the tasks to be displayed on the current page

  const tasksPerPage = 4;
  const [currentPage, setCurrentPage] = useState(1);

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
          {currentCategory === "Open" && (
            <OpenTaskCategory
              isLoading={isLoading}
              currentCategory={currentCategory}
              activeTasks={activeTasks}
            />
          )}

          {currentCategory === "All" && (
            <AllTaskCategory
              isLoading={isLoading}
              currentCategory={currentCategory}
              taskData={taskData}
            />
          )}

          {currentCategory === "Closed" && (
            <ClosedTaskCategory
              isLoading={isLoading}
              currentCategory={currentCategory}
              inactiveTasks={inactiveTasks}
            />
          )}
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
