import Image from "next/image";
import Link from "next/link";
import { FiMapPin } from "react-icons/fi";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useEffect, useState } from "react";

import loader from "../../public/taskhub-newloader.gif";

interface ClosedListingProps {
  isLoading: any;
  currentCategory: any;
  inactiveListings: any;
}

const ClosedListingCategory = ({
  isLoading,
  currentCategory,
  inactiveListings,
}: ClosedListingProps) => {
  const listingsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const [currentClosedListings, setCurrentClosedListings] = useState([]);
  const [nthPageforClosed, setNthPageForClosed] = useState(0);

  useEffect(() => {
    const indexOfLastListing = currentPage * listingsPerPage;
    const indexOfFirstListing = indexOfLastListing - listingsPerPage;

    // Update currentClosedListings based on pagination
    const updatedClosedListings = inactiveListings.slice(
      indexOfFirstListing,
      indexOfLastListing
    );
    setCurrentClosedListings(updatedClosedListings);

    // Update nthPageforClosed based on the length of inactiveListings
    const updatedNthPageForClosed = Math.ceil(
      inactiveListings.length / listingsPerPage
    );
    setNthPageForClosed(updatedNthPageForClosed);
  }, [currentPage, inactiveListings]);
  return (
    <div>
      {isLoading ? (
        <div className="w-[800px] flex items-center justify-center h-[300px] ">
          <Image src={loader} alt="loader" width={80} />
        </div>
      ) : (
        <div>
          {currentCategory === "Closed" && inactiveListings.length === 0 ? (
            <div className="w-[800px] flex items-center justify-center h-[300px]">
              <p className="text-center text-grey5 text-[15px]">
                Closed listing is empty
              </p>
            </div>
          ) : (
            <div className="flex flex-col justify-center items-center  w-[800px]  ">
              <div className=" grid grid-cols-3 gap-10 h-[600px] ">
                {currentClosedListings.map((listing: any) => (
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

              {currentCategory === "Closed" && inactiveListings.length > 0 && (
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
        </div>
      )}
    </div>
  );
};

export default ClosedListingCategory;
