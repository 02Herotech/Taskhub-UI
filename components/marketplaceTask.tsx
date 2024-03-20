import React, { useState, useEffect } from "react";
import axios from "axios";
import { FiMapPin } from "react-icons/fi";
import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";

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

  return <div></div>;
};

export default TaskComp;
