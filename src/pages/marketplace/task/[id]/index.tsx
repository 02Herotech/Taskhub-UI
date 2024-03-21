import React, { useState, useEffect } from "react";
import axios from "axios";
import { FiMapPin } from "react-icons/fi";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Link from "next/link";
import Image from "next/image";
import { CiCalendar } from "react-icons/ci";
import { BiVector } from "react-icons/bi";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { SlLocationPin } from "react-icons/sl";
import { PiNotepad } from "react-icons/pi";
import { FaArrowLeftLong } from "react-icons/fa6";
import { BsChat } from "react-icons/bs";

import { BsThreeDots } from "react-icons/bs";
import { IoClose } from "react-icons/io5";

import { poppins } from "@/styles/font";
import loader from "../../../../../public/taskhub-newloader.gif";
import Nav from "../../../../../components/nav/Nav";
import ServiceSlider from "../../../../../components/serviceSlider/ServiceSlider";
import NewFooter from "../../../../../components/NewFooter/NewFooter";

interface taskData {
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
const MPTaskDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data: session } = useSession();

  const [taskData, setTaskData] = useState<taskData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [isEnlarged, setIsEnlarged] = useState(false);
  const [isOpened, setIsOpened] = useState(false);

  const handleFetchTaskDetails = async () => {
    const listingId = parseInt(id as string, 10);
    console.log("id value: ", listingId);
    try {
      setIsLoading(true);

      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}task/get-task/${listingId}`
      );

      console.log("taskID: ", response);
      setTaskData(response.data);
      // console.log("listingDatat:", listingData);
    } catch (error) {
      console.error(error);
      setErrorMsg("Error loading details");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    handleFetchTaskDetails();
  }, [id]);

  const goBack = () => {
    window.history.back();
  };

  const taskId = parseInt(id as string, 10);
  console.log("id value: ", taskId);

  const userToken = session?.user?.accessToken;

  const handleDelete = async () => {
    try {
      if (!userToken || !id) {
        return;
      }
      console.log(userToken);
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}task/delete-task/${taskId}`,
        {
          headers: {
            Authorization: `Bearer ${userToken}`,
            "Content-Type": "application/json",
          },
        }
      );
      console.log("delete res", response);
      if (response.status === 200) {
        router.push("/dashboard/customer/my-tasks");
      }
    } catch (error: any) {
      console.error(error.message);
      setErrorMsg(error.message);
    }
  };

  return (
    <div>
      <Nav />
      <main className={`min-h-screen py-20 ${poppins.className}`}>
        <div>
          <ServiceSlider />
        </div>
        <div className="max-w-7xl mx-auto px-20 my-20 flex flex-col space-y-20">
          <div className="flex bg-[#381F8C] w-[200px] items-center justify-center space-x-2 py-3">
            <span className="text-[#FE9B07]">
              <BiVector />
            </span>
            <p className="text-white">Task Requests</p>
          </div>

          {isLoading ? (
            <div className="w-[700px] flex items-center justify-center h-[500px] ">
              <Image src={loader} alt="loader" width={80} />
            </div>
          ) : (
            <div className="flex  flex-col mt-16 w-[700px] rounded-2xl shadow-md p-10 relative  bg-[#F8E9FE]/[0.5]">
              <div className="absolute top-3 right-6">
                {session?.user?.user?.id === taskData?.posterId ? (
                  <span
                    className=" text-grey4  cursor-pointer hover:text-grey6"
                    onClick={() => setIsOpened(!isOpened)}
                  >
                    <BsThreeDots />
                  </span>
                ) : (
                  <div>
                    {session?.user?.user?.roles[0] === "SERVICE_PROVIDER" ? (
                      <div className="flex space-x-1 items-center bg-purpleBase text-white px-4 py-2 cursor-pointer rounded-xl text-[14px] hover:bg-purpleHover">
                        <span className="text-[12px]">
                          <BsChat />
                        </span>
                        <p>Send message</p>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                )}
              </div>

              {isOpened && (
                <div className="flex flex-col text-[12px]  text-grey4 absolute right-8 top-6 items-center space-y-1">
                  <p className=" hover:text-grey6 hover:border-b-[1.5px] cursor-pointer h-[20px] px-2 ">
                    Edit
                  </p>
                  <p className=" hover:text-grey6 hover:border-b-[1.5px] cursor-pointer h-[20px] px-2">
                    Close
                  </p>
                  <p
                    className=" hover:text-grey6 hover:border-b-[1.5px] cursor-pointer h-[20px] px-2"
                    onClick={handleDelete}
                  >
                    Delete
                  </p>
                </div>
              )}

              <div>
                {/* {taskData.map((task, index) => key={index} ( */}
                <div className="w-full flex flex-col space-y-8 ">
                  <div className="flex flex-col space-y-1">
                    <h2 className="font-bold text-[22px]">
                      {taskData?.taskServiceName}
                    </h2>
                    <div className="flex items-center space-x-2 ">
                      <div className="flex items-center font-bold py-1 px-3 rounded-md text-[13px] shadow-sm space-x-1 bg-white  text-green7">
                        <span>
                          <SlLocationPin />
                        </span>
                        <h4 className="font-extrabold">
                          {taskData?.userAddress}
                        </h4>
                      </div>
                      {/* <div
                          className={` w-[12px] h-[12px]  rounded-[50%] border-[1.5px] border-green4 relative flex justify-center items-center ${
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
                    </div>
                  </div>

                  <div className="flex flex-col text-justify space-y-1">
                    <h4 className="font-bold text-[15px]">Description:</h4>
                    <p className="text-[14px]">{taskData?.taskDescription}</p>
                  </div>

                  <div className="flex justify-start">
                    <div className="flex bg-green8 text-white rounded-md text-[13px] font-extrabold py-1 px-3 space-x-2">
                      <h4 className=" ">Budget:</h4>
                      <h1 className="">${taskData?.customerBudget}</h1>
                    </div>
                  </div>

                  <div className="flex flex-col space-y-1 ">
                    <h4 className="font-bold text-[15px]">Date:</h4>
                    <div className="flex items-center space-x-3">
                      <span className="text-[18px]">
                        <PiNotepad />
                      </span>
                      <div className="flex flex-col text-[13px]">
                        <h4>TO BE DONE ON</h4>
                        {taskData?.taskDates.map((dateArray, index) => (
                          <div key={index}>
                            {dateArray.map((date, i) => {
                              const currentDate = new Date(date);
                              const day = currentDate.getDate();
                              const monthName = currentDate.toLocaleDateString(
                                undefined,
                                { month: "short" }
                              );
                              const year = currentDate.getFullYear();
                              return (
                                <h4 key={i} className="font-extrabold">
                                  {`${monthName} ${day}, ${year}`}
                                </h4>
                              );
                            })}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col space-y-2">
                    <h4 className="font-bold text-[15px]">Reference Image:</h4>
                    <img
                      src={taskData?.taskImage}
                      alt="Task Reference Img"
                      width={300}
                      className=" rounded-2xl cursor-pointer"
                      onClick={() => setIsEnlarged(true)}
                    />
                  </div>
                </div>
                {/* ))} */}
              </div>

              {isEnlarged && (
                <div className="bg-black bg-opacity-80 absolute inset-0 flex justify-center items-center h-full w-full">
                  <div className="h-full w-full flex justify-center items-center relative">
                    <img
                      src={taskData?.taskImage}
                      alt="Task Reference Img"
                      width={650}
                      className="scale-75"
                    />
                    <span
                      className="text-white absolute top-3 right-5 text-[20px] hover:text-grey4 cursor-pointer"
                      onClick={() => setIsEnlarged(false)}
                    >
                      <IoClose />
                    </span>
                  </div>
                </div>
              )}
            </div>
          )}
          <div className="flex w-[700px] justify-center items-center mt-10 ">
            <div
              onClick={goBack}
              className="flex px-2 py-1 items-center space-x-1 hover:text-[#FE9B07] hover:scale-110 cursor-pointer"
            >
              <span>
                <FaArrowLeftLong />
              </span>
              <p>Back</p>
            </div>
          </div>
        </div>
      </main>
      <NewFooter />
    </div>
  );
};

export default MPTaskDetails;
