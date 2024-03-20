import React, { useState } from "react";
import Head from "next/head";
import { FiTool } from "react-icons/fi";
import { BiVector } from "react-icons/bi";
import { useSession } from "next-auth/react";

import ServiceSlider from "../../../components/serviceSlider/ServiceSlider";
import Nav from "../../../components/nav/Nav";
import NewFooter from "../../../components/NewFooter/NewFooter";
import { poppins } from "@/styles/font";
import ListingComp from "../../../components/marketplaceListing";
import TaskComp from "../../../components/marketplaceTask";

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

const Marketplace = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const { data: session } = useSession();

  return (
    <div>
      <Head>
        <title>TaskHub | Marketplace</title>
      </Head>

      <Nav />

      <main className={`min-h-screen py-20 ${poppins.className}`}>
        <div>
          <ServiceSlider />
        </div>

        <div className="max-w-7xl mx-auto px-20 my-20 flex flex-col space-y-20">
          <div className="">
            <div className="flex bg-[#381F8C] w-[200px] items-center justify-center space-x-2 py-3">
              <span className="text-[#FE9B07]">
                <FiTool />
              </span>
              <p className="text-white">Service Listings</p>
            </div>

            <div className="flex flex-col justify-center items-center w-full  my-10">
              <ListingComp />
            </div>
          </div>

          <div className="">
            <div className="flex bg-[#381F8C] w-[200px] items-center justify-center space-x-2 py-3">
              <span className="text-[#FE9B07]">
                <BiVector />
              </span>
              <p className="text-white">Task Requests</p>
            </div>
            <div className="flex flex-col justify-center items-center w-full  my-10">
              <TaskComp />
            </div>
          </div>
        </div>
      </main>
      <NewFooter />
    </div>
  );
};

export default Marketplace;
