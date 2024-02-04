import React, { useState } from "react";
import { useSession } from "next-auth/react";
import axios from "axios";
import Image from "next/image";

import SPDashboardLayout from "../../../../components/spdashboardLayout";
import success from "../../../../public/success.svg";
import styles from "../../../styles/animation.module.css";

interface FormState {
  streetNumber: string;
  streetName: string;
  unitNumber: string;
  suburb: string;
  state: string;
  postCode: string;
  error1: string;
}

const Profile = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccessful, setIsSuccessful] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [notEmptyError1, setNotEmptyError1] = useState(false);

  const [formData, setFormData] = useState({
    streetNumber: "",
    streetName: "",
    unitNumber: "",
    suburb: "",
    state: "",
    postCode: "",
    error1: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    if (name === "postCode") {
      const numericValue = parseInt(value, 10);

      if (numericValue > 7999 || numericValue < 800) {
        setFormData((prevData) => ({
          ...prevData,
          error1: "Must be btw 800-7999",
        }));
        setNotEmptyError1(true);
      } else {
        // Clear the error message if the post code is within the valid range
        setFormData((prevData) => ({
          ...prevData,
          error1: "",
        }));
        setNotEmptyError1(false);
      }
    }
  };

  //   To check all required fields
  const isAllFieldsFilled = () => {
    const requiredFields: (keyof FormState)[] = [
      "streetNumber",
      "streetName",
      "suburb",
      "state",
      "postCode",
    ];
    return requiredFields.every((field) => formData[field] !== "");
  };

  //   To reset the form

  const resetForm = () => {
    setFormData({
      streetNumber: "",
      streetName: "",
      unitNumber: "",
      suburb: "",
      state: "",
      postCode: "",
      error1: "",
    });
  };

  const { data: session } = useSession();

  const firstNameValue = session?.user.user.firstName || "";
  const lastNameValue = session?.user.user.lastName || "";
  const eamilAddressValue = session?.user.user.emailAddress || "";
  const streetNumberValue = session?.user.user.address.streetNumber || "";
  const streetNameValue = session?.user.user.address.streetName || "";
  const suburbValue = session?.user.user.address.suburb || "";
  const postCodeValue = session?.user.user.address.postCode || "";
  const stateValue = session?.user.user.address.state || "";
  const unitNumberValue = session?.user.user.address.unitNumber || "";

  // To submit form

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log(formData);
    setIsLoading(true);

    const userToken = session?.user.accessToken;
    const userID = session?.user?.user.id;
    const userPhoneNumber = session?.user?.user.phoneNumber;

    const streetNumberValue = formData.streetNumber;
    const streetNameValue = formData.streetName;
    const suburbValue = formData.suburb;
    const postCodeValue = formData.postCode;
    const stateValue = formData.state;
    const unitNumberValue = formData.unitNumber;

    try {
      const response = await axios.patch(
        `${process.env.NEXT_PUBLIC_API_URL}user-crud/update`,
        {
          phoneNumber: userPhoneNumber,
          userAddress: {
            id: userID,
            streetNumber: streetNumberValue,
            streetName: streetNameValue,
            unitNumber: unitNumberValue,
            suburb: suburbValue,
            state: stateValue,
            postCode: postCodeValue,
          },
          profileImage: "",
        },
        {
          headers: {
            Authorization: `Bearer ${userToken}`,
            "Content-Type": "application/json",
          },
        }
      );

      console.log(response);
      if (response.status === 200) {
        setIsSuccessful(true);
      }
    } catch (error: any) {
      console.log("update info: ", error);
      setErrorMsg(error.message);

      setTimeout(() => {
        setErrorMsg("");
      }, 3000);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SPDashboardLayout>
      <div className="mt-16 flex flex-col justify-center items-start w-[800px] p-8 border-2 border-grey2 rounded-md">
        <h1 className="text-lg font-extrabold">Profile</h1>

        <div className="flex flex-col my-8 w-[500px]">
          <div className="flex items-center justify-between my-4">
            <label htmlFor="fullName" className="font-extrabold">
              Full Name
            </label>
            <input
              type="text"
              value={`${firstNameValue} ${lastNameValue}`}
              readOnly
              className="border-2 text-grey4 border-grey2 rounded-md p-2 w-[300px] focus:border-grey2 focus:outline-none "
            />
          </div>

          <div className="flex  items-center justify-between my-4 ">
            <label htmlFor="fullName" className="font-extrabold">
              Email
            </label>
            <input
              type="text"
              value={eamilAddressValue}
              readOnly
              className="border-2 text-grey4 border-grey2 rounded-md p-2 w-[300px] focus:border-grey2 focus:outline-none"
            />
          </div>
        </div>

        <div className="my-2 w-full h-[500px] flex justify-center items-center">
          {isSuccessful ? (
            <div
              className={`flex flex-col items-center justify-center ${styles.animation}`}
            >
              <div className={`w-[166px] h-[166px]`}>
                <Image src={success} width={200} height={200} alt="success" />
              </div>
              <p className="text-center mt-10">
                Please logout and login to effect change
              </p>
            </div>
          ) : (
            <div>
              <h2 className="text-[18px] font-extrabold my-2">Address</h2>

              <form className="my-[10px]" onSubmit={handleSubmit}>
                <div className="flex justify-between w-[700px] my-5">
                  <div className="flex flex-col">
                    <label htmlFor="streetNumber" className="font-extrabold">
                      Street Number <span className={`text-red10`}>*</span>
                    </label>
                    <input
                      type="number"
                      id="streetNumber"
                      name="streetNumber"
                      placeholder={streetNumberValue}
                      value={formData.streetNumber}
                      className="p-2 border-2 border-grey2 rounded-md w-[150px] my-3"
                      onChange={handleChange}
                    />
                  </div>

                  <div className="flex flex-col">
                    <label htmlFor="streetName" className="font-extrabold">
                      Street Name <span className={`text-red10`}>*</span>
                    </label>
                    <input
                      type="text"
                      id="streetName"
                      name="streetName"
                      placeholder={streetNameValue}
                      value={formData.streetName}
                      className="p-2 border-2 border-grey2 rounded-md w-[500px] my-3"
                      required
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="flex justify-between w-[700px] my-5">
                  <div className="flex flex-col">
                    <label htmlFor="unitNumber" className="font-extrabold">
                      Unit Number
                    </label>
                    <input
                      type="number"
                      id="unitNumber"
                      name="unitNumber"
                      placeholder={unitNumberValue}
                      value={formData.unitNumber}
                      className="p-2 border-2 border-grey2 rounded-md w-[150px] my-3"
                      onChange={handleChange}
                    />
                  </div>

                  <div className="flex flex-col">
                    <label htmlFor="suburb" className="font-extrabold">
                      Suburb <span className={`text-red10`}>*</span>
                    </label>
                    <input
                      type="text"
                      id="suburb"
                      name="suburb"
                      placeholder={suburbValue}
                      value={formData.suburb}
                      className="p-2 border-2 border-grey2 rounded-md w-[500px] my-3"
                      required
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="flex justify-between w-[700px] my-5 ">
                  <div className="flex flex-col  w-[400px]">
                    <label htmlFor="state" className="font-extrabold">
                      State <span className={`text-red10`}>*</span>
                    </label>

                    <select
                      name="state"
                      id="state"
                      value={formData.state}
                      className="p-2 border-2 border-grey2 rounded-md my-3"
                      required
                      onChange={handleChange}
                    >
                      <option value="" disabled>
                        {stateValue}
                      </option>
                      <option value="Western Australia">
                        Western Australia
                      </option>
                      <option value="Northern Territory">
                        Northern Territory
                      </option>
                      <option value="South Australia">South Australia</option>
                      <option value="Queensland">Queensland</option>
                      <option value="New South Wales">New South Wales</option>
                      <option value="Victoria">Victoria</option>
                      <option value="Tasmania">Tasmania</option>
                      <option value="Australian Capital Territory">
                        Australian Capital Territory
                      </option>
                    </select>
                  </div>

                  <div className="flex flex-col  w-[250px]">
                    <div className="flex items-center">
                      <label
                        htmlFor="unitNumber"
                        className=" flex font-extrabold  w-[150px]"
                      >
                        Post Code <span className={`text-red10 ml-1`}>*</span>
                      </label>

                      <p
                        className={`text-red10 p-2  my-0 py-0 text-[10px] w-[230px] text-justify font-bold`}
                      >
                        {formData.error1}
                      </p>
                    </div>
                    <input
                      type="number"
                      id="postCode"
                      name="postCode"
                      placeholder={postCodeValue}
                      value={formData.postCode}
                      className="p-2 border-2 border-grey2 rounded-md my-3"
                      required
                      min={800}
                      max={7999}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className={` bg-[#34a853] text-white py-4 px-6 rounded-md hover:bg-[#46694f] text-sm disabled:opacity-50`}
                  disabled={!isAllFieldsFilled() || isLoading}
                >
                  {!isLoading ? "Save Changes" : "Saving..."}
                </button>

                <div className="text-red4 text-[13px] text-center h-[20px] flex items-center justify-center my-3">
                  {errorMsg}
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </SPDashboardLayout>
  );
};

export default Profile;
