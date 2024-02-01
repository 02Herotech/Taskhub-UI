import { useRouter } from "next/router";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import { SlLocationPin } from "react-icons/sl";
import { PiNotepad } from "react-icons/pi";
import { FaArrowLeftLong } from "react-icons/fa6";
import Image from "next/image";
import { BsThreeDots } from "react-icons/bs";

import CustomerDashboardLayout from "../../../../../../components/customerdashboardLayout";
import loader from "../../../../../../public/taskhub-newloader.gif";
import { string } from "yup";
import { stringify } from "querystring";

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

// ... (existing imports)

const TaskDetails = () => {
  const router = useRouter();
  const { id } = router.query;

  const [taskData, setTaskData] = useState<taskData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isOpened, setIsOpened] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [idValue, setIdValue] = useState("");

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
      // setIsLoading(true);

      if (!userToken || !id) {
        return;
      }

      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}task/delete-task/${taskId}`,
        {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        }
      );

      console.log("delete res", response);
    } catch (error) {
      console.error(error);
      // setErrorMsg("Error loading task");
    } finally {
      // setIsLoading(false);
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
        <h1 className="text-lg font-extrabold border border-grey2 rounded-md shadow-md p-2">
          VIEW TASK DETAILS
        </h1>
        <div className="flex  flex-col mt-16 w-[700px] border border-grey2 rounded-2xl shadow-xl p-10 relative">
          <span
            className="absolute top-2 right-5 text-grey4  cursor-pointer hover:text-grey6"
            onClick={() => setIsOpened(!isOpened)}
          >
            <BsThreeDots />
          </span>
          {isOpened && (
            <div className="flex flex-col text-[12px]  text-grey4 absolute right-8 top-6 items-center space-y-1">
              <p className=" hover:text-grey6 hover:border-b-[1.5px] cursor-pointer h-[20px] ">
                Edit
              </p>
              <p className=" hover:text-grey6 hover:border-b-[1.5px] cursor-pointer h-[20px]">
                Close
              </p>
              <p
                className=" hover:text-grey6 hover:border-b-[1.5px] cursor-pointer h-[20px]"
                onClick={handleDelete}
              >
                Delete
              </p>
            </div>
          )}
          {/* <p>Task page {id}</p> */}
          {taskData.map((task, index) => (
            <div key={index} className="w-full ">
              <h2 className="text-[30px] mb-5 font-extrabold">
                {task.taskServiceName}
              </h2>
              <div className="flex justify-between items-center">
                <div className="flex items-center  space-x-3">
                  <span>
                    <SlLocationPin />
                  </span>
                  <div className="text-[18px]">
                    <h4 className="">LOCATION</h4>
                    <h4 className="font-extrabold">{task.userAddress}</h4>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-[18px]">
                    <PiNotepad />
                  </span>
                  <div className="flex flex-col text-[18px]">
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
                        const year = currentDate.getFullYear(); // Get the year
                        return `${monthName} ${day}, ${year}`;
                      })}
                    </h4>
                  </div>
                </div>
              </div>

              <div className="flex flex-col mt-16">
                <h4 className="text-[18px] font-extrabold">Details</h4>
                <p className="text-[14px]">{task.taskDescription}</p>
              </div>

              <div className="flex mt-8 justify-between items-end">
                <div className="flex flex-col space-y-2">
                  <h4 className="text-[18px] font-extrabold">
                    Reference Image
                  </h4>
                  <img
                    src={task.taskImage}
                    alt="Task Reference Img"
                    width={300}
                    className=" rounded-2xl"
                  />
                </div>
                <div className="flex flex-col">
                  <h4 className="text-[18px] font-extrabold">Task Budget</h4>
                  <h1 className="text-[25px] text-[#381F8C] font-extrabold">
                    ${task.customerBudget}
                  </h1>
                </div>
              </div>
            </div>
          ))}

          <div>
            {isLoading && (
              <div className="w-[700px] flex items-center justify-center h-[500px] ">
                <Image src={loader} alt="loader" width={150} />
              </div>
            )}
          </div>
          {/* {errorMsg && <p>{errorMsg}</p>} */}
        </div>

        <div className="w-[700px] mt-10">
          <a
            href="/dashboard/customer/my-tasks"
            className="flex justify-center items-center text-[14px] text-[#969696] space-x-2"
          >
            <span>
              <FaArrowLeftLong />
            </span>
            <p>Back</p>
          </a>
        </div>
      </div>
    </CustomerDashboardLayout>
  );
};

export default TaskDetails;
