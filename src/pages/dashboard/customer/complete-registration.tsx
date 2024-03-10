import React from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useState } from "react";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

import CustomerDashboardLayout from "../../../../components/customerdashboardLayout";
import loader from "../../../../public/loader.svg";
import success from "../../../../public/success.svg";
import styles from "../../../styles/animation.module.css";

interface FormState {
  streetNumber: string;
  streetName: string;
  suburb: string;
  state: string;
  postCode: string;
  unitNumber: string;
  error1: string;
}

const CompleteRegistration = () => {
  const router = useRouter();

  const [notEmptyError1, setNotEmptyError1] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const [profilePicture, setProfilePicture] = useState(null);

  const [formData, setFormData] = useState({
    streetNumber: "",
    streetName: "",
    suburb: "",
    state: "",
    postCode: "",
    unitNumber: "",
    error1: "",
  });

  const [isLoading, setIsLaoding] = useState(false);
  const [isDone, setIsDone] = useState(false);

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

    // Update the form data with the new password or confirm password value
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
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

  //   To reset form fields after submission
  const resetForm = () => {
    setFormData({
      streetNumber: "",
      streetName: "",
      suburb: "",
      state: "",
      postCode: "",
      unitNumber: "",
      error1: "",
    });
  };

  // To submit formit

  const streetNumberValue = formData.streetNumber;
  const streetNameValue = formData.streetName;
  const suburbValue = formData.suburb;
  const stateValue = formData.state;
  const postCodeValue = formData.postCode;
  const unitNumberValue = formData.unitNumber;

  const { data: session } = useSession();
  const accessTokenValue = session?.user.accessToken;

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log(formData);
    setIsLaoding(true);

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}customer/complete?token=${accessTokenValue}`,
        {
          streetNumber: streetNumberValue,
          streetName: streetNameValue,
          suburb: suburbValue,
          state: stateValue,
          postCode: postCodeValue,
          unitNumber: unitNumberValue,
        }
      );

      if (response.status === 200) {
        setIsLaoding(false);
        router.push("/dashboard/customer");
      }
    } catch (error: any) {
      console.error(error);
      setErrMsg(error.message);
    } finally {
      resetForm();
    }
  };

  return (
    <CustomerDashboardLayout>
      <Head>
        <title>TaskHub | Complete Reg</title>
      </Head>

      <div
        className={`mt-16 flex flex-col justify-center items-start w-[900px]`}
      >
        <h1 className="text-lg font-extrabold">Complete Registration</h1>

        <div
          className={`flex justify-center items-start my-20 w-[800px] mx-auto`}
        >
          {/* {isDone ? (
            <div
              className={`flex flex-col items-center justify-center mt-10 ${styles.animation}`}
            >
              <div className={`w-[166px] h-[166px]`}>
                <Image src={success} width={166} height={166} alt="" />
              </div>
              <p className="text-center mt-10">
                Your registration is complete and your account is verified.{" "}
                <br /> Kindly log out and login to effect your verification
              </p>
            </div>
          ) : ( */}
          <div className="w-[430px] bg-white shadow-lg p-5">
            <form className={`p-5`} onSubmit={handleSubmit}>
              <div className={`flex flex-col`}>
                <label
                  htmlFor="streetNumber"
                  className={`font-bold text-[16px] my-3 flex items-center w-[500px] h-[30px]`}
                >
                  Street Number
                  <span className={`text-red10`}>*</span>
                </label>
                <input
                  type="number"
                  id="streetNumber"
                  name="streetNumber"
                  placeholder="Enter house number"
                  className={`border-medium border-[1px] text-base text-black font-bold py-3 px-5 rounded-xl w-full`}
                  value={formData.streetNumber}
                  onChange={handleChange}
                  required
                  maxLength={15}
                />
              </div>

              <div className={`flex flex-col my-3`}>
                <label
                  htmlFor="unitNumber"
                  className={`font-bold text-[16px] my-3 flex  items-center w-[500px] h-[30px] `}
                >
                  Unit Number
                </label>
                <input
                  type="text"
                  id="unitNumber"
                  name="unitNumber"
                  placeholder="Enter country name"
                  className={`border-medium border-[1px] text-base text-black font-bold py-3 px-5 rounded-xl w-full`}
                  value={formData.unitNumber}
                  onChange={handleChange}
                />
              </div>

              <div className={`flex flex-col my-3`}>
                <label
                  htmlFor="streetName"
                  className={`font-bold text-[16px] my-3 flex  items-center w-[500px] h-[30px] `}
                >
                  Street Name
                  <span className={`text-red10`}>*</span>
                </label>
                <input
                  type="text"
                  id="streetName"
                  name="streetName"
                  placeholder="Enter street name"
                  className={`border-medium border-[1px] text-base text-black font-bold py-3 px-5 rounded-xl w-full`}
                  value={formData.streetName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={`flex flex-col my-3`}>
                <label
                  htmlFor="suburb"
                  className={`font-bold text-[16px] my-3 flex  items-center w-[500px] h-[30px] `}
                >
                  Suburb
                  <span className={`text-red10`}>*</span>
                </label>
                <input
                  type="text"
                  id="suburb"
                  name="suburb"
                  placeholder="Enter town name"
                  className={`border-medium border-[1px] text-base text-black font-bold py-3 px-5 rounded-xl w-full`}
                  value={formData.suburb}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={`flex flex-col my-3`}>
                <label
                  htmlFor="state"
                  className={`font-bold text-[16px] my-3 flex  items-center w-[500px] h-[30px] `}
                >
                  State
                  <span className={`text-red10`}>*</span>
                </label>
                <select
                  name="state"
                  id="state"
                  value={formData.state}
                  className={`border-medium border-[1px] text-base text-black font-bold py-3 px-5 rounded-xl w-full`}
                  required
                  onChange={handleChange}
                >
                  <option value="" disabled>
                    --Select State--
                  </option>
                  <option value="Western Australia">Western Australia</option>
                  <option value="Northern Territory">Northern Territory</option>
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

              <div className={`flex flex-col`}>
                <div className="flex items-center">
                  <label
                    htmlFor="postCode"
                    className={`font-bold text-[16px] my-3 flex items-center border-red4 w-[120px]  h-[30px] appearance-none`}
                  >
                    Post Code
                    <span className={`text-red10`}>*</span>
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
                  placeholder="Enter Post Code"
                  className={`border-medium border-[1px] text-base text-black font-bold py-3 px-5 rounded-xl w-full`}
                  value={formData.postCode}
                  onChange={handleChange}
                  required
                  min={800}
                  max={7999}
                />
              </div>

              <div className={`flex justify-center items-center mt-10`}>
                <button
                  type="submit"
                  className={`w-full bg-purpleBase text-white py-2 px-4 rounded-md hover:bg-purple7 text-sm disabled:opacity-50`}
                  disabled={!isAllFieldsFilled() || isLoading}
                >
                  {!isLoading ? "Save Changes" : "Saving..."}
                </button>
              </div>
            </form>

            <div className="text-red4 text-[13px] text-center h-[20px] flex items-center justify-center">
              {errMsg}
            </div>
          </div>

          {/* endin)} */}
        </div>
      </div>
    </CustomerDashboardLayout>
  );
};

export default CompleteRegistration;
