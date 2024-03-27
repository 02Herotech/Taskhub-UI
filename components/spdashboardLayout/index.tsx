"use client";

import React, { ReactNode } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { signOut, useSession } from "next-auth/react";
import axios from "axios";
import { useState, useEffect } from "react";
import { FaRegUser } from "react-icons/fa";
import { RxDashboard } from "react-icons/rx";
import { IoPersonOutline } from "react-icons/io5";
import { IoClipboardOutline } from "react-icons/io5";
import { CgBox } from "react-icons/cg";
import { FiHelpCircle, FiMessageCircle } from "react-icons/fi";
import { FiLogOut } from "react-icons/fi";
import { GoGear, GoPulse } from "react-icons/go";
import { TfiWallet } from "react-icons/tfi";
import { MdOutlineNotifications } from "react-icons/md";
import { formatDistanceToNow } from "date-fns";
import { IoMdArrowDropup } from "react-icons/io";
import Link from "next/link";

import portrait from "./../../public/dashboardAssets/portrait.jpg";
import taskHub from "./../../public/newlogo.png";
import Footer from "../footer/Footer";

interface IProps {
  children: ReactNode;
}

interface notificationType {
  id: string | number;
  message: string;
  notificationTime: [string | number];
}

function SPDashboardLayout(props: IProps) {
  const router = useRouter();

  const isLinkActive = (linkPath: string) => {
    return router.pathname === linkPath;
  };

  const [isOpen, setIsOpen] = useState(false);
  const [profilePicture, setProfilePicture] = useState(null);
  const [notification, setNotification] = useState<notificationType[]>([]);

  const { data: session } = useSession();
  console.log(session);

  const firstName = session?.user.user.firstName;
  const lastName = session?.user.user.lastName;
  const userRole = session?.user.user.roles[0];
  const userID = session?.user?.user?.id;

  const handleUserProfile = async () => {
    try {
      if (!userID) {
        return;
      }
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}user/user-profile/${userID}`
      );
      if (response.status === 200) {
        setProfilePicture(response.data.profileImage);
        setNotification(response.data.appNotificationList);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    handleUserProfile();
  });

  const contactClick = () => {
    setIsOpen(!isOpen);
  };

  const [clickedNotifications, setClickedNotifications] = useState<number[]>(
    []
  );

  const handleNotiClick = () => {
    setIsOpen(false);
    router.push("/dashboard/service-provider/manage-bookings");
  };

  const handleLogOut = async () => {
    signOut({
      redirect: false,
    });

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}auth/logout`
      );
      console.log("Sign Out: ", response);

      if (response.status == 200) {
        setTimeout(() => {
          router.push("/auth/login");
        }, 800);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="max-w-7xl mx-auto relative">
      {/*Top Bar*/}

      <div
        className={`flex justify-between px-6 py-3 border-b-[1.5px] border-grey4 relative`}
      >
        <div className="flex items-center">
          <Link href="/" className={`flex justify-center items-center  p-1`}>
            <Image src={taskHub} width={120} alt="task-hub" />
          </Link>
        </div>
        <div
          className={`flex justify-around items-center bg-purpleBase rounded-md px-3 py-2 text-white space-x-4 relative`}
        >
          <div
            className={`relative cursor-pointer`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className={`text-[20px] `}>
              <MdOutlineNotifications />
            </span>

            {notification.length > 0 && (
              <span
                className={`absolute top-[-7px] right-[3px] bg-[#FE9B07] text-[8px] text-white rounded-[50%] px-[5px] py-[1px] font-bold`}
              >
                {notification.length}
              </span>
            )}
          </div>
          <div className={`relative`}>
            <span className={`text-[20px] `}>
              <FiMessageCircle />
            </span>
            {/* <span
              className={`absolute top-[-7px] right-[3px] bg-[#FE9B07] text-[10px] text-white rounded-[50%] px-[4px] py-[1px]`}
            >
              5
            </span> */}
          </div>

          <div className={``}>
            <p className={`font-extrabold text-[15px]`}>
              {firstName} {lastName}
            </p>
            <p className={`text-[12px]`}>{userRole}</p>
          </div>

          {profilePicture === "" || profilePicture === null ? (
            <span
              className={` bg-grey2 rounded-[50%] border-[2px] border-[#FE9B07]  p-2`}
            >
              <FaRegUser />
            </span>
          ) : (
            <img
              src={profilePicture}
              alt="User Portrait"
              className={`rounded-[50%] h-[40px] w-[40px] object-cover`}
              width={20}
            />
          )}

          <div className=" flex relative cursor-pointer" onClick={contactClick}>
            <ul>
              <li
                className={`text-[20px] hover:text-[#FE9B07] ${
                  (router.pathname === "/dashboard/service-provider/settings" ||
                    router.pathname ===
                      "/dashboard/service-provider/settings/change-password" ||
                    router.pathname ===
                      "/dashboard/service-provider/settings/deactivate") &&
                  "text-[#FE9B07]"
                } `}
              >
                <Link href="/dashboard/service-provider/settings">
                  <GoGear />
                </Link>
              </li>

              {/* {!isOpen ? (
                ""
              ) : (
                <div className="absolute top-[50px] ml-[-75px] w-[100px]">
                  <span className='text-purpleBase flex justify-end mb-[-12px] text-[30px]'><IoMdArrowDropup /></span>

                                    <ul className='hover: bg-purpleBase  py-2 px-4  text-[13px] flex flex-col items-center justify-center rounded-md'>

                                        <li className='py-1 px-2 my-1 hover:text-[#FE9B07]'>
                                            <Link href='/dashboard/service-provider/settings'>
                                                Settings
                                            </Link>
                                        </li>
                                        <li className='py-1 px-2 my-1 hover:text-[#FE9B07]'>
                                            <button onClick={handleLogOut}>
                                                Log out
                                            </button>
                                        </li>
                                    </ul>
                </div>
              )} */}
            </ul>
          </div>

          {/* <Link href="/dashboard/customer/settings" className={`text-[20px] hover:text-[#FE9B07] ${isLinkActive("/dashboard/customer/settings") && "text-[#FE9B07]"} `}><GoGear /></Link> */}
        </div>

        {isOpen && (
          <div className="absolute top-[100px] right-[5.8em] max-w-[230px]  z-50">
            <div className=" bg-white border-grey3 text-black  text-[12px] flex flex-col justify-end items-center rounded-lg shadow-lg border-[1px] px-2 py-3 space-y-3 transition-opacity duration-1000">
              {notification
                .slice() // Create a copy of the array to avoid mutating the original
                .sort((a, b) => {
                  // Sort by comparing the notificationTime of each notification
                  const [yearA, monthA, dayA, hourA, minuteA, secondA] =
                    a.notificationTime.map(Number);
                  const [yearB, monthB, dayB, hourB, minuteB, secondB] =
                    b.notificationTime.map(Number);

                  // Construct Date objects using UTC values
                  const dateA: Date = new Date(
                    Date.UTC(yearA, monthA - 1, dayA, hourA, minuteA, secondA)
                  );
                  const dateB: Date = new Date(
                    Date.UTC(yearB, monthB - 1, dayB, hourB, minuteB, secondB)
                  );

                  // Compare dates (reverse order for descending sorting)
                  return dateB.getTime() - dateA.getTime(); // Compare timestamps
                })
                .slice(0, 4) // Select only the first 4 notifications
                .map((notif, index) => {
                  const notificationTime = notif.notificationTime.map(Number);
                  const [year, month, day, hour, minute, second] =
                    notificationTime;

                  // Construct the Date object using UTC values
                  const notificationDate: Date = new Date(
                    Date.UTC(year, month - 1, day, hour, minute, second)
                  );

                  return (
                    <div
                      key={index}
                      className="flex flex-col items-center px-4 py-3 bg-[#F8E9FE8C] rounded-md cursor-pointer space-y-2"
                      onClick={() => handleNotiClick()}
                    >
                      <h3 className="text-justify font-bold">
                        {notif.message}
                      </h3>
                      <div className="flex justify-end w-full">
                        <p className="text-end text-[10px] text-grey5">
                          {formatDistanceToNow(notificationDate, {
                            addSuffix: true,
                          })}
                        </p>
                      </div>
                    </div>
                  );
                })}

              <button>See more</button>
            </div>
          </div>
        )}
      </div>

      {/*sidebar*/}

      <div className={`flex`}>
        <div
          className={`flex flex-col bg-purpleBase min-h-screen w-[250px] items-center`}
        >
          <div
            className={`flex flex-col items-start justify-between text-white py-20`}
          >
            <div className="mb-[20em] text-[14px]">
              <Link
                href="/dashboard/service-provider"
                className={`flex items-center gap-[10px] hover:text-[#FE9B07] mb-14 ${
                  isLinkActive("/dashboard/service-provider") &&
                  "text-[#FE9B07]"
                }`}
              >
                <RxDashboard size={16} />
                Dashboard
              </Link>
              <Link
                href="/dashboard/service-provider/profile"
                className={`flex items-center gap-[10px] hover:text-[#FE9B07]  mb-14 ${
                  isLinkActive("/dashboard/service-provider/profile") &&
                  "text-[#FE9B07]"
                }`}
              >
                <IoPersonOutline size={16} />
                Profile
              </Link>
              <Link
                href="/dashboard/service-provider/my-listings"
                className={`flex items-center gap-[10px] hover:text-[#FE9B07] mb-14 ${
                  (router.pathname ===
                    "/dashboard/service-provider/my-listings" ||
                    router.pathname ===
                      "/dashboard/service-provider/my-listings/create-listing" ||
                    router.pathname ===
                      "/dashboard/service-provider/my-listings/edit/[id]" ||
                    router.pathname ===
                      "/dashboard/service-provider/my-listings/[id]") &&
                  "text-[#FE9B07]"
                }`}
              >
                <IoClipboardOutline size={16} />
                My Listings
              </Link>
              <Link
                href="/dashboard/service-provider/manage-bookings"
                className={`flex items-center gap-[10px] hover:text-[#FE9B07] mb-14 ${
                  isLinkActive("/dashboard/service-provider/manage-bookings") &&
                  "text-[#FE9B07]"
                }`}
              >
                <TfiWallet size={16} />
                Manage Bookings
              </Link>
              <Link
                href="/dashboard/service-provider/view-jobs"
                className={`flex items-center gap-[10px] hover:text-[#FE9B07] mb-14 ${
                  isLinkActive("/dashboard/service-provider/view-jobs") &&
                  "text-[#FE9B07]"
                }`}
              >
                <GoPulse size={16} />
                View Jobs
              </Link>
              <Link
                href="/dashboard/service-provider/billings&payments"
                className={`flex items-center gap-[10px] hover:text-[#FE9B07] mb-14 ${
                  isLinkActive(
                    "/dashboard/service-provider/billings&payments"
                  ) && "text-[#FE9B07]"
                }`}
              >
                <CgBox size={16} />
                Manage Payments
              </Link>
              <Link
                href="/dashboard/service-provider/help&support"
                className={`flex items-center gap-[10px] hover:text-[#FE9B07] mb-14 ${
                  isLinkActive("/dashboard/service-provider/help&support") &&
                  "text-[#FE9B07]"
                }`}
              >
                <FiHelpCircle size={16} />
                Help and Support
              </Link>
            </div>

            <button
              className={`flex items-center gap-[10px] hover:text-[#FE9B07]`}
              onClick={handleLogOut}
            >
              <FiLogOut size={16} /> Logout
            </button>
          </div>
        </div>

        <div className="w-full flex flex-col justify-start items-center mx-auto ">
          {props.children}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default SPDashboardLayout;
