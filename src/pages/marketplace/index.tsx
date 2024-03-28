import React, { useState, useEffect } from "react";
import axios from "axios";
import { FiMapPin } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FiTool } from "react-icons/fi";
import { FiSearch } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import Head from "next/head";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import { FiHome } from "react-icons/fi";

import ServiceSlider from "../../../components/serviceSlider/ServiceSlider";
import loader from "../../../public/taskhub-newloader.gif";
import Nav from "../../../components/nav/Nav";
import NewFooter from "../../../components/NewFooter/NewFooter";
import { poppins } from "@/styles/font";
import ListingComp from "../../../components/marketplaceListing";
import TaskComp from "../../../components/marketplaceTask";
import ServiceListing from "./listing";

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

const Marketplace = () => {
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
  const [filter, setFilter] = useState("All");
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

  // To serach

  const handlefilter = async (searchString: string) => {
    setIsLoading(true);
    setSearching(true);
    console.log(search);

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}listing/search-by-criteria?searchString=${searchString}`
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

  // const handlefilterWithDelay = () => {
  //   setTimeout(() => {
  //     handlefilter();
  //   }, 1000); // 2000 milliseconds = 2 seconds
  // };

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
  const listingsPerPage = 10;

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

  const goBack = () => {
    window.history.back();
  };

  // slider

  const [imageSlider, setImageSlider] = useState(0);
  const [selectedImage, setSelectedImage] = useState<string[]>([]);

  const gotoPrev = () => {
    const isFirstSlide = imageSlider === 0;
    const newImage = isFirstSlide ? selectedImage.length - 1 : imageSlider - 1;
    setImageSlider(newImage);
  };

  const gotoNext = () => {
    const isLastSlide = imageSlider === selectedImage.length - 1;
    const newImage = isLastSlide ? 0 : imageSlider + 1;
    setImageSlider(newImage);
  };

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setImageSlider((prevIndex) =>
  //       prevIndex === selectedImage.length - 1 ? 0 : prevIndex + 1
  //     );
  //   }, 2000);

  //   // Clear the timer when component unmounts or when the selected testimonial changes
  //   return () => clearTimeout(timer);
  // }, [imageSlider, selectedImage.length]);

  // To scroll

  const handleScroll = () => {
    // window.scrollTo({ top: 0, behavior: "smooth" }); // Scrolls to the top of the page with smooth animation
    const windowHeight = window.innerHeight;
    const middleOfPage = windowHeight / 2;
    window.scrollTo({ top: middleOfPage, behavior: "smooth" }); // Scrolls to the middle of the page with smooth animation
  };

  // Other service

  const services = [
    "Accountants",
    "Building & Construction",
    "Draftsman",
    "Admin",
    "Business",
    "Driving",
    "Appliances",
    "Car Service",
    "Electricians",
    "Auto Electricians",
    "Carpentry",
    "Furniture Assembly",
    "Bakers",
    "Catering",
    "Events Planner",
    "Barber",
    "Cleaning",
    "Gardening",
    "Beauticians",
    "Computers & IT",
    "Hairdressers",
    "Bicycle Service",
    "Delivery",
    "Handyman",
    "Bricklaying",
    "Design",
    "Tech",
  ];
  return (
    <div>
      <Head>
        <title>TaskHub | Marketplace</title>
      </Head>

      <Nav />

      <main className={`min-h-screen pt-10 py-20 ${poppins.className}`}>
        <div>
          <ServiceSlider />
        </div>

        <div className="max-w-7xl mx-auto px-20 my-5 flex flex-col space-y-5">
          <div className="flex justify-between">
            <div className="flex items-center space-x-1 text-[14px]">
              <span
                className="font-bold cursor-pointer"
                onClick={handleClearSearch}
              >
                <FiHome />
              </span>
              <p>/</p>
              <p className="font-bold">{filter}</p>
            </div>

            <div className="flex text-base text-black  rounded-xl border-grey5 items-center justify-center">
              <div
                className={`flex border-[1px]  items-center pl-2 ${
                  isInputFocused ? "border-black" : "border-black"
                } w-[400px]  rounded-xl`}
              >
                <input
                  type="text"
                  value={search}
                  className=" w-[400px] focus:border-white rounded-xl focus:outline-none px-2 py-1"
                  onChange={handleSearchChange}
                  placeholder="I am looking for"
                  onFocus={handleInputFocus}
                  onBlur={handleInputBlur}
                />
                <div className="flex space-x-2 items-center">
                  {search && (
                    <span
                      className="text-[25px] text-grey4 cursor-pointer hover:text-black"
                      onClick={handleClearSearch}
                    >
                      <IoClose />
                    </span>
                  )}
                  <span
                    onClick={handleSearch}
                    className="text-[20px] text-grey3 bg-black rounded-r-[8.5px] cursor-pointer w-[40px] h-[30px] flex items-center justify-center hover:text-white"
                  >
                    <FiSearch />
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <p className="font-semibold">
              Find a professional service provider near you
            </p>
          </div>
        </div>

        <span className="block h-[1px] w-full bg-[#969696] -mt-3"></span>

        <div className="max-w-7xl mx-auto px-20 my-5 flex flex-col space-y-5">
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
                      <p className="text-[25px] text-grey4 h-20">
                        Nothing found
                      </p>
                    )}

                    {searchListing.length > 0 && (
                      <div className="flex flex-col w-[1100px] justify-center items-center ">
                        <div className="flex justify-start w-full mb-5"></div>
                        <div className="grid grid-cols-2 gap-10 ">
                          {currentSearchListings
                            .slice(0, 15)
                            .map((listing, index) => (
                              <div key={listing.id}>
                                <div>
                                  <div className="border-[1.5px] flex-col justify-around space-y-2 items-center border-[#D9D9D9]  rounded-xl shadow-sm px-3 py-4 my-5 flex  w-[550px] h-[460px]">
                                    {listing.businessPictures.length > 0 && (
                                      <img
                                        src={listing.businessPictures[0]}
                                        width={500}
                                        className="rounded-xl border-[1.5px] border-[#D9D9D9] h-[300px]"
                                      />
                                    )}

                                    <div className="flex flex-col w-full px-3 space-y-2">
                                      <div className=" flex items-center justify-between w-full ">
                                        <div className="flex flex-col">
                                          <h4 className="font-extrabold text-[18px]">
                                            {listing.businessName}
                                          </h4>
                                          <div className="flex items-center text-[12px] text-grey5 space-x-[6px]">
                                            <span>
                                              <FiMapPin />
                                            </span>
                                            <div className="flex space-x-1">
                                              <div className="flex items-center">
                                                {listing?.userAddress
                                                  ?.unitNumber && (
                                                  <p>
                                                    {
                                                      listing?.userAddress
                                                        ?.unitNumber
                                                    }
                                                    /
                                                  </p>
                                                )}
                                                <p>
                                                  {
                                                    listing?.userAddress
                                                      ?.streetNumber
                                                  }
                                                  ,
                                                </p>
                                              </div>
                                              <p>
                                                {
                                                  listing?.userAddress
                                                    ?.streetName
                                                }{" "}
                                                St,
                                              </p>

                                              <p>
                                                {listing?.userAddress?.suburb},
                                              </p>

                                              <p>
                                                {listing?.userAddress?.state},
                                              </p>
                                              <p>
                                                {listing?.userAddress?.postCode}
                                              </p>
                                            </div>
                                          </div>
                                        </div>

                                        <div className="text-[12px] font-bold">
                                          <p>From ${listing?.pricing}</p>
                                        </div>
                                      </div>

                                      <div className="text-[14px] text-justify">
                                        <p>
                                          {listing?.serviceDescription
                                            .split(" ")
                                            .slice(0, 20)
                                            .join(" ")}
                                          {/* Display ellipsis (...) if description exceeds 20 words */}
                                          {listing?.serviceDescription.split(
                                            " "
                                          ).length > 20 && "..."}
                                        </p>
                                      </div>

                                      <div className="flex flex-col items-end w-full">
                                        <Link
                                          href={`/marketplace/listing/${listing.id}`}
                                        >
                                          <div className="text-[12px] hover:text-[#FE9B07] group transition-colors duration-500 ">
                                            <div className=" flex items-center space-x-2">
                                              <p>View details</p>
                                              <span className="bold -rotate-45">
                                                <FaArrowRight />
                                              </span>
                                            </div>
                                            <span className="h-[1.5px] block bg-black w-[94px] group-hover:bg-[#FE9B07] transition-colors duration-500"></span>
                                          </div>
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
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
                        <div className="grid grid-cols-2 gap-10">
                          {listingData.content.map((listing, index) => (
                            <div key={listing.id}>
                              <div>
                                <div className="border-[1.5px] flex-col justify-around space-y-2 items-center border-[#D9D9D9]  rounded-xl shadow-sm px-3 py-4 my-5 flex  w-[550px] h-[460px]">
                                  {listing.businessPictures.length > 0 && ( // Check if there are at least two images
                                    <img
                                      src={listing.businessPictures[0]} // Render the second image
                                      alt=""
                                      width={500}
                                      className="rounded-xl border-[1.5px] border-[#D9D9D9] h-[300px]"
                                    />
                                  )}

                                  <div className="flex flex-col w-full px-3 space-y-2">
                                    <div className=" flex items-center justify-between w-full ">
                                      <div className="flex flex-col">
                                        <h4 className="font-extrabold text-[18px]">
                                          {listing.businessName}
                                        </h4>
                                        <div className="flex items-center text-[12px] text-grey5 space-x-[6px]">
                                          <span>
                                            <FiMapPin />
                                          </span>
                                          <div className="flex space-x-1">
                                            <div className="flex items-center">
                                              {listing?.userAddress
                                                ?.unitNumber && (
                                                <p>
                                                  {
                                                    listing?.userAddress
                                                      ?.unitNumber
                                                  }
                                                  /
                                                </p>
                                              )}
                                              <p>
                                                {
                                                  listing?.userAddress
                                                    ?.streetNumber
                                                }
                                                ,
                                              </p>
                                            </div>
                                            <p>
                                              {listing?.userAddress?.streetName}{" "}
                                              St,
                                            </p>

                                            <p>
                                              {listing?.userAddress?.suburb},
                                            </p>

                                            <p>
                                              {listing?.userAddress?.state},
                                            </p>
                                            <p>
                                              {listing?.userAddress?.postCode}
                                            </p>
                                          </div>
                                        </div>
                                      </div>

                                      <div className="text-[12px] font-bold">
                                        <p>From ${listing?.pricing}</p>
                                      </div>
                                    </div>

                                    <div className="text-[14px] text-justify">
                                      <p>
                                        {listing?.serviceDescription
                                          .split(" ")
                                          .slice(0, 20)
                                          .join(" ")}
                                        {/* Display ellipsis (...) if description exceeds 20 words */}
                                        {listing?.serviceDescription.split(" ")
                                          .length > 20 && "..."}
                                      </p>
                                    </div>

                                    <div className="flex flex-col items-end w-full">
                                      <Link
                                        href={`/marketplace/listing/${listing.id}`}
                                      >
                                        <div className="text-[12px] hover:text-[#FE9B07] group transition-colors duration-500 ">
                                          <div className=" flex items-center space-x-2">
                                            <p>View details</p>
                                            <span className="bold -rotate-45">
                                              <FaArrowRight />
                                            </span>
                                          </div>
                                          <span className="h-[1.5px] block bg-black w-[94px] group-hover:bg-[#FE9B07] transition-colors duration-500"></span>
                                        </div>
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                        <div className="flex justify-between w-[1100px] my-10">
                          <div
                            onClick={goBack}
                            className="flex px-2 py-1 items-center space-x-1 hover:text-[#FE9B07] hover:scale-110 cursor-pointer"
                          >
                            <span>
                              <FaArrowLeftLong />
                            </span>
                            <p>Back</p>
                          </div>
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

          <div className="w-full flex justify-center ">
            <div className=" w-[600px] flex flex-col items-center space-y-5">
              <h2 className="text-[18px] font-bold">
                Explore Other Services on Marketplace
              </h2>
              <div className="grid grid-cols-3 gap-3 gap-x-16 text-[12px] ">
                {services.map((newServices, index) => (
                  <div
                    key={index}
                    className="hover:font-semibold cursor-pointer"
                    onClick={() => {
                      setFilter(() => newServices); // Update the search state immediately
                      handlefilter(newServices);
                      handleScroll();
                    }}
                  >
                    <p>{newServices}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <NewFooter />
    </div>
  );
};

export default Marketplace;
