import React, { useState, useEffect } from "react";
import Image from "next/image";
import { MdVerified } from "react-icons/md";
import { GrLocation, GrSearch } from "react-icons/gr";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { FaRegUser } from "react-icons/fa";
import axios from "axios";
import Head from "next/head";
import { MdOutlineCameraAlt } from "react-icons/md";
import { IoClose } from "react-icons/io5";

import CustomerDashboardLayout from "../../../../components/customerdashboardLayout";

const CustomerDashboard = () => {
  const [completeReg, setCompleteReg] = useState(true);
  const [suburb, setSuburb] = useState("");
  const [state, setState] = useState("");
  const [profilePicture, setProfilePicture] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const [showProfileDialogue, setShowProfileDialogue] = useState(false);

  const { data: session } = useSession();

  const firstName = session?.user.user.firstName;
  const lastName = session?.user.user.lastName;
  const lastNameInitial = lastName?.charAt(0);
  const userID = session?.user?.user?.id;

  const handleUserProfile = async () => {
    try {
      if (!userID) {
        return;
      }
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}user/user-profile/${userID}`
      );
      console.log("userProfile:", response);
      if (response.status === 200) {
        if (response.data.enabled === false) {
          setCompleteReg(false);
        }
        setSuburb(response.data.address.suburb);
        setState(response.data.address.state);
        setProfilePicture(response.data.profileImage);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    handleUserProfile();
  }, [userID]);

  return (
    <CustomerDashboardLayout>
      <Head>
        <title>TaskHub | Dashboard</title>
      </Head>
      {!completeReg && (
        <div className="bg-purpleBase mt-4  text-white rounded-md flex justify-center items-center w-[900px] mx-auto py-3">
          <p>
            Before you proceed, kindly complete your registration to have full
            control of your account -
          </p>
          <Link
            href="/dashboard/customer/complete-registration"
            className={`ml-2 text-[#FE9B07] border-[2px] border-[#FE9B07] py-2 px-4 rounded-md hover:text-[#b4b4b4] hover:border-[#b4b4b4]`}
          >
            Complete
          </Link>
        </div>
      )}

      <div
        className={`m-10 w-[1000px] flex flex-col justify-start relative h-full p-10`}
      >
        <div className={`flex items-center justify-between`}>
          <div className="flex justify-center items-center">
            {profilePicture === "" || profilePicture === null ? (
              <div
                className={` bg-grey3 rounded-[50%] border-2 border-[#FE9B07] border-whiten p-7 text-[80px] text-white relative `}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <FaRegUser />

                {isHovered && (
                  <span
                    className="bg-black bg-opacity-60 text-white text-[60px] absolute inset-0 flex justify-center items-center rounded-[50%] transition-opacity duration-1000 cursor-pointer"
                    onClick={() => setShowProfileDialogue(true)}
                  >
                    <MdOutlineCameraAlt />
                  </span>
                )}
              </div>
            ) : (
              <div
                className={`w-[140px] h-[140px] rounded-[50%] border-2 relative border-[#FE9B07] flex justify-center items-center`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <img
                  src={profilePicture}
                  alt="customer-image"
                  className={`rounded-[50%] object-cover h-[130px]`}
                  width={130}
                />

                {isHovered && (
                  <span
                    className="bg-black bg-opacity-60 text-white text-[60px] absolute inset-0 flex justify-center items-center rounded-[50%] transition-opacity duration-1000 cursor-pointer"
                    onClick={() => setShowProfileDialogue(true)}
                  >
                    <MdOutlineCameraAlt />
                  </span>
                )}
              </div>
            )}

            <div className={`flex flex-col justify-center items-start ml-5`}>
              <div
                className={`flex items-center justify-center text-[18px] font-extrabold`}
              >
                <p>
                  {firstName} {lastNameInitial}.
                </p>

                {completeReg && <MdVerified className={`text-green4 ml-2`} />}
              </div>

              {completeReg ? (
                <div className={`flex text-[13px] items-center justify-center`}>
                  <GrLocation className={`mr-1`} />
                  <p>
                    {suburb}, {state}
                  </p>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>

          <div
            className={`flex justify-center border-[1px] border-[#D9D9D9] p-2 rounded-md items-center`}
          >
            <GrSearch className={`mr-2`} />
            <input
              type="text"
              className={`w-[350px] outline-none`}
              placeholder="Search"
            />
          </div>
        </div>

        {showProfileDialogue && (
          <div className="bg-black bg-opacity-60 w-full h-full flex justify-center items-center absolute inset-0 transition-opacity duration-1000">
            <div className="relative">
              <div className="bg-white rounded-2xl w-[500px] h-[500px] flex flex-col justify-center items-center space-y-10">
                <div className=" relative  ">
                  {profilePicture === "" || profilePicture === null ? (
                    <span
                      className={` bg-grey3 rounded-[50%] border-2 border-[#FE9B07]  p-7 text-[130px] text-white cursor-pointer`}
                    >
                      <FaRegUser />
                    </span>
                  ) : (
                    <div
                      className={`w-[250px] h-[250px]  rounded-[50%] border-2 border-[#FE9B07] flex justify-center items-center`}
                    >
                      <img
                        src={profilePicture}
                        alt="customer-image"
                        className={`rounded-[50%] object-cover h-[240px]`}
                        width={240}
                      />
                    </div>
                  )}
                </div>
                <div className="border block ">
                  <label htmlFor="pictureProfile">
                    <input type="file" accept="image/*" className="hidden" />
                    <div className="border bg-green4 rounded-xl px-5 py-3">
                      <span>Upload</span>
                    </div>
                  </label>
                </div>
              </div>
            </div>

            <span
              className=" top-5 right-5 text-white text-[30px] absolute hover:text-grey5 cursor-pointer"
              onClick={() => setShowProfileDialogue(false)}
            >
              <IoClose />
            </span>
          </div>
        )}
      </div>
    </CustomerDashboardLayout>
  );
};

export default CustomerDashboard;
