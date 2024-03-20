import React, { useState, useEffect } from "react";
import { MdVerified } from "react-icons/md";
import { GrLocation, GrSearch } from "react-icons/gr";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { FaRegUser } from "react-icons/fa";
import axios from "axios";
import Head from "next/head";
import { IoClose } from "react-icons/io5";
import { useRef } from "react";
import newloader from "../../../../public/newloader.gif";
import Image from "next/image";

import CustomerDashboardLayout from "../../../../components/customerdashboardLayout";

interface FormState {
  image: File | undefined;
}

const CustomerDashboard = () => {
  const [completeReg, setCompleteReg] = useState(true);
  const [suburb, setSuburb] = useState("");
  const [state, setState] = useState("");
  const [profilePicture, setProfilePicture] = useState(null);
  const [showProfileDialogue, setShowProfileDialogue] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [responseMsg, setResponseMsg] = useState("");

  const [newPictureProfile, setNewPictureProfile] = useState<File | null>(null);

  const [formData, setFormData] = useState<{ image: File | undefined }>({
    image: undefined,
  });

  const handleUploadImg = () => {
    inputRef.current?.click();
  };

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
  });

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      if (file.type.substring(0, 5) === "image") {
        setNewPictureProfile(file);
        console.log("newp:", file);
        setFormData((prevData) => ({
          ...prevData,
          image: file,
        }));
      }
    }
  };

  const handleCloseDialogue = () => {
    setShowProfileDialogue(false);
    setNewPictureProfile(null);
  };

  // To submit form

  // const { data: session } = useSession();
  const userToken = session?.user?.accessToken;

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    console.log("formdata:", formData);
    setIsLoading(true);

    const apiFormData = new FormData();
    apiFormData.append("image", formData.image!);

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}customer/profile_picture`,
        apiFormData,
        {
          headers: {
            Authorization: `Bearer ${userToken}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (response.status === 200) {
        handleCloseDialogue();
        handleUserProfile();
      }
    } catch (error: any) {
      setResponseMsg("Error! Please try again");
    } finally {
      setIsLoading(false);
      setTimeout(() => {
        setResponseMsg("");
      }, 2000);
    }
  };
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
                className={` bg-grey3 rounded-[50%] border-2 border-[#FE9B07] border-whiten p-7 text-[80px] text-white flex justify-center items-center cursor-pointer  `}
                onClick={() => setShowProfileDialogue(true)}
              >
                <FaRegUser />
              </div>
            ) : (
              <div
                className={`w-[140px] h-[140px] rounded-[50%] border-2 relative border-[#FE9B07] flex justify-center items-center cursor-pointer`}
                onClick={() => setShowProfileDialogue(true)}
              >
                <img
                  src={profilePicture}
                  alt="customer-image"
                  className={`rounded-[50%] object-cover h-[130px]`}
                  width={130}
                />
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

              {completeReg && (
                <div className={`flex text-[13px] items-center justify-center`}>
                  <GrLocation className={`mr-1`} />
                  <p>
                    {suburb}, {state}
                  </p>
                </div>
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
              <div className="bg-white rounded-2xl w-[500px] h-[500px] flex flex-col justify-center items-center space-y-20">
                <div className=" ">
                  {newPictureProfile ? (
                    <div
                      className={`w-[250px] h-[250px]  rounded-[50%] border-2 border-[#FE9B07] flex justify-center items-center`}
                    >
                      <img
                        src={URL.createObjectURL(newPictureProfile)}
                        width={240}
                        className={`rounded-[50%] object-cover h-[240px]`}
                        alt="New Profile"
                      />
                    </div>
                  ) : (
                    <div>
                      {profilePicture === "" || profilePicture === null ? (
                        <span
                          className={` bg-grey3 rounded-[50%] border-2 border-[#FE9B07] border-whiten p-[78px] text-[80px] text-white flex justify-center items-center  `}
                        >
                          <FaRegUser />
                        </span>
                      ) : (
                        <div>
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
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {isLoading ? (
                  <div className="h-[80px]">
                    <Image src={newloader} width={80} alt="loader" />
                  </div>
                ) : (
                  <div className="flex flex-col space-y-5 h-[80px] ">
                    <form onSubmit={handleSubmit}>
                      <div
                        className={`flex w-[300px] ${
                          newPictureProfile
                            ? "justify-between"
                            : "justify-center"
                        }  items-center`}
                      >
                        <div
                          className=" cursor-pointer"
                          onClick={handleUploadImg}
                        >
                          <span className="bg-purpleBase hover:bg-purpleHover   text-white px-4 py-2 rounded-xl">
                            {newPictureProfile
                              ? " Change photo"
                              : "Upload photo"}
                          </span>
                          <input
                            type="file"
                            accept="image/*"
                            className="hidden"
                            ref={inputRef}
                            onChange={handleImageChange}
                          />
                        </div>
                        {newPictureProfile && (
                          <button
                            type="submit"
                            className="bg-[#34A853] rounded-xl py-2 px-4 text-white hover:bg-[#307243]"
                          >
                            Save
                          </button>
                        )}
                      </div>
                    </form>
                    <div className={`text-[15px] text-center text-red6 `}>
                      {responseMsg}
                    </div>
                  </div>
                )}
              </div>
            </div>

            <span
              className=" top-5 right-5 text-white text-[30px] absolute hover:text-grey5 cursor-pointer"
              onClick={handleCloseDialogue}
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
