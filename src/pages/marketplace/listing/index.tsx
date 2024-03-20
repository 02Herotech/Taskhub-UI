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
import { useRouter } from "next/router";
import { FiSearch } from "react-icons/fi";
import { IoClose } from "react-icons/io5";

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
      posterId: number;
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
interface searchListing {
  id: number;
  posterId: number;
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

type SearchListingState = searchListing[];

const ServiceListing = () => {
  const [listingData, setListingData] = useState<listingData>({
    totalElements: 0,
    totalPages: 0,
    pageNumber: 0,
    pageSize: 0,
    content: [
      {
        id: 0,
        posterId: 0,
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

  const [searchListing, setSearchListing] = useState<searchListing[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [errorMsg2, setErrorMsg2] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const [lastPage, setLastPage] = useState(0);
  const [search, setSearch] = useState("");
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [searching, setSearching] = useState(false);

  const handleFetchListing = async () => {
    setIsLoading(true);

    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}listing/all-active-listings/${currentPage}`
      );

      console.log("fetch:", response);
      if (response.status === 200) {
        setListingData(response.data);
        setLastPage(response.data.totalPages); // Update lastPage with fetched value
        setIsLoading(false);
      }
    } catch (error) {
      setIsLoading(false);
      setErrorMsg("Error loading listings");
      // setTimeout(() => {
      //   setErrorMsg("");
      // }, 2000);
    }
  };

  useEffect(() => {
    handleFetchListing();
  }, [currentPage]); // Trigger fetch when currentPage changes

  // To serach

  const handleSearch = async () => {
    setIsLoading(true);
    setSearching(true);
    console.log(search);

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}listing/search-by-criteria?searchString=${search}`
      );

      console.log("search:", response);
      if (response.status === 200) {
        setSearchListing(response.data);
        setIsLoading(false);
      }
    } catch (error) {
      setIsLoading(false);
      setErrorMsg2("Error searching listing");

      // setTimeout(() => {
      //   setErrorMsg("");
      // }, 2000);
    }
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1); // Update currentPage using functional form to ensure the correct value is used
  };

  const handleSearchChange = (e: any) => {
    setSearch(e.target.value); // Update the search state with the input value
  };

  const handleClearSearch = () => {
    setSearch("");
    setSearchListing([]); // Clear the search state
    setSearching(false);
  };

  const handleInputFocus = () => {
    setIsInputFocused(true); // Set isInputFocused to true when the input is focused
  };

  const handleInputBlur = () => {
    setIsInputFocused(false); // Set isInputFocused to false when the input is blurred
  };

  // For search pagination
  const [currentSearchPage, setCurrentSearchPage] = useState(1);
  const [currentSearchListings, setCurrentSearchListings] =
    useState<SearchListingState>([]);
  const [nthPageForSearchListing, setNthPageForSearchListing] = useState(0);
  const listingsPerPage = 15;

  useEffect(() => {
    const indexOfLastListing = currentSearchPage * listingsPerPage;
    const indexOfFirstListing = indexOfLastListing - listingsPerPage;

    // Update currentSearchListings based on pagination
    const updatedSearchListings = searchListing.slice(
      indexOfFirstListing,
      indexOfLastListing
    );
    setCurrentSearchListings(updatedSearchListings);

    // Update nthPageForSearchListings based on the length of searchListing
    const updatedNthPageForSearchListings = Math.ceil(
      searchListing.length / listingsPerPage
    );
    setNthPageForSearchListing(updatedNthPageForSearchListings);
  }, [currentSearchPage, searchListing]);

  return (
    <div>
      <Nav />
      <main className={`min-h-screen py-20 ${poppins.className}`}>
        <div>
          <ServiceSlider />
        </div>
        <div className="max-w-7xl mx-auto px-20 my-20 flex flex-col space-y-16">
          <div className="flex flex-col space-y-10">
            <div className="flex bg-[#381F8C] w-[200px] items-center justify-center space-x-2 py-3">
              <span className="text-[#FE9B07]">
                <FiTool />
              </span>
              <p className="text-white">Service Listings</p>
            </div>
            <div className="flex text-base text-black font-bold  rounded-xl border-grey5 items-center justify-center">
              <div
                className={`flex border-2  items-center pl-2 ${
                  isInputFocused ? "border-grey6" : "border-grey3"
                } w-[400px]  rounded-xl`}
              >
                <input
                  type="text"
                  value={search}
                  className=" w-[400px] focus:border-white rounded-xl focus:outline-none px-2 py-1"
                  onChange={handleSearchChange}
                  placeholder=""
                  onFocus={handleInputFocus}
                  onBlur={handleInputBlur}
                />
                <div className="flex space-x-2 items-center">
                  {search && (
                    <span
                      className="text-[25px] text-grey4 cursor-pointer hover:text-grey6"
                      onClick={handleClearSearch}
                    >
                      <IoClose />
                    </span>
                  )}
                  <span
                    onClick={handleSearch}
                    className="text-[20px] text-grey4 bg-grey3 rounded-r-[8.5px] cursor-pointer w-[40px] h-[30px] flex items-center justify-center hover:bg-grey6"
                  >
                    <FiSearch />
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div>
            {searching ? (
              <div>
                {isLoading ? (
                  <div className="w-full flex items-center justify-center h-[300px] ">
                    <Image src={loader} alt="loader" width={80} />
                  </div>
                ) : (
                  <div>
                    {errorMsg2 && (
                      <div className="text-red5 text-center">{errorMsg2}</div>
                    )}
                    {searchListing.length === 0 && (
                      <p className="text-[25px] text-grey4">No search found</p>
                    )}

                    {searchListing.length > 0 && (
                      <div className="flex flex-col w-[1100px] justify-center items-center border">
                        <div className="grid grid-cols-5 gap-10 border">
                          {currentSearchListings
                            .slice(0, 15)
                            .map((listing, index) => (
                              <Link
                                href={`/marketplace/listing/${listing.id} `}
                                key={listing.id}
                              >
                                <div>
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
                                          <p className="text-grey4">
                                            ${listing.pricing}
                                          </p>
                                          <div className="flex items-center space-x-1 text-grey4">
                                            <span>
                                              <FiMapPin />
                                            </span>

                                            <p>
                                              {listing.userAddress.state.slice(
                                                0,
                                                8
                                              )}
                                            </p>
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
                              </Link>
                            ))}
                        </div>
                        <div className="flex justify-center w-[1100px] my-10">
                          <div className="flex justify-center items-center space-x-5">
                            <button
                              disabled={currentSearchPage === 1}
                              className="border rounded-full p-2 hover:border-[#FE9B07] hover:text-[#FE9B07] cursor-pointer disabled:border-grey4 disabled:text-grey4"
                            >
                              <IoIosArrowBack />
                            </button>
                            <p>{currentSearchPage}</p>
                            <button
                              disabled={
                                currentSearchPage === nthPageForSearchListing
                              }
                              className="border rounded-full p-2 hover:border-[#FE9B07] hover:text-[#FE9B07] cursor-pointer disabled:border-grey4 disabled:text-grey4"
                            >
                              <IoIosArrowForward />
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ) : (
              <div>
                {isLoading ? (
                  <div className="w-full flex items-center justify-center h-[300px] ">
                    <Image src={loader} alt="loader" width={80} />
                  </div>
                ) : (
                  <div>
                    {errorMsg ? (
                      <div className="text-red5 text-center">{errorMsg}</div>
                    ) : (
                      <div className="flex flex-col w-[1100px] justify-center items-center">
                        <div className="grid grid-cols-5 gap-10">
                          {listingData.content.map((listing, index) => (
                            <Link
                              href={`/marketplace/listing/${listing.id}`}
                              key={listing.id}
                            >
                              <div>
                                <div className="border-[1.5px] cursor-pointer flex-col justify-around space-y-2 items-center border-grey3 hover:border-[#FE9B07] rounded-xl shadow-sm px-3 py-4 my-5 flex group transition-colors duration-200 h-[230px] w-[180px]">
                                  <img
                                    src={listing.businessPictures[0]}
                                    alt=""
                                    width={180}
                                    className="rounded-xl bg-cover h-[150px] border-[1.5px] border-grey3 group-hover:border-[#FE9B07] transition-colors duration-200 w-[180px]"
                                  />

                                  <div className="flex justify-between w-[150px] items-center">
                                    <div className="flex flex-col space-y-2">
                                      <h4 className="font-extrabold text-[18px]">
                                        {listing.businessName}
                                      </h4>

                                      <div className="flex items-center text-[13px] space-x-2">
                                        <p className="text-grey4">
                                          ${listing.pricing}
                                        </p>
                                        <div className="flex items-center space-x-1 text-grey4">
                                          <span>
                                            <FiMapPin />
                                          </span>

                                          <p>
                                            {listing.userAddress.state.slice(
                                              0,
                                              8
                                            )}
                                          </p>
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
                            </Link>
                          ))}
                        </div>
                        <div className="flex justify-center w-[1100px] my-10">
                          <div className="flex justify-center items-center space-x-5">
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
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </main>
      <NewFooter />
    </div>
  );
};

export default ServiceListing;
