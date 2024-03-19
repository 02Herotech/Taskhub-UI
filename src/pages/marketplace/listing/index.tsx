import React, { useState, useEffect } from "react";
import axios from "axios";
import { FiMapPin } from "react-icons/fi";
import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Head from "next/head";
import { FiTool } from "react-icons/fi";
import { BiVector } from "react-icons/bi";
import { useSession } from "next-auth/react";

// import ServiceSlider from "../../../components/serviceSlider/ServiceSlider";
// import Nav from "../../../components/nav/Nav";
// import NewFooter from "../../../components/NewFooter/NewFooter";
import { poppins } from "@/styles/font";
// import ListingComp from "../../../components/marketplaceListing";

import loader from "../../../../public/taskhub-newloader.gif";
import Nav from "../../../../components/nav/Nav";
import ServiceSlider from "../../../../components/serviceSlider/ServiceSlider";
import NewFooter from "../../../../components/NewFooter/NewFooter";

interface listingData {
  totalElements: number;
  totalPages: number;
  pageNumber: number;
  pageSize: number;
  content: [
    {
      id: number;
      businessName: string;
      serviceCategory: string;
      subCategory: string;
      serviceDescription: string;
      serviceName: string;
      pricing: number;
      availableDays: [string];
      available: boolean;
      startHour: number;
      closeMinute: number;
      closeHour: number;
      startMinute: number;
      availableFrom: {
        hour: number;
        minute: number;
        second: number;
        nano: number;
      };
      availableTo: {
        hour: number;
        minute: number;
        second: number;
        nano: number;
      };
      userAddress: {
        id: number;
        streetNumber: string;
        streetName: string;
        unitNumber: string;
        suburb: string;
        state: string;
        postCode: string;
      };
      deleted: boolean;
      stripeId: string;
      businessPictures: [""];
    }
  ];
}

const ServiceListing = () => {
  const [listingData, setListingData] = useState<listingData>({
    totalElements: 0,
    totalPages: 0,
    pageNumber: 0,
    pageSize: 0,
    content: [
      {
        id: 0,
        businessName: "",
        serviceCategory: "",
        subCategory: "",
        serviceDescription: "",
        serviceName: "",
        pricing: 0,
        availableDays: [""],
        available: false,
        startHour: 0,
        closeMinute: 0,
        closeHour: 0,
        startMinute: 0,
        availableFrom: {
          hour: 0,
          minute: 0,
          second: 0,
          nano: 0,
        },
        availableTo: {
          hour: 0,
          minute: 0,
          second: 0,
          nano: 0,
        },
        userAddress: {
          id: 0,
          streetNumber: "",
          streetName: "",
          unitNumber: "",
          suburb: "",
          state: "",
          postCode: "",
        },
        deleted: false,
        stripeId: "",
        businessPictures: [""],
      },
    ],
  });

  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const [lastPage, setLastPage] = useState(0);

  const handleFetchListing = async () => {
    setIsLoading(true);

    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}listing/all-active-listings/${currentPage}`
      );

      if (response.status === 200) {
        setListingData(response.data);
        setLastPage(response.data.totalPages); // Update lastPage with fetched value
        setIsLoading(false);
      }
    } catch (error) {
      setIsLoading(false);
      setErrorMsg("Error loading listings");
    }
  };

  useEffect(() => {
    handleFetchListing();
  }, [currentPage]); // Trigger fetch when currentPage changes

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1); // Update currentPage using functional form to ensure the correct value is used
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1); // Update currentPage using functional form to ensure the correct value is used
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
              <FiTool />
            </span>
            <p className="text-white">Service Listings</p>
          </div>

          {isLoading ? (
            <div className="w-full flex items-center justify-center h-[300px] ">
              <Image src={loader} alt="loader" width={80} />
            </div>
          ) : (
            <div className="flex flex-col space-y-10  ">
              <div className="grid grid-cols-5 gap-10 ">
                {listingData.content.map((listing, index) => (
                  <div key={listing.id}>
                    <div className="border-[1.5px] cursor-pointer flex-col justify-around space-y-2 items-center border-grey3 hover:border-[#FE9B07] rounded-xl shadow-sm px-3 py-4 my-5 flex group transition-colors duration-200 h-[230px] w-[180px]">
                      <img
                        src={listing.businessPictures[0]}
                        alt=""
                        width={180}
                        className={`rounded-xl bg-cover h-[150px] border-[1.5px] border-grey3 group-hover:border-[#FE9B07] transition-colors duration-200 w-[180px]`}
                      />

                      <div className="flex justify-between w-[150px] items-center">
                        <div className="flex flex-col space-y-2">
                          <h4 className="font-extrabold text-[18px]">
                            {listing.businessName}
                          </h4>

                          <div className="flex items-center text-[13px] space-x-2">
                            <p className="text-grey4">${listing.pricing}</p>
                            <div className="flex items-center space-x-1 text-grey4">
                              <span>
                                <FiMapPin />
                              </span>

                              <p>{listing.userAddress.state.slice(0, 8)}</p>
                            </div>
                          </div>
                        </div>

                        <div
                          className={`w-[12px] h-[12px] rounded-[50%] border-[1.5px] border-green4 relative flex justify-center items-center ${
                            listing.available === true
                              ? "border-green5"
                              : "border-red5"
                          }`}
                        >
                          <span
                            className={`w-[6px] h-[6px] block rounded-[50%] ${
                              listing.available === true
                                ? "bg-green5"
                                : "bg-red5"
                            }`}
                          ></span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex justify-center items-center my-10 space-x-5">
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
          )}
        </div>
      </main>
      <NewFooter />
    </div>
  );
};

export default ServiceListing;
