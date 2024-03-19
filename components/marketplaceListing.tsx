import React, { useState, useEffect } from "react";
import axios from "axios";
import { FiMapPin } from "react-icons/fi";
import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";

import loader from "../public/taskhub-newloader.gif";

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

const ListingComp = () => {
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

  const handleFetchListing = async () => {
    setIsLoading(true);

    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}listing/all-active-listings/0`
      );

      // console.log("Listing: ", response);
      // console.log("ListingData: ", listingData);

      if (response.status === 200) {
        setListingData(response.data);
        setIsLoading(false);
      }
    } catch (error) {
      // console.log(error);
      setIsLoading(false);
      setErrorMsg("Error loading listings");
    }
  };

  useEffect(() => {
    handleFetchListing();
  }, []);

  return (
    <div>
      {isLoading ? (
        <div className="w-[700px] flex items-center justify-center h-[300px] ">
          <Image src={loader} alt="loader" width={80} />
        </div>
      ) : (
        <div className="flex flex-col space-y-8">
          <div className="grid grid-cols-5 gap-10">
            {listingData.content.slice(0, 10).map((listing, index) => (
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
                          listing.available === true ? "bg-green5" : "bg-red5"
                        }`}
                      ></span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-end w-full">
            <Link href="/marketplace/listing">
              <button
                type="button"
                className="flex items-center  border-[1.5px] border-[#D0D5DD] px-3 py-2 rounded-xl hover:border-[#FE9B07] hover:bg-black hover:text-white"
              >
                See more
                <span className="ml-2">
                  <FaArrowRightLong />
                </span>
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default ListingComp;
