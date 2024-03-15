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

      const sortedListings = response.data.content.sort(
        (a: any, b: any) => b.id - a.id
      );

      console.log("Listing: ", response);
      setListingData(sortedListings);
      console.log("ListingData: ", listingData);
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

  // Calculate the indexes for the listings to be displayed on the current page
  const listingsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastListing = currentPage * listingsPerPage;
  const indexOfFirstListing = indexOfLastListing - listingsPerPage;

  const currentActiveListings = activeListings.slice(
    indexOfFirstListing,
    indexOfLastListing
  );
  const currentCLosedListings = inactiveListings.slice(
    indexOfFirstListing,
    indexOfLastListing
  );
  const currentAllListings = listingData.slice(
    indexOfFirstListing,
    indexOfLastListing
  );

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

        <div className="flex justify-center mt-16 w-[800px] ">
          <div className="flex w-[350px] justify-between items-center">
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

        <div className="my-10">
          {isLoading ? (
            <div className="w-[800px] flex items-center justify-center h-[300px] ">
              <Image src={loader} alt="loader" width={80} />
            </div>
          ) : (
            <div>
              {currentCategory === "Open" && (
                <div className="flex flex-col justify-center items-center  w-[800px]  ">
                  <div className=" grid grid-cols-3 gap-10">
                    {currentActiveListings.map((listing) => (
                      <Link
                        href={`/dashboard/service-provider/my-listings/${listing.id} `}
                        key={listing.id}
                      >
                        <div className="border-[1.5px] flex-col justify-around space-y-2 items-center border-grey3 hover:border-[#FE9B07] rounded-xl shadow-sm px-3 py-4 my-5 flex group transition-colors duration-200 h-[230px] w-[180px]">
                          <img
                            src={listing.businessPictures[0]}
                            alt=""
                            width={200}
                            className={`rounded-xl bg-cover h-[150px] border-[1.5px] border-grey3 group-hover:border-[#FE9B07] transition-colors duration-200 w-[180px]`}
                          />

                          <div className="flex justify-between w-[150px] items-center">
                            <div className="flex flex-col space-y-2">
                              <h4 className="font-extrabold text-[18px]">
                                {listing.businessName}
                              </h4>

                              <div className="flex items-center text-[13px]  space-x-2">
                                <p className=" text-grey4">
                                  ${listing.pricing}
                                </p>
                                <div className=" flex items-center space-x-1 text-grey4">
                                  <span>
                                    <FiMapPin />
                                  </span>

                                  <p>{listing.userAddress.state.slice(0, 8)}</p>
                                </div>
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
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>

                  {currentCategory === "Open" && activeListings.length > 0 && (
                    <div className="w-[800px] flex justify-center  ">
                      <div className="flex justify-center items-center my-10 space-x-5 ">
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
                    </div>
                  )}
                </div>
              )}

              {currentCategory === "Open" && activeListings.length === 0 && (
                <div className="w-[800px] flex items-center justify-center h-[300px]">
                  <p className="text-center text-grey5 text-[15px]">
                    Open listing is empty
                  </p>
                </div>
              )}
            </div>
          )}

          <div>
            {currentCategory === "All" && (
              <div className="flex flex-col justify-center items-center  w-[800px]  ">
                <div className=" grid grid-cols-3 gap-10">
                  {currentAllListings.map((listing: listingData) => (
                    <Link
                      href={`/dashboard/service-provider/my-listings/${listing.id} `}
                      key={listing.id}
                    >
                      <div className="border-[1.5px] flex-col justify-around space-y-2 items-center border-grey3 hover:border-[#FE9B07] rounded-xl shadow-sm px-3 py-4 my-5 flex group transition-colors duration-200 h-[230px] w-[180px]">
                        <img
                          src={listing.businessPictures[0]}
                          alt=""
                          width={200}
                          className={`rounded-xl bg-cover h-[150px] border-[1.5px] border-grey3 group-hover:border-[#FE9B07] transition-colors duration-200 w-[180px]`}
                        />

                        <div className="flex justify-between w-[150px] items-center">
                          <div className="flex flex-col space-y-2">
                            <h4 className="font-extrabold text-[18px]">
                              {listing.businessName}
                            </h4>

                            <div className="flex items-center text-[13px]  space-x-2">
                              <p className=" text-grey4">${listing.pricing}</p>
                              <div className=" flex items-center space-x-1 text-grey4">
                                <span>
                                  <FiMapPin />
                                </span>

                                <p>{listing.userAddress.state.slice(0, 8)}</p>
                              </div>
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
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>

                {currentCategory === "All" && listingData.length > 0 && (
                  <div className="w-[800px] flex justify-center  ">
                    <div className="flex justify-center items-center my-10 space-x-5 ">
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
                  </div>
                )}
              </div>
            )}

            {currentCategory === "All" && listingData.length === 0 && (
              <div className="w-[800px] flex items-center justify-center h-[300px] ">
                <p className="text-center text-grey5 text-[15px]">
                  All listing is empty
                </p>
              </div>
            )}
          </div>

          <div>
            {currentCategory === "Closed" && (
              <div className="flex flex-col justify-center items-center  w-[800px] ">
                <div className=" grid grid-cols-3 gap-10">
                  {currentCLosedListings.map((listing: listingData) => (
                    <Link
                      href={`/dashboard/service-provider/my-listings/${listing.id} `}
                      key={listing.id}
                    >
                      <div className="border-[1.5px] flex-col justify-around space-y-2 items-center border-grey3 hover:border-[#FE9B07] rounded-xl shadow-sm px-3 py-4 my-5 flex group transition-colors duration-200 h-[230px] w-[180px]">
                        <img
                          src={listing.businessPictures[0]}
                          alt=""
                          width={200}
                          className={`rounded-xl bg-cover h-[150px] border-[1.5px] border-grey3 group-hover:border-[#FE9B07] transition-colors duration-200 w-[180px]`}
                        />

                        <div className="flex justify-between w-[150px] items-center">
                          <div className="flex flex-col space-y-2">
                            <h4 className="font-extrabold text-[18px]">
                              {listing.businessName}
                            </h4>

                            <div className="flex items-center text-[13px]  space-x-2">
                              <p className=" text-grey4">${listing.pricing}</p>
                              <div className=" flex items-center space-x-1 text-grey4">
                                <span>
                                  <FiMapPin />
                                </span>

                                <p>{listing.userAddress.state.slice(0, 8)}</p>
                              </div>
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
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>

                {currentCategory === "Closed" &&
                  inactiveListings.length > 0 && (
                    <div className="w-[800px] flex justify-center  ">
                      <div className="flex justify-center items-center my-10 space-x-5 ">
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
                    </div>
                  )}
              </div>
            )}

            {currentCategory === "Closed" && inactiveListings.length === 0 && (
              <div className="w-[800px] flex items-center justify-center h-[300px]">
                <p className="text-center text-grey5 text-[15px]">
                  Closed listing is empty
                </p>
              </div>
            )}

            {/* <p className="text-center text-red4 text-[15px]">{errorMsg}</p> */}
          </div>
        </div>

        <div className="flex justify-center items-center w-[800px]  my-2">
          <Link href="/dashboard/service-provider/my-listings/create-listing">
            <button className="bg-purpleBase text-[15px] rounded-lg border-none px-4 py-2 text-white hover:bg-purpleHover">
              Create New Listing
            </button>
          </Link>
        </div>
      </div>
    </SPDashboardLayout>
  );
};

export default Listing;
