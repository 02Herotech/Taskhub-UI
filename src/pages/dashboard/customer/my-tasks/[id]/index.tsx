import { useRouter } from "next/router";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import { SlLocationPin } from "react-icons/sl";
import { PiNotepad } from "react-icons/pi";
import { FaArrowLeftLong } from "react-icons/fa6";
import Image from "next/image";
import { BsThreeDots } from "react-icons/bs";
import { IoClose } from "react-icons/io5";

import CustomerDashboardLayout from "../../../../../../components/customerdashboardLayout";
import loader from "../../../../../../public/taskhub-newloader.gif";
import Link from "next/link";

interface taskData {
  id: string | number;
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

const TaskDetails = () => {
  const router = useRouter();
  const { id } = router.query;

  const [taskData, setTaskData] = useState<taskData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isOpened, setIsOpened] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [idValue, setIdValue] = useState("");
  const [isEnlarged, setIsEnlarged] = useState(false);

  const { data: session } = useSession();

  const handleFetchTask = async () => {
    // await new Promise((resolve) => setTimeout(resolve, 2000));
    try {
      setIsLoading(true);

      if (!userToken || !id) {
        return;
      }

      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}task/active-tasks`,
        {
          headers: {
            Authorization: `Bearer ${userToken}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      const customerTasks = response.data.filter(
        (task: taskData) => task.posterId === session?.user?.user.id
      );

      const taskDetails = customerTasks.find(
        (task: taskData) => String(task.id) === String(id)
      );

      if (!taskDetails) {
        setErrorMsg("Task not found");
        return;
      }
      setTaskData([taskDetails]);
      console.log("details: ", taskData);
    } catch (error) {
      console.error(error);
      setErrorMsg("Error loading task");
    } finally {
      setIsLoading(false);
    }
  };

  const taskId = parseInt(id as string, 10);
  console.log("id value: ", taskId);

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

  const userToken = session?.user?.accessToken;

  useEffect(() => {
    handleFetchTask();
  }, [userToken, id]);

  return (
    <CustomerDashboardLayout>
      <div
        className={`my-16 flex flex-col justify-center items-start w-[900px]`}
      >
        <h1 className="text-lg font-extrabold bg-[#FBFAFB] border-[1.5px] border-grey3 rounded-2xl shadow-2xl py-2 px-4">
          Task Details
        </h1>

        <p className="text-center w-[700px] text-red10 mt-4 -mb-4">
          {errorMsg}
        </p>

        {isLoading ? (
          <div className="w-[700px] flex items-center justify-center h-[500px] ">
            <Image src={loader} alt="loader" width={80} />
          </div>
        ) : (
          <div className="flex  flex-col mt-16 w-[700px] rounded-2xl shadow-md p-10 relative  bg-[#F8E9FE]/[0.5]">
            <span
              className="absolute top-2 right-5 text-grey4  cursor-pointer hover:text-grey6"
              onClick={() => setIsOpened(!isOpened)}
            >
              <BsThreeDots />
            </span>

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
              {taskData.map((task, index) => (
                <div key={index} className="w-full flex flex-col space-y-8 ">
                  <div className="flex flex-col space-y-1">
                    <h2 className="font-bold text-[22px]">
                      {task.taskServiceName}
                    </h2>
                    <div className="flex items-center space-x-2 ">
                      <div className="flex items-center font-bold py-1 px-3 rounded-md text-[13px] shadow-sm space-x-1 bg-white  text-green7">
                        <span>
                          <SlLocationPin />
                        </span>
                        <h4 className="font-extrabold">{task.userAddress}</h4>
                      </div>
                      <div
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
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col text-justify space-y-1">
                    <h4 className="font-bold text-[15px]">Description:</h4>
                    <p className="text-[14px]">{task.taskDescription}</p>
                  </div>

                  <div className="flex justify-start">
                    <div className="flex bg-green8 text-white rounded-md text-[13px] font-extrabold py-1 px-3 space-x-2">
                      <h4 className=" ">Budget:</h4>
                      <h1 className="">${task.customerBudget}</h1>
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
                        <h4 className="font-extrabold">
                          {task.taskDates.map((date) => {
                            const currentDate = new Date(date);
                            const day = currentDate.getDate();
                            const monthName = currentDate.toLocaleDateString(
                              undefined,
                              {
                                month: "short",
                              }
                            );
                            const year = currentDate.getFullYear();
                            return `${monthName} ${day}, ${year}`;
                          })}
                        </h4>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col space-y-2">
                    <h4 className="font-bold text-[15px]">Reference Image:</h4>
                    <img
                      src={task.taskImage}
                      alt="Task Reference Img"
                      width={300}
                      className=" rounded-2xl cursor-pointer"
                      onClick={() => setIsEnlarged(true)}
                    />
                  </div>
                </div>
              ))}
            </div>

            {isEnlarged && (
              <div className="bg-black bg-opacity-80 absolute inset-0 flex justify-center items-center h-full w-full ">
                {taskData.map((task, index) => (
                  <div
                    key={index}
                    className=" h-full w-full flex justify-center items-center relative"
                  >
                    <img
                      src={task.taskImage}
                      alt="Task Reference Img"
                      width={600}
                      className=" h-[400px]"
                    />
                    <span
                      className="text-white absolute top-3 right-5 text-[20px] hover:text-grey4 cursor-pointer"
                      onClick={() => setIsEnlarged(false)}
                    >
                      <IoClose />
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        <div className="w-[700px] mt-10  flex justify-center">
          <Link
            href="/dashboard/customer/my-tasks"
            className="flex justify-center items-center text-[14px] text-[#969696] space-x-2 hover:text-[#FE9B07] hover:scale-110"
          >
            <span>
              <FaArrowLeftLong />
            </span>
            <p>Back</p>
          </Link>
        </div>
      </div>
    </CustomerDashboardLayout>
  );
};

export default TaskDetails;
