import Link from "next/link";
import SPDashboardLayout from "../../../../../components/spdashboardLayout";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import axios from "axios";
import Head from "next/head";

import OpenListingCategory from "../../../../../components/listingCategory/open";
import ClosedListingCategory from "../../../../../components/listingCategory/closed";
import AllListingCategory from "../../../../../components/listingCategory/all";

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
    if (listingData.length > 0) {
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
    }
  }, [listingData]);

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
          {currentCategory === "Open" && (
            <OpenListingCategory
              isLoading={isLoading}
              currentCategory={currentCategory}
              activeListings={activeListings}
            />
          )}

          {currentCategory === "Closed" && (
            <ClosedListingCategory
              isLoading={isLoading}
              currentCategory={currentCategory}
              inactiveListings={inactiveListings}
            />
          )}

          {currentCategory === "All" && (
            <AllListingCategory
              isLoading={isLoading}
              currentCategory={currentCategory}
              listingData={listingData}
            />
          )}
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
