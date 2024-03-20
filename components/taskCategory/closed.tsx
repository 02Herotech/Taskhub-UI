import Image from "next/image";
import Link from "next/link";
import { FiMapPin } from "react-icons/fi";
import { CiCalendar } from "react-icons/ci";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useEffect, useState } from "react";

import loader from "../../public/taskhub-newloader.gif";

interface ClosedCategoryProps {
  isLoading: any;
  currentCategory: any;
  inactiveTasks: any;
}

const ClosedTaskCategory = ({
  isLoading,
  // currentCLosedTasks,
  currentCategory,
  inactiveTasks,
}: // setCurrentPage,
// currentPage,
// nthPageforClosed,
ClosedCategoryProps) => {
  const tasksPerPage = 4;
  const [currentPage, setCurrentPage] = useState(1);
  const [currentCLosedTasks, setCurrentCLosedTasks] = useState([]);
  const [nthPageforClosed, setNthPageforClosed] = useState(0);

  useEffect(() => {
    const indexOfLastTask = currentPage * tasksPerPage;
    const indexOfFirstTask = indexOfLastTask - tasksPerPage;

    // Update currentActiveTasks based on pagination
    const updatedInactiveTasks = inactiveTasks.slice(
      indexOfFirstTask,
      indexOfLastTask
    );
    setCurrentCLosedTasks(updatedInactiveTasks);

    // Update nthPageforActive based on the length of activeTasks
    const updatedNthPageForInactive = Math.ceil(
      inactiveTasks.length / tasksPerPage
    );
    setNthPageforClosed(updatedNthPageForInactive);
  }, [currentPage, inactiveTasks]);
  return (
    <div>
      {isLoading ? (
        <div className="w-[700px] flex items-center justify-center h-[300px] ">
          <Image src={loader} alt="loader" width={80} />
        </div>
      ) : (
        <div>
          {currentCategory === "Closed" && inactiveTasks.length === 0 ? (
            <div className="w-[700px] flex items-center justify-center h-[300px] ">
              <p className="text-center text-grey5 text-[15px]">
                Closed task is empty
              </p>
            </div>
          ) : (
            <div className="flex flex-col ">
              <div className=" flex flex-col items-center bg-[#F8E9FE]/[0.5] px-5">
                {currentCLosedTasks.map((task: any) => (
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
                            <div className=" flex items-center space-x-1 bg-[#F8E9FE] text-green6 rounded-lg py-1 px-2 font-bold">
                              <span>
                                <FiMapPin />
                              </span>
                              <p>{task.userAddress.slice(0, 15)}</p>
                            </div>
                            <p className="bg-[#F8E9FE] rounded-lg py-1 px-2 font-bold">
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
                                task.active === true ? " bg-green5" : " bg-red5"
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
            </div>
          )}

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
    </div>
  );
};

export default ClosedTaskCategory;
