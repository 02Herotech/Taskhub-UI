import { useRouter } from "next/router";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import Image from "next/image";
import { FiMapPin } from "react-icons/fi";
import { BsThreeDots } from "react-icons/bs";
import { FaArrowLeftLong } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { poppins } from "@/styles/font";
import { FiTool } from "react-icons/fi";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import Nav from "../../../../../components/nav/Nav";
import ServiceSlider from "../../../../../components/serviceSlider/ServiceSlider";
import NewFooter from "../../../../../components/NewFooter/NewFooter";
import loader from "../../../../../public/taskhub-newloader.gif";

interface listingData {
  length: number;
  id: number;
  posterID: number;
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
  };
  availableTo: {
    hour: number;
    minute: number;
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

const MPListingDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data: session } = useSession();

  const [listingData, setListingData] = useState<listingData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isOpened, setIsOpened] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [idValue, setIdValue] = useState("");
  const [isEnlarged, setIsEnlarged] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string>("");
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleFetchListingDetails = async () => {
    const listingId = parseInt(id as string, 10);
    console.log("id value: ", listingId);
    try {
      setIsLoading(true);

      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}listing/get-listing/${listingId}`
      );

      console.log("listingID: ", response);
      setListingData(response.data);
      // console.log("listingDatat:", listingData);
    } catch (error) {
      console.error(error);
      setErrorMsg("Error loading listiing");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    handleFetchListingDetails();
  }, [id]);

  const handleShowImage = (imageUrl: string) => {
    setSelectedImage(imageUrl);
    setIsEnlarged(true);
  };

  const goBack = () => {
    window.history.back();
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

          {errorMsg && (
            <p className="text-center w-[900px] text-red10 mt-4 -mb-4">
              {errorMsg}
            </p>
          )}

          {isLoading ? (
            <div className="w-[900px] flex items-center justify-center h-[300px] ">
              <Image src={loader} alt="loader" width={80} />
            </div>
          ) : (
            <div className="flex border border-green4 flex-col mt-16 w-[900px] bg-[#FBFAFB] rounded-2xl shadow-xl p-10 relative ">
              {/* <span
                className="absolute top-2 right-5 text-grey4  cursor-pointer hover:text-grey6"
                onClick={() => setIsOpened(!isOpened)}
              >
                <BsThreeDots />
              </span> */}

              {/* {isOpened && (
              <div className="flex flex-col text-[12px]  text-grey4 absolute right-8 top-6 items-center space-y-1">
                <p
                  onClick={handleEditClick}
                  className=" hover:text-grey6 hover:border-b-[1.5px] cursor-pointer h-[20px] px-2 "
                >
                  Edit
                </p>
                <p
                  className=" hover:text-grey6 hover:border-b-[1.5px] cursor-pointer h-[20px] px-2"
                  onClick={handleDelete}
                >
                  Delete
                </p>
              </div>
             )} */}

              <div className="flex flex-col space-y-8">
                <div className="flex flex-col">
                  <h2 className="font-bold text-[22px]">
                    {listingData?.businessName}
                  </h2>
                  <div className="flex items-center space-x-2">
                    <p className="text-[12px]">{listingData?.subCategory}</p>
                    <div
                      className={` w-[12px] h-[12px]  rounded-[50%] border-[1.5px] border-green4 relative flex justify-center items-center ${
                        listingData?.available === true
                          ? " border-green5"
                          : " border-red5"
                      }`}
                    >
                      <span
                        className={`w-[6px] h-[6px] block rounded-[50%] ${
                          listingData?.available === true
                            ? " bg-green5"
                            : " bg-red5"
                        }`}
                      ></span>
                    </div>
                  </div>
                </div>

                <div className="">
                  <h4 className="font-bold text-[15px]">
                    Service Description:
                  </h4>
                  <p className="text-justify text-[13px] leading-normal">
                    {listingData?.serviceDescription}
                  </p>
                </div>

                <div className="flex flex-col">
                  <h4 className="font-bold text-[15px]">TIME:</h4>
                  <div className="flex flex-col space-y-2">
                    <div className="flex items-center space-x-2">
                      <p className="font-bold text-[15px]">Opening:</p>
                      <div className="flex items-center space-x-2 text-[13px]">
                        {listingData?.startHour ? (
                          <span className="border px-2 py-1 rounded-md text-[#969696] font-bold border-black">
                            {listingData?.startHour}
                          </span>
                        ) : (
                          <span className="border px-2 py-1 rounded-md text-[#969696] font-bold border-black">
                            0
                          </span>
                        )}
                        <span>:</span>

                        {listingData?.startMinute ? (
                          <span className="border px-2 py-1 rounded-md text-[#969696] font-bold border-black">
                            {listingData?.startMinute}
                          </span>
                        ) : (
                          <span className="border px-2 py-1 rounded-md text-[#969696] font-bold border-black">
                            0
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <p className="font-bold text-[15px]">Closing:</p>
                      <div className="flex items-center space-x-2 text-[13px]">
                        {listingData?.closeHour ? (
                          <span className="border px-2 py-1 rounded-md text-[#969696] font-bold border-black">
                            {listingData?.closeHour}
                          </span>
                        ) : (
                          <span className="border px-2 py-1 rounded-md text-[#969696] font-bold border-black">
                            0
                          </span>
                        )}

                        <span>:</span>

                        {listingData?.closeMinute ? (
                          <span className="border px-2 py-1 rounded-md text-[#969696] font-bold border-black">
                            {listingData?.closeMinute}
                          </span>
                        ) : (
                          <span className="border px-2 py-1 rounded-md text-[#969696] font-bold border-black">
                            0
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col space-y-2">
                  <p className="font-bold text-[15px]">DAYS:</p>

                  {listingData &&
                  Array.isArray(listingData.availableDays) &&
                  listingData.availableDays.length > 0 ? (
                    <div className="flex space-x-2">
                      {listingData.availableDays
                        .map((day) => day.toUpperCase()) // Convert days to uppercase for consistent comparison
                        .sort((a, b) => {
                          const daysOrder = [
                            "MONDAY",
                            "TUESDAY",
                            "WEDNESDAY",
                            "THURSDAY",
                            "FRIDAY",
                            "SATURDAY",
                            "SUNDAY",
                          ];
                          return daysOrder.indexOf(a) - daysOrder.indexOf(b);
                        })
                        .map((day, index) => (
                          <span
                            key={index}
                            className="bg-[#14782F] rounded-xl font-bold py-2 px-3 text-white"
                          >
                            {day.slice(0, 3)}{" "}
                            {/* Display first three letters of day */}
                          </span>
                        ))}
                    </div>
                  ) : (
                    <p className="bg-[#14782F] rounded-xl font-bold py-2 text-center text-white w-[150px]">
                      Not Available
                    </p>
                  )}
                </div>

                <div className="flex items-center font-bold text-[13px]  space-x-2">
                  <span className="">
                    <FiMapPin />
                  </span>
                  <div className="flex space-x-[4px]">
                    <p>{listingData?.userAddress?.streetNumber},</p>
                    <p>{listingData?.userAddress?.streetName},</p>
                    {listingData?.userAddress?.unitNumber && (
                      <p>{listingData?.userAddress?.unitNumber},</p>
                    )}
                    <p>{listingData?.userAddress?.suburb},</p>
                    <p>{listingData?.userAddress?.state}</p>
                  </div>
                </div>

                <div className="">
                  <h4 className="font-bold text-[15px]">Pricing:</h4>
                  <p className="text-[13px]">${listingData?.pricing}</p>
                </div>

                <div className="flex space-x-3">
                  {listingData?.businessPictures.map((image, index) => (
                    <div
                      key={index}
                      className="w-[300px] h-[200px] border-2 rounded-xl border-grey3"
                    >
                      <img
                        src={image}
                        alt="Service Images"
                        width={300}
                        height={200}
                        className="rounded-xl bg-cover h-[200px] w[300px] cursor-pointer"
                        onClick={() => handleShowImage(image)}
                      />
                    </div>
                  ))}
                </div>
              </div>
              {isEnlarged && (
                <div className="bg-black border border-red5 bg-opacity-80 absolute inset-0 flex justify-center items-center h-full w-full ">
                  <div className=" h-full w-full flex justify-center items-center relative">
                    <img
                      src={selectedImage}
                      alt="Listing Img"
                      width={650}
                      className="scale-75"
                    />
                    <span
                      className="text-white absolute top-3 right-5 text-[20px] hover:text-grey4 cursor-pointer"
                      onClick={() => setIsEnlarged(false)}
                    >
                      <IoClose />
                    </span>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* <div className="flex justify-center items-center my-10 space-x-5">
            <button
              onClick={handlePreviousListing}
              disabled={currentIndex === 0}
              className="border rounded-full p-2 hover:border-[#FE9B07] hover:text-[#FE9B07] cursor-pointer disabled:border-grey4 disabled:text-grey4"
            >
              <IoIosArrowBack />
            </button>
            <button
              onClick={handleNextListing}
              disabled={!listingData} // Disable next button if listingData is not yet loaded
              className="border rounded-full p-2 hover:border-[#FE9B07] hover:text-[#FE9B07] cursor-pointer disabled:border-grey4 disabled:text-grey4"
            >
              <IoIosArrowForward />
            </button>
          </div> */}

          <div className="flex w-[900px] justify-center items-center mt-10 ">
            <div
              onClick={goBack}
              className="flex px-2 py-1 items-center space-x-1 hover:text-[#FE9B07] hover:scale-110 cursor-pointer"
            >
              <span>
                <FaArrowLeftLong />
              </span>
              <p>Back</p>
            </div>
          </div>
        </div>
      </main>
      <NewFooter />
    </div>
  );
};

export default MPListingDetails;
