import React, { useEffect, useState } from "react";
import { SearchButton } from "../buttons/Button";
import { Button } from "../buttons/Button";
import Link from "next/link";
import { revalia } from "@/styles/font";
import Image from "next/image";
import { LuMapPin } from "react-icons/lu";
import { IoSearch } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

import styles from "./herosection.module.css";
import heroImage1 from "../../public/newheroimage1.png";
import heroImage2 from "../../public/newheroimage2.png";
import heroImage3 from "../../public/newheroimage3.png";
import heroImage4 from "../../public/newheroimage4.png";
// import styles from '../../src/styles/font.module.css'

const useImageTransition = (images: any, transitionDuration: any) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Change image after the specified duration
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, transitionDuration);

    return () => clearInterval(interval); // Cleanup function to clear interval
  }, [images.length, transitionDuration]);

  return currentImageIndex;
};

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

const HeroSection = () => {
  const [search, setSearch] = useState("");
  const [searchListing, setSearchListing] = useState<searchListing[]>([]);
  const [searching, setSearching] = useState(false);

  const handleSearchChange = (e: any) => {
    setSearch(e.target.value); // Update the search state with the input value
  };

  const handleClearSearch = () => {
    setSearch("");
    setSearchListing([]); // Clear the search state
    setSearching(false);
  };

  // Image1 transition
  const images1 = [heroImage1, heroImage4];
  const currentImageIndex1 = useImageTransition(images1, 3000);

  // Image2 transition
  const images2 = [heroImage2, heroImage3];
  const currentImageIndex2 = useImageTransition(images2, 3000);

  // Image3 transition
  const images3 = [heroImage3, heroImage2];
  const currentImageIndex3 = useImageTransition(images3, 3000);

  // Image4 transition
  const images4 = [heroImage4, heroImage1];
  const currentImageIndex4 = useImageTransition(images4, 3000);

  return (
    <div
      className={` w-full bg-gradient-to-r from-[#F8E9FE] via-[#FFFFFF] to-[#F5DDFD]`}
    >
      <div
        className={`max-w-7xl flex items-center justify-between p-5 px-20 pt-[100px] pb-20 mx-auto`}
      >
        <div className={`flex flex-col justify-around w-1/2 text-black`}>
          <div className={`flex flex-col`}>
            <h1
              className={`text-xxl leading-tight  mt-[3rem] mb-5 font-[400] w-[375px] ${revalia.className}`}
            >
              Get Quick
              <br />
              And<span className={`text-purpleBase`}> Efficient </span>Service
            </h1>

            <p className={`text-base text-justify w-[500px] font-[100]`}>
              Our user-friendly platform ensures a seamless experience, allowing
              you to effortlessly find, connect, and engage with the perfect
              service professionals
            </p>
          </div>

          <div className={`flex justify-start my-10 items-center`}>
            <Link href="/auth/">
              <button className="w-[150px] h-[60px] border-none text-white  bg-purpleBase text-[12px] rounded-lg hover:bg-purpleHover">
                Get Started
              </button>
            </Link>
          </div>

          <div
            // className={`flex justify-start search items-center w-[650px] h-[200px]  mt-10 ${styles.getStartedAnimation}`}
            className=" w-[320px] flex flex-col space-y-6"
          >
            <div className="flex items-center font-bold w-full justify-between">
              <p>Find any service in</p>
              <div className="bg-[#292D32] text-white flex items-center py-2 px-4 space-x-2 text-[18px]">
                <span>
                  <LuMapPin />
                </span>
                <p>All Australia</p>
              </div>
            </div>

            <div className="w-full  flex items-center border-[1.5px] border-[#969696] bg-white relative text-[#969696] p-2 rounded-lg text-[14px] space-x-2">
              <input
                type="text"
                placeholder="I am looking for..."
                className=" focus:outline-none  w-[250px] text-grey6 "
                onChange={handleSearchChange}
                value={search}
              />
              {search && (
                <span
                  className="text-[20px] text-grey4 cursor-pointer hover:text-grey6"
                  onClick={handleClearSearch}
                >
                  <IoClose />
                </span>
              )}
              <span className=" right-2 top-2 text-[20px] absolute">
                <IoSearch />
              </span>
            </div>
          </div>
        </div>

        <div className=" w-[600px] h-[600px] flex justify-between mt-5 hid">
          <div className="flex flex-col space-y-8 mt-16">
            <div className="">
              <Image
                src={images1[currentImageIndex1]}
                width={270}
                alt=""
                className={`transition-opacity duration-1000 ease-in-out opacity-0`}
                onLoadingComplete={(image) =>
                  image.classList.remove("opacity-0")
                }
              />
            </div>
            <div className="">
              <Image
                src={images3[currentImageIndex3]}
                width={270}
                alt=""
                className={`transition-opacity duration-1000 ease-in-out opacity-0`}
                onLoadingComplete={(image) =>
                  image.classList.remove("opacity-0")
                }
              />
            </div>
          </div>
          <div className="flex flex-col space-y-8">
            <div>
              <Image
                src={images2[currentImageIndex2]}
                width={270}
                alt=""
                className={`transition-opacity duration-1000 ease-in-out opacity-0`}
                onLoadingComplete={(image) =>
                  image.classList.remove("opacity-0")
                }
              />
            </div>
            <div>
              <Image
                src={images4[currentImageIndex4]}
                width={270}
                alt=""
                className={`transition-opacity duration-1000 ease-in-out opacity-0`}
                onLoadingComplete={(image) =>
                  image.classList.remove("opacity-0")
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
