import Link from "next/link";
import SPDashboardLayout from "../../../../../components/spdashboardLayout";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import { CiCalendar } from "react-icons/ci";
import { FiMapPin } from "react-icons/fi";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import loader from "../../../../../public/taskhub-newloader.gif";

interface listingData {
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
  businessPictures: ["string"];
}

const Listing = () => {
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
  const [listingData, setListingData] = useState<listingData[]>([]);
  const [activeListings, setActiveListings] = useState<listingData[]>([]);
  const [inactiveListings, setInactiveListings] = useState<listingData[]>([]);
  const { data: session } = useSession();
  const [currentCategory, setCurrentCategory] = useState<string>("Open");
  const [errorMsg, setErrorMsg] = useState("");

  const userToken = session?.user?.accessToken;

  const handleFetchListing = async () => {
    await new Promise((resolve) => setTimeout(resolve, 3000));

    if (!userToken) {
      return; // Skip fetching if userToken is not available
    }

    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}listing/listings/0`,
        {
          headers: {
            Authorization: `Bearer ${userToken}`,
            // "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("Listing: ", response);
      setListingData(response.data.content);
      console.log("ListingData: ", listingData);
      // const customerTasks = response.data
      //   .filter((task: taskData) => task.posterId === session?.user?.user.id)
      //   .sort((a: any, b: any) => b.id - a.id);
      // setTaskData(customerTasks);

      // console.log("task response: ", response);
      // console.log("data: ", taskData);
    } catch (error) {
      console.log(error);
      setErrorMsg("Error loading listings");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    handleFetchListing();
  }, [userToken, session]);

  // Update active and inactive listing whenever listingData changes
  useEffect(() => {
    const activeListingFiltered = listingData.filter(
      (listing) => listing.available
    );
    const inactiveListingFiltered = listingData.filter(
      (listing) => !listing.available
    );

    setActiveListings(activeListingFiltered);
    setInactiveListings(inactiveListingFiltered);

    console.log("Active Listings: ", activeListings);
    console.log("Inactive Listings: ", inactiveListings);
  }, [listingData]);

  // Calculate the indexes for the tasks to be displayed on the current page
  const listingsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastTask = currentPage * listingsPerPage;
  const indexOfFirstTask = indexOfLastTask - listingsPerPage;

  const currentActiveListings = activeListings.slice(
    indexOfFirstTask,
    indexOfLastTask
  );
  const currentCLosedListings = inactiveListings.slice(
    indexOfFirstTask,
    indexOfLastTask
  );
  const currentAllTasks = listingData.slice(indexOfFirstTask, indexOfLastTask);

  const nthPageforActive = Math.ceil(activeListings.length / listingsPerPage);
  const nthPageforClosed = Math.ceil(inactiveListings.length / listingsPerPage);
  const nthPageforAll = Math.ceil(listingData.length / listingsPerPage);

  return (
    <SPDashboardLayout>
      <div>
        <Head>
          <title>TaskHub | My Listing</title>
        </Head>
      </div>

      <div
        className={`my-16 flex flex-col justify-center items-start w-[900px]`}
      >
        <h1 className="text-lg font-extrabold border border-grey2 rounded-md p-2">
          My Listings
        </h1>

        <div className="flex justify-center mt-10 w-[700px]">
          <div className="flex w-[400px] justify-evenly items-center">
            {catgeory.map((category) => (
              <button
                key={category.id}
                onClick={() => {
                  setCurrentCategory(category.name);
                  handleFetchListing();
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
          {isLoading ? (
            <div className="w-[700px] flex items-center justify-center h-[300px] ">
              <Image src={loader} alt="loader" width={150} />
            </div>
          ) : (
            <div>
              {currentCategory === "Open" && (
                <div className="flex flex-col justify-center items-center">
                  <div className=" grid grid-cols-2 gap-2 w-[700px] ml-16  ">
                    {currentActiveListings.map((listing) => (
                      <Link
                        href={`/dashboard/customer/my-tasks/${listing.id} `}
                        key={listing.id}
                      >
                        <div className="border-[1.5px] space-y-4 flex-col justify-center items-center border-grey3 hover:border-[#FE9B07] rounded-2xl shadow-lg p-4 my-5 flex group transition-colors duration-200 h-[250px] w-[220px]">
                          <img
                            src={listing.businessPictures[0]}
                            alt=""
                            width={200}
                            className={`rounded-2xl object-cover h-[170px] border-[1.5px] border-grey3 group-hover:border-[#FE9B07] transition-colors duration-200`}
                          />

                          <div className="flex justify-between w-[190px] items-center">
                            <div className="flex flex-col justify-center text-[13px]  space-y-2">
                              <p className="font-extrabold">
                                ${listing.pricing}
                              </p>
                              <div className=" flex items-center space-x-1 text-grey4">
                                <span>
                                  <FiMapPin />
                                </span>

                                <p>{listing.userAddress.state}</p>
                              </div>
                            </div>

                            <div
                              className={`w-[12px] h-[12px]  rounded-[50%] border-[1.5px] border-green4 relative flex justify-center items-center ${
                                listing.available === true
                                  ? " border-green5"
                                  : " border-red5"
                              }`}
                            >
                              <span
                                className={`w-[6px] h-[6px] block rounded-[50%] ${
                                  listing.available === true
                                    ? " bg-green5"
                                    : " bg-red5"
                                }`}
                              ></span>
                            </div>

                            {/* <h4 className="font-extrabold text-[18px]">
                              {listing.businessName}
                            </h4> */}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>

                  {currentCategory === "Open" && activeListings.length > 0 && (
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
                        // disabled={currentPage === nthPageforAll}
                        className="border rounded-full p-2 hover:border-[#FE9B07] hover:text-[#FE9B07] cursor-pointer disabled:border-grey4 disabled:text-grey4"
                      >
                        <IoIosArrowForward />
                      </button>
                    </div>
                  )}
                </div>
              )}

              {currentCategory === "Open" && activeListings.length === 0 && (
                <div className="w-[700px] flex items-center justify-center h-[300px] ">
                  <p className="text-center text-grey5 text-[15px]">
                    Open task is empty
                  </p>
                </div>
              )}
            </div>
          )}

          <div>
            {currentCategory === "All" && (
              <div className="flex flex-col justify-center items-center">
                <div className=" grid grid-cols-2 gap-2 w-[700px] ml-16  ">
                  {currentAllTasks.map((listing: listingData) => (
                    <Link
                      href={`/dashboard/customer/my-tasks/${listing.id} `}
                      key={listing.id}
                    >
                      <div className="border-[1.5px] space-y-4 flex-col justify-center items-center border-grey3 hover:border-[#FE9B07] rounded-2xl shadow-lg p-4 my-5 flex group transition-colors duration-200 h-[250px] w-[220px]">
                        <img
                          src={listing.businessPictures[0]}
                          alt=""
                          width={200}
                          className={`rounded-2xl object-cover h-[170px] border-[1.5px] border-grey3 group-hover:border-[#FE9B07] transition-colors duration-200`}
                        />

                        <div className="flex justify-between w-[190px] items-center">
                          <div className="flex flex-col justify-center text-[13px]  space-y-2">
                            <p className="font-extrabold">${listing.pricing}</p>
                            <div className=" flex items-center space-x-1 text-grey4">
                              <span>
                                <FiMapPin />
                              </span>

                              <p>{listing.userAddress.state}</p>
                            </div>
                          </div>

                          <div
                            className={`w-[12px] h-[12px]  rounded-[50%] border-[1.5px] border-green4 relative flex justify-center items-center ${
                              listing.available === true
                                ? " border-green5"
                                : " border-red5"
                            }`}
                          >
                            <span
                              className={`w-[6px] h-[6px] block rounded-[50%] ${
                                listing.available === true
                                  ? " bg-green5"
                                  : " bg-red5"
                              }`}
                            ></span>
                          </div>

                          {/* <h4 className="font-extrabold text-[18px]">
                              {listing.businessName}
                            </h4> */}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>

                {currentCategory === "All" && listingData.length > 0 && (
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
                      disabled={currentPage === nthPageforActive}
                      className="border rounded-full p-2 hover:border-[#FE9B07] hover:text-[#FE9B07] cursor-pointer disabled:border-grey4 disabled:text-grey4"
                    >
                      <IoIosArrowForward />
                    </button>
                  </div>
                )}
              </div>
            )}

            {currentCategory === "All" && listingData.length === 0 && (
              <div className="w-[700px] flex items-center justify-center h-[300px] ">
                <p className="text-center text-grey5 text-[15px]">
                  All task is empty
                </p>
              </div>
            )}
          </div>

          <div>
            {currentCategory === "Closed" && (
              <div className="flex flex-col justify-center items-center">
                <div className=" grid grid-cols-2 gap-2 w-[700px] ml-16  ">
                  {currentCLosedListings.map((listing: listingData) => (
                    <Link
                      href={`/dashboard/customer/my-tasks/${listing.id} `}
                      key={listing.id}
                    >
                      <div className="border-[1.5px] space-y-4 flex-col justify-center items-center border-grey3 hover:border-[#FE9B07] rounded-2xl shadow-lg p-4 my-5 flex group transition-colors duration-200 h-[250px] w-[220px]">
                        <img
                          src={listing.businessPictures[0]}
                          alt=""
                          width={200}
                          className={`rounded-2xl object-cover h-[170px] border-[1.5px] border-grey3 group-hover:border-[#FE9B07] transition-colors duration-200`}
                        />

                        <div className="flex justify-between w-[190px] items-center">
                          <div className="flex flex-col justify-center text-[13px]  space-y-2">
                            <p className="font-extrabold">${listing.pricing}</p>
                            <div className=" flex items-center space-x-1 text-grey4">
                              <span>
                                <FiMapPin />
                              </span>

                              <p>{listing.userAddress.state}</p>
                            </div>
                          </div>

                          <div
                            className={`w-[12px] h-[12px]  rounded-[50%] border-[1.5px] border-green4 relative flex justify-center items-center ${
                              listing.available === true
                                ? " border-green5"
                                : " border-red5"
                            }`}
                          >
                            <span
                              className={`w-[6px] h-[6px] block rounded-[50%] ${
                                listing.available === true
                                  ? " bg-green5"
                                  : " bg-red5"
                              }`}
                            ></span>
                          </div>

                          {/* <h4 className="font-extrabold text-[18px]">
                           {listing.businessName}
                         </h4> */}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>

                {currentCategory === "Closed" &&
                  inactiveListings.length > 0 && (
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

            {currentCategory === "Closed" && inactiveListings.length === 0 && (
              <div className="w-[700px] flex items-center justify-center h-[300px]">
                <p className="text-center text-grey5 text-[15px]">
                  Closed task is empty
                </p>
              </div>
            )}

            {/* <p className="text-center text-red4 text-[15px]">{errorMsg}</p> */}
          </div>
        </div>
      </div>
    </SPDashboardLayout>
  );
};

export default Listing;
